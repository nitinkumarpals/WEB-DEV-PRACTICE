interface User {
    name: string;
    age: number;
    email?: string;
    password?: string;
    address?: string;

}
type updatedProps = Pick<User, 'name' | 'age' | 'email'>;
const sumOfAge = (user1: User, user2: User): number => {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: 'hoge', age: 1 }, { name: 'fuga', age: 2 })
console.log(age);