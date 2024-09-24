let todoList=[];                      // empty list is created in which we can add element.
                  // call todolist at the beginning 
function addTodo(){                 // onclick this function call.
    let inputElement=document.querySelector('#display');
    let todoItem=inputElement.value ; // inside value of input box.
   todoList.push(todoItem);
   inputElement.value='';               // after each element add remove the empty the input box.
   displayelement();
}

function displayelement(){
    let displayItems = document.querySelector('.todo-container');
   let newHtml ='';
   for(let i=0;i<todoList.length;i++){
   newHtml+=`<div>
   <span>${todoList[i]}</span>
   <button onclick="todoList.splice(${i},1);
  displayelement(); ">DELETE</button>
   </div>
   
   
   `;
   }
  displayItems.innerHTML=newHtml;
}