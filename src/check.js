import React from 'react'

export default function Check(props) {
  return (
    <>
    <i className={`fas fa-${props.title === "PLUS" && "PRO" ? "check" : props.title==="FREE" ? "times" : "check"}`}></i>
    </>
  )
}