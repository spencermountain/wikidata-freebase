type="/theater/theater_actor"

var freebase= require("freebase")
var options={key:"AIzaSyD5GmnQC7oW9GJIWPGsJUojspMMuPusAxI"};//please dont steal
var query=[{
  "type": type,
  "id": null
}]

freebase.paginate(query, options, function(r){
  console.log(type + "\t" + r.length)
})
