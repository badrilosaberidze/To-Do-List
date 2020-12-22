var ToDoList= [] ;
var cnt=0,txt;


function addOnList(){
    txt=document.getElementById("input").value;
    if (txt!=""){
        cnt++;

        if (ToDoList.indexOf(txt)==-1){
            ToDoList.push(txt);
            document.getElementById("list-cont").innerHTML+=
                `<div class="list" id="${cnt}">
                    <div class="list-txt">${txt}</div>
                    <div class="imgs">
                        <div> <img src="images/check.svg" id="check" onclick="MarkAsCompleted(${cnt})"></div>
                        <div ><img src="images/trash.svg" id="trash" onclick="RemoveFromList(${cnt},'${txt}')"></div>
                    </div>
                </div>`    
        }    
    }
}

function RemoveFromList(x,y){
    ToDoList.splice(ToDoList.indexOf(y),1);
    document.getElementById(x).style.display="none";
}

function MarkAsCompleted(x){
    document.getElementById(x).style.backgroundImage="radial-gradient(rgb(5, 252, 25),rgb(9, 124, 19))";
    document.getElementById(x).firstElementChild.style.color="white";
    document.getElementById(x).lastElementChild.firstElementChild.style.display="none";
}