---
layout: page
title: Lattice Models and Strong Correlations
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

## Tight Binding Models

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

### Physical Motivation

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
\psi_\text{WKB}(x) = \frac{\alpha}{\sqrt{k(x)}}\exp\left(i\int^ x k(x')dx'\right)+ \frac{\beta}{\sqrt{k(x)}}\exp\left(-i\int^ x k(x')dx'\right),
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

1. The Bloch states look like a superposition of localized states, with the phase changing abruptly between sites.

2. The lowest band is sinusoidal.

<p class="message">
Confirm that both these features are captured by the tight binding model \eqref{latt_tb}.
</p>


## Bose Hubbard Model

The simplest interacting tight binding model that we can write down is the celebrated __Hubbard model__.

$$
H = H_t + H_U = -t \sum_{\langle j\,k\rangle}  \left[\adop_j\aop_{k}+\adop_{k}\aop_j\right] + \frac{U}{2}\sum_j \Nop_j(\Nop_j-1),
$$

where $\Nop_j=\adop_j\aop_j$ is the number operator for site $j$, and the sum in the first term is over all nearest neighbour pairs on some lattice (e.g. square or cubic). The on-site interaction term $\Nop_j(\Nop_j-1)$ is just what we have been writing as $\adop_j\adop_j\aop_j\aop_j$ previously. In 1D, you can think of this as the lattice version of the Lieb--Liniger model, in that in involves a kinetic term (sometimes called the __hopping term__) and a short-ranged interaction.

The Hubbard model was first introduced to describe electrons in solids. In that case the particles are fermions, and we have to deal with their spin. We'll come to this __Fermi Hubbard model__ shortly. In this section we are going to discuss the more straightforward __Bose Hubbard__ model introduced in {% cite Fisher:1989aa %}. These authors had in mind applications to liquid He$^{4}$ on a substrate or granular superconductors in which the Cooper pairs (more on those later) approximate interacting bosons. However, ten years after its invention, the model found its natural home in the description of bosonic atoms confined to optical lattices.

### The Mott State

In analyzing a new model we always begin by asking what happens when each of the terms in the Hamiltonian dominate the others. This allows us to get the lie of the land, and think about how these different limits may fit together.

For the Bose--Hubbard model, we start by taking $U/t\to\infty$ The eigenstates are then states of definite occupation number, with energy

$$
E(\mathbf{N}) = \frac{U}{2} \sum_j N_j(N_j-1).
$$

To find the ground state at fixed particle number, we should try filling the $N_\text{sites}$ sites as uniformly as possible. This is easy if the filling $\nu \equiv N_{\text{particles}}/N_\text{sites}$ is integer. Otherwise, denote by $\lfloor \nu\rfloor$ the largest integer less than $\nu$, and $\lceil \nu\rceil$ the smallest integer larger than $\nu$. Then the number of sites with occupancy $\lceil \nu\rceil$ is $N\_\text{sites}\left(\nu - \lfloor \nu\rfloor\right)$. The ground state energy has a piecewise linear dependence on $\nu$

$$
\frac{E_0}{N_\text{sites}} = \left(\nu - \lfloor \nu\rfloor\right)e(\lceil \nu\rceil) + \left(\lceil \nu\rceil - \nu\right)e(\lfloor \nu\rfloor),
$$

where $e(N) = \frac{U}{2}N(N-1)$. As the result the chemical potential $\mu = \frac{\partial E_0}{\partial N_\text{particles}}$ is piecewise constant, with jumps occurring when $\nu$ is integer:

$$
\mu = e(\lceil \nu\rceil) -e(\lfloor \nu\rfloor)=U\lfloor \nu\rfloor,
$$

<a name="steps"></a>
![]({{ site.baseurl }}/assets/steps.png)
_Energy and chemical potential vs. filling $\nu$._

If we think about varying the chemical potential instead, all values between $UN$ and $U(N-1)$ correspond to integer filling $\nu=N$. The states of integer filling are named __Mott states__, after [Nevill Mott](https://en.wikipedia.org/wiki/Nevill_Francis_Mott). Mott's realization was that when interactions dominate the hopping, the formation of such states can cause insulating behaviour, even when band theory implies a system should be a metal.


### The Effect of Hopping

For these states to be physically significant, they must survive when we turn $H_t$ back on. If the hopping is small, we can think of it as a perturbation. The unperturbed eigenstates of the model have a fixed occupation $N_j$ on site $j$

$$
\ket{\mathbf{N}} = \bigotimes_j \ket{N_j}_j.
$$

Applying $H_t$ to such a state gives a superposition of states, each with one particle moved from one site to an adjacent site.

<p class="message">
How is a Mott state (all sites with the same occupation) affected by $H_t$ in first order perturbation theory?
</p>

Let's now consider a Mott state of filling $\nu=N$ with one extra particle added. We now have $N_\text{sites}$ degenerate ground states when $t=0$, corresponding to placing the extra particle on each lattice site. $H_t$ mixes these states together: we have a problem of degenerate perturbation theory. All other states are separated from these lowest states by energies of order $U$.

The states in the ground state multiplet are

$$
\ket{i,+}\equiv \frac{\adop_i}{\sqrt{N+1}}\bigotimes_{j} \ket{N}_j.
$$

Evidently, only states corresponding to adjacent $j$ are coupled by $H_t$. These matrix elements are

$$
\braket{j}{H_t}{k} = -t(N+1).
$$

Thus within the ground state multiplet $H_t$ corresponds to a tight binding model

$$
H_t\rvert_{+} = -t(N+1) \sum_{\langle j\,k\rangle} \left[\ket{j,+}\bra{k,+}+\text{h.c.}\right].
\label{latt_tbp}
$$

This is a very simple picture: the only many body effect is the factor of $N$ due to Bose statistics. The splitting of the degenerate states by $H_t$ is then given by the tight binding dispersion

$$
\omega_+(\boldsymbol{\eta}) = -2t(N+1)\sum_{n=1}^d\cos\eta_n
\label{latt_pband}
$$

(in $d$-dimensions). We could alternatively _remove_ a particle from the Mott state

$$
\ket{i,-}\equiv \frac{\aop_i}{\sqrt{N}}\bigotimes_{j} \ket{N}_j.
$$

Within these states, $H_t$ takes the form

$$
H_t\rvert_{-}=-tN \sum_{\langle j\,k\rangle} \left[\ket{j,-}\bra{k,-}+\text{h.c.}\right],
\label{latt_tbh}
$$

with a spectrum

$$
\omega_-(\boldsymbol{\eta}) = -2tN\sum_{n=1}^d\cos\eta_n.
$$

Let's see how these considerations change the picture of the previous subsection. We introduce the grand canonical Hamiltonian

$$
\cH_\mu = H - \mu N_\text{particles},
$$

and consider the ground state as a function of $\mu$. At $t=0$ the energies of the Mott states with filling $\nu=N$ are

$$
\frac{\cE^{(N)}_\mu}{N_\text{sites}} = \frac{U}{2}N(N-1)-\mu N.
$$

$\cE^{(N)}\_\mu$ and $\cE^{(N+1)}\_\mu$ become degenerate when $\mu=UN$ for $t=0$. Let's compare this with the ground state with one extra particle on top of the $N$ Mott state. This state corresponds to a particle at the bottom of the tight binding band. From \eqref{latt_pband}, we see that the ground state energy of the tight binding model is $-2td(N+1)$. Together with extra energy of interaction we have overall

$$
\cE^{(N)}_\mu + UN - \mu -2dt(N+1).
$$

We see that for $t>\frac{UN-\mu}{2d(N+1)}$ the state with an extra particle actually has a _lower_ energy: the Mott states is not the ground state. Similarly, the energy of the ground state with one 'hole' in the $N+1$ Mott state is

$$
\cE^{(N+1)}_\mu - UN + \mu -2dt(N+1).
$$

Introducing a hole is thus favoured for $t>\frac{\mu-UN}{2d(N+1)}$.

<a name="MottPerturb"></a>
![]({{ site.baseurl }}/assets/MottPerturb.png)
_Comparing the energies of the Mott states with single particle or hole states. At $t=0$ the red line is the absolute ground state. For nonzero $t$ the dashed blue line corresponds to non-integer filling._

This analysis applies only at small $t/U$. What happens in the regions where the Mott states are not the ground states, and there are excess bosonic particles or holes that are free to move? If we let $t/U\to\infty$ we have a __Bose condensate__: all the particles can sit in the $\eta=0$ Bloch state. When interactions are finite but small, we will see in the next lecture that the result is a __superfluid__. The boundaries that we have have found can be connected (drawing freehand -- see [Problem Set 2]({{ site.baseurl }}/problems/Problems2/) for a variational approach) to give the following phase diagram for the ground state of the Bose--Hubbard model.

<a name="BHPhase"></a>
![]({{ site.baseurl }}/assets/BHPhase.png)
_Ground state phase diagram of the Bose--Hubbard model._

Note the diminishing size of the Mott lobes, a consequence of the enhanced hopping in the effective tight binding models \eqref{latt_tbp} and \eqref{latt_tbh} as we go to higher filling.

<a name="mott_cake"></a>
![]({{ site.baseurl }}/assets/mott_state_cake.jpg)
_With a trap potential as well as a lattice, moving radially outwards corresponds to moving down a vertical slice through the phase diagram, producing this distinctive 'wedding cake' structure. Successive Mott states are separated by superfluid regions. Source: Cheng Chin, University of Chicago._

## Fermi Hubbard Model

Now we turn to the case of fermions, the context in which the Hubbard model was originally introduced. Allowing for spin, the model is usually written.

$$
H=-t \sum_{\substack{\langle j\,k\rangle\\ s=\uparrow,\downarrow}}  \left[\adop_{j,s}\aop_{k,s}+\adop_{k,s}\aop_{j,s}\right] + U\sum_j N_\uparrow N_\downarrow,
$$

We could of course add spin to the Bose Hubbard model, but it's still interesting without it. By contrast, we need spin here to have an interacting model. It's hard to overstate the importance of this model in condensed matter physics because of the role that it has played in attempts to understand the high-temperature superconducting materials known as __cuprates__. The 2D model has long been argued to capture the physics of strong correlations in the CuO$_2$ layers that form the backbone of these materials. 'Capture the physics' would ideally mean that the ground state of the model is superconducting. This is still a controversial issue: some believe that the Hubbard model suffices, if only we could learn enough about its behaviour; others that it is missing some ingredient -- other bands, coupling between layers, phonons -- that is vital to superconductivity.

Relatively little is known _for sure_ about the Hubbard model, except in 1D, where it can be solved exactly using the Bethe ansatz. You may be wondering why it's so much harder than the Bose case. Let's find out...

### Discussion: Two Sites, Large $U/t$

As in the Bose case, we start by thinking about $U/t\to\infty$. In the limit we get Mott states: only three this time, corresponding to 0, 1, or 2 particles per site. When we have two particles on a site, they must be in a spin singlet. But when we have only 1 per site (We call this __half filling__), we can have either spin. Thus the $\nu=1$ Mott state is _massively_ degenerate, with a ground state multiplet consisting of $2^{N_\text{sites}}$ possible spin configurations. $U/t\to\infty$ is therefore a rather singular limit, and to understand the true ground state at large $U$ we'll need to work bit harder.

Start by thinking about two sites and two particles. There are 6 states altogether in the Hilbert space.

$$
\begin{align}
\adop_{1,\uparrow}\adop_{1,\downarrow} \ket{\text{VAC}},\quad\adop_{2,\uparrow}\adop_{2,\downarrow} \ket{\text{VAC}}\\
\adop_{1,s}\adop_{2,s'} \ket{\text{VAC}},\quad s,s'=\uparrow,\downarrow.
\end{align}
$$

The top two states have energy $U$ when $t=0$; the bottom 4 have energy 0.

<p class="message">
[Try this before continuing!] How does the degeneracy of these states get lifted at finite $t$? Try writing down the Hamiltonian restricted to these states.
</p>

### Effective Hamiltonian

As the number of sites increases, it becomes harder to say what happens to the ground state multiplet. We now modify our strategy by splitting the problem in two: we are going to find an _effective Hamiltonian_ that acts only on the half filled Mott states and describes their splitting when $t/U$ is finite but small. Whether we can subsequently solve that Hamiltonian we leave until later.

As I'm sure you realized when you thought about two sites, this is a qualitatively different degenerate perturbation problem than the one we solved when we added a single particle or hole to the bosonic Mott states. The reason is that $H_t$ has no matrix elements among the degenerate states: when acting on one of them it always takes us into a state with one site doubly occupied and the neighouring site empty. We have to think about _second order_ degenerate perturbation theory to find out what happens. To handle this we divide the Hamiltonian into block form, according to whether its matrix elements act on the Mott state or not.

$$
H = \begin{pmatrix}
H_{\text{Mott}} & V^{} \\
V^\dagger & H_\text{Not} \\
\end{pmatrix}
$$

Denoting by $P_\text{Mott}$ the projection operator on to the $2^{N_\text{sites}}$ Mott states, and $P_\text{Not}\equiv 1-P_\text{Mott}$, we have

$$
\begin{align}
H_\text{Mott}= P_\text{Mott} H P_\text{Mott},\quad H_\text{Not}= P_\text{Not}H P_\text{Not}\\
V^{} = P_\text{Mott} H P_\text{Not},\qquad V^\dagger = P_\text{Not} H P_\text{Mott}.
\end{align}
$$

In the case of the Hubbard model, we have

$$
\begin{align}
H_\text{Mott}= P_\text{Mott} H_U P_\text{Mott},\quad H_\text{Not}= P_\text{Not}H_U P_\text{Not}\\
V^{} = P_\text{Mott} H_t P_\text{Not},\qquad V^\dagger = P_\text{Not} H_t P_\text{Mott}.
\end{align}
$$

We write the eigenvalue equation in block form

$$
\begin{pmatrix}
H_{\text{Mott}} & V^{} \\
V^\dagger & H_\text{Not} \\
\end{pmatrix}
\begin{pmatrix}
\ket{\Psi}\\
\ket{\Phi}
\end{pmatrix} = E
\begin{pmatrix}
\ket{\Psi}\\
\ket{\Phi}
\end{pmatrix}.
$$

We eliminate $\ket{\Phi}$ to obtain

$$
\left[H_{\text{Mott}} -V^{}\left(H_\text{Not}-E\right)^{-1}V^\dagger\right]\ket{\Psi} = E\ket{\Psi}.
$$

So far we have made no approximation. While this looks like an eigenvalue equation, we can't yet interpret the operator in the square brackets as an effective Hamiltonian because it depends on the eigenvalue $E$. However, we now focus on energies much smaller than the eigenvalues of $H_\text{Not}$, which are $O(U)$. In this way we can neglect this energy dependence and arrive at the effective Hamiltonian acting only on the Mott state

$$
H_\text{eff} = H_{\text{Mott}} -V^{} H^{-1}_\text{Not}V^\dagger.
$$

What form does $H_\text{eff}$ take? $H_{\text{Mott}}=0$, and $V^\dagger$ creates states with an adjacent hole and __doublon__ (doubly occupied site). $H_\text{Not}$ acting on these states is just $U$, and $V$ has to remove the hole and doublon. Thus,

$$
H_\text{eff} = -\frac{V^{}V^\dagger}{U} = -\frac{t^2}{U} \sum_{\substack{\langle j\,k\rangle\\s,s'}} \adop_{j,s}\aop_{k,s} \adop_{k,s'}\aop_{j,s'}.
$$

We can write this in a more familiar way by first reordering the operators (not forgetting the anticommutation relations!)

$$
 \adop_{j,s}\aop_{k,s} \adop_{k,s'}\aop_{j,s'} = -\adop_{j,s}\aop_{j,s'}\adop_{k,s'}\aop_{k,s} + \delta_{s^{}s'}\adop_{j,s}\aop_{j,s'},
$$

and then using the identity

$$
\delta_{ab}\delta_{cd} = \frac{1}{2}\left[\boldsymbol{\sigma}_{a d}\cdot \boldsymbol{\sigma}_{c b} + \delta_{ad}\delta_{cb}\right].
$$

Finally, in $d$ dimensions ($d=1$, chain; $d=2$ square lattice; $d=3$ cubic lattice) we get

$$
H_\text{eff} = -\frac{dN_\text{sites}t^2}{2U}+J\sum_{\langle j\,k\rangle} \mathbf{s}_j\cdot \mathbf{s}_k
$$

with $J=\frac{2t^2}{U}$ and

$$
\mathbf{s}_j=\frac{1}{2}\sum_{s,s'}\adop_{j,s}\boldsymbol{\sigma}_{s^{}s'}\aop_{j,s'}.
$$

The effective Hamiltonian is nothing but the spin-1/2 antiferromagnetic Heisenberg model!

<p class="message">
Note that there is something slightly sly about this derivation. We assumed that the energy scale $U$ was the largest scale in the problem, in order to arrive at the effective Hamiltonian. However, typical excited state energies of the Heisenberg Hamiltonian are $\frac{N_\text{sites}t^2}{U}$. Thus for $N_\text{sites}\gtrsim \left(\frac{t}{U}\right)^2$ there isn't actually a separation between these two energies. Not a very useful condition! Physically, it's enough to have a small <strong>density </strong> $n$ of doublons and holes, with overall energy $\sim nU$, when $t/U$ is small.
</p>

### Doping

Antiferromagnetism and the Mott phenomenon are seen to go hand in hand in fermion systems. This explains the common ocurrence of antiferromagnetism in transition metal compounds, especially oxides. The cuprate superconductors mentioned earlier are a famous example.

<a name="Cuphase"></a>
![]({{ site.baseurl }}/assets/Cuphasediag.png)
_Schematic temperature vs. doping diagram for the cuprate materials [[Source]](https://en.wikipedia.org/wiki/High-temperature_superconductivity#Cuprates)._

At half filling, the cuprates are antiferromangetic Mott insulators. Superconductivity emerges when the materials are doped by changing their stoichiometry. This introduces electrons or holes into the CuO$_2$ planes that are modeled by the Hubbard Hamiltonian. Antiferromagnetic order is believed to be destroyed by freely moving holes -- think how the Néel ordering is disrupted -- and indeed superconductivity appears where antiferromagnetism dies. The precise relationship between the two phenomena is -- like much of the physics of the cuprates -- not clear.


References
----------

{% bibliography --cited %}
