# class Cat(object):
#   def __init__(self, name):
#     self.name = name
#     self.friends = {}

#   def love(self, whom):
#     print "hello, %s, I am %s" % (whom, self.name)
#     self.friends[whom] = True

#   def scratch(self, whom):
#     print "rowr, %s, I, %s, am now your enemy" % (whom, self.name)
#     self.friends[whom] = False

#   def friend_count(self):
#     count = 0
#     for k, v in self.friends.items():
#       if v:
#         count = count + 1
#     return count


# milla = Cat('milla')
# milla.love('chris')
# milla.love('angela')
# milla.scratch('jeff')
# milla.love('brandy')
# milla.scratch('kathy')
# milla.love('jeff')
# milla.scratch('chris')
# milla.scratch('chris')

# string = 'bananas'
# counts_dict = {}
# for char in string:
#     counts_dict[char] = counts_dict[char] + 1
# print(counts_dict)