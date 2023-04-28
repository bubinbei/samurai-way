import React from 'react';
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';

console.log(s);


function Nav() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
              <NavLink to='/profile' activeClassName={s.activeLink} >Profile</NavLink>
            </div>

            <div className={`${s.item} ${s.active}`}>
              <NavLink to='/dialog' activeClassName={s.activeLink}>Messages</NavLink>
            </div>

            <div className={s.item}>
              <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>

            <div className={s.item}>
              <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>

            <div className={s.item}>
              <NavLink to='/setting' activeClassName={s.activeLink}>Setting</NavLink>
            </div>
        </nav>
    );
}

export default Nav
