export const generateToken = (user, message, statusCode, res)=>{
    const token = user.generateJsonWebToken();
    const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";
    res.status(statusCode).cookie(cookieName, token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
         secure: process.env.NODE_ENV === 'production', 
         sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
    }).json({
        success: true,
        message,
        user,
        token,
    });

};
