import React, { useState } from 'react';
import { TextField, Typography, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const GridPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#444',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body1"
          color="white"
          sx={{ marginBottom: "5px" }}
        >
          Ваши предметы коллекционирования
        </Typography>
        <TextField
          placeholder="Поиск..."
          variant="outlined"
          size='small'
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            borderRadius: "8px",
            backgroundColor: '#555',
            width: '95%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              '& input': {
                color: '#222',
                padding: '8px 1px',
                height: 'auto',
              },
              '& fieldset': {
                borderColor: '#555',
              },
              '&:hover fieldset': {
                borderColor: '#777',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#999',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'grey',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: "150px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography color="gray"  sx={{fontSize: "16px"}}>
          {searchQuery ? 'Ничего не найдено' : 'Нет предметов коллекционирования'}
        </Typography>
      </Box>
    </Box>
  );
};

export default GridPage;
