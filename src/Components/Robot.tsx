import React from 'react'


const Robot2 = (props:any) => {
  return (
    <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5">
      <img src="https://robohash.org/res?200x200" alt="robot" />
      <h2 style={{ marginLeft: '1rem'}}>John Doe</h2>
      <p>john.doe@gmail.com</p>
    </div>
  )
}

export default Robot2;