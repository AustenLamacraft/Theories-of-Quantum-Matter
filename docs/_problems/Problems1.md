---
layout: page
title: Problem Set 1
author: Austen Lamacraft
chapter: 0
summary: Many body wavefunctions; Lieb-Liniger; Collective excitations; Spin chains,
---

## Contents
{:.no_toc}

1. Toc
{:toc}

---

## Fermions and Bosons at Finite Temperature

Density matrix and correlations

## Impenetrable Impurity in a Fermi Gas

Fluctuations of impurity?

## Sutherland Model

Show that

$$
\Psi(x_1,\ldots, x_N)= \prod_{j<k}\left(\sin\left[\frac{\pi(x_j-x_k)}{L}\right]\right)^\lambda
$$

is an eigenstate -- in fact it's the ground state -- of the __Sutherland model__

$$
H = -\frac{1}{2}\sum_{j=1}^N \frac{\partial^2}{\partial x_j^2} + \frac{\lambda(\lambda-1)\pi^2}{4L^2}\sum_{j<k}
\sin^{-2}\left(\frac{\pi[x_j-x_k]}{L}\right).
$$

with periodic boundary conditions $\Psi(x_1,\ldots x_j+L,\ldots x_M)=\Psi(x_1,\ldots x_j,\ldots x_M)$. Find the energy.


## Density Matrix of the Filled LLL of Fermions

In the lecture we found the density of lowest Landau level filled with $N$ fermions

$$
\rho_1(z,\bar z) = \frac{e^{-|z|^2/2}}{2\pi}\sum_{n=0}^{N-1} \frac{\left|z\right|^{2n}}{2^n n!} = \frac{1}{2\pi} \frac{\Gamma(N,|z|^2/2)}{(N-1)!}.
\label{many_LLLdensity}
$$

Find the density matrix, and investigate its behaviour on the edge of the droplet (where $\abs{z}\sim \sqrt{2N}$) in the large $N$ limit.

## Holes in the $\nu=1$ State

The harmonic potential, projected into the LLL, has the form

$$
V_\text{harm}\longrightarrow v\partial_z z =  v\left(1+z \partial_z\right).
\label{many_HarmonicProject}
$$

Show how to resolve the quasihole state

$$
\Psi_\text{hole}(z_1,\ldots, z_N|Z) = \prod_j (Z-z_j)\Psi_{m=1}(z_1,\ldots, z_N).
$$

into a superposition of eigenstates of $V_\text{harm}$, describing the occupation numbers of these eigenstates.


## Normal Modes in General

Consider the more general Hamiltonian

$$
H = \sum_{j=1}^N \frac{p_j^2}{2m} + \sum_{j<k} V(x_j-x_k) .
$$

1. Impose periodic boundary conditions and find normal modes for the oscillation about the equilibrium state -- a regular arrangement of masses.

2. Expand $H$ to quadratic order in the deviations from equilibrium and express the Hamiltonian in terms of oscillator variables.

3. Expand to _cubic_ order and express the cubic parts in terms of oscillator variables. If we considered this part of the Hamiltonian as a perturbation in time dependent perturbation theory, what transitions could occur?


## Fluctuations in a Finite Chain

Investigate the behaviour of $\bra{0} u_j^2\ket{0}$ in a chain of length $N$. What happens as $N\to\infty$?

## The 2D Elastic Solid

Solve the 2D harmonic solid, defined by

<a name="2dSolid"></a>
![]({{ site.baseurl }}/assets/2dSolid.png)

__NOTE__: You will need to assume that the equilibrium length of the springs is zero. If not, your solid will not be 'solid', in that even infinitely stiff bars connecting the atoms will not give a rigid structure because they are free to shear layer by layer:

<a name="isostatic"></a>
![]({{ site.baseurl }}/assets/isostatic.png)

## Thermal Displacement in 2D

Show that the ground state expectation $\bra{0} \mathbf{u}_{j,k}^2\ket{0}$ is finite in 2D, but the finite temperature expectation diverges as $N\to\infty$.

## Anisotropic Heisenberg Model

Discuss the spin wave spectrum of the _aniotropic_ Heisenberg chain

$$
H = \sum_j\left[J_\parallel s^z_j s^z_{j+1} + \frac{J_\perp}{2}\left(s^+_js^-_{j+1}+s^-_js^+_{j+1}\right)\right],
$$

for both the ferromagnetic $J<0$ and antiferromagnetic $J>0$ cases.

## From Schwinger Bosons to Holstein--Primakoff

1. If we have $N$ bosons with $\left[\aop_j,\adop_k\right]=\delta_{jk}$, show that
  $$
  \left[\hat A, \hat B\right] = \widehat{\left[A,B\right]}
  $$
  where $\hat A = \adop_j A_{jk} \aop_k$ (summation implied). The commutation relations are 'copied' to the second quantized operators (or if you prefer, they form a representation of the Lie algebra of the matrices). This is apparently called the [Jordan map](https://en.wikipedia.org/wiki/Jordan_map).

2. Applying this to the operators $\frac{\boldsymbol{\sigma}}{2}$ gives, with two bosons $\aop$ and $\bop$
  $$
  \begin{align}
  S^x &= \frac{1}{2}\left(\adop\bop+\bdop\aop\right)\nonumber\\
  S^y &= \frac{i}{2}\left(-\adop\bop+\bdop\aop\right)\nonumber\\
  S^z &= \frac{1}{2}\left(\adop\aop-\bdop\bop\right).
  \label{schwinger}
  \end{align}
  $$
  This is a method for representing spins called __Schwinger bosons__. Identify which states $\ket{N_a}_a\ket{N_b}_b$ of the oscillators correspond to the states of a spin $s$.

3. By considering the action of \eqref{schwinger} on the oscillator states corresponding to spin $s$, show that one can write their effect in terms of a _single_ oscillator, and that this gives the Holstein--Primakoff representation.

## Spin Waves from Bogoliubov Transformation

1. After our $\pi$ rotation of every other spin, the Hamiltonian for the antiferromagnetic chain is
  $$
  \begin{align}
  H = -J \sum_{j=1}^N \left[s^x_j s^x_{j+1} - s^y_j s^y_{j+1} + s^z_j s^z_{j+1}\right].
  \end{align}
  $$
  Substitute directly the Holstein--Primakoff representation in terms of $\aop_j$ and $\adop_j$, without introducing $x_j$ and $p_j$. You should find terms of the form $\aop_j\aop_{j+1}$ and $\adop_j\adop_{j+1}$, among others.

2. Write the Hamiltonian in terms of the Fourier representation
  $$
  \begin{align}
  \aop_j = \frac{1}{\sqrt{N}}\sum_n e^{i\eta_n j} \aop_j,\quad \adop_j = \frac{1}{\sqrt{N}}\sum_n e^{-i\eta_n j} \adop_n.
  \end{align}
  $$
  Your answer should involve terms with $\aop_n\aop_{-n}$ and $\adop_{n}\adop_{-n}$.

3. Check that the __Bogoliubov transformation__
  $$
  \begin{align}
  \adop_n \longrightarrow \cosh\theta_n \adop_n +\sinh\theta_n \aop_{-n}\\
  \aop_n \longrightarrow \cosh\theta_n \aop_n +\sinh\theta_n \adop_{-n}
  \end{align}
  $$
  preserves the commutation relations of the bosons. Choose $\theta_n$ to eliminate the $\aop_n\aop_{-n}$ and $\adop_{n}\adop_{-n}$ terms from the Hamiltonian. Your answer should describe a system of bosons with the dispersion we found in the lecture.
