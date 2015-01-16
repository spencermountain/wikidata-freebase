//learn property matches over a large number of topics
var topics= require("./popular_topics").data
var compare_one= require("./compare_one")
var async=require("async")
require("dirtyjs")

var compare_all=function(){
  var doit=function(t,cb){
    console.log(t)
    compare_one(t, function(r){
      return cb(null, r)
    })
  }
  async.mapLimit(topics, 2, doit, function(err, list){
    console.log(list)
    console.log("---")
    console.log("---")
    console.log("---")
    console.log("---")
    console.log("---")
    var all={}
    list.forEach(function(o){
      Object.keys(o.property_matches).forEach(function(k){
        if(!all[k]){
          all[k]=[]
        }
        all[k].push(o.property_matches[k])
      })
    })
    Object.keys(all).forEach(function(k){
      all[k]=all[k].topk()
    })
    console.log(JSON.stringify(all, null, 2));
  });

}

compare_all()