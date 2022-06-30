import React from 'react';

export default function GifList({ gifs, search }) {
   return (
      <ul align="center">
         {gifs.gifs.map((gif) => {
            return (
               <li
                  key={gif.id}
                  style={{
                     listStyle: 'none',
                  }}
               >
                  <img src={gif.url} alt={search} />
                  <br />
                  <br />
               </li>
            );
         })}
      </ul>
   );
}
