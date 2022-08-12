import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "./Reviews.styled";
const axios = require('axios');


const Reviews = () => {
    const { movieId } = useParams();
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
   
        if (!movieId) {
            return
        }

 const fetchData = async () => {

  try {
      const response = await axios.get(` https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a1157fee69973f579feaed0c038c358a`);
      setData(response.data.results);




  }
  
  catch (error) {
   
      console.error(error);

  }
}
    
     fetchData()
    
 
    }, [movieId])
    

    return data.length === 0  ? <p>We don't have any reviews for this movie</p> : data.map(({id,author,content}) => {
        return (
            <ul>
                <Item key={id}>
                    <h3>{author}</h3>
                    <p>{ content}</p>
                </Item>
            </ul>
        )
    })
}

export default Reviews;