import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { User } from "@/types/users";
import { getUsers } from "@/lib";

export const getServerSideProps = (async () => {
  const users = await getUsers();
  return {
    props: {
      users,
    },
  };
}) satisfies GetServerSideProps<{ users: User[] }>;

export default function Users({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Users</h1>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
}
