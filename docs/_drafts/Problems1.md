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

## Impurity in the Impenetrable Gas



## Yrast States of Rotating Gas

## Oddity of the Plasma analogy

We could define the potential of the background charge

## Evolution of the Laughlin state under harmonic confinement

## Density Matrix of the Filled LLL of Fermions

In the lecture we found the density of lowest Landau level filled with $N$ fermions

$$
\rho_1(z,\bar z) = \frac{e^{-|z|^2/2}}{2\pi}\sum_{n=0}^{N-1} \frac{\left|z\right|^{2n}}{2^n n!} = \frac{1}{2\pi} \frac{\Gamma(N,|z|^2/2)}{(N-1)!}.
\label{many_LLLdensity}
$$

Find the density matrix, and investigate its behaviour on the edge of the droplet ($\abs{z}\sim \sqrt{2N}$) in the large $N$ limit.

## Holes in the $\nu=1$ state

The harmonic potential, projected into the LLL, has the formed

$$
V_\text{harm}\longrightarrow v\partial_z z =  v\left(1+z \partial_z\right).
\label{many_HarmonicProject}
$$

Show how to resolve the quasihole state

$$
\Psi_\text{hole}(z_1,\ldots, z_N|Z) = \prod_j (Z-z_j)\Psi_{m=1}(z_1,\ldots, z_N).
$$

into a superposition of eigenstates of $V_\text{harm}$.

## Improving the plasma picture

Adding finite screening length by allowing for entropy...

## Ground state of the attractive Lieb--Liniger model

Show the explicit form of the ground state and demonstrate that this is of Bethe form, identifying the Bethe momenta in this case.

Relate to bright soliton -- captures leading order ground state energy (and mass, but that's easy)

## Density correlations in Lieb--Liniger

## Semiclassical limit of Type I and II modes

Present numerical (or analytical) evidence that in the weak coupling (small $\gamma$) limit the type I excitations coincide with the Bogoliubov modes and the type II excitations describe the solitons discussed in the midterm. For the calculation of the dispersion relation for solitons, see Section II of Phys. Rev. A 78, 053630 (2008).

## Peirels instability

## Diagonalize quadratic Hamiltonian for general two particle potential

## Quantize the 2D oscillator problem

## Optical phonons?

Double the size of the unit cell?

Model of a displacive phase transition

## Fluctuations of a mass in a finite chain

Investigate the behaviour of $\bra{0} u_j^2\ket{0}$ in a chain of length $N$. What happens as $N\to\infty$?

## Thermal displacement in 2D

Show that we get divergence of displacement in thermal equilibrium

## Excited States: Feynman--Bijl Formula

## Nonlinearity and Interactions

Introduce terminology of _free theory_

## From Schwinger Bosons to Holstein--Primakoff


Where does the Holstein--Primakoff representation come from?

[Jordan--Schwinger representation](https://en.wikipedia.org/wiki/Jordan_map)

## Hartree-Fock Energy of Magnons

## Spin Waves from Bogoliubov Transformation

Write the Heisenberg model in terms of $\aop_j$ $\adop_j$ operators...

## Majumdar--Ghosh

## Classical Spin Waves

Following Faddeev

## Spin wave calculation with anisotropy

## Proof of no LRO based on sum rules



## The Simple Symmetric Exclusion Process (SEP)

Show the relationship between generator and Heisenberg
