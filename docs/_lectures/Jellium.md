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

we just set $N_\bk\to \langle N_\bk\rangle$ in our earlier expression. We are now denoting the quantum and thermal expectation by single angular brackets to avoid clutter. Thus, for some operator $A$

$$
\langle A\rangle \equiv \frac{\tr\left[e^{-\beta H_0} A\right]}{Z_0},\quad Z_0 = \tr e^{-\beta H_0}
$$

The importance of including the background charge density now becomes clear: the Hartree term vanishes (without the background charge it would be infinite!), leaving only the Fock term

$$
\langle H_\text{int}\rangle =  - \frac{1}{2} \sum_{\bk_1,\bk_2} \tilde U(\bk_1-\bk_2) \langle N_{\bk_1}\rangle\langle N_{\bk_2}\rangle.
$$

Before considering a situation where the time dependence enters in an essential way, let's look at a slightly more general example of an expectation value

$$
\begin{align}
\langle \pdop(\br_1)\pop(\br_2)\pdop(\br_3)\pop(\br_4)\rangle &= \frac{1}{V^2}\sum_{\bk_1,\bk_2,\bk_3,\bk_4} e^{i(-\bk_1\cdot\br_1+\bk_2\cdot\br_2-\bk_3\cdot\br_3+\bk_4\cdot\br_4)} \langle \adop_{\bk_1}\aop_{\bk_2}\adop_{\bk_3}\aop_{\bk_4} \rangle\nonumber\\
&= \frac{1}{V^2}\sum_{\bk_1,\bk_3} e^{i[\bk_1\cdot(\br_2-\br_1)+\bk_3\cdot(\br_4-\br_3)]} \langle \adop_{\bk_1}\aop_{\bk_1}\rangle\langle\adop_{\bk_3}\aop_{\bk_3} \rangle\nonumber\\
&\quad+ \frac{1}{V^2}\sum_{\bk_1,\bk_2} e^{i[\bk_1\cdot(\br_4-\br_1)+\bk_2\cdot(\br_2-\br_3)]} \langle \adop_{\bk_1}\aop_{\bk_1}\rangle\langle\adop_{\bk_2}\aop_{\bk_2} \rangle +\cdots\nonumber\\
&=\langle \pdop(\br_1)\pop(\br_2)\rangle\langle\pdop(\br_3)\pop(\br_4)\rangle \nonumber\\
&\quad+\langle \pdop(\br_1)\pop(\br_4)\rangle\langle\pop(\br_2)\pdop(\br_3)\rangle .
\label{Wick_Example}
\end{align}
$$

The dots in the second equality are the accounting errors that we argued in [Lecture 6]({{ site.baseurl }}/lectures/MoreSecondQuantization/#excited-state-energies) can be ignored in the thermodynamic limit. There are no signs on account of the even number of transpositions to shift things into order in the second term. On the other hand

$$
\begin{align}
\langle \pdop(\br_1)\pdop(\br_2)\pop(\br_3)\pop(\br_4)\rangle =\langle \pdop(\br_1)\pop(\br_4)\rangle\langle\pdop(\br_2)\pop(\br_3)\rangle\nonumber\\
\quad\pm\langle \pdop(\br_1)\pop(\br_3)\rangle\langle\pdop(\br_2)\pop(\br_4)\rangle,
\end{align}
$$

with the plus sign for bosons and the minus sign for fermions. Hopefully the picture is clear: we sum over all possible pairings of creation with annihilation operators. For fermions we must in addition be careful to include a minus sign when, in moving paired creation and annihilation operators into position next to each other, we perform an odd number of transpositions.

The second order contribution to the partition function depends on

$$
\langle T_\tau H_\text{int}(\tau_2)H_\text{int}(\tau_1)\rangle.
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

How to we evaluate expectations of time ordered products? It's fairly clear that our example \eqref{Wick_Example} is also an identity in this case

$$
\begin{align}
&\langle T_\tau\pdop(\br_1,\tau_1)\pop(\br_2,\tau_2)\pdop(\br_3,\tau_3)\pop(\br_4,\tau_4)\rangle=\nonumber\\ &\qquad\langle T_\tau\pdop(\br_1,\tau_1)\pop(\br_2,\tau_2)\rangle\langle T_\tau\pdop(\br_3,\tau_3)\pop(\br_4,\tau_4)\rangle\nonumber\\
&\qquad\qquad+\langle T_\tau\pdop(\br_1,\tau_1)\pop(\br_4,\tau_4)\rangle\langle T_\tau\pop(\br_2,\tau_2)\pdop(\br_3,\tau_3)\rangle,
\label{Wick_ExampleT}
\end{align}
$$

because the operators appear in the right time order in the expectation values on both sides. In turns out that this works for fermions too, _provided_ that we define time ordering to include a sign corresponding to the signature of the permutation involved in putting the operators in time order. In the simplest case:

$$
\langle T_\tau \pdop(\br,\tau)\pop(\br',\tau') \rangle = \begin{cases}
\langle \pdop(\br,\tau)\pop(\br',\tau') \rangle & \tau>\tau'\\
-\langle \pop(\br',\tau')\pdop(\br,\tau) \rangle & \tau'>\tau.\
\label{Fermi_Tdef}
\end{cases}
$$

To see why this is necessary, consider the expectation corresponding to the time ordering $\tau_1>\tau_3>\tau_2>\tau_4$

$$
\begin{align}
&\pdop(\br_1,\tau_1)\pdop(\br_3,\tau_3)\pop(\br_2,\tau_2)\pop(\br_4,\tau_4)\rangle=\nonumber\\ &\qquad-\langle \pdop(\br_1,\tau_1)\pop(\br_2,\tau_2)\rangle\langle \pdop(\br_3,\tau_3)\pop(\br_4,\tau_4)\rangle\nonumber\\
&\qquad\qquad+\langle \pdop(\br_1,\tau_1)\pop(\br_4,\tau_4)\rangle\langle \pdop(\br_3,\tau_3)\pop(\br_2,\tau_2)\rangle.
\end{align}
$$

Since the first term on the right hand side contains time ordered products, this identity is only described correctly by \eqref{Wick_ExampleT} if we use the above convention.

One further note about $T_\tau$-products: operators appearing in a $T_\tau$ product can be regarded as (anti-)commuting, because the actual order that they appear in depends on their $\tau$ labels. For instance $T_\tau A(\tau_1)B(\tau_2) = \pm T_\tau B(\tau_2)A(\tau_1)$, depending on whether the operators are bosonic or fermionic.

To outcome of this discussion is __Wick's theorem__:

<p class="message">
An expectation of a $T_\tau$-product of operators with respect to a free Hamiltonian can be written as a sum of terms corresponding to all possible pairings of the operators. Each term consists of the product of $T_\tau$-product expectations for each pair. In the case of fermions, each term will have a sign corresponding to the signature of the permutation reordering the operators so that paired operators are adjacent.
</p>

This is the basic result used for evaluating the time ordered products like \eqref{2nd_Hint}.

### Green's functions

In light of Wick's theorem, we see that the basic quantity that appears in perturbation theory is

$$
G(\br,\tau,\br',\tau')\equiv\langle T_\tau \pop(\br,\tau)\pdop(\br',\tau') \rangle.
\label{GF_def}
$$

This is called a __Green's function__, because it satisfies the equation

$$
\left[\partial_\tau + H_0\right]G(\br,\tau,\br',\tau')=\delta(\tau-\tau')\delta(\br-\br').
\label{GF_eq}
$$

<p class="message">
Make sure you understand where those $\delta$-functions on the right hand side come from!
</p>

The name is slightly unfortunate, because $G(\br,\tau,\br',\tau')$ has a physical meaning in its own right, apart from being useful in perturbation calculation, and we can define it for an interacting system by taking expectations in \eqref{GF_def} with respect to the density matrix of the interacting system. In that case, however, $G(\br,\tau,\br',\tau')$ does not obey a differntial equation like \eqref{GF_eq}. So in general many body Green's functions are _not_ Green's functions in the sense of differential equations. Just to confuse you.

For the noninteracting Green's functions that appear in our perturbation calculations \eqref{GF_eq} is very useful, allowing us to find $G(\br,\tau,\br',\tau')$ using Fourier analysis. The Green's function depends on $\tau-\tau'$ (by the cyclic property of the trace), and in a translationally invariant system it will depend on $\br-\br'$. What about boundary conditions? They are very simple

$$
G(\br,\tau) = \pm G(\br,\tau+\beta).
\label{GF_bc}
$$

The Green's function is periodic in $\beta$ for bosons, and antiperiodic for fermions. This follows from carefully writing out the definition \eqref{GF_def} and using the cyclic property of the trace, not forgetting \eqref{Fermi_Tdef} in the case of fermions. As a result of \eqref{GF_bc}, we can expand $G(\br,\tau)$ in a Fourier series.

$$
G(\br,\tau) = \sum_{n=-\infty}^\infty G_{\omega_n}(\br) e^{-i\omega_n \tau}.
$$

The frequencies $\omega_n$ are called __Matsubara frequencies__, and are

$$
\omega_n = \begin{cases}
2\pi n T & \text{bosons}\\
2\pi \left(n+\frac{1}{2}\right) T & \text{fermions}.\\
\end{cases}
$$

By Fourier transforming, we find the Green's function in momentum and frequency space to be

$$
G_{\bk,\omega_n} = \frac{1}{-i\omega_n + \xi(\bk)}.
$$


### The Linked Cluster Expansion

So far we have described how (in principle) we go about calculating

$$
\begin{align}
Z &= \tr\left[e^{-\beta H_0}T_\tau \exp\left(-\int_0^\beta H_\text{int}(\tau)d\tau\right)\right]\\
&=Z_0\left(1 - \beta \langle H_\text{int}\rangle +\frac{1}{2} \int_0^\beta d\tau_2 \int_0^{\beta} d\tau_1 \langle T_\tau H_\text{int}(\tau_2)H_\text{int}(\tau_1)\rangle+\cdots \right)
\label{Z_exp}
\end{align}
$$

When we discussed Hartree--Fock theory in [Lecture 6]({{ site.baseurl}}/lectures/MoreSecondQuantization/#excited-state-energies), we represented the Hartree and Fock terms by the diagrams

<a name="HFDiag"></a>
![]({{ site.baseurl }}/assets/HFDiag.png)
_Graphical representation of the Hartree and Fock terms._

corresponding to the different ways of pairing the operators. Some of the diagrams arising at the second term in \eqref{Z_exp} are shown below

<a name="HFDiag"></a>
![]({{ site.baseurl }}/assets/2ndOrderDiagrams.png)
_Some of the diagrams contributing at second order. 1. is a pair of disconnected components, each corresponding to the Fock diagram at first order. 2. and 3. are connected diagrams._

We see that some of these diagrams consist of a _single_ connected component of interaction vertices joined by lines corresponding to pairing of creation and annihilation operators. The other diagrams consists of two disconnected copies of those that have already appeared at first order. The contribution from a diagram consisting of disconnected components factorizes, so there's no difficulty including these repeated components as we will have already calculated them at a lower order in the series.

Now, what we actually want to calculate is not the partition function, but its logarithm, or derivatives thereof. For example,

$$
F = -k_\text{B}T \log Z
$$

is the free energy, while

$$
U = -\frac{\partial}{\partial \beta}\log Z
$$

is the internal energy. Fortunately, we have the following amazing fact, known as the __linked cluster theorem__:

<p class="message">
The expansion of $\log Z$ involves only those diagrams forming a <strong>single connected component </strong>.
</p>

Let's see how this works by evaluating the second order contribution to the free energy.


## The Hubbard--Stratonovich Transformation
