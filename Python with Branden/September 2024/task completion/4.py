def even_number_find(a,b):
    c = a
    array =[]
    while c < b:
        if c % 2 == 0:
            array.append(c)
        c += 1

    print(array)

even_number_find(10, 25)

    


