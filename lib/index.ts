import { Album } from "@/types/albums";
import { Comment } from "@/types/comments";
import { Post } from "@/types/posts";
import { Todo } from "@/types/todos";
import { User } from "@/types/users";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAlbums = async (): Promise<Album[]> => {
  return await fetch(`${BASE_URL}/albums`).then(
    async (response) => (await response.json()) as Album[],
  );
};

export const getComments = async (): Promise<Comment[]> => {
  return await fetch(`${BASE_URL}/comments`).then(
    async (response) => (await response.json()) as Comment[],
  );
};

export const getPosts = async (): Promise<Post[]> => {
  return await fetch(`${BASE_URL}/posts`).then(
    async (response) => (await response.json()) as Post[],
  );
};

export const getTodos = async (): Promise<Todo[]> => {
  return await fetch(`${BASE_URL}/posts`).then(
    async (response) => (await response.json()) as Todo[],
  );
};

export const getUsers = async (): Promise<User[]> => {
  return await fetch(`${BASE_URL}/posts`).then(
    async (response) => (await response.json()) as User[],
  );
};
