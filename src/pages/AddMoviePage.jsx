import {
  Box,
  CssBaseline,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  Button,
  Container,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

const AddMoviePage = () => {
  const navigate = useNavigate();

  const { addMovie } = useMovieContext();
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    director: "",
    img: "",
    rating: 0,
  });

  function handleChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.director.trim() ||
      !formValue.img.trim()
    ) {
      return;
    }
    addMovie({ ...formValue });
    navigate("/movies");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add movie
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Title"
              name="title"
              autoFocus
              value={formValue.title}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              value={formValue.description}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="director"
              label="Director"
              value={formValue.director}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="img"
              label="Image"
              value={formValue.img}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddMoviePage;
