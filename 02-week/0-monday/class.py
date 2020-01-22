
# class Student:

#     def __git__():
#         print('constructor')

#     def greeting(self):

#         print('hello')

# alina = Student()
# alina.greeting()

# meryem = Student()
# meryem.greeting()

# class Animals:
#     def __init__ (self ,name):
#         self.name = name

# dog = Animals('dog')
# cat = Animals('cat')
# horse = Animals('horse')


# print(dog.name)
# print(cat.name)
# print(horse.name)


# class Student:
#     def __init__(self,name, lname):
#         self.name = name   # instance variable
#         self.lname = lname
#         print(f'Hello there {self.name} {self.lname}')
# alina = Student("alina", "belova")
# sean = Student("sean", "page")

# print(f' {alina.name} {sean.name}')

# myName = str('meryem')
# myint = int(3)

# import datetime
# class Person:
#     def __init__(self,fname,lname, birthdate, address, email,):

#         self.fname = fname
#         self.lname = lname
#         self.birthdate = birthdate
#         self.address = address
#         self.email = email
#     def age(self):
#         today = datetime.date.today()
#         age = today.year - self.birthdate.year
        
#         if today < datetime.date(today.year, self.birthdate.month, 
#         self.birthdate.day):
#             age -= 1
#         return age
# sammy = Person("Sammy", "Kry", datetime.date(1998,8,21),'susame street', 'sammy@gmail.com')
# age = sammy.age
# print(age)


# def greeting(name):
#     count = 0
#     print(f'hello {name}')
#     count += 1

# greeting('Daniella')
# greeting('Alex')
# greeting('Meryem')
# greeting('john')


# class Person:
#     def __init__(self,name):
#         self.name = name 
#         self.count = 0

#     def greeting(self):
#         print(f'Hello {self.name}')
#         self.count += 1

#     def printcount(self):
#         print(self.count)

# alina = Person('alina')
# alina.greeting()
# alina.printcount()


# Class assesment

# class Person: 
#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone

#     def greet(self, other_person):
#         print('Hello {}, I am {}!'.format(other_person.name, self.name))

# sonny = Person('Sonny', 'sonny@gmail.com', '485-485-4909')
# jordan = Person("jordan", 'jordan@gmail.com', '485-485-2323')
# sonny.greet(jordan)
# jordan.greet(sonny)
# print(f'{sonny.name},{sonny.email} ,{sonny.phone}')
# print(f'{jordan.name},{jordan.email} ,{jordan.phone}')



# class Person:
    
#   def __init__ (self, name):
#     self.name = name
#     self.count = 0
#   def greet (self):
#     self._greet()
#   def _greet (self):
#     self.count += 1
#     if self.count > 1:
#       print("Stop being so nice")
#       self.__reset_count()
#     else:
#       print("Hello", self.name)
#   def __reset_count(self):
#     self.count = 0
        
# alex = Person('alex')
# alex.greet()
# alex.greet()


# class Vsting(str):
#     def reverse(self ,name):
#         rstring = ''
#         for char in name:
#             rstring = char + rstring
#         return rstring
# myString = Vsting('hello')
# print(myString.capitalize())

# reversed = myString.reverse('hello')
# print(reversed)



# class Parent(object):
#     def implicit(self):
#         print('PARENT implicit()')
#     def override(self):
#         print('PARENT override')
#     def altered(self):
#         print('PARENT altered')

# class Child(Parent):
#     def altered(self):
#         print('CHILD, BEFORE PARENT altered()')
#         super(Child,self).altered()
#         super(Child,self).implicit()
#         print('CHILD, After PARENT altered()')
    
#     # def override(self):
# dad = Parent()
# dad.override()

# son = Child()
# son.altered()


# class Character:
#     def __init__(self,name,power,health):
#         self.name = name
#         self.power = power
#         self.health = health

# class Hero(Character):
#     def __init__(self,weapon,name ,power, health):
#         self.weapon = weapon
#         super(Hero,self).__init__(name,power,health)

# alina = Hero('pink gun','alina',3,10)
# print(alina.weapon)
# print(alina.health)

# class Vehicle:
#     def __init__(self, name, model, year):
#         self.name = name
#         self.model = model
#         self.year = year

#     def print_info(self):
#         print(f'{self.name} ,{self.model} ,{self.year}')

# car = Vehicle('Toyota','Sienna','2019')
# car.print_info()



# class Person: 
#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone
    
#     def print_countact_info(self):
#         print(f"{self.name}'s email : {self.email},Sonny phone number :{self.phone}")

    # def greet(self, other_person):
    #     print('Hello {}, I am {}!'.format(other_person.name, self.name))

# sonny = Person('Sonny', 'sonny@gmail.com', '485-485-4909')
# jordan = Person("jordan", 'jordan@gmail.com', '485-485-2323')
# sonny.greet(jordan)
# jordan.greet(sonny)
# print(f'{sonny.name},{sonny.email} ,{sonny.phone}')
# print(f'{jordan.name},{jordan.email} ,{jordan.phone}')
# sonny.print_countact_info()