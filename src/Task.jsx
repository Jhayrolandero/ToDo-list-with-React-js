/* eslint-disable react/prop-types */
export const Task = (props) => {
    return(<div className="task">
    <h1 style={{textDecoration: props.complete ? "line-through double red" : "none"}}>{props.taskName}</h1>
    <div className="btn-section">
      <button className="comp-btn" onClick={() => props.completeTask(props.id)}>✓</button>
      <button className="del-btn" onClick={() => props.deleteTask(props.id)}>X</button></div>
  </div>);
}

