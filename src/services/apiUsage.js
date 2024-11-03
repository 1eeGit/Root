/**
 * Centralized fetch data function from APIs based on endpoint name
 * can be reused in multiple components
 */
 
const fetchDataFromAPI = async (endpoint) => {
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
  
  export { fetchDataFromAPI };
  