import React from 'react'
import { Page } from "../components"

export default function() {
  return (
    <Page>
      <h1 className="display-4 text-center">xTrack</h1>

      <h5>An expense tracker app, done in React Native</h5>

      <a href="https://github.com/mirocosic/xtrack-mobile" target="_blank" rel="noopener noreferrer">Github page</a>

      <h5>Features</h5>
      <ul>
        <li>Multiple currencies (HRK, USD, EUR)</li>
        <li>Multilanguage support</li>
        <li>Dark mode</li>
        <li>Unlimited accounts</li>
        <li>Custom categories and tags</li>
        <li>Reoccuring transactions</li>
      </ul>

      <h5>Tech used</h5>
      <ul>
        <li>React Native</li>
        <li>React Navigation</li>
        <li>Redux</li>
        <li>Redux Saga</li>
      </ul>


    </Page>
  )
}
