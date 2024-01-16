import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Album } from "@/types/albums";
import { getAlbums } from "@/lib";

export const getServerSideProps = (async () => {
  const albums = await getAlbums();
  return {
    props: {
      albums,
    },
  };
}) satisfies GetServerSideProps<{ albums: Album[] }>;

export default function Albums({
  albums,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </>
  );
}
