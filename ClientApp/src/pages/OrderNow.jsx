import React from 'react'

export function OrderNow() {
  return (
    <>
      <header className="header">
        <div className="rightSide">
          <ul>
            <li>Poke Falls</li>
          </ul>
        </div>
        <div className="leftSide">
          <ul className="nav">
            <li>About</li>
            <li>Menu</li>
            <li>Order Now</li>
            <li>Punch Card</li>
          </ul>
        </div>
      </header>

      <div className="topPunchCard">
        <a href="UberEats">
          <img src="source" alt="UberEats" height="64" width="64" />
        </a>
        <a href="Doordash">
          <img src="source" alt="Doordash" height="64" width="64" />
        </a>
        <a href="Grubhub">
          <img src="source" alt="Grubhub" height="64" width="64" />
        </a>
        <a href="Menufy">
          <img src="source" alt="Menufy" height="64" width="64" />
        </a>
        <a href="BiteSquad">
          <img src="source" alt="Bitesquad" height="64" width="64" />
        </a>
      </div>
    </>
  )
}
