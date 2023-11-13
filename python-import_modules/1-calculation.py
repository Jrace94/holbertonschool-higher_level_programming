#!/usr/bin/python3
from calculator_1 import add, sub, mul, div

if __name__ == "__main__":
    print("{} + {} = {}".format(10, 5, add(10, 5)))
    print("{} - {} = {}".format(10, 5, sub(10, 5)))
    print("{} * {} = {}".format(10, 5, mul(10, 5)))
    print("{} / {} = {}".format(10, 5, div(10, 5)))
