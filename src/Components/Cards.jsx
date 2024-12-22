import React from 'react'
import './Cards.css'
import Md1 from '../assets/md1.webp'
import Md2 from '../assets/md2.webp'
import Md3 from '../assets/md3.webp'
import Md4 from '../assets/md4.webp'
import Md5 from '../assets/md5.webp'
import Md6 from '../assets/md6.webp'
import Md7 from '../assets/md7.webp'
import Md8 from '../assets/md8.webp'
import Md9 from '../assets/md9.webp'
import Md10 from '../assets/md10.webp'
import Md11 from '../assets/md11.webp'
import Md12 from '../assets/md12.webp'
import Airprtsw from '../assets/airports.webp'
import Airprtsb from '../assets/airportsb.webp'
const Cards = () => {
  return (
    <div className='main'>
        <h1 className='text1'>SmartPhones</h1>
     <div className="cardsDiv">
        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
          </div>
          <div className="img">
            <img src={Md1} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Md2} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Md3} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Md4} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Md5} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Md6} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Md7} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Md8} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Md9} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Md10} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Md11} alt="" />
          </div>
        </div>


        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Md12} alt="" />
          </div>
        </div>
     </div>
     <h1 className='text2'>Accessories</h1>
     <div className="cardsDiv">

     <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Airprtsw} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="text">
          <button>New</button>
            <h2>realme C75</h2>
            <h3 className='dec'>Duhlai Horai Hai</h3>
            <h4 className='rs'>Rs.89,999</h4>
          </div>
          <div className="img">
            <img src={Airprtsb} alt="" />
          </div>
        </div>
     </div>
    </div>
    
  )
}

export default Cards