class Monster:
    def __init__(self, name, health, damage, base_armor):
        self.name = name
        self.health = health
        self.damage = damage
        self.base_armor = base_armor

    def displaymonster(self):
        print("-" * 20)
        print(f"Name: {self.name}")
        print(f"Health: {self.health}")
        print(f"Damage: {self.damage}")
        print(f"Base Armor: {self.base_armor}")
        print("-" * 20)


class Goblin(Monster):
    def __init__(self):
        super().__init__(name="Goblin", health=50, damage=15, base_armor=2)

class Skeleton(Monster):
    def __init__(self):
        super().__init__(name="Skeleton", health=60, damage=20, base_armor=3)

class Slime(Monster):
    def __init__(self):
        super().__init__(name="Slime", health=40, damage=10, base_armor=1)

class Wolf(Monster):
    def __init__(self):
        super().__init__(name="Wolf", health=120, damage=30, base_armor=5)

class Ork(Monster):
    def __init__(self):
        super().__init__(name="Ork", health=200, damage=40, base_armor=10)

class Bear(Monster):  # New medium difficulty monster
    def __init__(self):
        super().__init__(name="Bear", health=180, damage=45, base_armor=8)

class RedOrk(Monster):
    def __init__(self):
        super().__init__(name="Red Ork", health=250, damage=70, base_armor=12)

class GoblinShaman(Monster):
    def __init__(self):
        super().__init__(name="Goblin Shaman", health=220, damage=60, base_armor=8)

class Lich(Monster):
    def __init__(self):
        super().__init__(name="Lich", health=300, damage=90, base_armor=10)

class King(Monster):
    def __init__(self):
        super().__init__(name="King", health=500, damage=100, base_armor=15)