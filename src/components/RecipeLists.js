import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchData } from "../Service";

function RecipeLists(props) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pasta");
  const [data, setData] = useState("");

  useEffect(() => {
      fetchData(query).then((response) => {
      setData(response);
      props.setLoader(false);
    });
  }, []);
  
 const searchrecipe = (searchQuery) =>{
        fetchData(searchQuery).then((response) => {
        setData(response);
        props.setLoader(false);
        // console.log(response);
      });
 }
  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input 
          type="text" 
          placeholder="Search" 
          onChange={(e) => setSearch(e.target.value)} 
          value={search}
          />
          <button onClick={() => (searchrecipe(search), props.setLoader(true))}>
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {data && data.hits.map((item, index) => (
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img
                  src={item.recipe.image}
                  alt={item.recipe.label}
                />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default RecipeLists;
