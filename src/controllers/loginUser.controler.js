import loginUserService from "../services/loginUser.service";

const loginUserController = (req, res) =>{
    const {email, password} = req.body;
    
    const userLogin = loginUserService(email, password);

    return res.json(userLogin);
}

export default loginUserController;