import React from "react";
import { useToDoStore } from "../../date/stores/useToDoStore";
import { InputTask } from "../components/InpitTask";
import { InputPlus } from "../components/InputPlus";
import styles from './index.module.scss';


export const App: React.FC = () => {

  const [
    tasks,
    createTask,
    updateTask,
    removeTask
  ] = useToDoStore(state => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  return (
    <article className={styles.article}>
      <h1 className={styles.Title}>To Do List</h1>
      <section className={styles.Section}>
        <InputPlus
          onAdd={(title) => {
            if (title) {
              createTask(title)
            }
          }}
        />
      </section>
      <section className={styles.Section}>
        {!tasks.length && (
          <p className={styles.Text}>There is no one task...</p>
        )}
        {tasks.map((task) => (
          <InputTask
            key={task.id}
            id={task.id}
            title={task.title}
            onDone={removeTask}
            onEdited={updateTask}
            onRemoved={removeTask}
          />
        ))}
      </section>
    </article>
  )
}
