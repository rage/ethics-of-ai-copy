---
path: '/chapter-6/3-bias-and-discrimination'
title: 'Bias and discrimiantion'
hidden: false
---

<text-box variant='Intro' name='Learning objectives'>

* Approach the difference between moralistic and non-moralistic discrimination.
* Introduce allocative and representational harms.
* Learn how bias propagates in AI systems
* The concept of sociotechnical ensembles
* The Reductionism Trap

</text-box>

## Intro:

In this section we will study discrimination and how discriminatory practices can manifest through artificial intelligence. Bias has recently become the prototypical issue for AI ethics, since the technopositivist hope that the exact formality of algorithms makes them immune to human partiality has turned out to be sorely false. First, we will have to answer the question, when is discrimination an issue of ethical import?

<text-box variant='hint' name='Terminology disclaimer'>

Three different meanings of “bias”:
In statistics: discrepancy of a sample statistic vs the true statistic of the population.

In cognitive science: (Tversky, Kahneman) A mode of reasoning which is likely to produce an incorrect or skewed result.

In social justice: a morally suspect discrepancy in the treatment of people.

</text-box>

## Example 1: Word embeddings: Bolukbasi et al.

Word embeddings are a form of data structure used in natural language processing applications; That is: AI that can understand English. They are produced by trawling through texts, and noting which words often occur together. The produced associations work as a kind of dictionary for AI systems, capturing semantic relationships like “man” is to “king” as “woman” is to “queen”. Bolukbasi et al. found that, rather unsurprisingly, these kind of word associations have a tendency to encode conceptual relationships which are culturally pervasive, but considered discriminatory. For example, “mother” is to “nurse” as “father” is to “doctor”.

## Example 2: Amazon recruitment algorithm (Dastin n.d.)

In 2014, Amazon started developing an internal AI system to streamline their recruitment process. Using the CV:s of past applicants as teching data, the system would analyze incoming CV:s and rate the candidates for further evaluation. Very quickly though, the system was found to rate candidates for technical jobs in a gender biased way.
The system was found to penalize any CV’s which indicated the applicant to be female. This included mentions of attending things like a Womens chess club, or an all-female college.
Amazon reportedly attempted to debias the system but ended up scrapping the whole project instead. The system was never used in actual recruiting processes.

## When is discrimination moralistic discrimination

First, it is important to note that the word discrimination can be used in a  morally agnostic sense (“Can you discriminate between these two colours?”). Throughout this section, we mean the morally loaded sense of the word. But when is discrimination morally suspect? It may seem a silly question to ask. After all, most people would agree that we have a rather clear intuitive sense of what discrimination is. Hearing the Bolukbasi example above, we have no difficulty in pointing to the offending word association and declaring “This is discriminatory!”.
But putting it into words, what it is which makes it discriminatory, turns out to be a slippery task. But let’s start with writing out our intuitions, and see where we go from there:

**Definition 1**: Discrimination is a difference of treatment of individuals based on their membership in a group.

So how does this definition fare in capturing our sense of discrimination? The words doing the work here are “difference” and “group”. That is, discrimination is something which is comparative, and the units of comparison are different groups (or, rather, groupings), or individuals belonging to them. This is a good start, but let’s analyze where this definition draws the line. What is included, and what is left out?

Consider, for example, driver’s licenses. In Finland, driver’s licenses are issued by the police, upon completion of certain amount of practical and theoretical training, as well as an exam. Thus, driver’s licenses are issued based on individual merit. Nonetheless, we generally find it sensible that people with severely impaired vision are precluded from the process altogether, and we do not consider this discriminatory in the moral sense. After all, driving would be practically impossible either way.  Thus we need to include some sense of the harmfulness of discrimination in our definition.

Consider, then, a café which only serves people wearing green shirts. This is most definitely differential treatment based on group membership, and conducive of a kind of harm, but we would not consider this discrimination in the moralistic sense either. We might find it a strange policy, but not a morally problematic one.  Thus, it is not just group membership we are interested in, but /which/ groups

**Definition 2**: differential treatment based on perceived membership in a socially salient group, which causes social harm. (Lippert-Rasmussen 2014)

"Socially saliency" is what identifies which features are moralistically relevant in cases of discrimination. But what does it mean? According to Lippert-Rasmussen, a feature is socially salient if it is important to the structure of social interactions across multiple contexts. That is, what are considered socially salient classifications is a historically contingent matter: in an alternate timeline, where wearing a green shirt was invariably a matter of social importance, factoring into the kind of dignity, opportunities or status afforded to a person (if it was religious attire, for example), the café example above might well count as a case of discrimination.

Recognizing moralistic discrimination then is not simply a matter of recognizing discrepancies of treatment across arbitrary groupings. Rather, it requires the contextualization of the disparate treatment in the history of oppressive or valuative practices in society, and the groupings made salient thus. For example, the EU charter of fundamental rights lists the following as features, which are morally pertinent in cases of discrimination:
“sex, race, colour, ethnic or social origin, genetic features, language, religion or belief, political or any other opinion, membership of a national minority, property, birth, disability, age and sexual orientation.”

## Harms – what are they?

Reflecting on the two examples above, the condition of social saliency is clearly fulfilled in both. Gender is category which has structured social interaction since before the ancient Athenian historian Thucidydes wrote: “/The greatest glory [for women] is to be least talked about among men, whether in praise or blame./” (Scott, Michael.  [The Rise of Women in Ancient Greece](http://www.historytoday.com/michael-scott/rise-women-ancient-greece) , /History Today/, Volume: 59 Issue: 11 2009)
What about harm? One case is clearer than the other: losing out on a job opportunity due to reasons unrelated to one’s suitability for the job is clearly a harm. In the case of the word embeddings, any harm which may incur is more difficult to pinpoint. At least, we cannot directly point out an opportunity lost, a service refused or a good denied. Barocas et al. argue, that in cases like this, a harm is nonetheless instigated. To capture this, we need to understand the difference between allocative and representational harms.

(This following section is based on Barocas et al., “The Problem with Bias.”)

## Allocative harms

Allocative harms are situations where an individual is made worse off in terms of the resources available to them. Here resources should be understood broadly not only as food, cars, cell phones and other material goods, but also the services and opportunities provided.
A lower salary for the same work is most definitely an allocative harm. But so is denying the opportunity for a job interview on the basis of one’s gender.

Even such abstractions such as risk may be the objects of allocative harms. Wilson, Hoffman, and Morgenstern (2019) found that object detection algorithms are worse at recognizing dark toned figures than light toned ones. The researchers Joy Buolamwini and Timnit Gebru have also shown that facial recognition algorithms are noticeably worse at recognising faces of people of colour (Buolamwini and Gebru 2018). This means that driverless cars may be more likely to hit a black person than a white one. Now granted that causing bodily damage is clearly a harm, one can argue that a harm has been incurred even before such accidents take place. Namely, the disparate distribution of risk is itself an allocative harm to the worse off party.

## Representational harms

Representational harms are ones which do not concern the distribution of goods. Rather, they concern the representation of groups and individuals. This class includes harms such as denigration, stereotyping, misrecognition, and ex-nomination.

<text-box variant='hint' name='Terminology: Exonomination'>
Exnomination: A term originating from media studies, meaning a practice where a certain category or way of being is framed as the norm, by not giving it a name, or not specifying it as a category in itself (eg. athlete vs female athlete).
</text-box>

Representational harms affect the narratives we construct of the relevant social groups. By amplifying stereotypical views, degrading the social status of individuals and framing certain ways of being the status quo, representational harms manufacture the unwarranted justifications for oppressive practices.

With the concept of representational harms, we are able to identify the gender-skewed word associations as discriminatory, even though the word associations themselves are not an example of resource distribution in the sense of allocative harms.

## How does bias propagate?

<text-box variant='hint' name='Three different meanings of “bias”'>

In **statistics**: discrepancy of a sample statistic vs the true statistic of the population.

In **cognitive science**: A mode of reasoning which is likely to produce an incorrect or skewed result.

In **social justice**: a morally suspect discrepancy in the treatment of people.


</text-box>

So far, we have managed to find a reasonable definition of discrimination, and have at least two anecdotal examples of AI systems taking part in it. In both cases, the discriminatory practice arises from biases in the AI system itself. So if we want to get a handle on this issue, we have some questions to answer. How do AI systems become biased? How can we measure if a system is biased? How can we fix it?

In this section we will look at the way that discriminatory practices feed into each other. That is, biased AI is not only a technical issue, but a result of a history of social practices. Can we detect when our systems amplify these discriminatory tendencies, and better yet, how can we stop the cycle?

“All data is historical data: the product of a time, place, political, economic, technical, & social climate. If you are not considering why your data exists, and other data sets don’t, you are doing data science wrong”. - Melissa Terras

**Non-representative sample**

The most clear-cut way bias enters into a system is through a non-representative data set. That is, the data we feed into the learning system is not a faithful picture of the world at large. It is not surprising that by manipulating the way the learner sees the world, by amplifying some instances of phenomena and suppressing others, the system learns a skewed model.
For example, the ability to recognise people is disparately distributed across ethnic groups in many facial recognition systems. The result being, that Google’s picture classification system, for example, has labelled black people as gorillas (https://www.theguardian.com/technology/2015/jul/01/google-sorry-racist-auto-tag-photo-app).
One reason for this is, according to Buolamwini and Gebru (Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classiﬁcation), that many popular face datasets have a very poor distribution of examples across different genders and ethnicities. That is, the view of the faces of the world fed into the learning systems is undeniably white and male.

**Label bias**

Let the data speak for itself, as the saying goes. It’s a nice thought, but the unfortunate truth is that data does not have a voice of its own. Data only speaks through our interpretations of it, and often, these interpretations are difficult to make. This is especially true in situations where there is a discrepancy between what is being measured and what is being investigated.

For example, predicting crime is a task which, if done well, would interests courts, police departments and citizens alike. Unfortunately, crime is a difficult thing to measure, and thus, good data sets are difficult to manufacture.
“Now hold on!” you might say. The department of statistics produces graphs of crime rates every year! While this is true, what is being measured is not crime itself, but rather arrests, convictions or other proxies. The hope is that these proxies correlate well with the amount of crime in a population. Furthermore, we should wish that the proxies correlate similarly well across socially salient groups /within/ the population.
The unfortunate truth is that arrests are hardly a neutral proxy for crime. It may give a good sense of overall crime in a population, but it does not generalise well across groupings. In the united states, black people may be much more likely to be arrested on drug charges than white people (Ferrer & Connolly), for example. This doesn’t mean that black people are more likely to commit drug crime, only that black people are more likely to be caught, arrested and logged doing it. Thus, any inferences about crime from such data will necessarily repeat and reinforce injustices which brought about the data itself.

**Exercise**:
We can also construe both the word association and recruitment examples above as cases of label bias. Re-read the examples given at the beginning of this section, and analyze what the input data is measuring, and what it is assumed to be a proxy of.


### Discrimination beyond Bias


The important thing to remember here, is that discrimination is not the same as systematic bias. Bias in AI systems is a very clear cut cause for discriminatory practices, and because of it’s quantifiable nature, it’s easy to fit into the conceptual world of technical AI research. This may be why the conceptual leap from discrimination to bias is so often made.

Nonetheless, AI systems can partake in discriminatory practices which do not stem from bias in the AI system. Rather, we have to expand our object of investigation from the minutiae of the AI model, to the larger socio-technical ensemble it forms.

<text-box variant='hint' name='Terminology: Socio-technical'>

Socio-technical ensemble denotes the network of hardware, software, social practices, institutions and individuals which in co-operation act or produce behaviour which cannot be reduced to simply the individual components themselves.

</text-box>

In early 2018, researchers from Stanford Graduate School of Business published a white-paper detailing a deep learning system which could distinguish between gay and heterosexual men with an accuracy of 81% based on a single photo of their face. The findings have been controversial, to say the least, and on many different criteria. Critics have raised worries about the resurrection of the pseudoscience of physiognomy, which has a deep rooted connection to historical racist injustices. There has also been suspicions that the system, rather than picking up on some subtle genetic signifiers as was claimed, is actually tracking how people tend to groom and take photos of themselves.

Furthermore, this AI system very clearly works in an ethically nebulous area in terms of privacy, self-determination, and, of course, discrimination. Tabling the other concerns for this chapter, how does discrimination function here? Clearly classification bias is not the discriminatory element here: we are not ethically concerned with whether the estimator is more accurate in predicting homosexuality in some groups than others. Instead, the ethically relevant feature of the system is that, regardless of its accuracy, it /directly enables/ differential treatment based on perceived social grouping.

It’s not necessary to draw out examples of malicious uses of such systems, as their possibility should be obvious to all. Directly malicious uses aside, we can imagine integrating such a technology into, say, the online personalized advertising machinery composed of social media, data processors, trend influencers and global merchandisers. Even if the classifying AI is by all technical standards fair and unbiased, it predicates the online advertising of goods on the discriminatory principle, that perceived sexual orientation is a valid reason to treat people differently.

This leads us to an important point for anyone considering the ethics of AI systems: beware the reductionism trap! That is, we should avoid reducing the concept of ethics to simplified, corner-cutting, quantified values, like fairness or unbiasedness. Because AI systems take part in processes which are much more complex than what the system itself does, ethics cannot be measured by just looking at the input and the output values of the algorithm. Succinctly put:

Fair does not mean ethical
