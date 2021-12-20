//get the form and add event lister to the form 

let formsub = document.getElementById("age");
formsub.addEventListener("submit",(e)=>{
    e.preventDefault();
    verifyAge();

});
// function for age verification
function verifyAge(){
    // get user input values
   let dayvalue= Number(document.getElementById("day").value);
   let monthvalue=Number(document.getElementById("month").value)-1;
   let yearvalue= Number(document.getElementById("year").value);
//    current date 
   let date=new Date();
   let currentDay=date.getDate();
   let currentMonth=date.getMonth();
   let currentYear=date.getFullYear();
//    difference betweeb current year and user input year
   let difference=currentYear-yearvalue;
//    checks for the age verification
   if(difference> 15){
       if(currentMonth>monthvalue){
           window.location.assign("https://www.google.com/");
       }else if (currentMonth==monthvalue){
           if(currentDay>=dayvalue){
           window.location.assign("https://www.google.com/");
           }
           else{
            alert("Your age is restricted");
            }

       }else{
       alert("Your age is restricted");
       }

   }else{
       alert("Your age is restricted");
   }
   
}
