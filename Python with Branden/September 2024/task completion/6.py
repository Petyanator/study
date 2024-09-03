def palindrome(a):
    a = str(a)
    b = a[::-1]
    if b == a:
        print(f"{a} is a palindrome")
    else:
        print(f"{a} is not a palindrome")
palindrome(10101)