// this cmponent accepted props "cou" from the page.js

import React, { useContext, useState } from 'react'
import { SearchContext } from '@/contexts/SearchContext'
import styles from './Feeds.module.css'  

const Feeds = () => {   

  const { result, setResult } = useContext(SearchContext) 
  const [ playingVideo, setPlayingVideo ] = useState(null)  // state to track video playing


  //  function to play video related t the thumbnail
  const handlePlayVideo = (params) => {
    setPlayingVideo(params)     
  }
  
  

  return (
    <div className={styles.container}>   
      {
        result.map((eachItem, index, array) => (
          <div key={index} className={styles.content}>  
            {
              playingVideo === eachItem.video_id ? 
              <iframe 
              src={https://www.youtube.com/embed/${eachItem.video_id}}
              // frameborder="0"
              >
              </iframe>
              : 
              (
                <div>
                  <img src={eachItem.thumbnails[0].url} alt="image" onClick={() => handlePlayVideo(eachItem.video_id)}/>    
                  <h1>{eachItem.title}</h1>
                  <p>{eachItem.description}</p> 
                  <p>{eachItem.number_of_views}</p>
                  <p>{eachItem.video_length}</p>
                  <p>{eachItem.published_time}</p>  
                </div>
              )
            }
          </div>
        ))    
      }
    </div>
  )
}

export default Feeds

