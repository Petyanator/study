from app import db

class User(db.Model):
    __tablename__ = "users"

    #variable_name - db.Column(db.TYPE_OF_COLUMN)

    user_id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(50), unique = True, nullable = False)
    password = db.Column(db.String(255), nullable = False)
    previous_career = db.Column(db.String(50), nullable = False)
    is_admin = db.Column(db.Boolean, default = False)
    created_at = db.Column(db.DateTime, server_default = db.func.now())

    def to_json(self):
        return {
            "user_id": self.user_id,
            "username": self.username,
            "password": self.password,
            "previous_career": self.previous_career,
            "is_admin": self.is_admin,
            "created_at": self.created_at
        }