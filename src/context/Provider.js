import TasksContext from "./Context";
import { useState, useEffect } from "react";
import { defaultTasks } from "../data/defaultTasks";

function Provider({ children }) {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasksToken")) || defaultTasks;
  });
  const [activeTasks, setActiveTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("activeTasksToken")) || tasks;
  });
  const [completedTasks, setCompletedTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("completedTasksToken")) || [];
  });
  const [checked, setChecked] = useState(() => {
    return JSON.parse(localStorage.getItem("checkedToken")) || [];
  });
  const [isCross, setIsCross] = useState(() => {
    return JSON.parse(localStorage.getItem("isCrossToken")) || [];
  });
  const [activeTab, setActiveTab] = useState({
    all: true,
    active: false,
    completed: false,
  });

  const value = {
    tasksProvider: [tasks, setTasks],
    activeTabProvider: [activeTab, setActiveTab],
    activeTasksProvider: [activeTasks, setActiveTasks],
    completedTasksProvider: [completedTasks, setCompletedTasks],
    checkedProvider: [checked, setChecked],
    isCrossProvider: [isCross, setIsCross],
  };

  useEffect(() => {
    localStorage.setItem("tasksToken", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("activeTasksToken", JSON.stringify(activeTasks));
  }, [activeTasks]);

  useEffect(() => {
    localStorage.setItem("completedTasksToken", JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem("checkedToken", JSON.stringify(checked));
  }, [checked]);

  useEffect(() => {
    localStorage.setItem("isCrossToken", JSON.stringify(isCross));
  }, [isCross]);

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

export default Provider;
