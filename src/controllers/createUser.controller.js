import createUserService from "../services/createUser.service";


const createUserController = async (req, res)=>{

    const {email, name, password} = req.body;

    const user = await createUserService(email, name, password)

    return res.status(200).json(user);

}

export default createUserController;