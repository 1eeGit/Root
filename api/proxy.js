// central proxy for multiple APIs
// call the component function -fetchAPI- with the endpoint as an argument
import fetch from 'node-fetch';
const axios = require('axios');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { endpoint } = req.body;
  const JUDGE0_API_URL = `https://judge0-ce.p.rapidapi.com/${endpoint}`;
  const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

  try {
    const response = await axios.get(JUDGE0_API_URL, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data from Judge0 API:', error);
    res.status(500).json({ error: error.message });
  }
}