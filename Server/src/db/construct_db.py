def construct_db(db):
    # Create a cursor
    # Use treadstone as the database
    cursor = db.cursor(buffered=True)
    # Create the database with if not exists
    cursor.execute("CREATE DATABASE IF NOT EXISTS treadstone")
    # Use the database
    cursor.execute("USE treadstone")
    # Create the authors table with if not exists
    cursor.execute(
        "CREATE TABLE"
        " IF NOT EXISTS "
        "authors "
        "(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),"
        " date TIMESTAMP DEFAULT CURRENT_TIMESTAMP)")

    # Create the table with if not exists
    cursor.execute(
        "CREATE TABLE"
        " IF NOT EXISTS "
        "articles "
        "(id INT AUTO_INCREMENT PRIMARY KEY,"
        "FOREIGN KEY (author) REFERENCES authors(id),"
        " title VARCHAR(255),"
        " author INT,"
        " url VARCHAR(255),"
        " urlToImage VARCHAR(255),"
        " date TIMESTAMP,"
        " content TEXT)")
    # Commit the changes
    db.commit()
    cursor.close()
