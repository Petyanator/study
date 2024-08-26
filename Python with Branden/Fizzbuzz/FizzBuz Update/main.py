def fizz_buzz(n):
    fizz_buzz_dict = {
        3: "Fizz",
        5: "Buzz"
    }
    for i in range(1, n + 1):
        output = ""
        
        for key in fizz_buzz_dict:
            if i % key == 0:
                output += fizz_buzz_dict[key]

        if not output:
            output += str(i)
        
        print(output)


user_input = input("Please enter a number ")
if user_input.isdigit():
    print(fizz_buzz(int(user_input)))
else:
    print("Invalid input")
