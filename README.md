
#Ontology-alignment between wikidata & freebase

*match up largest freebase types to wikidata collections

*line-up freebase properties to wikidata properties


#Justification

if freebase says:
````
ronald reagan - /people/person/nationality - america
````
and wikidata says:
````
ronald reagan - P27 - america
````

running this comparison over a lot of topics, we can statistically unite 'P27' and '/people/person/nationality' over every property in both projects.


see [a list of all relevant freebase properties](https://docs.google.com/spreadsheets/d/1USoyyvgouOK8t7PjtP_yveVbKM2WZI64lhtvhG0oj3Y/edit#gid=0)


see [a list of all wikidata properties](https://www.wikidata.org/wiki/Wikidata:List_of_properties/all)

#usage
To mash up the freebase & wikidata results for a given topic:
````bash
git clone git@github.com:spencermountain/wikidata-freebase.git
cd wikidata-freebase
npm install
````

````bash
node ./compare Toronto
````