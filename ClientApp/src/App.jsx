import React from 'react'
import './custom.scss'
import { Link, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { PunchCard } from './pages/PunchCard'
import { OrderNow } from './pages/OrderNow'
import { Menu } from './pages/Menu'
import { About } from './pages/About'

export function App() {
  return (
    <>
      <header className="header">
        <div className="rightSide">
          <ul>
            <Link to="/">
              <li>Poke Falls</li>
            </Link>
          </ul>
        </div>
        <div className="leftSide">
          <ul className="nav">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/OrderNow">Order Now</Link>
            </li>
            <li>
              <Link to="/PunchCard">Punch Card</Link>
            </li>
          </ul>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/punchcard">
          <PunchCard />
        </Route>
        <Route exact path="/ordernow">
          <OrderNow />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </>
  )
}
