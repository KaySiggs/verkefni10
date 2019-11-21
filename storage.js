/**
 * Sækir og vistar í localStorage
 */
import { el } from "./helpers";


// Fast sem skilgreinir heiti á lykli sem vistað er undir í localStorage
const LOCALSTORAGE_KEY = 'favourite_spacephotos';

/**
 * Sækir gögn úr localStorage. Skilað sem lista á forminu:
 * [{ type, mediaUrl, text, title },
 *  { type, mediaUrl, text, title },
 *  ...,
 *  { type, mediaUrl, text, title }]
 *
 * @returns {array} fylki af myndum eða tóma fylkið ef ekkert vistað.
 */




export function load() {
    const items = localStorage.getItem(LOCALSTORAGE_KEY) 
    ? JSON.parse (localStorage.getItem(LOCALSTORAGE_KEY)) : []; 

    console.log(items);

    const main = document.querySelectorAll('main');

    items.forEach((item) => {
        const h1 = el ('h1', item[3]);
        const div = el ('div');
        const value = item [1];

        div.appendChild(h1);
        main.appendChild(div);

        if (item[0]==='image'){
            const img = el( 'img');
            img.src = valuel
            div.appendChild(img);
        }else{
            const video = el ('iframe');
            video.src = value;
            video.setAttribute('width', 480);
            video.setAttribute('height', 320 );
            div.appendChild(video);
        }

    });
        

} 


/**
 * Vistaðar myndir með texta.
 *
 * @param {string} type annað hvort image eða video
 * @param {string} mediaUrl URL á myndinni/myndbandinu.
 * @param {string} text texti fyrir myndina/myndbandið.
 * @param {string} title titill fyrir myndina/myndbandið.
 * 
 * 
 * 
 */



export function save(type, mediaUrl, text, title) {
    const items = localStorage.getItem(LOCALSTORAGE_KEY)
    ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)): [] ;

    const item= [type,mediaUrl, text, title];
    items.push(item);

    const data = JSON.stringify(items);
    localStorage.setItem(LOCALSTORAGE_KEY, data);
    console.log(data);


}



/**
 * Hreinsar allar myndir úr localStorage
 */
export default function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}