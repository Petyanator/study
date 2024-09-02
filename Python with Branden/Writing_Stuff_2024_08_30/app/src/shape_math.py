# TODO Calculate the square of 2 numbers
import math
def square(x):
    return x*x


# Calculate the area of a trapezoid
def area_trapezoid(a,b,h):
    return ((a+b)/2) * h
import math

def square(x):
    return x * x

def area_trapezoid(a, b, h):
    return (a + b) * h / 2

def area_triangle(base, height):
    return (base * height) / 2

def area_cylinder(radius, height):
    return 2 * math.pi * radius * (radius + height)

def area_sphere(radius):
    return 4 * math.pi * radius * radius

def volume_cube(side):
    return side ** 3

def volume_cone(radius, height):
    return (1/3) * math.pi * radius * radius * height

def volume_sphere(radius):
    return (4/3) * math.pi * radius ** 3
