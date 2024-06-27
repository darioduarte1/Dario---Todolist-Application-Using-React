import React,{useState,useEffect} from "react";

//create your first component
const Home = () => {

	const [task,setTask]=useState("");
	const [tasks,setTasks]=useState([]);

	const handleKeyDown = (event)=>{
		if (event.key === "Enter"){
			setTasks([...tasks,task])
			setTask("")
		}
	}
	const deleteTask =(index)=>{
		const updatedTasks =[...tasks]
		updatedTasks.splice(index,1)
		setTasks(updatedTasks)
	}
	let sizeArray =tasks.length;
	useEffect(()=>{
		console.log (sizeArray)
	},[sizeArray])
	return (
		<div>
			<h1>Todos</h1>
				<input type="text" onChange={(e)=>setTask(e.target.value)} onKeyDown={handleKeyDown} value={task}/>
				<ul>
					{console.log (tasks)}
					{tasks.map((t,index)=> (<li key={index}>{t} <button onClick={()=>deleteTask(index)}>X</button></li>))}
				</ul>
				<div>
					<p>{sizeArray} Item Left</p>
				</div>
		</div>
		
	);
};

export default Home;
