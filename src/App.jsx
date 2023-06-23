import "./App.css"
import { Header } from "./Header";
import { AddTask } from "./AddTask";
import { List } from "./List";
import { GeneralBtn } from "./GeneralBtn";
import { useState } from "react";


function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask,setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: (todoList.length - 1) +1,
      taskName: newTask,
      complete: false
    }
    setTodoList([...todoList, task])
  }
  
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  const eraseTask = () => {
    setTodoList([])
  }

  const completeTask = (id) => {
    setTodoList(todoList.map((task) => {
      if(task.id === id){
        return{...task, complete: true}
      }else{
        return task
      }
    }))
  }

  const completeAllTask = () => {
    setTodoList(todoList.map((task) => {
      return{...task, complete: true}
    }))
  }
  return(<div className="App">
    <Header />
    <AddTask handleChange={handleChange} addTask={addTask}/>
    <List todoList={todoList} deleteTask={deleteTask} completeTask={completeTask}/>
    <GeneralBtn todoList={todoList} eraseTask={eraseTask} completeAllTask={completeAllTask}/>
  </div>);
}

export default App