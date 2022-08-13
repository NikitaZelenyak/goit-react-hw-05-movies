
import { Outlet, useLocation, useParams } from "react-router-dom";
import {  Suspense, useEffect, useState } from "react";
import { Link,LinkButton,Wrapper,Box,Item } from "./MovieDetails.styled";
const axios = require('axios');


const MovieDetails = () => {
    const { movieId } = useParams();
    const [data, setData] = useState({});
    const [isLoad, setIsLoad] = useState(false)
    const [imgLink, setImgLink] = useState("");
    const location = useLocation();

    const backLink = location.state?.from ??  '/movies';
 
    useEffect(() => {
        
        if (!movieId) {
      return
        }

        setIsLoad(true)
 const fetchData = async () => {

  try {
      const response = await axios.get(` https://api.themoviedb.org/3/movie/${movieId}?api_key=a1157fee69973f579feaed0c038c358a&page`);
      
      setData(response.data);
      setImgLink('https://image.tmdb.org/t/p/w500'+response.data.poster_path)
      setIsLoad(false)
  }
  
  catch (error) {
   
      console.error(error);

  }
}
    
     fetchData()

    }, [movieId])



    return (

        isLoad ? <p>Loading...</p> : <div>
            <LinkButton to={backLink}>  Back to search</LinkButton>
           
            <Wrapper>
                
                <div>
                    <img src={imgLink} alt={data.title} width='360' height='460' />
                </div>
                   
                <Box>
                
                    <h2>{data.title} ({data.release_date})</h2>           
                    <p>User  score: {Math.round(data.vote_average) * 10}%</p>          
                    <h3>Overview</h3>
                    <p>{data.overview}</p>
                    <h3>Genres</h3>
           
                    {data.genres && data.genres.map(({ id, name }) => {
               
                        return (                
                            <ul>                    
                                <Item key={id}>                
                                    {name}                     
                                </Item>                 
                            </ul>
               
                )
            }
               
                )}

                </Box>
           
            </Wrapper>
        
          
            <div>                
                <h3>Additional Information</h3>               
                <ul>
                    <Item><Link to={'cast'}>Cast</Link></Item>
                    <Item><Link to={'reviews'}>Reviews</Link></Item>
                </ul>   

                <Suspense  fallback={<div>Loading...</div>}>
                    <Outlet></Outlet>
                </Suspense>
              
            </div>

        </div>
       
       
        
)


}


export default MovieDetails;