# Labmda arguments : expression

# x = lambda a : a + 10

# print(x(5))

def example_method(n):
    return lambda a: a * n 

variable_example = example_method(2)

print(variable_example(15))



doubler = example_method(2)

print(doubler(10))
print(doubler(12))
print(doubler(14))


tripler = example_method(3)


print(tripler(10))
print(tripler(12))             
print(tripler(14))                                  