import './App.css'
import Tabs from './components/Tabs'
import All from './components/All'
import Active from './components/Active';
import Completed from './components/Completed';
import useTasks from './context/useTasks';

function App() {
  const tasksData = useTasks()
  const [activeTab] = tasksData.activeTabProvider

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
