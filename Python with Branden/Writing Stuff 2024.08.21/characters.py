class CharacterStats:
    def __init__(self, name, health, strength, intellect, agility, base_armor, damage):
        self.name = name  # Added name attribute
        self.health = health
        self.strength = strength
        self.intellect = intellect
        self.agility = agility
        self.armor = base_armor
        self.damage = damage  # Added damage attribute
    
    def displaystats(self):
        print("-" * 20)
        print("Your Stats:")
        print("-" * 20)
        print(f"Name: {self.name}")  # Display name
        print(f"Health: {self.health}")        
        print(f"Strength: {self.strength}")        
        print(f"Intellect: {self.intellect}")        
        print(f"Agility: {self.agility}")        
        print(f"Base Armor: {self.armor}")
        print(f"Damage: {self.damage}")  # Display damage
        print("-" * 20)            

class Mage(CharacterStats):
    def __init__(self):
        super().__init__(name="Mage", health=120, strength=8, intellect=22, agility=12, base_armor=8, damage=12)

class DarkMage(CharacterStats):
    def __init__(self):
        super().__init__(name="Dark Mage", health=140, strength=7, intellect=24, agility=10, base_armor=9, damage=15)

class Swordsman(CharacterStats):
    def __init__(self):
        super().__init__(name="Swordsman", health=2000, strength=18, intellect=10, agility=14, base_armor=15, damage=50)

class Flagbearer(CharacterStats):
    def __init__(self):
        super().__init__(name="Flagbearer", health=260, strength=20, intellect=8, agility=8, base_armor=20, damage=20)

class Archer(CharacterStats):
    def __init__(self):
        super().__init__(name="Archer", health=160, strength=14, intellect=12, agility=18, base_armor=12, damage=18)

class HolySaint(CharacterStats):
    def __init__(self):
        super().__init__(name="Holy Saint", health=140, strength=7, intellect=25, agility=9, base_armor=10, damage=10)

class Assassin(CharacterStats):
    def __init__(self):
        super().__init__(name="Assassin", health=90, strength=10, intellect=12, agility=24, base_armor=7, damage=22)
