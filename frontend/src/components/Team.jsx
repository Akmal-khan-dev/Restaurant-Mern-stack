import React from 'react'
import {data} from '../restApi.json'

const Team = () => {
  return (
    <section className="team" id='team'>
      <div className="container">
        <div className="heading_section">
            <h1 className='heading'>Our Team</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quidem atque odit culpa maxime ex error asperiores fuga magnam quia vitae commodi, harum quibusdam consequuntur dolorem ut. Facilis, aspernatur aperiam?</p>
        </div>
        <div className="team_container">
            {
                data[0].team.map(item =>{
                    return(
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3 >{item.name}</h3>
                            <p>{item.designation}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default Team
