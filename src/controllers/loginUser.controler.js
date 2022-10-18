import loginUserService from "../services/loginUser.service";

const loginUserController = (req, res) =>{
    const {email, password} = req.body;
    
    const userLogin = loginUserService(email, password);

    return res.status(200).json(userLogin);
}

export default loginUserController;