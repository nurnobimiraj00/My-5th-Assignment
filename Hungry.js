function searchButtonHandler() {
    const searchInputValue = document.getElementById('searchInput').value;
    let url = '';
    if (searchInputValue.length == 1) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data));
    }
    else {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data));
    }
}

function displayMeals(matchedMeals) {
    document.getElementById('ingredientInfoSection').style.display = 'none'
    document.getElementById('matchedMeals').innerHTML = '';
    const matchedMealsArray = matchedMeals.meals;
    for (let i = 0; i < matchedMealsArray.length; i++) {
        const meal = matchedMealsArray[i];
        console.log(meal);
        const matchedMealDiv = document.createElement('div')
        matchedMealDiv.className = "meal-item"
        const mealInfo = `
         <div class="card meal-card" style="width: 18rem;">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body cardBody">
                 <p class="card-text">${meal.strMeal}</p>
             </div>
         </div>
        `
        matchedMealDiv.innerHTML = mealInfo;
        document.getElementById('matchedMeals').appendChild(matchedMealDiv);

        matchedMealDiv.addEventListener('click', function () {
            document.getElementById('ingredientInfoSection').style.display = 'block'
            const ingredientInfo = `
                <div class="card ingredientsCard" style="width: 30%;">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2> ${meal.strMeal} </h2>
                    <h3> Ingredients </h3>
                    <h5>${meal.strIngredient1}</h5>
                    <h5>${meal.strIngredient2}</h5>
                    <h5>${meal.strIngredient3}</h5>
                    <h5>${meal.strIngredient4}</h5>
                    <h5>${meal.strIngredient5}</h5>
                    <h5>${meal.strIngredient6}</h5>
                    <h5>${meal.strIngredient7}</h5>
                    <h5>${meal.strIngredient8}</h5>
                    <h5>${meal.strIngredient9}</h5>
                    <h5>${meal.strIngredient10}</h5>
                   
                </div>
                </div>
            `
            document.getElementById('ingredientInfoSection').innerHTML = ingredientInfo;
        });
    }
}
