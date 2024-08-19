# print("Hello", end="!")

# print("Hello", "World", "Hi", " Dinosaur", sep="???")

string = "Hello World"

# print(string[0])

# print(string[5:])

# print(string[:5])

# print(string[4:9])

# name = "Te El"
# job = "Bombaclat"

# print("Hello" + name + "You are a" + job)

# print("Hello", name, "You are a", job, sep=" ", end="!")

# print(f"Hello {name} You are a {job}")

# user_input = input("Enter your name ")

# print(f"Your name is {user_input}, Go Sleep")

string = "Computers"
slice_string = slice(1,4)
print(string[slice_string])
print(string[1:4])

# split(), find(), join()
list1 = "The quick brown fox jumps over the lazy dog"
list2 = "apple,banana,cherry,date,elderberry"

# Split() - turns string into array

list11 = list1.split()
print(list11)

# Join() - turns array into string

list22 = " ".join(list11)
print(list22)

# find() - just finds what you want

long_text = "Python is fun and Python is powerful"
print(long_text.find("Python", 10))
print(long_text.find("Fish", 10))
