import React from 'react';


const TodoListItem = (props) => {

    console.log(props);

    const style ={
        color: props.important? 'red': 'black',
        fontSize: '24px',
    }
    
return ( 
    <span style={style}>{props.text}</span>
    );
}

export default TodoListItem;