import React from 'react';
import GifSearch from './GifSearch';

export default function NavBar({ color, title, search, setSearch }) {
   const colors = {
      black: 'navbar-inverse',
      white: 'navbar-default',
   };

   return (
      <nav className={`navbar ${colors[color]}`}>
         <div className="container-fluid">
            <div className="navbar-header">
               <span className="navbar-brand">{title}</span>
            </div>
            <p></p>
            <GifSearch search={search} setSearch={setSearch} />
         </div>
      </nav>
   );
}
