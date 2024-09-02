import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../src')))
# Now you can import shape_math
import shape_math
import math
# TTD - TEST DRIVEN DEVELOPMENT


def test_squaring_number():
    assert shape_math.square(5) == 25
    assert shape_math.square(-3) == 9
    assert shape_math.square(10) == 100

def test_area_trapezoid():
    assert shape_math.area_trapezoid(3, 5, 4) == 16
    assert shape_math.area_trapezoid(2, 7, 10) == 45
    assert shape_math.area_trapezoid(16, 20, 100) == 1800

def test_area_triangle():
    assert shape_math.area_triangle(7, 4) == 14
    assert shape_math.area_triangle(10, 5) == 25
    assert shape_math.area_triangle(12, 4) == 24

def test_area_cylinder():
    assert math.isclose(shape_math.area_cylinder(3, 5), 150.79644737231007)
    assert math.isclose(shape_math.area_cylinder(7, 10), 747.6990515543707)
    assert math.isclose(shape_math.area_cylinder(1, 2), 18.84955592153876)

def test_area_sphere():
    assert math.isclose(shape_math.area_sphere(3), 113.09733552923255)
    assert math.isclose(shape_math.area_sphere(7), 615.7521601035994)
    assert math.isclose(shape_math.area_sphere(1), 12.566370614359172)

def test_volume_cube():
    assert shape_math.volume_cube(3) == 27
    assert shape_math.volume_cube(7) == 343
    assert shape_math.volume_cube(1) == 1

def test_volume_cone():
    assert math.isclose(shape_math.volume_cone(3, 5), 47.12388980384689)
    assert math.isclose(shape_math.volume_cone(7, 10), 513.1268000863329)
    assert math.isclose(shape_math.volume_cone(1, 2), 2.0943951023931953)

def test_volume_sphere():
    assert math.isclose(shape_math.volume_sphere(3), 113.09733552923255)
    assert math.isclose(shape_math.volume_sphere(7), 1436.7550402417319)
    assert math.isclose(shape_math.volume_sphere(1), 4.1887902047863905)







