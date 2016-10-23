---
layout: page
title: Bose Gas
author: Austen Lamacraft
chapter: 8
summary: Gross--Pitaevskii approximation. Superfluidity. Bogoliubov theory.
published: true
---

<p class="message">
The Lieb--Liniger model is an example of a gas of interacting bosons in the continuum. In this lecture we study Bose gases more generally, in situations where exact solutions are not available. You know that noninteracting bosons form a Bose condensate: we will see how weak interactions alter this picture, and make a connection to the phenomenon of <strong> superfluidity</strong>.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}

---

## The Gross--Pitaevskii Approximation

Our first attack on the problem is variational. It's very easy to come up with a variational wavefunction for the ground state of a Bose gas:

$$
\Psi(\br_1,\ldots \br_N) = \prod_{j=1}^N \varphi_0(\br_i)= \frac{1}{\sqrt{N!}}\left(\adop(\varphi_0)\right)^N\ket{\text{VAC}}.
\label{bose_GPW}
$$

All particles in the same single particle state! We know that if we have a noninteracting Hamiltonian

$$
H = \sum\left[-\frac{\nabla_i^2}{2m} + V(\br_i)\right],
$$

then the ground state has exactly the form \eqref{bose_GPW}, with $\varphi_0(\br)$ the ground state of the single particle Hamiltonian. After adding interactions to the Hamiltonian, in the form

$$
H_\text{int.} = \sum_{j<k} U(\br_j-\br_k) = \frac{1}{2}\int d\br_1 d\br_2\, U(\br_1-\br_2)\pdop(\br_1)\pdop(\br_2)\pop(\br_2)\pop(\br_1).
$$

it is no longer true that \eqref{bose_GPW} gives the form of the ground state, but we can treat $\varphi_0(\br)$ as a variational function that we must find. This leads to the __Gross--Pitaevskii equation__.

### Time-Independent GP Theory

From now on we will take a model of short-ranged interactions for simplicity

$$
U(\br-\br') = U_0\delta(\br-\br')
$$

To implement the variational calculation we need to find

$$
\langle E \rangle = \frac{\braket{\Psi}{H}{\Psi}}{\inner{\Psi}{\Psi}}
$$


Take short ranged interactions

Would be boring if we didn't have spatially nonuniform situations

### Time-dependent GP Theory


Changes

## Superfluidity

### Metastable Currents

## Bogoliubov Theory

### Discussion: What's Wrong With Perturbation Theory?

References
----------

{% bibliography --cited %}
