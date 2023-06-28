import styles from './All.module.scss'
import { Input, Button } from 'reactstrap'
import useTasks from '../../context/useTasks'
import { useState, useEffect } from 'react'

function All() {
	const tasksData = useTasks()
	const [tasks, setTasks] = tasksData.tasksProvider
	const [completedTasks, setCompletedTasks] = tasksData.completedTasksProvider
	const [, setActiveTasks] = tasksData.activeTasksProvider
	const [checked, setChecked] = tasksData.checkedProvider
	const [isCross, setIsCross] = tasksData.isCrossProvider
	const [input, setInput] = useState('')

	const handleAddBtn = () => {
		setTasks(prev => [...prev, input])
		setActiveTasks(prev => [...prev, input])
		setInput('')
	}

	const handleCheckbox = (item) => {
		setChecked(prev => {
			if (checked.includes(item)) {
				return checked.filter(element => element !== item)
			}
			else {
				return [...prev, item]
			}
		})
		setIsCross(prev => {
			if (isCross.includes(item)) {
				return isCross.filter(element => element !== item)
			}
			else {
				return [...prev, item]
			}
		})
		setCompletedTasks(prev => {
			if (completedTasks.includes(item)) {
				return completedTasks.filter(element => element !== item)
			}
			else {
				return [...prev, item]
			}
		})
	}

  useEffect(() => {
		const tasksToken = localStorage.getItem('tasksToken')
		if (tasksToken) {
			setTasks(JSON.parse(tasksToken))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('tasksToken', JSON.stringify(tasks))
	}, [tasks])

	return (
		<div className={styles.wrapper}>
			<div className={styles.upper}>
				<Input placeholder='add details' value={input} onChange={e => setInput(e.target.value)}/>
				<Button color="primary" onClick={handleAddBtn}>Add</Button>
			</div>
			<div className={styles.lower}>
				{
					tasks?.map((element, index) => {
						return (
							<div key={index} className={styles.task}>
								<input type='checkbox' checked={checked.includes(element)} onChange={() => handleCheckbox(element)}/>
								<label className={isCross.includes(element) ? styles.cross : ''}>{element}</label>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default All