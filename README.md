# Moment 1, Fördjupad frontend-utveckling

Min lösning av denna uppgift blev **Barnbokshyllan** då barnböcker är ett stort intresse för mig och sonen som är 3,5 år. Från det lokala biblioteket har vi lånat över 500 barnböcker sedan sommaren 2022.

## Komponenter
Jag har skapat tre olika komponenter. En komponent hanterar sidhuvudet med en dynamisk titel (prop) och en banner medans en annan komponent sköter sidfoten med statisk copyright-information. En tredje komponent, BookCard, hanterar sidans innehåll vilket är "kort" av böcker i _hyllan_. Samtliga komponenter har en egen CSS-fil som styr deras utseende och huvudfilen har även lite inline-style.

- I komponenten **Header** tas en prop för webbplatsens titel emot och typspecificeras som string. Komponenten returnerar ett React-fragment som innehåller en h1 med webbplatsens titel och en div innehållandes en bild. Bilden importeras från **src/assets** och skrivs ut direkt inom måsvingar.  

- I komponenten **BookCard** har jag skapat ett interface kallat **BookInfo** som beskriver vilka egenskaper, props, som bok-objektet består utav. Komponenten returnerar sen en sektion med bokinformation och här används propsen direkt eftersom de destrukturerats direkt som funktionsparametrar.

## Huvudfilen
I huvudfilen, **App.tsx**, har jag importerat in mina olika komponenter för header, footer och innehåll. Även CSS för huvudfilen importeras in. Huvudfilen returnerar ett React-fragment som innehåller de renderade child-komponenterna i tur och ordning. Detta resulterar i en webbplats som består av en header, ett innehåll och en footer. Gällande innehållet så renderas detta genom att komponenten **BookCard** återanvänds för varje bok i **booksArray**. Denna array itereras genom användning av **map()**, vilket gör att varje bok renderas inuti ett li-element i en ul. Listan stylas med inline-style och här avgör status på boolean ifall bakgrunden ska bli grön eller gul. Det görs med en ternär operator/conditional operator. 

### _Skapad av Jenny Lind, jeli2308._