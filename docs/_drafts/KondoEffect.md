---
layout: page
title: The Kondo Effect
author: Austen Lamacraft
chapter: 13
summary: The Kondo model. Divergences at second order. Scaling theory.
published: true
---

> The Kondo model describes a single spin coupled to a Fermi gas. It seems innocuous enough: one small step up in difficulty from a static impurity, perhaps. Not so! The Kondo problem has in fact played a huge role in many body physics over the years, both for the <strong> methods </strong> required to solve it, and because it keeps popping up in different guises.

## Contents
{:.no_toc}

* Toc
{:toc}

---

## The Kondo Model

Jun Kondo's paper _Resistance Minimum in Dilute Magnetic Alloys_ {%cite Kondo:1964aa %} presents a theoretical solution to a puzzling, but perhaps unspectacular observation. At low temperatures, the resistance of metals falls. This is nothing to do with superconductivity, but is a more mundane consequence of electron-electron or electron-phonon scattering falling with temperature, as the thermal population of phonons or particle hole pairs diminishes. Evidence had accumulated over the years, however, that in nonmagnetic metals containing magnetic impurities (Copper with Manganese or Iron, for example), the low temperature resistance eventually began to _rise_ again.

The fact that the effect could be observed with tiny concentrations of magnetic impurities (as low as 0.0005% Iron atoms in Copper!), lead Kondo to study the scattering of electrons by _single_ impurity, described by the model that now bears his name

$$
H = \sum_{\bk,s=\uparrow,\downarrow} \xi(\bk)\adop_{\bk,s}\aop_{\bk,s} + \overbrace{J \mathbf{S}\cdot \mathbf{s}(0)}^{\equiv H_J}
\label{Kondo}
$$

The first term is just the kinetic energy of free fermions, while the second describes the coupling of an impurity spin $\mathbf{S}$ -- which we will take to be $S=1/2$, though of course other values are possible -- to the spin density of the fermions

$$
\mathbf{s}(\br)=   \sum_{s,s'}\pdop_{s}(0)\frac{\boldsymbol{\sigma}_{ss'}}{2}\pop_{s'}(0)=\frac{1}{V}\sum_{\substack{\bk,\bk'\\s,s'}} \frac{\boldsymbol{\sigma}_{ss'}}{2}\adop_{k',s'}\aop_{k,s}.
$$

The fermions and impurity are coupled at the origin, where the impurity is assumed to be located.

Kondo showed that, unlike nonmagnetic impurities, which give rise to temperature independent scattering and to the residual resistance of metals, scattering from a magnetic impurity was _enhanced_ at low energies or temperatures. His perturbation theory calculation, which we'll repeat below, gave a correction to the scattering, and hence to the resistivity, proportional to $\log T$. This was as observed in experiment.

It all looked good, except that -- and this is where the emphasis shifted strongly to the theoretical aspects of the problem -- this contribution to the scattering was _diverging_ as the energy of the scattered fermion vanished. In a practical sense, that meant that Kondo's calculation could not be trusted at energies where the correction becomes large. The more conceptual issue was: what did it mean? What was the spin of the impurity doing to the Fermi sea?

The Kondo model went on to become one of the testbeds of the __renormalization group__ (RG) approach to many body physics, quantum field theory, and statistical mechanics. The RG is a framework for understanding the behaviour of systems at scales intermediate between the microscopic (Fermi wavelength or size of impurity in this case) and the macroscopic (size of the system). The idea is that is that if these scales are separated by many orders of magnitude, the behaviour at intermediate scales should be approximately scale independent. In the case of the Kondo model, the effective Hamiltonians (we met this notion in [Lecture 7]({{ site.baseurl }}/lectures/Lattice/)) at different energy scales should be _almost_  the same. The incompleteness of the scale invariance is encoded in a variation of the parameters of the effective Hamiltonian.

In this context, the divergences found by Kondo in his perturbative calculation can be understand as a finite __renormalization__ of the parameters of the effective Hamiltonian as the scale changes. We will see how this point of view allows us to understand the low energy behaviour of the Kondo model in much greater detail. The utility of the RG is not restricted to perturbation theory, but this is all we'll have time for.


## Kondo's Calculation

We are going to consider the scattering of a single fermion above the Fermi sea, described by the state

$$
\ket{\bk,s}\equiv \adop_{\bk,s}\ket{\text{FS}}\otimes \ket{S}_\text{imp},
$$

where $\ket{\text{FS}}$ is the Fermi sea ground state of the Fermi gas, and $\ket{S}_\text{imp}$ describes the spin. In time dependent perturbation theory in the coupling between the impurity and the fermions we compute the scattering amplitude by expanding the interaction picture evolution operator

$$
U_\text{I}(t)=T \exp\left(-i\int_0^t H_J(t') dt'\right),
$$

where $T$ denotes time ordering, and the time evolution of the coupling is

$$
H_J(t) = \frac{1}{V}\sum_{\substack{\bk,\bk'\\s,s'}} \mathbf{S}(t)\cdot\frac{\boldsymbol{\sigma}_{ss'}}{2}\adop_{k',s'}(t)\aop_{k,s}(t),
$$

with

$$
\aop_{\bk,s}(t) = e^{-i\xi(\bk)t}\aop_{\bk,s},\quad \adop_{\bk,s}(t) = e^{i\xi(\bk)t}\adop_{\bk,s}.
$$

$\mathbf{S}(t)$ has no time dependence since the impurity spin does not appear in the unperturbed Hamiltonian. Nevertheless, we label it so as to keep track of the _order_ in which it appears, coupled to operators with true time dependence, when we expand the evolution operator.

### First Order

At first order $H_J$ can create a particle hole pair or scatter the particle. We are considering scattering, so we consider initial and final states of the form

$$
\ket{\bk,s,S}\equiv\adop_{\bk,s}\ket{\text{FS}}\otimes \ket{S}_\text{imp}.
$$

The relevant matrix element is just

$$
\begin{align}
\braket{\bk,s,S}{H_J(t)}{\bk',s',S'} &=\frac{J}{4V}\boldsymbol{\sigma}_{SS'}\cdot\boldsymbol{\sigma}_{ss'}e^{i[\xi(\bk)-\xi(\bk')]t}.
\end{align}
$$

The Fermi Golden Rule then gives the scattering rate

$$
\Gamma_{\bk',s',S'\to \bk,s,S} = 2\pi\left(\frac{J}{4V}\right)^2\abs{\boldsymbol{\sigma}_{SS'}\cdot\boldsymbol{\sigma}_{ss'}}^2\delta(\xi(\bk)-\xi(\bk')).
$$

Summing over final states gives

$$
\begin{align}
\Gamma^{\text{1 imp}}_{\bk',s',S'} &=\sum_{\bk,s,S} \Gamma_{\bk',s',S'\to\bk,s,S}\nonumber\\
&=V\sum_{s,S}\int \nu(\xi) \Gamma_{\bk',s',S'\to\bk ,s,S}d\xi\nonumber\\
&=\frac{\pi J^2\nu(\xi)}{2V}\left(5-4\delta_{s'S'}\right)
\end{align}
$$

where $\nu(\xi)$ is the density of states per spin component per unit volume. When $S'\neq s'$ the scattering is larger because spin flip processes are allowed as well as those that don't flip the spin.

If we add up the scattering for a dilute concentration of impurities $n_\text{imp}$ by simply multiplying by their number $N_\text{imp}=n_\text{imp}V$ and averaging over the initial spin orientation, we get

$$
\Gamma = \frac{3\pi n_\text{imp}J^2\nu(\xi)}{2}
$$

### Second Order

The magic happens at the next order, where we have to consider

$$
\begin{align}
\int_0^\infty\braket{\bk,s,S}{H_J(t)H_J(0)}{\bk',s',S'} dt.
\end{align}
$$

If we insert a complete set of states between the two occurrences of $H_J$, what intermediate (or __virtual__) states contribute to the scattering amplitude? There are just two possibilities

<a name="2Kondo"></a>
![]({{ site.baseurl }}/assets/2KondoProcesses.png)
_The two kinds of intermediate states that contribute at second order._

1. The fermion scatters to $\bk_i$, $s_i$, with $\bk_i$ _above_ the Fermi surface.

2. A particle hole pair is created, with the particle at $\bk,s$. The hole is subsequently removed as the

We see that indistinguishability (and hence fermionic statistics) plays a fundamental role in the second process.

## Comparison with Impurity

## Scattering from the Spin

### Time Dependent Perturbation Theory

### First Order

### Second Order

### The Resistance Minimum

## Renormalization of the Kondo Hamiltonian

### Schrieffer--Wolf Transformation


### Solution of the RG Equations


## Kondo Problem at Strong Coupling

## The Kondo Effect in Quantum Dots

Glazman Kouwenhoven article

Kondo enhances conduction
