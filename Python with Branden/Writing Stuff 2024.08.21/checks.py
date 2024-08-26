import json
from characters import Mage, DarkMage, Swordsman, Flagbearer, Archer, HolySaint, Assassin
from monsters import Goblin, Skeleton, Slime, Wolf, Ork, Bear, RedOrk, GoblinShaman, Lich, King
with open("yesandno.json", "r") as file:
    data = json.load(file)
  
def check_input(user_input):
    yes = data["yes"]
    no = data["no"]
    user_input = user_input.lower()
    user_input = user_input.replace(" ", "")
    if user_input in yes:
        return 1
    elif user_input in no:
        return 0
    else:
        return "invalid input"

def check_input_v12(user_input):
    one = data["one"]
    two = data["two"]
    user_input = user_input.lower()
    user_input = user_input.replace(" ", "")
    if user_input in one:
        return 1
    elif user_input in two:
        return 2

def check_input_v1234(user_input):
    one = data["one"]
    inventory = data["inventory"]
    two = data["two"]
    move_forward = data["move_forward"]
    three = data["three"]
    stats = data["stats"]
    four = data["four"]
    leave_dungeon = data["leave_dungeon"]
    user_input = user_input.lower()
    user_input = user_input.replace(" ", "")
    if user_input in one or user_input in inventory:
        return 1
    elif user_input in two or user_input in move_forward:
        return 2
    elif user_input in three or user_input in stats:
        return 3
    elif user_input in four or user_input in leave_dungeon:
        return 4
    
def check_class(user_input):
    mage = data["mage"]
    darkmage = data["darkmage"]
    swordsman = data["swordsman"]
    flagbearer = data["flagbearer"]
    archer = data["archer"]
    holysaint = data["holysaint"]
    assassin = data["assassin"]
    one = data["one"]
    two = data["two"]
    three = data["three"]
    four = data["four"]
    five = data["five"]
    six = data["six"]
    seven = data["seven"]
    
    user_input = user_input.lower()
    user_input = user_input.replace(" ", "")
    if user_input in mage or user_input in one:
        return 1
    elif user_input in darkmage or user_input in two:
        return 2 
    elif user_input in swordsman or user_input in three:
        return 3
    elif user_input in flagbearer or user_input in four:
        return 4
    elif user_input in archer or user_input in five:
        return 5
    elif user_input in holysaint or user_input in six:
        return 6
    elif user_input in assassin or user_input in seven:
        return 7
    
def check_combat(user_input):
    one = data["one"]
    two = data["two"]
    three = data["three"]
    four = data["four"]
    five = data["five"]
    six = data["six"]
    user_input = user_input.lower()
    user_input = user_input.replace(" ", "")
    if user_input in one:
        return 1
    elif user_input in two:
        return 2 
    elif user_input in three:
        return 3
    elif  user_input in four:
        return 4
    elif user_input in five:
        return 5
    elif user_input in six:
        return 6


def check_leavedungeon(user_input):
    one = data["one"]
    return_dungeon = data["return_to_dungeon"]
    two = data["two"]
    rest = data["rest"]
    three = data["three"]
    stop_adventure = data["stop_adventure"]
    user_input = user_input.lower()
    user_input = user_input.replace(" ", "")
    if user_input in one or user_input in return_dungeon:
        return 1
    elif user_input in two or user_input in rest:
        return 2
    elif user_input in three or user_input in stop_adventure:
        return 3


def floor_check(floor_placement):
    one = data["one"]
    two = data["two"]
    three = data["three"]
    four = data["four"]
    five = data["five"]
    six = data["six"]
    seven = data["seven"]
    eight = data["eight"]
    nine = data["nine"]
    ten = data["ten"]
    floor_placement = floor_placement.lower()
    floor_placement = floor_placement.replace(" ", "")
    if floor_placement in one:
        return 1
    elif floor_placement in two:
        return 2 
    elif floor_placement in three:
        return 3
    elif floor_placement in four:
        return 4
    elif floor_placement in five:
        return 5
    elif floor_placement in six:
        return 6
    elif floor_placement in seven:
        return 7
    elif floor_placement in eight:
        return 8
    elif floor_placement in nine:
        return 9
    elif floor_placement in ten:
        return 10

def class_checker(player_class):
    if player_class == "mage":
        current_class = Mage()
    elif player_class == "darkmage":
        current_class = DarkMage()
    elif player_class == "swordsman":
        current_class = Swordsman()
    elif player_class == "flagbearer":
        current_class = Flagbearer()
    elif player_class == "archer":
        current_class = Archer()
    elif player_class == "holysaint":
        current_class = HolySaint()
    elif player_class == "assassin":
        current_class = Assassin()
