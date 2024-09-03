def pyramid_builder(a,b):
    array = []
    c = str(a)
    while len(array) < b:
        array.append(c)
        c += str(a)
        if len(array) == b:
            c = c[:-1]
            d = len(array) 
            while d > 0:
                c = c[:-1]
                array.append(c)
                d -= 1
    print(" ".join(array))

pyramid_builder(8,4)