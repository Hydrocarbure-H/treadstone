import markdown2 as markdown
import os
import datetime


def process_data(db):
    """
    Process the data from the data/articles folder and save it to the database
    :param db: The database connection
    :return: None
    """
    # Get all the files
    files = list_files()
    # Loop through the files
    for file in files:
        # Get the data from the file
        data = get_data_from_file(file)
        # Save the data to the database
        save_data_to_db(db, data)


def get_data_from_file(file_name):
    """
    Get the data from the file
    :param file_name: The file name
    :return: The data
    """
    # Open the file
    result = dict()
    with open("data/articles/" + file_name, "r") as file:
        # Read the file
        data = file.read()
        # Get the file creation datetime
        date = os.path.getctime("data/articles/" + file_name)
        dt_c = datetime.datetime.fromtimestamp(date)

        # Set the date with the SQL datetime format
        result["date"] = dt_c.strftime("%Y-%m-%d %H:%M:%S")
        # Set the title with first occurence of # in the file and remove the space just before the title
        result["title"] = data.split("#")[1].split("\n")[0][1:]
        # Set the author with first occurence of ## in the file and remove the space just before the name
        result["author"] = data.split("##")[1].split("\n")[0][1:]
        # Remove the first 2 lines of the file
        data = data.split("\n")[2:]
        # Convert it to HTML, with Fence code blocks and add syntax highlighting, linguist
        result["content"] = markdown.markdown("\n".join(data),
                                              extras=["fenced-code-blocks", "code-friendly"])
        # Return the result
        return result


def save_data_to_db(db, data):
    """
    Save the data to the database
    :param db: The database connection
    :param data: The data
    """
    # Create a cursor
    cursor = db.cursor(buffered=True)
    # Use the treadstone database
    cursor.execute("USE treadstone")

    # Check if the author exists
    cursor.execute("SELECT * FROM authors WHERE name = '" + data["author"] + "'")
    # Check the line count
    if cursor.rowcount == 0:
        # Insert the author into the database
        cursor.execute("INSERT INTO authors (name) VALUES ('" + data["author"] + "')")
        # Get the id of the author
        cursor.execute("SELECT id FROM authors WHERE name = '" + data["author"] + "'")
        # Set the author id
        author_id = cursor.fetchone()[0]
    else:
        # Set the author id
        author_id = cursor.fetchone()[0]

    # Check if the article exists
    cursor.execute("SELECT * FROM articles WHERE title = '" + data["title"] + "'")
    # Check the line count
    print(data)
    if cursor.rowcount == 0:
        # Insert the article into the database
        cursor.execute("INSERT INTO articles "
                       "(title, author, content, date) "
                       "VALUES "
                       "(%s, %s, %s, %s)",
                       (str(data["title"]), author_id, str(data["content"]), str(data["date"])))

    else:
        # Update the article
        cursor.execute("UPDATE articles SET "
                       "title = %s, author = %s, content = %s, date = %s "
                       "WHERE title = %s",
                       (str(data["title"]), author_id, str(data["content"]), str(data["date"]), str(data["title"])))

    # Commit the changes
    db.commit()
    cursor.close()


def list_files():
    """
    List all the files in the data/articles folder
    :return: The files
    """
    # Get all the .md files in the data/articles folder
    files = os.listdir("data/articles")
    # Return the files
    return files
