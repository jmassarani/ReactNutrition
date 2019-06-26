import { pick } from 'lodash'

const APP_ID = '0a7caad2'
const API_KEY = 'f39232258d115e023e24b8c97deadcff'

const apiCall = query => {
  const request = fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-app-id': APP_ID,
      'x-app-key': API_KEY
    },
    body: JSON.stringify({
      query: query,

    })
  })


  return request
}


const extractNutritionInfo = async (query) => {
  const relevantInfo = ['nf_calories', 'nf_carbohydrates', 'serving_qty', 'nf_protein', 'nf_cholesterol', 'nf_sugars', 'nf_total_carbohydrate', 'photo', 'food_name', 'nf_total_fat']
  const response = await apiCall(query);
  const allFood = await response.json();
  return allFood.foods.map(food => {
    console.log(pick(food, relevantInfo));
    return pick(food, relevantInfo);
  });
  

}

export default extractNutritionInfo