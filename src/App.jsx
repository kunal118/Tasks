import {
  Form,
  Button,
  Checkbox,
  Container,
  Header,
  List,
} from "semantic-ui-react";

import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  let retString = localStorage.getItem("todos");
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(JSON.parse(retString) || []);
  localStorage.setItem("todos", JSON.stringify(todos));

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
  }

  return (
    <Container style={{ marginTop: "2em" }}>
      <Form onSubmit={handleSubmit}>
        <Form.name>
          <Header as="h1">New Item</Header>
        </Form.name>
        <Form.Field>
          <input
            placeholder="Task"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
      <List>
        {todos.map((todo) => {
          return (
            <>
              <TodoItem
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                setTodos={setTodos}
              ></TodoItem>
            </>
          );
        })}
      </List>
    </Container>
  );
}

export default App;
