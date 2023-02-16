const { AuthenticationError } = require("apollo-server-express");
const { User, History } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("history");
    },
    history: async (parent) => {
      return History.find().sort({ createdAt: -1 });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args); //waiting for user to be created
      const token = signToken(user); //signToken added

      return { token, user }; //returns token and user info in graphQL
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    //Add history in GQL
    addHistory: async (parent, { person, description, link }) => {
      const thought = await History.create({ thoughtText, thoughtAuthor }); //pretty much how a post works when you post

      await User.findOneAndUpdate(
        { username: person },
        { $addToSet: { history: description } }
      );

      return history;
    },
    removeHistory: async (parent, { person }) => {
      return History.findOneAndDelete({ _id: person });
    },
  },
};

module.exports = resolvers;
