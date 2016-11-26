---
layout: page
title: Problem Set 4
author: Austen Lamacraft
chapter: 3
summary: Kondo Model; Jordan--Wigner; Ising Model.
---

## Contents
{:.no_toc}

4. Toc
{:toc}

---


## From the Anderson Model to the Kondo Model

One route to understanding the origin of the Kondo coupling is to start from the [Anderson impurity model](https://en.wikipedia.org/wiki/Anderson_impurity_model).

$$
\begin{align}
H = \sum_{\bk,s}\xi(\bk)\adop_{\bk,s}\aop_{\bk,s}+\overbrace{\sum_s\epsilon_b N_{b,s} + U N_{b,\uparrow}N_{b,\downarrow}}^{\equiv H_b} + \overbrace{\frac{t}{\sqrt{V}}\sum_{\bk,s}\left[\adop_{\bk,s}\bop_s+\text{h.c.}\right]}^{\equiv H_t}
\end{align}
$$

here the $\bop$ fermion describes the impurity site: $N_{b,s}=\bdop_{s}\bop_s$.

For $t=0$ and $\epsilon_b=-U/2$ the singly occupied, doubly degenerate impurity state has energy $-U/2$, with the empty and double occupied states having larger energy $0$ (this choice is made for simplicity). We can then ask for the effective Hamiltonian describing the singly occupied site. We've seen one way to do this in [Lecture 7]({{ site.baseurl }}/lectures/Lattice/)). A second way is to use the __Schrieffer–Wolff transformation__ {%cite Schrieffer:1966aa %}. The idea is to perform a unitary transformation on the Hamiltonian that removes the coupling in the last term to lowest order.

We write

$$
H\to H'\equiv e^S H e^{-S},
$$

where $S$ is antihermitian.

1. Show that, if we ignore the kinetic energy, $S$ must be chosen so that

	$$
	\left[S, H_b\right] = - H_t.
	$$

2. Show that the transformed Hamiltonian $H'$ contains the term

	$$
	H^{(2)} = \frac{1}{2}\left[S,H_t\right]
	$$

	of order $t^2$.

3. Try $S$ of the form

	$$
	S = f(N_{b,\uparrow}+N_{b,\downarrow})\sum_{k,s} \adop_{\bk,s}\bop_s - \text{h.c.}
	$$

	Find the form of $f(N_b)$ and compute $H^{(2)}$, retaining only those parts that keep the occupancy of the impurity fixed. You should be able to write $H^{(2)}$ as a Kondo Hamiltonian and identify $J$. What sign does it have?

	_Hint:_ $\bdop_s f(N_b) = f(N_b-1)\bdop_s$, $\bop_s f(N_b) = f(N_b+1)\bop_s$

## Spin-Flip Mediated Inelastic Scattering

{% cite Kaminski:2001aa %}

Consider the scattering of _two_ fermions in the Kondo problem

$$
\ket{\bk_1,s_1,\bk_2,s_2} = \adop_{\bk_1,s_1}\adop_{\bk_2,s_2}\ket{\text{FS}}
$$

Find at second order in $J$ the amplitude for the process

$$
\bk'_1,s'_1,\bk'_2,s'_2\longrightarrow \bk_1,s_1,\bk_2,s_2,
$$

and show that the total scattering rate, averaged over intial spin states of the fermions and the impurity spin $S$, is

$$
\begin{align}
\Gamma(\epsilon_1',\epsilon_2',\epsilon_1,\epsilon_2)&=\frac{\pi}{4}\frac{n}{\nu}S(S+1)(J\nu)^4\\
&\times\left[\frac{1}{(\epsilon'_1-\epsilon_1)^2}+\frac{1}{(\epsilon'_1-\epsilon_2)^2}\right]\delta(\epsilon_1+\epsilon_2-\epsilon_1'-\epsilon_2')
\end{align}
$$

where $\nu$ is the Fermi surface density of states per unit volume per spin component.


## Kondo Effect Without Spin

{% cite Matveev:1990aa %}

A model for (spinless) electrons hopping on and off a metal grain or quantum dot  ($a$ fermions) to a lead  ($b$ fermions) is

$$
\begin{align}
H &= \sum_{\bk} \xi(\bk)\left[\adop_\bk\aop_\bk+\bdop_\bk\bop_\bk
\right] + \frac{Q^2}{2C}+\varphi Q\\
&\quad+\overbrace{\frac{1}{\sqrt{V_aV_b}}\sum_{\bk,\bk'} \left[t\,\adop_\bk\bop_{\bk'}+\text{h.c.}\right]}^{\equiv H_t}.
\end{align}
$$

Here $C$ is the capacitance, and $Q$ is the charge of the dot

$$
Q = e\sum_\bk \left[\adop_\bk\aop_\bk - \theta(-\xi(\bk))\right],
$$

defined so that the dot is neutral when filled to $\xi(\bk)=0$. $\varphi$ is a gate voltage. In the region

$$
-\frac{e}{2C}< \varphi < \frac{e}{2C},
$$

the ground state of the decoupled system ($t=0$) has $Q=0$. Show that at second order in the hopping, the ground state fluctuations of the dot charge are given by

$$
\langle Q^2\rangle \sim e^2g \log\left(\frac{e/2C-\varphi}{e/2C+\varphi}\right),
$$

where $g \equiv \abs{t}^2\nu_a(0)\nu_b(0)$.

What has this got to do with the Kondo effect? Try to establish a dictionary between the two phenomena.

References
----------

{% bibliography --cited %}
