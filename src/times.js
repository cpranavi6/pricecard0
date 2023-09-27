import React from 'react'

export default function Times(props) {
  return (
    <i className={`fas fa-${props.title === "PRO" ? "check" : "times"}`}></i>
  )
}
