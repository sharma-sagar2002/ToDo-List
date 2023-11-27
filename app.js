const input=document.getElementById("sbar");
const itemCont=document.getElementById("list-cont");

const handleAdd = ()=>{
  
 
  const task=document.createElement("li");
  task.innerHTML=input.value;
  itemCont.appendChild(task);
  const button=document.createElement("span");
  button.classList.add("item-btn");
  button.innerHTML="Remove";
  task.appendChild(button);
  saveData();
}

itemCont.addEventListener("click",function (e){
if(e.target.tagName=="SPAN")
e.target.parentElement.remove();
saveData();
});
function saveData (){
  localStorage.setItem("data", itemCont.innerHTML);
}
function show(){
  itemCont.innerHTML=localStorage.getItem("data");
}
show();