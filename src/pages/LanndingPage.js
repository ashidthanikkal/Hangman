import React from 'react'
import { Link } from 'react-router-dom'

function LanndingPage() {
  return (
    <div className='d-flex align-items-center justify-content-center h-100'>

      <div className='box w-75 p-4 py-5 rounded-2 d-flex-col align-items-center justify-content-center'>
        <h2 className='pt-3 text-center fw-bold'>Hangman</h2>
        <div className='d-flex align-items-center justify-content-center'><p className='pt-3 container-fluid para text-center'>The Hangman game is a classic word-guessing game that has been popular for generations.  It combines elements of vocabulary challenge and strategy with simple rules, making it accessible and enjoyable for people of all ages.</p></div>
        <div className='d-flex pt-3 align-items-center justify-content-center '>
        <Link to={'/game'} style={{ textDecoration: 'none', color: 'black' }}><button className='btns'>Play</button></Link>
        </div>

      </div>
    </div>
  )
}

export default LanndingPage
