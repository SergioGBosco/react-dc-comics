import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-20">
            <div className="logo">
              <img src="../../img/dc-logo.png" alt="" />
            </div>
          </div>
          <div className="col-80">
            <ul id="menu">
              <li>
                <a href="#">Characters</a>
              </li>
              <li><a href="#" className='active'>Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">GAmes</a></li>
              <li><a href="#">collectibles</a></li>
              <li><a href="#">videos</a></li>
              <li><a href="#">fans</a></li>
              <li><a href="#">news</a></li>
              <li><a href="#">shop</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
