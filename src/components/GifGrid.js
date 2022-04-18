import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data:images ,loading} = useFetchGifs(category);
    /* console.log(data); */
   /*  const [images, setImages] = useState([]);
    /* const [count, setCount] = useState(0); */
    /* Solo ejecutarse cuando el componente es renderizado por primera vez  */
    /*useEffect(() => {
        getGifs(category).then(setImages);
    }, [category]) */

    return (
        <>
            <h3 className="animate__animated animate__bounce "> {category}</h3>

            { loading && <p>Loading</p> }

            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem key={img.id} {...img}/>
                        ))
                        /* images.map( ({id,title}) => (
                            <li key={id}> { title } </li>
                        )) */
                    }
                 {/* <h3> {count}</h3> */}
                {/* <button onClick={()=>setCount(count + 1 )}></button> */} 
            </div> 
        </>
    )
}
