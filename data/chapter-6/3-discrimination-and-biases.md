---
path: '/chapter-6/3-discrimination-and-biases'
title: 'Discrimination and biases'
hidden: false
---

<hero-icon heroIcon='chap6'/>

<styled-text>

In this section we will study discrimination and how discriminatory practices can manifest through artificial intelligence. Bias has recently become the prototypical issue for AI ethics, since the hope that the exact formality of algorithms makes them immune to partiality has turned out to be sorely false. First, we will look at two examples of algorithmic systems, which will help us analyze discrimination and bias in AI.

#### Example 1: Word embeddings: Bolukbasi et al.

Word embeddings are a form of data structure used in natural language processing applications (AI that can understand a language, like English). They are produced by trawling through texts and noting which words often occur together. The produced associations work as a kind of dictionary for AI systems, capturing semantic relationships like “man” is to “king” as “woman” is to “queen”. Bolukbasi et al. found that, rather unsurprisingly, these kinds of word associations have a tendency to encode conceptual relationships which are culturally pervasive but considered discriminatory. For example, “mother” is to “nurse” as “father” is to “doctor”.

#### Example 2: Amazon recruitment algorithm (Dastin n.d.)

In 2014, Amazon started developing an internal AI system to streamline their recruitment process. Using the CVs of past applicants as training data, the system would analyze incoming CVs and rate the candidates for further evaluation. Very quickly though, the system was found to rate candidates for technical jobs in a gender-biased way.

The system was found to penalize any CVs which indicated the applicant to be female. This included mentions of attending things like a women’s chess club, or an all-female college.  Amazon reportedly attempted to debias the system but ended up scrapping the whole project instead. The system was never used in actual recruiting processes.


#### What is discrimination?

First, it is important to note that the word discrimination can be used in a  morally agnostic sense (“can you discriminate between these two colors?”). Throughout this section, we mean the morally loaded sense of the word. But when is discrimination morally suspect? It may seem a silly question to ask. After all, most people would agree that we have a rather clear intuitive sense of what discrimination is. Hearing the word embedding example above, we have no difficulty in pointing to the offending word association and declaring “This is discriminatory!” Putting into words what it is which makes it discriminatory though, turns out to be a slippery task. But let’s start with writing out our intuitions, and see where we go from there:

</styled-text>

<text-box icon="chap6" name="Definition 1: Discrimination">

Discrimination is a difference of treatment of individuals based on their membership in a group.

</text-box>

<styled-text>

So how does this definition fare in capturing our sense of discrimination? The words doing the work here are “difference” and “group”. That is, discrimination is something which is comparative, and the units of comparison are different groups (or, rather, groupings), or individuals belonging to them. This is a good start, but let’s analyze where this definition draws the line. What is included, and what is left out?

Consider, for example, driver’s licenses. In Finland, driver’s licenses are issued by the police, upon completion of certain amount of practical and theoretical training, as well as an exam. Thus, driver’s licenses are issued based on individual merit. Nonetheless, we generally find it sensible that people with severely impaired vision are precluded from the process altogether, and we do not consider this discriminatory in the moral sense. After all, driving would be practically impossible either way.  Thus we need to include some sense of the harmfulness of discrimination in our definition.

Consider, then, a café which only serves people wearing green shirts. This is most definitely differential treatment based on group membership, and conducive of a kind of harm, but we would not consider this discrimination in the moralistic sense either. We might find it a strange policy, but not a morally problematic one.  Thus, it is not just group membership we are interested in, but which groups.

</styled-text>

<text-box name="Definition 2: Discrimination" icon="chap6">

Discrimination is differential treatment based on perceived membership in a socially salient group, which causes social harm. (Lippert-Rasmussen 2014)

</text-box>

<styled-text>

“Socially saliency” is what identifies which features are moralistically relevant in cases of discrimination. But what does it mean? According to Lippert-Rasmussen, a feature is socially salient if it is important to the structure of social interactions across multiple contexts. That is, what are considered socially salient classifications is a historically contingent matter: in an alternate timeline, where wearing a green shirt was invariably a matter of social importance that factored into the kind of dignity, opportunities or status afforded to a person (if it was religious attire, for example), the café example above might well count as a case of discrimination.

Recognizing moralistic discrimination then is not simply a matter of recognizing discrepancies of treatment across arbitrary groupings. Rather, it requires the contextualization of the disparate treatment in the history of oppressive or valuative practices in society, and the groupings made salient thus. For example, the EU charter of fundamental rights lists the following as features, which are morally pertinent in cases of discrimination:  “sex, race, color, ethnic or social origin, genetic features, language, religion or belief, political or any other opinion, membership of a national minority, property, birth, disability, age and sexual orientation.”


### Harms – what are they?

Reflecting on the two examples above, the condition of social saliency is clearly fulfilled in both. Gender is a category which has historically always structured social interaction. What about harm? One case is clearer than the other: losing out on a job opportunity due to reasons unrelated to one’s suitability for the job is clearly a harm. In the case of the word embeddings, any harm which may incur is more difficult to pinpoint. At least, we cannot directly point out an opportunity lost, a service refused or a good denied. In cases like this, a harm is nonetheless instigated. To capture this, we need to understand the difference between allocative and representational harms, as they are presented in Buolamwini and Gebru (n.d.).


#### Allocative harms

Allocative harms are situations where an individual is made worse off in terms of the resources available to them. Here resources should be understood broadly not only as food, cars, cell phones and other material goods, but also the services and opportunities provided. A lower salary for the same work is most definitely an allocative harm. But so is denying the opportunity for a job interview on the basis of one’s gender.

Even such abstractions such as risk may be the objects of allocative harms. Wilson, Hoffman, and Morgenstern (2019) found that object detection algorithms are worse at recognizing dark toned figures than light toned ones. The researchers Joy Buolamwini and Timnit Gebru have also shown that facial recognition algorithms are noticeably worse at recognising faces of people of color (Buolamwini and Gebru 2018). This means that driverless cars may be more likely to hit a black person than a white one. Now granted that causing bodily damage is clearly a harm, one can argue that a harm has been incurred even before such accidents take place. Namely, the disparate distribution of risk is itself an allocative harm to the worse off party.

#### Representational harms

Representational harms are ones which do not concern the distribution of goods. Rather, they concern the representation of groups and individuals. This class includes harms such as denigration, stereotyping, misrecognition, and exnomination. Exnomination is a term originating from media studies and means a practice where a certain category or way of being is framed as the norm by not giving it a name, or not specifying it as a category in itself (for example, “athlete” vs “female athlete”).

Representational harms affect the narratives we construct of the relevant social groups. By amplifying stereotypical views, degrading the social status of individuals and framing certain ways of being the status quo, representational harms manufacture the unwarranted justifications for oppressive practices.

With the concept of representational harms, we are able to identify the gender-skewed word associations as discriminatory, even though the word associations themselves are not an example of resource distribution in the sense of allocative harms.


### How does bias come about?

 *“All data is historical data: the product of a time, place, political, economic, technical, and social climate. If you are not considering why your data exists, and other data sets don’t, you are doing data science wrong”.*

-Melissa Terras

</styled-text>

<text-box name='Three different meanings of “bias”' icon="chap6">

In **statistics**: discrepancy of a sample statistic vs the true statistic of the population.

In **cognitive science**: A mode of reasoning which is likely to produce an incorrect or skewed result.

In **social justice**: a morally suspect discrepancy in the treatment of people.


</text-box>

<styled-text>

So far, we have managed to find a reasonable definition of discrimination, and have at least two anecdotal examples of AI systems taking part in it. In both cases, the discriminatory practice arises from biases in the AI system itself. So if we want to get a handle on this issue, we have some questions to answer. How do AI systems become biased? How can we measure if a system is biased? How can we fix it?

In this section we will look at the way that discriminatory practices feed into each other. That is, biased AI is not only a technical issue, but a result of a history of social practices. Can we detect when our systems amplify these discriminatory tendencies, and better yet, how can we stop the cycle? We will look at three ways bias enters into a system:

#### 1) Non-representative sample

The most clear-cut way bias enters into a system is through a non-representative data set. That is, the data we feed into the learning system is not a faithful picture of the world at large. It is not surprising that by manipulating the way the learner sees the world, by amplifying some instances of phenomena and suppressing others, the system learns a skewed model.

For example, the ability to recognize people is disparately distributed across ethnic groups in many facial recognition systems. The result being, that Google’s picture classification system, for example, has labelled black people as gorillas (Kasperkevic 2015).

One reason for this is, according to Buolamwini and Gebru (2018) , that many popular face datasets have a very poor distribution of examples across different genders and ethnicities. That is, the view of the faces of the world fed into the learning systems is undeniably white and male, and very non-representative of the true distribution of faces in the world. Sometimes this is technically referred to as sample size disparity, and it leads to biased systems, because the learning algorithm disregards poorly represented subpopulations to achieve higher predictivity on the majority of the dataset.

#### 1) Label bias

Let the data speak for itself, as the saying goes. It’s a nice thought, but the unfortunate truth is that data does not have a voice of its own. Data only speaks through our interpretations of it – and often these interpretations are difficult to make. This is especially true in situations where there is a discrepancy between what is being measured and what is being investigated.

For example, predicting crime is a task which, if done well, would interest courts, police departments and citizens alike. Unfortunately, crime is a difficult thing to measure, and thus, good data sets are difficult to manufacture. What we can measure is things we have informational access to, like arrests and convictions. The hope is that these proxies correlate well with the amount of crime in a population. Furthermore, we should wish that the proxies correlate similarly well across socially salient groups within the population.

The unfortunate truth is that arrests are hardly a neutral proxy for crime. It may give a good sense of overall crime in a population, but it does not generalize well across groupings. In the united states, black people may be much more likely to be arrested on drug charges than white people (Ferrer & Connolly), for example. This doesn’t mean that black people are more likely to commit drug crime, only that black people are more likely to be caught, arrested and logged doing it. Thus, any inferences about crime from such data will necessarily repeat and reinforce injustices which brought about the data itself.


#### 3) Cultural unawareness

While “AI” and “machine learning” both portray an image of machinic autonomy, in reality large amounts of work  – human work, that is – go into making AI systems real. Thus the behavior of AI systems cannot be seen by only looking at the algorithm and the data going into it. Choices are made in the deployment, interpretation, design and maintenance work involved in AI, and sometimes these choices can create biases in the system.

One of the clearest examples of this is in the ways data is made “clean”, involving decisions about what is real signal as opposed to bothersome noise. This is a task that is sometimes seen as janitorial work, and thus not a part of the core business of AI and it happens unnoticed in many stages of the process. For example, when collecting data in webforms, it is called input sanitization.

</styled-text>

<text-box name="">

A good example of this is when collecting names. To prevent false data from entering the system, certain constraints are made as to how names are supposed to look. For example, sometimes it is assumed that names consist of given names and a surname. Sometimes it is assumed that names only contain letters from A to Z. Sometimes it is assumed that names always have more than two letters.

These might be reasonable assumptions in the limited cultural context of the designers and programmers, but in reality names are extremely diverse. No universal form for names can really be given, and if one wants to be truly inclusive, all name fields in webforms should be arbitrary length text boxes that allow any kinds of characters. Without diverse cultural understanding, the system can be unintentionally designed to leave out large groups of people who do not abide by dominant cultural standards.

</text-box>

<styled-text>

Bias can thus enter into a system in many different ways, and the above are just a few examples of the mechanisms at play. The important point here is that when analysing AI systems for unfairness, it’s not enough to just look at the algorithms. Rather, unfairness can arise because of historical, cultural, design, data management or deployment reasons, and thus the whole process of AI development must be under scrutiny.

</styled-text>
