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
    rating: 0,
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
      !formValue.img.trim()
    ) {
      return;
    }
    editMovie(id, { ...formValue });
    navigate(-1);
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

            <Button
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
