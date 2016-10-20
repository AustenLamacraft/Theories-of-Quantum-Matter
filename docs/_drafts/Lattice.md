---
layout: page
title: Lattice Models and Strong Correlation
author: Austen Lamacraft
chapter: 7
summary: Tight binding models. Hubbard models and the Mott transition. Superexchange.
published: true
---

<p class="message">
Models defined on discrete sites -- so-called <strong> tight binding models</strong> --  provide a conceptually simple way to think about the effects of strong interactions between particles. The phenomenology of these models is central to many current avenues of research in condensed matter, whether in solid state or atomic physics.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}

Reading:

---

# Tight Binding Models

A typical many body Hamiltonian consists of kinetic energy and interaction terms. We haven't yet had much to say about the situation where the particles additionally feel a potential that could arise from the crystal lattice, or impurity atoms, or both. In this lecture we will be concerned with systems in periodic potentials, so that the noninteracting part of the Hamiltonian is (taking the 1D case for simplicity)

$$
H = \sum_{j=1}^N \left[-\frac{1}{2m}\partial_i^2 +V(\br_i)\right] = \int \left[\frac{1}{2m}\partial_x\pdop\partial_x\pop + V(x)\pdop\pop\right] dx,
$$

with $V(x+a)=V(x)$. As you know, [Bloch's theorem](https://en.wikipedia.org/wiki/Bloch_wave) tells us that the eigenstates are labelled by a continuous index $k$ (__crystal momentum__) and discrete index $n$ (__band index__) and have the form

$$
\psi_{k,n}(x) = e^{ikx} \varphi_{k,n}(x),
\label{latt_bloch}
$$

where $\varphi_{k,n}$ is periodic. $k$ lies in the __Brillouin zone__ $(-\pi/a,\pi/a]$. The eigenvalues $E_n(k)$ give the __energy bands__.

We are going to be concerned with the case where the lattice potential is very strong, so that the wavefunctions -- at least in the lowest bands that we assume are those occupied -- are highly localized. The wavefunctions become very small between the minima of the potential. We will see that in this limit we can introduce operators $\adop_j$, $\aop_j$ describing particles in these localized states, and that the coupling between neighbouring sites can be captured by the __tight binding Hamiltonian__

$$
H_t = -t \sum_{j} \left[\adop_j\aop_{j+1}+\adop_{j+1}\aop_j\right],
\label{latt_tb}
$$

which will play the role of kinetic energy in our models. In fact, we've already met such a description, when we described a magnon propagating in a spin chain in [Lecture 4]({{ site.baseurl }}/lectures/SpinModels/).

## Physical Motivation

This subsection is to shed some light on the origin of \eqref{latt_tb}. Feel free to jump to the conclusion.

Let's think about the form of the Bloch states in a deep 1D lattice in more detail. You know that in a stationary state, the current $j(x)$ is conserved

$$
j = -\frac{i}{2m}\left[\psi^*(\partial_x\psi^{}) - (\partial_x\psi^*)\psi^{}\right].
\label{latt_j}
$$

Representing $\psi(x)=\sqrt{\rho(x)}e^{i\theta(x)}$, this can be written

$$
j = \frac{\rho\partial_x\theta}{m}.
$$

The Bloch states at non-zero $k$ carry a current. As we've said, away from the minima of the lattice potential, the amplitude of the wavefunction is very small. Thus if $j$ is constant, $\partial_x\theta$ must be large. Essentially all of the change in the phase of the wavefunction happens in these regions. Where the wavefunction is larger, its phase is barely changing.

To describe this situation more quantitatively, we use the WKB approximation, which consists in writing the wavefunction in the form

$$
\psi_\text{WKB}(x) = \frac{\alpha}{\sqrt{k(x)}}\exp\left(i\int^ x k(x')dx'\right)+ \frac{\beta}{\sqrt{k(x)}}\exp\left(=i\int^ x k(x')dx'\right),
$$

where $k(x) = \sqrt{2m(E-V(x))}$. In fact, we want to describe the part of the wavefunction with real exponents, where $k(x) = i\kappa(x)$ because $V(x)>E$. Substitution into the current \eqref{latt_j} gives

$$
j = \frac{1}{m}\Im \alpha^*\beta^{}.
  \label{latt_jwkb}
$$

<a name="WKB"></a>
![]({{ site.baseurl }}/assets/WKB.png)
_The Bloch states in the WKB picture._

$\alpha$ is the amplitude of the wavefunction in the well on the left, and $\beta$ is the amplitude on the right. By periodicity of the Bloch state, it is only their phase that differs. Call this phase change $\theta$. In terms of the Bloch states \eqref{latt_bloch} $\theta=ka$. Then \eqref{latt_jwkb} says

$$
j = \frac{|\alpha|^2}{m}\sin\theta.
\label{latt_jsin}
$$

Now the Bloch function $\varphi_k(x)$ satisfies the Schrödinger equation (we drop the band index)

$$
\left[-\frac{1}{2m}\left(\partial_x + ik\right)^2 + V(x)\right]\varphi_k(x) = E_k \varphi_k(x),
$$

where a vector potential has arisen from the phase factor $e^{ikx}$. By considering a small change $\Delta k$ as a perturbation we can find

$$
\frac{\partial E_k}{\partial k} = ja,
$$

or

$$
\frac{\partial E_k}{\partial \theta} = j.
$$

Together with \eqref{latt_jsin} we conclude that the band has the form

$$
E(k)-E(0) = 2t\left[1-\cos ka\right],
$$

with some characteristic energy $t$. Thus we have found

1. The Bloch states looks like a superposition of localized states, with the phase changing abruptly between sites.

2. The lowest band is sinusoidal.

<p class="message">
Confirm that both these features are captured by the tight binding model \eqref{latt_tb}.
</p>


# Bose Hubbard Model

The simplest interacting tight binding model that we can write down is the celebrated __Hubbard model__.

$$
H = H_t + H_U = -t \sum_{\langle j\,k\rangle}  \left[\adop_j\aop_{k}+\adop_{k}\aop_j\right] + \frac{U}{2}\sum_j \Nop_j(\Nop_j-1),
$$

where $\Nop_j=\adop_j\aop_j$ is the number operator for site $j$, and the sum in the first term is over all nearest neighbour pairs on some lattice (e.g. square or cubic). The on-site interaction term $\Nop_j(\Nop_j-1)$ is just what we have been writing as $\adop_j\adop_j\aop_j\aop_j$ previously. In 1D, you can think of this as the lattice version of the Lieb--Liniger model, in that in involves a kinetic term (the tight binding model) and a short-ranged interaction term.

The Hubbard model was first introduced to describe electrons in solids. In that case the particles are fermions, and we have to deal with their spin. We'll come to this __Fermi Hubbard model__ shortly. In this section we are going to discuss the more straightforward __Bose Hubbard__ model introduced in {% cite Fisher:1989aa %}. The application these authors had in mind was to liquid He$^{4}$ or superconductors in which the Cooper pairs (more on those later) approximate interacting bosons. However, ten years after its invention, the model found its natural home in the description of bosonic atoms confined to optical lattices.

## The Mott State

In analyzing a new model we always begin by asking what happens when each of the terms in the Hamiltonian dominate the others. This allows us to get the lie of the land, and think about how these different limits may fit together.

For the Bose--Hubbard model, we start by taking $U/t\to\infty$ The eigenstates are then states of definite occupation number, with energy

$$
E(\mathbf{N}) = U \sum_j N_j(N_j-1).
$$

To find the ground state at fixed particle number, we should try filling the $N_\text{sites}$ sites as uniformly as possible. This is easy if the filling $\nu \equiv N/N_\text{sites}$ is integer. Otherwise, denote by $\lfloor \nu\rfloor$ the largest integer less than $\nu$, and $\lceil \nu\rceil$ the smallest integer larger than $\nu$. Then the number of sites with occupancy $\lceil \nu\rceil$ is $N\_\text{sites}\left(\nu - \lfloor \nu\rfloor\right)$. The ground state energy has a piecewise linear dependence on $\nu$

$$
\frac{E_0}{N_\text{sites}} = \left(\nu - \lfloor \nu\rfloor\right)\cE(\lceil \nu\rceil) + \left(\lceil \nu\rceil - \nu\right)\cE(\lfloor \nu\rfloor),
$$

where $\cE(N) = \frac{U}{2}N(N-1)$. As the result the chemical potential $\mu = \frac{\partial E_0}{\partial N}$ is piecewise constant, with jumps occurring when $\nu$ is integer.

$$
\mu = 
$$

If we think about varying the chemical potential instead, th

Need a picture.

Getting at the phase boundaries for large $$U$$ by adding or removing a particle on top of the Mott state.

## The Superfluid State

## The Phase Diagram

# Fermi Hubbard Model

## $$U\to\infty$$ and Superexchange

On account of their being more than one species of particle, the $$U\to\infty$$ limit of the Fermi--Hubbard model is not as straightforward as in the Bose case we considered earlier (Note that we are free to consider more than one species of Boson).

Should be cautious, as in a large system the energy spectrum of the Heisenberg model will exceed the separation from doubly occupied sites.

### Discussion: two sites

How does the degeneracy get lifted?

### Effective Hamiltonian

### Schrieffer--Wolf Transformation

We are going to perform a unitary transformation on the Hamiltonian that eliminates the hopping term to lowest order. A unitary transformation can be _generated_ by an antihermitian operator, meaning that we write

$$
U = \exp(A)
$$

where $A^\dagger = -A^{}$. The transformed Hamiltonian is

$$
H\longrightarrow U^{}HU^\dagger = H + \left[A,H\right]+\cdots.
$$

Writing $H=H_t + H_U$, where $H_t$ is the hopping and $H_U$ the interaction, we require

$$
\left[A,H_U\right] = -H_t.
\label{lat_Aeq}
$$

Now we need to deduce the form of $A$. Since $H_t$ is a sum of terms that move particles by a single lattice site. Since $H_U$ doesn't move particles, $A$ must. So let's try the form

$$
A = \sum_j \alpha(\mathbf{N})\cdop_{j+1,s}\cop_{j,s} - \text{h.c.},
\label{lat_Aform}
$$  

where $\alpha(\mathbf{N})$ is a function of the site occupancies. Note the minus sign in \eqref{lat_Aform}, required for antihermiticity. Substituting into \eqref{lat_Aeq} gives the condition

References
----------

{% bibliography --cited %}
