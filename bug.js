```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});
//This code is incorrect if counter field does not exist. If the field does not exist, $inc will not create a new field and the update will fail silently.
```