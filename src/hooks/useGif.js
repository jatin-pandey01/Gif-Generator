import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;

const useGif = ({tag}) => {

    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(true);

    async function fetchData(tag){
      setLoading(true);
      const output = await axios.get(tag? url + `&tag=${tag}` : url);
      const data = output.data;
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
  
    useEffect(()=>{
      fetchData();
    },[])
    
    return {gif,loading,fetchData};
}

export default useGif;