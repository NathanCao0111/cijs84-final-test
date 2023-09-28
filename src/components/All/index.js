import styles from "./All.module.scss";
import { Input, Button } from "reactstrap";
import useTasks from "../../context/useTasks";
import { useState } from "react";

function All({ t }) {
  const tasksData = useTasks();
  const [tasks, setTasks] = tasksData.tasksProvider;
  const [completedTasks, setCompletedTasks] = tasksData.completedTasksProvider;
  const [, setActiveTasks] = tasksData.activeTasksProvider;
  const [checked, setChecked] = tasksData.checkedProvider;
  const [isCross, setIsCross] = tasksData.isCrossProvider;
  const [input, setInput] = useState("");

  const handleAddBtn = () => {
    setTasks((prev) => [...prev, input]);
    setActiveTasks((prev) => [...prev, input]);
    setInput("");
  };

  const handleCheckbox = (item) => {
    setChecked((prev) => {
      if (checked.includes(item)) {
        return checked.filter((element) => element !== item);
      } else {
        return [...prev, item];
      }
    });
    setIsCross((prev) => {
      if (isCross.includes(item)) {
        return isCross.filter((element) => element !== item);
      } else {
        return [...prev, item];
      }
    });
    setCompletedTasks((prev) => {
      if (completedTasks.includes(item)) {
        return completedTasks.filter((element) => element !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.upper}>
        <Input
          placeholder={t("addDetails.placeholder")}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button color="primary" onClick={handleAddBtn}>
          {t("add.button")}
        </Button>
      </div>
      <div className={styles.lower}>
        {tasks?.map((element, index) => {
          return (
            <div key={index} className={styles.task}>
              <input
                type="checkbox"
                checked={checked.includes(element)}
                onChange={() => handleCheckbox(element)}
              />
              <label className={isCross.includes(element) ? styles.cross : ""}>
                {t("todo.element", { element: element })}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default All;
