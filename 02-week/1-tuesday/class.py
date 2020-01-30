# class Student:
#     def __init__(self,name, lname, campus):
#         self.name = name   # instance variable
#         self.lname = lname
#         self.campus = campus

#     def printStudents(self):
#         print(f'Hello there {self.name} {self.lname} campus :{self.campus}')

# class Campus(object):
#     def __init__(self):
#         self.students = []
#     def addStudent(self, firstName, lastName, campus):
#         temp  = Student(firstName, lastName, campus)
#         self.students.append(temp)
#     def printSomeStudent(self,index):
#         print(self.students[index])
#         return self.students[index]
#     def showCurrentStudent(self):
#         for studentObject in self.students :
#             print(f"{studentObject.firstName} {studentObject.lastName} campus: {studentObject.campus}")




# houston = Campus()
# houston.addStudent('alina', "belova",'houston')
# houston.addStudent("sean", "page","houston")
# # houston.showCurrentStudent()
        
# alina = Student("alina", "belova",'houston')
# sean = Student("sean", "page",'houston')
# studentObj = houston.printSomeStudent(0)
# studentObj.printStudents()
# print(f' {alina.name} {sean.name}')




