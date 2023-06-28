import styles from './Active.module.scss'
import { Input, Button } from 'reactstrap'
import useTasks from '../../context/useTasks'
import { useState, useEffect } from 'react'

function Active() {
	const tasksData = useTasks()
	const [tasks, setTasks] = tasksData.tasksProvider
	const [completedTasks] = tasksData.completedTasksProvider
	const [activeTasks, setActiveTasks] = tasksData.activeTasksProvider
	const [inputActive, setInputActive] = useState('')

	const handleAddBtn = () => {
		setTasks(prev => [...prev, inputActive])
		setActiveTasks(prev => [...prev, inputActive])
		setInputActive('')
	}

	useEffect(() => {
		const newActiveTasks = tasks.filter(element => {
			if (completedTasks.includes(element)) {
				return;
			}
			return element
		})
		setActiveTasks(newActiveTasks)
	}, [completedTasks])

	return (
		<div className={styles.wrapper}>
			<div className={styles.upper}>
				<Input placeholder='add details' value={inputActive} onChange={e => setInputActive(e.target.value)}/>
				<Button color="primary" onClick={handleAddBtn}>Add</Button>
			</div>
			<div className={styles.lower}>
				{
					activeTasks?.map((element, index) => {
						return (
							<div key={index} className={styles.task}>
								<input type='checkbox' checked={false} disabled/>
								<label>{element}</label>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Active