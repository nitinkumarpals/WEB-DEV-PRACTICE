from bson import ObjectId
def noteEntity(item) -> dict:
    return {
        "id": str(ObjectId(item["_id"])),
        "title": item["title"],
        "description": item["description"],
        "important": item["important"]
    }

def notesEntity(items) -> list:
    return [noteEntity(item) for item in items]