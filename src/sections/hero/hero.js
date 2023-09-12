import "./hero.css";
import React from 'react'
import Tv from './tv.svg'
import Rating from './Rating.svg'
import Menu from './Menu.svg'
import play from './play.svg'
import Search from './Search.svg'


const hero = () => {
  return (
    <div className="hero-container">


      <div className="navbar-header">
        <div className="logo">
          <img src={Tv} className="tvlogo" alt="tvLogo" />
          <p><b> MovieBox</b></p>
        </div>

        <form action="">
          <input type="text" name="search" className="search" placeholder="What do you want to watch?" />
          <img src={Search} className="search-icon" alt="" />
        </form>

        <div className="sign-in">
        <p>Sign in</p>
          <img src={Menu} className="tvlogo" alt="tvLogo" />
        </div>

      </div>

<div className="hero-details">
      <h1 className="hero-title">John Wick 3 : Parabellum</h1>


<img src={Rating} alt="" />

<p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
     
     <a href="" className="watch-trailer"> <img src={play} alt="" /> WATCH TRAILER</a>
      </div>


    </div>
  )
}

export default hero