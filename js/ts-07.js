"use strict";
const userList = [
    {
        name: "ali",
        age: 22,
        id: "25645",
        fieldOfStudy: "student"
    }
];
console.log(userList);
const createUser = (user) => {
    userList.push(user);
};
createUser({
    name: "reza",
    age: 18,
    id: "256484",
    fieldOfStudy: "student"
});
console.log(userList);
const updateUser = (id, user) => {
    const userIndex = userList.findIndex((item) => item.id === id);
    userList[userIndex] = user;
};
updateUser("25645", {
    name: "ali",
    age: 30,
    id: "25645",
    fieldOfStudy: "student"
});
console.log(userList);
const deleteUser = (id) => {
    const deltUser = userList.filter((item) => item.id !== id);
    return deltUser;
};
console.log(deleteUser("25645"));
