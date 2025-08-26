import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-25">
            <div className="logo">
              <img src="../../public/img/dc-logo.png" alt="" />
            </div>
          </div>
          <div className="col-50">
            <ul id="menu">
              <li>
                <a href="#">Characters</a>
              </li>
              <li><a href="#"></a>Comics</li>
              <li><a href="#"></a>Movies</li>
              <li><a href="#"></a>TV</li>
              <li><a href="#"></a>GAmes</li>
              <li><a href="#"></a>collectibles</li>
              <li><a href="#"></a>videos</li>
              <li><a href="#"></a>fans</li>
              <li><a href="#"></a>news</li>
              <li><a href="#"></a>shop</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
