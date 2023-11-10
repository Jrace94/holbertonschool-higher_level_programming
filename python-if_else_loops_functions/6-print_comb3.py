#!/usr/bin/python3

i = 1
cont = 2

while i < 90:
    if i % 10 == 0:
        i += cont
        cont += 1

    if i == 89:
        print("{}{}".format(i // 10, i % 10))
        break
    print("{}{}".format(i // 10, i % 10), end=", ")
    i += 1
