// function getMessage(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello from TS");
//     }, 1000);
//   });
// }

// getMessage().then(result => console.log(result));

interface User {
    name: string;
    age: number;
}

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
