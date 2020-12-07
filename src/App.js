import React, {useEffect, useState} from 'react';

import './App.css';
// import components 
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //state
  const [inputText , setIntputText]=useState("");
  const [todos , setTodos]=useState([]);
  const [filters , setFilters]=useState('all');
  const [filteredTodos , setFilteredTodos]=useState([]);
  // Run ONCE when the app start 
  useEffect(() => {
    getLocalTodos();
  }, []);
// useeffect 
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos , filters]);

  // functions 
  const filterHandler= ()=>{
    switch(filters){
      case 'completed': 
      setFilteredTodos(todos.filter(todo=> todo.completed === true));
      break;
      case 'uncompleted': 
      setFilteredTodos(todos.filter(todo=> todo.completed === false));
      break; 
      default : 
      setFilteredTodos(todos);
      break; 
    }
  } 
// save to local 
const saveLocalTodos = ()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  
}


const getLocalTodos = ()=>{
  // to get the item when we refresh the page 
  if(localStorage.getItem('todos')=== null){
    localStorage.setItem('todos', JSON.stringify([]));
  }else{
   let todoFromLocal =JSON.parse(localStorage.getItem('todos'));
   setTodos(todoFromLocal);
  }
}


  return (
    <div className="App">
       <header>
       <h1>Hagar's Todo List</h1>
       </header>
       <Form  setFilters={setFilters} setIntputText={setIntputText}inputText={inputText} setTodos={setTodos} todos={todos}/>
       <TodoList  filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
