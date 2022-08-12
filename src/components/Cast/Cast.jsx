import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Item } from "./Cast.styled";


const axios = require('axios');

const Cast = () => {
    const { movieId } = useParams();
    const [data, setData] = useState([]);


   


    useEffect(() => {
        if (!movieId) {
            return
        }

 const fetchData = async () => {

  try {
      const response = await axios.get(` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a1157fee69973f579feaed0c038c358a`);
      setData(response.data.cast);



  }
  
  catch (error) {
   
      console.error(error);

  }
}
    
     fetchData()

       
    },[movieId])
    

    return data && data.map(({id,name,profile_path}) => {
        return (
            <ul>
                <Item key={id}>
                    <img width={90} height={120} src={'https://image.tmdb.org/t/p/w500'+ profile_path} alt={name} />
                    <p>{ name}</p>
                </Item>
            </ul>
        )
    })
}
export default Cast