import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Todo } from "@/types/todos";
import { getTodos } from "@/lib";

export const getServerSideProps = (async () => {
  const todos = await getTodos();
  return {
    props: {
      todos,
    },
  };
}) satisfies GetServerSideProps<{ todos: Todo[] }>;

export default function Todos({
  todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
}
