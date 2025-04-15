# Top Performers Script (Auto: Hardcoded to Yesterday)

from nba_api.stats.endpoints import scoreboardv2, boxscoretraditionalv2
import pandas as pd
import logging
import os
import json
from datetime import datetime, timedelta
import time

# === Configuration ===
OUTPUT_DIR = "./public/data"
OUTPUT_JSON_FILE = "top_performers.json"
DAYS_BACK = 5  # Always use yesterday

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Get yesterday's date
selected_date = (datetime.now() - timedelta(days=DAYS_BACK)).strftime('%Y-%m-%d')

# === Fetch game IDs for the date ===
def fetch_game_ids(date):
    logging.info(f"Fetching game IDs for {date}")
    try:
        scoreboard = scoreboardv2.ScoreboardV2(game_date=date).get_data_frames()[0]
        return scoreboard['GAME_ID'].tolist()
    except Exception as e:
        logging.error(f"Error fetching game IDs: {e}")
        return []

# === Fetch all box score logs ===
def fetch_game_logs(game_ids):
    all_logs = []
    for game_id in game_ids:
        logging.info(f"Fetching box score for game ID {game_id}")
        try:
            box = boxscoretraditionalv2.BoxScoreTraditionalV2(game_id=game_id).get_data_frames()[0]
            if not box.empty:
                all_logs.append(box)
            else:
                logging.warning(f"Empty box score for game ID {game_id}")
            time.sleep(1)  # API rate limit
        except Exception as e:
            logging.error(f"Error fetching box score for game ID {game_id}: {e}")
    if all_logs:
        return pd.concat(all_logs, ignore_index=True)
    else:
        logging.warning("All fetched box scores were empty.")
        return pd.DataFrame()

# === Custom performance score ===
def calculate_score(row):
    return (
        row['PTS'] * 1.0 +
        row['REB'] * 1.2 +
        row['AST'] * 1.5 +
        row['STL'] * 3.0 +
        row['BLK'] * 3.0
    )

# === Save to JSON ===
def save_to_json(data):
    json_path = os.path.join(OUTPUT_DIR, OUTPUT_JSON_FILE)
    logging.info(f"Attempting to save JSON to: {json_path}")
    try:
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)  # Prevent Unicode escaping
        logging.info(f"✅ Top 10 performers saved to {json_path}")
    except Exception as e:
        logging.error(f"Error saving JSON file: {e}")

# === Main Script ===
if __name__ == "__main__": 
    try:
        logging.info("Starting Top Performers script...")
        game_ids = fetch_game_ids(selected_date)
        if not game_ids:
            logging.warning(f"No games found for {selected_date}. Exiting script.")
            exit()

        game_logs = fetch_game_logs(game_ids)
        if game_logs.empty:
            logging.warning(f"No player logs found for games on {selected_date}. Exiting script.")
            exit()
        logging.info(f"Game Logs DataFrame:\n{game_logs.head()}")
        logging.info(f"Columns in Game Logs: {game_logs.columns.tolist()}")

        required_columns = ['PTS', 'REB', 'AST', 'STL', 'BLK']
        if not all(col in game_logs.columns for col in required_columns):
            logging.error(f"Missing required columns in game logs: {required_columns}. Exiting script.")
            exit()

        game_logs['Performance_Score'] = game_logs.apply(calculate_score, axis=1)
        top_performers = game_logs.nlargest(10, 'Performance_Score')
        if top_performers.empty:
            logging.warning("No top performers found. The DataFrame is empty.")
            exit()

        top_performers['Formatted_Stats'] = top_performers.apply(
            lambda row: f"{row['PTS']} pts, {row['REB']} reb, {row['AST']} ast, {row['STL']} stl, {row['BLK']} blk", axis=1
        )

        output_data = top_performers[['PLAYER_NAME', 'TEAM_ABBREVIATION', 'Formatted_Stats', 'Performance_Score']]
        json_output = output_data.to_dict(orient="records")
        logging.info(f"JSON Output:\n{json.dumps(json_output, indent=2)}")
        save_to_json(json_output)
    except Exception as e:
        logging.error(f"An error occurred: {e}")