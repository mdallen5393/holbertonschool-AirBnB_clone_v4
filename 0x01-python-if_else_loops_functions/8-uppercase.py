#!/usr/bin/python3


def uppercase(str):
    newStr = ""
    for char in str:
        if ord(char) >= 97 and ord(char) <= 122:
            newStr = newStr + chr(ord(char) - 32)
        else:
            newStr = newStr + char
    print("{}".format(newStr))
