import './App.css';
import RestaurantDetail from './component/RestaurantDetail';
import RestaurantHome from './component/RestaurantHome';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RestaurantHome />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </div>
  );
}

export default App;
