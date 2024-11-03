// central proxy for multiple APIs
// call the component function -fetchAPI- with the endpoint as an argument
import fetch from 'node-fetch';

export default async (req, res) => {
  const { endpoint } = req.query;  
  const apiKey = process.env.RAPIDAPI_KEY;

  let apiUrl;
  let headers = {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "", 
  };

  switch (endpoint) {
    case 'api1': //judge0, python, c, c++, java, etc
      apiUrl = 'https://judge0-ce.p.rapidapi.com/about';
      headers["X-RapidAPI-Host"] = "judge0-ce.p.rapidapi.com";
      break;
    case 'api2':
      apiUrl = 'https://api2.example.com/endpoint';
      headers["X-RapidAPI-Host"] = "api2.example.com";
      break;
    case 'api3':
      apiUrl = 'https://api3.example.com/endpoint';
      headers["X-RapidAPI-Host"] = "api3.example.com";
      break;
    default:
      res.status(400).json({ error: "Invalid API endpoint" });
      return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers,
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
};
