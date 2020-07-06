# API-REST: Items CRUD (where items are some product for sale)


After you have downloaded or cloned the project, run dependencies instalation:
```
> npm install
```

Inside the ./utils folder there´s a file containing que requests configurations for Postman. It is recomendable to import it from Postman as all request for the excercise are already configured, considering authentication with a valid token so the API can be evaluated


![Postman](/images/postman.png)

Se creará una colección con las peticiones:
A new collection will be created with the requests

    * ITEMS
        * GET Items: returns the list of all item.
        * GET Items by Id: returns an item, providing its id
        * POST Item: creates and adss an item to the items collection
        * PUT Item: updates the item information, providing its Id. All fields are mandatory
        * DELETE Item: deletes an item from the collection, providing its id
    * LOGIN
        * POST Item: allows the user verification providing an email and password to the already registered collection.




