import React from 'react'
import { useParams } from 'react-router-dom'

const Article = () => {
    const route = useParams()
    console.log(route);
    return (
        <div>
           <h2>Article: </h2>
        </div>
    )
}

export default Article
