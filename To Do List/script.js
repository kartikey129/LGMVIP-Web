const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");


//Function to check whether there is a input or not

function addTask() {
    
    //no input is given display the alert

    if (inputBox.value === '') {
        alert("You must write somthing");
    }

    //if data is given then create li and span for checked and delete operation  

    else{
        
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span =document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
}
inputBox.value="";

//whenever we add the data it will call saveData and save the data 
saveData();
}


listContainer.addEventListener("click", function(e){
    //To checked the task which are done 
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    //To delete the task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//to store the task evenafter the webpage is reloaded

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    
}

// to display the data whenever we open the web browser again

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();