const Auth = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.Register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //checking for existing user
    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hashing the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    //creating a new user
    const newUser = new Auth({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "New user created" });
  } catch (error) {
    console.error("error registering user", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createToken = (user) => {
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_Secret,
    { expiresIn: "1h" }
  );
  return token;
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Auth.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid email or No user please register" });
    }
    const token = createToken(user);
    res.status(200).json({ message: "Token created", token });

    //comparing passwords
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Ivalid passsword" });
    } else {
      //login successful message
      return res.status(200).json({ message: "Logged In" });
    }
  } catch (error) {
    console.error("Error Loggin the user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
