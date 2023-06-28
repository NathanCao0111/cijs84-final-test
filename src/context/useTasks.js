import { useContext } from "react";
import TasksContext from "./Context";

function useTasks() {
	const context = useContext(TasksContext)

	return context
}

export default useTasks