/* eslint-disable react/prop-types */
export const GeneralBtn = (props) =>{
    const todoList = props.todoList
    return(<div className="btn-ctn">
        {todoList.length !== 0  && <button className="erase-btn" onClick={props.eraseTask}>CLEAR</button>}
        {todoList.length !==0 && <button className="completeall-btn" onClick={props.completeAllTask}>COMPLETE</button>}
    </div>)
}