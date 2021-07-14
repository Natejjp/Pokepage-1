import React, { useState, useEffect } from 'react'

export function PunchCard() {
  const [punchCards, setPunchCards] = useState([])
  const [filterPunchCards, setFilterPunchCards] = useState('')

  const [newPunchCard, setNewPunchCard] = useState({
    id: 0,
    name: '',
    telephone: '',
    punches: 0,
  })
  useEffect(
    function () {
      async function loadPunchCards() {
        const url =
          filterPunchCards.length === 0
            ? 'api/PunchCards'
            : `api/PunchCards?filter=${filterPunchCards}`
        const response = await fetch(url)
        if (response.ok) {
          const json = await response.json()
          setPunchCards(json)
        }
      }
      loadPunchCards()
    },
    [filterPunchCards]
  )

  return (
    <>
      <div className="topPunchCard">
        Enter phone number
        <form>
          <input
            type="text"
            placeholder="Phone number"
            value={filterPunchCards}
            onChange={function (event) {
              setFilterPunchCards(event.target.value)
            }}
          />
          <input type="submit" />
        </form>
      </div>
      <div className="topPunchCard">
        {punchCards.map((punchCard) => (
          <h3 key={punchCard.id}>{punchCard.name}</h3>
        ))}
      </div>

      <div className="topPunchCard">
        <form action="#">
          <p>
            <label>Name</label>
            <input type="tel" name="telephone" />
          </p>
        </form>
      </div>
    </>
  )
}
