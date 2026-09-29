const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/usermodel");

const router = express.Router();


// GET ALL USERS
// GET /users

router.get("/", async (req, res) => {
    try {
        const { role, age } = req.query;

        let filter = {};

        if (role) {
            filter.role = role;
        }

        if (age) {
            filter.age = Number(age);
        }

        const users = await User.find(filter);

        res.status(200).json(users);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong while fetching users"
        });
    }
});


// GET ONE USER
// GET /users/:id

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Check whether ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid user ID"
            });
        }

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});


// CREATE USER
// POST /users

router.post("/", async (req, res) => {
    try {
        const { name, email, age, role } = req.body;

        // Check required fields
        if (!name || !email || age === undefined || !role) {
            return res.status(400).json({
                message: "Name, email, age and role are required"
            });
        }

        const user = await User.create({
            name,
            email,
            age,
            role
        });

        res.status(201).json(user);

    } catch (error) {
        console.error(error);

        res.status(400).json({
            message: "Invalid user data"
        });
    }
});


// PUT USER
// PUT /users/:id

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid user ID"
            });
        }

        const { name, email, age, role } = req.body;

        // PUT requires complete user data
        if (!name || !email || age === undefined || !role) {
            return res.status(400).json({
                message: "Name, email, age and role are required"
            });
        }

        const user = await User.findByIdAndUpdate(
            id,
            {
                name,
                email,
                age,
                role
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong while updating the user"
        });
    }
});


// PATCH USER
// PATCH /users/:id

router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid user ID"
            });
        }

        const user = await User.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);

    } catch (error) {
        console.error(error);

        res.status(400).json({
            message: "Invalid update data"
        });
    }
});


// DELETE USER
// DELETE /users/:id

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid user ID"
            });
        }

        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong while deleting the user"
        });
    }
});


module.exports = router;


