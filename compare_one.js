var do_wikidata=require("./wikidata")
var do_freebase=require("./freebase")
var freebase=require("freebase")
var options={key:"AIzaSyD5GmnQC7oW9GJIWPGsJUojspMMuPusAxI"};

var finish=function(fb_data, wd_data){
  var overlap= Object.keys(wd_data).filter(function(k){
    return fb_data[k]
  })
  var learned={}
  overlap.forEach(function(k){
    if(learned[wd_data[k]] && learned[wd_data[k]] != fb_data[k]){
      delete learned[wd_data[k]]
    }else{
      learned[wd_data[k]]=fb_data[k]
    }
  })
  return {
    wd_facts:Object.keys(wd_data).length,
    fb_facts:Object.keys(fb_data).length,
    overlapping_facts:overlap.length,
    property_matches:learned
  }
}

var compare=function(q, callback){
  freebase.lookup(q, options, function(o){
    var mid=o.mid || ''
    var qid=do_freebase.mappings[mid.replace(/\/m\//,'m.')]
    var results=0
    var wd_data, fb_data;
    do_freebase.query(mid, function(r){
      fb_data=r
      results+=1
      if(results>=2){
        return callback(finish(fb_data, wd_data))
      }
    })
    do_wikidata(qid, function(r){
      wd_data=r
      results+=1
      if(results>=2){
        return callback(finish(fb_data, wd_data))
      }
    })

  })
}
// compare("bill clinton", console.log)
module.exports=compare