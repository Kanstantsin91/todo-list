import React from 'react';
import SearchBlock from './SearchBlock.js';
import Header from './Header.js';
import TodoList from './TodoList.js';



const App = ()=>{

const todoData =[{text: 'Learn HTML', important: false, id:1}, {text: 'Learn CSS', important: true, id:2}, {text: 'Learn JS', important: false, id:3}  ]

  return (
    <div>
    <Header />
    <SearchBlock />
    <TodoList todos={todoData}/>
    </div>
  );
}

export default App;