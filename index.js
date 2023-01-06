
    // var Age = document.getElementById("input-1").value
    // var  heightinput =document.querySelector(".input-4").value
    // var weightinput =document.querySelector(".input-5").value
    //  var statement  = document.querySelector(".statement")
     
    var result = document.querySelector(".result")
    var BMI,height,weight, age;




 function Calculate(){
    var  heightinput =document.querySelector(".input-4").value
    var weightinput =document.querySelector(".input-5").value
    var Age = document.getElementById("input-1").value
    var result = document.querySelector(".result")
         var statement  = document.querySelector(".statement")
  
    let  BMI = weightinput/(heightinput**2);

result.innerText = BMI

if(Age<2 || Age>120)
{
    statement.innerText = "Please Provide an age between 2 to 120"
    
}

if(BMI<16)
{
    statement.innerText="Severe Thinness"
}
if(BMI>16 && BMI<17)
{
    statement.innerText="Moderate Thinness"
}
if(BMI>17 && BMI<18.5)
{
    statement.innerText="Mild Thinness"
}
if(BMI>18.5 && BMI<25)
{
    statement.innerText="normal"
}
if(BMI>25 && BMI<30)
{
    statement.innerText="overweight"
}

 }


 function Clear(){
 document.getElementById("input-1").value="" 
    document.querySelector(".input-4").value="" 
   document.querySelector(".input-5").value="" 
 }


