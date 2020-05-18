
---
path: '/osa-1/1-ohjelmoinnin-aloittaminen'
title: ' What is AI Ethics?'
hidden: false
---

<text-box variant='Intro' name='Oppimistavoitteet'>

- Learn what is AI Ethics
- Understand the role of ethical guidelines in AI
- Understand how AI ethics differs from roboethics

</text-box>


## A SHOPPER´S GUIDE TO AI ETHICS

In this course, we'll take a look at the ethical issues related to contemporary AI,  open up their background  in philosophy and give them an interpretation in terms of computer science.  The goal of course is to develop your skills for ethical thinking. 

You should take this course as a shopper´s guide on the design, implementation and use of AI in ethically sustainable way.  
In this first section, we'll become familiar with the basic concepts of AI ethics by looking into its definition and some examples.

## WHAT IS AI ETHICS
What is ethics? From a philosophical point of view, ethics seeks to resolve questions like ‘what is good or bad?”, “what is right - what is wrong”, ‘what is justice, well-being or equality’ by using philosophical tools.  Ethics involves systematizing, defending, and recommending concepts of right and wrong conduct by using conceptual analysis, thought experiments, and  argumentation. (If you want to know more about philosophical reasoning, see e.g. [Crash Course Philosophy videos](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR).)

Ethics can be divided to three major sub-fields:
- Meta-ethics studies the meaning ethical concepts, the existence of ethical entities (ontology) and the possibility of ethical knowledge (epistemology).
- Normative ethics concerns the practical means of determining a moral course of action
- Applied ethics concerns what a moral agent is obligated (or permitted) to do in a specific situation or a particular domain of action.

AI Ethics is a subfield of the “applied ethics”. However, as a very young research field it is still a developing.  



## ON ETHICAL GUIDELINES

In the past years,  research institutions, companies, countries, public sector organizations and ad hoc committees - such as HLEG - have published principles and guidelines for “ethical artificial intelligence”. 

Nowadays, there are over 165 different sets of these principles.  As things stand, these principles or reports for ethical AI are instances of “non-legislative policy instruments”.  Unlike legal regulations these guidelines are not legally binding. Instead, they are - or are hoped to turn out to be -  persuasive in nature. 

Naturally, just the overall amount - over 165 sets of principles - demonstrate the strong interest to develop AI and AI-based practices in ethically sustainable way. Although the lack of legal status, still these principles seem to have practical influence on decision-making in public sector governance, in companies and many other organisations. Simultaneously,  there are reasons to be concerned about the future impact of ethics on AI development and governance.

Despite an agreement that AI should be developed and applied in  ‘ethically’ sustainable ways, depending on the source the meaning of  ‘ethical AI’ varies. Moreover, there are different views on the ethical requirements, their technical interpretation and best practices that are needed for implementing ethically acceptable AI in practice. 

According to recent meta-analyses (Jobin & al, 2019), AI ethics has seemingly converged on a set of five principles;  non-maleficence,  responsibility or accountability, transparency and explainability, justice and fairness, and privacy and security.  

```
INFOBOX: DEFINITIONS

- non-maleficence
- responsibility or accountability
- transparency and explainability
- justice and fairness
- privacy and security

tai:

1. How could we use AI for good, and not for causing  harm (the principle of non-maleficance)
2. Who should be blame when AI causes harm? (the principle of accountability)
3. Should we understand what, and why AI does whatever it does? (The principle of transparency)
4. Should AI be fair, non-discriminative and promote equality? (The principle of fairness)
5. Should AI respect, and promote human rights? (The principle of respecting basic human rights)
```

3. Examples of Ethical Principles

- HLEG: Trustworthy AI
- EU: Context and Implementation
- Rome call for ethical AI
- Microsoft

## AI Ethics vs Roboethics (was Criticism)

```
Infobox: The Traditional Fields of AI Ethics
Traditionally AI ethics has taken to mean two things; Machine Ethics and Roboethics. 
Machine ethics is, roughly, a practical research area involving the modelling and implementation of artificial moral agents. Machine ethics is designing ethics for machines, not for the human use of machines.  It is based on a presupposition that machines will make ethically relevant choices, and can be even considered possibly as ethical agents (Anderson and Anderson 2007) or ‘autonomous moral agents’ (van Wynsberghe and Robbins forthcoming). 
As practical research, machine ethics has several research goals, such as the development of ethically responsive autonomous vehicles, or of automated advisers for clinicians on medical ethics issues. Moreover, the more long-term objective of machine ethics is to design the ethical codes for perhaps even ‘genuinely’ moral autonomous agents. 
```
```
Infobox: The Traditional Fields of AI Ethics
Isaac Asimov proposed ‘three laws of robotics’ (Asimov 1942): 
1. A robot may not injure a human being or, through inaction, allow a human being to come to harm. 
2. A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.  
3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.” 
````

Machine ethics has traditionally been contrasted with “roboethics”. Roboethics studies the moral behavior of humans as they design, construct, use and treat such beings.

However, in this course we´ll adopt a broader view on the ethics of AI, and characterize it in terms of development, design and implementation of the ethically sustainable development and use of new technologies. In what follows, the ethics of Ai will be divided to three branches: 
1. Ethics for AI, which includes the machine ethics
2. Ethics in Design of AI, and 
3. Ethics for Designers of AI. 



### ------------ OLD STUFF -------------------

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Learn basics of AI Ethics
- Tutustut kurssilla käytettyyn NetBeans with TMC -ohjelmointiympäristöön.
- Opit lataamaan ja palauttamaan kurssin ohjelmointitehtäviä.

</text-box>

<quiz id="abd73a90-88d7-4832-af9e-e3282b7d22b6"></quiz>

Nykyaikainen ohjelmointi tapahtuu lähes poikkeuksetta ohjelmointiympäristössä. Ohjelmointiympäristö sisältää joukon ohjelmoijaa auttavia aputoimintoja. Se ei rakenna ohjelmaa ohjelmoijan puolesta, mutta se muunmuassa vinkkaa helpoista virheistä ohjelmakoodissa ja auttaa ohjelmoijaa hahmottamaan ohjelman rakennetta.

Käytämme tällä kurssilla [NetBeans](https://netbeans.apache.org)-nimistä ohjelmointiympäristöä sekä siihen liitettävää Test My Code -liitännäistä.

Tarvitset kurssin aloittamiseen (1) käyttäjätunnuksen kurssilla käytettyyn TMC-järjestelmään, (2) Javan (Java JDK), ja (3) NetBeans with TMC -ohjelmointiympäristön (jatkossa TMC). Näiden asentaminen onnistuu seuraavia ohjeita noudattamalla.

<only-for-course-variant variant="dl">

  Ohjeistus oleellisten työvälineiden asentamiseen sekä kurssilla tarvittavan käyttäjätunnuksen luomiseen löytyy osoitteesta [https://www.mooc.fi/fi/installation/netbeans](https://www.mooc.fi/fi/installation/netbeans). Valitse organisaatioksi "MOOC" ja kurssiksi "Ohjelmoinnin MOOC 2020, Ohjelmoinnin perusteet".

</only-for-course-variant>

<only-for-course-variant variant="nodl">

  Ohjeistus oleellisten työvälineiden asentamiseen sekä kurssilla tarvittavan käyttäjätunnuksen luomiseen löytyy osoitteesta [https://www.mooc.fi/fi/installation/netbeans](https://www.mooc.fi/fi/installation/netbeans). Valitse organisaatioksi "MOOC" ja kurssiksi "Aikatauluton Ohjelmoinnin MOOC 2020, Ohjelmoinnin perusteet".

</only-for-course-variant>

<only-for-not-logged-in>

  Kirjaudu sisään nähdäksesi, mikä organisaatio ja kurssi sinun tulee valita TMC:stä

</only-for-not-logged-in>

[Ohjeisiin!](https://www.mooc.fi/fi/installation/netbeans)

Kun olet luonut käyttäjätunnuksen ja asentanut Javan ja TMC:n, katso alla oleva video. Video näyttää mitä tapahtuu kun NetBeans with TMC -ohjelmointiympäristö käynnistetään ensimmäistä kertaa. Videolla valitaan organisaatio ja kurssi, sekä tehdään ensimmäinen ohjelmointitehtävä.

<only-for-not-logged-in>

Kirjaudu sisään nähdäksesi aloittamisesta ohjevideon.

</only-for-not-logged-in>

<only-for-course-variant variant="dl">

_Videolla kurssiksi valitaan ohjelmoinnin MOOC 2019. Muista kuitenkin valita kurssiksi ohjelmoinnin MOOC 2020!_

<youtube id="zvE8XA8D0gE"></youtube>

</only-for-course-variant>

<only-for-course-variant variant="nodl">

_Videolla kurssiksi valitaan ohjelmoinnin MOOC 2019. Muista kuitenkin valita kurssiksi Aikatauluton Ohjelmoinnin MOOC 2020!_

<youtube id="zvE8XA8D0gE"></youtube>

</only-for-course-variant>


Alla on kurssin ensimmäinen ohjelmointitehtävä. Tutustut tehtävässä käytettyyn ohjelmointiympäristöön.

<programming-exercise name='Hiekkalaatikko' tmcname='osa01-Osa01_01.Hiekkalaatikko'>

Tehtäväpohjassa on seuraavanlainen ohjelmarunko:

```java
public class Hiekkalaatikko {
    public static void main(String[] args) {
        // Kirjoita ohjelmasi tähän alle

    }
}
```

Rivi "// Kirjoita ohjelmasi tähän alle" on _kommenttirivi_, jota tietokone ei ota huomioon ohjelmaa suoritettaessa.

Palauta tehtäväpohja palvelimen tarkastettavaksi ensin ilman minkäänlaisia muutoksia. Tällä tavoin harjoittelet tehtävän palauttamista. Tehtävän palauttaminen onnistuu valitsemalla TMC:ssä valikon TMC sekä sieltä kohdan "Submit".

Kun olet saanut tehtävän palautettua, kokeile yllä olevaa videota noudattaen tulostuskomennon lisäämistä ohjelmaan ja ohjelman suorittamista (play-napin painaminen). Kun saat ohjelman tulostamaan tekstiä (teksti voi olla mitä tahansa), palauta tehtävä vielä kertaalleen palvelimelle.

Käytä tätä hiekkalaatikkotehtävää jatkossa erilaisten kokeilujen tekemiseen. Kun kohtaat materiaalissa uuden asian, kokeile sitä ensin hiekkalaatikossa, ja lähde sitten ratkaisemaan asiaan liittyviä tehtäviä.

</programming-exercise>


## Ohjelmoija kirjoittaa lähdekoodia

Ohjelmointi on ohjelmistojen suunnittelua ja toteutusta. Toteutettava toiminnallisuus määräytyy ohjelmiston tilaajien ja käyttäjien toiveiden ja vaatimusten perusteella. Ohjelmia toteutetaan (eli kirjoitetaan tai "koodataan") tyypillisesti ihmisten kirjoitettavaksi ja luettavaksi tarkoitetulla ohjelmointikielellä.

Ohjelmointikieliä on satoja ja tällä kurssilla keskitytään näistä kielistä yhteen. Kurssin kielenä on [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>), joka on yksi maailman eniten käytetyistä ohjelmointikielistä. Javaa tuntevan on myös helppo oppia uusia ohjelmointikieliä.

Ohjelmointikielet kuten Java tarjoavat suuren määrän valmiita komentoja, joita ohjelmoija käyttää ohjelmistoja luodessa. Tämä helpottaa ohjelmointia, sillä aivan kaikkea ei tarvitse toteuttaa alusta lähtien. Esimerkiksi graafisia käyttöliittymiä toteutettaessa ohjelmointikielillä on tyypillisesti valmiita toiminnallisuuksia erilaisten valikoiden ja näkymien luomiseen. Iso osa ohjelmoinnista onkin ohjelmointikielen valmiiksi tarjoamien komentojen soveltamista ongelmien ratkaisuissa -- tämä toisaalta vaatii ohjelmointirutiinia, joka kehittyy vain ohjelmoimalla.

Kirjoitettua "koodia" kutsutaan **lähdekoodiksi**. Lähdekoodi koostuu lauseista (statement) ja lausekkeista (expression), joita yleensä voidaan lukea rivi riviltä ylhäältä alaspäin ja vasemmalta oikealle. Esimerkiksi tekstin "Hei maailma" tulostuksessa käytetään Java-ohjelmointikielen valmista komentoa `System.out.println()`, jolle kerrotaan sulkujen sisälle tulostettava teksti.

```java
System.out.println("Hei maailma");
```

Yllä oleva lause on Java-ohjelmointikielen valmiiksi tarjoama komento, jota käytetään merkkijonon tulostamiseen. Komento käytännössä käskee tietokonetta tulostamaan sille sulkeiden sisällä lainausmerkeissä (joita ohjelmoijat kutsuvat usein 'hipsuiksi') annetun merkkijonon. Lauseen loppuun kirjoitetaan puolipiste `;`.

Java-ohjelmat vaativat toimiakseen ohjelmarungon, joka tulee kurssin aikana tutuksi. Vaikket ohjelmarunkoa vielä tunne, voit jo yllä kuvatun tulostuslauseen perusteella arvata seuraavan ohjelman mahdollisen toiminnan.

Alla on kurssin ensimmäinen kyselytehtävä. Kyselytehtäviin vastataan suoraan kurssimateriaalissa.

<quiz id="574acb1a-471b-5b5f-9755-cbbff7aa8b87"></quiz>
