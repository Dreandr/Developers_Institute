const mergeWords = string => string2 =>{
  if(string2 === undefined) {
   return string;
  } else {
    return mergeWords(string + " " + string2)
  }
}
mergeWords('There')('is')("a")("table")()