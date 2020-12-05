// resolvers functions..
//const posts = require("../../data/posts");
const { authCheck } = require("../../middleware/userAuth");

const resolvers = {
  Query: {
    users: () => 30,
  },
  Mutation: {
    loginUser: (_, args) => {
      let { email, password } = args.user;
      if (email == "admin" && password == "admin") {
        return {
          status: 200,
          message: "Logined Successfully",
          data: [{ posts }],
        };
      } else {
        return { status: 400, message: "Error" };
      }
    },
  },
};
module.exports = { resolvers };
