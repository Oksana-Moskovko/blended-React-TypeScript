// type Status = "loading" | "success" | "error";

// function logStatus(status: Status): void {
//   if (status === "loading") {
//     console.log("Loading...");
//   } else if (status === "success") {
//     console.log("Success!");
//   } else if (status === "error") {
//     console.log("Something went wrong");
//   }
// }

// logStatus("loading");

interface CreateUser {
  name: string;
  age: number;
  isAdmin?: boolean;
}

function createUser({name, age}: CreateUser) {
  return {
    name,
    age,
    isAdmin: false
  };
}

createUser({ name: "Alice", age: 30 });
