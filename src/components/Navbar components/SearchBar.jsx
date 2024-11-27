"use client"



import React from 'react'
import { SearchVidoes } from '@/util/fetchData'
import { useState } from 'react'

const SearchBar = () => {
    
    const [ loading, setLoading ] = useState(false)
    const [ result, setResult ] = useState([])
    const  [ query, setQuery ] = useState("")

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true)

        const data = await SearchVidoes(`search/?query=${query}`)
        console.log(data)
        setResult(data.videos)
        setLoading(false)
    }

  return (
    <div>
        <form onSubmit={handleSearch}>
        <input type="text" placeholder='search..'
         value={query}
         onChange={(e) => setQuery(e.target.value)}
        />
        <button>
         Search
       </button>
        </form>
        
        {
         loading ? <p>loading...</p> : null         
        }
        

        {
          result.map((eachItem, index, array) => (
            <div key={index}>
              <h1>{eachItem.title}</h1>
              <img src={eachItem.thumbnails[0].url} alt="image" />
            </div>
          ))
        }
    </div>
  )
}

export default SearchBar
