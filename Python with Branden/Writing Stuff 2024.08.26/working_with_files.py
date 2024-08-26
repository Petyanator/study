# import os

# print(os.listdir())

# Creating a new file
# with open('some_file.txt', "w") as file:
#     data = "Changed Strings"
#     file.write(data)

# Reading file
# with open('some_file.txt', "r") as file:
    # data = file.read()
    # print(data)
    # print(type(data))


import os 

# for entry in os.listdir():
    # # if os.path.isdir(entry):
        # # print(entry)

# try:
    # os.mkdir('example_folder')
# except Exception as e:
    # print(e)

try:
    os.makedirs('top/mid/bottom/jungle/supprt')
except Exception as e:
    print(e)