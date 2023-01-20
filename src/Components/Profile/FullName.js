import React from 'react'
import { MdVerified } from "react-icons/md";

function FullName() {
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column",width: "100%", marginTop: "20px", marginBottom: "20px", borderBottom: "solid 1px var(--secondary)"}}>
        <div style={{display: "flex", alignItems: "center"}}>
            <MdVerified style={{fontSize: "20px", marginRight: "6px", color: "var(--blue)"}}/>
            <h1 style={{margin: "0px"}}>Samuel ma</h1>
        </div>
        <p style={{margin: "0"}}>@samuel</p>
    </div>
  )
}

export default FullName