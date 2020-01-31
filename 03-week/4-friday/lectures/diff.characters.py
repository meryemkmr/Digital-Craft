def different(str1,str2):
    for char in str2:
        if char in str1:
            pass
        else:
            return char
print(different('abcd','abcde'))