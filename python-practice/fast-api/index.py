from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
app = FastAPI()

class Tea(BaseModel):
    id:int
    name:str
    origin:str

teas: List[Tea] = []

@app.get("/",status_code=200)
def read_root():
    return {"Message":"Welcome"}

@app.get("/teas")
def get_teas():
    return teas

@app.post('/add')
def add_tea(tea:Tea):
    teas.append(tea)
    return {"Message":f"Tea added {tea}"}

@app.put('/add/{tea_id}')
def update_tea(tea_id:int,updated_tea:Tea):
    for index,tea in enumerate(teas):
        if tea.id == tea_id:
            teas[index] = updated_tea
            return updated_tea
    return {"error":"tea not found"}

@app.delete("/delete/{tea_id}")
def delete_tea(tea_id:int):
    for index,tea in enumerate(teas):
        if tea.id == tea_id:
            deleted = teas.pop(index)
            return deleted
    return {"error":"tea not found"}

