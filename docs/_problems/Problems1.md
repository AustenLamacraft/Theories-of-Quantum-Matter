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

## Sutherland Model

Show that

$$
\Psi(x_1,\ldots, x_N)= \prod_{j<k}\left(\sin\left[\frac{\pi(x_j-x_k)}{L}\right]\right)^\lambda
$$

is an eigenstate -- in fact it's the ground state -- of the __Sutherland model__

$$
H = -\frac{1}{2}\sum_{j=1}^N \frac{\partial^2}{\partial x_j^2} + \frac{\lambda(\lambda-1)}{4}\sum_{j<k}
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


## Ground State of the Attractive Lieb--Liniger Model

For _attractive_ interactions $c<0$ the ground state of $N$ bosons on the infinite line is

$$
\Psi(x_1,\ldots,x_N) = \prod_{j<k}\exp\left(-\frac{\abs{c}}{2}\abs{x_j-x_k}\right),\quad x_1<x_2<\cdots <x_N
$$

Show that this is a Bethe state, find the Bethe roots, and calculate the energy.


## Density Correlations in Lieb--Liniger

If $E_0(c)$ is the ground state energy of the Lieb--Liniger model as a function of $c$, show that

$$
\frac{dE_0}{dc} = \bra{\Psi_0}\sum_{j<k}\delta(x_j-x_k)\ket{\Psi_0},
$$

where $\ket{\Psi_0}$ is the ground state. By solving the Bethe equations numerically (see the [IPython notebook](https://github.com/AustenLamacraft/Theories-of-Quantum-Matter/blob/master/notebooks/BetheGroundState.ipynb)), find how the RHS varies with $c$, and interpret your results.

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


## Thermal Displacement in 2D

Show that $\bra{0} \mathbf{u}_{j,k}^2\ket{0}$ is finite in 2D, but diverges at finite temperature as $N\to\infty$.
