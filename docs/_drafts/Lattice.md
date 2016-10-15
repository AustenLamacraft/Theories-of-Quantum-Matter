---
layout: page
title: Lattice Models and Strong Correlation
author: Austen Lamacraft
chapter: 7
summary: Tight binding models. Hubbard models and the Mott transition. Superexchange.
published: true
---

## Contents
{:.no_toc}

* Toc
{:toc}

---

# Tight Binding Models



Matrix form. Solution by Fourier transformation. _circulant matrix_

# Bose Hubbard Model

## The Mott State

Getting at the phase boundaries for large $$U$$ by adding or removing a particle on top of the Mott state.

## The Superfluid State

## The Phase Diagram

# Fermi Hubbard Model

## $$U\to\infty$$ and Superexchange

On account of their being more than one species of particle, the $$U\to\infty$$ limit of the Fermi--Hubbard model is not as straightforward as in the Bose case we considered earlier (Note that we are free to consider more than one species of Boson).

Should be cautious, as in a large system the energy spectrum of the Heisenberg model will exceed the separation from doubly occupied sites.

### Discussion: two sites

How does the degeneracy get lifted?

### Effective Hamiltonian

### Schrieffer--Wolf Transformation

We are going to perform a unitary transformation on the Hamiltonian that eliminates the hopping term to lowest order. A unitary transformation can be _generated_ by an antihermitian operator, meaning that we write

$$
U = \exp(A)
$$

where $A^\dagger = -A^{}$. The transformed Hamiltonian is

$$
H\longrightarrow U^{}HU^\dagger = H + \left[A,H\right]+\cdots.
$$

Writing $H=H_t + H_U$, where $H_t$ is the hopping and $H_U$ the interaction, we require

$$
\left[A,H_U\right] = -H_t.
\label{lat_Aeq}
$$

Now we need to deduce the form of $A$. Since $H_t$ is a sum of terms that move particles by a single lattice site. Since $H_U$ doesn't move particles, $A$ must. So let's try the form

$$
A = \sum_j \alpha(\mathbf{N})\cdop_{j+1,s}\cop_{j,s} - \text{h.c.},
\label{lat_Aform}
$$  

where $\alpha(\mathbf{N})$ is a function of the site occupancies. Note the minus sign in \eqref{lat_Aform}, required for antihermiticity. Substituting into \eqref{lat_Aeq} gives the condition
