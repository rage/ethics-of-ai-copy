---
path: '/fi/chapter-3/1-algorithms-and-accountability'
title: 'Algoritmit ja vastuullisuus'
hidden: false
---

<hero-icon heroIcon='chap3'/>


<text-box name="" icon="techIcon">

Amsterdamin kaupungin 150 000 kadunvarsipysäköintipaikassa on käytössä osittain automatisoitu pysäköinninvalvonta. Valvonta koostuu seuraavasta kolmivaiheisesta prosessista:

1) Kameroilla varustetut skannausautot ajavat kaupungin läpi ja skannaavat ja tunnistavat pysäköityjen autojen rekisterikilvet kohteentunnistusohjelmiston avulla.

2) Tunnistamisen jälkeen rekisterinumero tarkistetaan kansallisesta pysäköintirekisteristä sen selvittämiseksi, onko auton pysäköintiin lupa kyseisessä paikassa. Jos pysäköintiä ei ole maksettu, tapaus lähetetään ihmistarkastajalle jatkokäsittelyä varten.

3) Pysäköinnintarkastaja arvioi skannattujen kuvien avulla, onko kyse erityistilanteesta, kuten lastaamisesta tai purkamisesta taikka liikennevaloissa seisovista autoista. Hän voi myös käydä varmistamassa tilanteen paikan päällä. Jos maksuttomaan pysäköintiin ei ole pätevää syytä, annetaan pysäköintisakko.

<br>

<br>

<img src="am-park.svg" alt="parking" style="width: 80%">  </img>

</text-box>

<styled-text>

Pysäköinninvalvontapalvelut ovat esimerkki siitä, miten algoritmeja käytetään yhä enemmän julkisten palvelujen automatisointiin. Koska algoritmit ovat tarkkoja ja nopeita, ne lisäävät usein palvelun tehokkuutta, luotettavuutta ja johdonmukaisuutta. Paradoksisesti algoritmit voivat myös tehdä järjestelmällisiä virheitä, olla vinoutuneita ja aiheuttaa vakavia haittoja. Esimerkiksi skannausjärjestelmiin voi tulla toimintahäiriö tai ne voivat sisältää ohjelmavirheitä. Järjestelmät voivat tehdä virheitä ja ehdottaa sakkojen antamista pätemättömin perustein. Kenen pitäisi näissä tapauksissa ottaa vastuu – ja millä perusteella?

Vaikka voimme sanoa esimerkiksi ”kyllä, se oli algoritmin vika, ja algoritmi on vastuussa väärästä päätöksestä”, emme tarkoita kirjaimellisesti, että nykyiset algoritmit olisivat moraalisesti syyllisiä. Sen sijaan algoritmit ovat päätösten taustalla olevia syy-yhteyteen liittyviä tekijöitä. Pelkät syyt eroavat kuitenkin moraalisesti vastuullisista teoista.

Vaikka algoritmeja itseään ei voida pitää vastuullisina, koska ne eivät ole moraalisia tai juridisia toimijoita, algoritmeja suunnittelevia ja käyttäviä organisaatioita voidaan pitää moraalisesti vastuullisina hallintorakenteiden kautta. Näin ollen Amsterdamin kaupungin tapauksessa lopullisen päätöksen tekee ihmistarkastaja – ja hän on myös vastuussa päätöksestä. Jonain päivänä ihmistarkastajakin saatetaan kuitenkin korvata algoritmeilla. Kuka sitten ottaa vastuun?

</styled-text>

<text-box icon="techIcon" name="Automatisoitu vai autonominen päätöksenteko">

**Automaattiset järjestelmät** toimivat yleensä tarkasti määriteltyjen parametrien mukaisesti ja pystyvät suorittamaan vain hyvin rajoitettuja tehtäviä. Automaattisen järjestelmän tekemät päätökset tai toiminnot perustuvat ennalta määriteltyihin heuristiikkoihin tai sääntöihin.

**Autonominen järjestelmä** oppii ja sopeutuu dynaamisiin ympäristöihin ja kehittyy ympärillään olevan ympäristön muuttuessa. Sen oppimat ja mukauttamat tiedot voivat olla muitakin kuin järjestelmän käyttöönoton aikana huomioon otettuja tietoja.

Automaation tai autonomisaation määrä on olennaisen tärkeä, ja siksi ne ovat pikemminkin jatkumoja kuin yksinkertaisia kyllä/ei-tilanteita. Järjestelmän voidaan esimerkiksi sanoa olevan tietyssä määrin autonominen ihmisen suorittaman valvonnan osalta.

<br/>
<br/>
<br/>

<img src=../../../src/assets/levels-automatisation.svg alt="Levels of automatisation" style="width: 700px">

</text-box>
