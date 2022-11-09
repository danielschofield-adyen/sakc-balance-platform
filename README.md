# sakc-balance-platform
Swiss Army Knife Challenge Balance Platform

How to make an API call
1. Duplicate "template.js". Add all json data here to be sent to the php file to make a call to the API endpoint
2. Duplicate "template.php". Change the url to whichever endpoint you are sending the request to
3. Get response back to your frontend js and do logic on response

See an example of this by going to [localhost]/apiCallExample.html

How to make a database call

1. Follow the same process to make a server call (i.e callServer()) with the url as dbQuery.php
2. Pass an SQL Query through to dbQuery which will execute the dbQuery and return:
   1. A JSON of search results from a SELECT db query
   2. Log out an empty error message and return a false. Use this false to handle login where you were expecting a result. A good example of this is in the registration.js/login.js files where if we receive a false response we can either add a new user or prevent login

See an example of this by going to [localhost]/apiCallExample.html => Do Database Query

FYI:
The dbConnection.php has the database connection logic in it - no need to touch this.
The dbQuery.php has the database call login in it - also no need to touch this.
