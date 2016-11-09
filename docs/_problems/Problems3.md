---
layout: page
title: Problem Set 3
author: Austen Lamacraft
chapter: 2
summary: Fermi gas; Superconductivity; Response and Correlation; Jellium.
---

## Contents
{:.no_toc}

3. Toc
{:toc}

---

## $N(\bk)$ in the Ground State

In second order perturbation theory, find the occupation number $N(\bk)=\braket{0}{\adop_{\bk,s}\aop_{\bk,s}}{0}$ in the ground state of the interacting Fermi gas. Compare with the quantity $z_\bk$ introduced in the lecture.

## Pair Correlations in the BCS State

As well as the average occupancy of a given momentum state we can consider the correlations between
the occupancy of different $\bp$ states

$$
C_{ss'}(\bp,\bp')\equiv\langle n_{\bp,s} n_{\bp',s'}\rangle-\langle n_{\bp,s}\rangle\langle n_{\bp',s'}
$$

Show that for the BCS state

$$
\begin{align}
C_{\uparrow\downarrow}(\bp_1,\bp_2)&=\delta_{\bp_1,-\bp_2}u_{\bp_1}^2v_{\bp_1}^2=\delta_
{\bp_1,-\bp_2}\frac{|\Delta|^2}{4E_{\bp_1}^2}\nonumber\\
C_{\uparrow\uparrow}(\bp_1,\bp_2)&=\delta_{\bp_1,\bp_2}\frac{|\Delta|^2}{4E_{\bp_1}^2}
\end{align}
$$

Interpret these two expressions.

## A Very Simple Model for Phonon Mediated Attraction

An optical phonon mode gives rise to an oscillating charge that couples to the electrons at a site. We model this by the Hamiltonian

$$
H = \frac{p^2}{2m}+\frac{1}{2}m\omega^2 x^2 + \alpha x\left(N_\uparrow+N_\downarrow\right),
$$

where $N_s=0,1$ are the number of electrons of spin $s$ at the site. Since $N_s$ is conserved you can solve the model exactly.

Next, introduce an oscillator at each site of a Fermi Hubbard model

$$
H = H_\text{Hubbard} + \sum_j \left[\frac{p_j^2}{2m}+\frac{1}{2}m\omega^2 x_j^2 + \alpha x_j\left(N_{j,\uparrow}+N_{j,\downarrow}\right)\right].
$$

If the energy $\omega$ of the oscillators is larger than other scales, you can use the technique from [Lecture 7]({{ site.baseurl }}/lectures/Lattice/) to derive an effective Hamiltonian. What form does this take?

The physics behind this mechanism is a very simple consequence of living in an elastic medium, and is not really a quantum effect at all. The fact that two heavy spheres on a stretched horizontal rubber sheet will roll towards each other is a nearly perfect analogy for this effect (as well as a very poor one for gravitational attraction in GR!).
