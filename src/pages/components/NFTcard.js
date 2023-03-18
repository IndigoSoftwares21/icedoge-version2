import React from 'react'
import './nftcard.css'

const NFTcard = (props) => {
  return (
    <div style={props.style} className="nft-image-holder">
            <img src={props.img} alt="nft"/>
            <p>{props.hashtag}</p>
    </div>
  )
}

export default NFTcard