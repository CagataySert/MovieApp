import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage.js';
import NewMoviePage from './components/pages/NewMoviePage.js';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />

        <Container text>
          <Route path='/movies' exact component={MoviesPage}></Route>
          <Route path='/movies/new' exact component={NewMoviePage}></Route>
          <Route path='/movie/:_id' exact component={NewMoviePage}></Route>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
