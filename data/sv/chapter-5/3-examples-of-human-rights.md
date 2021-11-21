---
path: '/sv/chapter-5/3-examples-of-human-rights'
title: 'Exempel på mänskliga rättigheter: integritet, säkerhet och inkludering'
hidden: false
---

<hero-icon heroIcon='chap5'/>

<styled-text>

### Integritet

Frågan om integritet blir aktuell till exempel när digitala register innehåller information som kan användas för att få fram känslig information om egenskaper (ålder, kön eller sexuell läggning), preferenser eller religiösa eller politiska åsikter. Även biometriska data kan bli ett integritetsproblem, eftersom de kan avslöja uppgifter om fysisk eller mental hälsa. Ofta är det inte själva datainnehållet som är det stora problemet, utan det sätt på vilket data kan användas för att manipulera, påverka eller skada en person.

Etiskt sett har integritet en hel del med personlig autonomi att göra. Enligt de principer som myntades av John Locke har rätten att styra våra egna privata liv setts som en förutsättning för vår autonomi. Om vi fråntas den rätten kränker det vår psykologiska och moraliska integritet i grunden.

</styled-text>

<text-box icon="philIcon">

Många har föreslagit principen att vi alla ska ha kontroll över våra egna data, och att data som berör oss inte ska få användas för att skada eller diskriminera oss. Vissa anser att den här var mans rätt att ha ”full kontroll över sina egna data” bör vara en mänsklig rättighet.

Men exakt vad innebär ”egna data”? Är det rådata eller insamlade och analyserade data? Om data används för något annat ändamål än de var avsedda för, är de då fortfarande våra? Eller som Wachter och Mittelstadt ([2019](https://osf.io/preprints/lawarxiv/mu2kf/)) uttrycker det: de slutledningar som kan dras utifrån våra data, tillhör de våra ”egna data”?

Wachter och Mittelstadt (2019) föreslår att var mans rätt till kontroll över sina egna data omformuleras som ”rätten till rimliga slutledningar”. Enligt dem är det viktigt att vi även har kontroll över de ”högriskslutledningar” om oss som går att komma fram till genom analys av stordata. Dessa slutledningar är integritetskränkande eller skadar vårt rykte, eller så är de svåra att bekräfta (i det att de är förutseende eller åsiktsbaserade), men de används ändå för att fatta viktiga beslut.

</text-box>

<img src=../../../src/assets/london-zoom.svg alt="london zoomed image">

<styled-text>

#### Dataskyddsförordningen

Den allmänna [dataskyddsförordningen](https://gdpr.eu/what-is-gdpr/) är ett juridiskt ramverk som sätter upp riktlinjer för insamlingen och bearbetandet av personuppgifter från personer bosatta inom EU.

Förordningens mål är att se till att individer får kontrollen över sina personuppgifter. All information som berör en individ som kan bli direkt eller indirekt identifierad klassas som personuppgifter. Det innefattar bland annat namn, personnummer och e-postadresser. Även platsinformation, biometriska data, etnicitet, kön, webbkakor samt politisk eller religiös övertygelse kan utgöra personuppgifter. Pseudonymdata (data som inte direkt identifierar någon men som kan kopplas till en person) kan också ingå i definitionen om det är lätt att identifiera personen.

Personen måste ge sitt specifika, otvetydiga samtycke till att hens data bearbetas. Samtycket måste vara ”frivilligt, specifikt, informerat och otvetydigt”. Samtycket kan när som helst dras tillbaka av den berörda personen. Barn under 13 år kan endast ge sitt samtycke med tillstånd från en förälder.

Dataskyddsförordningen erkänner ett flertal integritetsrelaterade rättigheter. Dess mål är att ge oss mer kontroll över våra data. Här är några av dessa rättigheter:
* rätten att informeras (en person måste informeras om användningen av hens personuppgifter)
* rätten till åtkomst (en förklaring måste ges för hur någons personuppgifter används)
* rätten att ångra sig (en person har rätt att glömmas bort, dvs. att uppgifterna om personen raderas)
* rätten att neka till bearbetningen (en person kan neka till användningen av hens personuppgifter).


Om du bearbetar data måste du enligt dataskyddsförordningen göra det i enlighet med principer för skydd och ansvar. Du måste ta hänsyn till dessa dataskyddsprinciper i utformningen av alla nya produkter och aktiviteter. Dataskyddsprinciperna är följande:

* **Lagenlighet, rättvisa och transparens**: Bearbetningen måste vara lagenlig, rättvis och transparent gentemot den berörda personen.
* **Ändamålsbegränsning**: Du måste bearbeta data för de specifika rättmätiga ändamål som uttryckligen har angetts vid insamlingen av dem.
* **Dataminimering**: Du får endast samla in och bearbeta de data du absolut behöver för de ändamål som angetts.
* **Riktighet**: Du måste hålla personuppgifterna korrekta och aktuella.
* **Lagringsbegränsning**: Du får endast lagra personligt identifierbara data så länge de behövs för det ändamål som angetts.
* **Integritet och konfidentialitet**: Bearbetningen måste genomföras på ett sätt som garanterar lämpliga nivåer av säkerhet, integritet och konfidentialitet (till exempel med hjälp av kryptering).
* **Ansvar**: Den personuppgiftsansvarige måste kunna visa att dataskyddsförordningen är uppfylld vad gäller alla dessa principer.

Enligt förordningen måste den som bearbetar data även hantera dessa data på ett säkert sätt genom att vidta ”lämpliga tekniska och organisatoriska åtgärder”.

#### Så skyddas integriteten – metoder för dataanonymisering

Dataskyddsförordningen tillåter organisationer att utan samtycke samla in anonymiserade data, använda dem för valfritt ändamål och lagra dem utan tidsbegränsning – så länga alla identifierare avlägsnas från dessa data. Det finns flera tekniker för dataanonymisering. Här är några:

* **Generalisering** är en metod som avsiktligen tar bort vissa data för att göra resten mindre identifierbara. Data kan modifieras i ett antal intervall eller i ett större område med lämpliga avgränsningar. Du kan till exempel ta bort gatuadresser, men låta ortsinformation vara kvar. På så sätt kan du avlägsna vissa av identifierarna men ändå behålla en viss precision i dina data.

* **Pseudonymisering** är en datahanterings- och avidentifieringsmetod som ersätter identifierare – namn id-nummer osv. – med falska identifierare eller pseudonymer. Till exempel skulle identifieraren ”Santeri” kunna ersättas med ”Saara”. Med pseudonymisering bibehålls den statistiska riktigheten och dataintegriteten. Modifierade data kan användas samtidigt som dataintegriteten skyddas.

* **Syntetiska data** är en metod som använder påhittade, artificiella datauppsättningar istället för att ändra i den ursprungliga datauppsättningen. Processen innefattar skapandet av statistiska modeller baserat på mönster från den ursprungliga datauppsättningen. Du kan använda standardavvikelser, medianer, linjär regression eller andra statistiska tekniker för att generera syntetiska data.

Dataanonymisering kan vara en riktig utmaning. Det finns även metoder för s.k. ”avanonymisering”. Avanonymiseringsmetoder försöker återidentifiera krypterad eller dold information. Avanonymisering, eller återidentifiering av data, kan till exempel korsreferera anonymiserad information med andra tillgängliga data för att på så sätt identifiera en person, grupp eller transaktion.


### Säkerhet
Rätten till säkerhet är en norm som skyddar individer från fysisk, social och känslomässig skada, inklusive olyckor och tekniska fel. Med säkerhet menas ett skydd mot skadliga och avsiktliga hot.

Som rättighet skapar säkerhet en moralisk förpliktelse att utforma våra produkter, lagar och miljöer på ett sådant sätt att säkerheten kan garanteras även under ovanliga omständigheter eller hinder. När det kommer till AI har säkerhet kommit att omfatta ett flertal olika diskurser, däribland följande:

#### 1) AI som ett existentiellt hot

Diskursen om AI som ett existentiellt hot tittar på artificiell intelligens utifrån ett starkt spekulativt och framtidsinriktat perspektiv. Den ställer frågor om vilken typ av hot AI-systemen ställer mänskligheten inför om de blir för komplicerade för att vi ska kunna kontrollera dem (den här typen av ”superintelligensscenarier” målas upp av tänkare som Nick Bostrom och Ray Kurzweil).

Sannolikheten för en framtid med superintelligent AI har dock ifrågasatts, både av filosofer och teknologer. Som situationen ser ut idag finns det ingen anledning att förmoda att superintelligens kommer att uppstå ur moderna algoritmiska metoder.

#### 2) Säkerhet inom AI

Den andra tolkningen av säkerhet inom AI är den praktiska frågan om hur system kan utvecklas som fungerar på ett säkert och förutsägbart sätt. Allteftersom AI-system integreras i allt fler områden i livet blir det viktigare att systemen är välutformade för att klara av världens komplexitet. Ett mycket praktiskt och redan befintligt exempel på det här är filbytesvarnare, som använder maskininlärning för att förhindra att bilar lämnar sin fil om det inte är förarens avsikt. Maskininlärningsforskare har upptäckt att vissa filbytesvarnaralgoritmer lätt förväxlar linjerna med märken i vägen, vilket kan leda till att bilen kör av vägen genom att följa fel markeringar.

</styled-text>

<text-box icon="techIcon">

Det kan hävdas att rätten till säkerhet ställer kravet på tillverkarna av ny teknik att ansvara för dessa typer av scenarier: det faktum att miljön inte var idealisk är ingen ursäkt för systemfel. Maskininlärningsforskare kallar den här egenskapen **robusthet** – systemets kapacitet att fungera med förutsägbarhet under nya och oförutsägbara förhållanden.

</text-box>

<styled-text>

Den etiskt – och juridiskt – betydelsefulla frågan är ”vilka är de acceptabla gränserna för robusthet?” Det är förstås möjligt att förhållanden kan uppstå som är så osannolika att vi – även om systemets säkerhet inte kan garanteras – kan medge att ”ingen rimligtvis kunde ha sett det komma”. Det är dock svårt att avgöra var den här gränsen går, och det är definitivt inte något som är unikt för AI eller ens för tekniken.

Den framåtlängtan som är kopplad till framtidsvisionerna för AI har dock på ett helt nytt sätt väckt frågor om gränserna för säkerhet och stillandet av den miljömässiga osäkerheten. Ett exempel på detta hittar vi i diskursen om självgående fordon.

</styled-text>

<text-box name="Inburade trottoarer AI-säkerhet och miljömässig osäkerhet" icon="exerIcon">

Ett svårt problem för självgående fordon är att stadstrafikmiljön är så komplex och oförutsägbar. Även om AI-drivna fordon hela tiden utvecklas och blir bättre på att modellera omgivningen kan även en liten grupp individer som delar på ett utrymme att röra sig i utgöra en konstellation som är svår att förutsäga. När bilarnas tekniska lösningar inte räcker till kan en annan möjlighet vara att lösa problemet genom att begränsa osäkerheten i miljön.

I en kolumn i New York Times förslår konsulten Eric A. Taub en lösning: genom att stänga in trottoarerna i burar, med trafikljussynkroniserade portar vid övergångsställen, förenklas den komplexa trafikmiljön och blir mer förståelig för självgående fordon och därmed säkrare. Denna säkerhet har dock ett uppenbart pris: fotgängarnas frihet begränsas och ansvarsfördelningen förändras. Det innebär att vi måste titta på gränsen mellan rätten till säkerhet och rätten till frihet. Vilken är viktigast?

Eller är det här bara en falsk splittring som har uppstått ur en teknisk lösning som ändå aldrig var särskilt genomförbar? En annan intressant tanke som kan härledas härifrån är olagligheten i att gå över gatan på platser utan övergångsställe. Detta fenomen existerade inte innan vägar blev en plats vars främsta användare är motorfordon. Hur ter sig detta i jämförelse med tanken på inburade trottoarer?


</text-box>

<styled-text>

#### 3) Skapa säkerhet med AI

Det tredje konceptet för säkerhet inom AI som vi kommer att titta på i det här avsnittet är skapandet av säkerhet med hjälp av AI. Kan AI göra världen säkrare? Kan AI göra att världen känns säkrare? Säkrare för vem?

Robotiseringen kan ge ett praktiskt exempel på detta koncept. Arbetet med hantering av farliga material eller att arbeta i riskfyllda miljöer kan delegeras till robotar för att skydda hälsan för arbetande människor (eller djur).

En annan typ av säkerhet som skapas genom AI är automatiserad övervakning. AI-styrd övervakning har använts på många områden: på allmän plats, i upprätthållandet av lag och ordning i form av prediktivt polisarbete och i hemmet via produkter som Amazons Ring. Även om övervakningskameror har funnits och dominerat offentliga och halvoffentliga platser i tiotals år hävdar ACLU att automatiseringen innebär en stor kvalitativ förändring i hur övervakning går till. Man vad är det som är så annorlunda?

</styled-text>

<styled-text>

”Föreställ dig en övervakningskamera i en typisk mataffär på 1980-talet. Kameran var stor och dyr och ansluten via en kabel genom väggen till en videospelare inne på kontoret. Utvecklingen i kameratekniken har gått långt under de följande decennierna, både vad gäller upplösning, digitalisering, lagring och trådlös överföring, och kamerorna har blivit billigare och långt vanligare.

“Men trots alla dessa förbättringar har de sociala implikationerna med att bli filmad inte förändrats: när vi går in en affär förväntar vi oss vanligtvis att vi inte kommer att påverkas av kameror. Vi förväntar oss att våra rörelser kommer att spelas in och vi kanske känner oss medvetna om oss själva om vi ser en kamera, särskilt om vi gör något som kan påkalla uppmärksamhet. Förutsatt att inget dramatiskt inträffar förstår vi i allmänhet att det inte är särskilt sannolikt att de filmer som vi är med i kommer att granskas.”

 -The Dawn of Robot Surveillance, ACLU

</styled-text>

<text-box>

Konstant övervakning ger en **“sordinerad effekt”**. Vetskapen om att våra handlingar är konstant övervakade begränsar vår reella frihet att handla i världen. Föreställ dig att du varje gång du lämnar hemmet har två poliser i hälarna. De gör aldrig någonting, de bara följer efter dig, tio meter bakom. Visst skulle du känna dig obekväm och få svårt att genomföra dina dagliga sysslor? På samma sätt står säkerheten ibland i konflikt med den personliga friheten och integriteten.

</text-box>

<styled-text>

Det är dessutom en obesvarad empirisk fråga i hur stor utsträckning AI-övervakning egentligen bidrar till säkerheten. Som exemplet med den sordinerande effekten visar kan förekomsten av AI-övervakning i sig själv leda till en känsla av osäkerhet. Dessutom kan den bidra direkt till faktisk osäkerhet och orsaka skada. AI-drivet polisarbete kan till exempel leda till direkt fysisk skada på grund av dess prediktiva karaktär och dess verkställighetsmetoder. Och när det med allestädes närvarande automatisk övervakning går att övervaka och logga minsta lilla överträdelse riskerar vi att göra konsekvenserna av polisarbetet mer skadliga än det ursprungliga brottet.

Med olika nivåer av polisnärvaro, olika verkställighetsmetoder och olika grader av övervakning i olika delar av samhället – oftast på en etniskt betingad skala – blir det tydligt att AI-övervakning skapar olika typer av säkerhet (och osäkerhet) för olika grupper. Återigen flätas värdet säkerhet ihop med andra etiska värden såsom rättvisa och icke-diskriminering.

#### 4) En säker och hälsosam miljö: AI och klimatförändringar
Med säkerhet menas också rätten till en säker och hälsosam miljö. Idag är den här rättigheten hotad av klimatförändringar. Effekterna av klimatförändringar är redan synliga – stormar, torka, bränder och översvämningar har blivit allt vanligare och alltmer förödande. De globala ekosystemen förändras. De påverkar alla den miljö som vår existens är så beroende av. Rapporten om klimatförändringar (2018) uppskattade att det kommer att få katastrofala konsekvenser för världen om inte utsläppen av växthusgaser elimineras inom 30 år.

</styled-text>

<text-box icon="techIcon">

AI kan vara ett effektivt verktyg för att bekämpa klimatförändringarna. Den kan användas för att övervaka, förstå och förutse konsekvenserna av dem. Med AI kan vi accelerera utvecklingen av ekologiskt mer hållbara samhällen. Den kan användas för att utforma gröna städer och miljövänliga transportmedel, för att minska industrins effekter på miljön och tillverka utrustning som kan hjälpa oss att studera och bibehålla mångfalden i våra ekosystem.

Samtidigt finns det många potentiella problem kopplade till användningen av AI. Till exempel kan uppfinningar som ska minska utsläppen av växthusgaser i stället öka energiförbrukningen och utsläppen. Den data- och resursintensiva karaktären hos modern AI gör att tekniken själv dras med hög energiförbrukning och ett stort koldioxidavtryck. Vi måste även vara uppmärksamma på den potentiellt betydande miljöeffekten från den råmaterialutvinning som krävs för tillverkningen av denna AI-teknik.

</text-box>

<styled-text>

Sammanfattningsvis kan man säga att säkerheten har betydelse för AI-tekniken på flera olika sätt. Alla väcker frågor om balansering av normativa värden: strävan efter att göra ”AI för goda ändamål” låter förvisso lovande, men i praktiken är det ofta så att genomförandet av rättigheter och normativa värden i tekniska system står i strid med en uppsjö av motstridiga intressen och de stora orättvisor som finns i världen. När vi utvärderar säkerheten är det därför viktigt att utvärdera vilka andra rättigheter som också finns med i bilden och fråga oss: ”säkerhet för vem?”.

<br/>
<br/>


## Inkludering och könsskillnad

Inkludering innebär att alla människor, oavsett på vilket sätt de är annorlunda – det kan handla om etnicitet, kön, sexualitet, förmåga eller någon annan egenskap – har lika rätt till ett komplett deltagande i samhället.

#### Inkludering av personer med funktionsnedsättning

Enligt Världshälsoorganisationen (2018) lever mer än en miljard människor med funktionsnedsättning. Å ena sidan kan AI bidra till att personer med funktionsnedsättning marginaliseras och exkluderas ytterligare. Men å den andra så har AI-teknik en enorm potential att öka dessa människors välbefinnande. AI kan förstärka och stödja personer med funktionsnedsättning.

Det finns till exempel ett flertal verktyg för att utveckla kommunikationskapaciteten och läskunnigheten som kan hjälpa oss att förstå personer med kognitiv svikt och/eller allvarliga tal- och språksvårigheter (som demens, cerebral pares eller autism). Ett annat exempel är utvecklingen av AI-baserade tekniska hjälpmedel, som bildbeskrivningar för synskadade, taligenkänning, textning för hörselskadade, teckenspråksigenkänning och -tolkning för hörselskadade, flerspråkiga text-till-tal-alternativ som kan läsa upp text för personer med kognitiv svikt och dyslexi, vårdrobotar för äldre och ledstråk för synskadade.

<img src="./sp-too-big-rev.svg" alt="smartphone" width="200px">  </img>

#### Inkludering och könsskillnad

Många teknikforskare har uppmärksammat skillnaderna mellan könen. Dessa skillnader kan se ut på många olika sätt. Enligt [Unesco](https://en.unesco.org/EQUALS/policy-paper), ligger kvinnors digitala och algoritmiska kompetens på en lägre nivå än den för män. Kvinnor vet till lägre grad hur datorer fungerar, hur internet och sociala medier kan användas och hur information kan skyddas i digitala medier. Det här är kunskaper som krävs för många uppgifter på arbetet och i livet i övrigt, och som är viktiga för personer i alla åldrar. Unesco uppskattar att män har fyra gånger större sannolikhet än kvinnor att besitta avancerad kompetens i informations- och kommunikationsteknik (IKT), som till exempel programmeringskunskaper.

Det är också mindre sannolikt att kvinnor utvecklar avancerad teknik. Det finns undersökningar som pekar på att inte mer än sju procent av IKT-patenten i G20-länderna har tagits fram av kvinnor. En färsk enkätundersökning med studerande i 29 länder visar att en överväldigande majoritet av dem som är tidiga att använda ny teknik är män. Beräkningar som baseras på deltagandet i världens främsta maskininlärningskonferenser under 2017 visar att endast tolv procent av framstående maskininlärningsforskare är kvinnor.


</styled-text>

<text-box>

Bristen på mångfald i tekniksektorn kan få allvarliga konsekvenser allteftersom stordata och algoritmer tar större plats i vårt dagliga liv. AI används nu i allt från hälsovården till rättssystemet, och den påverkar människors levnadsbanor på många olika sätt. Då fler och fler digitala verktyg skapas av män är det många som oroas över att det digitala utrymmet får en allt ojämnare könsfördelning.

</text-box>

<styled-text>

Teknikstudier visar att tekniken ofta avspeglar dess utvecklare. Trots att de flesta kvinnor som är låginkomsttagare i utvecklingsländer arbetar inom jordbruket är det oftast män som traditionellt har använt och utvecklat jordbrukstekniken, och jordbruksrelaterade uppfinningar och verktyg har utformats specifikt för att användas av män. Det har resulterat i att många verktyg har utvecklats för att utföra mäns arbete på åkrarna, och brukar vara för tunga för kvinnor eller ha handtag som kvinnor inte kan nå. Samma sak gäller ofta även för modern smart teknik – det finns röstigenkänningssystem som inte känner igen kvinnoröster, och storleken på smarttelefoner och tangentbord lämpar sig ofta inte för kvinnor.

Inkludering handlar dock om så mycket mer än att se till att kvinnor kan delta. Det är obligatoriskt att främja kulturell, åldersbaserad och geografisk mångfald och kombinationer av dessa. När vi tänker på AI och dess påverkan på samhället finns det helt enkelt ett behov av att avsiktligen utveckla system i olika varianter och med olika användare i åtanke.

</styled-text>

<quiz id="1f9da147-cde5-530f-8d9d-575df614d165"> </quiz>
