class Accountholder:
    def __init__(self, firstName, lastName, middleName, accountType, balance, status):

        self.firstName =  firstName
        self.lastName = lastName
        self.middleName = middleName
        self.accountType = accountType
        self.balance = balance
        self.status = status

class Bank:
    def __init__(self, name , address):
        self.name = name
        self.address = address
        self.account = []
    def open_new_account(self, firstName, lastName, middleName, accountType, balance, status):
        if balance >= 100:
            temp = Accountholder(firstName, lastName, middleName, accountType, balance, status)
            self.account.append(temp)
            return f' A {accountType}, account was created for {firstName},{lastName} with balance of {balance}'
            # !create a account holder
            # !store new account holder in account list
            # !return "Account created for firstName lastName"
        else:
            return f'Insufficient deposit amount'
            # !return "Insufficient deposit amount"
    def show_account_holders(self):
        for account_holder_obj in self.account:
            print(f'{account_holder_obj.firstName}{account_holder_obj.lasttName} {account_holder_obj.balance}')



# !Definition of main that includes a while loop with menu of things user wants to do
def main():
    wellsfargo = Bank("wells fargo", "123 sesame street")
    action = 1
    while action != 6:
        print("1. Create an account")
        print('2. Print list of all account holder')
        print(" 6. Exit application")

        action = int(input('What would like to do?'))

        if (action == 1):
            firstName = input('What is the first name?')
            middleName = input('What is the middle name?')
            lastName = input('What is the last name?')
            accountType = input('What would like to open? Checking ,Saving')
            deposit = input('How much would like to deposit today?')
            wellsfargo.open_new_account(firstName, lastName, middleName, accountType, deposit, 'Status :new')

        elif(action ==2):
            wellsfargo.show_account_holders()

        elif (action == 6):
            break

main()       


