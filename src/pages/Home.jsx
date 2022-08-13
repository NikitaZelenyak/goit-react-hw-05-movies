import { useEffect,useState } from "react"
import { Link,Item } from "./Home.styled";
import { useLocation } from "react-router-dom";
const axios = require('axios');

const Home = () => {
    const [data, setData] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
    
const fetchData = async () => {
          
  try {
    const response = await axios.get(` https://api.themoviedb.org/3/trending/all/day?api_key=a1157fee69973f579feaed0c038c358a`);
      setData(response.data.results);

  }
  catch (error) {
    console.error(error);
  }
}
    
     fetchData()


}, [])

    const LINK = '/movies/';

    return data && data.map(({id,title,name}) => {
        return (
            <ul>
                <Item key={id}>
                    <Link to={LINK.concat(`${id}`)}
                    state={{from:location}}
                    >
                        {title ? title : name}
                    </Link>
                </Item>
            </ul>
        )
    }
       
    )
}

export default Home