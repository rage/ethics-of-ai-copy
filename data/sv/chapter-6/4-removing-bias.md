---
path: '/sv/chapter-6/4-removing-bias'
title: 'Eliminera partiskhet'
hidden: false
---

<hero-icon heroIcon='chap6'/>


<styled-text>



Så hur gör vi då våra AI-system mer rättvisa och mindre partiska? Det finns ingen patentlösning för problemet med partiskhet – delvis på grund av att partiskhet kan visa sig i så många olika skepnader, och delvis eftersom det inte finns någon unik definition av ett algoritmiskt rättvist resultat. Men vi kan ändå titta på några av situationerna ovan och hitta sätt med vilka rättviseproblemen potentiellt kunde ha lösts.

Om vi börjar med exemplet med den könsdiskriminerande rekryteringsalgoritmen kan vi lokalisera källan till partiskheten i de historiska rekryteringsrutiner som användes som träningsdata, och antagandet att tidigare rekryteringsrutiner ger en normativ grund för framtida rutiner (dvs. ”vi borde anställa den här personen för att vi har anställt liknande personer tidigare”). Vi kan se att grundproblemen är ofrånkomligt länkade till företagskulturen och kulturen i teknikbranschen i övrigt, och till ett moraliskt tvivelaktigt resonemang (jämför Humes giljotin i kapitel 2). Det här är problem som kräver stora kulturella förändringar och omstruktureringar, och de kan sannolikt inte korrigeras med tekniska lösningar.

#### Antiklassificering
Man skulle dock kunna försöka rädda det som räddas kan från datauppsättningen för att se om det åtminstone går att minska partiskheten. En vanligt förekommande teknisk korrigering av datauppsättningen kallas antiklassificering, eller eliminering av explicita skyddade variabler från data. Det innebär att information som kön, etnicitet och besläktade egenskaper raderas från data. Besläktade egenskaper är starkt relaterade till de skyddade egenskaperna. På samma sätt som för den tidigare nämnda rekryteringsalgoritmen gäller att algoritmen om en persons meritförteckning innehåller referenser till mammaledighet eller ett universitet för kvinnor, fortfarande kan göra könsrelaterade förutsägelser även om den specifika könsvariabeln utelämnas.

Det här kan till viss del minska partiskheten i systemet, men frågan om huruvida det är effektivt för ett visst scenario måste bekräftas med hjälp av tester och granskning. Corbett-Davies och Goel (2018) har visat att antiklassificering till och med kan vara skadlig för rättvisan i vissa situationer, där egenskaper har olika prediktiv förmåga för olika samhällsgrupper. För att illustrera detta kan vi ta ett exempel med symtom på hjärtinfarkt: forskning har visat att hjärtinfarkter ser mycket olika ut mellan kvinnliga manliga patienter. De symtom som de flesta vet att man ska leta efter, till exempel smärtor i högra delen av bröstet, är mycket vanligare hos män än hos kvinnor. Därför skulle en app där man kan kontrollera om man har en hjärtinfarkt ge kraftigt felaktiga resultat om den inte tog hänsyn till patientens kön.

#### Nytt urval
I fall som den ansiktsigenkänningsalgoritm som utforskades av Buolamwini och Gebru, för vilken partiskhet uppstod på grund av en ojämlik urvalsstorlek, är ett sätt att konfrontera problemet att helt enkelt göra ett nytt urval. Det kan handla om att använda en mindre del av datauppsättningen, med en bättre fördelning av exempel mellan olika samhällsgrupper. Ett annat sätt att göra ett nytt urval är att skapa syntetiska exempel för de underrepresenterade grupperna (Chawla o.a., 2002). Huruvida dessa fungerar måste som sagt kontrolleras från fall till fall. Det kan vara så att datauppsättningen är så felbalanserad att det helt enkelt inte går att korrigera den på något annat sätt än att skapa en ny från scratch. I ett fall som ansiktsigenkänning, som är så känsligt och för vilket risken är så stor, kan vi inte ta för givet att systemet kommer att vara etiskt, rättvist och icke-diskriminerande, även om klassificeringen är opartisk och datauppsättningen jämlikt representativ. Det är något vi kommer att titta på i nästa avsnitt, men för att skapa en rättvis AI kan det ibland vara så att det bästa sättet är att inte utveckla AI alls.



#### Annan diskriminering än partiskhet

Det som är viktigt att komma ihåg är att diskriminering inte är samma sak som systematisk partiskhet. Partiskhet i AI-system är en uppenbar orsak till diskriminering, och tack vare dess kvantifierbarhet kan den enkelt passas in i den begreppsmässiga världen av teknisk AI-forskning. Det kan vara orsaken till att begreppsövergången från diskriminering till partiskhet görs så ofta.

AI-system kan dock delta i diskriminerande rutiner som inte har sitt ursprung i partiska AI-system. Vi behöver snarare utvidga vårt undersökningsområde från AI-modellens detaljer till hela det system av institutionen som det deltar i.

</styled-text>

<text-box name="" icon="chap6">

I början av 2018 publicerade forskare från Stanford Graduate School of Business en artikel med detaljerad information om ett djupinlärningssystem som kunde skilja mellan homosexuella och heterosexuella män med 81 % precision baserat på en enda bild av deras ansikte. Upptäckten var minst sagt kontroversiell, av ett flertal olika skäl. Kritiker har visat oro för återuppståndelsen av pseudovetenskapen fysionomik, som har en djupt rotad koppling till historiska rasistiska orättvisor. Det har också funnits misstankar på att systemet snarare än att detektera subtila genetiska indikatorer – vilket hävdades vara fallet – i stället spårar hur folk vårdar sitt ansikte och fotograferar sig själva.

Dessutom agerar det här AI-systemet på ett etiskt grumligt område i termer av integritet, självbestämmande och, givetvis, diskriminering. Om vi bortser från de övriga frågorna för tillfället, på vilket sätt visar sig diskrimineringen i det här fallet? Det diskriminerande elementet är den här gången uppenbarligen inte klassificeringsrelaterad partiskhet: vi har inget etiskt intresse av att veta om uppskattningsfunktionen är bättre på att gissa sexualitet i vissa grupper än i andra. Systemets etiskt relevanta funktion är i stället att det – utan hänsyn till dess precision – direkt möjliggör olika behandling baserat på den uppfattade samhällsgruppen.

</text-box>

<styled-text>

Vi behöver inte visa exempel på uppsåtligt skadlig användning av de system som beskrivs ovan eftersom deras potential nog är uppenbar för alla. Om vi bortser från den direkt skadliga användningen kan vi föreställa oss att tekniken integreras i till exempel det maskineri för individanpassad annonsering som utgörs av sociala medier, databehandlare, influerare och global handel. Även om det klassificerande AI-systemet enligt alla tekniska standarder är rättvist och opartiskt, baseras onlineannonseringen av varor på den diskriminerande principen att förmodad sexuell läggning är ett giltigt skäl att behandla människor olika.

Det här leder oss till en viktig punkt för alla som arbetar med etik inom AI-system: se upp för reduceringsfällan! Vi måste undvika att reducera begreppet etik till förenklade, effektiva, kvantifierbara värden som opartiskhet. Eftersom AI-system deltar i processer som är långt mer komplexa än systemen själva kan etik inte mätas enbart genom att titta på algoritmens in-och utdatavärden.

Rättvis är kort sagt inte samma sak som etisk.

</styled-text>

<quiz id="cc32315c-31cb-5d55-9393-ab0df0042f36"> </quiz>

<quiz id="e8b53582-8952-53df-a417-9f1f7e27134a"> </quiz>
