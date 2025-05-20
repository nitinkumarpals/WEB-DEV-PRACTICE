import os
from dotenv import load_dotenv
load_dotenv()
from pymongo import MongoClient
conn = MongoClient(os.environ.get("MONGODB_URI"))