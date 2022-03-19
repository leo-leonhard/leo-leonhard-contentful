import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar'
import '../styles/styles.css'

export default function Layout({ children }) {
  return (
      <div>
          <NavBar />
          <main style={{width: "90%", margin: "0 auto", padding: "2em 0"}}>
              {children}
              </main>
    </div>
  )
}
