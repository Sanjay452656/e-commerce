import jwt from "jsonwebtoken";

const generateToken = (id)=> {
    jwt.sign({id},"secret",{
        expiresIn:"7d"
    })
}

export default generateToken