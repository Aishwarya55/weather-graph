import {GOOGLE_API_KEY} from '../constants/apikeys'

export const getCurrentCity = (latitude, longitude) => {
    console.log( "curent city action called")

        return (dispatch) => {
            const error = {
                type: "FETCH_CURRENT_CITY",
                // Setting default city to Melbourne
                payload: {latitude, longitude, currentCity: 'Melbourne'} 
            }
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`).then(response => response.json(), error => {
                 dispatch(error)
            }).then((json)=>{
                console.log(json)
                if(json.results.length)
                    dispatch ({
                        type: "FETCH_CURRENT_CITY",
                        payload: {latitude, longitude, currentCity: json.results[0].address_components[json.results[0].address_components.length-2]}
                    })
               dispatch(error)
            })
        }
    }