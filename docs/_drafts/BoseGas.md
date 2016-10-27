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

Our first attack on the problem is variational. It's very easy to come up with a variational wavefunction for the ground state of a Bose gas: put all the particles in the same single particle state!

$$
\Psi(\br_1,\ldots \br_N) = \prod_{j=1}^N \varphi_0(\br_i)= \frac{1}{\sqrt{N!}}\left(\adop(\varphi_0)\right)^N\ket{\text{VAC}}.
\label{bose_GPW}
$$

A state with a macroscopic number of particles in a single particle state is known as a __Bose condensate__. You have probably studied the statistical mechanics of an ideal Bose gas before: the main feature is a __condensation temperature__ below which macroscopic occupation occurs.

We know that if we have a noninteracting Hamiltonian

$$
H = \sum\left[-\frac{\nabla_i^2}{2m} + V(\br_i)\right],
$$

then the ground state has exactly the form \eqref{bose_GPW}, with $\varphi_0(\br)$ the ground state of the single particle Hamiltonian. After adding interactions to the Hamiltonian, in the form

$$
H_\text{int.} = \sum_{j<k} U(\br_j-\br_k) = \frac{1}{2}\int d\br_1 d\br_2\, U(\br_1-\br_2)\pdop(\br_1)\pdop(\br_2)\pop(\br_2)\pop(\br_1).
$$

it is no longer true that the exact ground state has the form \eqref{bose_GPW}, but we can treat $\varphi_0(\br)$ as a variational function that we must find. This leads to the __Gross--Pitaevskii equation__.

### Gross--Pitaevskii Equation

From now on we will take a model of short-ranged interactions for simplicity

$$
U(\br-\br') = U_0\delta(\br-\br')
$$

To implement the variational calculation we need to find

$$
\langle E \rangle = \frac{\braket{\Psi}{H}{\Psi}}{\inner{\Psi}{\Psi}}
$$

In fact, it turns out to be more convenient to minimize $\braket{\Psi}{H}{\Psi}$, using a Lagrange multiplier to fix the normalization. We have

$$
\begin{align}
\braket{\Psi}{H}{\Psi}=N \int d\br \left[\frac{1}{2m}|\nabla\varphi_0|^2+V(\br)|\varphi_0(\br)|^2
\right]\\
+\frac{1}{2}N(N-1)U_0\int d\br |\varphi_0(\br)|^4.
\label{bose_energy}
\end{align}
$$

For large $N$, we can neglect the difference between $N$ and $N+1$. Now we want to extremize this functional with respect to $\varphi_0(\br)$, keeping $\varphi_{0}(\br)$ normalized. To do this we introduce a Lagrange multiplier $\mu N$ (the factor of $N$ will become clear shortly) and extremize the functional

$$
\braket{\Psi}{H}{\Psi} - \mu N \int d\br |\varphi_{0}(\br)|^{2}.
$$

To find the extremum requires a standard application of the calculus of variations, yielding the equation

$$
	\left[-\frac{1}{2m}\nabla^2-\mu+V(\br)+NU_0|\varphi_0(\br)|^2\right]\varphi_0(\br)=0.
  \label{bose_static_PreGPEqn}
$$

It's convenient to deal with the stray factor of $N$ in \eqref{bose_static_PreGPEqn} by defining $\varphi(\br)\equiv\sqrt{N}\varphi_{0}(\br)$. $\varphi(\br)$ is known as the __condensate wavefunction__ or __order parameter__. Later we will give a more general definition that does not depend on the above variational approximation. We have thus obtained the __Gross--Pitaevskii equation__

$$
\left[-\frac{1}{2m}\nabla^2-\mu+V(\br)+U_0|\varphi(\br)|^2\right]\varphi(\br)=0.
$$

It remains to fix the Lagrange multiplier $\mu$. This is done by demanding that $\int d\br\,\abs{\varphi(\br)}^{2}=N$. Since $\braket{\Psi}{H}{\Psi}- \mu \int d\br \abs{\varphi(\br)}^{2}=\braket{\Psi}{H-\mu \mathsf{N}}{\Psi}$ was extremized under general variations, including those that changed $N$, we must have

$$
	\label{bose_static_GPmu}
	\mu=\frac{\partial\braket{\Psi}{H}{\Psi}}{\partial N},
$$

so that $\mu$ is identified with the chemical potential.

A fundamental effect of the nonlinearity of the GP equation is that there exists a length scale set by the
typical value of $|\varphi(\br)|^2\sim \bar\rho$ and the interaction strength

$$
\xi\equiv \frac{1}{\sqrt{2m\bar\rho U_0}}
$$

This __healing length__ determines the scale over which  $\varphi(\br)$ is disturbed by the introduction
of a localized potential of scale $\ll \xi$. It is a fundamental length scale in the system.

<p class="message">
Show that near a hard wall, where the condensate wavefunction goes to zero, $\varphi(\br)$ is given by

$$
  \varphi(x)=\varphi_{\infty}\tanh \frac{x}{\sqrt{2}\xi}
$$

where $x$ is the distance from the wall, and $\varphi_{\infty}=\sqrt{n_{\infty}}$ is fixed by the density of the condensate far from the wall.</p>

### Some Observables

With the ansatz \eqref{bose_GPW} for the wavefunction, we can obtain various observables without
difficulty. The density and current density are

$$
\begin{align}
\rho(\br)&=|\varphi(\br)|^2,\\
\mathbf{j}(\br)&=-\frac{i}{2m}\left[\varphi^{*}(\br)\left(\nabla\varphi(\br)\right)-\left(\nabla\varphi^{*}(\br)\right)\varphi(\br)\right]
\end{align}
$$

Alternatively, one may write this is terms of the velocity field of the gas, using $\mathbf{j}=\rho \mathbf{v}$, and the decomposition of $\varphi(\br)$ into magnitude and phase

$$
	\varphi(\br)=\sqrt{\rho(\br)}e^{i\theta(\br)}.
$$

We thus find the __superfluid velocity__

$$
	\mathbf{v}_{s}\equiv\frac{1}{m}\nabla\theta.
  \label{bose_vs}
$$

The name is to distinguish this contribution from that arising from thermal excitations. For the moment we are considering zero temperature, so this is all there is.

The usefulness of the Gross--Pitaevskii equations lies in its ability to describe spatially nonuniform situations. Often, nonuniformity is imposed by an external potential, but there is an important class of configurations that are stable -- or metastable -- for _topological_ reasons.

### Example: Vortex

Since \eqref{bose_vs} tells us that the superfluid velocity is a gradient of something, we may expect it to be _irrotational_

$$
\nabla\times \mathbf{v}_s = 0,
$$

or equivalently to have vanishing _circulation_

$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=0
$$

around any closed loop. However, it is possible for the phase of the wavefunction to increase by a multiple of $2\pi$ around a closed loop, which still gives a single-valued condensate wavefunction since $\varphi(\br)=\sqrt{\rho(\br)}e^{i\theta(\br)}$. Thus in general the circulation

$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=\frac{2\pi \ell}{m},\quad \ell\in\mathbb{Z},
$$

which is known as the __Onsager--Feynmann quantization condition__. A localized configuration with finite circulation is called a __vortex__ in fluid dynamics, but in a normal fluid there is no reason for the vorticity to be quantized. Restoring Planck's constant just this once

$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=\frac{h\ell}{m},\quad \ell\in\mathbb{Z},
$$

shows that this is a truly _quantum_ phenomenon.

A non-zero winding of the phase requires that $\rho(\br)$ vanishes at a point (in two dimensions) or on a line (in three). Let's see how such configurations are described by the Gross--Pitaevskii theory.

We are going to look for 2D solutions where the phase winds $\ell$ times as we encircle the origin

$$
\varphi(r,\theta)\xrightarrow{r\to\infty} \sqrt{\bar\rho} e^{i\ell\theta}.
\label{bose_vortex}
$$

We parameterize the solution as $\varphi(r,\theta) = \sqrt{\bar\rho} f(r/\xi)e^{i\ell\theta}$, measuring distances in terms of the healing length. Substituting into the Gross--Pitaevskii equation gives an equation in $s\equiv r/\xi$.

$$
-f'' -\frac{f'}{s} + \frac{\ell^2}{s^2} - f +f^3 =0.
$$

We take $\mu = U_0\bar\rho$ to get the behaviour \eqref{bose_vortex} at infinity. Without finding the solution explicitly, we can say that $f(s)\sim s^\ell$ for small $s$, and $f(s\to\infty) \to 1$. The region of suppressed density, of characteristic size $\xi$, is called the __vortex core__. In three dimensions, the vortex core is a line.

We can find the energy of the vortex state by substituting the solution back into the energy functional \eqref{bose_energy} to find the energy excess relative to uniform state of density $\bar\rho$

$$
\Delta E = \int d\br \left[\frac{\bar\rho^2}{2m\xi^2}(f')^2+\frac{U}{2}\bar\rho^2 \left(f^2-1\right)\right] + \frac{\bar\rho}{2m}\int d\br\, (\nabla\theta)^2.
$$

The first integral is finite, and arises purely from the departure of the density away from its bulk value. The second represents the contribution to the kinetic energy arising from the winding of the vortex's phase. Since we have

$$
\nabla \theta = \frac{\ell}{r}\hat{\mathbf{e}}_\theta,
$$

this contribution to the energy is _logarithmically divergent_.

$$
\Delta E = \text{const.} + \frac{\pi\bar\rho \ell^2}{m}\log\left(\frac{L}{\xi}\right).
$$

There is far-reaching analogy between the superfluid velocity fields of vortices and the magnetostatics of current-carrying wires,

Vortices | Magnetostatics
--- | ---
Vortex cores | Wires
Superfluid velocity $\mathbf{v}_s$ | Magnetic field, $\mathbf{B}$
Kinetic Energy | Magnetostatic Energy

Vortices with $\abs{\ell}>1$ are generally unstable, and will break into multiple vortices of winding $\ell=\pm 1$. Like vortices repel each other, and can form spectacular __vortex lattices__, akin to crystals.

<a name="3dLattices"></a>
![]({{ site.baseurl }}/assets/3dLattices.jpg)
_Vortex lattice in a Bose--Einstein condensate of Sodium atoms. Source: [Ketterle group, MIT](http://cua.mit.edu/ketterle_group/)._

Vortices are one manifestation of the phenomenon of __superfluidity__: persistent flow without resistance. The true ground state of the system does not have such flows, of course, so these flows are only _metastable_ (as long as rotational symmetry is broken, so that angular momentum is not conserved). In the case of the vortex, it can only decay by its core leaving the system. An even simpler example is provided by currents flowing in a ring, a situation studied in [Problem Set 2]({{ site.baseurl }}/problems/Problems2/), which illustrates the important role played by repulsive interactions.

## Bogoliubov Theory

How can we improve upon the Gross--Pitaevskii approximation? From now on we focus on a uniform condensate with no external potential $V(\br)$, in which case the condensate wavefunction is just a constant $\varphi(\br)=\sqrt{n}$. As usual we work in a plane wave basis, where the Hamiltonian takes the form

$$
H =\sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk + \overbrace{\frac{U_0}{2}\sum_{\bk_1+\bk_2=\bk_3+\bk_4} \adop_{\bk_1}\adop_{\bk_2}\aop_{\bk_3}\aop_{\bk_4}}^{\equiv H_\text{int}},
$$

with $\epsilon(\bk)=\bk^2/2m$. The Gross--Pitaevskii approximation to the ground state is

$$
\ket{\Psi_\text{GP}} = \frac{1}{\sqrt{N!}}\left(\adop_0\right)^N\ket{\text{VAC}}.
$$

When $H_\text{int}$ acts on this state, the only terms that contribute are those with $\aop_{\bk_3}=\aop_{\bk_4}=0$

$$
H_\text{int}\ket{\Psi_\text{GP}} =  \frac{U_0}{2}\sum_{\bk} \adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0}\ket{\Psi_\text{GP}}.
$$

Thus, if we want a better wavefunction, we are going to have to add some $(\bk, -\bk)$ pairs!

When interactions are weak, we expect that the true ground state is close to $\ket{\Psi_\text{GP}}$, so that most of the particles remain in the zero momentum state, with relatively few pairs created. Remembering that

$$
\aop\ket{N} = \sqrt{N}\ket{N-1},\quad \adop\ket{N} = \sqrt{N+1}\ket{N+1},
\eqref{bose_aN}
$$

we see that a term in the Hamiltonian with $\aop_0$ or $\adop_0$ is going to be more important -- on account of the large occupancy of $\bk=0$ -- than a term without. For this reason we divide up the interaction Hamiltonian according to the number of occurrences of these operators

$$
\begin{align}
H_\text{int} = \frac{U_0}{2}\adop_0\adop_0\aop_0\aop_0 + \frac{U_0}{2}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+4\adop_\bk\adop_0\aop_0\aop_\bk\right]\\\nonumber
+U_0\sum_{\substack{\bk_1=\bk_2+\bk_3\\ \bk_{1,2,3}\neq 0}}\left[\adop_{\bk_2}\adop_{\bk_2}\aop_{\bk_1}\aop_0 +\adop_0\adop_{\bk_1}\aop_{\bk_2}\aop_{\bk_3}\right]+\frac{U_0}{2}\sum_{\substack{\bk_1+\bk_2=\bk_3+\bk_4\\ \bk_{1,2,3,4}\neq 0}} \adop_{\bk_1}\adop_{\bk_2}\aop_{\bk_3}\aop_{\bk_4}.
\end{align}
$$

The Gross--Pitaevskii approximation corresponds to the first term. We are now going to keep the second term, and neglect the third and fourth. Thus we study the Hamiltonian

$$
H_\text{pair} = \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2}\adop_0\adop_0\aop_0\aop_0 + \frac{U_0}{2}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+4\adop_\bk\adop_0\aop_0\aop_\bk\right].
$$

Even with this drastic simplification it's not so easy to solve this problem. Note, however, that the only terms that change the occupancy of the $\bk=0$ state are $\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0}$ and $\adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}$.

However, noting \eqref{bose_aN} above, we can say that since the occupancy of the $\bk=0$ state is large

 To answer this question,

Landau criterion

### Discussion: What's Wrong With Perturbation Theory?

General definitions of BEC, order parameter, and superfluidity..

References
----------

{% bibliography --cited %}
