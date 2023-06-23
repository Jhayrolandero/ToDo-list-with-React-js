/* eslint-disable react/prop-types */
export const AddTask = (props) => {
    return(
        <div className="add-task">
        <input onChange={props.handleChange} className="input-fld"/>
        <button onClick={props.addTask} className="add-btn">Add Task</button>
      </div>
    );
}