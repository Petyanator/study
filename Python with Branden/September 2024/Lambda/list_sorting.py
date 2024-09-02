# sort() - will modify the list in place
# sorted() - will return a new list and not change the original

people = [
    {"name": "Bruce Wayne", "salary": 7_000_000, "age":56},  
    {"name": "Nickolas Cage", "salary":  9_000_000, "age": 34},
    {"name": "Ryan Gosling", "salary":  12_000_000, "age": 85}
]

print(sorted(people, key = lambda person: person["age"]))
people.sort(key = lambda person: person["salary"])
print(people)