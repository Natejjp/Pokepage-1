import React, { useState, useEffect } from 'react'

export function TennisHomePage() {
  return (
    <>
      <header>
        <ul>
          <li>
            <nav>
              <a href="/">
                <i className="homeTitle"></i> Tennis Buds
              </a>
            </nav>
          </li>
          <li className="avatar">
            <p>Login</p>
            <img src="source" alt="Avatar" height="64" width="64" />
          </li>
        </ul>
      </header>

      <main>
        <h1>Tennis Buds</h1>
        <form>
          <input type="text" placeholder="Enter zip code" name="search" />
          <input type="submit" value="Submit" />
        </form>
      </main>

      <body></body>
    </>
  )
}
