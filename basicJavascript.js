// string to Integer    
let str = "25.12";
let num = parseInt(str);
console.log(num);
// delete operator
const user = {
       name: "Dhara",
       id:"123",
       mobile: 1569852141,
   }
console.log(user.name);
let deleted = delete(user.mobile)
console.log(user.mobile);
console.log(deleted);  

// password show functionality
let input = document.querySelector("input");
console.log(input);
const showpw = document.querySelector("i");
showpw.addEventListener("click",()=>{
   if(input.getAttribute("type", "password")) input.setAttribute("type", "text");
   console.log(input);
});


// math operation
const fNum=document.querySelector(".fNum");
const sNum = document.querySelector(".sNum");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const remainder = document.querySelector(".remainder");
let answer = document.querySelector(".answer");
const clear = document.querySelector(".clear");   


// addition-------------
plus.addEventListener("click",()=>{
if(fNum.value && sNum.value){
answer.value = +fNum.value + +sNum.value;
console.log(answer);
}
});
// subtraction-------------------------------
minus.addEventListener("click",()=>{
if(fNum.value && sNum.value){
answer.value = +fNum.value - +sNum.value;
console.log(answer);
}    
});
multiply.addEventListener("click",()=>{
if(fNum.value && sNum.value){
answer.value = +fNum.value * +sNum.value;
console.log(answer);
}    
});
divide.addEventListener("click",()=>{
if(fNum.value && sNum.value){
answer.value = +fNum.value / +sNum.value;
console.log(answer);
}    
});
remainder.addEventListener("click",()=>{
if(fNum.value && sNum.value){
answer.value = +fNum.value % +sNum.value;
console.log(answer);
}    
});
// clear data ---------------
clear.addEventListener("click",()=>{
fNum.value = sNum.value = answer.value="";
});


// create marksheet


const result = +document.querySelector('.result').addEventListener("click",()=>{
   
const html = +document.querySelector(".html").value;
const css = +document.querySelector(".css").value;
const jvs = +document.querySelector(".jvs").value;
const jquery = +document.querySelector(".jquery").value;
const bootstrap = +document.querySelector(".bootstrap").value;
const react = +document.querySelector(".react").value;
const redux = +document.querySelector(".redux").value;
const node = +document.querySelector(".node").value;
console.log(html,css,jvs,bootstrap,jquery,react,redux,node);

if(html > 50 || css > 50  || jvs > 50  || bootstrap > 50  || jquery > 50  || react > 50  || redux > 50 || node > 50){
   let error =document.querySelector(".error");
   error.textContent = " Marks cannot more than 50";
   console.log(error);
   setTimeout(()=>{
      error.textContent="";
      }
   ,2000)
   
}else{
   total =  html + css + jvs + jquery + bootstrap + react + redux + node;
   console.log(total);
   document.querySelector(".allMarks").textContent= `${total} /400` ;

   percent = document.querySelector(".percentege");
   percent.textContent=` ${(total/400)*100} %`;
}

});


