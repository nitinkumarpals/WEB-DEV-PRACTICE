from fastapi import APIRouter
from models.model import Model
from fastapi.responses import HTMLResponse 
from config.db import conn
from schemas.note import noteEntity, notesEntity

route = APIRouter()

@route.get("/")
def index():
    return {"Message":"Welcome"}

@route.post("/add")
def add_note(note:Model):
    inserted_note = conn.fastapi.notes.insert_one(dict(note))
    new_note = conn.fastapi.notes.find_one({"_id": inserted_note.inserted_id})
    return noteEntity(new_note)