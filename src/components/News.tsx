import React, { useEffect, useState } from 'react';
import { getTopHeadlines } from '../api/newsClient';

import { Card, CardContent, Typography, CircularProgress } from '@mui/material';

const NewsOfTheDay = () => {
  const [firstArticle, setFirstArticle] = useState<any | null>(null); 
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
    <Card>
      <CardContent>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error" sx={{ fontSize: '0.75rem' }}>{error}</Typography>
        ) : firstArticle ? (
          <>
            <Typography variant="h5" sx={{ fontSize: '1rem' }}>Today's News</Typography> 
            <Typography variant="h6" sx={{ fontSize: '0.875rem' }}>{firstArticle.title}</Typography>
          </>
        ) : (
          <Typography sx={{ fontSize: '0.75rem' }}>No articles available</Typography> 
        )}
      </CardContent>
    </Card>
  );
};

export default NewsOfTheDay;
