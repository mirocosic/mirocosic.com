import React from 'react'

import { Page } from "../components"

export default () => (
  <Page>
    <div className="d-flex flex-column justify-content-center">
      <h1 className="display-4 text-center">About</h1>
        <p><strong>Favourite music:</strong> good music :) </p>
        <p>Personality type: INFJ</p>

        <a href="https://www.codewars.com/users/mirocosic" rel="noopener noreferrer" target="_blank">
          <img src="https://www.codewars.com/users/mirocosic/badges/small" alt="codewars-rank" />
        </a>
      </div>
  </Page>
)
