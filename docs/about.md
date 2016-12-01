---
layout: page
title: About This Course
author: Austen Lamacraft
summary: Models as Minimal Working Examples
---

<p class="message">
The purpose of this course is to introduce <strong>simple models </strong> of phenomena in condensed matter physics, and to equip you with the tools needed to analyse their behaviour. This involves the application of quantum mechanics to <strong>many body systems</strong>. There is a strong overlap with the subject of  <strong>quantum field theory</strong>, which deals with the quantum mechanics of continua (i.e. fields).
</p>


## Contents
{:.no_toc}

* Toc
{:toc}

---



## Models of Matter

It's important to realise that in general simple models are neither tractable, nor display simple behaviour! To take an example: all students of physics are familiar with the [Ising model](https://en.wikipedia.org/wiki/Ising_model) of magnetism, which caricatures a lattice of magnetic ions and their complex interactions. The Ising model is defined in terms of an energy function

$$
H = J\sum_{\langle j\,k\rangle} \sigma_j \sigma_k,
\label{spin_ising}
$$

where the 'spin' variables $\sigma_j$ take the values $\pm 1$. The notation ${\langle j\,k\rangle}$ indicates that the sum is over all nearest neighbour pairs on some (e.g. cubic) lattice. A negative coupling $J<0$ tends to promote alignment of the spins.

The calculation of the partition function of the Ising model, and hence of its thermodynamic behaviour, is simple in 1D, extremely hard in 2D, and -- as far as we know -- impossible in the most interesting case of three dimensions. As well as being intractable, it is also highly unrealistic. The complexity of the magnetic atom, consisting of tens of electrons, is reduced to a single variable describing the spin only, which is not even treated quantum mechanically.  Why on earth should we care?

The point is that the Ising model is a [minimal working example](https://en.wikipedia.org/wiki/Minimal_Working_Example). It is designed with the minimal set of ingredients necessary to demonstrate the phenomenon of ferromagnetism. The puzzle it seeks to explain is: how do a large number of microscopic 'magnets' (the spins), undergoing thermal fluctuations that are constantly seeking to randomize their direction, decide to develop a macroscopic magnetization in a particular direction?  Why does the magnetization appear abruptly at the the [Curie temperature](https://en.wikipedia.org/wiki/Curie_temperature), rather than gradually? Obviously the spins cannot be independent. The fact that the Ising model has a magnetic transition shows us that a nearest neighbour coupling is enough.

That we can cook up such minimal models _and analyze them_, even if we can't solve them exactly, gives us confidence that whether we are talking about Iron, Nickel, or Cobalt, the essence of the magnetic transition is the same. By understanding something about the Ising model, we can say we have understood something about magnetism _in general_.

This certainly doesn't mean the end of story, of course. Firstly, one can try to move towards a more realistic description of ferromagnetism. What is the microscopic origin and size of the coupling? Why does Cobalt have a higher Curie temperature than Nickel? How does the magnetism interact with other properties of the metal? These are all valid questions beyond our minimal working example.

Secondly, one can ask whether, with similar models, one can describe _qualitatively different phenomena_. If $J>0$ do the spins _anti_-align at some transition? What if we change the lattice? Make it disordered? Let $\sigma_j$ be a vector instead of a scalar? Make it truly quantum?

This course pursues this second line of investigation. We will look at the simplest models decribing interacting bosons, fermions, and spins, and try to describe the properties of the states of matter that they form. These states of matter -- magnets, metals, superconductors -- have real world counterparts, and by studying their toy versions we learn what makes them tick. This strategy of introducing and analyzing new models is one of the ways in which theorists try to learn what states of matter _may_ exist, and under what conditions.

## Structure of the Course

### Prerequisites

You should have taken a quantum mechanics course at the level of the advanced quantum course in Part II. You don't need to have taken TP2. One of the main methods we use -- second quantization -- is covered in TP2 but will be introduced again from scratch.


### Lectures
