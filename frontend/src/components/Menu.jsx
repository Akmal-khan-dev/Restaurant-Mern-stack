import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
            <div className="heading">
                Our Popular Disher
            </div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dignissimos culpa aliquid delectus, aspernatur blanditiis recusandae maiores. Doloremque, sequi nisi ab fugit reiciendis distinctio consequuntur quaerat totam! Inventore, minus expedita?
            </p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(item=>{
                    return(
                        <div className="card" key={item.id} >
                           <img src={item.image} alt={item.title} />
                           <h3>{item.title}</h3>
                           <button>{item.category}</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default Menu
