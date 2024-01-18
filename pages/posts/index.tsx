import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Post } from "@/types/posts";
import { getPosts } from "@/lib";

export const getServerSideProps = (async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}) satisfies GetServerSideProps<{ posts: Post[] }>;

export default function Posts({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
