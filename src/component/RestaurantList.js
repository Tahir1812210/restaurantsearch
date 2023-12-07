import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const RestaurantList = ({ data }) => {
  const cardStyles = {
    width: '100%',
    margin: '20px',
    border: '2px solid #ccc',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textDecoration: 'none', // Remove underlines
    color: 'inherit', // Inherit text color
    display: 'block',
    transition: 'transform 0.2s ease-in-out',
  };

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40px',
      }}
    >
      {data.map((point, index) => (
        <Link
          to={`/restaurant/${point.id}`}
          key={point.id}
          style={{ textDecoration: 'none' }}
        >
          {/* Use the Link component to navigate to the detail page */}
          <Card style={{ margin: '20px', width: '1000px' }}>
            <CardContent>
              <Typography variant="h5" fontSize={24} color="primary">
                {point.name}
              </Typography>
              <Typography variant="body2">
                {point.latitude + ', ' + point.longitude}
              </Typography>
              <Typography variant="body2">
                {point.city + ', ' + point.state}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
