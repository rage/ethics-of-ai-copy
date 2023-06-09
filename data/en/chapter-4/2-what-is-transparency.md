---
path: '/chapter-4/2-what-is-transparency'
title: 'What is transparency?'
hidden: false
---

<hero-icon heroIcon='chap4'/>

<styled-text>

Transparency can be defined in multiple ways. There are a number of neighboring concepts that are sometimes used as synonyms for transparency – including “explainability” (AI research in this area is known as “XAI”), “interpretability”, “understandability”, and “black box”.

Transparency is, roughly, a property of an application. It is about how much it is possible to understand about a system’s inner workings “in theory”.  It can also mean the way of providing explanations of algorithmic models and decisions that are comprehensible for the user. This deals with the public perception and understanding of how AI works. Transparency can also be taken as a broader socio-technical and normative ideal of “openness”.

There are many open questions regarding what constitutes transparency or explainability, and what level of transparency is sufficient for different stakeholders. Depending on the specific situation, the precise meaning of “transparency” may vary. It is an open scientific question, whether there are several different kinds, or types, of transparency. Moreover, transparency can refer to different things whether the purpose is to, say, analyze the legal significance of unjust biases or to discuss them in terms of features of machine learning systems.

### Transparency as a property of a system

As a property of a system, transparency addresses how a model works or functions internally. Transparency is further divided into “simulatability” (an understanding of the functioning of the model), “decomposability” (understanding of the individual components), and algorithmic transparency (visibility of the algorithms).

</styled-text>

<text-box name="What makes a system a “black box”?" icon="chap4">

**Complexity.** In contemporary AI-systems, operation of a neural network is encoded in thousands, or even millions, of numerical coefficients. Typically the system learns their values at the training phase. Because the operation of the neural network depends on the complicated interactions between these values, it is practically impossible to understand how the network works even if all the parameters are known.

**Difficulty of developing explainable solutions.** Even if the used AI models support some level of explainability, additional development is required to build explainability to the system. It may be difficult to create a user experience for careful yet easily understandable explanations for the users.

**Risk concerns.** Many AI algorithms can be fooled if an attacker carefully designs an input that causes the system to malfunction. In a highly transparent system, it may be easier to game the system to come up with strange or unwanted results. Thus, sometimes systems are intentionally designed as black boxes.

</text-box>

<styled-text>

Given that many of the most efficient, current deep learning models are black box models (almost by definition), researchers seem to assume it is highly unlikely that we would be able to develop them as fully transparent. Because of this, the discussion focuses on finding the “sufficient level of transparency”. Would it suffice if algorithms offered people a disclosure of how algorithms came to their decision and provide the smallest change “that can be made to obtain a desirable outcome” ([Wachter et al., 2018](https://arxiv.org/pdf/1811.01439.pdf))? For example, if an algorithm refuses someone a social benefit, it should tell the person the reason, and also what he or she can do to reverse the decision.

The explanation should tell, for instance, what the maximum amount of salary to be approved is (input), and how decreasing the amount will impact the decisions made (manipulation of the input). But the problem is that the right to know also applies to situations where the system makes mistakes. Then, it may be necessary to perform an autopsy on the algorithm and identify those factors that caused the system to make mistakes (Rusanen & Ylikoski 2017). This can’t be done by only manipulating the inputs and outputs.

<img src="./autopsy.svg" alt="Autopsy"> </img>

This illustration depicts a very simplified AI model tasked to recognize all cats in data consisting of all kinds of animals. The model has inferred two patterns that make up a cat. To the model, they're just numbers, but to us, they look like describable patterns. However, patterns and features inferred can look quite complicated to us. For more information, see https://distill.pub/2017/feature-visualization/.

Moreover, transparency serves many other functions in contemporary debates on machine learning models. It can be relevant for developing legislation or for ensuring public trust in AI. To handle these issues the notion of transparency in AI is typically given a wider definition in terms of “comprehensibility”.

### Transparency as comprehensibility

The comprehensibility – or understandability – of an algorithm requires that one should explain how a decision was made by an AI model in a way that is sufficiently understandable to those affected by the model. One should have a concrete sense of how or why a particular decision has been arrived at based on inputs.

However, it is notoriously difficult to translate algorithmically derived concepts into human-understandable concepts. In some countries, legislators have discussed whether public authorities should publish the algorithms they use in automated decision-making in terms of programming codes. However, most people do not know how to make sense of programming codes. It is thus hard to see how transparency is increased by publishing codes.

```sas
* Take seed number from machine time for sample;
data _NULL_;
 seedNumber= int(%sysfunc(TIME())) ;
 call symput('seedNumber',seedNumber);
run;
%put &seedNumber;

* Order universe ;
proc sort data=universe;
 by henro;
run;
* Make a sample, n=2000 ;
proc surveyselect data=universe method=srs
     n=2000 seed=&seedNumber
     out=sample;
run;
* Order sample ;
proc sort data=sample;
 by henro;
run;

 * Unite sample to universe, create variable TYPE; data all;
 merge universe(in=a)
       sample(in=b);
 by henro;
 length TYPE $ 1.;
 if a then TYPE='V'; * referenceGroup ;
 if b then TYPE='K'; * experimentGroup ;

 * assign values to variable REAOH ;
REAOH='PUOTOS';
run;

* Confirm that all 2000 people have a TYPE that is given a value 'K';
proc freq;
 tables type;
run;
```


Would it be more helpful to publish the exact algorithms? In most cases, publishing the exact algorithms does not bring a lot of transparency either, especially if you do not have the access to the data used in a model.

<img src="./q-learning.svg" alt="q learning">

Nowadays, cognitive and computer scientists develop human-interpretable descriptions of how applications behave, and why. Approaches include, for example, the development of data visualization tools, interactive interfaces, verbal explanations or meta-level descriptions of the features of models. These tools can be extremely helpful for making AI applications more accessible. However, there is still plenty of work to be done.


<img src="./distill-example.png" alt="Distill example">

Diagram CC-BY 4.0 Olah, et al., "The Building Blocks of Interpretability", Distill, 2018.

<br>
<br>

The fact that comprehensibility is based on subject and culture-dependent components complicates this more. For example, the logic of how visualizations are interpreted – or how the inferences are made on them – varies across cultures. Thus, tech developers should pay attention to the sufficient understanding of the visual language they use.

Moreover, much is dependent on the degree of data or algorithmic literacy, for example the knowledge of contemporary technologies. In some cultures, the vocabulary of contemporary technology is more familiar, but in many others they may be completely novel. To increase the understandability, there is clearly a need for significant educational efforts in improving algorithmic literacy – for example on “computational thinking” ([Heintz & al 2016](https://ieeexplore.ieee.org/document/7757410)). This user literacy will have a direct effect on transparency in terms of the ordinary users’ basic understanding of AI systems. It may actually provide the most efficient and practical way to make the boxes less black for many people.

</styled-text>


<text-box name="How to make models more transparent?" icon="techIcon">

The black box problem of artificial intelligence is not new. Providing transparency for machine learning models is an active area of research. Roughly speaking, there are five main approaches:

* **Use simpler models**. This, however, often sacrifices accuracy for explainability.

* **Combine simpler and more sophisticated models**. While the sophisticated model allows the system to do more complex computations, the simpler model can be used to provide transparency.

* **Modify inputs to track relevant dependencies between inputs and outputs**. If a manipulation of inputs changes overall model results, these inputs may play a role in the classification.

* **Design the models for the user**. This requires using cognitively and psychologically efficient methods and tools for visualizing the model states or directing attention. For example, in computer vision, states in intermediate layers of the models can be visualized as features (like heads, arms, and legs) to provide a comprehensible description for image classification. Researchers have also developed methods for directing “attention” towards the parts of the input that matter the most. These can be visualized to highlight the parts of an image or a text (so-called “weights”) that contribute the most to a particular recommendation.

* **Follow the latest research**. A lot of research is ongoing on various aspects of explainable AI – including the socio-cognitive dimensions – and new techniques are being developed.


</text-box>

<styled-text>

<quiz id="f94f13d3-3983-4d86-811c-881e1282c275">

There is a need to translate algorithmic concepts into everyday language. Most people without a  background in computer science are not familiar with the basic vocabulary of AI. This has a direct impact on their ability to understand recent developments.

<span style="font-size: 30px">1.</span>
<img src="./rl1.svg" alt="Techical reinforcement learning algorithm" style="width: 450px">

<span style="font-size: 30px">2.</span>
<img src="./rl2.svg" alt="Robot reinforcement learning algorithm" style="width: 400px">

<br>

<span style="font-size: 30px">3.</span>
<img src="./rl3.svg" alt="Cat reinforcement learning algorithm" style="width: 450px">

<br>

Compare these three visualizations of reinforcement learning algorithms. Which one of them is the most understandable? Why?

<br>

</quiz>
