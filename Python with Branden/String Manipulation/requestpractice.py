import requests

# Specify the URL of the API
url = "https://jsonplaceholder.typicode.com/users/1"

# Send a GET request to the API
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Convert the JSON response to a string
    json_string = str(response.json())

    # Print the type of the response before conversion (uncomment the line below if needed)
    # print(type(response.json()))  # This would show <class 'dict'>

    # Print the JSON response as a string
    print(json_string)

else:
    # Print an error message
    print("Error: Failed to retrieve data from the API")
