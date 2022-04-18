

export  const getGifs = async(category) => {
        /* encodeURI = dar formato  */
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=oPThSfIfNZqgCJtGJsnHZH1k87Xr0jK0`
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                 id: img.id,
                 title: img.title,
                 url: img.images?.downsized_medium.url
            }
         })

        /* console.log(gifs);
        setImages(gifs); */
        return gifs;
    }