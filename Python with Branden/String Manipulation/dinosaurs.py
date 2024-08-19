# Write a program to create a new string made of an input string’s first, middle, and last character, then add 3 dashes in between each letter.
# For example: a string "Computers" will output "C---u---s"
user_input = input("Enter desirable word")
string = user_input

final_string = ""

first_character = string[0]
final_string += first_character

middle_part = len(string) // 2
middle_character = string[middle_part]
final_string += middle_character

last_character = string[-1]
final_string += last_character

print(f"{first_character}---{middle_character}---{last_character}")

# once you are able to get the result "d---s---s", replace the hardcoded string on line 4 with a user inputed string

# when taking in user input, account for if the user enters spaces or symbols before they enter a string by stripping them off