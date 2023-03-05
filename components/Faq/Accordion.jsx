import * as React from 'react';
import Items from './AccordionItems' 


const TextContent = [
    {
        title:'Harmony apartments rendelkezik terasszal?', 
        text:' Igen, vannak olyan lehetőségek ezen a szálláson, ahol van terasz. Többet megtudhat erről és Harmony apartments további felszereltségeiről ezen az oldalon.' 
    }, 
    {
        title:'Harmony apartments mennyiért kínál szállást?', 
        text:' Harmony apartments árai változóak lehetnek, a foglalás feltételeitől függően (pl.: foglalási dátumok, szállodai szabályzat, stb.).'
    }, 
    {
        title:'Milyen közel van Harmony apartments a strandhoz?', 
        text:'Harmony apartments csupán 50 m távolságra van a legközelebbi strandtól. '
    }, 

]

export default function SimpleAccordion() {
  return (
    <div>
     <Items TitleContent={TextContent[0].title} textContent={TextContent[0].text} />
     <Items TitleContent={TextContent[1].title} textContent={TextContent[1].text} />
     <Items TitleContent={TextContent[2].title} textContent={TextContent[2].text} />
    </div>
  );
}
