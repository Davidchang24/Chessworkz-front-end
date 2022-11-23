import React from 'react';
import Courses from './components/Course/Courses'
import Header from './components/Header/Header'
import Profile from './components/Account/Profile';
import Chessground from './components/Chessboard/Chessground';
import { Helmet } from 'react-helmet';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div>
      <Helmet>
        <title>ChessWorkz</title>
        <meta name="description" content="Testing icon and titles" />
    </Helmet>
      <Header/>
      <Profile/>
      <Chessground/>
      <Courses/>
    </div>
  );
}

export default App;
