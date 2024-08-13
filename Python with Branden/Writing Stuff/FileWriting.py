import json

# Load JSON data from file
with open('data.json', 'r') as file:
    data = json.load(file)

# Initialize ID
ID = 1

# Access the list from the JSON data
textstore = data['textstore']

# Create a new list to store items with IDs
textstore_with_ids = []

# Modify the elements in the list
for item in textstore:
    textstore_with_ids.append({"id": ID, "text": item})
    ID += 1

# Remove the original 'textstore' key
if 'textstore' in data:
    del data['textstore']

# Add the new list with IDs to the data dictionary
data['textstore_with_ids'] = textstore_with_ids

# Write updated JSON data back to file
with open('data.json', 'w') as file:
    json.dump(data, file, indent=4)  # indent for pretty-printing
