import React from 'react';
import GifList from './GifList';

export default function GifListContainer(gifs, search) {
   return (
      <div>
         <br />
         <GifList gifs={gifs} search={search} />
      </div>
   );
}
