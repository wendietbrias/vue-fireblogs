const router = require("express").Router();
const {
  SignUpHandler,
  SignInHandler,
  UpdateProfile,
  SetAdmin,
} = require("../controller/Auth");

router.post("/signin", SignInHandler);
router.post("/signup", SignUpHandler);
router.patch("/update/:id", UpdateProfile);
router.patch("/admin/:id", SetAdmin);

module.exports = router;
