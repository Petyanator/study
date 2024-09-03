def pyramid_builder_v2(a):
    b = "*"
    for c in range(a + 1):
        print(b * c)
    for c in range(a - 1, 0, -1):
        print(b * c)

pyramid_builder_v2(7)