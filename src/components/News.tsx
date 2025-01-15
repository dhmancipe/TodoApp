import { useEffect, useState } from 'react';
import { getTopHeadlines } from '../api/newsClient';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const NewsOfTheDay = () => {
  const [firstArticle, setFirstArticle] = useState<any | null>(null); 
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();
  

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const response = await getTopHeadlines();

      if (response.success) {
      
        setFirstArticle(response.data[1] || null);
        setError(null);
      } else {
        setError(response.error || 'Failed to fetch news');
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <Card
     sx={{ backgroundColor: theme.palette.action.hover , borderRadius:5, width:580 }}>
      <CardContent>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error" sx={{ fontSize: '0.75rem' }}>{error}</Typography>
        ) : firstArticle ? (
          <>
            <Typography variant="h4" sx={{ fontSize: '1rem', paddingBottom:1 }}>Today's News</Typography> 
            <Typography variant="h6" sx={{ fontSize: '0.75rem' }}>{firstArticle.title}</Typography>
          </>
        ) : (
          <Typography sx={{ fontSize: '0.75rem' }}>No articles available</Typography> 
        )}
      </CardContent>
    </Card>
  );
};

export default NewsOfTheDay;
