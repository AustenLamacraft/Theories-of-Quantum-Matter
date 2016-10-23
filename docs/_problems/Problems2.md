---
layout: page
title: Problem Set 2
author: Austen Lamacraft
chapter: 1
summary: Second Quantization; Lattice models; Bose gas
---

## Contents
{:.no_toc}

2. Toc
{:toc}

---

## $N$ Particle Hong--Ou--Mandel

_[TP2, 2015]_ Let's reconsider the beam splitter discussed in [Lecture 1]({{ site.baseurl }}/lectures/ManyBodyWavefunctions/).

$\adop_i$, $\aop_i$ ($i=1,2$) create and destroy particles in the incoming states, and $\bdop_i$, $\bop_i$ do the same for the outgoing states. The creation operators are related by the $S$-matrix

$$
\begin{pmatrix}
	\bdop_1\\
	\bdop_2
\end{pmatrix} =  \frac{1}{\sqrt{2}} \begin{pmatrix}
	1 & 1\\
	1 & -1
\end{pmatrix}
\begin{pmatrix}
	\adop_1\\
	\adop_2
\end{pmatrix}.
$$

In the following parts, give all possible occupancies of outgoing states 1 and 2, _and their probabilities_. The statistics of the particles are given in square brackets. Note that the states are not necessarily normalized.

1. The initial state is $\adop_1\adop_2\ket{\text{VAC}}$ [Fermions].
2. The initial state is $\adop_1\adop_2\ket{\text{VAC}}$ [Bosons].
3. The initial state is $(\adop_1)^N(\adop_2)^N\ket{\text{VAC}}$ [Bosons].
4. The initial state is $\exp(\alpha_1\adop_1+\alpha_2\adop_2)\ket{\text{VAC}}$ [Bosons].

How does the distribution in part 3 _look_? Try taking the limit of a large number of particles.

## Equation of Motion for Density

Find the Heisenberg equation of motion of the density operator $\rho(\br)=\pdop(\br)\pop(\br)$ with the Hamiltonian

$$
H = \int \frac{1}{2m}\nabla\pdop\cdot\nabla\pop d\br.
$$

Interpret the result. Is the result changed if we introduce an interaction of the form

$$
H_\text{int} = \frac{1}{2}\int d\br_1 d\br_2\, V(\br_1-\br_2)\pdop(\br_1)\pdop(\br_2)\pop(\br_2)\pop(\br_1)?
$$

## Mean Field for Bose--Hubbard

For the Bose--Hubbard model, let's try a variational wavefunction of the form


$$
\left[\prod_{i}\left(\sum_{n}c_{n}\frac{(\adop_{i})^{n}}{\sqrt{n!}}\right) \right]|\text{VAC}\rangle\qquad \sum_{n}|c_{n}|^{2}=1
$$

The N$^{\text{th}}$ Mott states has a fixed integer number of bosons per site i.e. $c_{N}=1$ with all other coefficients zero. We identify the superfluid phase with the region where more than one $c_n$ is nonzero, meaning that the bosons can move around.

1. Find the expectation value of $\cH_\mu = H-\mu N$ using the above wavefunction.

2. To find the boundary, use a self-consistent scheme. First assume that $\langle \aop_{i}\rangle$ is small. Then use perturbation theory in this quantity to see how the $c_{n}$ change to first order. Next calculate the value of $\langle \aop_{i}\rangle$ that results. The gives an equation with $\langle \aop_{i}\rangle$ on both sides, which can then be cancelled to give an equation determining the boundary between the phases. Plot the boundary as a function of $t/U$ and $\mu/U$. Does it agree with the boundaries found in the lectures when $t/U$ is small?


## Bose--Hubbard With Spin

Consider the Bose--Hubbard model _with spin_

$$
H = -t \sum_{\substack{\langle j\,k\rangle\\ s=\uparrow,\downarrow}}  \left[\adop_{j,s}\aop_{k,s}+\adop_{k,s}\aop_{j,s}\right]  + \frac{U}{2}\sum_j \Nop_j(\Nop_j-1),
$$

where $\Nop_j = \Nop_{j,\uparrow}+\Nop_{j,\downarrow}$. If we have a $\nu=1$ Mott state, how does the behaviour at $t/U\ll 1$ differ from the Fermi Hubbard case?
