import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddArticle from './component/Dashboard/AddArticle';
import AllPost from './component/Dashboard/AllPost';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Dashboard from './component/Pages/Dashboard';
import Home from './component/Pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home /> }></Route>
        <Route path='/dashboard' element={<Dashboard /> }>
          <Route path='addArticle' element={<AddArticle />}></Route>
          <Route path='allPost' element={<AllPost />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
