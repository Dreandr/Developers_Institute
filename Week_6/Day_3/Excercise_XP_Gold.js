//Excercise 1
let landscape = function()
{
 let result = "";
 let flat = function(x)
 {
   for(let count = 0; count<x; count++)
   {
     result = result + "_";
   }
 }
 let mountain = function(x)
 {
   result = result + "/"
   for(let counter = 0; counter<x; counter++)
   {
     result = result + "'"
   }
   result = result + "\\"
 }

flat(4);
mountain(4);
flat(4)
return result;
} //Output:____/''''\____
//the function carries two nested functions that are both called to alter a variable carrying an empty string. 
//When called, the first flat() will add four _ signs, as 4 is the argument passed to it and used in the loop
//Then, mountain() will add the / sign and four ' signs, as, again, 4 is the argument passed to it. It will add a closing \ sing after the ticks
//finally, the thirds flat will just repeat the output of the first one after the mountain, as we are still changing the same local -- but global within the scale of the landscape function -- variable we declared outside the scope of the nested functions

