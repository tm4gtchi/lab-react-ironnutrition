import React, { useState } from 'react';
import foodsJSON from "./foods.json";
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"

function App() {

  const [foodData, setFoodData] = useState(foodsJSON);
  const [useForm, setUseForm] = useState(foodsJSON);

  const addNewFood = (newFood) => {
		const updateFoodData = [ ...foodData, newFood ];
		const updateFormData = [ ...useForm, newFood ];

		setFoodData(updateFoodData);
		setUseForm(updateFormData);
	};

  return (
    <div className="App">
      {foodData.map((food)=> {
        return (
            <FoodBox
              food={food} key={food.name}/>
        )
      })}
      <AddFoodForm food={foodData} addFood_func={addNewFood} />
    </div>
  );
}

export default App;
