import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './page/MainPage';
import AboutUs from './page/AboutUs';
import ProductPage from './page/ProductPage';
import ProductionPage from './page/ProductionPage';
import TestimoniPage from './page/TestimoniPage';
import ContactPage from './page/ContactPage';
import Products_1 from './page/Products_1';
import Products_2 from './page/Products_2';
import Products_3 from './page/Products_3';
import Products_4 from './page/Products_4';
import Products_5 from './page/Products_5';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/meet' element={<AboutUs />} />
                <Route path='product' element={<ProductPage />} />
                <Route path='/product/sub-product-1' element={<Products_1 />} />
                <Route path='/product/sub-product-2' element={<Products_2 />} />
                <Route path='/product/sub-product-3' element={<Products_3 />} />
                <Route path='/product/sub-product-4' element={<Products_4 />} />
                <Route path='/product/sub-product-5' element={<Products_5 />} />
                <Route path='/production' element={<ProductionPage />} />
                <Route path='/testimoni' element={<TestimoniPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
