// interface ApiResponse<T> {
//   data: T;
//   status: number;
// }

// const userResponse: ApiResponse<{ id: number; name: string; }> = {
//   data: {
//     id: 1,
//     name: 'Alice',
//   },
//   status: 200,
// };

// const invoiceResponse: ApiResponse<{ email: string; amount: number; }> = {
//   data: {
//     email: 'alice@mail.com',
//     amount: 150,
//   },
//   status: 201,
// };

// console.log(userResponse);

// ПОВНІСТЮ ВСЕ РОЗУМІННЯ ГЕНЕРИКІВ ТА ПРОМІСІВ

// function resolveAfterDelay<T>(value: T, delay: number): Promise<T> {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(value), delay);
//   });
// }

// resolveAfterDelay<string>("Hello", 1000).then(console.log);
// resolveAfterDelay<number>(123, 500).then(console.log);

import axios from "axios";
const API = "https://jsonplaceholder.typicode.com";

// interface Post { id: number; userId: number; title: string; body: string; }

// async function fetchPosts(): Promise<Post[]> {
//   const res = await axios.get<Post[]>(
//     `${API}/posts`
//   );
//   return res.data;
// }

// // first type work with respone
// const posts: Post[] = await fetchPosts();
// console.log(posts[0].title);

// // second type work with respone
// fetchPosts().then(ps => {
//   console.log("posts:", ps);  
// });

////////////////////////////////////////////////////

// async function fetchList<T>(path: string): Promise<T[]> {
//   const { data } = await axios.get<T[]>(`${API}/${path}`);
//   return data;
// }

// interface Post { id: number; userId: number; title: string; body: string; }
// interface User { id: number; name: string; email: string; }

// fetchList<Post>("posts").then(list => console.log(list[0].title));
// fetchList<User>("users").then(list => console.log(list[0].email));

async function fetchList<T>(path: string): Promise<T[]> {
  const { data } = await axios.get<T[]>(`${API}/${path}`);
  return data;
}

interface Post { id: number; userId: number; title: string; body: string; }

fetchList<Post>("posts").then(list => console.log(list[0].title));

function getFirst<T>(arr: T[]) {
  return arr[0];
}

console.log(
  getFirst<number>([1, 2, 3])
 );