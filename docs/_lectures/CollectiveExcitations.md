---
layout: page
title: Collective Excitations
author: Austen Lamacraft
chapter: 3
summary: Quantizing a chain; Ground state wavefunction and displacement fluctuations; Feynman–Bijl formula as variational wavefunction.
---

> In this lecture we discuss a very simple many body system in which particles are coupled by Hooke's Law springs. Nevertheless, the quantization of this system has a lot to teach us about the appearance of __collective excitations__. Introducing anharmonicity causes these excitations to interact.

## Contents
{:.no_toc}

* Toc
{:toc}

---

# Quantizing an Elastic Chain

We study a chain of equal masses connected by springs, moving only in one dimension, along the chain. The Hamiltonian is

\begin{equation}
H = \sum_{j=1}^N \left[\frac{p_j^2}{2m} + \frac{k}{2} (x_j-x_{j+1})^2 \right].
\end{equation}

We identify $x_j=x_{N+j}$, corresponding to periodic boundary conditions. As usual $[x_i,p_j]=i\delta_{ij}$. To orient ourselves, we solve the classical version of the problem.

## The Classical System

You've seen this before. The equations of motion are

\begin{equation}
m \ddot x_j = k(x_{j-1} + x_{j+1} - 2x_j).
\end{equation}

We look for oscillatory solutions with time dependence $x_j(t) = x_j e^{-i\omega t}$, arriving at the matrix eigenvalue problem

\begin{equation}
-\omega^2 \begin{pmatrix}
x_1 \\
x_2 \\
\cdots \\
x_N
\end{pmatrix} =
\end{equation}

Matrices of this type are called [_circulant_ matrices](https://en.wikipedia.org/wiki/Circulant_matrix), and arise here because of the translational invariance of the system (including the periodic boundary conditions). Their eigenvectors are given by plane waves $x_j = z_n^j$, where $z_n$ is one of the $N^\text{th}$ roots of unity i.e. $z^N = 1$ or

\begin{equation}
z_n = \exp\left(\frac{2\pi i n}{N}\right),\qquad n = 0,\ldots, N-1.
\end{equation}

In fact, to make things a bit more symmetrical, let's take $N$ to be odd and index the $z_n$ using both positive and negative values of $n$

\begin{equation}
z_n = \exp\left(\frac{2\pi i n}{N}\right),\qquad n = -(N-1)/2,\ldots, (N-1)/2.
\end{equation}

We'll write $k_n\equiv \frac{2\pi n}{N}$, so that the eigenstates have the form $x_j=\exp(ik_n j)$. Substitution into the equation of motion yields the dispersion relation

\begin{equation}
\omega_n^2 = \frac{2k}{m}\left(1-\cos k_n\right),
\end{equation}

which is plotted in Figure... Notice that:

1. The frequency vanishes at $k\to 0$. This mode corresponds to translation of the system, for which there is no restoring force.
2. At small $k$ the dispersion is linear, as we would expect for sound waves.

A general motion of the system can be represented as a superposition of the normal modes

\begin{equation}\label{superposition}
x_j(t) = X + Vt +  \sum_{\substack{n\neq 0\\ |n|\leq (N-1)/2}} \left[q_n \exp\left(ik_n j - i\omega_n t\right) +\text{c.c.} \right]
\end{equation}

where $X$ and $V$ describe the motion of the centre of mass.

To make contact with quantum physics, let's look at this problem from the Hamiltonian perspective. Writing the Hamiltonian

rebuild


## Complex Amplitudes

Sticking with the classical problem, let's introduce complex coordinates to describe our two dimensional phase space.

## Fourier Review

# Ground State Wavefunction and Fluctuations

## A Reminder about the Quantum Harmonic Oscillator

First hint of special nature of 1D -- divergence of displacement.

# Excited States: Feynman--Bijl Formula

For the harmonic chain can show that acting with $\rho_q$ on the ground state gives an excited state

Is it useful to do this in lectures. Other non-trivial example is Fermi gas

# Nonlinearity and Interactions

This is a good excercise in writing things in Fourier modes
Could compute phonon lifetime using Golden Rule

Background on FPU
