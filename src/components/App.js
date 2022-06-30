import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import GifListContainer from './GifListContainer';

export default function App() {
   const [gifs, setGifs] = useState([]);
   const [search, setSearch] = useState('star wars');

   useEffect(() => {
      fetch(
         `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=pMvUYxG1sIqw2yXDj5yCo3HEKtFdzw8f&rating=g`
      )
         .then((r) => r.json())
         .then(({ data }) =>
            setGifs(
               data.slice(0, 3).map((gif) => {
                  return {
                     id: gif.id,
                     url: gif.images.original.url,
                  };
               })
            )
         )
         .then(() => console.log(gifs));
   }, [search]);

   return (
      <>
         <NavBar
            color="white"
            title="Giphy Search"
            search={search}
            setSearch={setSearch}
         />
         <GifListContainer gifs={gifs} setGifs={setGifs} search={search} />
      </>
   );
}
