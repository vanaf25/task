import './App.css';
import {useEffect, useState} from "react";
import FilmCard from "./components/FilmCard/FilmCard";

function App() {
  const [inputValue,setInputValue]=useState("")
    const [films,setFilms]=useState([])
    const [tags,setTags]=useState([])
    useEffect(()=>{
        fetch("https://6357f067c27556d289325a88.mockapi.io/api/v1/films")
            .then(res=>res.json()).then(data=>setFilms(data))
    },[])

  return (
    <div className="container">
      <input value={inputValue} onChange={e=>setInputValue(e.target.value)} type="text"/>
        {films.map(film=><FilmCard key={Math.random()} filmId={film.id} setCommonTags={tag=>setTags(prevState =>[...prevState,tag] )} description={film.description} title={film.title}
                                   dateOfRelease={film.released}/>)}
    </div>
  );
}

export default App;
