import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program_1} alt="" />
        <div className="caption">
          <h1>Michelle Gonçalves</h1>
          <p>breve apresentação</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_2} alt="" />
        <div className="caption">
          <h1>Bruna Motta</h1>
          <p>breve apresentação</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
