const userModel = require("../db/schema/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function generateToken(payload) {
  return jwt.sign(payload, `${process.env.SECRET}`, { expiresIn: "1d" });
}

const SignUpHandler = async (req, res) => {
  const findExistAccount = await userModel.findOne({
    email: { $eq: req.body.email },
  });

  if (findExistAccount) {
    return res.status(500).json({ msg: "account is exists" });
  }

  const setupUser = new userModel({
    name: req.body.name,
    email: req.body.email,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    isAdmin: false,
  });

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return res.status(500).json({ msg: "something went wrong..." });
    }

    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      if (err) {
        return res.status(500).json({ msg: "something went wrong..." });
      }

      setupUser.password = hash;
      await setupUser.save();
      const token = generateToken({
        name: setupUser.name,
        email: setupUser.email,
        firstName: setupUser.firstName,
        lastName: setupUser.lastName,
      });

      return res.status(200).json(token);
    });
  });
};

const SignInHandler = async (req, res) => {
  const findExistAccount = await userModel.findOne({
    email: { $eq: req.body.email },
  });

  if (!findExistAccount) {
    return res.status(500).json({ msg: "account is not found" });
  }

  bcrypt.compare(
    req.body.password,
    findExistAccount.password,
    (err, result) => {
      if (err) {
        return res.status(500).json({ msg: "something went wrong..." });
      }

      if (result) {
        const token = generateToken({
          name: findExistAccount.name,
          email: findExistAccount.email,
          firstName: findExistAccount.firstName,
          lastName: findExistAccount.lastName,
          isAdmin: findExistAccount.isAdmin || null,
          _id: findExistAccount?._id,
        });

        return res.status(200).json(token);
      }
    }
  );
};

const UpdateProfile = async (req, res) => {
  const findAccount = await userModel.findById(req.params.id);

  if (!findAccount) {
    return res.status(406).json({ msg: "You not log in" });
  }

  findAccount.firstName = req.body.firstName;
  findAccount.lastName = req.body.lastName;

  const saved = await findAccount.save();

  const token = generateToken({
    _id: saved._id,
    name: saved.name,
    email: saved.email,
    firstName: saved.firstName,
    lastName: saved.lastName,
    isAdmin: saved.isAdmin,
  });

  return res.status(200).json(token);
};

const SetAdmin = async (req, res) => {
  const { id } = req.params.id;
  const findAccount = await userModel.findOne({
    email: { $eq: req.body.email },
  });

  if (!findAccount) {
    return res.status(400).json({ msg: "No account find" });
  }

  findAccount.isAdmin = true;
  const saved = await findAccount.save();

  res.status(200).json(saved);
};

module.exports = { SignUpHandler, SignInHandler, UpdateProfile, SetAdmin };
