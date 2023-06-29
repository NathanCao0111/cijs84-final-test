import './App.css'
import Tabs from './components/Tabs'
import All from './components/All'
import Active from './components/Active';
import Completed from './components/Completed';
import useTasks from './context/useTasks';
import { useEffect } from 'react';

function App() {
  const tasksData = useTasks()
  const [activeTab] = tasksData.activeTabProvider
  const [tasks] = tasksData.tasksProvider
	const [completedTasks] = tasksData.completedTasksProvider
	const [activeTasks] = tasksData.activeTasksProvider
	const [checked] = tasksData.checkedProvider
	const [isCross] = tasksData.isCrossProvider

  useEffect(() => {
		localStorage.setItem('tasksToken', JSON.stringify(tasks))
	}, [tasks])

  useEffect(() => {
		localStorage.setItem('activeTasksToken', JSON.stringify(activeTasks))
	}, [activeTasks])

  useEffect(() => {
		localStorage.setItem('completedTasksToken', JSON.stringify(completedTasks))
	}, [completedTasks])

  useEffect(() => {
		localStorage.setItem('checkedToken', JSON.stringify(checked))
	}, [checked])

  useEffect(() => {
		localStorage.setItem('isCrossToken', JSON.stringify(isCross))
	}, [isCross])

  return (
    <div className="App">
      <h2 className='AppTitle'>#todo</h2>
      <Tabs />
      {activeTab.all && <All />}
      {activeTab.active && <Active />}
      {activeTab.completed && <Completed />}
    </div>
  );
}

export default App;
