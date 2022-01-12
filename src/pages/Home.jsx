import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <Link to='article/my-article'>
          Go to my article
        </Link>
    </div>
  )
}

export default Home