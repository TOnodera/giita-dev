def loadDummyRss():
    with open('/home/python/app/api/dummy/dummy_rss.xml') as f:
        body = f.read()
        return body
