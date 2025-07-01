// import axios from "axios";

// interface Post {
//     id: number;
//     title: string;
//     body: string;
// }

// async function fetchPosts(): Promise<Post[]> {
//   const response = await axios.get<Post[]>(
//     'https://jsonplaceholder.typicode.com/posts'
//   );
//   return response.data;
// }

// fetchPosts().then((posts) => {
//   console.log(posts[0].title);
// });

enum Role {
  Admin,
  User,
  Guest
}

function getPermissions(role: Role): string[] {
  if(role = Role.Admin) {
    return ["create", "read", "update", "delete"]
  } else if(role = Role.User) {
    return ["read", "update"]
  } else if (role = Role.Guest) {
    return ["read"]
  }
  else {
    // Цей блок ніколи не буде досягнутий, якщо тип role: Role
    // Це захист для майбутніх змін
    throw new Error("Unknown role");
  }
}
