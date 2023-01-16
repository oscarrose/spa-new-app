import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Controls/Home';
import Layout from './Controls/Layout';
import Counter from './Compoments/Counter';
import Gallery from './Compoments/Gallery';
import Calculate from './Compoments/Calculate';
import Login from './Compoments/Login';

function App() {
  return (
    <div >
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={
            < Home />
          } />

          <Route path='counter-click' element={<Counter />} />
          <Route path='gallery' element={<Gallery />} />

          <Route path='calculate' element={<Calculate/>}/>
          <Route path='login' element={<Login/>}/>

        </Route>

      </Routes>

    </div>
  );
}

export default App;
