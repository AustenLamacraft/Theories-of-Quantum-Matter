---
layout: page
title: More Second Quantization
author: Austen Lamacraft
chapter: 6
summary: Density correlations. Hanbury Brown and Twiss effect. Hartree--Fock theory.
published: true
---

<p class="message">
Bose or Fermi statistics gives rise to correlations in the positions of particles in a many body system, even in product states. These correlations affect the energy of many particle states, and provide the basis of the simplest approximate theories.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}

---

## Correlation Functions

In [Lecture 1]({{ site.baseurl }}/lectures/ManyBodyWavefunctions/) we introduced  the __pair distribution function__

$$
\rho_2(x_1,x_2) = N(N-1) \int dx_3\ldots dx_N \,\left|\Psi(x_1,x_2,\ldots,x_N)\right|^2,
\label{more_pdf}
$$

which measures the likelihood of finding a pair of particles at $x_1$ and $x_2$. We also saw that $\rho_2(x_1,x_2)$ could be related to the expectation of the product of the density operators at different points.

$$
\rho_2(x_1,x_2) = \bra{\Psi}\rho(x_1)\rho(x_2)\ket{\Psi} - \rho_1(x_1)\delta(x_1-x_2).
\label{more_rhorhonorm}
$$

$\rho_2(x,y)$ is the simplest example of a __correlation function__. Note also that the quantity $\bra{\Psi} \rho_q \rho_{-q} \ket{\Psi}$, used to quantify the crystalline order in a solid in [Lecture 3]({{ site.baseurl }}/lectures/ElastiChain/), is just the Fourier transform of $\rho_2(x_1,x_2)$. Higher correlation functions, involving products of more than two density operators, provide more detailed information on the distribution of the particles.

### Correlation Functions in Second Quantization

We evaluated $\rho_2(x,y)$ for the 1D Fermi gas:

$$
\rho_2(x_1,x_2) = \bar n^2\left[1 - \left(\frac{\sin[k_\text{F}(x_1-x_2)]}{k_\text{F}(x_1-x_2)}\right)^2\right].
$$

Let's see how to reproduce this result using second quantization. First note that the definition \eqref{more_pdf} can be written

$$
\rho_2(x_1,x_2) =\braket{\Psi}{\sum_{j\neq k}\delta(x_i-x_k)}{\Psi}.
\label{more_rho21stquant}
$$

We recognize this as the expectation value of a two particle operator. From what we learnt last time, we can immediately write down the second quantized form

$$
\rho_2(x_1,x_2) =\braket{\Psi}{\pdop(x_1)\pdop(x_2)\pop(x_2)\pop(x_1)}{\Psi}.
\label{more_rho22ndquant}
$$

This differs from $\bra{\Psi}\rho(x_1)\rho(x_2)\ket{\Psi}$ by the ordering of operators. Using the canonical commutation relations for the fields gives the relation \eqref{more_rhorhonorm} for both bosons and fermions.

Operators in which all annihilation operators stand to the right of all creation operators are said to be __normal ordered__. Here, the normal ordering serves to ensure that a term with $j=k$ does not appear in \eqref{more_rho21stquant}. Two particle terms in the Hamiltonian are normal ordered for the same reason.

Now let's evaluate \eqref{more_rho22ndquant}. 

## The Hanbury Brown and Twiss Effect





## Hartree--Fock Theory

### The Hartree and Fock Potentials

### Hartree--Fock for the Electron Gas

### Stoner Criterion for Ferromagnetism

Stoner theory (see Nazarov for discussion )
Discuss fermionic energies in HF approx
