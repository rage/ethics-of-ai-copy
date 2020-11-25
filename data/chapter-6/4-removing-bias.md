---
path: '/chapter-6/4-removing-bias'
topic-title: 'What is fairness'
title: 'Removing bias'
hidden: false
---

<hero-icon heroIcon='chap6'/>


<styled-text>

<p style="color:red;">How can we make AI systems more fair and less biased? Let’s look at some ways this can be done. </p>

<br>


So, how do we make AI systems more fair and less biased? There is no panacea for bias – partly because of the many different ways that bias can manifest, and partly because there is no single definition of an algorithmically fair outcome. Nonetheless, we can look at some of the situations above and look at ways the problems with fairness could potentially have been dealt with.

Starting with the example of the sexist recruiting algorithm, we can pinpoint the source of bias to historical recruitment practices that produced the training data, and the assumption that past recruitment practices provide normative basis for future practices (ie. “we should hire this person because we have hired people like them before”). We can see that the root issues are inexorably linked to company culture and even wider working culture in the technology sector, as well as a morally suspect reasoning (recall Hume’s guillotine in chapter 2). These are problems which require large cultural shifts and structural reformations, and are unlikely to be fixed by technological solutions.

#### Anticlassification
Nonetheless, one could try to salvage what's possible from the dataset, and see if it could be made at least less biased. One common technical fix on the data set is called anticlassification, or the removal of explicit protected variables from the data. This means erasing information like gender or ethnicity, and their proxies from the data. Here proxies mean features that are strongly correlated with the protected characteristics. Like in the case of the recruiting algorithm mentioned earlier, if a person’s CV contains references to maternal leave or a women’s college, the algorithm could still make gendered predictions even if an explicit gender variable is left out.

This may go some way to reducing bias in the system, but whether it is effective in any specific scenario needs to be verified by testing and auditing. Corbett-Davies and Goel (2018) have shown that anticlassification may even be detrimental to fairness in certain situations, where features have different predictive power across social groups. One illustration of this is heart attack symptoms: research has shown that heart attacks look very different in female patients than in male patients. The symptoms most people know to look for, for example right sided chest pain, is far more common in male patients than female patients. Thus, an app where one can check “am I having a heart attack” would likely give very wrong results if it did not take into consideration the sex of the patient.

#### Resampling
In cases like the facial recognition algorithm researched by Buolamwini and Gebru, where bias is produced through sample size disparity, resampling is one possible way to approach the problem. This might mean only using a smaller portion of the dataset, which has a better distribution of examples across all relevant social grouping. Another way to resample is to produce synthetic examples of the underrepresented groups (Chawla et al. 2002). Again, whether these work is a matter of case by case verification. It might be that the dataset is so unbalanced that there is no way to fix it save from creating a new one from scratch. Furthermore, in a case which is so high-risk and sensitive, such as facial recognition, it is not a given that the system will be ethical, fair and nondiscriminatory even if the classification is unbiased and the data set equally representative. This is something we will approach in the next section, but in terms of making the AI fair, sometimes the only way to do that is to not develop the AI in the first place.



#### Discrimination beyond bias

The important thing to remember here, is that discrimination is not the same as systematic bias. Bias in AI systems is a very clear cut cause for discriminatory practices, and because of its quantifiable nature, it’s easy to fit into the conceptual world of technical AI research. This may be why the conceptual leap from discrimination to bias is so often made.

Nonetheless, AI systems can partake in discriminatory practices which do not stem from bias in the AI system. Rather, we have to expand our object of investigation from the minutiae of the AI model, to the whole system of institutions it takes part in.

</styled-text>

<text-box name="" icon="chap6">

In early 2018, researchers from Stanford Graduate School of Business published a white-paper detailing a deep learning system which could distinguish between gay and heterosexual men with an accuracy of 81% based on a single photo of their face. The findings have been controversial, to say the least, and for many different reasons. Critics have raised worries about the resurrection of the pseudoscience of physiognomy, which has a deep rooted connection to historical racist injustices. There has also been suspicions that the system, rather than picking up on some subtle genetic signifiers as was claimed, is actually tracking how people tend to groom and take photos of themselves.

Furthermore, this AI system very clearly works in an ethically nebulous area in terms of privacy, self-determination, and, of course, discrimination. Leaving out the other concerns for the moment, how does discrimination function here? Clearly classification bias is not the discriminatory element here: we are not ethically concerned with whether the estimator is more accurate in predicting homosexuality in some groups than others. Instead, the ethically relevant feature of the system is that, regardless of its accuracy, it directly enables differential treatment based on perceived social grouping.

</text-box>

<styled-text>

It’s not necessary to draw out examples of malicious uses of such systems described above, as their possibility should be obvious to all. Directly malicious uses aside, we can imagine integrating such a technology into, say, the online personalized advertising machinery composed of social media, data processors, trend influencers and global merchandisers. Even if the classifying AI is by all technical standards fair and unbiased, it predicates the online advertising of goods on the discriminatory principle, that assumed sexual orientation is a valid reason to treat people differently.

This leads us to an important point for anyone considering the ethics of AI systems: beware the reductionism trap! That is, we should avoid reducing the concept of ethics to simplified, corner-cutting, quantified values, like unbiasedness. Because AI systems take part in processes which are much more complex than what the system itself does, ethics cannot be measured by just looking at the input and the output values of the algorithm.

Put succinctly, fair does not mean ethical.

</styled-text>

<quiz id="3d90fdb5-2668-4412-8e4d-6ea8f10e32cb"> </quiz>
