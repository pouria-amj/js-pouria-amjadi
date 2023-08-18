type usertype = {
name :string ;
age : number;
id : string | number
fieldOfStudy : string

}



const userList : Array<usertype> = [
    {
      name : "ali" ,
      age : 22,
      id : "25645",
      fieldOfStudy : "student"
    }
];
    console.log(userList)
    const createUser = (user :usertype):void =>{
        userList.push(user)
    }
    createUser({
    name: "reza",
    age: 18,
    id : "256484",
    fieldOfStudy: "student"
    
    }
    )
    console.log(userList)
    const updateUser = (id : usertype["id"] , user : usertype) =>{
      const userIndex :number = userList.findIndex((item) => item.id === id)
      userList[userIndex] = user
    }
    updateUser("25645" , {
      name : "ali" ,
      age : 30,
      id : "25645",
      fieldOfStudy : "student"
    })
    console.log(userList)
    
    const deleteUser =(id : usertype["id"]) =>{
    
      const deltUser = userList.filter((item) => item.id !==id)
      return deltUser
    }
    console.log(deleteUser("25645"))