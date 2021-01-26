//querySelector is used to grab the element in the DOM
var form = document.querySelector('form');
    var todoList = document.querySelector('ul');
    var button = document.querySelector('button');
    var input = document.getElementById('user-todo');

    var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    //hold all our todos

    var storage = JSON.parse(localStorage.getItem('todos'))
    //when we refresh/close browser, prev data will be stored in this storage

    //addEventListener attach event handler to the element 
    //'submit' event is same as we press enter on our keyboard
    //e stands for event // 
    form.addEventListener('submit', function(e){
      todoMaker(input.value);
      input.value = '';
      e.preventDefault();
      todosArray.push(input.value);
      localStorage.setItem('todos', JSON.stringify(todosArray)); //apa2 data sebelum masuk LS, kena convert kpd string dulu
    });

    //todoMaker function creates a new li tag everytime it is invoked
    var todoMaker = function(text){ //pass the input.value as the argument for text parameter
      var todo = document.createElement('li');
      todo.textContent = text; //the text here refers to every input.value & assign it to todo.textContext property
      todoList.appendChild(todo); //adds every input.value as the child of ul tag
    }

    for(var i=0; i<storage.length; i++){
      todoMaker(storage[i]);
    }

    button.addEventListener('click', function(){
      localStorage.clear();
      todosArray = [];
      while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild);
      }
    });
