const isConsumer = require("../helpers/consumer");
const isFarmer = require("../helpers/farmer");

const signUp = async (req, res) => {
  const { role } = req.body;
  return role === "farmer" ? isFarmer(req, res) : isConsumer(req, res);
};

module.exports = signUp;
