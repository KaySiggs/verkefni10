
// todo vísa í rétta hluti með import
import getRandomImage from './nasa-api';
import {save, load, clear} from './storage';
import { el, empty } from './helpers';



// breytur til þess að halda utan um html element nodes
let title; // titill fyrir mynd á forsíðu
let text; // texti fyrir mynd á forsíðu
let url;
let type;

let image; // object sem inniheldur núverandi mynd á forsíðu.


/*
 * Sækir nýja Mynd af handahófi frá Nasa API og birtir hana á forsíðunni
 * ásamt titli og texta.
 */



function getNewImage() {
   image=getRandomImage();
   image.then((data) =>{

       url = data.url;
       title= data.title;
       type= data.media_type;
       text= data.text;
       const div = document.querySelector('div');

       empty(div);


       if (type === 'image'){
           const img = el ('img');
            img.src = url; 
            div.appendChild(IMG);
            
       }else{

           const video= el ('iframe');
           video.src = url; 
           video.setAttribute('width', 480);
           video.setAttribute('height', 320);
           div.appendChild(video);
   }


   const title = document.getElementsByClassName('apod__title')[0];
   const text = document.getElementsByClassName('apod__text')[0];

   empty(title);
   empty(text);


   title.appendChild(document.createTextNode(title));
   text.appendChild(document.createTextNode(text));
      
});


console.log('Click');


/*
 * Vistar núverandi mynd í storage.
 */



function saveCurrentImage() {
    save(type, url, text, title);
   
}

/*
 * Upphafsstillir forsíðuna. Setur event listeners á takkana, og sækir eina mynd.
 *
 */
 
export default function init(apod){
    const  = apod.querySelector(' ');


}

/*
 * Fall fyrir favourites.html. Sér um að sækja allar vistuðu myndirnar og birta þær ásamt
 * titlum þeirra.
 */
export function loadFavourites() {
    load();
}

}