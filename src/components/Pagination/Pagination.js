import React from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors'

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
});

const CustomPagination = ({setPage, numOfPages = 10}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

  return (
    <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
        }}
    >
    <ThemeProvider theme={theme}>
       <Pagination 
            count={numOfPages} 
            color="primary"
            onChange={(event) => handlePageChange(event.target.textContent)} />
    </ThemeProvider>
    </div>

  )
}

export default CustomPagination