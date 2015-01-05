//get all a topic's freebase data and map its mids to WD Qids..
var freebase=require('freebase')
var options={key:"AIzaSyD5GmnQC7oW9GJIWPGsJUojspMMuPusAxI"};

var fs= require("fs")
var mappings = fs.readFileSync("mappings.json", 'utf-8')
mappings=JSON.parse(mappings)

var fb_mapped=function(q,callback){
  freebase.topic(q, options, function(r){
    var all={}
    Object.keys(r.property).forEach(function(k){
      if(k=="/freebase/object_profile/linkcount"){
        return
      }
      r.property[k].values.forEach(function(v){
        if(v.id && v.id.match(/\/m\//)){
          v.id=v.id.replace(/\/m\//,'m.')
          v.id=mappings[v.id]
          if(v.id){
            all[v.id]=k
          }
        }
      })
    })
    callback(all)
  })
}

module.exports={
  query:fb_mapped,
  mappings:mappings
}
// fb_mapped("toronto", console.log)
