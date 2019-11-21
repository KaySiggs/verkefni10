
import { randomNumber } from "./helpers";

/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = '9eGedJ232eEUcG0tEQExq9uzpGThelSDFu68bfqn';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod?api_key=9eGedJ232eEUcG0tEQExq9uzpGThelSDFu68bfqn';


/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */



export default async function getRandomImage() {
const day = 15; 
const month = 07;
const year = 2010;

const date =`${year}-${month}-${day}`;
console.log(URL + API_KEY + date);

const result = await fetch(URL + API_KEY + date);
let date;
if(result.status !=200){
    console.error('Non 200 status');
}else{
    date = await result.json();
}
return data;
}


export default (URL) =>{
  let URL = 'https://api.nasa.gov/planetary/apod';
    let config = {};
    const response = await
     getRandomImage(URL);
        console.log(response);


}
/* hugmyndir 
* export {URL};
*
*   let URL = 'https://api.nasa.gov/planetary/apod';
*    let config = {};
*   const response = await
*   getRandomImage(URL);
*   console.log(response);
*/

