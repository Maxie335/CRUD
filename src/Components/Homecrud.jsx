import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Homecrud = () => {
  return (
    <div>
        <section id={style.nav}>
            <Link to="/cu">Create User</Link>
            <Link to="/u">User</Link>
        </section>
    </div>
  )
}

export default Homecrud