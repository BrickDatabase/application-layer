##############################################
# Author:                                    #
# Edward Riley                               #
##############################################

try:
    import baseAPI
except:
    print("baseAPI.py file not found. ")
    exit(1)

try:
    import baseSQL
except:
    print("baseSQL.py file not found.")
    exit(1)

try:
    import apscheduler
except: 
    print("apscheduler package not found.")
    exit(1)

try:
    import numpy
except:
    print("numpy package not found")
    exit(1)
    
try:
    import json
except:
    print("JSON package not found.")
    exit(1)

try:
    from datetime import datetime
    import time
except:
    print("Datetime or Time not found.")
    exit(1)

def convertTuple(tup):
    str =  ''.join(tup)
    return str

subredditArray = baseSQL.returnSelectAllAbbreviation()

from apscheduler.schedulers.blocking import BlockingScheduler

sched = BlockingScheduler()

# Every 11:00 AM 
# @sched.scheduled_job('cron', hour=11)

# Every 5 minutes
@sched.scheduled_job('interval', minutes=1)
def scheduled_job():

    subredditArray = baseSQL.returnSelectAllAbbreviation()

    subredditID = 1
    print(subredditArray)

    for subreddit in subredditArray:
        
        subreddit = numpy.asarray(subreddit)

        # API endpoint will crash if you go too fast, after some tests, 1 second is the optimal speed. 
        time.sleep(1)
        print(subredditID)
        
        url = "/r/" + subreddit[2] + "/about/"
        
        result = (baseAPI.getResult(url))
        submission = baseAPI.getSubmissionResult(subreddit[2])['metadata']['total_results']
        comment = baseAPI.getCommentResult(subreddit[2])['metadata']['total_results']

        #print(subreddit.capitalize() + " Subscribers:\t" + str(result['data']['subscribers']))
        #print(subreddit.capitalize() + " Active Users Count:\t" + str(result['data']['active_user_count']))
        #print(subreddit.capitalize() + " Submission:\t" + str(submission))
        #print(subreddit.capitalize() + " Comment:\t" + str(comment))

        subscribers = result['data']['subscribers']
        activeSubscribers = result['data']['active_user_count']
        date=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        baseSQL.insertRowInformation(subredditID, date, subscribers, activeSubscribers, submission, comment)
        subredditID = subredditID + 1

    baseSQL.selectAllInformation()

sched.start()
