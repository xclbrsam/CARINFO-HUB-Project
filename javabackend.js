
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
  search.classList.toggle('active');
}

//header




 
//autocomplete search box
  
let availableKeywords =[
  'Creta','Seltos','Fortuner','Scorpio','Scorpio N','Innova'
];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box"); // Corrected line


inputBox.onkeyup = function(){
  let result = [];
   let input = inputBox.value;
   if(input.length){
    result = availableKeywords.filter((keyword)=>{
    return  keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
   }
   display(result);

}
function display(result){
 const content = result.map((list)=>{
  return "<li>" + list + "</li>";


 });

 resultsBox.innerHTML = "<ul>" + content +"</ul>"

}

//copiolt autocomplete
