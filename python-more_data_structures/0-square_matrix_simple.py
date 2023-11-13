#!/usr/bin/python3

def square_matrix_simple(matrix=[]):
    new_matrix = []
    vector = []

    for i in matrix:
        for j in i:
            vector.append(j ** 2)
        new_matrix.append(vector)
        vector = []
    return new_matrix
