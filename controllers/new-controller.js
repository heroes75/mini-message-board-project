const { body, validationResult, matchedData } = require("express-validator");
const { addMessage } = require("../db/queries");

function newController(req, res) {
  res.render("form", { title: "New" });
}

const constraint = [
  body("username")
    .isAlphanumeric()
    .withMessage("username must be alphanumeric"),
  body("text")
    .isLength({ max: 150 })
    .withMessage("your message must not over 150 character"),
];
async function newPost(req, res) {
  const errors = validationResult(req);
  console.log("errors:", errors);
  if (!errors.isEmpty()) {
    res.render('form', {errors: errors.errors, title: "mini message post"})
    return
  }
  console.log("req.body:", req.body);
  const { text, username } = req.body;
  await addMessage({ text: text, username: username });
  res.redirect("/");
}

module.exports = { newController, newPost, constraint };
