# After split each key and value pair became as one element in array
data = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

# print(type(data))
# print(data["phone"])

json_string = str(data)


name_index = json_string.find("name") + 8

name_len = len(data["name"]) + name_indexs

print(json_string[name_index:name_len])

email_index = json_string.find("email") + 9

email_len = len(data["email"]) + email_index

print(json_string[email_index:email_len])


