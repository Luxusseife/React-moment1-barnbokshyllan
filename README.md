# Moment 1, Fördjupad frontend-utveckling

Min lösning av denna uppgift blev **Barnbokshyllan** då barnböcker är ett stort intresse för mig och sonen som är 3,5 år. Från det lokala biblioteket har vi lånat över 500 barnböcker sedan sommaren 2022.

## Komponenter
Jag har skapat tre olika komponenter. En komponent hanterar sidhuvudet med en dynamisk titel (prop) och en banner medans en annan komponent sköter sidfoten med statisk copyright-information. En tredje komponent hanterar sidans innehåll vilket är "kort" av böcker i _hyllan_. Samtliga komponenter exporteras som default.

- I komponenten **Header** tas props för webbplatsens titel emot och typspecificeras som string. Komponenten returnerar ett React-fragment som innehållet en h1 med webbplatsens titel och en div innehållandes en bild. Bilden importeras från **src/assets** och skrivs ut direkt inom måsvingar.  

- I komponenten **BookCard** har jag skapat ett interface kallat **BookInfo** som beskriver vilka egenskaper, props, som objektet består utav. Komponenten returnerar en section med bokinformation och här används propsen direkt eftersom de destrukturerats direkt som funktionsparametrar.

## Huvudfilen
I huvudfilen, **App.tsx**, har jag importerat in mina olika komponenter för header, footer och innehåll. Även CSS för huvudfilen importeras in. Huvudfilen returnerar child-komponenterna i ett React-fragment där de renderas i tur och ordning, vilket då resulterar i min webbplats som består av en header, ett innehåll och en footer.  

### _Skapad av Jenny Lind, jeli2308._