import React, { useEffect, useState } from 'react';
import './style.css';
import { Stack, Card, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const RestaurantDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://localhost:7180/api/Restaurant/GetRestaurantListById${id}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    fetchData();
  }, []);

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: 'column' },
        p: '20px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card style={{ width: '1000px', height: '500px' }}>
        <CardContent>
          <Typography
            variant="h5"
            fontSize={34}
            color="primary"
            className="header"
          >
            Restaurant App
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                <strong>Name: </strong> {data.name}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Address: </strong> {data.address}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Website: </strong> {data.website}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Contact Number: </strong> {data.phone_number}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Latitude: </strong> {data.latitude}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Longitude: </strong> {data.longitude}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>City: </strong> {data.city}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>State: </strong> {data.state}
              </Typography>
            </li>
            <li>
              <Typography
                variant="body2"
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <strong>URL: </strong> {data.url}
              </Typography>
            </li>
          </ul>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default RestaurantDetail;
