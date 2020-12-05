let authorized = false;
const authCheck = (req, res, next = (f) => f) => {
  let token = req.header("x-auth-token");
  if (token) {
    next();
  } else throw new Error("Not authorized");
};
module.exports = { authCheck };
