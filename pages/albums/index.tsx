import { getAlbums } from "@/lib";
import { useQuery } from "@tanstack/react-query";

export default function Albums() {
  const { data, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: async () => await getAlbums(),
    staleTime: Infinity,
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <h1>Albums</h1>
      <ul>{data?.map((album) => <li key={album.id}>{album.title}</li>)}</ul>
    </>
  );
}
