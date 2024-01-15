import Task from "./Task";
import { useState } from "react";
function Home(){
 
 const[task,setTasks]=useState([]);
 const[title,setTitle]=useState("");
 const[description,setDescription]=useState("");
 

 const submitHandler=(e)=>{
e.preventDefault();
setTasks([...task,{title,description}]);
 };
const deleteTask=(i)=>{
    
    setTasks(task.filter((item,index)=>index!==i));
};


    return (
    <div className="Container">

        <h1>Daily Goals</h1>

        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}/>

            <textarea placeholder="Description"
             value={description}
             onChange={(e)=>setDescription(e.target.value)}
            />

           
            <button type="submit">Add</button>
        </form>


       {
        task.map((item,index) =>(
            //we are using () instead of return here also Task is returning
            <Task key={index} 
            title={item.title} 
            description={item.description}
            deleteTask={deleteTask}
            i={index}
            />
        ))
       }
  

    </div>
   
    )
};
export default Home;