
import { Suspense } from "react";
import {  useLocation } from "react-router-dom";
import { Link,Item } from "./MovieList.styled";

const MovieList = ({ data }) => {

    const location = useLocation();

    return data && data.map(({id,title}) => {

        return (
            <Suspense>    
                <main>     
                    <ul>             
                        <Item key={id}>                      
                            <Link to={`${id}`} state={{ from: location }} >{title} </Link>
                        </Item>
                    </ul>
                </main>
            </Suspense>
    
       


         
        )
    })
}

export default MovieList