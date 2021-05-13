import React from "react"
import ash from '../ash.jpg'

const Profile = ({title="Pranav is still exists", logo1=ash }) => (
    <div className="card r" style={{width: "10rem"}}>
    <img className="card text-center" src={logo1} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
)
export default Profile;