import Posting from "../models/PostingModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getPostings = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Posting.findAll({
                attributes: ['uuid', 'title', 'description'],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Posting.findAll({
                attributes: ['uuid', 'title', 'description'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getPostingById = async (req, res) => {
    try {
        const posting = await Posting.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!posting) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === "admin") {
            response = await Posting.findOne({
                attributes: ['uuid', 'title', 'description'],
                where: {
                    id: posting.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Posting.findOne({
                attributes: ['uuid', 'title', 'description'],
                where: {
                    [Op.and]: [{ id: posting.id }, { userId: req.userId }]
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createPosting = async (req, res) => {
    const { title, description } = req.body;
    try {
        await Posting.create({
            title: title,
            description: description,
            userId: req.userId
        });
        res.status(201).json({ msg: "Post Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updatePosting = async (req, res) => {
    try {
        const posting = await Posting.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!posting) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { title, description } = req.body;
        if (req.role === "admin") {
            await Posting.update({ title, description }, {
                where: {
                    id: posting.id
                }
            });
        } else {
            if (req.userId !== posting.userId) return res.status(403).json({ msg: "Akses terlarang" });
            await Posting.update({ title, description }, {
                where: {
                    [Op.and]: [{ id: posting.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Post updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deletePosting = async (req, res) => {
    try {
        const posting = await Posting.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!posting) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { title, description } = req.body;
        if (req.role === "admin") {
            await Posting.destroy({
                where: {
                    id: posting.id
                }
            });
        } else {
            if (req.userId !== posting.userId) return res.status(403).json({ msg: "Akses terlarang" });
            await Posting.destroy({
                where: {
                    [Op.and]: [{ id: posting.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Post deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}