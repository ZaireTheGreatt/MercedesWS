import pymysql

# Database configuration
config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "test",
    "port": 3306,
}

# Database connection
connection = pymysql.connect(**config)
cursor = connection.cursor()

def create_user(first_name, last_name, email, phonenumber, password):
    try:
        # Create a user record
        sql = "INSERT INTO mercedes_benz_user (first_name, last_name, email, phonenumber, password) VALUES (%s, %s, %s, %s, %s)"
        values = (first_name, last_name, email, phonenumber, password)
        cursor.execute(sql, values)

        # Commit the changes
        connection.commit()

        return True
        
    except NameError:
        print("Error occurred while connecting to database", NameError)
        return False

    finally:
        connection.close()


def get_users():
    sql = "SELECT * FROM mercedes_benz_user"
    cursor.execute(sql)
    users = cursor.fetchall()
    return users