
import { Suspense } from "react";
import {  useLocation } from "react-router-dom";
import { Link,Item } from "./MovieList.styled";

const MovieList = ({ data }) => {

    const location = useLocation();

  

        return (
            <Suspense>    
                <main>     
                    <ul>             
 
                        {data && data.map(({ id, title }) => {
                            return (
                                <Item key={id} >                                              
                                    <Link  to={`${id}`} state={{ from: location }} >{title} </Link>
                                </Item>)
                        })}
                    </ul>
                </main>
            </Suspense>
    
       


         
        )
    
}

export default MovieList