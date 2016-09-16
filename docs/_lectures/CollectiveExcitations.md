---
layout: page
title: Collective Excitations
author: Austen Lamacraft
chapter: 3
summary: Quantizing a chain; Ground state wavefunction and displacement fluctuations; Anharmonicity as interaction
---

> In this lecture we discuss a very simple many body system in which particles are coupled by Hooke's Law springs. Nevertheless, the quantization of this system has a lot to teach us about the appearance of __collective excitations__. Introducing anharmonicity causes these excitations to interact.

## Contents
{:.no_toc}

* Toc
{:toc}

---

# Quantizing an Elastic Chain

We study a chain of equal masses connected by springs, moving only in one dimension, along the chain. The Hamiltonian is

$$\label{coll_Hchain}
H = \sum_{j=1}^N \left[\frac{p_j^2}{2m} + \frac{k}{2} (x_j-x_{j+1})^2 \right].
$$

We identify $x_j=x_{N+j}$, corresponding to periodic boundary conditions. As usual $[x_i,p_j]=i\delta_{ij}$. To orient ourselves, we solve the classical version of the problem.

## The Classical System

You've seen this before. The equations of motion are

$$
m \ddot x_j = k(x_{j-1} + x_{j+1} - 2x_j).
$$

We look for oscillatory solutions with time dependence $x_j(t) = x_j e^{-i\omega t}$, arriving at the matrix eigenvalue problem

$$
-\omega^2 \begin{pmatrix}
x_1 \\
x_2 \\
\cdots \\
x_{N-1}\\
x_N
\end{pmatrix} =
\frac{k}{m}
\begin{pmatrix}
-2 & 1 & 0 & \cdots & 1 \\
1 & -2 & 1 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots & \cdots \\
0 & \cdot & 1 & -2 & 1\\
1 & 0 & \cdots & 1 & -2
\end{pmatrix}
\begin{pmatrix}
x_1 \\
x_2 \\
\cdots \\
x_{N-1}\\
x_N
\end{pmatrix}
\$$

Matrices of this type are called [_circulant_ matrices](https://en.wikipedia.org/wiki/Circulant_matrix), and arise here because of the translational invariance of the system (including the periodic boundary conditions). Their eigenvectors are given by plane waves $x_j = (z_n)^j$, where $z_n$ is one of the $N^\text{th}$ roots of unity i.e. $z^N = 1$ or

$$
z_n = \exp\left(\frac{2\pi i n}{N}\right),\qquad n = 0,\ldots, N-1.
$$

In fact, to make things a bit more symmetrical, let's take $N$ to be odd and index the $z_n$ using both positive and negative values of $n$

$$
z_n = \exp\left(\frac{2\pi i n}{N}\right),\qquad n = -(N-1)/2,\ldots, (N-1)/2.
$$

We'll write $q_n\equiv \frac{2\pi n}{N}$, so that the eigenstates have the form $x_j=\exp(iq_n j)$. Substitution into the equation of motion yields the dispersion relation

$$
\omega_n^2 = \frac{2k}{m}\left(1-\cos q_n\right),
\label{coll_Dispersion}
$$

which is plotted in Figure... Notice that:

1. The frequency vanishes at $k\to 0$. This mode corresponds to translation of the system, for which there is no restoring force.
2. At small $k$ the dispersion is linear, as we would expect for sound waves.

A general motion of the system can be represented as a superposition of the normal modes

$$
x_j(t) = \frac{1}{\sqrt{N}}\sum_{|n| \leq (N-1)/2} q_n(t) e^{iq_n j},
$$

together with the condition $q_{-n}=q^*_n$ on the complex amplitudes to ensure that $x_j$ is real. The amplitudes $q_n(t)$ have time dependence

$$
q_n(t) = \alpha_n e^{-i\omega_n t} + \beta_n e^{i\omega_n t}
$$

for $n\neq 0$, while for $n=0$

$$
q_0(t) = \sqrt{N}(X+Vt)
$$

describes the motion of the centre of mass.

To make contact with quantum physics, let's look at this problem from the Hamiltonian perspective. If the $q_n$ are to be our canonical coordinates, then we should likewise write the momenta in terms of Fourier modes

$$
p_j(t) = \frac{1}{\sqrt{N}}\sum_{|n| \leq (N-1)/2} \pi_n(t) e^{-iq_n j},
$$

If $x_j$, $p_j$ are canonical variables with Poisson Bracket $\\{x_j, p_k\\}=\delta_{jk}$, then it follows that $\\{q_m,\pi_n\\}=\delta_{mn}$.

In terms of the Fourier modes the Hamiltonian \eqref{coll_Hchain} is

$$
 H = \sum_{|n| \leq (N-1)/2} \left[\frac{1}{2m}\pi_n \pi_{-n} + k  (1-\cos q_n) q_n q_{-n}\right].
 \label{coll_HDiag}
$$

This _almost_ looks like a system of harmonic oscillators. Bear in mind that the $q_n$ and $\pi_n$ are complex. One could, for example, split the amplitudes into their real and imaginary parts

$$
\begin{align}
q_n &= q_n' + i q_n'',\qquad q_{-n} = q_n' - i q_n''\\
\pi_n &= \pi_n' + i \pi_n'',\qquad \pi_{-n} = \pi_n' - i \pi_n'',\qquad n\geq 0.
\label{coll_RandI}
\end{align}
$$

The Hamiltonian would then become $H=H' + H''$ with

$$
 H' = \sum_{0 < n \leq (N-1)/2} \left[\frac{1}{2m}\pi'_n \pi'_{n} + k  (1-\cos q_n) q'_n q'_{n}\right].
$$

and similarly for $H''$. By comparing with the standard form

$$
H_\text{SHO} = \frac{p^2}{2m} + \frac{1}{2}m\omega^2 x^2,
\label{coll_SHO}
$$

we can read off the dispersion relation \eqref{coll_Dispersion}. The decomposition \eqref{coll_RandI} amounts to working with the _real_ amplitudes of sine and cosine waves. Other options are possible.

## Complex Amplitudes

Sticking with the classical problem, let's introduce complex coordinates to describe the two dimensional phase space of a single oscillator

$$
a = \sqrt{\frac{m\omega}{2}}\left(x + \frac{i}{m\omega} p \right).
$$

$a$ and its conjugate satisfy $\\{a^{},a^*\\}=-i$. This definition is chosen so that the Hamiltonian takes the simple form

$$
H = \omega |a|^2.
$$

Hamilton's equations of motion are then

$$
\begin{align}
\dot a &= \{a, H \} = -i\omega\\
\dot a^* &= \{a^*, H \} = i\omega.
\end{align}
$$

with solution $a(t) = e^{-i\omega t} a(0)$ describing circular motion in the complex $a$ plane on a contour of fixed energy.

In the same way, we can introduce the coordinates

$$
\begin{align}
a_n &= \sqrt{\frac{m\omega_n}{2}}\left(q_n + \frac{i}{m\omega_n}\pi_{-n}\right)\\
a^*_n &= \sqrt{\frac{m\omega_n}{2}}\left(q_{-n} - \frac{i}{m\omega_n}\pi_{n}\right),\qquad n\neq 0.
\label{coll_adef}
\end{align}
$$

Remember that $q_n = q_{-n}^\*$ and $\pi_n = \pi_{-n}^\*$ in order that $x_j$ and $p_j$ are real. Note that $n=0$ is excluded because $\omega_0=0$. These coordinates satisfy

$$
\{a_m,a^{*}_n\}=\delta_{mn}
$$

Inverting the definition \eqref{coll_adef} gives

$$
\begin{align}
q_n &= \sqrt{\frac{1}{2m\omega_n}}\left(a_n + a_{-n}^*\right)\\
\pi_n &= -i\sqrt{\frac{m\omega_n}{2}}\left(a_{-n} - a_{n}^*\right),
\end{align}
$$

and inserting into the Hamiltonian \eqref{coll_HDiag} gives

$$
H = \frac{\pi_0^2}{2m}+\sum_{\substack{n\neq 0 \\ |n| \leq (N-1)/2}} \omega_n |a_n|^2,
$$

with the first term accounting for the (free) centre of mass.

## The Quantized Chain

In the quantum theory, the variables $\aop$, $\adop$ satisfy $\[\aop,\adop]=1$ and the Hamiltonian \eqref{coll_SHO} takes the form

$$
H = \frac{\omega}{2}\left(\adop\aop+\aop\adop\right).
$$

Let's remind ourselves how this formalism solves the problem of finding the eigenstates. The key observation is that

$$
\begin{align}
[\aop, H] &= \omega\aop,\\
[\adop, H] &= -\omega \adop.
\end{align}
$$

As a result, if $\ket{\psi}$ is an eigenstate of the Hamiltonian

$$
H \ket{\psi} = E \ket{\psi},
$$

then $\adop\ket{\psi}$ is an eigenstate with energy $E+\omega$

$$
H \adop \ket{\psi} = \adop H \ket{\psi} + [H, \adop] \ket{\psi} = \left(E+\omega\right)\ket{\psi}.
$$

Similarly $a\ket{\psi}$ is an eigenstate with energy $E-\omega$, unless $\ket{\psi}=\ket{0}$, the ground state, in which case we must have $\aop\ket{0}=0$.

As a result, all states can be written as

$$
\ket{n} = \frac{1}{\sqrt{n!}}\left(\adop\right)^N\ket{0}.
$$

The factor of $\frac{1}{\sqrt{n!}}$ normalizes the state. The ground state has energy $E_0=\omega/2$.

The quantization of the chain is then a piece of cake. We have a system of oscillator variables satisfying $[\aop_m,\adop_n]=\delta_{mn}$, and writing the Hamiltonian \eqref{coll_HDiag} in terms of these variables, paying attention to the order, gives

$$
H = \frac{\pi_0^2}{2m}+\sum_{\substack{n\neq 0 \\ |n| \leq (N-1)/2}} \frac{\omega_n}{2}\left(\adop_n\aop_n+\aop_n\adop_n\right).
$$

The ground state energy is

$$
E_0 = \frac{1}{2}\sum_{|n| \leq (N-1)/2} \omega_n 
$$

## Oscillator Quanta are Bosons!

A key moment in the birth of Quantum Field Theory was the realization that indistinguishable particles with Bose--Einstein statistics could be regarded as oscillator quanta


# Ground State Wavefunction and Fluctuations

The ground state wavefunction of a single oscillator is

$$
\psi_0(x) = \left(\frac{m\omega}{\pi}\right)^{1/4} \exp\left(m\omega x^2 /2\right)
$$

> A quick way to get this is to regard the condition $a\|0\rangle = 0$ as a first order differential equation and solve it.

For our system of oscillators we can write the ground state wavefunction as a function of the oscillator coordinates $q_n$

$$
\Psi_0(\{q_n\}) =
$$

First hint of special nature of 1D -- divergence of displacement.

# Finite temperature

# Excited States: Feynman--Bijl Formula

For the harmonic chain can show that acting with $\rho_q$ on the ground state gives an excited state

Is it useful to do this in lectures. Other non-trivial example is Fermi gas

# Nonlinearity and Interactions

## Fourier review

Discrete FT to Fourier series to Fourier transform.

This is a good excercise in writing things in Fourier modes
Could compute phonon lifetime using Golden Rule

Background on FPU
