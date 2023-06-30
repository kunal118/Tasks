import React from "react";
import { List, Checkbox, Button, Grid } from "semantic-ui-react";
import { useRef, useEffect } from "react";
const TodoItem = ({ id, title, completed, setTodos }) => {
  // console.log(p);
  // const ref = useRef(null);
  // const ele = ref.current;
  // console.log(ele);
  // useEffect(() => {
  //   let touchstartX = 0;
  //   let touchendX = 0;

  //   function checkDirection() {
  //     if (touchendX < touchstartX) console.log("swiped left!");
  //     if (touchendX > touchstartX) console.log("swiped right!");
  //   }

  //   ele.addEventListener("touchstart", (e) => {
  //     touchstartX = e.changedTouches[0].screenX;
  //   });

  //   ele.addEventListener("touchend", (e) => {
  //     touchendX = e.changedTouches[0].screenX;
  //     checkDirection();
  //   });

  //   return () => {
  //     element.removeEventListener("click", handleClick);
  //   };
  // }, []);
  function handleChecked(data) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (data.id === todo.id) {
          return { ...todo, completed: data.checked };
        }
        return todo;
      });
    });
  }
  function handleDelete(data) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return data.id !== todo.id;
      });
    });
  }
  return (
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <List.Item key={id} value={title}>
            <Checkbox
              id={id}
              label={title}
              checked={completed}
              onChange={(e, data) => handleChecked(data)}
              toggle={true}
            ></Checkbox>
          </List.Item>
        </Grid.Column>
        <Grid.Column>
          <Button id={id} negative onClick={(e, data) => handleDelete(data)}>
            -
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default TodoItem;
