
import React, { useState, useEffect } from "react";
import "./food.css";
import axios from "axios";

const FoodComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [savedMessage, setSavedMessage] = useState("");
  const [selectedDay, setSelectedDay] = useState("monday"); 
  const [selectedDays, setSelectedDays] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState("breakfast");

  const [selectedBreakfastVarieties, setSelectedBreakfastVarieties] = useState([]);
const [selectedLunchVarieties, setSelectedLunchVarieties] = useState([]);
const [selectedDinnerVarieties, setSelectedDinnerVarieties] = useState([]);

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
    setSubmitted(false);
    setSelectedBreakfastVarieties([]);
    setSelectedLunchVarieties([]);
    setSelectedDinnerVarieties([]);
    setSelectedMeal("breakfast");

  };

 
  const handleVarietyChange = (meal, variety) => {
    console.log("yes")
    switch (meal) {
      case "Breakfast Varieties":
        setSelectedBreakfastVarieties((prevSelectedVarieties) =>
          prevSelectedVarieties.includes(variety)
            ? prevSelectedVarieties.filter((v) => v !== variety)
            : [...prevSelectedVarieties, variety]
        );
        console.log(selectedBreakfastVarieties)
        break;
      case "Lunch Varieties":
        setSelectedLunchVarieties((prevSelectedVarieties) =>
          prevSelectedVarieties.includes(variety)
            ? prevSelectedVarieties.filter((v) => v !== variety)
            : [...prevSelectedVarieties, variety]
        );
        
        break;
      case "Dinner Varieties":
        console.log("dinner selected")
        setSelectedDinnerVarieties((prevSelectedVarieties) =>
          prevSelectedVarieties.includes(variety)
            ? prevSelectedVarieties.filter((v) => v !== variety)
            : [...prevSelectedVarieties, variety]
        );
        
        break;
      default:
        break;
    }
  };
  
  

  const handleFoodSelection = async () => {
    try {
      // Retrieve the user ID from local storage or state variable
      const userId = localStorage.getItem("userId");
      if (!userId) {
        // Handle the case where the user ID is missing
        console.error("User ID missing.");
        return;
      }
      console.log(selectedDays)
      if (selectedDays.includes(selectedDay)) {
        console.error("You have already selected food for this day.");
        return;
      }
      const data = {
        userId,
        selectedDay,
        breakfast: selectedBreakfastVarieties["Breakfast Varieties"],
        lunch: selectedLunchVarieties["Lunch Varieties"],
        dinner: selectedDinnerVarieties["Dinner Varieties"],
        
      };

      console.log(data);

      const response = await axios.post(
        "https://a416-2a09-bac5-3b23-1a8c-00-2a5-bc.ngrok-free.app//foodselection",
        data
      );
      // setSelectedVarieties({});

      setSelectedDays((prevSelectedDays) => [...prevSelectedDays, selectedDay]);
      setSavedMessage("Food saved successfully! Go to next day and select food");
    } catch (error) {
      console.error("Error saving food selection:", error);
    }
    setSubmitted(true);
    
  };
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID missing.");
      return;
    }
  
    axios.get(`https://a416-2a09-bac5-3b23-1a8c-00-2a5-bc.ngrok-free.app//foodselection/userSelectedDays/${userId}`)
      .then(response => {
        setSelectedDays(response.data.selectedDays);
      })
      .catch(error => {
        console.error("Error fetching selected days:", error);
      });
  }, []);
  
  const getMealDescription = () => {
    const mealDescriptions = {
      monday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",

          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Boiled Eggs &Omelette ",
                },
                {
                  name: "Bread/Jam/Butter",
                },
                {
                  name: "Idly/Wada",
                },
                {
                  name: "Tea/Coffee/Milk",
                },
                {
                  name: "Sprouts/Corn flacks",
                },
                
                
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Lunch Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Corn Pulao",
                },
                {
                  name: "Moong Dal",
                },
                {
                  name: "Mix Veg Curry",
                },
                {
                  name: "Egg Curry",
                },
                {
                  name: "Chapathi",
                },
                {
                  name: "Butter Milk",
                },
                {
                  name: "Semiya Kheer",
                },
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Salad",
                },
              ],
            },

            
           
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Dinner Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Dal Tadka",
                },
                {
                  name: "Chole",
                },
                {
                  name: "Bhature",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Dal Khichdi",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Curd",
                },
                {
                  name: "Banana",
                },
              ],
            },

            
          ],
        },
      },
      tuesday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",

          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Boiled Eggs &Omelette ",
                },
                {
                  name: "Bread/Jam/Butter",
                },
                {
                  name: "Mysoor Boonda/Upma/Sprouts",
                },
                {
                  name: "Tea/Coffee/Milk",
                },
                {
                  name: "Sprouts/Corn flacks",
                },
                
                
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Lunch Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Curd Rice",
                },
                {
                  name: "Meal Maker Curry",
                },
                {
                  name: "Bendi Tomato",
                },
                {
                  name: "Dl Fry",
                },
                {
                  name: "Chapathi",
                },
                {
                  name: "Lemon Juice",
                },
                {
                  name: "Samber",
                },
                {
                  name: "Sweet",
                },
                {
                  name: "Green Salad",
                },
              ],
            },

            
           
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Dinner Varieties",

              options: [
                {
                  name: "Plain Rice & Masala Rice",
                },
                {
                  name: "Palak Dal",
                },
                {
                  name: "Veg Kofta",
                },
                {
                  name: "Gobi Manchuria Wet",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Veg Tahari",
                },
                {
                  name: "pulka",
                },
                {
                  name: "Milk",
                },
                {
                  name: "Curd",
                },
                {
                  name: "Banana",
                },
              ],
            },

            
          ],
        },
      },
      wednesday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",

          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Boiled Eggs &Omelette ",
                },
                {
                  name: "Bread/Jam/Butter",
                },
                {
                  name: "Uthapam",
                },
                {
                  name: "Tea/Coffee/Milk",
                },
                {
                  name: "Sprouts/Corn flacks",
                },
              
                
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Lunch Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Bagara Rice",
                },
                {
                  name: "Dal Tadhka",
                },
                {
                  name: "Paneer Butter Masala",
                },
                {
                  name: "Chicken Curry",
                },
                {
                  name: "Plain Parata",
                },
                {
                  name: "Suji ka Halwa",
                },
                {
                  name: "Mango Juice",
                },
                
                {
                  name: "Green Salad",
                },
              ],
            },

            
           
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Dinner Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Tomato Dal",
                },
                {
                  name: "Khichdi Katta",
                },
                {
                  name: "Beans Tomato Curry",
                },
                {
                  name: "Cabbage Pakoda",
                },
                {
                  name: "CHapthii",
                },
                {
                  name: "Milk",
                },
                {
                  name: "Curd",
                },
                {
                  name: "Banana",
                },
              ],
            },

            
          ],
        },
      },
      thursday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",

          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Boiled Eggs &Omelette ",
                },
                {
                  name: "Bread/Jam/Butter",
                },
                {
                  name: "Puri/Poha",
                },
                {
                  name: "Tea/Coffee/Milk",
                },
                {
                  name: "Sprouts/Corn flacks",
                },
                {
                  name: "Puri/Poha",
                },
                
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Lunch Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Samber Rice",
                },
                {
                  name: "Lal Chana",
                },
                {
                  name: "Jeera Alu",
                },
                {
                  name: "Beerakaya Curry",
                },
                {
                  name: "Chapathi",
                },
                {
                  name: "Jiber Khaja",
                },
                {
                  name: "Rasna",
                },
                {
                  name: "Vegetable Chutney",
                },
                {
                  name: "Green Salad",
                },
              ],
            },

            
           
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Dinner Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Dal fry",
                },
                {
                  name: "Veg Noodles",
                },
                {
                  name: "Egg Fried Rice",
                },
                {
                  name: "Veg Fried Rice",
                },
                {
                  name: "Veg Soup",
                },
                {
                  name: "Crispy Veg",
                },
                {
                  name: "Milk",
                },
                {
                  name: "Curd",
                },
                {
                  name: "Banana",
                },
              ],
            },

            
          ],
        },
      },
      friday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",

          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Boiled Eggs &Omelette ",
                },
                {
                  name: "Bread/Jam/Butter",
                },
                {
                  name: "Idly/Wada",
                },
                {
                  name: "Tea/Coffee/Milk",
                },
                {
                  name: "Sprouts/Corn flacks",
                },
                {
                  name: "Puri/Poha",
                },
                
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Lunch Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Chicken Biryani",
                },
                {
                  name: "Veg Biryani",
                },
                {
                  name: "Rhaita",
                },
                {
                  name: "Mirchi ka Salan",
                },
                {
                  name: "Sahi Turka",
                },
                {
                  name: "rooh afza",
                },
                {
                  name: "Semiya Kheer",
                },
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Salad",
                },
              ],
            },

            
           
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Dinner Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Dal Lasoni",
                },
                {
                  name: "Capsicum Paneer",
                },
                {
                  name: "Mirchi Bhaji",
                },
                {
                  name: "Cabbage Porial",
                },
                {
                  name: "Tomato Onion Curry",
                },
                {
                  name: "Chapathi",
                },
                {
                  name: "Milk",
                },
                {
                  name: "Curd",
                },
                {
                  name: "Banana",
                },
              ],
            },

            
          ],
        },
      },
      saturday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",

          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Boiled Eggs &Omelette ",
                },
                {
                  name: "Bread/Jam/Butter",
                },
                {
                  name: "Dosa",
                },
                {
                  name: "Tea/Coffee/Milk",
                },
                {
                  name: "Sprouts/Corn flacks",
                },
                {
                  name: "Puri/Poha",
                },
                
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Lunch Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Lemon Rice",
                },
                {
                  name: "Nizami Handi",
                },
                {
                  name: "Rajma Masala",
                },
                {
                  name: "Bendi Do Pyaza",
                },
                {
                  name: "Chapathi",
                },
                {
                  name: "Fruit Custard",
                },
                {
                  name: "Lemon Water",
                },
                {
                  name: "Vegetable Chutney",
                },
                {
                  name: "Green Salad",
                },
              ],
            },

            
           
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Dinner Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Methi Dal",
                },
                {
                  name: "Egg Bhurji",
                },
                {
                  name: "Palak Corn Curry",
                },
                {
                  name: "Garlic Rice",
                },
                {
                  name: "Chapathi",
                },
                {
                  name: "Milk",
                },
                {
                  name: "Curd",
                },
                {
                  name: "Banana",
                },
              ],
            },

            
          ],
        },
      },
     sunday: {
        breakfast: {
          description:
            "Boiled Eggs & Omelette,Bread/Jam/Butter,Tea/Coffee/Milk",

          meals: [
            // breakfast options...
            {
              name: "Breakfast Varieties",

              options: [
                {
                  name: "Boiled Eggs &Omelette ",
                },
                {
                  name: "Bread/Jam/Butter",
                },
                {
                  name: "Alu Paratha",
                },
                {
                  name: "Tea/Coffee/Milk",
                },
                {
                  name: "Sprouts/Corn flacks",
                },
                {
                  name: "Puri/Poha",
                },
                
              ],
            },
          ],
        },
        lunch: {
          description: "Plain Rice, Chapathi, Green Salad",
          meals: [
            {
              name: "Lunch Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Zeera Rice",
                },
                {
                  name: "Dlacha",
                },
                {
                  name: "Mix Veg Curry",
                },
                {
                  name: "Rogani Chicken",
                },
                {
                  name: "Paneer Kurchan",
                },
                {
                  name: "Chapathi",
                },
                {
                  name: "Dhalaiya Payasam",
                },
                {
                  name: "Butter Milk",
                },
                {
                  name: "Mango Pickle",
                },
                {
                  name: "Green Salad",
                },
              ],
            },

            
           
          ],
        },

        dinner: {
          description: "Plain Rice, Chapathi, Curd",
          meals: [
            {
              name: "Dinner Varieties",

              options: [
                {
                  name: "Plain Rice",
                },
                {
                  name: "Masoor Dal",
                },
                {
                  name: "Milk",
                },
                {
                  name: "Curd",
                },
                {
                  name: "Banana",
                },
              ],
            },

            
          ],
        },
    
      },

      // Add descriptions for other days...
    };
   
   
    return mealDescriptions[selectedDay][selectedMeal];
  };

  const mealDescription = getMealDescription();

  return (
    <section id="food" className="food">
      <h2 className="head">Food Menu</h2>
      {/* Add the dropdown list */}
      <div className="day-dropdown">
        <label htmlFor="day">Select a day:</label>
        <select
          id="day"
          name="day"
          value={selectedDay}
          onChange={handleDayChange}
        >
          <option value="monday" disabled={selectedDays.includes("monday")}>Monday</option>
          <option value="tuesday" disabled={selectedDays.includes("tuesday")}>Tuesday</option>
          <option value="wednesday" disabled={selectedDays.includes("wednesday")}>Wednesday</option>
          <option value="thursday" disabled={selectedDays.includes("thursday")}>Thursday</option>
          <option value="friday" disabled={selectedDays.includes("friday")}>Friday</option>
          <option value="saturday" disabled={selectedDays.includes("saturday")}>Saturday</option>
          <option value="sunday" disabled={selectedDays.includes("sunday")}>Sunday</option>
          {/* Add options for other days */}
        </select>
      </div>

      <div className="food__buttons">
        <button
          className={selectedMeal === "breakfast" ? "active" : ""}
          onClick={() => setSelectedMeal("breakfast")}
        >
          Breakfast
        </button>
        <button
          className={selectedMeal === "lunch" ? "active" : ""}
          onClick={() => setSelectedMeal("lunch")}
        >
          Lunch
        </button>
        <button
          className={selectedMeal === "dinner" ? "active" : ""}
          onClick={() => setSelectedMeal("dinner")}
        >
          Dinner
        </button>
      </div>

      {submitted ? (<div className="success-message">
          <p>{savedMessage}</p>
        </div>) : (
        <div className="food-description">
          
          {selectedMeal === "breakfast" && (
            <div>
              <div className="meal-cards">
                {mealDescription.meals.map((meal, index) => (
                  <div
                    className={`meal-card ${
                      selectedMeal === "breakfast" ? "active" : ""
                    }`}
                    key={index}
                  >
                    <div className="meal-card__info">
                      <h4>{meal.name}</h4>

                      {/* Modify the condition to show buttons for all meals */}
                      {meal.options && meal.options.length > 0 && (
                        <div className="options-buttons">
                          <h5
                            style={{ color: "GrayText", marginBottom: "5px" }}
                          >
                            Choose among them
                          </h5>
                          {meal.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              className={`option-button ${
                                selectedBreakfastVarieties.includes(option.name) ? "active" : ""
                              }`}
                              onClick={() =>
                                handleVarietyChange(meal.name, option.name)
                              }
                            >
                              {option.name}
                            </button>
                          ))}
                        </div>
                      )}

                      {selectedMeal !== "breakfast" &&
                        (!meal.options || meal.options.length === 0) && (
                          <p>{meal.description}</p>
                        )}
                    </div>
                  </div>
                ))}
              </div>

              <button className="next" onClick={() => setSelectedMeal("lunch")}>
                Next
              </button>
            </div>
          )}

          {selectedMeal === "lunch" && (
            <div>
              <div className="meal-cards">
                {mealDescription.meals.map((meal, index) => (
                  <div
                    className={`meal-card ${
                      selectedMeal === "breakfast" ? "active" : ""
                    }`}
                    key={index}
                  >
                    <div className="meal-card__info">
                      <h4>{meal.name}</h4>

                      {/* Modify the condition to show buttons for all meals */}
                      {meal.options && meal.options.length > 0 && (
                        <div className="options-buttons">
                          <h5
                            style={{ color: "GrayText", marginBottom: "5px" }}
                          >
                            Choose among them
                          </h5>
                          {meal.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              className={`option-button ${
                                selectedLunchVarieties.includes(option.name) ? "active" : ""
                              }`}
                              onClick={() =>
                                handleVarietyChange(meal.name, option.name)
                              }
                            >
                              {option.name}
                            </button>
                          ))}
                        </div>
                      )}

                      {selectedMeal !== "breakfast" &&
                        (!meal.options || meal.options.length === 0) && (
                          <p>{meal.description}</p>
                        )}
                    </div>
                  </div>
                ))}
              </div>

              {/* ... (Existing lunch meal options code) */}
              <button
                className="next"
                onClick={() => setSelectedMeal("dinner")}
              >
                Next
              </button>
            </div>
          )}
           {selectedDays.includes(selectedDay) ? (
            <p>Already selected for this day</p>
          ) : (
            <>
          {selectedMeal === "dinner" && (
            <div>
              <div className="meal-cards">
                {mealDescription.meals.map((meal, index) => (
                  <div
                    className={`meal-card ${
                      selectedMeal === "breakfast" ? "active" : ""
                    }`}
                    key={index}
                  >
                    <div className="meal-card__info">
                      <h4>{meal.name}</h4>

                      {/* Modify the condition to show buttons for all meals */}
                      {meal.options && meal.options.length > 0 && (
                        <div className="options-buttons">
                          <h5
                            style={{ color: "GrayText", marginBottom: "5px" }}
                          >
                            Choose among them
                          </h5>
                          {meal.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              className={`option-button ${
                                selectedDinnerVarieties.includes(option.name) ? "active" : ""
                              }`}
                              onClick={() =>{
                                console.log(meal.name,option.name)
                                console.log(selectedDinnerVarieties)
                                handleVarietyChange(meal.name, option.name)
                              }
                                
                              }
                            >
                              {option.name}
                            </button>
                          ))}
                        </div>
                      )}

                      {selectedMeal !== "breakfast" &&
                        (!meal.options || meal.options.length === 0) && (
                          <p>{meal.description}</p>
                        )}
                    </div>
                  </div>
                ))}
              </div>
              <button className="submit" onClick={handleFoodSelection}>
                Submit
              </button>
            </div>
          )}
          </>
          )}
        </div>
      )}
         
    </section>
  );
};

export default FoodComponent;
