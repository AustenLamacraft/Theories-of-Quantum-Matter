---
layout: page
title: The Lieb-Liniger Model
author: Austen Lamacraft
chapter: 2
summary: Bethe's wave function. The Bethe equations. Excited states.
---

<p class="message">
In this lecture we are going to look at a model of many interacting particles that we can solve <strong>exactly</strong>. The price we pay is that the model is rather special: it describes particles moving in one dimension with short range interactions.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}

Reading: {% cite Sutherland:2004 %}.

---


## The Model

In the last lecture we encountered the Hamiltonian

$$
H = \frac{1}{2m}\sum_j \frac{\partial^2}{\partial x_j^2} + c\sum_{j<k}\delta(x_j-x_k),
\label{LL_LL}
$$

describing a system of interacting one dimensional bosons. We showed that the $g\to\infty$ limit of this model can be described in terms of noninteracting fermions. We are know going to discuss the solution for general $g$. This is possible because the eigenfunctions, which are not product states, have a very special form first written down by Hans Bethe in 1931 in the context of a model of a chain of coupled spins (see [Lecture 4]({{ site.baseurl }}/lectures/SpinModels/)). Bethe's approach was applied to the model \eqref{LL_LL} by Lieb and Liniger in 1963 {% cite Lieb:1963aa %}, and for that reason it is usually known as the __Lieb--Liniger model__.

## Bethe's Wavefunction

Bethe's wavefunction -- often known as the __Bethe ansatz__ -- can be viewed as the factorization of the scattering of the $N$ particles in the gas into a sequence of two particle scattering events. The fact that this works is very special, and is restricted to one dimension. Furthermore, it only works for very special interaction potentials, of which the $\delta$-function is the simplest example.

Thus we start by considering the two particle problem.

### Two Particles

The two particle time independent Schrödinger equation is

$$
\left[-\frac{1}{2}\left(\frac{\partial^2}{\partial x_1^2}+\frac{\partial^2}{\partial x_2^2}\right) + c\delta(x_1-x_2)\right]\Psi(x_1,x_2)=E\Psi(x_1,x_2),
\label{LL_2part}
$$

(We've set $m=1$.) Since we are dealing with bosons $\Psi(x_1,x_2) = \Psi(x_2,x_1)$. Away from $x_1=x_2$ we have the free particle Schrödinger equation, so the general solution is a superposition of plane waves of the form

$$
\Psi(x_1,x_2) =  \exp(i[k_1 x_1 + k_2 x_2])
\label{LL_1wave}
$$

\eqref{LL_1wave} describes a state with momentum $P= k_1+k_2$ and energy $E = \frac{k_1^2}{2m}+\frac{k_2^2}{2m}$. Note that for given values of $P$ and $E$, the most general solution contains only the two terms

$$
\Psi(x_1,x_2) = A_{12} \exp(i[k_1 x_1 + k_2 x_2]) + A_{21} \exp(i[k_1 x_2 + k_2 x_1]),\quad x_1\leq x_2,
\label{LL_Psi2}
$$

with the solution extended to $x_1>x_2$ by symmetry.

$$
\Psi(x_1,x_2) = A_{12} \exp(i[k_1 x_2 + k_2 x_1]) + A_{21} \exp(i[k_1 x_1 + k_2 x_2]),\quad x_1 \geq  x_2.
\label{LL_Psi2b}
$$

The relationship between the amplitudes $A_{12}$ and $A_{21}$ is determined by the interaction. Substituting \eqref{LL_Psi2} into the Schrödinger equation \eqref{LL_2part} gives

$$
-\frac{i}{m}\left[A_{12}(k_2-k_1) + A_{21}(k_1-k_2)\right] + c\left[A_{12}+A_{21}\right]=0,
$$

or

$$
\frac{A_{21}}{A_{12}} = \frac{k_1 - k_2 -ic}{k_1 - k_2 +ic} \equiv \exp\left[-i\theta(k_1-k_2)\right].
$$

The last equation defines the __phase shift__ $\theta(k)$. Note that conservation of flux and the symmetry of the wavefunction means that $\abs{A_{12}}=\abs{A_{21}}$. In the impenetrable limit ($c\to\infty$) the phase shift goes to $\pi.


### Three Particles

What about three particles? The wavefunction $\Psi(x_1,x_2,x_3)$ can be pictured as a function in 3D space, with the interactions imposing conditions at the three planes $x_1=x_2$, $x_2=x_3$, and $x_1=x_3$.

<a name="Nodal"></a>
![]({{ site.baseurl }}/assets/NodalSurfaces.png)
_Three particle problem as a 3D wavefunction._

Away from these planes, we expect the wavefunction to be a superposition of plane waves of fixed energy

$$
\Psi_{\bk}(\bx) = \exp\left(i\bk\cdot\bx\right),
$$

with $\bk = (k_1,k_2,k_3)$ and $\bx = (x_1,x_2,x_3)$. This describes a state with

$$
P = k_1+k_2+k_3,\qquad E = \frac{k_1^2}{2m}+\frac{k_2^2}{2m} + \frac{k_3^2}{2m}.
$$

We can picture these conditions as the intersection of a plane and a sphere in momentum space. This illustrates that on kinematic grounds alone we should expect a _continuum_ of plane waves in the superposition to make an eigenstate. It is here, however, that the special nature of the interaction saves us, as it turns out that can get away with only a _finite_ superposition of all the $3!=6$ ways to assign the three momenta $(k_1,k_2,k_3)$ to the three particles.

<a name="ScatteringGeometry"></a>
![]({{ site.baseurl }}/assets/ScatteringGeometry.png)
_Momentum space geometry of three particle scattering._

There is a nice geometrical picture that allows us to understand why this is. In the [above 3D representation](#Nodal), the centre of mass coordinate of the three particles is increasing in the $(1,1,1)$ direction, in which the system naturally has translational invariance. The plane perpendicular to this direction describes the _relative_ motion of the three particles. In this plane the the three planes corresponding to the pairwise coincidence of particle coordinates appear as three lines at $\pi/3$ to each other, meeting at the origin.

<a name="mirrors"></a>
![]({{ site.baseurl }}/assets/mirrors.png)
_Three particle scattering as a 2D 'kaleidoscope', with the different sectors corresponding to different orderings of the particles._

The plane is divided into six regions that correspond to the $3!=6$ arrangements of the three particles on the line. Bosonic symmetry means that the wavefunction is the same in each of the six sectors. The scattering of three particles can then be viewed as a solution to the wave equation in 2D, with boundary conditions imposed by the interaction on the lines.

If we think of scattering in the classical limit -- rays undergoing specular reflection from the mirrors of the kaleidoscope -- then an incoming ray can only to scatter to five other directions, no matter which order it hits the walls. This collection of six rays corresponds to the six possible assignments of the three momenta $(k_1,k_2,k_3)$ to the three particles.

<a name="allrays"></a>
![]({{ site.baseurl }}/assets/allrays.png)
_The six possible 'rays' related by reflections from the surfaces._

For the real wave problem this suggests that the wavefunction has the form

$$
\Psi(x_1,x_2,x_3) = \sum_P A_P \exp\left(i\sum_{j=1}^3 k_{P(j)}x_j\right),\quad x_1\leq x_2\leq x_3.
\label{LL_3part}
$$

With the amplitudes $A_P$ chosen so as to satisfy the boundary conditions. However, we already know how to do this from our analysis of the two particle problem. We must have, for instance

$$
\frac{A_{213}}{A_{123}} = \exp\left[-i\theta(k_1-k_2)\right].
$$

In this way, you can convince yourself that

$$
\frac{A_{321}}{A_{123}} = \exp\left[-i\theta(k_1-k_2)-i\theta(k_2-k_3)-i\theta(k_1-k_3)\right]
$$

_irrespective_ of which transpositions of neighbouring momenta we used to get from $(123)$ to $(321)$. In terms of our kaliedoscope, this corresponds to different rays having the same phase, no matter in which order they hit the mirrors.

### Bethe Ansatz for $N$ Particles

The Bethe ansatz for $N$ particles is a straightforward generalization of \eqref{LL_3part}, and depends on a set of $N$ momenta $k_1,\ldots k_N$

$$
\Psi(x_1,x_2,\ldots,x_N) = \sum_P A_P \exp\left(i\sum_{j=1}^N k_{P(j)}x_j\right),\quad x_1\leq x_2\leq\cdots x_N.
\label{LL_Npart}
$$

The momentum and energy are

$$
P = \sum_{j=1}^N k_j,\qquad E = \sum_{j=1}^N\frac{k_j^2}{2m}.
$$

I want to emphasize that, despite the apparent complexity of the wavefunction \eqref{LL_Npart}, consisting of a sum over $N!$ permutations, it represents a _huge_ simplification over the most general superposition of plane wave states of fixed energy and momentum.

By considering the condition at $x_j=x_{j+1}$ we obtain a relationship between $A_P$ and $A_{P'}$, where the permutations $P$ and $P'$ are related by the exchange of $P(j)$ and $P(j+1)$

$$
P'=(P(1),P(2),\ldots, P(j-1),P(j+1),P(j),P(j+2),\ldots,P(N)).
$$

The same analysis as for the two particle case yields

$$
\frac{A_{P'}}{A_P} = \frac{k_{P(j)}-k_{P(j+1)}-img}{k_{P(j)}-k_{P(j+1)}+img} = \exp\left[-i\theta(k_{P(j)}-k_{P(j+1)})\right].
\label{LL_NExchange}
$$

It can be checked that a solution of the set of $N-1$ such equations is given by

$$
A_P = \prod_{1\leq j<k\leq N}\left(1 + \frac{ic}{k_{P(j)}-k_{P(k)}}\right).
$$

<p class="message">
Confirm that $c\to\infty$ reproduces the result of last lecture on the impenetrable gas.
</p>

## Bethe Equations

Although we've found exact eigenstates of a system of $N$ particles, something is still missing. The problem is that our wavefunctions are parameterized in terms of $N$ momenta $k_j$. This is no problem if we work in infinite space: our wavefunctions represent solutions of the $N$ particle scattering problem, and if we were to move to the time domain we could construct $N$ particle wavepackets that approach from infinity, scatter from each other, and depart to infinity once again.

However, we want to use these wavefunctions to describe the thermodynamic behaviour of matter at finite density. In other words, we have to put our gas of particles in a 'box' to stop them flying off to infinity. The size of the box and the number of particles are then to be taken to infinity in such a way that the density remains constant. The theoreticians favourite box is of course _periodic boundary conditions_!

### Imposing Quantization Conditions in a Periodic System

Imposing

$$
\Psi(x_1,\ldots, x_j,\ldots, x_N) = \Psi(x_1,\ldots, x_j+L,\ldots, x_N)
\label{LL_pbc}
$$

will have the effect of selecting certain $k_j$ values. For noninteracting particles this is a trivial matter. Here, a particle that moves from $x_j$ to $x_j+L$ scatters from all the other particles, acquiring phase shifts from each that depend on the momentum differences. The quantization conditions that result are then a system of coupled equations.

To impose the boundary conditions, we must first write down the Bethe wavefunction in the appropriate region. Let's consider the region

$$
x_2\leq\cdots x_N\leq x_1.
$$

Bosonic symmetry means that the wavefunction has the form

$$
\Psi(x_1,x_2,\ldots,x_N) = \sum_P A_P \exp\left(i\sum_{j=1}^N k_{Q(j)}x_j\right),
$$

where $Q(2)=P(1)$, $Q(3)=P(2)$, ... $Q(1)=P(N)$. Then equating $\Psi(x_1,\ldots, x_N)$, which lies in the first region, with $\Psi(x_1+L,\ldots,x_N)$, which lies in the second, gives

$$
A(P) e^{ik_{Q(1)}L} = A(Q).
\label{LL_quant}
$$

Using the relation between amplitudes \eqref{LL_NExchange}, we can find

$$
\frac{A(P)}{A(Q)}= \prod_{j=2}^N \exp\left[-i\theta(k_{Q(1)}-k_{Q(j)})\right].
$$

Putting this together with \eqref{LL_quant} gives the quantization conditions

$$
1 = e^{ik_jL}\prod_{\substack{n=1\\n\neq j}}^N e^{-i\theta(k_j-k_n)}.
$$

Often we take the log and write this as

$$
k_j L = 2\pi I_j + \sum_{\substack{n=1\\n\neq j}}^N \theta(k_j-k_n),
$$

where the $I_j$ are integers. These are the __Bethe equations__, which generalize the familiar quantization condition $k_j = 2\pi I_j/L$ for free particles. A set $k_j$ solving the equations are sometimes called the __Bethe roots__.

The solution of the Bethe equations gives us eigenstates of the periodic system and the corresponding eigenergies. In fact, all eigenstates have this form (it isn't obvious). Unfortunately, the equations are hard to solve. We get some intuition by recalling the impenetrable limit. In this case the phase shift $\theta \to \pi$. If we have an _odd_ number of particles we get back the free particle quantization condition, and the lowest energy state obviously corresponds to filling the states

$$
I_j=-(N-1)/2, -(N-3)/2,\ldots, -1, 0, 1 \ldots (N-1)/2,
$$

just as when we discussed the Fermi gas. Thus, as we begin to reduce $c$ from $\infty$, as long as the values of $k_j$ evolve smoothly, without any jumps, we can stick with the above assignment of $I_j$ for the ground state.

### Thermodynamic Limit

Now is the time to leap to the thermodynamic limit! We expect the $k_j$ value to become closely spaced, just as in the Fermi gas, so that we can replace  

$$
\sum_k\left(\cdots\right) = L\int^q_{-q} \rho(k)dk,
$$

where $L\rho(k)dk$ is the number of $k_j$ in the interval $dk$ in the limit, and $\pm q$ represents the region of $k$ where the distribution $\rho(k)$ of Bethe roots is nonvanishing.

<div class="message">
Although I've referred to the $k_j$ above as the momenta of the particles, this is actually highly misleading. In particular, the momentum distribution $\bar N_k$ introduced in the previous lecture does not correspond to the distribution $\rho(k)$ studied here. One way to convince yourself of this fact is to note that the second moment of $\rho(k)$ gives the total energy, while the second moment of $\bar N_k$ gives only the kinetic energy.

Finding $\bar N_k$ is not straightforward for wavefunctions that are not product states of momentum eigenstates. For this reason it's useful to refer to the $k_j$ in the Bethe wavefunction as <strong>quasimomenta</strong>.
</div>

### Excited States

### Excitation Spectrum of a Fermi Gas

Make correspondence with excited states of Fermi gas.

References
----------

{% bibliography --cited %}
