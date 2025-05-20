from pydantic import BaseModel


class Model(BaseModel):
    title: str
    description: str
    important: bool