import random
print("You are in a dungeon\nThere are two doors \nChoose one of them")
rightdoor = (random.randint(1, 2))
user_input = int(input("Choose your door\nChoices: 1 or 2\n"))
while True:
    if user_input == rightdoor:
        print("Congratulations. \nYou are alive \nThere are two items infront of you \nDo you want to take a look at them?")
        yes_or_no = input("YES/NO\n")
        yes_or_no = yes_or_no.upper()
        if yes_or_no == "YES":
            print("Choose:\nRod of Ages\nOR\nSword of Might")
            weapon_choice = int(input("Pick your weapon\nChoose between 1 and 2\n"))
            winboss = int(random.randint(1, 2))
            if weapon_choice == 1:
                print("You have received a Rod of Ages. You have become a wise mage.\nDo you want to challenge a final boss?")
                bossdecision_mage = input("YES OR NO?\n")
                bossdecision_mage = bossdecision_mage.upper()
                if bossdecision_mage == "YES":
                    winbossnumber = int(input("You have two choices and they will determine your victory\nChoose between 1 and 2\n"))
                    if winboss == winbossnumber:
                        print("You have won. Congratulations. Please send me money")
                        break
                    else:
                        print("Such a shame. You have lost. Still, please send me money")
                        break
                elif bossdecision_mage == "NO":
                    print("You decided not to challenge a boss and have safely returned to your home")
                    break
            if weapon_choice == 2:
                print("You have received a Sword of Might. You have become a powerful swordsman.\nDo you want to challenge a final boss?")
                bossdecision_sword = input("YES OR NO?\n")
                bossdecision_sword = bossdecision_sword.upper()
                if bossdecision_sword == "YES":
                    winbossnumber2 = input("You have two choices and they will determine your victory\nChoose between 1 and 2\n")
                    if winboss == winbossnumber2:
                        print("You have won. Congratulations. Please send me money")
                        break
                    else:
                        print("Such a shame. You have lost. Still, please send me money")
                        break
                elif bossdecision_sword == "NO":
                    print("You decided not to challenge a boss and have safely returned to your home")
                    break
        elif yes_or_no == "NO":
            print("You have died due to being unable to make a choice")    
        break
    else:
        print("You have died. Reason: Behind the door was Minotaur")
        break