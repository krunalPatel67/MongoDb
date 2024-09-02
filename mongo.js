use iant

db.user.insert({name:"leanne Fraham",username:"bret",email:"sincer@april.biz"})
db.user.insert({name:"ervin howell",username:"antonette",email:"shanna@melissa.tv"})
db.user.insert({name:"clementine bauch",username:"samantha",email:"nathan@yesenia.net"})

db.user.find()
db.user.findOne()
db.user.find().count()
db.user.find().skip(4)
db.user.find().sort({"name":1})
db.user.find().sort({"name":-1})

db.user.find({isbn:6677})

//--------------------------------Query operater-----------------------------------

$eq
$ne
$gt
$gte
$lt
$lte
$in
$nin


$eq
db.books.find({field:{$eq:value}})
db.books.find({isbn:{$eq:9988}})
db.books.find({"author.callname":{$eq:'rama'}})
db.books.find({isbn:9988})

$ne
db.books.find({field:{$ne:value}})
db.books.find({isbn:{$ne:9988}})
db.books.find({isbn:9988})

$gt
db.books.find({"author.profile.books":{$gt:'2'}})
db.books.find({"author.profile.books":{$gt:'2'}}).count()

$gte
db.books.find({"author.profile.books":{$gte:2}})
db.books.find({"author.profile.books":{$gte:2}}).count()

$lt
db.books.find({"author.profile.books":{$lt:2}})
db.books.find({"author.profile.books":{$lt:2}}).count()


$lte
db.books.find({"author.profile.books":{$lt:2}})
db.books.find({"author.profile.books":{$lt:2}}).count()

$in
db.books.find({"tags":{$in:['jenkins']}})
db.books.find({"tags":{$in:['programing','jenkins']}})
db.books.find({"tags":{$in:['programing']}})


$nin

db.books.find({"tags":{$nin:['jenkins']}})
db.books.find({"tags":{$nin:['programing']}})
db.books.find({"tqags":{$nin:['programing','jenkins']}})

  //-------------------------------------------------
  logical operator
  //----------------------------------------------------

  $and
  $or
  $not
  $nor

  //syntax
  //db.collection.find({<logical_operator>:[{exp1},{exp2},{exp3}]})

  db.user.find({<logical operator>:[{exp1},{exp2},{exp3}]})

  and:
  db.books.find({$and:[{no_of_reviews:{$gt:2}},{tags:'programming'}]})


  or:
  db.books.find({$or:[{no_of_reviews:{$gt:2}},{tags:'programming'}]})


  not:
  db.books.find({no_of_reviews:{$not:{$gt:2}}})


  nor:
  db.books.find({$nor:[{no_of_reviews:{$gt:2}},{tags:'programming'}]})



      // ------------------------------update---------------------------------
      
  update
  
  db.collection.update(query,update,Option)
  
  db.books.update({$set:{no_of_reviews:1}})
  db.books.update({no_of_reviews:1})
  db.books.update({isbn:9988},{$set:{no_of_reviews:10}})
  db.books.update({isbn:9988},{$set:{price:150}})
  db.books.updateMany({isbn:6677},{$set:{'author.profile.courses':12}})

        // ------------------------------temp---------------------------------
        use temp
        db.dropdatabases()
        db.books.update({isbn:9988},{$set:{price:150}})
        db.books.update({isbn:9988},{$unset:{price:0}})

        db.books.update({isbn:9988},{$unset:{'author.callname':0}})

        db.books.updateMany({},{$unset:{'author.callname':0}})

        db.books.update({isbn:9988},{$rename:{'no_of_reviews':'reviews'}})
        db.books.updateMany({},{$rename:{'no_of_reviews':'reviews'}})

        db.books.update({isbn:9988},{$mul:{'author.profile.courses':2}})
        db.books.updateMany({},{$mul:{'author.profile.courses':2}})

        db.books.update({isbn:9988},{$inc:{'author.profile.books':8}})
        db.books.updateMany({},{$inc:{'author.profile.books':8}})

        db.books.find({isbn:9988})






db.books.find({},{no_of_reviews:1,title:1,_id:0})


db.books.find({no_of_reviews:{$gte:3}},{no_of_reviews:1,title:1,_id:0})



db.books.find({no_of_reviews:{$gte:3}},{no_of_reviews:1,title:1,'author.callname':1,_id:0})


