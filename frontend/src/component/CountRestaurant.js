import React ,{ useEffect } from "react";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import {getRestaurants} from "../actions/restaurantAction";
import "./css/Count.css";



const CountRestaurant = () => {
    const dispatch = useDispatch();

    const {count, pureVegRestaurantsCount, showVegOnly, loading,error} =
      useSelector((state) =>state.restaurants);

      useEffect(() => {
        dispatch(getRestaurants());
      }, [dispatch, showVegOnly]);

      
  return (
    <div>
        {loading ? (
            <p>Loading restaurants count...</p>
        ) : error ? (
            <p>Error: {error}</p>
        ) : (
            <p className="NumOfRestro">
                {showVegOnly ? pureVegRestaurantsCount : count}
                <span className ="Restro">
                    {showVegOnly
                      ? pureVegRestaurantsCount === 1
                        ?  "restaurant"
                        :  "restaurants"
                      : count === 1
                      ?  "restaurant"
                      :  "restaurants"}
                      </span>
                      <hr/>

                      </p>  
        )}

        
      
    </div>
  );
};

export default CountRestaurant
