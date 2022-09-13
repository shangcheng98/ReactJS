import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
// import {CardChecklist, Trash} from 'react-bootstrap-icons';
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import {Button} from "react-bootstrap";

function fetchTodos() {
  return [
    {
      id: 1,
      title: "eat",
      completed: false,
    },
    {
      id: 2,
      title: "sleep",
      completed: false,
    },
    {
      id: 3,
      title: "drink",
      completed: true,
    },
    {
      id: 4,
      title: "shower",

      completed: true,
    },
    {
      id: 5,
      title: "thinking",
      completed: false,
    }
  ];
}

function TodoItem(props) {
  return (
    <InputGroup>
      <InputGroup.Checkbox
        checked={props.completed}
        onChange={props.onToggle}
      />
      <FormControl
        value={props.title}
        style={{
          textDecoration: props.completed ? "line-through 4px" : "none",
        }}
      />
      <Button variant="danger" onClick={props.onDelete}>---
       
      </Button>
    </InputGroup>
  );
}

function App(){
  // const todos = fetchTodos();
  const [todos, setTodos] = React.useState(fetchTodos());
  return(
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            TodoList
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        {todos.map((todo)=>(
         <TodoItem
         key={todo.id}
         title={todo.title}
         completed={todo.completed}
         onDelete={() => {
           setTodos(
             todos.filter((t) => t.id !== todo.id)
           );
         }}
         onToggle={() => {
           setTodos(
             todos.map((t) => (t.id === todo.id ? {...t, completed: !t.completed} : t))
           );
         }}
       />
     ))}
      </Container>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
