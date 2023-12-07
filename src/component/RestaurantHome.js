import React from 'react';
import shareVideo from '../assets/share.mp4';
import './style.css';
import SearchBar from '../common/SearchBar';
import RestaurantList from './RestaurantList';
import Header from '../common/Header';
import { useEffect, useState } from 'react';
import { paginate } from '../utils/paginate';
import Pagination from '../common/Pagination';
import { Card, CardContent, Typography } from '@mui/material';

const RestaurantHome = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [restaurant, setRestaurant] = useState([]);
  const [search, setSearch] = useState('');

  const getPagedData = () => {
    const pagedData = paginate(restaurant, currentPage, pageSize);
    return { totalCount: restaurant.length, data: pagedData };
  };

  const { totalCount, data: pagedData } = getPagedData();

  useEffect(() => {
    const fetchData = async () => {
      fetch('https://localhost:7180/api/Restaurant/GetRestaurantList')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setRestaurant(data);
        });
    };

    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = async () => {
    if (search) {
      try {
        const searchedRestaurants = data.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.city.toLowerCase().includes(search.toLowerCase()) ||
            item.state.toLowerCase().includes(search.toLowerCase())
        );

        setRestaurant(searchedRestaurants);
      } catch (error) {
        console.error('Error processing data:', error);
      }
    } else {
      // If no search term, display all data
      setRestaurant(data);
    }

    // Scroll to the top (adjust the value as needed)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <Header />
      <video
        src={shareVideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className="video"
      />
      <SearchBar
        onChange={handleSearch}
        setSearch={setSearch}
        search={search}
      />
      <RestaurantList data={pagedData} />
      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default RestaurantHome;
