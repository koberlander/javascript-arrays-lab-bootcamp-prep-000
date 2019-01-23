var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){

}

function destructivelyPrependKitten(name){
  
}

function destructivelyRemoveLastKitten(){
  
}

function destructivelyRemoveFirstKitten(){
  
}

function appendKitten(name){
  
}

function prependKitten(name){
  //prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
  var prependKittens = ["Arnold", ...kittens];
  return prependKittens;
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}






