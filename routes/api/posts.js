
const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route("/")
	.post(postController.create)
	.get(postController.findAll);


module.exports = router;