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

So far, we have discussed Bose condensation and superfluidity using models of bosonic particles. Can systems of fermions display the same phenomena? Experimentally, we already know that the answer must be yes, as an atom of He$^4$ consists of protons, neutrons, and electrons -- two of each -- which are are all fermions. A He$^4$ atom is a composite boson, but in many situations its internal structure is of no relevance.

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

This is still not the whole story. The net attraction between electrons is still not strong enough to form a bound state, if we were just to consider one pair. However, BCS showed that in a gas of fermions at finite density, _arbitrarily_ weak attraction is enough to cause pairing: it is a truly many body phenomenon. This was first shown by Leon Cooper using a toy model that accounted for the existence of the Fermi sea in the pairing problem, and for this reason we speak of __Cooper pairs__.

So BCS got the Nobel prize (which conveniently can be split three ways) and their theory become one of the pillars of condensed matter physics. In this lecture we'll discuss BCS theory using the model Hamiltonian \eqref{super_model} with attractive short-ranged interactions. This is not a particularly realistic model of the combined phonon-mediated attraction and screened Coulomb repulsion, but displays the same physics. It _is_ a good model for pairing of ultracold atoms, first observed in 2004 {% cite Regal:2004aa %}.

## BCS Theory

### The BCS Wavefunction

In momentum space our Hamiltonian \eqref{super_model} has the form

$$
H =\sum_{\bk,s} \epsilon(\bk)\adop_{\bk,s}\aop_{\bk,s} + \overbrace{\frac{U_0}{V}\sum_{\bk_1+\bk_2=\bk_3+\bk_4} \adop_{\bk_1,\uparrow}\adop_{\bk_2,\downarrow}\aop_{\bk_3,\downarrow}\aop_{\bk_4,\uparrow}}^{\equiv H_\text{int}},
$$

We take the interaction between the two species to be attractive $U_0<0$. The ground state
of the non-interacting problem is

$$
\ket{\text{FS}}=\prod_{|\bp|<p_F} \adop_{\bp\uparrow}\adop_{\bp\downarrow}\ket{\text{VAC}}.
$$

The application of the interaction Hamiltonian $H_\text{int}$ generates terms of the form

$$
\adop_{\bp+\bq\uparrow}\adop_{-\bp\downarrow}\aop_{-\bp'\downarrow}\aop_{\bp'+\bq\uparrow}\ket{\text{FS}}.\qquad |\bp|,|\bp+\bq|>p_F,\, |\bp'|,|\bp'+\bq|<p_F.
$$

Note the difference from the Bose case: because the state $\bp=0$ plays no special role -- like every
other state below the Fermi surface it is occupied with one fermion of each species -- we do not just
create pair excitations with zero centre of mass momentum $\bq=0$. Nevertheless, the BCS theory starts
from the assumption that such finite momentum pairs do not contribute significantly to the ground state,
and makes a pair ansatz of essentially the same form that was used in the Bogoliubov theory

$$
\ket{\text{pair}}\equiv\sum_{\sum_\bp n^P_\bp=N/2} c_{\{n^P_{\bp}\}} \prod_{\bp}\Lambda_{\bp'}^
{n_{\bp}}\ket{\text{VAC}},
\label{pair_fermi}
$$

where $\Lambda_\bk=\adop_{\bp\uparrow}\adop_{-\bp\downarrow}$ creates a $\left(+\bp,-\bp\right)$
pair and the numbers $n_{\bp}^P$ are either $0$ or $1$. Note that in writing \eqref{pair_fermi} the
number of each species is assumed to be exactly $N/2$. As in the Bogoliubov case, such a form allows us to work with a pair Hamiltonian

$$
H_{\mathrm{pair}}=\sum_{\bp,s}\epsilon_{\bp}\adop_{\bp,s}\aop_{\bp, s}+\frac{U_0}{V}\sum_{\bp, \bp'}\adop_
{\bp\uparrow}\adop_{-\bp\downarrow}\aop_{-\bp'\downarrow}\aop_{\bp'\uparrow}.
\label{super_bcsH}
$$

That is, just $H_\text{int}$, but with all but the $\bq=0$ part discarded. Now, can we solve \eqref{super_bcsH})? It is illuminating to introduce the operators $\bdop_\bp=\adop_{\bp\uparrow}\adop_{-\bp
\downarrow}$ and its conjugate, that create and destroy a $\left(+\bp,-\bp\right)$ pair. Because our pair
ansatz \eqref{pair_fermi}) only includes amplitudes for a given $\left(+\bp,-\bp\right)$ pair of momenta
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
$$

which is a result of $\bdop$ being composed of a pair of fermions obeying the exclusion principle.
Nevertheless, given that a pair that `hops' into a level at $\bp$ could come from any other level $\bp'$, it
seems reasonable to try, as a variational state, one in which the amplitudes for the occupancy of each
level are uncorrelated

$$
\ket{N \text{ pair}}\equiv\left[\sum_\bp c_\bp \bdop_\bp\right]^{N/2}\ket{\text{VAC}}
\label{bcs_cons}
$$

corresponding to \eqref{pair_fermi}) but with a set of coefficients $c_{\{n^P_\bp\}}$ that factorizes.
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
S_\bp^+ \equiv \bdop,\quad S_\bp^- \equiv \bop_\bp,\quad S^z_\bp = \bdop_\bp\bop_\bp-1/2,
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
Equation (\ref{spin_en}) with respect to the angles $\theta_{\bp}$ gives the condition

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

Thus we have demonstrated the presence of a fermion condensate for an attractive interaction, no matter
how weak. To be more honest, what we
have really shown is that the BCS state always has a lower energy than the free fermion problem. Since
this certainly _is_ the ground state at $U_0=0$, and the BCS is smoothly connected to it, it seems
clear that the BCS state can be trusted at least for small coupling. At larger coupling some other state of
matter could win out, but given our argument that we should eventually arrive in a BEC state of
pairs, this seems unlikely.



### Discussion: Heisenberg's Problem

### The BCS-BEC Crossover

### Excited states

### The Effect of Temperature

### BCS from Bogoliubov Transformation





References
----------

{% bibliography --cited %}
