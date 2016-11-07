---
layout: page
title: Superconductivity
author: Austen Lamacraft
chapter: 10
summary: Cooper's problem. BCS theory. The BCS-BEC crossover.
published: true
---

<p class="message">
Our grand tour of many body theories continues with <strong>Bardeen, Cooper and Schrieffer's</strong> (BCS) theory of superconductivity, based on the idea that electrons in a superconductor bind to form <strong> Cooper pairs</strong> that behave like bosons. The phenomena of superconductivity and superfluidity are then closely linked.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}


---

## Bosons as Fermion Pairs

So far, we have discussed Bose--Einsetein condensation and superfluidity using models of bosonic particles. Can systems of fermions display the same phenomena? Experimentally, we already know that the answer must be yes, as an atom of He$^4$ consists of protons, neutrons, and electrons -- two of each -- which are are all fermions. A He$^4$ atom is a composite boson, but in many situations its internal structure is of no relevance.

To return to model systems, consider the Fermi gas Hamiltonian that we discussed in the last lecture

$$
H = \int d\br\left[ \sum_{s=\uparrow,\downarrow}\frac{1}{2m}\nabla\pdop_s\cdot\nabla\pop_s + U_0 \pdop_\uparrow\pdop_\downarrow\pop_\downarrow\pop_\uparrow\right].
\label{super_model}
$$

For a pair of particles of opposite spin, this is equivalent to

$$
H = -\frac{1}{2m}\left[\nabla_1^2+\nabla^2\right] + U_0\delta(\br_1-\br_2).
$$

For $U_0<0$ and sufficiently large, we expect a bound state to form with a symmetric spatial wavefunction and a spin singlet. Now consider a dilute gas of such bound pairs. 'Dilute' in this context means that the interparticle separation is large compared to the size of the bound state. In this limit, we expect to be able to treat the bound pairs as spinless bosons, which can then display all the usual phenomena associated with Bose gases.

The idea that superfluidity can arise in a system of fermions as a result of pairing was conjectured to explain the phenomenon of __superconductivity__ in metals at low temperatures {% cite Schafroth:1954aa %}. If electrons could form pairs, then superconductivity could be understood as superfluidity of charge $-2e$ bosons. Job done.

You may have spotted the problem with this idea: electrons actually _repel_ each other due to the Coulomb interaction. A realistic description of electron pairing must involve a mechanism for attractive interactions. The 1957 realization of Bardeen, Cooper and Schrieffer (BCS) was that such an attraction is provided by the coupling of the electrons to phonons. For states near the Fermi surface, this attraction can actually overcome the Coulomb repulsion (once screening is accounted for, see [Lecture 12]({{ site.baseurl }}/lectures/Jellium/)). [Problem Set 3]({{ site.baseurl }}/problems/Problems3/) describes how this can occur in a simple model.

This is still not the whole story. The net attraction between electrons is still not strong enough to form a bound state, if we were just to consider isolated pair. BCS showed that in a gas of fermions at finite density, _arbitrarily_ weak attraction is enough to cause pairing: it is a truly many body phenomenon. This was first demonstrated by Leon Cooper using a toy model that accounted for the existence of the Fermi sea in the pairing problem, and for this reason we speak of __Cooper pairs__.

So BCS got the Nobel prize (which conveniently can be split three ways) and their theory become one of the pillars of condensed matter physics. In this lecture we'll discuss BCS theory using the model Hamiltonian \eqref{super_model} with attractive short-ranged interactions. This is not a particularly realistic model of the combined phonon-mediated attraction and screened Coulomb repulsion, but displays the same physics. It _is_ a good model for pairing of ultracold fermionic atoms, first observed in 2004 {% cite Regal:2004aa %}.

## BCS Theory

### The BCS Wavefunction

In momentum space our Hamiltonian \eqref{super_model} has the form

$$
H =\sum_{\bk,s} \epsilon(\bk)\adop_{\bk,s}\aop_{\bk,s} + \overbrace{\frac{U_0}{V}\sum_{\bk_1+\bk_2=\bk_3+\bk_4} \adop_{\bk_1,\uparrow}\adop_{\bk_2,\downarrow}\aop_{\bk_3,\downarrow}\aop_{\bk_4,\uparrow}}^{\equiv H_\text{int}},
$$

We take the interaction between the two species to be attractive $U_0<0$. The ground state
of the non-interacting problem is

$$
\ket{\text{FS}}=\prod_{|\bp|<k_\text{F}} \adop_{\bp\uparrow}\adop_{\bp\downarrow}\ket{\text{VAC}}.
$$

The application of the interaction Hamiltonian $H_\text{int}$ generates terms of the form

$$
\adop_{\bp+\bq\uparrow}\adop_{-\bp\downarrow}\aop_{-\bp'\downarrow}\aop_{\bp'+\bq\uparrow}\ket{\text{FS}}.\qquad |\bp|,|\bp+\bq|>k_\text{F},\, |\bp'|,|\bp'+\bq|<k_\text{F}.
$$

Note the difference from the Bose case: because the state $\bp=0$ plays no special role -- like every
other state below the Fermi surface it is occupied with one fermion of each species -- we do not just
create pair excitations with zero centre of mass momentum $\bq=0$. Nevertheless, the BCS theory starts
makes the assumption that the ground state involves a superposition of zero momentum pairs only. We can write such a state very generally as

$$
\ket{\text{pair}}\equiv\sum_{\sum_\bp n^P_\bp=N/2} c_{\{n^P_{\bp}\}} \prod_{\bp}\left[\adop_{\bp\uparrow}\adop_{-\bp\downarrow}\right]^
{n_{\bp}}\ket{\text{VAC}},
\label{pair_fermi}
$$

where the numbers $n_{\bp}^P$ are either $0$ or $1$ (why?). Note that in writing \eqref{pair_fermi} the
number of each species is assumed to be exactly $N/2$. Restricting outselves to states of this form means that

$$
\braket{\text{pair}}{H}{\text{pair}} = \braket{\text{pair}}{H_{\text{pair}}}{\text{pair}},
$$

where $H_{\text{pair}}$ is

$$
H_{\text{pair}}=\sum_{\bp,s}\epsilon_{\bp}\adop_{\bp,s}\aop_{\bp, s}+\frac{U_0}{V}\sum_{\bp, \bp'}\adop_
{\bp\uparrow}\adop_{-\bp\downarrow}\aop_{-\bp'\downarrow}\aop_{\bp'\uparrow}.
\label{super_bcsH}
$$

Now, can we solve \eqref{super_bcsH}? It's useful to introduce the operators $\bdop_\bp=\adop_{\bp\uparrow}\adop_{-\bp
\downarrow}$ and its conjugate, that create and destroy a $\left(+\bp,-\bp\right)$ pair. Because our pair
ansatz \eqref{pair_fermi} only includes amplitudes for a given $\left(+\bp,-\bp\right)$ pair of momenta
having either none or two fermions, the pair Hamiltonian can be written in terms of the pair operators $
\bdop_\bp$, $\bop_\bp$ as

$$
H_{\text{pair}}=2\sum_{\bp}\xi_{\bp}\bdop_\bp\bop_\bp+\frac{U_0}{V}\sum'_{\bp,\bp'} \bdop_\bp
\bop_{\bp'}.
\label{pair_h}
$$

This may now look like a quadratic problem, but the pair operators $\bop_\bp$, while commuting at different momenta

$$
[\bop_\bp,\bop_{\bp'}]=[\bdop_\bp,\bdop_{\bp'}]=[\bdop_\bp,\bop_{\bp'}]=0\qquad \bp\neq\bp',
$$

obey the _hardcore constraint_

$$
(\bdop_\bp)^2=0,
\label{hardcore}
$$

which is a result of $\bdop$ being composed of a pair of fermions obeying the exclusion principle.
Nevertheless, given that a pair that `hops' into a level at $\bp$ could come from any other level $\bp'$, it
seems reasonable to try, as a variational state, one in which the amplitudes for the occupancy of each
level are uncorrelated

$$
\ket{N \text{ pair}}\equiv\left[\sum_\bp c_\bp \bdop_\bp\right]^{N/2}\ket{\text{VAC}}
\label{bcs_cons}
$$

corresponding to \eqref{pair_fermi} but with a set of coefficients $c_{\{n^P_\bp\}}$ that factorizes.
Finding the variational energy of Equation (\ref{bcs_cons}) is still a tricky problem. For instance, what is the
expectation value of the kinetic energy?

$$
\mathrm{K.E}=2\sum_\bp\xi_{\bp}\langle\bdop_\bp\bop_\bp\rangle\equiv 2\sum_\bp\xi_{\bp} \langle n^P_
\bp\rangle,
\label{ke}
$$

Finding the average number of pairs $\langle n^P_\bp\rangle$ in \eqref{bcs_cons} is however not
obvious. Instead, we follow the route taken by BCS, and consider instead the
normalized wavefunction

$$
\ket{\text{BCS}} =\prod_\bp \left[v_\bp\bdop_\bp+u_\bp\right]\ket{\text{VAC}}\qquad |u_\bp|^2+|v_\bp|
^2=1.
\label{bcs}
$$

This is a superposition of states with different total number of particles. One can see quite easily,
however, that the projection onto a fixed number $N$ of particles corresponds exactly to \eqref{bcs_cons} if $c_\bp=v_\bp/u_\bp$. Since \eqref{bcs}) is a product of factors corresponding to each
momentum separately,  $\langle n^P_\bp\rangle$ is easily found to be $v_\bp^2$. The total variational
energy of this state is

$$
\braket{\text{BCS}}{H}{\text{BCS}}=2\sum_\bp \xi_{\bp}v_\bp^2+\frac{U_0}{V}\sum_{\bp,\bp'}u^*_\bp v_
\bp u_{\bp'}v^*_{\bp'}.
\label{bcs_en}
$$

What about our use of a non-conserving wavefunction? The expectation value of any operator that itself
conserves the number of particles can evidently be written

$$
\braket{\text{BCS}}{\cO}{\text{BCS}}=\sum_N P_N \braket{N \text{ pair}}{\cO}{N\text{ pair}},
$$

The probabilities $P_N$ are

$$
P_N=\sum_{\sum n^P_\bp=N/2}\prod_\bp \left[n^P_\bp v^2_\bp+\left(1-n^P_\bp\right)u^2_\bp \right],
$$

which is strongly peaked around $\langle N \rangle=2\sum_\bp v^2\_\bp=2\sum_\bp \langle n^P\_\bp
\rangle$, with a variance that is $O(N)$. Thus at large $N$

$$
\braket{\text{BCS}}{\cO}{\text{BCS}}\to \braket{\langle N\rangle \text{ pair}}{\cO}{\langle N\rangle\text{ pair}}.
$$

In the thermodynamic limit, we might as well work with the non-conserving form \eqref{bcs}. To fix the number of particles, we should introduce a chemical potential into the Hamiltonian. Note that we didn't have to do this with the Bogoliubov theory as we fixed the number of particles in the condensate $N_0$.

There is an interesting alternative interpretation of the pair Hamiltonian \eqref{pair_h}. Acting within
the pair subspace, the three operators $\bop_\bp$, $\bdop_\bp$, and $\bdop_\bp\bop_\bp-1/2$ behave
as the components of a spin-$1/2$

$$
S_\bp^+ \equiv \bdop_\bp,\quad S_\bp^- \equiv \bop_\bp,\quad S^z_\bp = \bdop_\bp\bop_\bp-1/2,
$$

on account of the commutation relations

$$
\left[\bdop_\bp,\bop_\bp\right]=2\left(\bdop_\bp\bop_\bp-1/2\right)\nonumber\\
\left[\bdop_\bp,\left(\bdop_\bp\bop_\bp-1/2\right)\right]=-\bdop_\bp.
$$

This representation is sometimes called __Anderson spins__. In this way we can write \eqref{pair_h} as a spin chain

$$
H_{\text{pair}}=2\sum_\bp \epsilon_{\bp}S_\bp^z+\frac{U_0}{V}\sum_{\bp,\bp'}S^+_\bp S^-_{\bp'}.
$$

If we parameterize $\left(u_\bp,v_\bp\right)$ as $(\cos(\theta/2)e^{i\varphi/2},\sin(\theta/2)e^{-i\varphi/2})$
then the variational energy Equation (\ref{bcs_en}) has the form (except for a constant)

$$
\braket{\text{BCS}}{H}{\text{BCS}}=-\sum_\bp \xi_{\bp}\cos\theta_\bp+\frac{U_0}{4V}\sum_{\bp,\bp'}\sin
\theta_\bp\sin\theta_{\bp'}\cos\left(\varphi_\bp-\varphi_{\bp'}\right).
\label{spin_en}
$$

where $\xi(\bp)=\epsilon(\bp)-\mu$. The interpretation of \eqref{spin_en} is the following. The first term tends to align the spins with the z-axis in the - direction for $\xi_{\bp}<0$ and in the + direction for $\xi_{\bp}>0$. On the other hand, the
second term, originating from the potential energy between the constituents of a pair, wants the spins to
lie in the x-y plane. Of course, the spins are really quantum mechanical spin-1/2 operators. The
direction corresponds to the direction of $\langle \mathbf{S}\rangle$ in the BCS state.

It remains to actually minimize the energy \eqref{bcs_en} to determine the $u$'s and $v$'s, or
equivalently, the configurations of the spins. For $U_0>0$ (repulsive interactions), the spins all point in
the $\pm z$ direction, forming a 'domain wall' where $\xi_{\bp}$ changes sign at the Fermi surface. The relationship between the spin picture and the average number of pairs is

$$
\langle n^P_{\bp}\rangle=v_\bp^2=\left[1-\cos\theta_\bp\right]/2,
$$

so we see that this corresponds simply to a sharp fermi step. For $U_0<0$, the system can lower its
energy by taking $\sin\theta_\bp\neq 0$. The lowering of the interaction energy more than compensates
the increase in kinetic energy that comes from smearing the step, see Equation (\ref{ke}). Clearly all of the
angles $\varphi_\bp$, describing the angle in the x-y plane, should be equal. Taking  the extremum of
\eqref{spin_en} with respect to the angles $\theta_{\bp}$ gives the condition

<a name="FermiWall"></a>
![]({{ site.baseurl }}/assets/wall.png)
_Anderson spin configurations and the associated distribution functions for the free fermi gas
  (top) and the BCS state (bottom)._

$$
\xi_{\bp}\sin\theta_\bp-|\Delta|\cos\theta_\bp=0,
$$

where it is convenient to introduce the __gap parameter__

$$
\Delta=-\frac{U_0}{2V}\sum_\bp e^{i\varphi}\sin\theta_\bp=-\frac{U_0}{V}\sum_\bp u_\bp v^*_\bp.
$$

Thus we have

$$
\cos\theta_\bp=\frac{\xi_{\bp}}{E_\bp},\qquad \sin\theta_\bp=\frac{|\Delta|}{E_\bp}, \qquad E_\bp=\sqrt{\xi
(\bp)^2+|\Delta|^2}.
$$

The meaning of these solutions is very simple. They correspond to the alignment of the spin vector with the direction of the effective `magnetic field'

$$
\left(\mathrm{Re}\,\Delta.\mathrm{Im}\,\Delta,\xi_\bp\right)
\label{heff}
$$

To be self-consistent, the solution must further satisfy the __gap equation__

$$
\Delta=-\frac{U_0}{2V}\sum_\bp \frac{\Delta}{E_\bp}.
\label{gap_eq}
$$

It is clear that for $U_0>0$ there are no non-trivial solutions ($\Delta=0$ always), while for any $U_0<0$ there is always a solution at finite $\Delta$ (One can also show that it corresponds to a minimum of energy. In the repulsive case, the
solution at $\Delta=0$, which always exists, corresponds to a maximum). Passing to the continuum limit
we have

$$
\Delta=-\frac{U_0}{2}\int \frac{d\bp}{\left(2\pi\right)^3} \frac{\Delta}{E_\bp}
\label{cont_sc}
$$

This integral is divergent in the ultraviolet. We turn to the question of how to regularize it in the next
section. More significant, however, is the dependence of the right hand side on $\Delta$ for small $
\Delta$. This is

$$
\sim-\frac{U_0}{2}\nu(\mu)\Delta\log \Lambda/\Delta,
$$

where $\Lambda$ is the UV cut-off (we will shortly identify it with the Fermi energy), and $\nu(\mu)$ is the density of states at the chemical potential. This shows that no matter how small the attraction $U_0<0$, there will always be a solution of \eqref{cont_sc} with finite $\Delta$. This is the essence of the __Cooper phenomenon__. It should be compared with the
situation in which there are not a macroscopically large number of particles present. In that case $\mu=0
$, so that $\xi_{\bp}=\epsilon(\bp)>0$. Then the right hand side of \eqref{cont_sc} has no divergence at
low energies because the density of states $\nu(E)$ vanishes. The finite value of $\Delta$ is thus seen to be a consequence of the fermi sea.

We have shown that the BCS state, consisting of a superposition of zero momentum pairs, is a better variational state than the Fermi sea for arbitrarily weak attractive interactions. Further, it coincides with the Fermi sea at zero interaction, suggesting a smooth evolution of the ground state as interactions are switched on. What, if anything, does this have to do with the strong coupling picture of tightly bound bosonic pairs in a dilute gas that we gave in the introduction?

### Discussion: Heisenberg's Problem


### The BCS-BEC Crossover

Surprisingly, the wavefunctions in two limits are the same! This can be seen
from the first quantized form of the number conserving wavefunction  \eqref{bcs_cons}

$$
\ket{N \text{ pair}}=\mathcal{A}\prod_{i<j}^{N/2} \varphi(\br_{i\uparrow}-\br_{j\downarrow}),
\label{bcs_first}
$$

where $\varphi_\bp=v_\bp/u_\bp$.

<p class="message">
Do you understand where this comes from?
</p>

At weak coupling the extent of the `pair wavefunction' $\varphi(\br)$ is
large compared to the separation between pairs. In this limit the antisymmetrization operation, required
by the exclusion principle, plays a dominant role, as we have seen. When the pair wavefunction $\varphi
(\br)$ has a much smaller extent than the typical separation between pairs, we can expect that the
anitsymmetrization operation in \eqref{bcs_first} is not too important, as two fermions of the same
type rarely overlap. In this limit, any given momentum state has a low average occupancy, and the
hardcore constraint \eqref{hardcore} does not play a significant role. Then \eqref{pair_h} can
really be thought of as a Hamiltonian for isolated pairs, with the corresponding binding energy. The resulting wavefunction is then essentially a Gross-Pitaevskii state of molecules. This all suggests that the BCS state is smoothly connected to the Bose--Einstein condensate (BEC), though the __BCS-BEC crossover__.

To see how this works in detail we first have to address the issue of regularizing \eqref{cont_sc}. The ultraviolet divergence that we encountered here, and in the Bose gas, is really a two body effect that arises from our model $\delta$-function potential. To see why this is so, consider the two particle Schrödinger equation

$$
-\frac{1}{2m}\left[\nabla_1^2+\nabla^2\right]\Psi(\br_1,\br_2) + U(\br_1-\br_2)\Psi(\br_1,\br_2)=E\Psi(\br_1,\br_2),
$$

now with a general two-body potential $U(\br_1-\br_2)$. In terms of the relative coordinate $\br=\br_1-\br_2$ this becomes

$$
-\frac{\nabla^2}{m}\Psi(\br) + U(\br)\Psi(\br)=E\Psi(\br),
$$

corresponding to a reduced mass of $\mu = m/2$. In scattering problems we look for solutions of the form

$$
\Psi(\br) = \Psi_\text{free}(\br) + \Psi_\text{scatt}(\br),
$$

where $\Psi_\text{free}(\br)$ solves the free particle equation, giving the inhomogenous equation for $\Psi_\text{scatt}(\br)$

$$
\left[E-\frac{\nabla^2}{m}\right]\Psi_\text{scatt}(\br) + U(\br)\Psi_\text{scatt}(\br)=-U(\br)\Psi_\text{free}(\br).
\label{inhomog}
$$

It is a standard result of scattering theory that the zero energy wavefunction as the form

$$
\Psi(\br)\xrightarrow{\abs{\br}\gg r_0} \overbrace{1}^{\Psi_\text{free}} - \overbrace{\frac{a}{\abs{\br}}}^{\Psi_\text{scatt}}
$$

where $a$ is the (s-wave) scattering length, and $r_0$ is the range of the potential. This corresponds to the behaviour in Fourier space

$$
\tilde\Psi_\text{scatt}(\bk)\xrightarrow{\abs{\bk}\ll r_0^{-1}} \frac{4\pi a}{\abs{\bk}^2}
$$

Returning to the BCS problem, it's not hard to see that with a general potential the gap parameter is now momentum dependent, leading to a gap equation

$$
\Delta_\bp=-\frac{1}{2}\int \frac{d\bp'}{(2\pi)^3}\tilde U(\bp-\bp')\frac{\Delta_{\bp'}}{E_{\bp'}}.
\label{gen_gap_eq}
$$

The solution of \eqref{gen_gap_eq} is in general very difficult, but it can be greatly simplified if we
assume that the range of the potential $U(\br)$ is the shortest length scale in the problem. With this assumption we can write \eqref{gen_gap_eq}

$$
\begin{align}
\Delta_\bp+\frac{1}{V}\sum_{\bp'}U(\bp-\bp')\frac{\Delta_{\bp'}}{2\epsilon_{\bp'}}&=-\frac{1}{V}\sum_{\bp'} \left[U_0(\bp)\frac{\Delta_{\bp'}}{2E_{\bp'}}-U(\bp-\bp')\frac{\Delta_{\bp'}}{2\epsilon_
{\bp'}}\right]\nonumber\\
&=-\frac{U_0(\bp)}{V}\sum_{\bp'} \left[\frac{\Delta_{0}}{2E_{\bp'}}-\frac{\Delta_{0}}{2\epsilon_
{\bp'}}\right].
\label{super_GapReg}
\end{align}
$$

We have added the same term to both sides. However, the integral on the right hand side
converges on a scale set by the momentum corresponding to the larger of $\Delta_\bp$ or $\mu$, which
by assumption is much less than the scale on which $U_0(\bp)$ varies, and justifies replacing $U_0(\bp-
\bp')$ with $U_0(\bp)$, and $\Delta_{\bp'}$ with $\Delta_0$.

By comparing the Fourier transform of \eqref{inhomog} at $E=0$ and \eqref{super_GapReg}, we can conclude

$$
\Delta_\bp=-\frac{m}{4\pi a}\Delta_0 \widetilde{\nabla^2 \Psi_\text{scatt}}(\bp),
$$

so that

$$
-\frac{m}{4\pi a}\Delta_0=\frac{1}{V}\sum_{\bp}\left[\frac{\Delta_{0}}{2E_{\bp'}}-\frac{\Delta_{0}}
{2\epsilon_{\bp'}}\right].
\label{sc_reg}
$$

In the weak-coupling limit, the gap $\Delta$ (we drop the subscript $0$ from now on, as we never need
to discuss the high momentum behaviour of $\Delta_\bp$ again) is expected to be much smaller than
the Fermi energy, and the chemical potential is just equal to the Fermi energy $E_F=k_\text{F}^2/2m$. The
integral in \eqref{sc_reg} can then be done explicitly to give the gap

$$
\Delta_{\mathrm{BCS}}=\frac{8}{e^2}E_F\exp\left[-\frac{\pi}{2|k_\text{F} a|}\right]
\label{bcs_gap}
$$

Outside of the weak-coupling limit, we have to account for a change in the chemical potential, in order to
keep a fixed density. This is apparent from the equation

$$
N=2\sum_\bp \langle n^P_\bp\rangle=2\sum_\bp v_{\bp}^2=\sum_\bp \left[1-\frac{\xi_{\bp}}{E_\bp}\right]
\label{mu_eq}
$$

The two  equations \eqref{sc_reg} and \eqref{mu_eq} are conveniently cast in the dimensionless
form

$$
\begin{align}
\frac{\pi}{2k_\text{F} a}=\int_0^{\infty} dx \left[1-\frac{x^2}{\sqrt{(x^2-\mu)^2+\Delta_0^2}} \right] \nonumber\\
\frac{2}{3}=\int_0^{\infty} dx\, x^2\left[1-\frac{x^2-\mu}{\sqrt{(x^2-\mu)^2+\Delta_0^2}}\right]
\end{align}
$$

where $\mu$ and $\Delta\_0$ are measured in units of $E_F=p\_F^2/2m$, and the unit of length is $k_\text{F}^
{-1}$. In these units the total density of particles of both types is $1/3\pi^2$.

<a name="BCS-BEC"></a>
![]({{ site.baseurl }}/assets/BCS-BEC.png)
_Variation of gap and chemical potential accross the BCS (left, weak attraction) to BEC (right, strong attraction)._

The point $1/k_\text{F}a=0$, where the scattering length diverges, corresponds to the formation of a bound state. This is
an interesting part of the phase diagram, because here (if
the temperature is zero) there is only one energy scale (the Fermi energy) and only one length scale (the
fermi wavelength). All quantities such as $\Delta$ and $\mu$ are simply some universal fraction of the
Fermi energy. In particular the equation of state of the system is

$$
E/V=\alpha\frac{3}{5}E_Fn\propto n^{5/3}.
$$

The numerical factors are to emphasize the resemblance of the unitary gas to the free fermi gas, where $
\alpha=1$. The mean field theory above gives $\alpha=0.59$, while a Quantum Monte Carlo calculation
found $\alpha=0.44\pm0.01$. There is of course no reason to believe the quantitative
predictions of the mean-field theory in the region where interactions are so strong.

### Quasiparticle Excitations

Like the Bogoliubov theory, this BCS theory also lets us discuss excitations out of the ground state. We
didn't solve the BCS hamiltonian by a Bogoliubov transformation, as is often done, but we can introduce
the Bogoliubov-type excitations after the fact. Recalling the BCS state

$$
\ket{\text{BCS}} =\prod_\bp \left[v_\bp\adop_{\bp\uparrow}\adop_{-\bp\downarrow}+u_\bp\right]\ket{\text{VAC}},
$$

it's easy to see that the operators

$$
\begin{eqnarray}
\alop_{\bp\uparrow}&=&u_\bp\aop_{\bp\uparrow}-v_\bp\adop_{-\bp\downarrow}\nonumber\\
\alop_{\bp\downarrow}&=&u_\bp\aop_{\bp\downarrow}+v_\bp\adop_{-\bp\uparrow},
\end{eqnarray}
$$

satisfy the canonical fermion anticommutation relations and annihilate the BCS state

$$
\alop_{\bp,s}\ket{\text{BCS}}\rangle=0.
$$

Consider the state

$$
\ket{\bp,s}=\aldop_{\bp,s}\ket{\text{BCS}}=\adop_{\bp,s}\prod_{\bp'\neq \bp} \left[v_\bp\adop_
{\bp\uparrow}\adop_{-\bp\downarrow}+u_\bp\right]\ket{\text{VAC}},
$$

corresponding to the momentum state $\bp$ certainly containing one particle with (pseudo-)spin $s$,
and the $\left(-\bp,-s\right)$ state certainly being empty. The result is an eigenstate of momentum and
spin, but is it an energy eigenstate, and thus a sharply defined excitation? Note that if we chose $s=
\uparrow$ so that the $\left(\bp,\uparrow\right)$ state is certainly occupied it means that $\adop_{\bp
\uparrow}\adop_{-\bp\downarrow}\ket{\bp,\uparrow}=0$, so that the corresponding term no longer
appears in the interaction term when it is applied to this state. The level is said to be `blocked'. Thus it
certainly is an eigenstate of the pair problem, if $\ket{\text{BCS}}$ is. What is its energy? We have
to take into account the kinetic energy as well as the loss of attractive interaction energy, see \eqref{spin_en}

$$
E_{s}(\bp)=\xi_{\bp}[\overbrace{\left(1-\langle n^P_\bp\rangle\right)}^{\left(\bp,s\right)\,\mathrm{occupied}}
\overbrace{-\langle n^P_\bp\rangle}^{\left(-\bp,-s\right)\,\mathrm{empty}}]+\overbrace{\Delta\sin\theta_
\bp}^{\mathrm{`blocking'}}=E_{\bp}
$$

Note that these quasiparticle excitations always have a gap $\Delta_{s}$ given by  

$$
\Delta_s=\min_\bp E_\bp=\begin{cases}
\Delta, & \mu>0,\\
\sqrt{\Delta^2+\mu^2},&  \mu<0.
\end{cases}
$$

As $\mu$ turns from positive to negative as we pass from BCS to BEC (see the [above figure]({{ site.baseurl }}/lectures/Superconductivity/#BCS-BEC)), the density of states of the quasiparticle excitations turns from having a square root singularity $\nu(\epsilon)\sim \left(\epsilon-\Delta_s\right)^{-1/2}$ to vanishing like a square root $\nu(\epsilon)\sim \left(\epsilon-\Delta_s\right)^{1/2}$.

### The Effect of Temperature

When we discussed the quasiparticle excitations, we didn't account for the effect that they have on the
self-consistent equation. This is fine when there are few excitations in the system, but when many levels
are blocked, we have to take this effect into account, leading to a reduction in the gap parameter. The
obvious example of this effect is a system at finite temperature, where the quasiparticles, being
fermionic, have the fermi-dirac distribution function

$$
n_s(\bp)=\frac{1}{e^{\beta E_s(\bp)}+1},
$$

where we allow the quasiparticle energies, and hence distributions, to differ for the two species. Since
the occupancy of a given state can be zero or one only $n_s(\bp)$ is also the _probability_ for that
state to be occupied. Thus the probability of a  $(\bp,s;-\bp,-s)$ state being blocked is $n_s(\bp)\left[1-n_
{-s}(-\bp)\right]+n_{-s}(-\bp)\left[1-n_{s}(\bp)\right]$. What if we have _both_ a $(\bp,s)$ and a $(-
\bp,-s)$ quasiparticle present?


$$
\aldop_{\bp\uparrow}\aldop_{-\bp\downarrow}\ket{\text{BCS}}=\left[u_\bp\adop_{\bp\uparrow}
\adop_{-\bp\downarrow}-v_\bp\right]\prod_{\bp'\neq \bp} \left[v_\bp\adop_{\bp\uparrow}\adop_{-\bp
\downarrow}+u_\bp\right]\ket{\text{VAC}},
$$

which is orthogonal to the BCS state. In the Anderson spin language this corresponds to a single flipped
spin, and has energy given by twice the 'magnetic field' each pair experiences $2E(\bp)$, see \eqref{heff}. The spin interpretation allows us to see easily that this state contributes $-u_\bp v_\bp$ to the self consistent
equation, and occurs with probability $n_{\uparrow}(\bp)n_{\downarrow}(-\bp)$. The overall result is thus

$$
\begin{eqnarray}
\Delta&=&\frac{U_0}{V}\sum_{\bp}\frac{\Delta}{2E_{\bp'}}(\overbrace{[1-n_{\uparrow}(\bp)][1-n_
{\downarrow}(-\bp)]}^{\mathrm{no\,qp}}-\overbrace{n_{\uparrow}(\bp)n_{\downarrow}(-\bp)}^{\mathrm
{two\, qp}})\nonumber\\
&=&\frac{U_0}{V}\sum_{\bp}\frac{\Delta}{2E_{\bp'}}[1-n_{\uparrow}(\bp)-n_{\downarrow}(-\bp)].
\end{eqnarray}
$$

For the case $E_s(\bp)=E(\bp)$, and in the BCS limit where $\mu\sim E_F$, $\Delta\ll E_F$, this is
conveniently presented in the form

$$
\frac{1}{U_0\nu(E_F)}=-\int_\Delta dE \tanh\left(\frac{E}{2T}\right)\frac{\Delta}{\sqrt{E^2-\Delta^2}},
$$

where $\nu(E_F)$ is the fermi surface density of states, and we have left out the upper cut-off. This
expression needs to be regularized as in the zero temperature case considered before. The resulting $
\Delta(T)$ varies from $\Delta(0)=\Delta_{\text{BCS}}$ given by \eqref{bcs_gap}, to zero at

$$
\begin{equation}\label{Tc}
k_\text{B}T_\text{c}=\frac{\gamma}{\pi}\Delta_{\text{BCS}},
\end{equation}
$$

where $\gamma$ is the [Euler--Mascheroni constant](https://en.wikipedia.org/wiki/Euler–Mascheroni_constant). This relationship between $T_\text{c}$ and $\Delta_\text{BCS}$ is a key numerical prediction of the BCS theory. An important point is that the variation is smooth, suggesting a second order transition to a normal (non-superfluid) state above $T_\text{c}$.

There is a small problem. If we continue the calculation through the crossover, the temperature at which a non-zero $\Delta$ develops continues to increase indefinitely on the BEC side {% cite De-Melo1993:aa %}

$$
k_\text{B}T_\text{c} \sim E_b/2\left[\log E_b/E_F\right]^{3/2}, 1/k_\text{F} a\gg 0
$$

where $E_b=1/ma^2$ is the binding energy of a pair. This temperature should be thought of as a
dissociation temperature below which pairs can form (the logarithmic factor is entropic in origin). The
temperature at which these pairs condense will however be lower, tending to the ideal bose $T_
{\mathrm{BEC}}$ in the $1/k_\text{F}a\to \infty$ limit. A more sophisticated treatment is required to find a
smooth interpolating $T_\text{c}(1/k_\text{F}a)$.

<a name="EngelbrechtTc"></a>
![]({{ site.baseurl }}/assets/EngelbrechtTc.png)
_$T\_c$ in the mean-field theory (solid line), compared with the result of a treatment that smoothly
  interpolates to $T\_{\text{BEC}}$ (dashed). Reproduced from {% cite De-Melo1993:aa %}._


References
----------

{% bibliography --cited %}
