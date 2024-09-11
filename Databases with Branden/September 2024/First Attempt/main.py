# pip install SQLAlchemy pymysql
import sqlalchemy
from flask import Flask

app = Flask(__name__)


db = sqlalchemy.create_engine('mariadb+pymysql://root:@localhost:3306/northwinddb', echo=True)

def get_customers():
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("SELECT * FROM customers LIMIT 0,2"))
        conn.commit()
        print(result.all())

def get_shiper_total_price_of_orders():
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("SELECT shippers.companyname, orders.shipvia, SUM(orders.freight) AS total_freight, orders.shipcountry, shippers.phone FROM shippers RIGHT JOIN orders ON orders.shipvia = shippers.shipperid GROUP BY shippers.companyname"))
        print(result.all())
        print(result.keys())
        shippers = [row[0] for row in result]
        print(shippers)

def get_various():
    returnString = ""
    with db.connect() as conn:
        result = conn.execute(
            sqlalchemy.text("SELECT firstname,lastname FROM employees")
            )
        for employee in result:
            # returnString += f"{employee[0]} {employee[1]}\n"
            returnString = f"{employee.firstname}"
            print(returnString)
        # print(returnString)


        # print(result.all())


def main():
    # get_customers()
    # get_shiper_total_price_of_orders()
    print(get_various())

if __name__ == '__main__':
    main()