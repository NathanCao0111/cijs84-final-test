import styles from './Completed.module.scss'
import { Button } from 'reactstrap'
import useTasks from '../../context/useTasks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

function Completed() {
	const tasksData = useTasks()
	const [tasks, setTasks] = tasksData.tasksProvider
	const [completedTasks, setCompletedTasks] = tasksData.completedTasksProvider
	const [, setChecked] = tasksData.checkedProvider
	const [, setIsCross] = tasksData.isCrossProvider

	const handleTrashIcon = (item) => {
		setCompletedTasks(prev => {
			return prev.filter(element => element !== item)
		})
		setTasks(prev => {
			return prev.filter(element => element !== item)
		})
	}

	const handleTrashBtn = () => {
		const deleteAllCompleted = tasks.filter(element => {
			if (completedTasks.includes(element)) {
				return;
			}
			return element
		})
		setTasks(deleteAllCompleted)
		setCompletedTasks([])
		setChecked([])
		setIsCross([])
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.upper}>
				{
					completedTasks?.map((element, index) => {
						return (
							<div key={index} className={styles.taskWrapper}>
							<div className={styles.task}>
								<input type='checkbox' checked disabled />
								<label className={styles.cross}>{element}</label>
							</div>
							<button className={styles.icon} onClick={() => handleTrashIcon(element)}>
								<FontAwesomeIcon icon={faTrashCan} />
							</button>
							</div>
						)
					})
				}
			</div>
			{completedTasks.length !== 0 && <div className={styles.lower}>
				<Button color="danger" onClick={handleTrashBtn}>
					<span style={{ marginRight: 10 }}>
						<FontAwesomeIcon icon={faTrashCan} />
					</span>
					delete all
				</Button>
			</div>}
		</div>
	)
}

export default Completed