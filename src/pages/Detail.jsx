import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail(props) {

  const {bests} = props
  const {id} = useParams()

  return (
    <div>
      <h2>detail page</h2>
      <img src={bests[id].image} alt = 'img' style={{width:500}}/>
      <h4>{bests[id].title}</h4>
      <h4>{bests[id].price}</h4>
    </div>
  )
}
