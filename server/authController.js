const bcrypt = require("bcryptjs");

module.exports = {
  async register(req, res) {
    const db = req.app.get("db");
    const { email, password, phone } = req.body;
    console.log(req.body);

    const user = await db.find_email(email);
    console.log(req.body);
    if (user[0]) return res.status(200).send({ message: "Invalid email" });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await db.create_user([email, hash, phone]);
    delete newUser[0].hash;
    req.session.user = newUser[0];
    res
      .status(201)
      .send({ message: "Success", user: req.session.user, loggedIn: true });

    console.log(req.session.user);
  },
  getSession(req,res){
    if(req.session){
      res.status(200).send(req.session)
    }
  },
  
};
