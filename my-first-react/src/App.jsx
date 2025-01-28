import React from 'react'
import Search from './components/Search.jsx'
import { useState } from 'react'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero-bg.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movie</span> You'll Love without any Effort</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  )
}

export default App
