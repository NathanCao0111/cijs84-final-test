import "./App.css";
import Tabs from "./components/Tabs";
import All from "./components/All";
import Active from "./components/Active";
import Completed from "./components/Completed";
import useTasks from "./context/useTasks";
import { useLocation } from "react-router-dom";

function App() {
  const tasksData = useTasks();
  const [activeTab] = tasksData.activeTabProvider;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const withDone = searchParams.get("withDone");

  if (withDone === "1") {
    return (
      <div className="App">
        <h2 className="AppTitle">#todo (All)</h2>
        <All />
      </div>
    );
  }

  if (withDone === "0") {
    return (
      <div className="App">
        <h2 className="AppTitle">#todo (Active)</h2>
        <Active />
      </div>
    );
  }

  return (
    <div className="App">
      <h2 className="AppTitle">#todo</h2>
      <Tabs />
      {activeTab.all && <All />}
      {activeTab.active && <Active />}
      {activeTab.completed && <Completed />}
    </div>
  );
}

export default App;
