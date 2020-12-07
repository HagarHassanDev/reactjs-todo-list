import React from 'react';

const Form = ({setIntputText , setTodos , todos , inputText , setFilters})=>{
  const inputTextHandler = (e)=>{
    setIntputText(e.target.value);
  };
const submitTodosHandler = (e)=>{
  e.preventDefault();
  setTodos([...todos, {text:inputText  , completed:false  ,id: Math.random()*1000 }]);
  setIntputText("");
};

const filterChangeHandler = (e)=>{
  setFilters(e.target.value)
};
    return (
        <form>
        <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
        <button onClick={submitTodosHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={filterChangeHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}


export default Form ; 