import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './first';
import Second from './second';
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<First />} />
        <Route path='/second' element={<Second />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
