#try, except, else, continue, finally, raise

numbers = [0, 1, 2, 3, "four", 5, "six", 7, 8, 00]

for number in numbers:
    try:
        result = 10 / number
        print(f" 10 divided by {number} is {result}")
    except ZeroDivisionError:
        print("CAN'T DIVIDE BY ZERO")
    except TypeError:
        print("Cannot divide integer by a string")
    finally:
        print("Finally Block")

