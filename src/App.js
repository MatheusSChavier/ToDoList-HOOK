import React, { useState } from "react";
const App = () => {
  const [task, setTask] = useState("");

  const [list, setList] = useState([]);

  const add = () => {
    const newTask = {
      task: task,
      id: Date.now()
    };
    setList([...list, newTask]);
  };

  // const delete = (id) => {
  //   setList(list.filter((item) => item.id !== id));
  // };

  return (
    <section>
      <h1>To do List, so que com HOOK</h1>
      <div>
        <input onChange={(ev) => setTask(ev.target.value)} />
        <button onClick={add}>ADD</button>
      </div>
      <div>
        <ol>
          {list.map((item) => (
            <li>
              {item.task}
              <button>X</button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
export default App;
