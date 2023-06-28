import styles from './Tabs.module.scss'
import useTasks from '../../context/useTasks'

function Tabs() {
	const tabsData = useTasks()
	const [activeTab, setActiveTab] = tabsData.activeTabProvider

	const handleAll = () => {
		setActiveTab({
			all: true,
			active: false,
			completed: false
		})
	}

	const handleActive = () => {
		setActiveTab({
			all: false,
			active: true,
			completed: false
		})
	}

	const handleCompleted = () => {
		setActiveTab({
			all: false,
			active: false,
			completed: true
		})
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.left}>
				<button className={styles.button} onClick={handleAll}>All</button>
				<div className={activeTab.all ? styles.active : ''}></div>
			</div>
			<div className={styles.center}>
				<button className={styles.button} onClick={handleActive}>Active</button>
				<div className={activeTab.active ? styles.active : ''}></div>
			</div>
			<div className={styles.right}>
				<button className={styles.button} onClick={handleCompleted}>Completed</button>
				<div className={activeTab.completed ? styles.active : ''}></div>
			</div>
		</section>
	)
}

export default Tabs