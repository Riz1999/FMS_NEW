import React, { useEffect, useState } from "react";
import axios from "axios";
import "foodselectiondisplay.css"
const FoodSelectionDisplay = () => {
  const [selectedFood, setSelectedFood] = useState({});

  useEffect(() => {
  
    axios.get("http://localhost:5000/foodselection").then((response) => {
      setSelectedFood(response.data);
    });
  }, []);

  return (
    <div className="food-selection">
      <h2>Selected Food for Each Day</h2>
      <div className="food-list">
        {Object.entries(selectedFood).map(([day, food]) => (
          <div className="food-item" key={day}>
            <span className="day">{day}:</span> {food || <span className="not-selected">Not Selected</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodSelectionDisplay;
