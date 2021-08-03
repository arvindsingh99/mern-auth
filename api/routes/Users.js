const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Update

router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findOneAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { useFindAndModify: false }
            );
            res.status(200).json(updatedUser);
        }
        catch (err) {
            res.status(500).json(err);
            console.log(res)
        }
    }
    else {
        res.status(401).json("You cannot update others account");
    }
});

//Delete

router.delete("/:id", async (req, res) => {

    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: User.Username })
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }

        } catch (err) {
            res.status(404).json("User not found!")
        }

    } else {
        res.status(401).json("You can delete only your account!");
    }
});
//Get User
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router