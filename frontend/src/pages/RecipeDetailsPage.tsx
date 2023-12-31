import {Meal} from "../Meal.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

type RecipeDetailsPageProps = {
    meals:Meal[]
    getMeals:()=>void
}
export default function RecipeDetailsPage(props:RecipeDetailsPageProps){
    const pathId = useParams().id
    const [selectedMeal, setSelectedMeal] = useState<Meal>()
    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const mealData = props.meals.find(
        (meal:Meal) => meal._id === pathId
    )
    useEffect(() => {
        if (mealData){
            setSelectedMeal(mealData)
            setIsLoading(false)
        }
        else {
            setError("NOT FOUND!")
        }
    }, []);


    return (
        <>
        {!isLoading &&
        <div className={"recipe-details"}>
                <h1>{selectedMeal?.strMeal}</h1>
                <img src={selectedMeal?.strMealThumb} alt="recipe image"/>
                <div>{selectedMeal?.strInstructions}</div>
                <div className="ingredient-list">
                    <div className="column">
                        <ul>
                            {/*Use trim() method to remove spaces and check if it is a non-empty string*/}
                            {selectedMeal?.strIngredient1!=null && selectedMeal?.strIngredient1.trim()!="" && <li>{selectedMeal?.strIngredient1}</li>}
                            {selectedMeal?.strIngredient2!=null && selectedMeal?.strIngredient2.trim()!="" && <li>{selectedMeal?.strIngredient2}</li>}
                            {selectedMeal?.strIngredient3!=null && selectedMeal?.strIngredient3.trim()!="" && <li>{selectedMeal?.strIngredient3}</li>}
                            {selectedMeal?.strIngredient4!=null && selectedMeal?.strIngredient4.trim()!="" && <li>{selectedMeal?.strIngredient4}</li>}
                            {selectedMeal?.strIngredient5!=null && selectedMeal?.strIngredient5.trim()!="" && <li>{selectedMeal?.strIngredient5}</li>}
                            {selectedMeal?.strIngredient6!=null && selectedMeal?.strIngredient6.trim()!="" && <li>{selectedMeal?.strIngredient6}</li>}
                            {selectedMeal?.strIngredient7!=null && selectedMeal?.strIngredient7.trim()!="" && <li>{selectedMeal?.strIngredient7}</li>}
                            {selectedMeal?.strIngredient8!=null && selectedMeal?.strIngredient8.trim()!="" && <li>{selectedMeal?.strIngredient8}</li>}
                            {selectedMeal?.strIngredient9!=null && selectedMeal?.strIngredient9.trim()!="" && <li>{selectedMeal?.strIngredient9}</li>}
                            {selectedMeal?.strIngredient10!=null && selectedMeal?.strIngredient10.trim()!="" && <li>{selectedMeal?.strIngredient10}</li>}
                            {selectedMeal?.strIngredient11!=null && selectedMeal?.strIngredient11.trim()!="" && <li>{selectedMeal?.strIngredient11}</li>}
                            {selectedMeal?.strIngredient12!=null && selectedMeal?.strIngredient12.trim()!="" && <li>{selectedMeal?.strIngredient12}</li>}
                            {selectedMeal?.strIngredient13!=null && selectedMeal?.strIngredient13.trim()!="" && <li>{selectedMeal?.strIngredient13}</li>}
                            {selectedMeal?.strIngredient14!=null && selectedMeal?.strIngredient14.trim()!="" && <li>{selectedMeal?.strIngredient14}</li>}
                            {selectedMeal?.strIngredient15!=null && selectedMeal?.strIngredient15.trim()!="" && <li>{selectedMeal?.strIngredient15}</li>}
                            {selectedMeal?.strIngredient16!=null && selectedMeal?.strIngredient16.trim()!="" && <li>{selectedMeal?.strIngredient16}</li>}
                            {selectedMeal?.strIngredient17!=null && selectedMeal?.strIngredient17.trim()!="" && <li>{selectedMeal?.strIngredient17}</li>}
                            {selectedMeal?.strIngredient18!=null && selectedMeal?.strIngredient18.trim()!="" && <li>{selectedMeal?.strIngredient18}</li>}
                            {selectedMeal?.strIngredient19!=null && selectedMeal?.strIngredient19.trim()!="" && <li>{selectedMeal?.strIngredient19}</li>}
                            {selectedMeal?.strIngredient20!=null && selectedMeal?.strIngredient20.trim()!="" && <li>{selectedMeal?.strIngredient20}</li>}
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            {selectedMeal?.strMeasure1!=null && selectedMeal?.strMeasure1.trim()!="" && <li>{selectedMeal?.strMeasure1}</li>}
                            {selectedMeal?.strMeasure2!=null && selectedMeal?.strMeasure2.trim()!="" && <li>{selectedMeal?.strMeasure2}</li>}
                            {selectedMeal?.strMeasure3!=null && selectedMeal?.strMeasure3.trim()!="" && <li>{selectedMeal?.strMeasure3}</li>}
                            {selectedMeal?.strMeasure4!=null && selectedMeal?.strMeasure4.trim()!="" && <li>{selectedMeal?.strMeasure4}</li>}
                            {selectedMeal?.strMeasure5!=null && selectedMeal?.strMeasure5.trim()!="" && <li>{selectedMeal?.strMeasure5}</li>}
                            {selectedMeal?.strMeasure6!=null && selectedMeal?.strMeasure6.trim()!="" && <li>{selectedMeal?.strMeasure6}</li>}
                            {selectedMeal?.strMeasure7!=null && selectedMeal?.strMeasure7.trim()!="" && <li>{selectedMeal?.strMeasure7}</li>}
                            {selectedMeal?.strMeasure8!=null && selectedMeal?.strMeasure8.trim()!="" && <li>{selectedMeal?.strMeasure8}</li>}
                            {selectedMeal?.strMeasure9!=null && selectedMeal?.strMeasure9.trim()!="" && <li>{selectedMeal?.strMeasure9}</li>}
                            {selectedMeal?.strMeasure10!=null && selectedMeal?.strMeasure10.trim()!="" && <li>{selectedMeal?.strMeasure10}</li>}
                            {selectedMeal?.strMeasure11!=null && selectedMeal?.strMeasure11.trim()!="" && <li>{selectedMeal?.strMeasure11}</li>}
                            {selectedMeal?.strMeasure12!=null && selectedMeal?.strMeasure12.trim()!="" && <li>{selectedMeal?.strMeasure12}</li>}
                            {selectedMeal?.strMeasure13!=null && selectedMeal?.strMeasure13.trim()!="" && <li>{selectedMeal?.strMeasure13}</li>}
                            {selectedMeal?.strMeasure14!=null && selectedMeal?.strMeasure14.trim()!="" && <li>{selectedMeal?.strMeasure14}</li>}
                            {selectedMeal?.strMeasure15!=null && selectedMeal?.strMeasure15.trim()!="" && <li>{selectedMeal?.strMeasure15}</li>}
                            {selectedMeal?.strMeasure16!=null && selectedMeal?.strMeasure16.trim()!="" && <li>{selectedMeal?.strMeasure16}</li>}
                            {selectedMeal?.strMeasure17!=null && selectedMeal?.strMeasure17.trim()!="" && <li>{selectedMeal?.strMeasure17}</li>}
                            {selectedMeal?.strMeasure18!=null && selectedMeal?.strMeasure18.trim()!="" && <li>{selectedMeal?.strMeasure18}</li>}
                            {selectedMeal?.strMeasure19!=null && selectedMeal?.strMeasure19.trim()!="" && <li>{selectedMeal?.strMeasure19}</li>}
                            {selectedMeal?.strMeasure20!=null && selectedMeal?.strMeasure20.trim()!="" && <li>{selectedMeal?.strMeasure20}</li>}
                        </ul>
                    </div>
                </div>
            {error}
        </div>
        }
    </>)
}