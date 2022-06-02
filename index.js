const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Milo")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Bob")
}
function appendCat(name){

    const copycats = [...cats,"Broom"]
    return copycats;
   
}
function prependCat(name){
   const copycats =["Arnold", ...cats]
   return copycats;
}
function removeLastCat(){
  const copycats =  cats.slice(0,2);
  return copycats;
}
function removeFirstCat(){
   const copycats = cats.slice(1);
  return copycats;
}
