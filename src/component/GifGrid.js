import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
// import { useFechsGifs } from '../hooks/useFechGifs'


export const GifGrid =  ( { cat } ) => {

    const [images, setImages] = useState([]);
    // const {data,loading} = useFechsGifs( cat );

    useEffect(()=>{
        gifGrid();    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const gifGrid = async() => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=6&api_key=gLjWFTrS1CoBKAHzIuUnFMm7ai00pc1y`;

        const respuesta = await fetch(url);
        const { data } = await respuesta.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        });

        console.log(gifs);
        setImages(gifs);

        

    }
   

  return (
      <>
        <h3 className="animate__animated animate__fadeInDown"> { cat }</h3>
        {/* { loading ? 'Cargando.....': 'Datos cargado correctamente'  } */}
        <div className="tarjeta-grid ">
         {
             images.map( img => {
                return <GifGridItem key={ img.id } { ...img } ></GifGridItem>;
            })
         }
    </div>
      </>
    
  );
}
