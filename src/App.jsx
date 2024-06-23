import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import DebounceHook from "./DebounceHook";

// custom hook
function useTodos(n) {
  const [todos, settodos] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    let value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((todos) => {
        settodos(todos.data.todos);
        setloading(false);
      });
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((todos) => {
      settodos(todos.data.todos);
      setloading(false);
    });

    return clearInterval(value);
  }, [n]);

  console.log(todos);
  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodos(5);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
    <DebounceHook/>
      {todos &&
        todos.map((i) => (
          <>
            {" "}
            <h1>{i.title}</h1> <br />
            <h3>{i.description}</h3>
          </>
        ))}
    </>
  );
}

export default App;
