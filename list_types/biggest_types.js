var freebase= require("freebase")
var options={key:"AIzaSyD5GmnQC7oW9GJIWPGsJUojspMMuPusAxI", max:5000};//please dont steal
var query=[{
  "a:type": "/type/type",
  "type": "/freebase/type_profile",
  "instance_count": null,
  "a:instance_count": {
    "optional": "required",
    "value": null
  },
  "name": null,
  "id": null,
  "sort": "-instance_count"
}]

freebase.paginate(query, options, function(r){
  r.forEach(function(o){
    var arr=[o.id, o.name, o.instance_count]
    console.log(arr.join("\t"))
  })
})
