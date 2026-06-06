const jwt = require("jsonwebtoken");    //these below only be shown in postman

const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization; //token called

    if (!token) {
        return res.status(401).json({
            message: "Token Required" // tells that token is not there and the token needed
        });
    }

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET //if token is already exist this run
        );

        req.user = decoded; // decorder

        next(); //move to control

    } catch {

        res.status(401).json({
            message: "Invalid Token" //later expire token logic is taken here
            
        });


    }
};

module.exports = authMiddleware;