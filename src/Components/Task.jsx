function Task({title,description,deleteTask,i}) {
    return (
        <div className="task">
            <div>
                <p>{title}</p>
                <span>{description}</span>

            </div>
            <button onClick={()=>deleteTask(i)}>-</button>

        </div>
    )
}
export default Task;