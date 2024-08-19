import requests

# Specify the URL of the API
url = "https://jsonplaceholder.typicode.com/users/5"

# Send a GET request to the API
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Convert the JSON response to a string
    data = response.json()

    json_string = str(data)

    name_index = json_string.find("name") + 8

    name_len = len(data["name"]) + name_index

    print(json_string[name_index:name_len])

    email_index = json_string.find("email") + 9

    email_len = len(data["email"]) + email_index

    data_string = json_string.split(",")

    print(json_string[email_index:email_len])
    # Print the type of the response before conversion (uncomment the line below if needed)
    # print(type(response.json()))  # This would show <class 'dict'>

    # Print the JSON response as a string
    # print(json_string)

else:
    # Print an error message
    print("Error: Failed to retrieve data from the API")
