import React from 'react'

function ProfilePhoto() {
  return (
    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
      <div>
        <h1 style={{margin: "0"}}>1.3M </h1>
        <p style={{margin: "0"}}>Followers</p>
      </div>

      <div style={{marginTop: "-50px",backgroundColor: "var(--black)", borderRadius: "14px", width: "100px", padding: "8px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <img style={{width: "100px", height: "100px", objectFit: "cover", objectPosition: "top", borderRadius: "10px"}} src="https://img.freepik.com/free-photo/angry-hate-rage-emotional-angry-afro-man-pink-studio-background-emotional-young-face-profile-male-half-length-portrait-human-emotions-facial-expression-concept-trendy-colors_155003-17606.jpg?w=2000" alt="" />
      </div>

      <div>
        <h1 style={{margin: "0"}}>44 </h1>
        <p style={{margin: "0"}}>Followers</p>
      </div>
    </div>
  ) 
}

export default ProfilePhoto