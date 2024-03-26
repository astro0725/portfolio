import './assets/css/tailwind.css'

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Aside from './components/Aside';

function App() {
  return (
    <>
      <div className='flex'>
        <Aside/>
        <Navbar/>
        <section style={{
          scrollBehavior: 'smooth'
        }}>
          <Outlet/>
        </section>
      </div>
    </>
  );
}

export default App;