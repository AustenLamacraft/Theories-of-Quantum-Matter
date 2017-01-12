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

## HBT Correlations From an Optical Lattice

In {% cite Folling:2005aa %}, bosonic atoms were initially prepared in an optical lattice in a Mott state:

$$
\ket{\Psi}=\prod_{i} \adop_{i}\ket{\text{VAC}},
$$

where $\adop_{i}$ creates a particle localized at site $\br_{i}$ in the lattice, with (let's say) Gaussian wavefunction

$$
\varphi_{i}(\br)=\frac{1}{\left(\pi R^{2}\right)^{3/4}}\exp\left[-\frac{\left(\br-\br_{i}\right)^2}{2R^2}\right]
$$

<a name="folling"></a>
![]({{ site.baseurl }}/assets/FollingNoise.png)
_(a) raw image (b) density of an atomic cloud following expansion from a Mott state. (c) and (d) noise correlation signal extracted from the same image. From {% cite Folling:2005aa %}._

Show that the correlation function of momentum state occupancies is

$$
			\braket{\Psi}{:N(\bp)N(\bp'):}{\Psi}=\sum_{i,j}\tilde\varphi^{*}_{i}(\bp)\tilde\varphi^{}_{i}(\bp)\tilde\varphi^{*}_{j}(\bp')\tilde\varphi^{}_{j}(\bp')
+\tilde\varphi^{*}_{i}(\bp)\tilde\varphi^{}_{j}(\bp)\tilde\varphi^{*}_{j}(\bp')\tilde\varphi^{}_{i}(\bp').			
	$$

where $\tilde\varphi_{i}(\bp)$ is the Fourier transform of the spatial wavefunction, and $:(\cdots):$ denotes _normal ordering_ of the operators between the colons. Evaluate the Fourier transform and explain the structure of the noise correlations in the above data.


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

## Bose Gas with Attractive Interactions

1. Consider the 1D Gross--Pitaevskii equation describing the attractive Lieb--Liniger model

	$$
	-\frac{1}{2m}\varphi'' - \mu \varphi - \frac{|c|}{2}\abs{\varphi}^2\varphi = 0.
	$$

	Look for a solution on the infinite line with $\varphi(x\to\pm\infty) =0$ describing a localized 'blob' (properly called a __bright soliton__) containing $N$ bosons. Find the energy of this state. Compare with the ground state energy of the attractive gas you found in [Problem Set 1]({{ site.baseurl }}/problems/Problems1/).

2. The ground state wavefunction is

	$$
	\Psi(x_1,\ldots,x_N) = \prod_{j<k}\exp\left(-\frac{\abs{c}}{2}\abs{x_j-x_k}\right),\quad x_1<x_2<\cdots <x_N.
	$$

	Find the probability distribution of the separations $x_{j+1}-x_j$ in this state. Replacing each separation by its mean value, show that the resulting density profile coincides with that of the bright soliton.

## Persistent Currents Without Rotational Symmetry

A system of bosons moving on a ring of radius $R$ is described by the Hamiltonian $H=H_1+H_2$, where

$$
H_1 = \int_0^{2\pi} \left[\frac{\hbar^2}{2mR^2}\frac{d\pdop}{d\theta}\frac{d\pop}{d\theta} +V(\theta)\pdop\pop \right]d\theta
$$

is the single particle Hamiltonian, involving some potential $V(\theta)$, and

$$
H_2=\frac{U_0}{2}\int_0^{2\pi} \pdop\pdop\pop\pop\, d\theta
$$

describes interactions between the particles. $\pdop(\theta)$ and $\pop(\theta)$ satisfy

$$
	\begin{split}
		\left[\pop(\theta),\pdop(\theta')\right]=\delta(\theta-\theta')\\
		\left[\pop(\theta),\pop(\theta')\right]=\left[\pdop(\theta),\pdop(\theta')\right]=0
	\end{split}
$$


In the basis of angular momentum eigenstates

$$
\varphi_l(\theta) =\frac{e^{il\theta}}{\sqrt{2\pi }},\qquad l=0,\pm 1, \pm 2,\ldots
$$

$\pop(\theta)$ may be expressed

$$
	\pop(\theta)=\sum_{l=-\infty}^\infty \varphi_l(\theta)a_l,
$$

where $a_l$ annihilates a particle in state $l$. By considering _only_ states $l=0$ and $1$, show that the Hamiltonian takes the form

$$
\begin{align}
H_{\text{rot}}=\omega_c\left[\adop_1\aop_1-\adop_0\aop_0\right]+V_0\left[\adop_0\aop_1+\mathrm{h.c.}\right]\nonumber\\
+\frac{U_0}{4\pi}\left[\adop_0\adop_0\aop_0\aop_0+\adop_1\adop_1\aop_1\aop_1+4\adop_1
\adop_0\aop_0\aop_1\right]
\end{align}
$$

and identify $\omega_{c}$ and $V_{0}$.

Introduce the Gross--Pitaevskii wavefunction

$$
\left[\cos\frac{\chi}{2}e^{i\varphi/2}\adop_0+\sin\frac{\chi}{2}e^{-i\varphi/2}\adop_1\right]^N\ket{\text{VAC}},
$$

and show that:

1. The order parameter has a node for $\chi=\pi/2$. If $V_0$ is due to a localized potential, this node
		will coincide with the position of that potential.

2. The GP variational energy is (up to a constant, and ignoring terms lower order in $N$)

	$$
	E(\chi)/N=-\omega_c\cos\chi+V_0\sin\chi+\frac{nU_0}{2}\sin^2\chi,
	$$

	while the angular momentum is

	$$
	L(\chi)/N=\frac{1}{2}\left(1-\cos\chi\right).
	$$


3. A metastable minimum exists for $2U_0>V_0$ (assuming $U_0$ and $V _0$ are both much less
		than $\omega_c$). That is, for small enough deviations from perfect symmetry, metastable
		configurations are possible, and have their origin in the repulsive interactions. The point $\chi=\pi/2$ that
		corresponds to an order parameter with a node is then a maximum of the energy.


4. Finally, consider what would happen for Fock states of the form

	$$
		\frac{1}{\sqrt{N_{0}!N_{1}!}}\left(\adop_{0}\right)^{N_{0}}\left(\adop_{1}\right)^{N_{1}}\ket{\text{VAC}}.
	$$

	This situation --- macroscopic occupations of more than one single particle state --- is sometimes called a _fragmented_ condensate.

## Perturbation Theory for the Bose gas

1. Find an expression for the ground state energy of the Bose gas at second order in the interaction, and confirm the ultraviolet divergence found in the lectures. This can be 'cured' by recognizing that a real potential as a finite range, which cuts off the integral.

2. _[Harder]_. The expression for the _third order_ perturbative correction is

	$$
		E^{(3)}_{0} = \sum_{m,n\neq 0} \frac{\braket{0}{H_{\text{int}}}{m}\braket{m}{H_{\text{int}}}{n}\braket{n}{H_{\text{int}}}{0}}{\left(E^{(0)}_{m}-E^{(0)}_{0}\right)\left(E^{(0)}_{n}-E^{(0)}_{0}\right)}-\braket{0}{H_{\text{int}}}{0}\sum_{n\neq 0}\frac{|\braket{n}{H_{\text{int}}}{0}|^{2}}{\left(E^{(0)}_{0}-E^{(0)}_{n}\right)^{2}}.
		$$

	Show that this expression contains an _infrared_ divergence (i.e. at low momenta). This can't be fixed by appealing to the interaction potential, and is the reason we need Bogoliubov theory! See {% cite Brueckner:1957aa  %}.

## Bogoliubov as Unitary Transformation

Find an antihermitian generator $A$ that generates a Bogoliubov transformation, i.e.

$$
\exp(A) \aop_{\bk} \exp(-A)= \cosh\kappa_\bk \aop_\bk -\sinh\kappa_\bk \adop_{-\bk}.
$$

_Hint:_ expand in $\kappa_\bk$. Compare the action of this transformation on the vacuum state with the form of the Bogoliubov transformation given in the lecture.

## Condensate Depletion in One and Two Dimensions

1. Show that the condensate depletion in one dimension is logarithmically divergent in the length of the system, indicating a breakdown of Bogoliubov theory in the infinite length limit.

2. By assuming that the Bogoliubov modes have thermal occupations at finite temperature

	$$
	\langle\langle \bdop_\bp\bop_\bp\rangle\rangle = \frac{1}{\exp\left(\beta\omega(\bp)\right)-1}\equiv n_\text{B}(\omega(\bp)),
	$$

	Show that the depletion is logarithmically divergent in the system size in _two_ dimensions at finite temperature.

References
----------

{% bibliography --cited %}
