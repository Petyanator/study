first_name = "Avatar"
middle_name = "Vincent"
last_name = "Beckham"

full_name = first_name + " " + middle_name + " " + last_name


print(full_name)

parts = full_name.split()

# .split() - splits your string
#.len() - 

print(parts[0])
print(parts[1])
print(parts[2])
# Print just the First name
# Print just the Middle name
# Print just the Last name

# Challenge
# Instead of hardcoded names, allow user input

full_name1 = input("Enter your full name")
parts1 = full_name1.split()
print(parts1[0])
print(parts1[1])
print(parts1[2])