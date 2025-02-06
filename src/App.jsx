import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Rowing } from "@mui/icons-material";
import Header from "./components/Header";
import Hero from './components/Hero';
import Feature from './components/Feature';
import Cta from './components/Cta';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Cta/>
      <Footer/>
    </>
  );
};

export default App;
