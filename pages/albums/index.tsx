import useSWRImmutable from "swr/immutable";
import { getAlbums } from "@/lib";

export default function Albums() {
  const { data, isLoading } = useSWRImmutable(
    "albums",
    async () => await getAlbums(),
  );
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <h1>Albums</h1>
      <ul>{data?.map((album) => <li key={album.id}>{album.title}</li>)}</ul>
    </>
  );
}
