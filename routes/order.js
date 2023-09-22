function isPremium(req, res, next) {
    let type = req.headers.type;

    // Change them with JWT
    let user = req.headers.username;
    let password = req.headers.password;


    if (type === "industrialist" && req.headers) {

    }
}