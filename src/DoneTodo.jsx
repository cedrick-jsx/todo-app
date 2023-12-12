export default function DoneTodo({ todoNewList, setTodoNewList, todoId }) {
  setTodoNewList(
    todoNewList.map((todoSub, todoSubId) => {
      if (todoId === todoSubId) {
        return {
          ...todoSub,
          todoDone: true,
        };
      } else {
        return {
          ...todoSub,
          todoSub,
        };
      }
    })
  );
}
