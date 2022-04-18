import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
   /*  const categories = ['One Punch', 'Samurai X', 'Shingeki No Kyojin']; */
    const [categories, setCategories] = useState(['Shingeki No Kyojin']);

    const handleAd = () => {
       /*  setCategories(['Dragon Ball', ...categories]); */  /* Con ... se extrean los elementos */
        setCategories( cats => [...cats, 'HunterXHunter' ] ); /* Valor del estado anterior y devolver el neuvo estado */
    }

    return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      <button onClick={handleAd}>Agregar</button>
      <ol>
          {
             /*  categories.map(category =>  (<li key={category}>{category}</li>)) */
             categories.map(category => (<GifGrid key={category} category={category}/>))
          }
      </ol>
    </>
  );
};
