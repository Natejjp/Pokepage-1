import React from 'react'

export function Menu() {
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

      <section className="menuContainer" id="topMenu">
        <h1>Build your Own Menu</h1>
        <h3>Base:</h3>
        <div className="basePics">
          <img src="source" alt="whiteRice" height="64" width="64" />
          <img src="source" alt="brownRice" height="64" width="64" />
          <img src="source" alt="salad" height="64" width="64" />
          <img src="source" alt="noodles" height="64" width="64" />
          <img src="source" alt="seaweedWrap" height="64" width="64" />
        </div>
      </section>
      <section className="menuContainer">
        <h3>Proteins:</h3>
        <div className="proteinPics">
          <img src="source" alt="tuna" height="64" width="64" />
          <img src="source" alt="salmon" height="64" width="64" />
          <img src="source" alt="spicyTuna" height="64" width="64" />
          <img src="source" alt="spicySalmon" height="64" width="64" />
          <img src="source" alt="chicken" height="64" width="64" />
          <img src="source" alt="shrimp" height="64" width="64" />
        </div>
      </section>
      <section className="menuContainer">
        <h3>Veggies:</h3>
        <div className="veggiePics">
          <img src="source" alt="cucumber" height="64" width="64" />
          <img src="source" alt="carrot" height="64" width="64" />
          <img src="source" alt="corn" height="64" width="64" />
          <img src="source" alt="edamame" height="64" width="64" />
        </div>
      </section>
      <section className="menuContainer">
        <h3>Sauce:</h3>
        <div className="saucePics">
          <img src="source" alt="cucumber" height="64" width="64" />
          <img src="source" alt="carrot" height="64" width="64" />
          <img src="source" alt="corn" height="64" width="64" />
          <img src="source" alt="edamame" height="64" width="64" />
        </div>
      </section>
    </>
  )
}
