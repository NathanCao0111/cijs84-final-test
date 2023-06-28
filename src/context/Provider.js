import TasksContext from "./Context";
import { useState } from "react";

function Provider({ children }) {
	const [tasks, setTasks] = useState(['Do coding challenges', 'Learn ReactJS', 'Do homework'])
	const [activeTasks, setActiveTasks] = useState(tasks)
	const [completedTasks, setCompletedTasks] = useState([])
	const [checked, setChecked] = useState([])
	const [isCross, setIsCross] = useState([])
	const [activeTab, setActiveTab] = useState({
		all: true,
		active: false,
		completed: false
	})

	const value = {
		tasksProvider: [tasks, setTasks],
		activeTabProvider: [activeTab, setActiveTab],
		activeTasksProvider: [activeTasks, setActiveTasks],
		completedTasksProvider: [completedTasks, setCompletedTasks],
		checkedProvider: [checked, setChecked],
		isCrossProvider: [isCross, setIsCross]
	}

	return (
		<TasksContext.Provider value={value}>
			{children}
		</TasksContext.Provider>
	)
}

export default Provider