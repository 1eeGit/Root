import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://judge0-ce.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_JUDGE0_API_KEY
  }
});

export const runCode = async (code, languageId = 71) => {
  try {
    const response = await axiosInstance.post('/submissions?wait=true', {
      source_code: code,
      language_id: languageId,
      stdin: ''
    });

    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error executing code:', error.response ? error.response.data : error.message);
    return { stderr: 'Execution error', details: error.message };
  }
};
export const fetchDataFromAPI = async (endpoint) => {
  try {
    const response = await fetch(`/api/proxy?endpoint=${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error fetching data from ${endpoint}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
};
