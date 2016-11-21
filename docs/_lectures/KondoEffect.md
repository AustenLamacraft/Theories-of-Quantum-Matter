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

Reading: {% cite Kouwenhoven:2001aa %}

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
-i\braket{\bk,s,S}{H_J(t)}{\bk',s',S'} &=-i\frac{J}{4V}\boldsymbol{\sigma}_{SS'}\cdot\boldsymbol{\sigma}_{ss'}e^{i[\xi(\bk)-\xi(\bk')]t}.
\label{1stAmp}
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

The magic happens at the next order, where we have the contribution to the amplitude

$$
\begin{align}
-\int_0^t dt_2 \int_0^{t_2}dt_1\braket{\bk,s,S}{H_J(t_2)H_J(t_1)}{\bk',s',S'}.
\end{align}
$$

Comparing with the first order amplitude \eqref{1stAmp} shows that

$$
\begin{align}
- \int_0^{t}dt'\braket{\bk,s,S}{H_J(t)H_J(t')}{\bk',s',S'},
\end{align}
$$

can be regarded as a correction to the matrix element to be inserted into the Golden Rule.

If we insert a complete set of states between the two occurrences of $H_J$, what intermediate (or __virtual__) states contribute to the scattering amplitude? There are just two possibilities

<a name="2Kondo"></a>
![]({{ site.baseurl }}/assets/2KondoProcesses.png)
_The two kinds of intermediate states that contribute at second order._

1. The fermion scatters to $\bk_i$, $s_i$, with $\bk_i$ _above_ the Fermi surface.

2. A particle hole pair is created, with the particle at $\bk,s$. The hole is subsequently removed as the

We see that indistinguishability (and hence fermionic statistics) plays a fundamental role in the second process.

We consider the particle process first. This arises from the terms

$$
\begin{align}
H_J(t') &\longrightarrow \frac{J}{4V} \boldsymbol{\sigma}_{S_iS'}\cdot \boldsymbol{\sigma}_{s_i s'}\adop_{\bk_i,s_i}(t')\aop_{\bk',s'}(t')\nonumber\\
H_J(t) &\longrightarrow \frac{J}{4V} \boldsymbol{\sigma}_{SS_i}\cdot \boldsymbol{\sigma}_{ss_i}\adop_{\bk,s}(t)\aop_{\bk_i,s_i}(t),\quad \abs{\bk_i}>k_\text{F}
\end{align}
$$

The time dependence of the operators gives rise to the phase factor

$$
\begin{align}
\exp\left(i[\xi(\bk)-\xi(\bk_i)]t+i[\xi(\bk_i)-\xi(\bk')]t'\right)\nonumber\\
= \exp\left(i[\xi(\bk)-\xi(\bk')]t+i[\xi(\bk_i)-\xi(\bk')](t'-t)\right)
\end{align}
$$

Extending the integral over $t-t'$ to $\infty$ gives

$$
\int_0^\infty d(t-t') \exp\left(i[\xi(\bk')-\xi(\bk_i)](t-t')\right) = \frac{i}{\xi(\bk')-\xi(\bk_i)+i0}.
$$

Putting it all together gives a contribution

$$
-i\sum_{\abs{\bk_i}>k_\text{F}}\frac{\exp\left(i[\xi(\bk)-\xi(\bk')]t\right)}{\xi(\bk')-\xi(\bk_i)+i0}\left(\frac{J}{4V}\right)^2\left(\sigma^j\sigma^k\right)_{SS'}\left(\sigma^j\sigma^k\right)_{ss'}.
\label{plike}
$$

Now we turn to the hole process. The relevant terms in the coupling are now

$$
\begin{align}
H_J(t') &\longrightarrow \frac{J}{4V} \boldsymbol{\sigma}_{S_iS'}\cdot \boldsymbol{\sigma}_{s s_i}\adop_{\bk,s}(t')\aop_{\bk_i,s_i}(t')\nonumber\\
H_J(t) &\longrightarrow \frac{J}{4V} \boldsymbol{\sigma}_{SS_i}\cdot \boldsymbol{\sigma}_{s_i s'}\adop_{\bk_i,s_i}(t)\aop_{\bk',s'}(t),\quad \abs{\bk_i}<k_\text{F}.
\end{align}
$$

The phase factor is now

$$
\begin{align}
\exp\left(i[\xi(\bk_i)-\xi(\bk')]t+i[\xi(\bk)-\xi(\bk_i)]t'\right)\nonumber\\
= \exp\left(i[\xi(\bk)-\xi(\bk')]t+i[\xi(\bk)-\xi(\bk_i)](t'-t)\right).
\end{align}
$$

Integrating over $t-t'$ then gives

$$
\int_0^\infty d(t-t') \exp\left(i[\xi(\bk_i)-\xi(\bk)](t-t')\right) = \frac{i}{\xi(\bk_i)-\xi(\bk)+i0}.
$$

On account of the order of $\adop_{\bk,s}$ and $\aop_{\bk',s'}$ being reversed, we have a minus sign relative to the particle contribution, leading to

$$
i\sum_{\abs{\bk_i}<k_\text{F}}\frac{\exp\left(i[\xi(\bk)-\xi(\bk')]t\right)}{\xi(\bk_i)-\xi(\bk)+i0}\left(\frac{J}{4V}\right)^2\left(\sigma^j\sigma^k\right)_{SS'}\left(\sigma^k\sigma^j\right)_{ss'}.
\label{hlike}
$$

The phase factors in \eqref{plike} and \eqref{hlike}, as in the first order result \eqref{1stAmp}, are responsible for the $\delta$-function setting $\xi(\bk)=\xi(\bk')$ in the Golden Rule. Both \eqref{plike} and \eqref{hlike} have a logarithmic divergence that is cut-off at low energies by $\xi(\bk)=\xi(\bk')$. For example,

$$
\sum_{\abs{\bk_i}>k_\text{F}}\frac{1}{\xi(\bk')-\xi(\bk_i)+i0}\sim -\nu(0)V\log\left(\frac{\Lambda}{\xi(\bk)}\right),
$$

where $\Lambda$ is an upper cut-off arising from the microscopic scales of the problem. The overall logarithmic dependence of the second order correction is then

$$
i\frac{J^2\nu(0)}{32 V}\exp\left(i[\xi(\bk)-\xi(\bk')]t\right)\log\left(\frac{\Lambda}{\xi(\bk)}\right)\left[\sigma^j,\sigma^k\right]_{SS'} \left[\sigma^j,\sigma^k\right]_{ss'}.
\label{TotalLog}
$$

Since

$$
\left[\sigma^j,\sigma^k\right]_{SS'} = 2i\epsilon_{jkl} \sigma^l_{SS'},
$$

we can interpret \eqref{TotalLog} as a logarithmic correction to the coupling $J$

$$
\delta J = \frac{J^2\nu(0)}{2}\log\left(\frac{\Lambda}{\xi(\bk)}\right).
\label{KondoCorrect}
$$

This was Kondo's discovery. For $J>0$ this represents an _increase_ in the magnitude of the coupling, and a corresponding logarithmic correction to the scattering rate. At finite temperature, the lower cutoff in the integrals is replaced by the temperature, leading to the observed $\log T$ dependence of the resistivity on temperature.

## Renormalization Group analysis of the Kondo Hamiltonian

The logarithmic correction \eqref{KondoCorrect} becomes the same order as  $J$ when the low energy cut-off approaches the __Kondo scale__

$$
E_\text{K} \equiv \Lambda \exp\left(-\frac{2}{\nu(0)\abs{J}}\right).
$$

What can we say about the physics at or below this scale? Continuing with perturbation theory leads to contributions $\propto \log^p(\Lambda/\xi)$ with $p>1$, which doesn't really help to clarify things. An alternative is to ask for the __effective Hamiltonian__ describing the problem on a particular scale.

### Effective Hamiltonian

To be precise, we start with a Kondo problem defined with a certain $\Lambda$. Then, for $\Lambda'\ll\Lambda$, we ask for the effective Hamiltonian describing the system when there are no particle excitations with $\xi(\bp)>\Lambda'$ and no hole excitations with $\xi(\bp)<-\Lambda'$. Let's refer to this subspace as $\cH_{\Lambda'}$. This effective Hamiltonian is different from the original Hamiltonian: we saw in [Lecture 7]({{ site.baseurl }}/lectures/Lattice/) that, since $\Lambda'\ll \Lambda$, the effective Hamiltonian in $\cH_{\Lambda'}$ is

$$
\delta H = - H_JP_{[\Lambda',\Lambda]}H_0^{-1}H_J,
$$

where $P_{[\Lambda',\Lambda]}$ projects on particle excitations with $\Lambda>\xi(\bp)>\Lambda'$ and hole excitations with $-\Lambda<\xi(\bp)<-\Lambda'$. It's not hard to see that evaluating $\delta H$ is very similar to the second order calculation of the previous section, showing that $\delta H$ has the same form as $H_J$ with $\delta J$ given by

$$
\delta J = \frac{J^2\nu(0)}{2}\log\left(\frac{\Lambda}{\Lambda'}\right).
\label{KondoCorrectRG}
$$



### Solution of the RG Equations


## The Kondo Effect in Quantum Dots

Glazman Kouwenhoven article

{% cite Kouwenhoven:2001aa %}


References
----------

{% bibliography --cited %}
