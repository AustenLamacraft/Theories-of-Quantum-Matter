---
layout: page
title: Jellium
author: Austen Lamacraft
chapter: 11
summary: Ground state energy. Hubbard--Stratonovich transformation
published: true
---

<p class="message">
There are many situations in which an approach based on finite orders of perturbation theory either misses important physics, or leads to divergences (often both). Mean field theories like those of BCS or Bogoliubov are one way forward. Here we introduce another: transforming the calculation of the partition function into a field theory in an auxillary field, which can then be analyzed by the saddle point method. We use this approach to study a toy model for electrons in a metal: a gas of fermions interacting via the Coulomb force in a neutralizing background of uniform charge density that plays the role of the ionic lattice. This is <strong>Jellium</strong>.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}

---

## Dimensionless parameters

The Jellium Hamiltonian describing fermions interacting via the Coulomb interaction is (we ignore spin)

$$
H = \int \frac{1}{2m}\nabla\pdop\cdot\nabla\pop + \overbrace{\frac{1}{2}\int d\br d\br' :\left[\rho(\br)-n
\right]U(\br-\br')\left[\rho(\br')-n\right]:}^{\equiv H_\text{int}}.
\label{jelliumH}
$$

Here, as usual, $\rho(\br)=\pdop(\br)\pop(\br)$ is the number density operator, $:(\cdots):$ denotes normal ordering, and $\rho(\br)-n$ is the deviation from the uniform background charge. The two body interaction is

$$
U(\br) = \frac{e^2}{\abs{\br}}
$$

(in [Electrostatic units](https://en.wikipedia.org/wiki/Electrostatic_units)). A basic question is: what is the relative magnitude of the kinetic and potential terms? For a free fermion gas in its ground state, the kinetic energy per particle is $\frac{3}{5}E_F$. Since $n = \frac{k_\text{F}^3}{6\pi^2}$ this scales with density as $n^{2/3}$. The scaling of the interaction energy is $n^{1/3}$, showing that (perhaps counterintuitively) low density corresponds to strong interactions, relatively speaking. An appropriate dimensionless parameter is the ratio of the [Wigner--Seitz radius](https://en.wikipedia.org/wiki/Wigner–Seitz_radius) to the Bohr radius $r_\text{Bohr} = (me^2)^{-1}$ for our system. This gives

$$
\frac{r_s}{r_\text{Bohr}} = \left(\frac{3}{4\pi n}\right)^{1/3} me^2.
$$

We have already encountered the following states in Fermi gases, roughly in order of increasing interaction strength:

1. The [Landau Fermi liquid]({{ site.baseurl }}/lectures/FermiGas/).

2. [Ferromagnetism]({{ site.baseurl }}/lectures/MoreSecondQuantization/#stoner-criterion-for-ferromagnetism), when the Stoner criterion is reached. Although we discussed a microscopic calculation, the same criterion can easily be phrased in terms of the Landau function $G(\phi)$.

3. [Mott states]({{ site.baseurl }}/lectures/Lattice/#fermi-hubbard-model) that can occur in a lattice potential, giving insulating behaviour in systems band theory predicts to be metallic.

For very strong interactions, corresponding $r_s$ values greater than 100, the system can form a [Wigner crystal](https://en.wikipedia.org/wiki/Wigner_crystal), breaking the continuous symmetry of spatial translations.

Using perturbation theory to go beyond the Hartree--Fock approximation leads to divergences in the case of Coulomb interactions. Far from being a mere technical nuisance, these divergences are intimately linked to real physical effects arising from the long-ranged interaction, namely __screening__ and collective excitations corresponding to quantized __plasma oscillations__.

## Perturbation Series for the Partition Function

We are going to begin in very general terms, and consider the calculation of the (grand canonical) partition function

$$
Z = \tr\left[\exp\left(-\beta H\right)\right],
$$

where $H=H_0+H_\text{int}$, and $H_0$ is the free particle Hamiltonian including the chemical potential, which we can write

$$
H_0 = \sum_\bk \xi(\bk)\adop_\bk \aop_\bk,
$$

where $\xi(\bk)=\epsilon(\bk)-\mu$. All thermodynamic quantities can be obtained from $Z$, and the formalism can be further extended to calculate correlation functions.

The key to our approach is to exploit then analogy between the 'Boltzmann operator' $e^{-\beta H}$ and the unitary time evolution operator $U(t) = e^{-iHt}$. Calculating the partition function seems to involve evolution for imaginary time $-i\beta$! This suggests we can develop an interaction picture, just as in the real time case. We have the equation of motion

$$
\frac{d}{d\tau}\exp(-\tau H) = -\left(H_0+H_\int\right)\exp(-\tau H).
$$

Multiplying on the left by $e^{\tau H_0}$ gives an equation satisfied by $e^{\tau H_0}e^{-\tau H}$

$$
\frac{d}{d\tau}\left[e^{\tau H_0}e^{-\tau H}\right] = -H_\text{int}(\tau)\left[e^{\tau H_0}e^{-\tau H}\right],
\label{int_pic}
$$

where $H_\text{int}(\tau)\equiv e^{\tau H_0} H_\text{int}e^{-\tau H_0}$ corresponds to the perturbation in the interaction picture at time $t=-i\tau$. The formal solution to \eqref{int_pic} at $\tau=\beta$  

$$
e^{\beta H_0}e^{-\beta H} = T_\tau \exp\left(-\int_0^\beta H_\text{int}(\tau)d\tau\right),
$$

where $T_\tau$ is the operation of time ordering of the exponent, which is a shorthand for

$$
\begin{align}
T_\tau \exp\left(-\int_0^\beta H_\text{int}(\tau)d\tau\right) &= 1 - \int_0^\beta H_\text{int}(\tau_1)d\tau_1 + \int_0^\beta d\tau_2 \int_0^{\tau_1} d\tau_1 H_\text{int}(\tau_2)H_\text{int}(\tau_1) \\
&- \int_0^\beta d\tau_3 \int_0^{\tau_3} d\tau_2 \int_0^{\tau_2} d\tau_1 H_\text{int}(\tau_3)H_\text{int}(\tau_2)H_\text{int}(\tau_1)+\cdots,
\end{align}
$$

with the times increasing from left to right. This gives our final expression for the partition function

$$
Z = \tr\left[e^{-\beta H_0}T_\tau \exp\left(-\int_0^\beta H_\text{int}(\tau)d\tau\right)\right].
$$

Perturbation theory then involves computing averages of a string of $H_\text{int}(\tau)$ operators with respect to the Boltzmann distribution of the free Hamiltonian.

### Wick's Theorem

Let's see how this works by considering the lowest order term when $H_\text{int}$ is given by \eqref{jelliumH}. In this case we just have to compute the thermal average of $H_\text{int}$: the time dependence vanishes by virtue of the cyclic property of the trace. Writing out the perturbation in terms of the Fourier modes gives

$$
H_\text{int}  = \frac{1}{2} \sum_{\bk_1+\bk_2=\bk_3+\bk_4} \tilde U(\bk_1-\bk_4) :(\adop_{\bk_1}\aop_{\bk_4}-nV)(\adop_{\bk_2}\aop_{\bk_3}-nV):,
\label{Hint_exp}
$$

where

$$
\tilde U(\bq) = \frac{4\pi e^2}{\abs{\bq}^2}
$$

if the Fourier transform of the Coulomb potential. We have already discussed the expectation value of $H_\text{int}$ in a product state in [Lecture 6]({{ site.baseurl }}/lectures/MoreSecondQuantization/#excited-state-energies)). Recall that the Hartree and Fock terms arise from two different 'pairings' of creation operators with annihilation operators. This sum over different pairings is a feature of expectations in a product state. Since $e^{-\beta H_0}$ represents a statistical mixture of product states in which the occupation of each momentum state is independent

$$
e^{-\beta H_0} =\prod_\bk e^{-\beta\xi(\bk)N_\bk},
$$

we just set $N_\bk\to \langle\langle N_\bk\rangle\rangle$ in our earlier expression. The importance of including the background charge density now becomes clear: the Hartree term vanishes (without the background charge it would be infinite!), leaving only the Fock term

$$
\langle\langle H_\text{int}\rangle\rangle =  - \frac{1}{2} \sum_{\bk_1,\bk_2} \tilde U(\bk_1-\bk_2) \langle\langle N_{\bk_1}\rangle\rangle\langle\langle N_{\bk_2}\rangle\rangle.
$$

What about the second order contribution, which depends on

$$
\langle\langle H_\text{int}(\tau_2)H_\text{int}(\tau_1)\rangle\rangle.
\label{2nd_Hint}
$$

This is a function of $\tau_1-\tau_2$, again as a result of the cyclic property. Including the time dependence in \eqref{Hint_exp} is straightforward

$$
H_\text{int}  = \frac{1}{2} \sum_{\bk_1+\bk_2=\bk_3+\bk_4} \tilde U(\bk_1-\bk_4) :(\adop_{\bk_1}(\tau)\aop_{\bk_4}(\tau)-nV)(\adop_{\bk_2}(\tau)\aop_{\bk_3}(\tau)-nV):,
\label{Hint_exp_TD}
$$

where the time dependence of the Fourier components is

$$
\aop_\bk(\tau) = e^{-\tau\xi(\bp)}\aop_\bk,\quad \adop_\bk(\tau) = e^{\tau\xi(\bp)}\adop_\bk.
$$

The same logic applies to the evaluation of \eqref{2nd_Hint} as to the Hartree--Fock term. In the expectation value we will have a separate term arising from each possible pairing of a creation operator with an annihilation operator (recalling that in [Lecture 6]({{ site.baseurl }}/lectures/MoreSecondQuantization/#excited-state-energies)) we argued that the accounting errors involved can be ignored in the thermodynamic limit). For fermions we have to in addition be careful to include a minus sign when, in moving paired creation and annihilation operators into position next to each other, we perform an odd number of transpositions. We have already seen an example of such a minus sign in the Fock potential. One compact way to write this result is

$$
\langle\langle \pop(\br_1)\cdots \pop(\br_N)\pdop(\br_N)\cdots \pdop(\br_1) \rangle\rangle = \det \langle\langle \pop(\br_j)\pdop(\br_k) \rangle\rangle
$$

Statements of this form are normally called the __Wick theorem__

Consider the case of quartic interactions


Normal order w.r.t the Fermi surface???

### The Linked Cluster Expansion

## The Hubbard--Stratonovich Transformation

We don't need the determinant if we have the linked cluster theorem!

### Trace Over Fermions

### Polarization Operator



Here we introduce..

Evaluate the partition function using the linked cluster expansion
