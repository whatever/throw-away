#!/usr/bin/env python3


import csv
import random

from collections import defaultdict


import numpy

def poem(mapping):
    MAX_LENGTH = 8
    summa = sum(mapping[''].values())
    

    i = 0
    p = []
    word = ''

    while word != "." and i < MAX_LENGTH:
        i += 1

        res = [
            (y, x)
            for y, x in mapping[word].items()
            if x != 0
        ]

        words = [word for word, _ in res]
        weights = [weight for _, weight in res]

        word = random.choices(random.choices(words, weights))[0]
        p.append(word)

    return " ".join(p[:-1])


if __name__ == "__main__":

    mapping = defaultdict(lambda: defaultdict(int))

    total = 0.0
    counts = defaultdict(float)

    with open("poems.csv", "r") as fi:
        reader = csv.DictReader(fi)

        for row in reader:

            words = row["poem"].split(" ")

            for i in range(len(words)-1):
                mapping[words[i]][words[i+1]] += 1

            mapping[""][words[0]] += 1
            mapping[words[-1]]["."] += 1

            for word in row["poem"].split(" "):
                counts[word] += 1
                total += 1

    mapping["."] = defaultdict(int)

    words = sorted(mapping.keys())

    m = numpy.zeros((len(mapping), len(mapping)))

    for i, prev_word in enumerate(words):
        for j, next_word in enumerate(words):
            w = mapping[prev_word][next_word]
            m[i][j] = w

    # print(m)
    print(poem(mapping))
    # for word in sorted(counts.keys()):
    #     print(word, counts[word]/total)
