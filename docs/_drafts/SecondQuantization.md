---
layout: page
title: A is for Annihilation
author: Austen Lamacraft
chapter: 5
summary: Fock states and occupation numbers. Creation and annihilation operators. The case of fermions. Representation of operators.
published: true
---

<p class="message">
We have seen that product states can be described in terms of their occupation numbers. We now introduce a language to describe many body states, and the operators that act on them, that is adapted to this description. This method of <strong> second quantization </strong> represents the beginning of the field theoretic description of many body systems.
</p>


## Contents
{:.no_toc}

* Toc
{:toc}

Reading: {% cite Baym:1969 %}, {% cite Nazarov:2013 %}.

---

## Creation and Annihilation Operators

When we discussed the elastic chain in [Lecture 2]({{ site.baseurl }}/lectures/ElasticChain/), we saw that the quanta of the normal modes of the chain could be thought of as bosons. The essence of second quantization is to turn this observation around, and formally introduce __creation and annihilation operators__ that add and remove bosons to a system. Subsequently, we identify these operators as components of a __quantum field__. Whether you think of the field as a physical entity -- with the bosons appearing upon quantization -- or as a mathematical device for representing a system of indistinguishable particles is a question of taste. The former point of view is more common in particle physics, the latter in condensed matter.

### Recap: Product States

Remember that in [Lecture 1]({{ site.baseurl }}/lectures/ManyBodyWavefunctions/) we saw that a normalized product state of $N$ bosons occupying orthonormal states $\varphi_{\alpha_n}(\br)$ $n=1,\ldots, N$ is

$$
\Psi^{\text{S}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}(\br_1,\ldots,\br_N)=\sqrt{\frac{1}{\prod_{\alpha}N_{\alpha}!}}\frac{1}{\sqrt{N!}}\sum_P\varphi_{\alpha_{1}}(\mathbf{r}_{P_1})\varphi_{\alpha_{2}}(\mathbf{r}_{P_2})\cdots\varphi_{\alpha_{N}}(\mathbf{r}_{P_N}),
\label{A_OrthoProd}
$$

where the sum is over all permutations of $N$ objects. The normalization factor involves the __occupation numbers__ $\{N_{\alpha}\}$ giving the number of particles in state $\alpha$.

More generally, let's consider the (unnormalized) symmetric product state formed from any set of single particle wavefunctions $\psi_n(\br)$, not necessarily orthonormal

$$
\Psi^{\text{S}}(\br_1,\ldots,\br_N) = \frac{1}{\sqrt{N!}}\sum_P\psi_1(\mathbf{r}_{P_1})\psi_{2}(\mathbf{r}_{P_2})\cdots\psi_{N}(\mathbf{r}_{P_N}).
\label{A_NProd}
$$

Let's compute the inner product with another symmetric state formed from wavefunctions $\phi_n(\br)$

$$
\Phi^{\text{S}}(\br_1,\ldots,\br_N) = \frac{1}{\sqrt{N!}}\sum_P\phi_1(\mathbf{r}_{P_1})\phi_{2}(\mathbf{r}_{P_2})\cdots\phi_{N}(\mathbf{r}_{P_N}).
$$

The result is

$$
\bra{\Psi}\Phi\rangle = \sum_P \bra{\psi_n}\phi_{P_n}\rangle = \perm \bra{\psi_m}\phi_{n}\rangle,
\label{A_perm}
$$

where we have introduced the [permanent](https://en.wikipedia.org/wiki/Permanent) of the matrix $\bra{\psi_m}\phi_{n}\rangle$, which is defined just like the determinant that we met in the case of fermions, but without the minus signs.

<p class="message">
Satisfy yourself that \eqref{A_perm} agrees with \eqref{A_OrthoProd} in the case of orthonormal single particle wavefunctions.
</p>


### Creation and Annihilation Operators

Our starting point is the __vacuum state__, which we'll denote by $\ket{\text{VAC}}$ to distinguish it from the ground state. The vacuum state corresponds to the state with no particles. Up to now, we have worked with many body wavefunctions having just as many arguments as we have particles, but since we are now considering a formalism in which there are states with different numbers of particles, we have to allow for that number to be zero.

The creation operator $\adop(\psi)$ creates a particle in the single particle state $\psi(\br)$ (the reason for introducing the adjoint operator as the creation operator will become clear: for the moment let's just take it that it's the adjoint of _something_.). This means we identify

$$
\psi(\br)\longleftrightarrow \adop(\psi)\ket{\text{VAC}}.
\label{A_1part}
$$

States that can be written $\adop(\psi)\ket{\text{VAC}}$ form the space of one particle states, which are orthogonal to the vacuum state

$$
\bra{\text{VAC}} \adop(\psi)\ket{\text{VAC}}=0.
$$

This means, taking the adjoint

$$
\aop(\psi)\ket{\text{VAC}}=0.
$$

Evidently, $\adop(\psi)$ must be linear in $\psi$

$$
\adop\left(c_1\psi_1+c_2\psi_2\right) = c_1\adop(\psi_1)+c_2\adop(\psi_2).
$$

Generalizing \eqref{A_1part}, we represent an $N$ particle product state \eqref{A_NProd} as

$$
\Psi^{\text{S}}(\br_1,\ldots,\br_N) \longleftrightarrow \adop(\psi_1)\cdots \adop(\psi_N)\ket{\text{VAC}}.
\label{A_NPart}
$$

For this to be a symmetric wavefunction, it's clear that we must have

$$
\left[\adop(\psi),\adop(\phi)\right]=0
\label{A_adcommute}
$$

for any states $\psi(\br)$ and $\phi(\br)$. Taking the adjoint gives

$$
\left[\aop(\psi),\aop(\phi)\right]=0
\label{A_acommute}
$$

This isn't the only requirement however: we need to make sure that the inner product comes out right. Evaluating the inner product between two one particle states on both sides of the corresponence \eqref{A_1part} gives

$$
\bra{\psi}\phi\rangle = \bra{\text{VAC}}\aop(\psi)\adop(\phi)\ket{\text{VAC}}.
$$

To be nonzero $\aop(\psi)\adop(\phi)\ket{\text{VAC}}$ must be proportional to the vacuum state, which means $\aop(\psi)$ removes a particle from the system: it is an annihilation operator. To get the right value for the inner product, we impose

$$
\left[\aop(\psi),\adop(\phi)\right] = \bra{\psi}\phi\rangle.
\label{A_ada}
$$

<p class="message">
Show that this also reproduces \eqref{A_perm}.
</p>

\eqref{A_adcommute}, \eqref{A_acommute} and \eqref{A_ada} constiute the bosonic __canonical commutation relations__. Via \eqref{A_ada}, this representation inherits the properties of the single particle Hilbert space.

### Choosing a Basis

By choosing a basis for the single particle states, we choose a basis for the creation and annihilation operators. Denote an orthonormal basis by $\varphi_\alpha(\br)$, with the corresponding creation and annihilation operators

$$
\adop(\varphi_\alpha)\equiv \adop_\alpha,\quad \aop(\varphi_\alpha)\equiv \aop_\alpha.
\label{A_CCRBasis}
$$

Then we have

$$
\begin{align}
\left[\aop_\alpha,\aop_\beta\right]=0,\quad \left[\adop_\alpha,\adop_\beta\right]=0,\quad \left[\aop_\alpha,\adop_\beta\right] = \delta_{\alpha\beta}.
\end{align}
$$

The same relations describe the ladder operators of a set of independent harmonic oscillators, revealing a deep connection between these two systems. The state $\Psi^{\text{S}}\_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}$ of \eqref{A_OrthoProd} -- a normalized state with $N_\alpha$ particles in state $\alpha$ -- may be written

$$
\Psi^{\text{S}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}(\br_1,\ldots,\br_N) \longleftrightarrow\ket{\mathbf{N}} \equiv \prod_\alpha \frac{\left(\adop\right)^{N_\alpha}}{\sqrt{N_\alpha!}}\ket{\text{VAC}}
$$

The combination $\Nop_{\alpha}\equiv \adop_{\alpha}\aop_{\alpha}$ is called the __number operator__ for state $\alpha$ for obvious reasons

$$
	\label{2nd_quant_NOp}
	\Nop_{\alpha}\ket{\mathbf{N}}=N_{\alpha}\ket{\mathbf{N}}.
$$

From \eqref{A_CCRBasis} it follows that

$$
\begin{align}
	\left[\aop_{\alpha},\Nop_{\alpha}\right]&=\aop_{\alpha}\nonumber\\
	\left[\adop_{\alpha},\Nop_{\alpha}\right]&=-\adop_{\alpha}.
  \label{2nd_quant_NaComm}
\end{align}
$$

You can think of the first of these as `count then destroy minus destroy then count', for example.



Position space, momentum space

### The Case of Fermions

## Representation of Operators

### Single Particle Operators

Suppose we now have some operator $A$ that acts on the single particle states. We denote the action on $N$ particle states as $\hat A$

$$
\hat A = \sum_{n=1}^N A_n,
$$

where the subscript denotes that the operator acts on the position label $\br_n$ of the $n^\text{th}$ particle. The matrix element of $\hat A$ between product states is

References
----------

{% bibliography --cited %}



_Possible pedagogical approach -- state conditions for CCR and CAR algebras and let students figure out correspondence_.

## Creation and Annihilation Operators
