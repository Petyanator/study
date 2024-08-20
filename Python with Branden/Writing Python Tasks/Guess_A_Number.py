import random
random_number = (random.randint(1, 10))
guess_attempts = 1
while True:
    user_input = int(input("Try to guess a number "))
    if user_input == random_number:
        print(f"You've won. Number of attempts:{guess_attempts}")
        break
    else:
        print("Try again")
        guess_attempts += 1
