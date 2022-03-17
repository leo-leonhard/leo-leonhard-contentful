import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar'


export default function Layout({ children }) {
  return (
      <div>
          <NavBar />
      {children}
    </div>
  )
}
