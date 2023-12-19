const express = require("express");
const { data } = require("../database");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.json({
            resorts: data,
        });
    } catch (error) {
        res.json({
            message: error,
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const { image, title, description } = req.body;

        if (image === "" || location === "" || description === "") {
            return res.json({
                message: "image / title / description missing",
            });
        }

        data.push({ image, title, description });

        return res.json({
            data: data,
        });
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = { resortRoute: router };
