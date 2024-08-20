import re
user_input = input("Type in a word ")
user_input = user_input.lower()
user_input = re.sub(r'[^a-zA-Z0-9]', '', user_input) 
reversed_word = user_input[::-1]
if user_input == reversed_word:
    print(f"True, Your Word is {user_input} and Reversed Version is {reversed_word}")
else:
    print(f"False, Your Word is {user_input} and Reversed Version is {reversed_word}")