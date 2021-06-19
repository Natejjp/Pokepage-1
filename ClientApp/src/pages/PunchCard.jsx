import React from 'react'

export function PunchCard() {
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
        Enter phone number
        <input />
      </div>
      <div className="topPunchCard">
        Enter number of stamps
        <input />
      </div>
      <div className="topPunchCard">
        <ul className="punchCard">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
      </div>
    </>
  )
}
