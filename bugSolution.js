```javascript
//Correct usage of $inc operator with $setOnInsert
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{
$setOnInsert:{counter:0},
$inc:{counter:1}
});
//This code will create the counter field with a value of 0 if the field does not exist and then increment it. This prevents the silent failure.
```