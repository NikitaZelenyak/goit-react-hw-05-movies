


import { useForm } from "react-hook-form";
import {   useEffect,useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import MovieList from "components/MovieList/MovieList";
import {  useSearchParams } from "react-router-dom";


const axios = require('axios');

const notify = () =>toast.error('This is an error!', {
  duration: 4000,
  position: 'top-center',

  // Styling
  style: {},
  className: '',


  icon: '',

  iconTheme: {
    primary: '#000',
    secondary: '#fff',
  },

  // Aria
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
});
notify()

     

const Movie = () => {

    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const request = searchParams.get("query") ?? "";

    


    useEffect(() => {

            if (request==='') {
        
                return 
            }
        const fetchData = async () => {
          
  try {
    const response = await axios.get(`  https://api.themoviedb.org/3/search/movie?api_key=a1157fee69973f579feaed0c038c358a&page=1&query=${request}`);
      setData(response.data.results);
  }
  catch (error) {
    console.error(error);
  }
}
    
     fetchData()
},[request])

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data =>     setSearchParams(data.query !== '' ? { query: data.query } : {});


    
  return (
  <main>
    
    
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("query", { required: true })} />
                {errors.query && <Toaster></Toaster>}
                <input type="submit" />
            </form>
            
            {<MovieList data={data} ></MovieList>}

    </main>
     

      
   )
}

export default Movie