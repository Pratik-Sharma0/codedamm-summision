import Task from "./Task";
import { useState } from "react";
function Home(){
 
 const[task,setTasks]=useState([]);
 const[title,setTitle]=useState("");
 const[description,setDescription]=useState("");
 

 const submitHandler=(e)=>{
// handle the form submission and add the task to the task array
 
 };
const deleteTask=(i)=>{
    
    //handle the delete task functionality here
};


    return (
    <div className="Container">
{/* write something inside h1 tag for example daily goals */}
        <h1></h1>

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