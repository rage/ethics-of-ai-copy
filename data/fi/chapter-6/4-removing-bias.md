---
path: '/fi/chapter-6/4-removing-bias'
title: 'Vinoumien poistaminen'
hidden: false
---

<hero-icon heroIcon='chap6'/>


<styled-text>



Miten tekoälyjärjestelmistä voidaan tehdä oikeudenmukaisempia ja vähemmän vinoutuneita? Vinoumiin ei ole patenttiratkaisua. Tämä johtuu osittain siitä, että vinoumat voivat ilmetä monin eri tavoin, ja osittain siitä, että algoritmisesti oikeudenmukaiselle lopputulokselle ei ole yhtä ainoaa määritelmää. Voimme kuitenkin tarkastella joitakin edellä esitetyistä tilanteista ja tutkia tapoja, joilla oikeudenmukaisuuteen liittyviä ongelmia olisi voitu käsitellä.

Seksististä rekrytointialgoritmia koskevan esimerkin osalta voimme määrittää vinoumien lähteeksi opetusdatan tuottaneet aiemmat rekrytointikäytännöt ja olettamuksen, että aiempia rekrytointikäytäntöjä voidaan käyttää normatiivisena perustana tuleville käytännöille (eli ”meidän pitäisi palkata tämä henkilö, koska olemme palkanneet hänen kaltaisiaan ihmisiä aiemmin”). Perusongelmat liittyvät siis vääjäämättömästi yrityskulttuuriin ja vielä laajempaan teknologia-alan työkulttuuriin sekä moraalisesti arveluttavaan päättelyyn (vrt. luvussa 2 käsitelty Humen giljotiini). Nämä ongelmat edellyttävät suuria kulttuurisia muutoksia ja rakenneuudistuksia, eikä ongelmia todennäköisesti saada korjattua teknologisin ratkaisuin.

#### Luokittelun välttäminen
Tietoaineistoista voitaisiin kuitenkin yrittää pelastaa se, mikä on pelastettavissa, ja kokeilla, voitaisiinko sen sisältämiä vinoumia vähentää edes jonkin verran. Yksi yleinen tekninen keino korjata tietoaineistoa on luokittelun välttäminen eli suojattujen eksplisiittisten muuttujien poistaminen datasta. Tämä tarkoittaa sukupuolen tai etnisyyden kaltaisten tietojen ja niitä kuvaavien korvaavien muuttujien poistamista datasta. Tässä yhteydessä korvaavia muuttujia ovat ominaisuudet, jotka korreloivat suojattujen piirteiden kanssa voimakkaasti. Esimerkiksi jos aiemmin mainitun rekrytointialgoritmin tapauksessa henkilön ansioluettelo sisältää viittauksia äitiyslomaan tai naisten korkeakouluun, algoritmi voisi yhä tehdä sukupuolittuneita ennusteita, vaikka eksplisiittinen sukupuolimuuttuja jätettäisiin pois.

Edellä kuvatulla tavalla voidaan mahdollisesti vähentää järjestelmän vinoumia jonkin verran, mutta se, onko menetelmä tehokas eri skenaarioissa, on tarkistettava testaamalla ja auditoimalla. Corbett-Davies ja Goel (2018) ovat osoittaneet, että luokituksen välttäminen voi olla jopa haitallista oikeudenmukaisuuden kannalta tietyissä tilanteissa, joissa ominaisuuksilla on erilainen ennustusvoima yhteiskunnan eri ryhmissä. Esimerkki tästä ovat sydänkohtauksen oireet. Tutkimusten mukaan sydänkohtaukset vaikuttavat naispotilailla hyvin erilaisilta kuin miespotilailla. Oireet, joita useimmat ihmiset osaavat etsiä, esimerkiksi oikeanpuoleinen rintakipu, ovat paljon yleisempiä miespotilailla kuin naispotilailla. Näin ollen sovellus, jolla voi tarkistaa, onko kyse sydänkohtauksesta, antaisi todennäköisesti usein vääriä tuloksia, jos sovellus ei ottaisi huomioon potilaan sukupuolta.

#### Uudelleenotanta
Buolamwinin ja Gebrun tutkiman kasvojentunnistusalgoritmin kaltaisissa tapauksissa, joissa vinouma johtuu otoskokoerosta, uudelleenotanta on yksi mahdollinen tapa lähestyä ongelmaa. Tällöin voitaisiin esimerkiksi käyttää tietoaineistosta vain pienempää osaa, jossa kuvat jakautuisivat tasaisemmin kaikkien asiaankuuluvien sosiaalisten ryhmittymien kesken. Toinen tapa tehdä uudelleenotanta on tuottaa synteettisiä esimerkkejä aliedustetuista ryhmistä (Chawla ym. 2002). Tässäkin tapauksessa ratkaisun toimivuus on tarkistettava tapauskohtaisesti. Saattaa olla, että tietoaineisto on niin epäsuhtainen, ettei sitä voida korjata, vaan on luotava kokonaan uusi tietoaineisto. Kasvojen tunnistuksen kaltaisessa erittäin riskialttiissa ja arkaluonteisessa tapauksessa ei myöskään ole varmaa, että järjestelmä olisi eettinen, oikeudenmukainen ja syrjimätön, vaikka luokitus ei olisikaan vinoutunut ja tietoaineisto olisi yhtä edustava kaikkien ryhmittymien osalta. Tähän perehdymme seuraavassa osassa. Toisinaan ainoa tapa tehdä tekoälystä oikeudenmukaista on kuitenkin olla kehittämättä tekoälyä alun alkaenkaan.



#### Muusta kuin vinoumista johtuva syrjintä

On tärkeää muistaa, että syrjintä ei ole sama asia kuin järjestelmien vinoumat. Tekoälyjärjestelmien vinoumat ovat hyvin selkeä syy syrjiviin käytäntöihin. Koska vinoumat ovat määrällisesti ilmaistavissa, ne on helppo sovittaa teknisen tekoälytutkimuksen käsitteelliseen maailmaan. Tämän vuoksi käsitteellinen harppaus syrjinnästä vinoumiin on niin yleinen.

Tekoälyjärjestelmät voivat kuitenkin osallistua syrjiviin käytäntöihin, jotka eivät johdu tekoälyjärjestelmän vinoumista. Meidän on siis laajennettava tutkinnan kohdettamme tekoälymallin pienistä yksityiskohdista koko instituutioiden järjestelmään, johon se osallistuu.

</styled-text>

<text-box name="" icon="chap6">

Alkuvuodesta 2018 Stanford Graduate School of Businessin tutkijat julkaisivat asiakirjan, jossa kerrottiin syväoppimisjärjestelmästä, joka voisi erottaa homo- ja heteroseksuaaliset miehet toisistaan 81 prosentin tarkkuudella yhden ainoan kasvoja kuvaavan valokuvan perusteella. Tutkimuksen tulokset ovat olleet vähintäänkin kiistanalaisia monista eri syistä. Arvostelijat ovat ilmaisseet huolensa siitä, että henkiin on herännyt fysiognomian näennäistiede, jossa on syvään juurtunut yhteys menneiden aikojen rasistisiin vääryyksiin. Sen sijaan, että järjestelmä tunnistaisi joitakin hienovaraisia geneettisiä merkkejä, kuten tutkijat väittivät, sen epäillään itse asiassa seuraavan, kuinka huoliteltuja ihmiset yleensä ovat ja miten he ottavat valokuvia itsestään.

Lisäksi tämä tekoälyjärjestelmä toimii hyvin selvästi eettisesti epämääräisellä alueella yksityisyyden, itsemääräämisoikeuden ja tietenkin syrjinnän näkökulmasta. Jos muut huolenaiheet jätetään tällä hetkellä huomiotta, mikä tekee tästä syrjivää? Luokitteluun liittyvä vinouma ei ole tässä asiassa selvästikään syrjivä tekijä. Emme ole eettisesti huolissamme siitä, ennustaako estimaattori homoseksuaalisuutta joissakin ryhmissä tarkemmin kuin toisissa. Sen sijaan järjestelmän eettisesti merkityksellinen piirre on se, että tarkkuudestaan riippumatta järjestelmä mahdollistaa suoraan erilaisen kohtelun, joka perustuu havaittuun sosiaaliseen ryhmittymään.

</text-box>

<styled-text>

Ei ole tarpeen esittää esimerkkejä edellä kuvattujen kaltaisten järjestelmien vahingollisesta käytöstä, vaan sen mahdollisuuden pitäisi olla kaikille ilmeinen. Suoraan vahingollisen käytön lisäksi voidaan kuvitella, että tällainen teknologia integroitaisiin esimerkiksi verkossa tapahtuvan personoidun mainonnan järjestelmään, joka koostuisi sosiaalisesta mediasta, tietojen käsittelijöistä, trendivaikuttajista ja globaaleista jälleenmyyjistä. Vaikka luokitteleva tekoäly olisi kaikkien teknisten standardien mukaan oikeudenmukainen eikä olisi vinoutunut, se ohjaisi tavaroiden verkkomainontaa syrjivällä periaatteella, jonka mukaan oletettu seksuaalinen suuntautuminen olisi pätevä syy kohdella ihmisiä eri tavalla.

Edellä esitetty tuo esiin seikan, joka on tärkeä kaikille tekoälyjärjestelmien etiikkaa pohtiville: varokaa reduktionismin ansaa! Toisin sanoen olisi vältettävä etiikan käsitteen pelkistämistä yksinkertaistetuiksi, mutkia oikoviksi ja määrällisiksi arvoiksi, kuten vinoutumattomuudeksi. Koska tekoälyjärjestelmät osallistuvat prosesseihin, jotka ovat paljon monimutkaisempia kuin järjestelmän oma toiminta, etiikkaa ei voida mitata vain tarkastelemalla algoritmin syöte- ja tulostearvoja.

Lyhyesti sanottuna oikeudenmukaisuus ei tarkoita eettistä.

</styled-text>

<quiz id="dc27bad6-159f-5866-bb9c-a6c217479949"> </quiz>

<quiz id="8419051e-be51-5e24-989a-593008fe2ae3"> </quiz>
