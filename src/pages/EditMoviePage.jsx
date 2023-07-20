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
import React, { useEffect, useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { useNavigate, useParams } from "react-router-dom";

const defaultTheme = createTheme();

const EditMoviePage = () => {
  const navigate = useNavigate();

  const { movie, getOneMovie, editMovie } = useMovieContext();
  const { id } = useParams();

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    director: "",
    img: "",
    rating: "",
    category: "",
  });

  useEffect(() => {
    getOneMovie(id);
  }, []);

  useEffect(() => {
    if (movie) {
      setFormValue(movie);
    }
  }, [movie]);

  function handleChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.director.trim() ||
      !formValue.img.trim() ||
      !formValue.rating ||
      !formValue.category.trim()
    ) {
      return;
    }
    editMovie(id, { ...formValue, rating: +formValue.rating });
    navigate(-1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: "rgba(242, 160, 123, 0.9)",
          borderRadius: "30px",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" color="white">
            Edit Movie
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="rating"
              label="Rating"
              value={formValue.rating}
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                value={formValue.category}
                onChange={handleChange}
                name="category"
                label="Category"
              >
                <MenuItem value="Show">Show</MenuItem>
                <MenuItem value="Movie">Movie</MenuItem>
              </Select>
            </FormControl>
            <Button
              style={{ backgroundColor: "#7D0633" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EditMoviePage;
