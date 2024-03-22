import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './layout';
import Blogs from './Blogs';
import HomePage from './HomePage';
import Contact from './Contact';
import PageNotfound from './PageNotfound';
export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/blogs' element={<Blogs/>}/>    
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<PageNotfound/>}/>
        
      </Route>
    </Routes>

    </BrowserRouter>
  );
}


