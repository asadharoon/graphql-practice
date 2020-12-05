const { merge } = require("lodash");
const { resolvers: PostResolver } = require("./posts.resolvers");
const { resolvers: UserResolver } = require("./user.resolver");
const resolvers = merge(PostResolver, UserResolver);
console.log(resolvers);
module.exports = { resolvers };
