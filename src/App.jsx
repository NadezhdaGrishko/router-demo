import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import About from './pages/About.jsx'
import Article from './pages/Article.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav class='menu'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='article/my-article'>link</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/article/:slug' element={<Article/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App