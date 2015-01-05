//get all data from a topics wikidata, and format it so it can be easily mashed to freebase
var request=require('request');

var wikidata=function(id, callback){
  var url="https://www.wikidata.org/wiki/Special:EntityData/"+qid+".json"
  request({
    uri: url,
  }, function(error, response, body) {
    var data= JSON.parse(body)
    var claims=data.entities[qid].claims
    var all= {}
    Object.keys(claims).forEach(function(k){
      claims[k].forEach(function(s){
        id= s.mainsnak.datavalue.value['numeric-id']
        if(id){
          all[id]=k
        }
      })
    })
    callback(all)
  });
}

// var qid="Q172"
// wikidata(qid, console.log)

module.exports=wikidata