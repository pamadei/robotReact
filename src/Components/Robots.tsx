import React from 'react';
import Robot from '../Components/Robot'

const Robots = ({robots}:any) => {
  return robots.map((robot:any) => {
    return (
      <Robot key={robot.id} robot={robot} />
    )
  })

}

export default Robots;