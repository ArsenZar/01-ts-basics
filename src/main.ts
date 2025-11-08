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

function resolveAfterDelay<T>(value: T, delay: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

resolveAfterDelay<string>("Hello", 1000).then(console.log);
resolveAfterDelay<number>(123, 500).then(console.log);
