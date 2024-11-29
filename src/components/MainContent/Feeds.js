// this Component accepted props "cou" from the page.js

import React from 'react'

const Feeds = ({cou}) => {
  return (
    <div>
      My videos

      {/* accepting props */}
      {cou}
      {/*End accept props*/}
    </div>
  )
}

export default Feeds
