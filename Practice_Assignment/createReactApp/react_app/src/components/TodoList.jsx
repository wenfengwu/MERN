import React, { useState } from 'react';
import "./TodoList.css"
const TodoList = () => {

    const [todoContent, setTodoContent] = useState({
        content:"",
        completed: false
    });
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(todoContent.content.length <= 0){
            return;
        }
        setTodoList([...todoList, todoContent])
        setTodoContent({...todoContent, content:""})
    }

    const handleDelete = (deleteIndex) => {
        let tempList = todoList.filter((item, idx) => idx !== deleteIndex);
        setTodoList(tempList)
    }

    const handleCheck = (idx) => {
        console.log(idx)
        const tempList = todoList.map((item, index) => {
            if(idx === index){
                return{...item, completed: !item.completed}
            }
            return item;
        });
        setTodoList(tempList);
    }

    return (
        <div style = {{textAlign: 'center'}}>
            <form onSubmit={ (e) => handleSubmit(e)} >
                <div>
                    <label>Add Todo Item: </label>
                    <input type="text"  value = {todoContent.content} onChange = { (e) => setTodoContent({...todoContent, content: e.target.value})}/>
                    <button>Add</button>
                </div>
            </form>
            {todoList.map((item, idx) => {
                const todoStyle = ['bold, italic'];

                if(todoContent.completed){
                    todoStyle.push('line-through');
                }


                return (
                    
                    <div key = {idx}>
                        <input type="checkbox" onChange = {(e) => handleCheck(idx)} checked = {item.completed}/>
                        <span className = {todoList.join(" ")}>{item.content}</span>
                        <button onClick = {(e) => handleDelete(idx)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoList;
