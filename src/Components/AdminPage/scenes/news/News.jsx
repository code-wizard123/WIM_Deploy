import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [newNews, setNewNews] = useState({ description: '' });
    const [editingNewsId, setEditingNewsId] = useState(null);

    useEffect(() => {
        // Fetch all news articles from the server
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get('/news/getAllNews');
            setNews(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNews((prevNews) => ({
            ...prevNews,
            [name]: value,
        }));
    };

    const addNews = async () => {
        try {
            await axios.post('/news/addNews', newNews);
            setNewNews({ description: '' });
            fetchNews();
        } catch (error) {
            console.error('Error adding news:', error);
        }
    };

    const deleteNews = async (id) => {
        try {
            await axios.delete(`/news/${id}`);
            fetchNews();
        } catch (error) {
            console.error('Error deleting news:', error);
        }
    };

    const editNews = async (id) => {
        setEditingNewsId(id);
        const newsToEdit = news.find((item) => item._id === id);
        setNewNews({ ...newsToEdit });
    };

    const updateNews = async () => {
        try {
            await axios.put(`/news/${editingNewsId}`, newNews);
            setEditingNewsId(null);
            setNewNews({ description: '' });
            fetchNews();
        } catch (error) {
            console.error('Error updating news:', error);
        }
    };

    return (
        <div>
            <h1>News Page</h1>
            <div>
                <h2>Add News</h2>
                <label>
                    Description:
                    <input type="text" name="description" value={newNews.description} onChange={handleInputChange} />
                </label>
                {editingNewsId ? (
                    <button onClick={updateNews}>Update News</button>
                ) : (
                    <button onClick={addNews}>Add News</button>
                )}
            </div>

            <div>
                <h2>News Feed</h2>
                {news.map((item) => (
                    <div key={item._id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                        <p>{item.description}</p>
                        <button onClick={() => editNews(item._id)}>Edit</button>
                        <button onClick={() => deleteNews(item._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
