import React from 'react';

export default function GifSearch({ search, setSearch }) {
   function handleSubmit(e) {
      e.preventDefault();
      setSearch(search);
   }

   return (
      <div align="center">
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Search..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            ></input>
            &nbsp;
            <button type="submit">Submit</button>
         </form>
      </div>
   );
}
