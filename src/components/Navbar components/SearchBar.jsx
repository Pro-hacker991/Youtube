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
        consle.log(data)
        setResult(data)
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
        search
      </button>
        </form>
        
        {
         loading ? <p>loading  </p> : null         
        }
        
    </div>
  )
}

export default SearchBar
