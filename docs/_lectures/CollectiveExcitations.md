---
layout: page
title: The Elastic Chain
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

## The Model

We study a chain of equal masses connected by springs, moving only in one dimension, along the chain. The Hamiltonian is

$$\label{coll_Hchain}
H = \sum_{j=1}^N \left[\frac{p_j^2}{2m} + \frac{k}{2} (u_j-u_{j+1})^2 \right].
$$

We identify $u_j=u_{N+j}$, corresponding to periodic boundary conditions. As usual $[u_i,p_j]=i\delta_{ij}$. To orient ourselves, we solve the classical version of the problem.

## The Classical System

You've seen this before. The equations of motion are

$$
m \ddot u_j = k(u_{j-1} + u_{j+1} - 2u_j).
$$

We look for oscillatory solutions with time dependence $u_j(t) = u_j e^{-i\omega t}$, arriving at the matrix eigenvalue problem

$$
-\omega^2 \begin{pmatrix}
u_1 \\
u_2 \\
\cdots \\
u_{N-1}\\
u_N
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
u_1 \\
u_2 \\
\cdots \\
u_{N-1}\\
u_N
\end{pmatrix}
\$$

Matrices of this type are called [circulant matrices](https://en.wikipedia.org/wiki/Circulant_matrix), and arise here because of the translational invariance of the system (including the periodic boundary conditions). Their eigenvectors are given by plane waves $u_j = (z_n)^j$, where $z_n$ is one of the $N^\text{th}$ roots of unity i.e. $z^N = 1$ or

$$
z_n = \exp\left(\frac{2\pi i n}{N}\right),\qquad n = 0,\ldots, N-1.
$$

In fact, to make things a bit more symmetrical, let's take $N$ to be odd and index the $z_n$ using both positive and negative values of $n$

$$
z_n = \exp\left(\frac{2\pi i n}{N}\right),\qquad n = -(N-1)/2,\ldots, (N-1)/2.
$$

We'll write $\eta_n\equiv \frac{2\pi n}{N}$, so that the eigenstates have the form $u_j=\exp(i\eta_n j)$. Substitution into the equation of motion yields the dispersion relation

$$
\omega_n^2 = \frac{2k}{m}\left(1-\cos \eta_n\right),
\label{coll_Dispersion}
$$

which is plotted in Figure... Notice that:

1. The frequency vanishes at $k\to 0$. This mode corresponds to translation of the system, for which there is no restoring force.
2. At small $k$ the dispersion is linear, as we would expect for sound waves.

A general motion of the system can be represented as a superposition of the normal modes

$$
u_j(t) = \frac{1}{\sqrt{N}}\sum_{|n| \leq (N-1)/2} q_n(t) e^{i\eta_n j},
\label{coll_modes}
$$

together with the condition $q_{-n}=q^*_n$ on the complex amplitudes to ensure that $u_j$ is real. The amplitudes $q_n(t)$ have time dependence

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
p_j(t) = \frac{1}{\sqrt{N}}\sum_{|n| \leq (N-1)/2} \pi_n(t) e^{-i\eta_n j},
\label{coll_Pexp}
$$

If $u_j$, $p_j$ are canonical variables with Poisson Bracket $\\{u_j, p_k\\}=\delta_{jk}$, then it follows that $\\{q_m,\pi_n\\}=\delta_{mn}$.

In terms of the Fourier modes the Hamiltonian \eqref{coll_Hchain} is

$$
 H = \sum_{|n| \leq (N-1)/2} \left[\frac{1}{2m}\pi_n \pi_{-n} + k  (1-\cos \eta_n) q_n q_{-n}\right].
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
 H' = \sum_{0 < n \leq (N-1)/2} \left[\frac{1}{2m}\pi'_n \pi'_{n} + k  (1-\cos \eta_n) q'_n q'_{n}\right].
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
H = \omega \left|a\right|^2.
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
a_n &= \sqrt{\frac{m\omega_n}{2}}\left(q_n + \frac{i}{m\omega_n}\pi_{-n}\right)\nonumber\\
a^*_n &= \sqrt{\frac{m\omega_n}{2}}\left(q_{-n} - \frac{i}{m\omega_n}\pi_{n}\right),\qquad n\neq 0.
\label{coll_adef}
\end{align}
$$

Remember that $q_n = q_{-n}^\*$ and $\pi_n = \pi_{-n}^\*$ in order that $u_j$ and $p_j$ are real. Note that $n=0$ is excluded because $\omega_0=0$. These coordinates satisfy

$$
\{a_m,a^{*}_n\}=\delta_{mn}.
$$

Inverting the definition \eqref{coll_adef} gives

$$
\begin{align}
q_n &= \sqrt{\frac{1}{2m\omega_n}}\left(a_n + a_{-n}^*\right)\nonumber\\
\pi_n &= -i\sqrt{\frac{m\omega_n}{2}}\left(a_{-n} - a_{n}^*\right),
\end{align}
$$

and inserting into the Hamiltonian \eqref{coll_HDiag} gives

$$
H = \frac{\pi_0^2}{2m}+\sum_{\substack{n\neq 0 \\ |n| \leq (N-1)/2}} \omega_n \left|a_n\right|^2,
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

From now on we will ignore the centre of mass motion. Exactly the same logic as before tells us that a general energy eigenstate may be written

$$
\ket{\mathbf{N}} = \prod_{\substack{n\neq 0 \\ |n| \leq (N-1)/2}} \frac{\left(\adop_n\right)^{N_n}}{\sqrt{N_n!}} \ket{0}.
$$

The non-negative integers $\mathbf{N}=\left(N_{(1-N)/2},\ldots, N_{-1}, N_{1}, \ldots N_{(N-1)/2}\right)$ describe the _occupation numbers_ of the oscillators. This eigenstate has energy

$$
E(\mathbf{N}) = E_0 + \sum_{\substack{n\neq 0 \\ |n| \leq (N-1)/2}} \omega_n N_n,
$$

where the ground state energy is

$$
E_0 = \frac{1}{2}\sum_{|n| \leq (N-1)/2} \omega_n.
\label{coll_H0}
$$

## Oscillator Quanta are Bosons!

A key moment in the birth of Quantum Field Theory was the realization that _oscillator quanta are bosons_, meaning that they can be identified with quantum particles having symmetric wavefunctions. We'll see this in much more detail in later lectures. For the moment, let's just note that both have a basis of states described in terms of the occupation numbers, which are non-negative integers. In the case of $M$ bosons, those states were written in terms of the single particle wavefunctions $\varphi_\alpha(\br)$ of the bosons as

$$
\Psi^{\text{S}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{M}}(\br_1,\ldots,\br_M)=\sqrt{\frac{M!}{\prod_{\alpha}N_{\alpha}!}}\mathcal{S}\,\varphi_{\alpha_{1}}(\mathbf{r}_{1})\varphi_{\alpha_{2}}(\mathbf{r}_{2})\cdots\varphi_{\alpha_{M}}(\mathbf{r}_{M}),
$$

where $\mathcal{S}=\frac{1}{N!}\sum_{P} P$ is the operation of _symmetrization_, and $N_\alpha$ denotes the number of occurrences of $\varphi_\alpha(\br)$ in the product, so that $M=\sum_\alpha N_\alpha$. It turns out that the Hilbert space spanned by these states is the same as that spanned by the states $\ket{\mathbf{N}}$, if the labels $\alpha$ are identified with the momentum labels $n$.

It's important to note that these bosons are totally distinct from the original particles making up the chain. In fact, our original Hamiltonian \eqref{coll_Hchain} doesn't in fact describe indistinguishable particles as written, as each particle is labelled by its position in the chain, with a particle only interacting with its two neighbours. Since the particles are assumed not to change places, there is no way of assigning statistics to their wavefunction.

## Thermodynamic ($N\to \infty$) limit

In studying the properties of matter, we are usually interested in taking the limit of an infinite system, otherwise known as the $N\to\infty$ or _thermodynamic_ limit. At the very least, we expect the internal energy (as well as other thermodynamic potentials) to be an _extensive_ quantity, meaning that it is proportional to the `size' of the system, here measured by the number of sites. Thus we expect the limit

$$
e_0 = \lim_{N\to \infty} \frac{E_0}{N}
$$

to exist. The separation of the $\eta_n$ values is $2\pi/N$, so as $N\to\infty$ the sum in ground state energy \eqref{coll_H0} can be replaced with an integral according to the rule

$$
\sum_{|n| \leq (N-1)/2} \left(\cdots\right) \xrightarrow{N\to\infty} N \int_{-\pi}^\pi \frac{d\eta}{2\pi}\left(\cdots\right).
$$

The factor of $N$ tells us that we have an extensive quantity, and

$$
e_0 = \int_{-\pi}^\pi\frac{d\eta}{2\pi} \frac{\omega(\eta)}{2} = \sqrt{\frac{k}{2m}}\int_{-\pi}^\pi\frac{d\eta}{2\pi} \sqrt{1-\cos
\eta}=\frac{2}{\pi}\sqrt{\frac{k}{m}}.
$$

Alternatively, we may treat the $N\to \infty$ limit of the chain as a model of an elastic _continuum_ of length $L$. Take $m = \frac{\rho_1 L}{N}$, where $\rho_1$ is the mass per unit length (1D density). The 1D elastic modulus is

$$
\kappa \equiv \frac{\text{tension}}{\text{strain}} = \frac{kL}{N}
$$

Then $k/m = \kappa/\rho_1$ and

$$
\frac{E_0}{L} = \frac{2N}{\pi}\sqrt{\frac{\kappa}{\rho_1}}.
$$

The energy per unit length diverges as $N\to\infty$. Thus the ground state energy of a continuous medium is infinite, on account of the infinite number of degrees of freedom it contains. This is only a problem if one insists on such a description: in practice (at least in condensed matter) there is always discreteness on the smallest scales.

Apart from the infinite ground state energy, the continuum limit of our harmonic system is perfectly well defined. Introducing a continuum displacement by $u(x=jL/N)=u_j$, the potential energy can be written

$$
V = \frac{k}{2} \sum_j^N (u_j-u_{j+1})^2 \xrightarrow{N\to\infty} \frac{\kappa}{2} \int_0^L dx\, \left[u'(x)\right]^2.
$$

If we define the _momentum density_ at each point by $\pi(x=jL/N) = p_j N/L$, then we find the continuum limit of the canonical commutation relations

$$
\left[u(x),\pi(x')\right]=i\delta(x-x'),
$$

together with the kinetic energy

$$
T = \sum_{j=1}^N \frac{p_j^2}{2m} = \frac{1}{2\rho_1}\int_0^L dx\,\left[\pi(x)\right]^2.
$$

Since we are taking the $N\to\infty$ limit it's convenient to define the Fourier modes slightly differently

$$
u(x) = \sum_{n=-\infty}^\infty u_n e^{k_n x},
$$

where $k_n =2\pi n/L$. Note that $k_n x = \eta_n j$. We are recycling the notation $u_n$ now that we have taken the limit.

If the momentum density $\pi(x)$ is then written

$$
\pi(x) = \lim_{N\to\infty} \frac{p_{j=xN/L}N}{L} =\frac{1}{L}\sum_{n=-\infty}^\infty \pi_n e^{-2\pi i nx /L},
$$

(This differs from \eqref{coll_Pexp} by $\pi_n\to \pi_n/\sqrt{N}$.) we have $\left[u_m,\pi_n\right]=\delta_{mn}$.

Our continuum Hamiltonian $H= T+V$ is then written in Fourier components as

$$
\frac{H}{L} = \sum_{n=-\infty}^\infty \left[\frac{1}{2\rho_1} \pi_n\pi_{-n} + \frac{\kappa k_n^2}{2}  u_nu_{-n} \right].
$$

We can now read off the dispersion relation

$$
\omega(k) = c|k|,
$$

where $c=\sqrt{\frac{\kappa}{\rho_1}}$ is the speed of sound. Note that the continuum limit has lead to a linear dispersion relation. This is reasonable: the lattice was the origin of the periodic dispersion relation \eqref{coll_Dispersion}, and it has now disappeared.

Transcribing the definition of the oscillator variables \eqref{coll_adef} gives

$$
\begin{align}
a_n &= \frac{1}{\sqrt{2}}\left[\sqrt{ZkL} u_n + \frac{i}{\sqrt{ZkL}}\pi_{-n}\right]\nonumber\\
a^*_n &= \frac{1}{\sqrt{2}}\left[\sqrt{ZkL} u_{-n} - \frac{i}{\sqrt{ZkL}}\pi_{n}\right].
\end{align}
$$

where $Z\equiv\sqrt{\kappa\rho_1}$ is the impedance. After quantization, the Hamiltonian takes the form

$$
H - E_0 = \sum_{n=-\infty}^\infty c\left|k_n\right|\adop_n\aop_n.
\label{coll_excess}
$$

This expresses the energy above the ground state in terms of the occupancy of the oscillator modes.

## Finite Temperature

At finite temperature $T$ the occupancies of the modes have thermal averages given by the Bose occupation function

$$
\langle N_n \rangle = \mathcal{B}(\omega_n)\equiv \frac{1}{\exp\left(\beta\omega_n\right)-1},
\label{coll_Bose}
$$

where $\beta=\frac{1}{k_\text{B}T}$. The thermal average of the energy of excited states is then

$$
\langle H - E_0 \rangle =\sum_{|n|\leq (N-1)/2} \omega_n\mathcal{B}(\omega_n).
$$

This is finite, even in the $N\to\infty$ limit, on account of the exponential tail of \eqref{coll_Bose}. Remember that this was the problem that the quantum theory was introduced to solve. At low energies $\mathcal{B}(\omega) = \frac{1}{\beta\omega}$ and the contribution of each mode is

$$
\omega \mathcal{B}(\omega) \xrightarrow{\omega\to 0}  k_\text{B}T,
$$

in agreement with the classical equipartition theorem. Were this result to apply at all energies the thermal energy density of a continuum at finite temperature would be infinite (the [Ultraviolet Catastrophe](https://en.wikipedia.org/wiki/Ultraviolet_catastrophe)). It is the existence of Planck's constant, which appears in the dimensionless combination $\hbar\beta\omega$ in the Bose occupation function, that allows this conclusion to be avoided.


## Ground State Wavefunction and Fluctuations

Classically, we understand the motion of the chain very well. What can we say about the quantum states of the system? The differences from the classical picture are most evident in the ground state.

As a reminder, the ground state wavefunction of a single oscillator is

$$
\psi_0(x) = \left(\frac{m\omega}{\pi}\right)^{1/4} \exp\left(-m\omega x^2 /2\right)
$$

A quick way to get this is to regard the condition $a\|0\rangle = 0$ as a first order differential equation and solve it.

Since our Hamiltonian \eqref{coll_HDiag} is just a sum of single oscillator Hamiltonians, we can write the ground state wavefunction as a function of the oscillator coordinates $q_n$

$$
\Psi_0(\mathbf{q}) = \prod_{\substack{n\neq 0 \\ |n| \leq (N-1)/2}} \left(\frac{m\omega_n}{\pi}\right)^{1/4} \exp\left(-m\omega_n |q_n|^2 /2\right).
$$

Since the $\mathbf{q}$ are related by \eqrel{coll_modes} to the real space displacements $\mathbf{u}$, this allows us to find the ground state as a function of the displacements. First, we invert \eqref{coll_modes} to give

$$
q_n = \frac{1}{\sqrt{N}}\sum_{j=1}^N x_j e^{-i\eta_n j},
$$

and then insert this into $\Psi_0(\mathbf{q})$

$$
\Psi_0(\mathbf{u}) \propto \exp\left(-\frac{m}{2N}\sum_{\substack{|n| \leq (N-1)/2\\ j,k =1,\ldots N}} x_j x_k \exp\left(i\eta_n[j-k]\right) \omega_n\right)
$$

First hint of special nature of 1D -- divergence of displacement.



# Excited States: Feynman--Bijl Formula

For the harmonic chain can show that acting with $\rho_q$ on the ground state gives an excited state

Is it useful to do this in lectures. Other non-trivial example is Fermi gas

# Nonlinearity and Interactions

## Fourier review

Discrete FT to Fourier series to Fourier transform.

This is a good excercise in writing things in Fourier modes
Could compute phonon lifetime using Golden Rule

Background on FPU
