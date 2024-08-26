# Rewrite your game into functions
import random
from characters import Mage, DarkMage, Swordsman, Flagbearer, Archer, HolySaint, Assassin
from monsters import Goblin, Skeleton, Slime, Wolf, Ork, Bear, RedOrk, GoblinShaman, Lich, King
from checks import check_class, check_combat, check_input, check_input_v12, check_input_v1234, check_leavedungeon, floor_check
def doors_choice():
    rightdoor = (random.randint(1, 2))
    print("-" * 20)
    print("What door would you like to choose?")
    print("Choose between 1 and 2")
    print("-" * 20)
    user_input = input()
    user_input = check_input_v12(user_input)
    if user_input == rightdoor:
        print("-" * 20)
        print("You are alive. You may continue your adventure")
        print("-" * 20)
        class_selection()
    elif user_input in [1, 2] and user_input != rightdoor:
        print(f"{"-" * 20}\nYou are dead. You can't continue your adventure. Press F5 to restart\nJust Kidding\nEnjoy :)\n{"-" * 20}")
        class_selection()
    else:
        print(f"{"-" * 20}\nOpen the door please\n{"-" * 20}")
        doors_choice()

def class_selection():
    print("-" * 20)
    print("Now you may choose your class:\n1. Mage\n2. Dark Mage\n3. Swordsman\n4. Flagbearer\n5. Archer\n6. Holy Saint\n7. Assassin\n")
    print("-" * 20)

    # Lists to store class-specific items
    class_inventory = []

    # User input for class selection
    print("Which class will you choose?")
    user_input = input()  
    user_input = check_class(user_input)

    # Randomly generate potion numbers
    heal_potion_lottery = random.randint(1, 3)
    mana_potion_lottery = random.randint(1, 3)

    # Weapon lottery functions for each class
    def mage_weapon_lottery(class_inventory):
        mage_lottery = random.randint(1, 4)
        if mage_lottery == 1:
            print("Oh no, You are not lucky today. You receive Beginner's Staff")
            class_inventory.append("Beginner's Staff")
        elif mage_lottery == 2:
            print("Congratulations. You have won the lottery. You've won a Staff of Wisdom")
            class_inventory.append("Staff of Wisdom")
        elif mage_lottery == 3:
            print("Your lottery machine got bugged. So, you've received a Stick")
            class_inventory.append("Stick")
        elif mage_lottery == 4:
            print("You look really smart. You've received a Book of Knowledge")
            class_inventory.append("Book of Knowledge")
        class_inventory.append(f"{heal_potion_lottery} Healing Potions")
        class_inventory.append(f"{mana_potion_lottery} Mana Potions")

    def dark_mage_weapon_lottery(class_inventory):
        dark_mage_lottery = random.randint(1, 4)
        if dark_mage_lottery == 1:
            print("Dark forces are weak today. You receive a Cursed Wand")
            class_inventory.append("Cursed Wand")
        elif dark_mage_lottery == 2:
            print("You are surrounded by dark energy. You've received a Shadow Staff")
            class_inventory.append("Shadow Staff")
        elif dark_mage_lottery == 3:
            print("You've been tricked by the darkness. You get a Broken Orb")
            class_inventory.append("Broken Orb")
        elif dark_mage_lottery == 4:
            print("The darkness embraces you. You've obtained the Necromancer's Tome")
            class_inventory.append("Necromancer's Tome")
        class_inventory.append(f"{heal_potion_lottery} Healing Potions")
        class_inventory.append(f"{mana_potion_lottery} Mana Potions")
        

    def swordsman_weapon_lottery(class_inventory):
        swordsman_lottery = random.randint(1, 4)
        if swordsman_lottery == 1:
            print("You receive a Rusty Sword")
            class_inventory.append("Rusty Sword")
        elif swordsman_lottery == 2:
            print("You've been blessed with a Steel Blade")
            class_inventory.append("Steel Blade")
        elif swordsman_lottery == 3:
            print("You find a Broken Dagger")
            class_inventory.append("Broken Dagger")
        elif swordsman_lottery == 4:
            print("The gods favor you. You've received the Excalibur")
            class_inventory.append("Excalibur")
        class_inventory.append(f"{heal_potion_lottery} Healing Potions")
        class_inventory.append(f"{mana_potion_lottery} Mana Potions")

    def flagbearer_weapon_lottery(class_inventory):
        flagbearer_lottery = random.randint(1, 4)
        if flagbearer_lottery == 1:
            print("You receive a Tattered Banner")
            class_inventory.append("Tattered Banner")
        elif flagbearer_lottery == 2:
            print("You've been awarded a Battle Standard")
            class_inventory.append("Battle Standard")
        elif flagbearer_lottery == 3:
            print("You are given an Old Flag")
            class_inventory.append("Old Flag")
        elif flagbearer_lottery == 4:
            print("The army respects you. You've received the Royal Emblem")
            class_inventory.append("Royal Emblem")
        class_inventory.append(f"{heal_potion_lottery} Healing Potions")
        class_inventory.append(f"{mana_potion_lottery} Mana Potions")

    def archer_weapon_lottery(class_inventory):
        archer_lottery = random.randint(1, 4)
        if archer_lottery == 1:
            print("You receive a Wooden Bow")
            class_inventory.append("Wooden Bow")
        elif archer_lottery == 2:
            print("You've been granted an Elven Longbow")
            class_inventory.append("Elven Longbow")
        elif archer_lottery == 3:
            print("You find a Broken Arrow")
            class_inventory.append("Broken Arrow")
        elif archer_lottery == 4:
            print("You are given the Hunter's Crossbow")
            class_inventory.append("Hunter's Crossbow")
        class_inventory.append(f"{heal_potion_lottery} Healing Potions")
        class_inventory.append(f"{mana_potion_lottery} Mana Potions")

    def holy_saint_weapon_lottery(class_inventory):
        holy_saint_lottery = random.randint(1, 4)
        if holy_saint_lottery == 1:
            print("You receive a Wooden Staff")
            class_inventory.append("Wooden Staff")
        elif holy_saint_lottery == 2:
            print("The light shines upon you. You've received the Blessed Scepter")
            class_inventory.append("Blessed Scepter")
        elif holy_saint_lottery == 3:
            print("You find a Broken Relic")
            class_inventory.append("Broken Relic")
        elif holy_saint_lottery == 4:
            print("You are blessed with the Divine Cross")
            class_inventory.append("Divine Cross")
        class_inventory.append(f"{heal_potion_lottery} Healing Potions")
        class_inventory.append(f"{mana_potion_lottery} Mana Potions")

    def assassin_weapon_lottery(class_inventory):
        assassin_lottery = random.randint(1, 4)
        if assassin_lottery == 1:
            print("You receive a Dull Dagger")
            class_inventory.append("Dull Dagger")
        elif assassin_lottery == 2:
            print("You've been given a Poisoned Blade")
            class_inventory.append("Poisoned Blade")
        elif assassin_lottery == 3:
            print("You find a Cracked Throwing Knife")
            class_inventory.append("Cracked Throwing Knife")
        elif assassin_lottery == 4:
            print("You are entrusted with the Shadow's Edge")
            class_inventory.append("Shadow's Edge")
        class_inventory.append(f"{heal_potion_lottery} Healing Potions")
        class_inventory.append(f"{mana_potion_lottery} Mana Potions")

    # Handling class selection and item distribution
    if user_input == 1:
        print("You have become a mage")
        print("-" * 20)
        mage_weapon_lottery(class_inventory)
        print("-" * 20)
        print(f"You will receive the following items:\n{class_inventory[0]}\n{class_inventory[1]}\n{class_inventory[2]}")
        player_class = Mage()
        hero_health = player_class.health
        print("-" * 20)
        print("Congratulations. Now you are ready to enter the dungeon")
        print("-" * 20)
        Player_actions(player_class, class_inventory,hero_health)
    elif user_input == 2:
        print("You have become a dark mage")
        print("-" * 20)
        dark_mage_weapon_lottery(class_inventory)
        print("-" * 20)
        print(f"You will receive the following items:\n{class_inventory[0]}\n{class_inventory[1]}\n{class_inventory[2]}")
        player_class = DarkMage()
        hero_health = player_class.health
        print("-" * 20)
        print("Congratulations. Now you are ready to enter the dungeon")
        print("-" * 20)
        Player_actions(player_class, class_inventory,hero_health)
    elif user_input == 3:
        print("You have become a swordsman")
        print("-" * 20)
        swordsman_weapon_lottery(class_inventory)
        print("-" * 20)
        print(f"You will receive the following items:\n{class_inventory[0]}\n{class_inventory[1]}\n{class_inventory[2]}")
        player_class = Swordsman()
        hero_health = player_class.health
        print("-" * 20)
        print("Congratulations. Now you are ready to enter the dungeon")
        print("-" * 20)
        Player_actions(player_class, class_inventory,hero_health)
    elif user_input == 4:
        print("You have become a flagbearer")
        print("-" * 20)
        flagbearer_weapon_lottery(class_inventory)
        print("-" * 20)
        print(f"You will receive the following items:\n{class_inventory[0]}\n{class_inventory[1]}\n{class_inventory[2]}")
        player_class = Flagbearer()
        hero_health = player_class.health
        print("-" * 20)
        print("Congratulations. Now you are ready to enter the dungeon")
        print("-" * 20)
        Player_actions(player_class, class_inventory,hero_health)
    elif user_input == 5:
        print("You have become an archer")
        print("-" * 20)
        archer_weapon_lottery(class_inventory)
        print("-" * 20)
        print(f"You will receive the following items:\n{class_inventory[0]}\n{class_inventory[1]}\n{class_inventory[2]}")
        player_class = Archer()
        hero_health = player_class.health
        print("-" * 20)
        print("Congratulations. Now you are ready to enter the dungeon")
        print("-" * 20)
        Player_actions(player_class, class_inventory,hero_health)
    elif user_input == 6:
        print("You have become a holy saint")
        print("-" * 20)
        holy_saint_weapon_lottery(class_inventory)
        print("-" * 20)
        print(f"You will receive the following items:\n{class_inventory[0]}\n{class_inventory[1]}\n{class_inventory[2]}")
        player_class = HolySaint()
        hero_health = player_class.health
        print("-" * 20)
        print("Congratulations. Now you are ready to enter the dungeon")
        print("-" * 20)
        Player_actions(player_class, class_inventory,hero_health)
    elif user_input == 7:
        print("You have become an assassin")
        print("-" * 20)
        assassin_weapon_lottery(class_inventory)
        print("-" * 20)
        print(f"You will receive the following items:\n{class_inventory[0]}\n{class_inventory[1]}\n{class_inventory[2]}")
        player_class = Assassin()
        hero_health = player_class.health
        print("-" * 20)
        print("Congratulations. Now you are ready to enter the dungeon")
        print("-" * 20)
        Player_actions(player_class, class_inventory,hero_health)
    else:
        print("Invalid choice. Please select a valid class.")
        class_selection()

def enterdungeon():
    print("-" * 20)
    print("You have entered a dungeon")
    print("-" * 20)
    print("Do you want to start your journey?\nLets hear your answer")
    print("-" * 20)
    user_input = input()
    user_input = check_input(user_input)
    if user_input == 1:
        doors_choice()
    elif user_input == 0:
        print("-" * 20)
        print("You have died due to being poor decisionmaker")
        print("-" * 20)
        enterdungeon()
    else:
        print("Invalid input")
        enterdungeon()

def Player_actions(player_class,class_inventory, hero_health):
    def inventory(hero_health):
        print("-" * 20)
        print("Welcome to your inventory")
        print("-" * 20)
        print(f"Your class is {player_class.name}")
        print("-" * 20)
        print(f"You have:\n{class_inventory[0]}\n{class_inventory[1]}\n{class_inventory[2]}")
        print("-" * 20)
        Player_actions(player_class,class_inventory, hero_health)
        print("-" * 20)
    def moveforward(player_class, class_inventory, hero_health):
        therandomdice = (random.randint(1, 20))
        print("-" * 20)
        print("You have decide to move forward")
        print("-" * 20)
        if therandomdice < 5:
            print("You had a nice walk")
            Player_actions(player_class, class_inventory, hero_health)
        elif therandomdice >= 5:
            print(f"{"-" * 20}\nCongratulations you have entered the floors.\nChoose the floor from 1 to 10 that you would like to challenge\n{"-" * 20}")
            floor_placement = input()
            floor_placement = floor_check(floor_placement)
            spawn(floor_placement, player_class, class_inventory, hero_health)

    def leavethedungeon(player_class, hero_health):
        print("You may choose from the options below:\n1. Return to the dungeon\n2. Rest(Restores your Health)\n3. Stop Your Adventure\n")
        user_input = input()
        user_input = check_leavedungeon(user_input)
        if user_input == 1 or user_input == "return":
            print("-" * 20)
            print("You have entered dungeon once again")
            print("-" * 20)
            Player_actions(player_class, class_inventory,hero_health)
        elif user_input == 2 or user_input == "rest":
            print("-" * 20)
            print("In Progress: REST")
            hero_health = player_class.health
            print("-" * 20)
            print("-" * 20)
            print(f"You have restored your Health({hero_health})")
            print("-" * 20)
            print("Do you want to rest more?\nYES/NO\n")
            print("-" * 20)
            user_input = input()
            user_input = check_input(user_input)
            if user_input == 0:
                print("-" * 20)
                print("You have entered dungeon once again")
                print("-" * 20)
                Player_actions(player_class, class_inventory,hero_health)
            elif user_input == 1:
                print("-" * 20)
                print("Taking a nap for 15 minutes")
                print("-" * 20)
                Player_actions(player_class, class_inventory,hero_health)
        elif user_input == 3:
            print("-" * 20)
            print("Your journey ends here.\nYou feel exhausted and fall asleep\nYou wake up and realise something is wrong\nIt seems like it was just a dream and you are still in the dungeon\nYou decide to continue your path of conquering the dungeon")
            print("-" * 20)
            Player_actions(player_class, class_inventory,hero_health)
    
    
    def stats(player_class, hero_health):
        if player_class.name == "Mage":
            mage = Mage()
            mage.health = hero_health
            mage.displaystats()
        elif player_class.name == "Dark Mage":
            darkmage = DarkMage()
            darkmage.health = hero_health
            darkmage.displaystats()
        elif player_class.name == "Swordsman":
            swordsman = Swordsman()
            swordsman.health = hero_health
            swordsman.displaystats()
        elif player_class.name == "Flagbearer":
            flagbearer = Flagbearer()
            flagbearer.health = hero_health
            flagbearer.displaystats()
        elif player_class.name == "Archer":
            archer = Archer()
            archer.health = hero_health
            archer.displaystats()
        elif player_class.name == "Holy Saint":
            holysaint = HolySaint()
            holysaint.health = hero_health
            holysaint.displaystats()
        elif player_class.name == "Assasin":
            assassin = Assassin()
            assassin.health = hero_health
            assassin.displaystats()
        else:
            print("Class of Clans")

            
    print("What do you want to do?")
    print("-" * 20)
    print("Actions:\n1. Inventory\n2. Move Forward\n3. Stats\n4. Leave the dungeon")
    print("-" * 20)
    user_input = input()
    user_input = check_input_v1234(user_input)
    if user_input == 1:
        inventory(hero_health)
        Player_actions(player_class, class_inventory,hero_health)
    elif user_input == 2:
        moveforward(player_class, class_inventory,hero_health)

    elif user_input == 3:
        stats(player_class,hero_health)
        Player_actions(player_class, class_inventory,hero_health)
    elif user_input == 4:
        leavethedungeon(player_class,hero_health)
    else:
        print("Invalid Input")
        Player_actions(player_class, class_inventory, hero_health)


def spawn(floor_placement, player_class, class_inventory,hero_health):
    if floor_placement == 1:
        enemystats_easy(player_class, class_inventory, hero_health)
    if floor_placement == 2:
        enemystats_easy(player_class, class_inventory, hero_health)
    if floor_placement == 3:
        enemystats_easy(player_class, class_inventory, hero_health)
    if floor_placement == 4:
        enemystats_medium(player_class, class_inventory, hero_health)
    if floor_placement == 5:
        enemystats_medium(player_class, class_inventory, hero_health)
    if floor_placement == 6:
        enemystats_medium(player_class, class_inventory, hero_health)
    if floor_placement == 7:
        enemystats_medium(player_class, class_inventory, hero_health)
    if floor_placement == 8:
        enemystats_hard(player_class, class_inventory, hero_health)
    if floor_placement == 9:
        enemystats_hard(player_class, class_inventory, hero_health)
    if floor_placement == 10:
        enemystats_boss(player_class, class_inventory, hero_health)


import random

def enemystats_easy(player_class, class_inventory,hero_health):
    randomize = random.randint(1, 3)

    if randomize == 1:
        print("You have encountered a Goblin! His stats:")
        monster_type = Goblin()
        monster_type.displaymonster()
        combatsystem(player_class, monster_type, class_inventory, hero_health)
    elif randomize == 2:
        print("You have encountered a Slime! His stats:")
        monster_type = Slime()
        monster_type.displaymonster()
        combatsystem(player_class, monster_type, class_inventory, hero_health)
    elif randomize == 3:
        print("You have encountered a Skeleton! His stats:")
        monster_type = Skeleton()
        monster_type.displaymonster()
        combatsystem(player_class, monster_type, class_inventory, hero_health)

def enemystats_medium(player_class, class_inventory,hero_health):
    randomize = random.randint(1, 3)

    if randomize == 1:
        print("You have encountered a Wolf! His stats:")
        monster_type = Wolf()
        monster_type.displaymonster()
        combatsystem(player_class, monster_type, class_inventory, hero_health)
    elif randomize == 2:
        print("You have encountered an Ork! His stats:")
        monster_type = Ork()
        monster_type.displaymonster()
        combatsystem(player_class, monster_type, class_inventory, hero_health)
    elif randomize == 3:
        print("You have encountered a Bear! His stats:")
        monster_type = Bear()
        monster_type.displaymonster()
        combatsystem(player_class, monster_type, class_inventory, hero_health)


def enemystats_hard(player_class, class_inventory,hero_health):
    randomize = random.randint(1, 3)

    if randomize == 1:
        print("You have encountered a Red Ork! His stats:")
        monster_type = RedOrk()
        monster_type.displaymonster()
        combatsystem(player_class, monster_type, class_inventory, hero_health)
    elif randomize == 2:
        print("You have encountered a Goblin Shaman! His stats:")
        monster_type = GoblinShaman()
        monster_type.displaymonster()
        combatsystem(player_class, monster_type, class_inventory, hero_health)
    elif randomize == 3:
        print("You have encountered a Lich! His stats:")
        monster_type = Lich()
        monster_type.displaymonster()
        combatsystem(player_class, monster_type, class_inventory, hero_health)

def enemystats_boss(player_class, class_inventory,hero_health):
    king = King()
    print("You have encountered the King! His stats:")
    monster_type = King()
    monster_type.displaymonster()
    combatsystem(player_class, monster_type, class_inventory, hero_health)

    
def combatsystem(player_class, monster_type, class_inventory,hero_health):

    print("-" * 20)
    print("What are your actions?")
    print("-" * 20)
    print("1. Attack\n2. Skills\n3. Items\n4. Block\n5. Dodge\n6. Escape\n")
    user_input = input()
    user_input = check_combat(user_input)
    if user_input == 1:
        attack(player_class, monster_type, class_inventory, hero_health)
    elif user_input == 2:
        skills_panel()
    elif user_input == 3:
        items()
    elif user_input == 4:
        block()
    elif user_input == 5:
        dodge()
    elif user_input == 6:
        escape()
    else:
        print("Invalid input")
        combatsystem(player_class, monster_type, class_inventory,hero_health)

def attack(player_class, monster_type, class_inventory,hero_health):
    player = player_class
    monster = monster_type
    if hero_health > 0 and monster.health > 0:
        monster.health -= player.damage
        hero_health -= monster.damage
        print(f"{type(player).__name__} attacks! {monster.name} takes {player.damage} damage. Monster health: {monster.health}")
        print(f"{type(monster).__name__} attacks! {player.name} takes {monster.damage} damage. Player health: {hero_health}")
        if hero_health <= 0 and monster.health > 0:
            print(f"{"-" * 20}\nYou have died\n{"-" * 20}")
        elif monster.health <= 0 and hero_health > 0 :
            print(f"{"-" * 20}\nYou won\n{"-" * 20}")
            print(f"{"-" * 20}\nYou have returned to the safe zone\n{"-" * 20}")
            return hero_health, Player_actions(player_class, class_inventory, hero_health)
        elif monster.health <= 0 and hero_health <= 0:
            print(f"{"-" * 20}\nYou have died\n{"-" * 20}")
        combatsystem(player_class, monster_type, class_inventory,hero_health)
    





def escape_system(player_class, class_inventory):
    print("-" * 20)
    print("You have successfully avoided enemy")
    print("You return back to the safe zone")
    print("-" * 20)
    Player_actions(player_class, class_inventory)




enterdungeon()