import TasksContext from "./Context";
import { useState } from "react";

function Provider({ children }) {
	const [tasks, setTasks] = useState(() => {
		return JSON.parse(localStorage.getItem('tasksToken'))
	 || ['Do coding challenges', 'Learn ReactJS', 'Do homework']})
	const [activeTasks, setActiveTasks] = useState(() => {
		return JSON.parse(localStorage.getItem('activeTasksToken'))
	 || tasks})
	const [completedTasks, setCompletedTasks] = useState(() => {
		return JSON.parse(localStorage.getItem('completedTasksToken'))
	 || []})
	const [checked, setChecked] = useState(() => {
		return JSON.parse(localStorage.getItem('checkedToken'))
	 || []})
	const [isCross, setIsCross] = useState(() => {
		return JSON.parse(localStorage.getItem('isCrossToken'))
	 || []})
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