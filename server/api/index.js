// apiRoutes/index.js
const router = require("express").Router();

router.use("/users", require("./users")); // Users? Check.
router.use("/puppies", require("./puppies")); // Puppies? Check.
router.use("/kittens", require("./kittens")); // Kittens? Check.

// Sloths?!?! Get outta town!
router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

module.exports = router;
