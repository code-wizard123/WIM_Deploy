// routes/news.js
import express from "express";
import { NewsModel } from "../models/News.js";

const router = express.Router();

// Get all news
router.get('/getAllNews', async (req, res) => {
    try {
        const news = await NewsModel.find();
        res.json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add news
router.post('/addNews', async (req, res) => {
    try {
        const newNews = new NewsModel(req.body);
        const savedNews = await newNews.save();
        res.json(savedNews);
    } catch (error) {
        console.error('Error adding news:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update news
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedNews = await NewsModel.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedNews);
    } catch (error) {
        console.error('Error updating news:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete news
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedNews = await NewsModel.findByIdAndDelete(id);
        res.json(deletedNews);
    } catch (error) {
        console.error('Error deleting news:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export { router as newsRouter }; 
