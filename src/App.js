import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react';
function App() {
  return (
    <Router>
    <div>
    <Navigation />
      <Routes>
      <Route path='/pet-details-not-found' element={<PetDetailsNotFound />} />
      <Route path="/search"  element={<SearchPage />} />
      <Route path="/">
      <Route index element={<HomePage />} />
      <Route path=":type" element={<HomePage />} />
      </Route>
      <Route path="/:type/:id" element={<PetDetailsPage />} />
      </Routes>
      </div> </Router>
  );
}

export default App;
