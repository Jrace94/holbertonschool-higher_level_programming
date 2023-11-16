#!/usr/bin/python3

def uniq_add(my_list=[]):
    suma = 0

    for i in range(len(my_list)):
        if i != 0:
            for j in range(i):
                if my_list[i] == my_list[j]:
                    my_list[i] = 0
        suma += my_list[i]
    return suma
