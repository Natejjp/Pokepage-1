import React from 'react'

export function Home() {
  return (
    <>
      <main className="main">
        <section className="container" id="firstHome">
          <div>
            <h2>Welcome to poke falls website</h2>
          </div>
          <div>
            <button>Order Delivery</button>
            <button>Order Pickup</button>
          </div>
        </section>

        <section className="container" id="secondHome">
          <ul className="secondPage">
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              facilis eaque neque rem, odio incidunt? Aliquam, placeat at? Minus
              asperiores molestias dolorem non id deserunt beatae nihil, maxime
              quo blanditiis repellendus nostrum amet deleniti eligendi modi
              suscipit ex sed laborum.
            </li>
            <li className="toMenuPic">
              <a href="menu">
                <img src="source" alt="picToMenu" height="64" width="64" />
              </a>
            </li>
            <li>
              <img src="source" alt="onePic" height="64" width="64" />
            </li>
            <li>
              <img src="source" alt="twoPic" height="64" width="64" />
            </li>
            <li>
              <img src="source" alt="threePic" height="64" width="64" />
            </li>
          </ul>
        </section>

        <section className="container" id="thirdHome">
          <h2>Follow us on Insta</h2>

          <ul className="instaPics">
            <li>
              {' '}
              <img src="source" alt="instaPic" height="64" width="64" />
            </li>
            <li>
              {' '}
              <img src="source" alt="instaPic" height="64" width="64" />
            </li>
            <li>
              {' '}
              <img src="source" alt="instaPic" height="64" width="64" />
            </li>
            <li>
              {' '}
              <img src="source" alt="instaPic" height="64" width="64" />
            </li>
            <li>
              {' '}
              <img src="source" alt="instaPic" height="64" width="64" />
            </li>
            <li>
              {' '}
              <img src="source" alt="instaPic" height="64" width="64" />
            </li>
          </ul>
        </section>
        <footer className="footer">
          <p>Footer</p>
        </footer>
      </main>
    </>
  )
}
