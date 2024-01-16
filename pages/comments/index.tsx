import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Comment } from "@/types/comments";
import { getComments } from "@/lib";

export const getServerSideProps = (async () => {
  const comments = await getComments();
  return {
    props: {
      comments,
    },
  };
}) satisfies GetServerSideProps<{ comments: Comment[] }>;

export default function Comments({
  comments,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </>
  );
}
