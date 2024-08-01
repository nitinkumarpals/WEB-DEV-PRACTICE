interface User {
    name: string;
    age: number;
    email: string;
    password: string;
    address: string;
}

type updatedProps = Pick<User, 'name' | 'age' | 'email'>;
type updatedPropsOptional = Partial<updatedProps>;

const sumOfAge = (user1: updatedPropsOptional, user2: updatedPropsOptional) => {
    const age1 = user1.age ?? 0; // Use 0 if age is undefined
    const age2 = user2.age ?? 0; // Use 0 if age is undefined
    return age1 + age2;
}

const age = sumOfAge({ name: 'hoge', age: 1 }, { name: 'fuga', age: 2 });
console.log(age);

// type UsersAge = {
//     [key: string]:{
//         id: number
//         name: string
//     }
// }

//or

// type UsersAge = Record<string, {
//     id : number,
//     name : string
// }>; // Record<key, value>

// const users: UsersAge = {
//     "hoge": {
//         id : 1,
//         name : "hoge",

//     },
//     "fuga": {
//         id : 2,
//         name : "fuga",
//     }
// }

// interface User {
//     id: string;
//     name: string;
// }

// type Users = { [key: string]: User };

// const users: Users = {
//     'abc123': { id: 'abc123', name: 'John Doe' },
//     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
// };

// interface User {
//     id: string;
//     name: string;
// }

// type Users = Record<string, User>;

// const users: Users = {
//     'abc123': { id: 'abc123', name: 'John Doe' },
//     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
// };

// // console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
// interface User {
//     id: string;
//     name: string;
// }

// // Initialize an empty Map
// const usersMap = new Map<string, User>();

// // Add users to the map using .set
// usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
// usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// // Accessing a value using .get
// console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK