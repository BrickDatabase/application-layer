##############################################
# Author:                                    #
# Edward Riley                               #
##############################################

import os
import psycopg2

try:
    data_url = os.getenv('DATABASE_URL',default='postgres://localhost/postgres')
    databaseVar = psycopg2.connect(data_url)
    #databaseVar = psycopg2.connect("dbname=debmmkg6sk66rs user=xmmgkpiirxvzxb password")
    databaseVar.autocommit = True
    databaseVar.set_session(autocommit=True)


except:
    print("Database Connection Failed")
    exit(2)


def selectAllInformation():
    mycursor = databaseVar.cursor()
    mycursor.execute("SELECT * FROM information")
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)

def returnSelectAllAbbreviation():
    mycursor = databaseVar.cursor()
    mycursor.execute("SELECT * FROM lookup")
    myresult = mycursor.fetchall()
    return myresult

def insertRowInformation(id, date, subscribers, activeSubscribers, submission, comment):
    mycursor = databaseVar.cursor()
    mycursor.execute("INSERT INTO information (subreddit_id, date, subscribers, active_subscribers, submission, comments) VALUES ('" + str(id) + "', '"+ str(date) + "', '" + str(subscribers) + "', '" + str(activeSubscribers) + "', '" + str(submission) + "', '" + str(comment) + "');")

def insertSubreddit(fullname, subreddit):
    tupleVar = (fullname, subreddit)
    mycursor = databaseVar.cursor()
    mycursor.execute("INSERT INTO lookup (name, abbreviation) VALUES(%s, %s)", tupleVar)

def deleteSubreddit(id):
    mycursor = databaseVar.cursor()
    mycursor.execute("DELETE from lookup WHERE id = " + str(id) + ";")
    mycursor.execute("DELETE from information WHERE subreddit_id = " + str(id) + ";")