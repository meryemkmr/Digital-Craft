def check_triplet(a, b, c):
    return (a**2) + (b**2) == (c**2)
limit = 1000
for x in range(1, 1001):
    for y in range(x+1, 1001):
        z = limit - (x + y)
        if(check_triplet(x, y, z)):
            if x + y + z == limit:
                print(x)
                print(y)
                print(z)
                print(x * y * z)
                break




# def checkTrip(a, b, c):
#     if (a * a) + (b * b) == (c * c) :
#         return True
#     else:
#         return False
# a = 0
# while a < 500:
#     a += 1
#     b = a + 1
#     while b < 500:
#         c = 1000 - (a + b)
#         if checkTrip(a, b, c) == False :
#             b += 1
#         else:
#             product = a*b*c
#             print(a, b, c)
#             print(product)
#             break          