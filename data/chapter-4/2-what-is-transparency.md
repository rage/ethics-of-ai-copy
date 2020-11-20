---
path: '/chapter-4/2-what-is-transparency'
title: 'What is transparency?'
hidden: false
---

### II. What is transparency?

Transparency can be defined in multiple ways. There are a number of neighboring concepts that are sometimes used as synonyms for transparency – including “explainability” (AI research in this area is known as “XAI”), “interpretability”, “understandability”, and “black box”.

Transparency is, roughly, a property of an application. It is about how much it is possible to understand about a system’s inner workings “in theory”.  It can also mean the way of providing explanations of algorithmic models and decisions that are comprehensible for the user. This deals with the public perception and understanding of how AI works. Transparency can also be taken as a broader socio-technical and normative ideal of “openness”.

There are many open questions regarding what constitutes transparency or explainability, and what level of transparency is sufficient for different stakeholders (Matsakis, 2018). Depending on the specific situation, the precise meaning of “transparency” may vary. It is an open scientific question, whether there are several different kinds, or types, of transparency. Moreover, transparency can refer to different things whether the purpose is to, say, analyze the legal significance of unjust biases or to discuss them in terms of features of machine learning systems.

### III. Transparency as a property of system

As a property of a system, transparency addresses how a model works or functions internally. Transparency is further divided into “simulatability” (an understanding of the functioning of the model), “decomposability” (understanding of the individual components), and algorithmic transparency (visibility of the algorithms).

</styled-text>

<text-box name="What makes a system a “black box”?" icon="chap4">

Complexity. In contemporary AI-systems, operation of a neural network is encoded in thousands, or even millions, of numerical coefficients. Typically the system learns their values at the training phase. Because the operation of the neural network depends on the complicated interactions between these values, it is practically impossible to understand how the network works even if all the parameters are known.
Difficulty of developing explainable solutions. Even if the used AI models support some level of explainability, additional development is required to build explainability to the system. It may be difficult to create a user experience for careful yet easily understandable explanations for the users.

Risk concerns. Many AI algorithms can be fooled if an attacker carefully designs an input that causes the system to malfunction. In a highly transparent system, it may be easier to game the system to come up with strange or unwanted results. Thus, sometimes systems are intentionally designed as black boxes.

</text-box>

<styled-text>

Given that many of the most efficient, current deep learning models are black box models (almost by definition), researchers seem to assume it is highly unlikely that we would be able to develop them as fully transparent. Because of this, the discussion focuses on finding the “sufficient level of transparency”. Would it suffice if algorithms offered people a disclosure of how algorithms came to their decision and provide the smallest change “that can be made to obtain a desirable outcome” (Wachter et al., 2018)? For example, if an algorithm refuses someone a social benefit, it should tell the person the reason, and also what he or she can do to reverse the decision (Matsakis 2018).

The explanation should tell, for instance, what the maximum amount of salary to be approved is (input), and how decreasing the amount will impact the decisions made (manipulation of the input). But the problem is that the right to know also applies to situations where the system makes mistakes. Then, it may be necessary to perform an autopsy on the algorithm and identify those factors that caused the system to make mistakes (Rusanen & Ylikoski 2017). This can’t be done by only manipulating the inputs and outputs.

-- picture: autopsy --

Moreover, transparency serves many other functions in contemporary debates on machine learning models. It can be relevant for developing legislation or for ensuring public trust in AI. To handle these issues the notion of transparency in AI is typically given a wider definition in terms of “comprehensibility”.

### IV. Transparency as comprehensibility

The comprehensibility – or understandability – of an algorithm requires that one should explain how a decision was made by an AI model in a way that is sufficiently understandable to those affected by the model. One should have a concrete sense of how or why a particular decision has been arrived at based on inputs.

However, it is notoriously difficult to translate algorithmically derived concepts into human-understandable concepts. In some countries, legislators have discussed whether public authorities should publish the algorithms they use in automated decision-making in terms of programming codes. However, most people do not know how to make sense of programming codes. It is thus hard to see how transparency is increased by publishing codes.


![Example code](./example-code.png)

Would it be more helpful to publish the exact algorithms? In most cases, publishing the exact algorithms does not bring a lot of transparency either, especially if you do not have the access to the data used in a model.

Pic: ALGORITHM


Nowadays, cognitive and computer scientists develop human-interpretable descriptions of how applications behave, and why. Approaches include, for example, the development of data visualization tools, interactive interfaces, verbal explanations or meta-level descriptions of the features of models. These tools can be extremely helpful for making AI applications more accessible. However, there is still plenty of work to be done.


Example of a visualization technique
KUVA

The fact that comprehensibility is based on subject and culture-dependent components complicates this more. For example, the logic of how visualizations are interpreted – or how the inferences are made on them – varies across cultures. Thus, tech developers should pay attention to the sufficient understanding of the visual language they use.

Moreover, much is dependent on the degree of data or algorithmic literacy, for example the knowledge of contemporary technologies. In some cultures, the vocabulary of contemporary technology is more familiar, but in many others they may be completely novel. To increase the understandability, there is clearly a need for significant educational efforts in improving algorithmic literacy – for example on “computational thinking” (Heintz, Mannila, & Färnqvist, 2016). This user literacy will have a direct effect on transparency in terms of the ordinary users’ basic understanding of AI systems. It may actually provide the most efficient and practical way to make the boxes less black for many people.

</styled-text>


<text-box name="How to make models more transparent?" icon="exerIcon">

The black box problem of artificial intelligence is not new. Providing transparency for machine learning models is an active area of research. Roughly speaking, there are five main approaches:

* **Use simpler models**. This, however, often sacrifices accuracy for explainability.

* **Combine simpler and more sophisticated models**. While the sophisticated model allows the system to do more complex computations, the simpler model can be used to provide transparency.

* **Modify inputs to track relevant dependencies between inputs and outputs**. If a manipulation of inputs changes overall model results, these inputs may play a role in the classification.

* **Design the models for the user**. This requires using cognitively and psychologically efficient methods and tools for visualizing the model states or directing attention. For example, in computer vision, states in intermediate layers of the models can be visualized as features (like heads, arms, and legs) to provide a comprehensible description for image classification. Researchers have also developed methods for directing “attention” towards the parts of the input that matter the most. These can be visualized to highlight the parts of an image or a text (so-called “weights”) that contribute the most to a particular recommendation.

* **Follow the latest research**. A lot of research is ongoing on various aspects of explainable AI – including the socio-cognitive dimensions – and new techniques are being developed.


</text-box>

<styled-text>
