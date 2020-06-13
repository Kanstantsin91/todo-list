import React from 'react';
import ReactDOM from 'react-dom';
import SearchBlock from './components/SearchBlock.js'


// const h1 = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Привет, мир!'
// );
const isLogged = true;

const LoginBlock = <span>sign in</span>;
const welcome = <span>Hello</span>;


const Header = ()=>{
  const st = {
    color:'red',
    fontSize: '60px'
  }
  return <h1 style={st}>Todo List</h1>;
}

const TodoList = ()=>{
  const items=['Learn HTML', 'Learn CSS', 'Learn React']
  return(
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
  )
}

const App = ()=>{
  return (
    <div>
      {isLogged ? welcome:LoginBlock }
      {/* {h1} */}
    <Header />
    <SearchBlock />
    <TodoList />
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));
