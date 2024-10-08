import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Scoreboard from './components/Scoreboard';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddScore from './components/AddScore';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<AddScore />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
