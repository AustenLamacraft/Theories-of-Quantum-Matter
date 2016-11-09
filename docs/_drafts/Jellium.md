---
layout: page
title: Jellium
author: Austen Lamacraft
chapter: 11
summary: Ground state energy. Hubbard--Stratonovich transformation
published: true
---

<p class="message">
There are many situations in which an approach based on finite orders of perturbation theory either misses important physics, or leads to divergences (often both). Mean field theories like those of BCS or Bogoliubov are one way forward. Here we introduce another: transforming the calculation of the partition function into a field theory in an auxillary field, which can then be analyzed by the saddle point method. We use this approach to study a toy model for electrons in a metal: a gas of fermions interacting via the Coulomb force in a neutralizing background of uniform charge density that plays the role of the ionic lattice. This is <strong>Jellium</strong>.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}

---

## Dimensionless parameters

The Jellium Hamiltonian describing fermions interacting via the Coulomb interaction is (we ignore spin)

$$
H = \int \frac{1}{2m}\nabla\pdop\cdot\nabla\pop + \frac{1}{2}\int d\br d\br' :\left[\rho(\br)-n
\right]V(\br-\br')\left[\rho(\br')-n\right]:.
$$

Here, as usual, $\rho(\br)=\pdop(\br)\pop(\br)$ is the number density operator, $:(\cdots):$ denotes normal ordering, and $\rho(\br)-n$ is the deviation from the uniform background charge. The two body interaction is

$$
V(\br) = \frac{q^2}{\abs{\br}}
$$

(in [Electrostatic units](https://en.wikipedia.org/wiki/Electrostatic_units)). A basic question is: what is the relative magnitude of the kinetic and potential terms? For a free fermion gas in its ground state, the kinetic energy per particle is $\frac{3}{5}E_F$. Since $n = \frac{k_\text{F}^3}{6\pi^2}$ this scales with density as $n^{2/3}$. The scaling of the interaction energy is $n^{1/3}$, showing that (perhaps counterintuitively) low density corresponds to strong interactions, relatively speaking. An appropriate dimensionless parameter is the ratio of the [Wigner--Seitz radius](https://en.wikipedia.org/wiki/Wigner–Seitz_radius) to the Bohr radius $r_\text{Bohr} = (mq^2)^{-1}$ for our system. This gives

$$
\frac{r_s}{r_\text{Bohr}} = \left(\frac{3}{4\pi n}\right)^{1/3} mq^2.
$$

We have already encountered the following states in Fermi gases, roughly in order of increasing interaction strength:

1. The [Landau Fermi liquid]({{ site.baseurl }}/lectures/FermiGas/)

2. [Ferromagnetism]({{ site.baseurl }}/lectures/MoreSecondQuantization/#stoner-criterion-for-ferromagnetism), when the Stoner criterion is reached. Although we discussed a microscopic calculation, the same criterion can easily be phrased in terms of the Landau function $G(\phi)$.

3. [Mott states]({{ site.baseurl }}/lectures/Lattice/#fermi-hubbard-model) that can occur in a lattice potential, giving insulating behaviour in systems that band theory predicts to be metallic.

In Jellium, where there is no lattice potential, it is possible crystallization to occur at very large values of $r_s$, breaking the continuous symmetry of spatial translations and forming a [Wigner Crystal](https://en.wikipedia.org/wiki/Wigner_crystal).

## Perturbation Series for the Partition Function

We are going to be concerned with the calculation of the partition function

$$
Z = \tr\left[\exp\left(-\beta H\right)\right],
$$

where $H=H_0+H_\text{int}$, with $H_0$ a free particle Hamiltonian and $H_\text{int}$ describes interactions

Could calculate other things, but this is the simplest to start with.

Consider the case of quartic interactions

## The Hubbard--Stratonovich Transformation



### Trace Over Fermions

### Polarization Operator



Here we introduce..

Evaluate the partition function using the linked cluster expansion
