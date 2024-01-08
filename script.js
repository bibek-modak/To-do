const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// const cancel = document.getElementById("can");

function addTask(){
    if(inputBox.value ===''){
        alert("Enter the reminder first!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        //adding X 
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    SaveData();
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
},false);



function deleteelem() {
    if(document.getElementById('list-container').innerHTML == '') window.alert("List is already empty!!");
 else document.getElementById('list-container').innerHTML ="";
 SaveData();
}


function SaveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
