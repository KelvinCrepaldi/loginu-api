import data from "../data";

const deleteUserService = (id) =>{

    const user = data.find((user)=>user.id === id);

    if(!user){
        return {error: "user not found."}
    }

    const filterData = data.filter((user)=> user.id !== id);
    data = filterData;

    return {msg: "user deleted"}

}

export default deleteUserService;