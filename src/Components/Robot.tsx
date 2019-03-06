import React from 'react'


const Robot = ({robot}:any) => {
  const {id, name, email} = robot;
  return (
    <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <h2 style={{ marginLeft: '1rem'}}>{name}</h2>
      <p style={{ marginLeft: '1rem'}}>{email}</p>
    </div>
  )
}

export default Robot;