import React, { useState } from 'react';

const languageOptions = [
  'All', 'Hindi', 'Malayalam', 'Kannada', 'Tamil', 'English', 'Japanese', 'Chinese', 'Spanish', 'Korean', 'Telugu'
];

const countryOptions = [
  'All', 'Australia', 'Canada', 'Germany', 'France', 'United Kingdom', 'Ireland', 'India', 'Norway', 'United States', 'United Arab Emirates', 'Bahrain', 'Kuwait', 'Oman', 'Qatar', 'Saudi Arabia', 'Singapore'
];

const genreOptions = [
  'All', 'Action', 'Drama', 'Sport', 'Biography', 'History', 'Sci-Fi', 'Thriller'
];

function Filter({ filterMovies }) {
  const [filters, setFilters] = useState({
    language: 'All',
    country: 'All',
    genre: 'All',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Filters:', filters); // Debugging
    filterMovies(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Language:
        <select name="language" value={filters.language} onChange={handleChange}>
          {languageOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        Country:
        <select name="country" value={filters.country} onChange={handleChange}>
          {countryOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        Genre:
        <select name="genre" value={filters.genre} onChange={handleChange}>
          {genreOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>
      <button type="submit">Filter</button>
    </form>
  );
}

export default Filter;
