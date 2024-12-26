
import axios, { AxiosResponse } from 'axios';

interface HttpResponse<T> {
  success: boolean;
  data?: T | boolean;
  error?: string;
}
const NewsApiClient = axios.create({
  baseURL: 'https://newsapi.org/v2', 
  timeout: 90000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getTopHeadlines = async (category: string = 'general', country: string = 'us'): Promise<HttpResponse<any>> => {
  const apiKey = '5ae720f4f0e84ce28f368cc6edaa1fa9'; 

  try {
    const response: AxiosResponse = await NewsApiClient.get('/top-headlines', {
      params: {
        category,
        country,
        apiKey,  
      },
    });   
    return {
      success: true,
      data: response.data.articles, 
    };
  } catch (error:any) {  
    return {
      success: false,
      error: error?.response?.data?.message || 'No Network Connection',
    };
  }
};

export { getTopHeadlines };
