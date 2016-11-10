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
typical value of $|\varphi(\br)|^2\sim n$ and the interaction strength

$$
\xi\equiv \frac{1}{\sqrt{2m n U_0}}
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
\varphi(r,\theta)\xrightarrow{r\to\infty} \sqrt{n} e^{i\ell\theta}.
\label{bose_vortex}
$$

We parameterize the solution as $\varphi(r,\theta) = \sqrt{n} f(r/\xi)e^{i\ell\theta}$, measuring distances in terms of the healing length. Substituting into the Gross--Pitaevskii equation gives an equation in $s\equiv r/\xi$.

$$
-f'' -\frac{f'}{s} + \frac{\ell^2}{s^2} - f +f^3 =0.
$$

We take $\mu = U_0 n$ to get the behaviour \eqref{bose_vortex} at infinity. Without finding the solution explicitly, we can say that $f(s)\sim s^\ell$ for small $s$, and $f(s\to\infty) \to 1$. The region of suppressed density, of characteristic size $\xi$, is called the __vortex core__. In three dimensions, the vortex core is a line.

We can find the energy of the vortex state by substituting the solution back into the energy functional \eqref{bose_energy} to find the energy excess relative to uniform state of density $n$

$$
\Delta E = \int d\br \left[\frac{n^2}{2m\xi^2}(f')^2+\frac{U}{2}n^2 \left(f^2-1\right)\right] + \frac{n}{2m}\int d\br\, (\nabla\theta)^2.
$$

The first integral is finite, and arises purely from the departure of the density away from its bulk value. The second represents the contribution to the kinetic energy arising from the winding of the vortex's phase. Since we have

$$
\nabla \theta = \frac{\ell}{r}\hat{\mathbf{e}}_\theta,
$$

this contribution to the energy is _logarithmically divergent_.

$$
\Delta E = \text{const.} + \frac{\pi n \ell^2}{m}\log\left(\frac{L}{\xi}\right).
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
H =\sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk + \overbrace{\frac{U_0}{2V}\sum_{\bk_1+\bk_2=\bk_3+\bk_4} \adop_{\bk_1}\adop_{\bk_2}\aop_{\bk_3}\aop_{\bk_4}}^{\equiv H_\text{int}},
$$

with $\epsilon(\bk)=\bk^2/2m$, and $V$ the volume. The Gross--Pitaevskii approximation to the ground state is

$$
\ket{\Psi_\text{GP}} = \frac{1}{\sqrt{N!}}\left(\adop_0\right)^N\ket{\text{VAC}}.
$$

When $H_\text{int}$ acts on this state, the only terms that contribute are those with $\aop_{\bk_3}=\aop_{\bk_4}=0$

$$
H_\text{int}\ket{\Psi_\text{GP}} =  \frac{U_0}{2V}\sum_{\bk} \adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0}\ket{\Psi_\text{GP}}.
$$

Thus, if we want a better wavefunction, we are going to have to add some $(\bk, -\bk)$ pairs!

### Bogoliubov Hamiltonian

When interactions are weak, we expect that the true ground state is close to $\ket{\Psi_\text{GP}}$, so that most of the particles remain in the zero momentum state, with relatively few pairs created. Remembering that

$$
\aop\ket{N} = \sqrt{N}\ket{N-1},\quad \adop\ket{N} = \sqrt{N+1}\ket{N+1},
\label{bose_aN}
$$

we see that a term in the Hamiltonian with $\aop_0$ or $\adop_0$ is going to be more important -- on account of the large occupancy of $\bk=0$ -- than a term without. For this reason we divide up the interaction Hamiltonian according to the number of occurrences of these operators

$$
\begin{align}
H_\text{int} = \frac{U_0}{2V}\adop_0\adop_0\aop_0\aop_0 + \frac{U_0}{2V}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+4\adop_\bk\adop_0\aop_0\aop_\bk\right]\\\nonumber
+\frac{U_0}{V}\sum_{\substack{\bk_1=\bk_2+\bk_3\\ \bk_{1,2,3}\neq 0}}\left[\adop_{\bk_2}\adop_{\bk_2}\aop_{\bk_1}\aop_0 +\adop_0\adop_{\bk_1}\aop_{\bk_2}\aop_{\bk_3}\right]+\frac{U_0}{2V}\sum_{\substack{\bk_1+\bk_2=\bk_3+\bk_4\\ \bk_{1,2,3,4}\neq 0}} \adop_{\bk_1}\adop_{\bk_2}\aop_{\bk_3}\aop_{\bk_4}.
\end{align}
$$

The Gross--Pitaevskii approximation corresponds to the first term. We are now going to keep the second term, and neglect the third and fourth. Thus we study the Hamiltonian

$$
\begin{align}
H_\text{pair} &= \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2V}\adop_0\adop_0\aop_0\aop_0 \nonumber\\ &\quad+\frac{U_0}{2V}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+4\adop_\bk\adop_0\aop_0\aop_\bk\right].
\label{bose_Hpair}
\end{align}
$$

In fact, it's convenient to rewrite the second term of this Hamiltonian using

$$
\adop_0\aop_0 = N - N',\quad N'\equiv \sum_{\bk\neq 0} N_\bk
$$

so that

$$
\adop_0\adop_0\aop_0\aop_0 =  N(N-1) - 2N'N_0+O(N_0^0	).
$$

In this approximation, we get

$$
\begin{align}
H_\text{pair} &= \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2V}N(N-1) \nonumber\\ &\quad+\frac{U_0}{2V}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+2\adop_\bk\adop_0\aop_0\aop_\bk\right].
\label{bose_Hpair2}
\end{align}
$$

Even now it's not so easy to solve this problem. One last vital simplification is needed. We are going to replace the operators $\adop_0$, $\aop_0$ with $\sqrt{N}$, giving a quadratic Hamiltonian. That may sound like a pretty odd thing to do: after all, the resulting Hamiltonian no longer conserves the number of particles! Let's see why this is a good approximation.

Consider the action of the Hamiltonian \eqref{bose_Hpair} on a product state of the form $\ket{\Psi'}\otimes\ket{N\_0}\_0$, where we are 'factoring off' the Hilbert space of non-zero momentum states from the Fock state of the zero momentum state. The action of $\adop\_\bk \aop\_0$ on this state is

$$
\adop_\bk\aop_0\ket{\Psi'}\otimes\ket{N_0}_0 = \left(\adop_\bk \ket{\Psi'}\right)\otimes \aop_0\ket{N_0}_0 = \left(\adop_\bk \ket{\Psi'}\right)\otimes \sqrt{N_0}\ket{N_0-1}_0.
$$

Likewise

$$
\aop_\bk\adop_0\ket{\Psi'}\otimes\ket{N_0}_0 = \left(\aop_\bk \ket{\Psi'}\right)\otimes \adop_0\ket{N_0}_0 = \left(\adop_\bk \ket{\Psi'}\right)\otimes \sqrt{N_0+1}\ket{N_0+1}_0.
$$

Since $N_0$ is assumed to be large, we ignore the difference between $N_0$ and $N_0+1$. To be more precise, we are assuming that in the states we are going to find, $N_0$ will not fluctuate substantially. If this is the case, the _matrix elements_ of $H_\text{pair}$ are approximately unchanged when we make the replacement mentioned above, leaving us with the __Bogoliubov Hamiltonian__

$$
\begin{align}
H_\text{pair} &= \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2V}N(N-1) \nonumber\\ &\quad+\frac{U_0n_0}{2}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk} + \aop_{\bk}\aop_{-\bk}+2\adop_\bk\aop_\bk\right].
\label{bose_Hpair3}
\end{align}
$$

where $n_0 = N_0/V$ is the density of particles in the zero momentum state. The Hamiltonian \eqref{bose_Hpair3} can be diagonalized by a __Bogoliubov transformation__

$$
\bop_\bp=\aop_\bp\cosh\kappa_\bp+\adop_{-\bp}\sinh\kappa_\bp\nonumber\\
\tanh2\kappa_\bp=\frac{n_0 U_0}{\epsilon(\bp)+n_0 U_0}.
$$

The parameter $\kappa_\bp$ of the transformation is chosen in order that there are no 'anomalous' $\bdop_\bp\bdop_{-\bp}$ or $\bop_\bp\bop_{-\bp}$ terms left in the Hamiltonian, which then takes the form of a sum of oscillators

$$
H=E_0+\sum_{\bp\neq 0}\omega(\bp)\bdop_\bp
\bop_\bp.
$$

Here $\omega(\bp)$ is the Bogoliubov dispersion relation

$$
\omega(\bp) = \sqrt{\epsilon(\bp)\left(\epsilon(\bp)+2U_0n_0\right)},
$$

and the ground state energy is

$$
E_0=\frac{1}{2}nU_0  N+\sum_{\bp\neq 0}\frac{1}{2}\left[\omega(\bp)-\epsilon(\bq)-n_0U_0\right].
$$

Somewhat annoyingly, this integral is divergent in the ultraviolet. However, this is actually nothing to do with the many body physics of the problem, but is rather related to the need to regularize a $\delta$-function potential in three dimensions. We can cure the problem by writing

$$
E_0=\frac{1}{2}nU_0  N\left[1-\frac{1}{V}\sum_\bp \frac{U_0}{2\epsilon(\bp)}\right]+\sum_{\bp\neq 0}\frac{1}
{2}\left[\omega(\bp)-\epsilon(\bq)-n_0U_0+ \frac{(n_0U_0)^2}{2\epsilon(\bp)}\right].
$$

In this form, the term we have added and subtracted is recognized as the next order in the Born
approximation for the scattering length $a=a_0+a_1+\cdots$. The second term can now be evaluated
to give

$$
E_0=\frac{1}{2}nN\frac{4\pi}{m}\left(a_0+a_1\right)+\frac{1}{2}n_0N\frac{4\pi}{m}a_0\frac
{128}{15\sqrt{\pi}}\left(n a_0^3\right)^{1/2}.
$$

Where

$$
a_0=(m/4\pi)U_0,\qquad a_1=-(m/4\pi)\frac{U_0^2}{V}\sum_\bp \frac{1}{2\epsilon
(\bp)}.
$$


### The Ground State

So far, our ground state is just defined by the condition that it is a vacuum of Bogoliubov excitations

$$
\bop_\bk\ket{0}=\left(\cosh\kappa_\bk \aop_\bk+\sinh\kappa_\bk \adop_{-\bk}\right)\ket{0}=0.
$$

But what does it _look_ like? A state (unnormalized) that satisfies the above equation is

$$
\ket{0}=\prod_{\bk\neq 0} \exp\left(-\frac{1}{2}\tanh\kappa_\bk\adop_{\bk}\adop_{-\bk}\right)\ket{\Psi_\text{GP}}
\label{bose_BogWave}
$$

<p class="message">
Show this. If you've seen coherent states before, remember that the state $e^{\alpha \adop}\ket{\text{VAC}}$ is an eigenstate of $\aop$ with eigenvalue $\alpha$.
</p>

The form \eqref{bose_BogWave} shows explicitly that the state consists of a superposition of pairs excited out of the $\bk=0$ condensate. As we've discussed, we don't actually keep track of the loss of particles from the condensate in the Bogoliubov approximation, on the assumption that it is small.

We can get some feeling for the properties of the ground state by considering the density fluctuations. Recall that the Fourier components of the density operator are

$$
\rho_\bq = \sum_\bk \adop_{\bk-\bq}\aop_\bk.
$$

On the basis of the logic that we've been following so far, the most important terms will be those where one of $\adop_{\bk-\bq}$ or $\aop_\bk$ acts on the condensate. Thus

$$
\rho_\bq \sim \sqrt{N}\left(\adop_{-\bq} + \aop_{\bq}\right) = e^{-\kappa_\bq} \left(\bdop_{-\bq} + \bop_{\bq}\right),
$$

where

$$
e^{-\kappa_\bq} = \sqrt{\frac{\epsilon(\bq)}{\omega(\bq)}}.
$$

The density fluctuations in the ground state are then

$$
\braket{0}{\rho_{-\bq}\rho_{\bq}}{0} = N\frac{\epsilon(\bq)}{\omega(\bq)}\xrightarrow{\bq\to 0} \frac{N\abs{\bq}}{2mc}.
$$

On the right hand side we have used the low momentum form of the Bogoliubov dispersion

$$
\omega(\bq)\xrightarrow{\bq\to 0} c\abs{\bq}
$$

where $c = \sqrt{\frac{n_0U_0}{m}}$ is the speed of sound. We see that the density fluctuations vanish as the wavevector goes to zero. This is to be contrasted with the result that we would find in the Gross--Pitaevskii ground state (or ground state of the ideal gas)

$$
\braket{0}{\rho_{-\bq}\rho_{\bq}}{0} = N.
$$

corresponding to uncorrelated, Poissonian fluctuations of number inside any volume of the gas. If we were to take a snapshot of the particles at any instant in the interacting gas, we would see a picture similar to the image of the Laughlin state in [Lecture 1]({{ site.baseurl }}/lectures/ManyBodyWavefunctions/).

The other qualitatively new feature of the Bogoliubov ground state is that the zero momentum state is _depleted_. We find the momentum distribution by first writing the number operator $N_\bp=\adop_{\bp}\aop_{\bp}$ in terms of the Bogoliubov quasiparticles

$$
	\adop_{\bp}\aop_{\bp}=(\bdop\cosh\kappa_{\bp}+\bop\sinh\kappa_{\bp})(\bop\cosh\kappa_{\bp}+\bdop\sinh\kappa_{\bp}),
$$

and then finding the average

$$
N_\bp=\langle \adop_{\bp}\aop_{\bp}\rangle = \sinh^2\kappa_{p}\xrightarrow{ \abs{\bp}\ll \xi^{-1}}\frac{mc_s}{2\abs{\bp}}.
$$

The radial density distribution $4\pi p^2 N_\bp$ is peaked around $\xi^{-1}$. Summing over $\bp$ gives the fraction of atoms not in the condensate

$$
\frac{1}{N}\sum_{\bp\neq 0} n(\bp)=\frac{8}{3\sqrt{\pi}}\sqrt{n a^3},
$$

where we used the Born approximation for the scattering length $a=\frac{4\pi U_0}{m}$. Excluding the value $\bp=0$ has no effect, because of the vanishing phase space at small momentum in three dimensions.

Under typical experimental conditions in experiments on ultracold atoms the depletion does not much exceed $0.01$, which justifies the use of the GP approximation. Liquid He$^{4}$, the first superfluid to be discovered, can be described as an interacting Bose condensate, but the depletion is much larger. The Bogoliubov approximation does not provide a quantiatively accurate description in this case.

In the previous lecture we met another situation where the depletion can be increased. Applying a lattice effectively reduces the kinetic energy relative to the interaction, and leads eventually to a __quantum phase transition__ out of the superfluid state.


References
----------

{% bibliography --cited %}
