let parent = document.querySelector("#data-parent-div");
let fetchBtn = document.querySelector("#fetch-todo-btn");

function getData(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then (function(res){
        return res.json()
    })
    .then (function(res){
        showData(res)
    })
}


function showData(res){
    res.forEach(data => {
        let childDiv = document.createElement("div");
        childDiv.className="childDiv";

        let label = document.createElement("label");
        label.textContent=data.title;

        let checkbox = document.createElement("input");
        checkbox.type="checkbox";
        checkbox.className="checkbox";
        if(data.completed==true){
            checkbox.checked=true;
        }
        else{
            checkbox.checked=false;
        }


        childDiv.append(label,checkbox);
        parent.append(childDiv);
    });
}
fetchBtn.addEventListener("click",getData);