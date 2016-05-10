angular.module("application",[])
.controller("con1",function(){	
	var todoList = this;
	todoList.todos = [
			{task:'Task 1',done:false},
			{task:'Task 2',done:true}
		   ];

   todoList.addTodo = function() {
      todoList.todos.push({task:todoList.todoText, done:false});
      //todoList.todoText = '';	
    };
    
});