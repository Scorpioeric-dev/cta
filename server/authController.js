const bcrypt = require("bcryptjs");

module.exports = {
  async register(req, res) {
    const db = req.app.get("db");
    const { email, password, phone} = req.body;
    // console.log(req.body);

    const user = await db.find_email(email);
    console.log(req.body);
    if (user[0]) return res.status(200).send({ message: "Email already in use" });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await db.create_user([email, hash, phone]);
    delete newUser[0].hash;
    req.session.user = newUser[0];
    res
      .status(201)
      .send({ message: "Success", user: req.session.user,loggedIn:true });

    console.log(req.session.user);
  },
  getSession(req, res) {
    if (req.session) {
      res.status(200).send(req.session);
    }
  },

  async login(req, res) {
    const db = req.app.get("db");
    const { email, password } = req.body;

    const user = await db.find_email([email]);
    if (!user[0])
      return res.status(200).send({ message: "Email does not match" });
    const result = bcrypt.compareSync(password, user[0].hash);
    if (result) {
      delete user[0].hash;
      req.session.user = user[0];
      console.log(req.session);
      return res
        .status(200)
        .send({
          message: "Welcome Back",
          user: req.session.user,
          loggedIn: true
          
        });
    }
  },
};
