import { randomDate, randomDateFinal } from "./helpers";

/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'Y3EWpEbefI6wZSb8wz22D3fQxA832CtHTWDmDrBq';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${randomDate().getFullYear()}-${randomDate().getMonth()}-${randomDate().getDate()}`;


/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {

}
