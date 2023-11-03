import React from 'react'
import './Donate.css'

function Donate() {
  return (
    <div className='DonatePage'>
      <h1>DONATE TO NGO</h1>
      <div className="DonateCont">
        <div className="DonateNowCont">
            <label>Book Name</label>
            <input type="text" placeholder='Enter the Book Name' className='inputText'/>
            <label>Book Category</label>
            <select className='inputText'>
                <option>Select Category</option>
                <option>Action-Adventure</option>
                <option>Philosophy</option>
            </select>
            <label>Book Description</label>
            <textarea cols="10" rows="5" placeholder='Enter the details of the book' className='inputText'></textarea>
            <label>Book Image</label>
            <input type="file" className='inputText'/>
            <label>Book Price</label>
            <input type="number" placeholder='Enter the price of Book' className='inputText'/>
            <button>Donate Now</button>
        </div>
      </div>
    </div>
  )
}

export default Donate
