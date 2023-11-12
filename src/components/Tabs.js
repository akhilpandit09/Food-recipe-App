import React, { useState, useEffect } from "react";
import { CiPizza } from "react-icons/ci";
import { GiFruitBowl, GiNoodles, GiCheckMark } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import { fetchData, fetchTabData } from "../Service";

function Tabs(props) {
  const [active, setActive] = useState('pizza');
  const [tabData, setTabData] = useState('');

  const handleClick = (name, id) => {
    setActive(name);
    fetchTabData(id).then((response)=>{
      setTabData(response);
      props.setLoader(false);
    })
  }
  useEffect(()=>{
    fetchTabData(tabLable[0].id).then((response)=>{
      setTabData(response);
      props.setLoader(false);
    })
  },[])
  const [tabLable, setTabLabel] = useState([
    {
      name: "Pizza",
      icon: <CiPizza />,
      id: "0209cb28fc05320434e2916988f47b71",
    },
    {
      name: "Noodles",
      icon: <GiNoodles/>,
      id: "e0f06a8d4769e6a9344ff766d04a206f",
    },
    {
      name: "Desert",
      icon: <GiFruitBowl />,
      id: "eb3e2b49525a0c8ce7327436f843321a",
    },
    {
      name: "Ice-Creame",
      icon: <MdOutlineIcecream />,
      id: "dc0bd9f18c68a5710d0fc3fda6512b7b",
    },
  ]);
  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {tabLable.map((item, index) => (
          <div onClick={()=> (handleClick(item.name, item.id), props.setLoader(true))} key={index} className={`tablist ${active === item.name ? 'active' : ''}`}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="recipe_banner">
        {tabData !== '' && 
        <>
        <div className="left-col">
          <span className="badge">{tabData.recipe.cuisineType[0].toUpperCase()}</span>
          <h1>{tabData.recipe.label}</h1>
          <p>
            <strong>Recipe by:</strong>
            <small>{tabData.recipe.source}</small>
          </p>
          <h3>Ingredients</h3>
          <div className="ingredients">
            <ul>
              {tabData.recipe.ingredientLines.map((list, index)=>(
              <li key={index}>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>{list}</span>
              </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right-col">
          <div className="image-wrapper">
            <img
              src={tabData.recipe.image}
              alt={tabData.recipe.label}
            />
          </div>
        </div>
        </>
        }
      </div>
    </div>
  );
}

export default Tabs;
