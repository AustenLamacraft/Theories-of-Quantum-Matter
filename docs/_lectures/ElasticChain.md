---
layout: page
title: The Elastic Chain
author: Austen Lamacraft
chapter: 3
summary: Quantizing a chain. Ground state displacement fluctuations.
published: true
---

<p class="message">
In this lecture we discuss a very simple many body system in which particles are coupled by Hooke's Law springs. Nevertheless, the quantization of this system has a lot to teach us about the appearance of <strong>collective excitations</strong>.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}

Reading: {% cite Coleman:2015 %}, Chapter 2.


---

## The Classical System

We study a chain of equal masses connected by springs, moving only in one dimension, along the chain. The Hamiltonian is

<a name="ElasticChain"></a>
![]({{ site.baseurl }}/assets/ElasticChain.png)


$$\label{coll_Hchain}
H = \sum_{j=1}^N \left[\frac{p_j^2}{2m} + \frac{k}{2} (u_j-u_{j+1})^2 \right].
$$

We identify $u_j=u_{N+j}$, corresponding to periodic boundary conditions. As usual $[u_i,p_j]=i\delta_{ij}$. To orient ourselves, we solve the classical version of the problem.

### Equations of Motion

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

We'll write $\eta_n\equiv \frac{2\pi n}{N}$, so that the eigenstates have the form $u_j=\exp(i\eta_n j)$.


<p class="message">
By substituting into the equation of motion show that the dispersion relation is

$$
\omega(\eta) = \sqrt{\frac{4k}{m}}\left|\sin\eta/2\right|.
\label{coll_Dispersion}
$$

</p>

Notice that:

1. The frequency vanishes at $\eta\to 0$. This mode corresponds to translation of the system, for which there is no restoring force.
2. At small $\eta$ the dispersion is linear, as we would expect for sound waves.

A general motion of the system can be represented as a superposition of the normal modes

$$
u_j(t) = \frac{1}{\sqrt{N}}\sum_{|n| \leq (N-1)/2} q_n(t) e^{i\eta_n j},
\label{coll_modes}
$$

together with the condition $q_{-n}=q^*_n$ on the complex amplitudes to ensure that $u_j$ is real. The amplitudes $q_n(t)$ have time dependence

$$
q_n(t) = \alpha_n e^{-i\omega(\eta_n) t} + \beta_n e^{i\omega(\eta_n) t}
$$

for $n\neq 0$, while for $n=0$

$$
q_0(t) = \sqrt{N}(X+Vt)
$$

describes the motion of the centre of mass.

### Hamiltonian Formulation

To make contact with quantum physics, let's look at this problem from the Hamiltonian perspective. If the $q_n$ are to be our canonical coordinates, then we should likewise write the momenta in terms of Fourier modes

$$
p_j(t) = \frac{1}{\sqrt{N}}\sum_{|n| \leq (N-1)/2} \pi_n(t) e^{-i\eta_n j},
\label{coll_Pexp}
$$

If $u_j$, $p_j$ are canonical variables with Poisson Bracket $\\{u_j, p_k\\}=\delta_{jk}$, then it follows that $\\{q_m,\pi_n\\}=\delta_{mn}$.

<p class="message">

Show that in terms of the Fourier modes the Hamiltonian \eqref{coll_Hchain} is

$$
 H = \sum_{|n| \leq (N-1)/2} \left[\frac{1}{2m}\pi_n \pi_{-n} + k  (1-\cos \eta_n) q_n q_{-n}\right].
 \label{coll_HDiag}
$$

</p>

This _almost_ looks like a system of harmonic oscillators. Bear in mind that the $q_n$ and $\pi_n$ are complex. One could, for example, split the amplitudes into their real and imaginary parts

$$
\begin{align}
q_n &= \frac{1}{\sqrt{2}}\left(q_n' + i q_n''\right),\quad q_{-n} = \frac{1}{\sqrt{2}}\left(q_n' - i q_n''\right)\\
\pi_n &= \frac{1}{\sqrt{2}}\left(\pi_n' + i \pi_n''\right),\quad \pi_{-n} = \frac{1}{\sqrt{2}}\left(\pi_n' - i \pi_n''\right),\quad n\geq 0.
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

### Complex Coordinates

Sticking with the classical problem, let's introduce complex coordinates to describe the two dimensional phase space of a single oscillator

$$
\begin{equation}
a = \sqrt{\frac{m\omega}{2}}\left(x + \frac{i}{m\omega} p \right).
\label{a_def}
\end{equation}
$$

$a$ and its conjugate satisfy $\\{a^{},a^*\\}=-i$. This definition is chosen so that the Hamiltonian takes the simple form

$$
H = \omega \left|a\right|^2.
$$

Hamilton's equations of motion are then

$$
\begin{align}
\dot a &= \{a, H \} = -i\omega a\\
\dot a^* &= \{a^*, H \} = i\omega a^*.
\end{align}
$$

with solution $a(t) = e^{-i\omega t} a(0)$ describing circular motion in the complex $a$ plane on a contour of fixed energy.

<p class="message">
Satisfy yourself -- without doing any calculations -- that $a(t)$ defined by \eqref{a_def} goes clockwise in the complex plane.
</p>

In the same way, we can introduce the coordinates

$$
\begin{align}
a_n &= \sqrt{\frac{m\omega(\eta_n)}{2}}\left(q_n + \frac{i}{m\omega(\eta_n)}\pi_{-n}\right)\nonumber\\
a^*_n &= \sqrt{\frac{m\omega(\eta_n)}{2}}\left(q_{-n} - \frac{i}{m\omega(\eta_n)}\pi_{n}\right),\qquad n\neq 0.
\label{coll_adef}
\end{align}
$$

Remember that $q_n = q_{-n}^\*$ and $\pi_n = \pi_{-n}^\*$ in order that $u_j$ and $p_j$ are real. Note that $n=0$ is excluded because $\omega(0)=0$. These coordinates satisfy

$$
\{a_m,a^{*}_n\}=-i\delta_{mn}.
$$

Inverting the definition \eqref{coll_adef} gives

$$
\begin{align}
q_n &= \sqrt{\frac{1}{2m\omega(\eta_n)}}\left(a_n + a_{-n}^*\right)\nonumber\\
\pi_n &= -i\sqrt{\frac{m\omega(\eta_n)}{2}}\left(a_{-n} - a_{n}^*\right),
\end{align}
$$

and inserting into the Hamiltonian \eqref{coll_HDiag} gives

$$
H = \frac{\pi_0^2}{2m}+\sum_{\substack{n\neq 0 \\ |n| \leq (N-1)/2}} \omega(\eta_n) \left|a_n\right|^2,
$$

with the first term accounting for the (free) centre of mass.

## Quantum Oscillators

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
H \adop \ket{\psi} = \adop H \ket{\psi} + [H, \adop] \ket{\psi} = \left(E+\omega\right)\adop\ket{\psi}.
$$

Similarly $a\ket{\psi}$ is an eigenstate with energy $E-\omega$, unless $\ket{\psi}=\ket{0}$, the ground state, in which case we must have $\aop\ket{0}=0$.

As a result, all states can be written as

$$
\ket{n} = \frac{1}{\sqrt{n!}}\left(\adop\right)^n\ket{0}.
$$

The factor of $\frac{1}{\sqrt{n!}}$ normalizes the state. The ground state has energy $E_0=\omega/2$.

### The Quantum Chain

The quantization of the chain is then a piece of cake. We have a system of oscillator variables satisfying $[\aop_m,\adop_n]=\delta_{mn}$, and writing the Hamiltonian \eqref{coll_HDiag} in terms of these variables, paying attention to the order, gives

$$
H = \frac{\pi_0^2}{2m}+\sum_{\substack{n\neq 0 \\ |n| \leq (N-1)/2}} \frac{\omega(\eta_n)}{2}\left(\adop_n\aop_n+\aop_n\adop_n\right).
$$

From now on we will ignore the centre of mass motion. Exactly the same logic as before tells us that a general energy eigenstate may be written

$$
\ket{\mathbf{N}} = \prod_{\substack{n\neq 0 \\ |n| \leq (N-1)/2}} \frac{\left(\adop_n\right)^{N_n}}{\sqrt{N_n!}} \ket{0}.
$$

The non-negative integers $\mathbf{N}=\left(N_{(1-N)/2},\ldots, N_{-1}, N_{1}, \ldots N_{(N-1)/2}\right)$ describe the _occupation numbers_ of the oscillators. This eigenstate has energy

$$
E(\mathbf{N}) = E_0 + \sum_{\substack{n\neq 0 \\ |n| \leq (N-1)/2}} \omega(\eta_n) N_n,
$$

where the ground state energy is

$$
E_0 = \frac{1}{2}\sum_{|n| \leq (N-1)/2} \omega(\eta_n).
\label{coll_H0}
$$

### Oscillator Quanta are Bosons!

A key moment in the birth of Quantum Field Theory was the realization that _oscillator quanta are bosons_, meaning that they can be identified with quantum particles having symmetric wavefunctions. We'll see this in much more detail in later lectures. For the moment, let's just note that both have a basis of states described in terms of the occupation numbers, which are non-negative integers. In the case of $M$ bosons, those states were written in terms of the single particle wavefunctions $\varphi_\alpha(\br)$ of the bosons as

$$
\Psi^{\text{S}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{M}}(\br_1,\ldots,\br_M)=\sqrt{\frac{M!}{\prod_{\alpha}N_{\alpha}!}}\mathcal{S}\,\varphi_{\alpha_{1}}(\mathbf{r}_{1})\varphi_{\alpha_{2}}(\mathbf{r}_{2})\cdots\varphi_{\alpha_{M}}(\mathbf{r}_{M}),
$$

where $\mathcal{S}=\frac{1}{M!}\sum_{P} P$ is the operation of _symmetrization_, and $N_\alpha$ denotes the number of occurrences of $\varphi_\alpha(\br)$ in the product, so that $M=\sum_\alpha N_\alpha$. It turns out that the Hilbert space spanned by these states is the same as that spanned by the states $\ket{\mathbf{N}}$, if the labels $\alpha$ are identified with the momentum labels $n$.

It's important to note that these bosons are totally distinct from the original particles making up the chain. In fact, our original Hamiltonian \eqref{coll_Hchain} doesn't describe indistinguishable particles as written, as each particle is labelled by its position in the chain, with a particle only interacting with its two neighbours. Since the particles are assumed not to change places, there is no way of assigning statistics to their wavefunction.

### Thermodynamic ($N\to \infty$) limit

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

Alternatively, we may treat the $N\to \infty$ limit of the chain as a model of an elastic _continuum_ of length $L=aN$. Take $m = \rho a$, where $\rho$ is the mass per unit length (1D density). The 1D elastic modulus is

$$
\kappa \equiv \frac{\text{tension}}{\text{strain}} = ka
$$

Then $k/m = \kappa/\rho$ and

$$
\frac{E_0}{L} = \left(\frac{N}{L}\right)^2\frac{2}{\pi}\sqrt{\frac{\kappa}{\rho}}.
$$

The energy per unit length diverges as $N\to\infty$. Thus the ground state energy of a continuous medium is infinite, on account of the infinite number of degrees of freedom it contains. This is only a problem if one insists on such a description: in practice (at least in condensed matter) there is always discreteness on the smallest scales.

Apart from the infinite ground state energy, the continuum limit of our harmonic system is perfectly well defined. Introducing a continuum displacement by $u(x=ja)=u_j$, the potential energy can be written

$$
V = \frac{k}{2} \sum_j^N (u_j-u_{j+1})^2 \xrightarrow{N\to\infty} \frac{\kappa}{2} \int_0^L dx\, \left[u'(x)\right]^2.
$$

If we define the _momentum density_ at each point by $\pi(x=ja) = p_j N/L$, then we find the continuum limit of the canonical commutation relations

$$
\left[u(x),\pi(x')\right]=i\delta(x-x'),
$$

together with the kinetic energy

$$
T = \sum_{j=1}^N \frac{p_j^2}{2m} = \frac{1}{2\rho}\int_0^L dx\,\left[\pi(x)\right]^2.
$$

Since we are taking the $N\to\infty$ limit it's convenient to define the Fourier modes slightly differently

$$
u(x) = \sum_{n=-\infty}^\infty u_n e^{ik_n x},
$$

where $k_n =2\pi n/L$. Note that $k_n x = \eta_n j$. We are recycling the notation $u_n$ now that we have taken the limit.

If the momentum density $\pi(x)$ is then written

$$
\pi(x) = \lim_{N\to\infty} \frac{p_{j=xN/L}N}{L} =\frac{1}{L}\sum_{n=-\infty}^\infty \pi_n e^{-2\pi i nx /L},
$$

(This differs from \eqref{coll_Pexp} by $\pi_n\to \pi_n/\sqrt{N}$.) we have $\left[u_m,\pi_n\right]=\delta_{mn}$.

Our continuum Hamiltonian $H= T+V$ is then written in Fourier components as

$$
\frac{H}{L} = \sum_{n=-\infty}^\infty \left[\frac{1}{2\rho} \pi_n\pi_{-n} + \frac{\kappa k_n^2}{2}  u_nu_{-n} \right].
$$

We can now read off the dispersion relation

$$
\omega(k) = c|k|,
$$

where $c=\sqrt{\frac{\kappa}{\rho}}$ is the speed of sound. Note that the continuum limit has lead to a linear dispersion relation. This is reasonable: the lattice was the origin of the periodic dispersion relation \eqref{coll_Dispersion}, and it has now disappeared.

Transcribing the definition of the oscillator variables \eqref{coll_adef} gives

$$
\begin{align}
a_n &= \frac{1}{\sqrt{2}}\left[\sqrt{ZkL} u_n + \frac{i}{\sqrt{ZkL}}\pi_{-n}\right]\nonumber\\
a^*_n &= \frac{1}{\sqrt{2}}\left[\sqrt{ZkL} u_{-n} - \frac{i}{\sqrt{ZkL}}\pi_{n}\right].
\end{align}
$$

where $Z\equiv\sqrt{\kappa\rho}$ is the impedance. After quantization, the Hamiltonian takes the form

$$
H - E_0 = \sum_{n=-\infty}^\infty c\left|k_n\right|\adop_n\aop_n.
\label{coll_excess}
$$

This expresses the energy above the ground state in terms of the occupancy of the oscillator modes.

### Finite Temperature

At finite temperature $T$ the occupancies of the modes have thermal averages given by the Bose occupation function

$$
\langle N_n \rangle = n_\text{B}(\omega(\eta_n))\equiv \frac{1}{\exp\left(\beta\omega(\eta_n)\right)-1},
\label{coll_Bose}
$$

where $\beta=\frac{1}{k_\text{B}T}$. The thermal average of the energy of excited states is then

$$
\langle H - E_0 \rangle =\sum_{|n|\leq (N-1)/2} \omega(\eta_n)n_\text{B}(\omega(\eta_n)).
$$

This is finite, even in the $N\to\infty$ limit, on account of the exponential tail of \eqref{coll_Bose}. Remember that this was the problem that the quantum theory was introduced to solve. At low energies $n_{\text{B}}(\omega) = \frac{1}{\beta\omega}$ and the contribution of each mode is

$$
\omega n_\text{B}(\omega) \xrightarrow{\omega\to 0}  k_\text{B}T,
$$

in agreement with the classical equipartition theorem. Were this result to apply at all energies the thermal energy density of a continuum at finite temperature would be infinite (the [Ultraviolet Catastrophe](https://en.wikipedia.org/wiki/Ultraviolet_catastrophe)). It is the existence of Planck's constant, which appears in the dimensionless combination $\hbar\beta\omega$ in the Bose occupation function, that allows this conclusion to be avoided.


<!-- ### Ground State Wavefunction

Classically, we understand the motion of the chain very well. What can we say about the quantum states of the system? The differences from the classical picture are most evident in the ground state.

As a reminder, the ground state wavefunction of a single oscillator is

$$
\psi_0(x) = \left(\frac{m\omega}{\pi}\right)^{1/4} \exp\left(-m\omega x^2 /2\right)
$$

A quick way to get this is to regard the condition $a\|0\rangle = 0$ as a first order differential equation and solve it (just as the lowest Landau level condition is obtained in [Lecture 2]({{ site.baseurl }}/lectures/QHE)).

Since our Hamiltonian \eqref{coll_HDiag} is just a sum of single oscillator Hamiltonians, we can write the ground state wavefunction as a function of the oscillator coordinates $q_n$

$$
\Psi_0(\mathbf{q}) = \prod_{\substack{n\neq 0 \\ |n| \leq (N-1)/2}} \left(\frac{m\omega(\eta_n)}{\pi}\right)^{1/4} \exp\left(-m\omega(\eta_n) \left|q_n\right|^2 /2\right).
$$

Since the $\mathbf{q}$ are related by \eqref{coll_modes} to the real space displacements $\mathbf{u}$, this allows us to find the ground state as a function of the displacements. First, we invert \eqref{coll_modes} to give

$$
q_n = \frac{1}{\sqrt{N}}\sum_{j=1}^N u_j e^{-i\eta_n j},
$$

and then insert this into $\Psi_0(\mathbf{q})$

$$
\Psi_0(\mathbf{u}) \propto \exp\left(-\frac{m}{2N}\sum_{\substack{|n| \leq (N-1)/2\\ j,k =1,\ldots N}} u_j u_k \exp\left(i\eta_n[j-k]\right) \omega(\eta_n)\right),
$$

where we drop the overall normalization constant. -->

### Position Fluctuations

Classically, the ground state configuration of our elastic chain corresponds to a regular 'crystalline' arrangement of masses at separation $a$, with all $u_j=0$. Mass $j$ and mass $k$ are then separated by $(j-k)a + u_j-u_k = (j-k)a$. Quantum mechanically, $u_j-u_k$ fluctuates, even in the ground state. For the notion of a crystal to make sense, these fluctuations should not be too large. Let's evaluate them for the elastic chain.

We want to evaluate

$$
\bra{0}\left(u_j-u_k\right)^2\ket{0}.
\label{coll_gsfluct}
$$

To do this, we write the displacements in terms of the oscillator variables, and then evaluate the expectation values in the ground state using the oscillator algebra. Recall that

$$
u_j = \frac{1}{\sqrt{N}}\sum_{|n| \leq (N-1)/2} q_n e^{i\eta_n j},
\label{coll_ModeExp}
$$

and

$$
q_n = \sqrt{\frac{1}{2m\omega(\eta_n)}}\left(a_n + a_{-n}^*\right).
$$

To evaluate \eqref{coll_gsfluct}, we write the two factors $(u_j-u_k)(u_j-u_k)$ in terms of the $\aop_n$ and $\adop_n$. Contributions to the ground state expectation value arise from terms with $\aop_n$ in the left factor and $\adop_n$ in the right for some $n$. All other terms vanish. This gives

$$
\bra{0}\left(u_j-u_k\right)^2\ket{0} = \frac{1}{2mN} \sum_{|n| \leq (N-1)/2} \frac{1}{\omega(\eta_n)} \left[e^{i\eta_n j}- e^{i\eta_n k}\right]\left[e^{-i\eta_n j}- e^{-i\eta_n k}\right].
$$

Taking the $N\to\infty$ limit in the sum gives

$$
\begin{multline}
\bra{0}\left(u_j-u_k\right)^2\ket{0} = \frac{1}{mN}\sum_{|n| \leq (N-1)/2} \frac{1-\cos\left(\eta_n[j-k]\right)}{\omega(\eta_n)}\\ = \frac{1}{m}\int_{-\pi}^\pi \frac{d\eta}{2\pi} \frac{1-\cos\left(\eta[j-k]\right)}{\omega(\eta)}.
\label{coll_uvar}
\end{multline}
$$

The dispersion relation \eqref{coll_Dispersion} makes this integral a little difficult.

<a name="disp_fluct"></a>
![]({{ site.baseurl }}/assets/disp_fluct.png)
_The integrand in \eqref{coll_uvar} for $j-k=20$. What form does it take for $\left|j-k\right|^{-1}\lesssim\eta\lesssim \pi$?_

<p class="message">
When $\left|j-k\right|\gg 1$, the integral is dominated by values of $\left|j-k\right|^{-1}\lesssim\eta\lesssim \pi$. In this limit the dispersion can be linearized

$$
\omega(\eta) \sim \sqrt{\frac{k}{m}}|\eta|.
$$

Show that we then have

$$
\bra{0}\left(u_i-u_j\right)^2\ket{0} \sim  \frac{\ell_\text{osc}^2}{\pi} \log \left|i-j\right|,\qquad \text{ as } \left|i-j\right|\to\infty
\label{coll_LogFluct}
$$

where we have introduced $\ell_\text{osc}=\left(km\right)^{-1/4}$, the natural length scale of an oscillator.

</p>

The result \eqref{coll_LogFluct} shows that the uncertainty in the separation of two masses in the chain increases with their separation. This implies that the ground state of the chain is _not_ a crystal, but more closely resembles a fluid. It turns out that this conclusion depends strongly on the dimensionality of the system. In higher dimensions, crystalline ground states _do_ exist (thankfully).

### Density Fluctuations

An alternative way of quantifying crystalline order is to consider the fluctuations of the density of particles, defined by

$$
\rho(x) = \sum_{j=1}^N \delta_L(x-x_j),
$$

where $x_j = ja + u_j$, and $\delta_L(x)$ is an $L$-periodic version of the $\delta$-function, if we want to stick with a finite size system. Alternatively, we may consider the Fourier components

$$
\rho_k = \sum_{j=1}^N\exp(-i k x_j).
$$

Rather than introducing separate notation for the Fourier components of $f(x)$, it's convenient to denote them by $f_q$, so that

$$
f(x) = \sum_{n=-\infty}^\infty f_k \exp(ik_n x), \qquad k_n = \frac{2\pi n}{L}
$$

In an ordered configuration $x_j = ja$, we would have

$$
\rho_{k_n} = \begin{cases}
N & n = 0 \mod N \\
0 & \text{ otherwise.}
\end{cases}
$$

These peaks at values of $k$ corresponding to multiples of $\frac{2\pi}{a}$ are nothing but the _Bragg peaks_ observed in a diffraction experiment, which translates the real space crystal arrangement into Fourier space. Note that an overall translation of lattice will just change the phase of the $
\rho_k$, leaving $\left|\rho_k\right|^2$ (proportional to the intensity measured in a diffraction experiment) unchanged.

How is this picture altered in the quantum mechanical ground state? Given the above comment, we should evaluate

$$
\bra{0} \rho_q \rho_{-q} \ket{0} = \sum_{j,k=1}^N \bra{0} \exp(iq[x_j-x_k])\ket{0}.
\label{coll_Struct}
$$

Upon substituting the mode expansion \eqref{coll_ModeExp} for the displacements, we are left to evaluate expressions of the form

$$
\bra{0} \exp(\lambda \aop + \mu \adop)\ket{0}.
$$

<p class="message">

Show that the exponent can be written in a form with all occurrences of $\adop$ to the left of all $\aop$ (this operation is called <strong>normal ordering</strong>; we will meet it again).

$$
\exp(\lambda \aop + \mu \adop) = \exp(\lambda \mu /2) \exp(\mu\adop)\exp(\lambda\aop).
$$

Use this result to show that

$$
\bra{0} \exp(\lambda \aop + \mu \adop)\ket{0} = \exp(\lambda \mu /2).
$$

</p>

Deploying this strategy for \eqref{coll_Struct} gives

$$
\begin{equation}
\begin{split}
\bra{0} \rho_q \rho_{-q} \ket{0} = \sum_{j,k=1}^N &\exp(iqa[j-k])\\
&\times\exp\left(-\frac{q^2}{2mN}\sum_{|n| \leq (N-1)/2} \frac{1-\cos\left(\eta_n[j-k]\right)}{\omega(\eta_n)}\right).
\end{split}
\end{equation}
$$

The second exponent modifies the classical prediction of Bragg peaks. We have encountered the expression in exponent before in \eqref{coll_uvar}. Taking the $N\to\infty$ limit with $\left\|j-k\right\|\gg 1$ as before, we find that in the vicinity of the first Bragg peak at $q=2\pi/a$ the summand has the form

$$
\exp(i\Delta q a[j-k])\, \left|j-k\right|^{-2\pi\ell_\text{osc}^2/a^2},
$$

where $\Delta q$ denotes the deviation of $q$ from $2\pi/a$. This leads to the conclusion

$$
\bra{0} \rho_q \rho_{-q} \ket{0} \sim \left(\Delta q\right)^{-1+2\pi\ell_\text{osc}^2/a^2}.
$$

Thus quantum fluctuations replace the Bragg peaks, an indicator of crystalline order, with power law divergences. These remnants of order diminish as $\ell_\text{osc}/a$ increases, indicating larger quantum fluctuations. Again, things are different in higher dimensions: the Bragg peaks survive, albeit reduced in strength, at least for small fluctuations. It is possible, however, for quantum fluctuations to prevent crystallization in the ground state (i.e. at zero temperature). Such systems are called _quantum liquids_. Helium is the prototypical example: the low atomic mass and relatively weak interactions between atoms mean that quantum fluctuations are large.



## Fourier review

This is a good place to collect some facts about Fourier transforms. We start from the [discrete Fourier transform](https://en.wikipedia.org/wiki/Discrete_Fourier_transform) (DFT), which is a change of basis in a finite dimensional space. This is what we used in discussing the chain. There are then two ways to pass to the infinite continuous case described by the Fourier transform.

### Discrete Fourier Transform

For a vector $x_j = 1,\ldots N$ ($N$ taken to be odd), we define the DFT by

$$
F_n = \sum_{j=1}^N f_j e^{-i\eta_n j},
\label{coll_DFT}
$$

where $\eta_n\equiv \frac{2\pi n}{N}$, and $n = -(N-1)/2,\ldots, (N-1)/2$. The key to inverting \eqref{coll_DFT} is the observation

$$
\sum_{n=-(N-1)/2}^{(N-1)/2} e^{i\eta_n j} = \begin{cases}
0 & j\neq 0 \mod N\\
N & j = 0 \mod N.
\label{coll_DFTIdent}
\end{cases}
$$

This gives

$$
f_j = \frac{1}{N}\sum_{n=-(N-1)/2}^{(N-1)/2}  F_n e^{i\eta_n j}.
\label{coll_IDFT}
$$

A more democratic definition would have $1/\sqrt{N}$ in both definitions \eqref{coll_DFT} and \eqref{coll_IDFT}. This would allow us to regard the DFT as a basis change to an orthonormal basis of vectors $e^{(n)}_j = \frac{e^{i\eta_n j}}{\sqrt{N}}$, and both the DFT and its inverse would be unitary transformations.

### $N\to\infty$ limit

In this limit the $\eta_n$ values become dense in the range $(-\pi,\pi]$, with separation $\Delta \eta = 2\pi/N$, and we replace the sum in the inverse DFT \eqref{coll_IDFT} by an integral according to the prescription

$$
\sum_{|n| \leq (N-1)/2} \left(\cdots\right) \xrightarrow{N\to\infty} N \int_{-\pi}^\pi \frac{d\eta}{2\pi}\left(\cdots\right),
$$

giving

$$
f_j = \int_{-\pi}^\pi \frac{d\eta}{2\pi}\,F(\eta) e^{i\eta j}.
$$

### $N\to\infty$, with $f_j = f(jL/N)$,

Alternatively, regard the $N\to\infty$ limit as sampling a function $f(x)$ ever more finely in the range (0,L]. Now it's the DFT, rather than the inverse, that becomes an integral


$$
\hat f(k) \equiv \int_0^L f(x) e^{-ik_n x}\,dx,
$$

where $k_n =2\pi n/L$. Note that $k_n x = \eta_n j$. The pair of transformations is now

$$
\begin{align}
\hat f_k &= \int_0^L f(x) e^{-ik_n x}\,dx\nonumber\\
f(x) &= \frac{1}{L}\sum_k \hat f_k e^{ik_n x}
\label{coll_FTSeries}
\end{align}
$$

This is the conventional form of the Fourier series for a function with period $L$.

With this definition $\hat f_k$ has an extra dimension of distance (on account of the integral), which gets removed by the $1/L$ in the inverse transform.

The analog of the identity \eqref{coll_DFTIdent} is

$$
 \frac{1}{L}\sum_k e^{ik x} = \delta_L(x),
$$

where $\delta_L(x)$ is an $L$-periodic version of the $\delta$-function.

### $L\to\infty$

Finally we arrive at the Fourier transform, where we take $L\to\infty$, so that the inverse transform in \eqref{coll_FTSeries} becomes an integral too

$$
\begin{align}
\hat{f}(k) & = \int_{-\infty}^\infty f(x) e^{-ik_n x}\,dx\nonumber\\
f(x) &= \int_{-\infty}^\infty \hat f(k) e^{ik_n x}\,\frac{dk}{2\pi}.
\label{coll_FTTrans}
\end{align}
$$

My preference is for taking this limit at the last possible moment, that is, sticking with discrete Fourier sums for as long as possible. There are some good(ish) reasons for this

1. Writing $\sum_k$ is easier than $L\int \frac{dk}{2\pi}$, because the $k_n = 2\pi n/L$ can be left implicit.

2. Leaving $k$ as a subsript means we don't need the tilde to distinguish $f(x)$ and $f_k$.

3. There are times where taking the limit leads to a divergent integral, while the sums remain finite. This almost always tells us that there is something interesting going on when we are trying to pass to an infinite system.

### Properties of the Fourier Transform

Here are some properties that hold for all of the above.

1. If $f(x)$ is real $f_k = \left[f_{-k}\right]^*$.

2. If $f(x)$ is even, $f_k$ is even.

3. (Ergo) if $f(x)$ is real and even, so is $f_k$.

### Fourier Transforms of Products

Frequently we have to transform products, so we use the [convolution theorem](https://en.wikipedia.org/wiki/Convolution_theorem)

$$
f(x)g(x) = \frac{1}{L^2}\sum_{k,k'}  f_k  g_k = \frac{1}{L}\sum_q \left(\frac{1}{L}\sum_k  f_k  g_{q-k} \right)e^{iqx},
$$

which shows us that

$$
f(x)g(x) \stackrel{\text{FT}}{\longleftrightarrow} \frac{1}{L}\sum_k  f_k  g_{q-k},
$$

the latter being a discrete convolution.

Frequently we'll have to calculate integrals of such products. I record some examples to give you the general idea

$$
\begin{align}
\int_{0}^L f(x)g(x)\,dx &= \frac{1}{L}\sum_k  f_k  g_{-k}\nonumber\\
\int_{0}^L f'(x)g'(x)\,dx &= \frac{1}{L}\sum_k k^2 f_k  g_{-k}\nonumber\\
\int_{0}^L f(x)g(x)h(x)\,dx &=  \frac{1}{L^2}\sum_{\substack{k_1,k_2,k_3 \\ k_1+k_2+k_3=0}}  f_{k_1} g_{k_2} h_{k_3}\nonumber\\
\int_0^\infty  \phi(x)V(x-y)\phi(y)\,dx \,dy &= \frac{1}{L}\sum_{q}  \phi_{-q} V_q \phi_q
\label{coll_FTExamples}
\end{align}
$$

Note that you can be guided to the right number of factors of $1/L$ by dimensional considerations, or from the number of 'free' sums over wavevectors.

Finally, we often encounter the situation where we have two (or more) arguments, but there is only dependence on the difference, for example

$$
F(x,x') = f(x-x').
$$

In this case

$$
F_{k,k'} = f_k\delta_{k,-k'}.
$$

In the $L\to\infty$ limit this is

$$
\hat F(k,k') = \hat f(k) (2\pi)\delta(k+k').
$$

$(2\pi)\delta(k+k')$ is the $L\to\infty$ limit of $L\delta_{k,-k'}$ as

$$
\frac{1}{L}\sum_k L\delta_k \xrightarrow{L\to\infty} \int_{-\infty}^\infty \frac{dk}{2\pi} 2\pi \delta(k)
$$

With practice, you will find you are able to write down the right hand sides of expressions like \eqref{coll_FTExamples} without too much difficulty.

### Higher dimensions

This all generalizes to higher dimensions straightforwardly. For example

$$
\frac{1}{L^d}\sum_\bk (\cdots) \xrightarrow{L\to\infty} \int (\cdots) \frac{d\bk}{(2\pi)^d}
$$

<p class="message">
Practice writing out \eqref{coll_FTExamples} in $d$ dimensions.
</p>

References
----------

{% bibliography --cited %}
