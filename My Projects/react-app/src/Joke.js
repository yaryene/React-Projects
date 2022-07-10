import React from 'react'

export default function Joke(props) {
  return (
    <div>
        {props.setup && <h3>setup: {props.setup}</h3>}
        {props.punchline && <p>punchline: {props.punchline}</p>}
        <hr />
    </div>
  )
}
