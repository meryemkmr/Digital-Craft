# Class assesment

# class Person: 
#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone

#     def greet(self, other_person):
#         print(f'Hello {other_person.name}, I am {self.name}!')

# sonny = Person('Sonny', 'sonny@gmail.com', '485-485-4909')
# jordan = Person("jordan", 'jordan@gmail.com', '485-485-2323')
# sonny.greet(jordan)
# jordan.greet(sonny)
# print(f'{sonny.name},{sonny.email} ,{sonny.phone}')
# print(f'{jordan.name},{jordan.email} ,{jordan.phone}')


# class Vehicle:
#     def __init__(self, name, model, year):
#         self.name = name
#         self.model = model
#         self.year = year

#     def print_info(self):
#         print(f'{self.name} ,{self.model} ,{self.year}')

# car = Vehicle('Toyota','Sienna','2019')
# car.print_info()


class Person:
    greeting_count = 0 
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        Person.greeting_count +=1
    
    def print_countact_info(self):
        print(f"{self.name}'s email : {self.email},{self.name}'s phone number :{self.phone}")

    def greet(self, other_person):
        print('Hello {other_person.name}, I am {self.name}!')
    def add_friend(self,friend):
        self.friends.append(friend)

    def __str__(self):
        return f'Person: {self.name} {self.email} {self.phone}'

sonny = Person('Sonny', 'sonny@gmail.com', '485-485-4909')
jordan = Person("jordan", 'jordan@gmail.com', '485-485-2323')
john = Person('john', 'john@gmail.com', '485-485-1111')
print(Person.greeting_count)
sonny.greet(jordan)
print(Person.greeting_count)
jordan.greet(sonny)
print(Person.greeting_count)
print(f'{sonny.name},{sonny.email} ,{sonny.phone}')
print(f'{jordan.name},{jordan.email} ,{jordan.phone}')
sonny.print_countact_info()
jordan.add_friend(sonny)
jordan.add_friend(john)
print(len(jordan.friends))
print(sonny.__str__())