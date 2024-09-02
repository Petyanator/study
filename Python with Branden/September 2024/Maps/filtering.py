list_of_numbers = [34,11,23,68,98,58473]
squared_numbers_list = [3, 5,  8, 12 ,18 ,23]

print(list(map(lambda x: x**3, squared_numbers_list)))

print(list(filter(lambda x:x % 2 == 0, list_of_numbers)))

print(squared_numbers_list)
# map changes list an array
print(list_of_numbers)
#filter does not change an array