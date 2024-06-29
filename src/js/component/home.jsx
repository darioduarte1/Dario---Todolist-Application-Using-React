import React, { useState, useEffect } from "react";

const Home = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    let sizeArray = tasks.length;

    useEffect(() => {
        console.log(sizeArray);
    }, [sizeArray]);

    return (
		<div>
			<div id="todo-container">
				<h1>Todos</h1>
				<input
					type="text"
					onChange={(e) => setTask(e.target.value)}
					onKeyDown={handleKeyDown}
					value={task}
					placeholder="Add a new task"
				/>
				<ul>
					{tasks.map((t, index) => (
						<li key={index}>
							{t}
							<button onClick={() => deleteTask(index)}>X</button>
						</li>
					))}
				</ul>
				<div>
					<p>{sizeArray} Item{sizeArray !== 1 && "s"} Left</p>
				</div>
			</div>
		</div>
    );
};

export default Home;
