import getUsersService from "../services/getUsers.services";

const getUsersController =(_, res)=>{
    const users = getUsersService();

    return res.status(200).json(users)
}

export default getUsersController;