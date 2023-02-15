# OOP API
## Routes
> - By default all routes are avaible at "/".
### Add routes
> - go to routes.js
> - insert your route =>
```javascript
routes.get('/myRoute', MyRouteFunction)
``` 
> - you can use all types of routes ( get, post, delete, put,...)
## Database
### Connection
To connect API to the database u need to create .env file that will contain informations to connect. 
> - rename .env-sample to .env
> - insert your own data for connection
### Query
> - You need to import db from database.js
```javascript
import db from "./database"
``` 
> - To run query use db.query(sql, callback)
```javascript
db.query("SELECT * FROM users", (err, result, fields) => ... )
``` 

> made from: git@github.com:vmasto/express-babel.git
