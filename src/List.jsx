/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Task } from "./Task";

export const List = (props) => {

    const todoList = props.todoList;
    return(  <div className="list">
    {todoList.length === 0 && <h1 className="message-h1">No Tasks Currently</h1>}
    {todoList.map((task) => {
      return <Task taskName={task.taskName} id={task.id} complete={task.complete} deleteTask={props.deleteTask} completeTask = {props.completeTask}/>
    })}
  </div>);
}