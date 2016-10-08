---
layout: page
title: Many Body Wavefunctions
author: Austen Lamacraft
chapter: 1
summary: Product States. Fermi gas. Density, density matrix, and pair distribution. Quantum Hall effect.
published: true
---
<p class="message">
We begin our study of many body quantum mechanics by examining a number of systems where eigenstates and eigenvalues may be found explicitly for any number of particles. Be warned that these situations are <strong>highly atypical</strong> -- but are nevertheless very informative.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}

Reading: {% cite Baym:1969 %}, {% cite Girvin:1999 %}, {% cite Stone:1992 %}.

---


## Bosons and Fermions

An $N$ particle quantum system is described by a wavefunction of $N$ arguments $\Psi(\br_1,\ldots, \br_N)$. The starting point of many body quantum mechanics is that:

> Systems of indistinguishable particles are described by __totally symmetric__ or __totally antisymmetric__ wavefunctions.

Just to be clear, _totally symmetric_ means the wavefunction is unchanged by exchanging any two coordinates, whereas _totally antisymmetric_ means that it changes sign.

A good fraction of this course is devoted to exploring the ramifications of this fact. Perhaps we should therefore give a _very_ quick summary of why it appears to be true.

The first question is: what _are_ indistinguishable particles? I'll give a theorist's answer. Indistinguishable particles are those described by Hamiltonians that are invariant under permuting the particle's labels. Thus the sum of single particle Hamiltonians

$$
H = \sum_{i=1}^{N} \left[-\frac{\hbar^{2}}{2m}\nabla_{i}^{2}+V(\mathbf{r_{i}})\right]
$$

describes indistinguishable partiles while

$$
H = \sum_{i=1}^{N} \left[-\frac{\hbar^{2}}{2m_i}\nabla_{i}^{2}+V(\mathbf{r_{i}})\right]
$$

does not, on account of the masses being all different. Any time we have a symmetry operation that commutes with the Hamiltonian, the eigenstates of that symmetry are preserved by time evolution with that Hamiltonian. Thus a symmetric potential $V(x)=V(-x)$ commutes with the parity operation $x\to -x$, so the eigenstates of this operation -- the even and odd wavefunctions -- are preserved by time evolution.

The Hamiltonian of indistinguishable particles commutes with every operator of particle exchange, defined by

$$
P_{ij}\Psi(\br_1,\ldots, \br_i,\ldots, \br_j,\ldots \br_N) = \Psi(\br_1,\ldots, \br_j,\ldots, \br_i,\ldots \br_N).
$$

These operators satisfy $P_{ij}^2=\mathbb{1}$, so their eigenvalues are $\pm 1$, corresponding to states that are either symmetric or antisymmetric under exchange. The only simultaneous eigenstates of all particle exchange operations (note that different exchanges don't commute if they involve the same particle) are the totally symmetric and antisymmetric wavefunctions. Thus these properties are preserved by time evolution. It's always been this way.

 We classify particles into symmetric __bosons__ and antisymmetric __fermions__, named for Bose and Fermi respectively (the whimsical terminology is Dirac's). The distinction works equally well for composite particles, provide we ignore the internal degrees of freedom and discuss only the center of mass coordinate.
 <!---
 Easy for us to say. Here's Dirac again: `The solution with antisymmetrical eigenfunctions, though, is probably the correct one for gas molecules, since it is known to be the correct one for electrons in an atom, and one would expect molecules to resemble electrons more closely than light-quanta.'~\citep{dirac1926}}
 and here
 -->

 All matter in the universe is made up of fermions: electrons, quarks, etc., but you can easily convince yourself that an even number of fermions make a composite boson (e.g. a $^4$He atom with two electrons, two neutrons and two protons) and an odd number make a composite fermion ($^3$He has one fewer neutron, which in turn is made up of 3 quarks).

### Two Particles

A pair of particles is described by a wavefunction $\Psi(\mathbf{x},\mathbf{y})$. If we are dealing with _distinguishable_ particles, the wavefunction of a pair of particles in states $\ket{\varphi_1}$ and $\ket{\varphi_2}$ would be

$$
 \label{quantum_statistics_ProductWavefunction}
 \Psi(\br_1,\br_2)=\varphi_1(\br_1)\varphi_2(\br_2).
$$

Accounting for indistinguishability, we have either

$$
 \label{quantum_statistics_sym}
 \Psi(\br_1,\br_2)=\frac{1}{\sqrt{2}}[\varphi_1(\br_1)\varphi_2(\br_2)\pm \varphi_2(\br_1)\varphi_1(\br_2)].
$$

with the upper sign for bosons and the lower for fermions (The $1/\sqrt{2}$ yields a normalized wavefunction if $\varphi_{1,2}(\br)$ are orthonormal.). Note in particular that when $\varphi_1=\varphi_2$ the fermion wavefunction _vanishes_. This illustrates the __Pauli exclusion principle__, that no two identical fermions can be in the same quantum state. There is no such restriction for bosons.

Classically, if you had a function $P_{1}(\br_1)$ describing the probability density of finding particle $1$ at position $\br_1$, and the corresponding quantity for an independent particle $2$, you would have no hesitation in concluding that the joint distribution is

$$
   P_{12}(\br_1,\br_2)=P_1(\br_1)P_2(\br_2).
\label{eq:classicaljoint}
$$

This also follows from taking the square modulus of \eqref{quantum_statistics_ProductWavefunction}. The results implied by the wavefunction \eqref{quantum_statistics_sym} is

$$
\begin{align}
P_{12}(\br_1,\br_2) &= \frac{1}{2}\left[P_1(\br_1)P_2(\br_2)+P_1(\br_2)P_2(\br_1)\right] \\ &\pm \frac{1}{2}\left[\varphi^{}_1(\br_1)\varphi^*_2(\br_1)\varphi^{}_2(\br_2)\varphi^*_1(\br_2)+\varphi^{}_1(\br_2)\varphi^*_2(\br_2)\varphi^{}_2(\br_1)\varphi^*_1(\br_1)\right].
\end{align}
$$

In particular, $P_{12}(\br,\br) = 0$ for fermions, and $P_{12}(\br,\br) = 2P_1(\br)P_2(\br)$ for bosons. The first result is natural from the  standpoint of the exclusion principle, while the second is perhaps more surprising. This shows that, because probabilities arise from the squares of amplitudes, identical particles in quantum mechanics are never truly independent.

<a name="HOM"></a>
![]({{ site.baseurl }}/assets/HOM.png)
_Four possible outcomes after the passage of two bosons through a beam splitter._

One dramatic illustration of this deviation from our classical intuition is provided by the [Hong--Ou--Mandel effect](https://en.wikipedia.org/wiki/Hong–Ou–Mandel_effect) in quantum optics. In simplified terms, we imagine wavepackets describing two photons (bosons) approaching a 50:50 beam splitter from either side.  Because of the unitarity of scattering, the two photons end up in orthogonal states. For example,

 $$
   \frac{1}{\sqrt{2}}\left(\ket{\text{Left}}\pm \ket{\text{Right}}\right).
 $$

 By writing down the bosonic two particle state with one particle in each of these states, we arrive at the surprising conclusion that there is _zero_ probability to have one photon at each output: they both go to the left or both to the right.


### Product States

The Hamiltonian of a system of $N$ identical noninteracting particles is a sum of $N$ identical __single particle__ Hamiltonians, that is, with each term acting on a different particle coordinate

$$
 \label{quantum_statistics_SPHamiltonian}
 H = \sum_{i=1}^{N} \left[-\frac{\hbar^{2}}{2m}\nabla_{i}^{2}+V(\mathbf{r_{i}})\right]
$$

where $m$ is the particle mass, and $V(\mathbf{r_{i}})$ is a potential experienced by the particles. Let's denote the eigenstates of the single particle Hamiltonian by $\{\varphi_{\alpha}(\mathbf{r})\}$, and the corresponding eigenenergies by $\{E_{\alpha}\}$, where $\alpha$ is a shorthand for whatever quantum numbers are used to label the states. A set of labels $\{\alpha_{i}\}$ $i=1,2,\ldots N$ tells us the state of each of the particles. Thus we can write an eigenstate of $N$ _distinguishable_ particles with energy $E=\sum_{i=1}^{N}E_{\alpha_{i}}$ as

$$
 \label{quantum_statistics_disting}
 \ket{\Psi_{\alpha_{1}\alpha_{2}\cdots \alpha_{N}}}=\varphi_{\alpha_{1}}(\mathbf{r_{1}})\varphi_{\alpha_{2}}(\mathbf{r_{2}})\cdots\varphi_{\alpha_{N}}(\mathbf{r_{N}})
$$

(We will frequently switch between the wavefunction $\varphi(\mathbf{x})$ and bra-ket notation $\ket{\varphi}$. In the latter notation the product wavefunction in \eqref{quantum_statistics_ProductWavefunction} is written $\ket{\varphi_{1}}\ket{\varphi_{2}}$)


A general state will be expressed as a superposition of such states, of course. As we've just discussed, however, we should really be dealing with a totally symmetric or totally antisymmetric wavefunction, depending on whether our identical particles are bosons or fermions. To write these down we introduce the operators of _symmetrization_ and _antisymmetrization_

$$
 \label{quantum_statistics_SymAntisym}
   \mathcal{S}=\frac{1}{N!}\sum_{P} P, \qquad \mathcal{A}=\frac{1}{N!}\sum_{P} \sgn(P)P 	
$$

The sums are over all $N!$ permutations of $N$ objects, $P$ denotes the corresponding permutation operator, and $\sgn(P)$ is the __signature__ of the permutation, equal to $+1$ for permutations involving an even number of exchanges, and $-1$ for an odd number. This allows us to write the totally symmetric and totally antisymmetric versions of \eqref{quantum_statistics_disting} as

$$
\begin{align}
 \ket{\Psi^{S}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}}&=\sqrt{\frac{N!}{\prod_{\alpha}N_{\alpha}!}}\mathcal{S}\,\varphi_{\alpha_{1}}(\mathbf{r_{1}})\varphi_{\alpha_{2}}(\mathbf{r_{2}})\cdots\varphi_{\alpha_{N}}(\mathbf{r_{N}}) \nonumber \\
 \ket{\Psi^{A}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}}&=\sqrt{N!}\mathcal{A}\,\varphi_{\alpha_{1}}(\mathbf{r_{1}})\varphi_{\alpha_{2}}(\mathbf{r_{2}})\cdots\varphi_{\alpha_{N}}(\mathbf{r_{N}})
 \label{quantum_statistics_norm}
\end{align}	 
$$

The normalization factors yield normalized wavefunctions _if_ the single particle state $\ket{\varphi_\alpha}$ are orthonormal (as the eigenstates of the single particle Hamiltonian are).

Such states are called __product states__. The normalization factor in the boson case involves the __occupation numbers__ $\{N_{\alpha}\}$ giving the number of particles in state $\alpha$. In the fermion case each $N_{\alpha}$ is either $0$ or $1$ so the prefactor simplifies. Since the order of the $\alpha$ indices is irrelevant in the boson case, and amounts only to a sign in the fermion case, states based on a given set of single particle states are more efficiently labeled by the occupation numbers. In terms of these numbers the total energy is

$$
 \label{quantum_statistics_TotalEnergy}
 E=\sum_{i=1}^{N}E_{\alpha_{i}}=\sum_{\alpha}N_{\alpha} E_{\alpha}
$$


<p class="message"> Verify that the normalization factors in \eqref{quantum_statistics_norm} are correct. </p>


A more formal way of putting things is as follows. We first consider the space spanned by states of the form \eqref{quantum_statistics_disting}. Then we introduce the operators $\mathcal{S}$ and $\mathcal{A}$, noting that $\mathcal{S}^{2}=\mathcal{S}$ and $\mathcal{A}^{2}=\mathcal{A}$. In other words, there's no point symmetrizing or antisymmetrizing more than once (we say that the operators are __idempotent__). Any eigenvalue of one of these operators is therefore either one or zero. The states with $\mathcal{S}=1$ are the symmetric states, and those with $\mathcal{A}=1$ are antisymmetric. You can easily convince yourself that if a state has one of $\mathcal{S}$ or $\mathcal{A}$ equal to one, the other is zero. This defines symmetric and antisymmetric subspaces, consisting of the admissible boson and fermion wavefunctions.

Note that the fermion wavefunction takes the form of a __Slater determinant__ (though it appears first in {% cite dirac1926 %}).

$$
 \label{quantum_statistics_slater}
   \ket{\Psi^{A}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}}=\frac{1}{\sqrt{N!}}\begin{vmatrix}
   \varphi_{\alpha_{1}}(\mathbf{r_{1}}) & 	\varphi_{\alpha_{1}}(\mathbf{r_{2}}) & \cdots & \varphi_{\alpha_{1}}(\mathbf{r_{N}}) \\
   \varphi_{\alpha_{2}}(\mathbf{r_{1}}) &  \cdots & \cdots & \cdots  \\
   \cdots & \cdots & \cdots & \cdots  \\
   \varphi_{\alpha_{N}}(\mathbf{r_{1}}) &  \cdots & \cdots & \varphi_{\alpha_{N}}(\mathbf{r_{N}})
 \end{vmatrix}
$$

The vanishing of a determinant when two rows or two columns are identical means that the wavefunction is zero if two particle coordinates coincide ($\br_{i}=\br_{j}$), or if two particles occupy the same state ($\alpha_{i}=\alpha_{j}$).

## The 1D Fermi Gas

Let's consider perhaps the simplest many particle system one can think of: noninteracting particles on a ring. If the ring has circumference $L$, the single particle eigenstates are

$$
	\label{quantum_statistics_spstates}
	\varphi_{n}(x)=\frac{1}{\sqrt{L}}\exp\left(ik_n x\right),
$$

with $k_n=\frac{2\pi n}{L}$, $n\in\mathbb{Z}$. The corresponding energies are $E_{n}=\frac{k_n^2}{2m}$.

### Ground State

Let's find the $N$ particle ground state. For bosons every particle is in the state $\ket{\varphi_{0}}$ with zero energy: $N_{0}=N$. Thus

$$
	\Psi^{S}(x_{1},x_{2},\ldots x_{N})=\frac{1}{L^{N/2}}
$$

That was easy! The fermion case is harder.

Since the occupation of each level is at most one, the lowest energy is obtained by filling each level with one particle, starting at the bottom. If we have an odd number of particles, this means filling the levels with $n=-(N-1)/2, -(N-3)/2,\ldots, -1, 0, 1 \ldots (N-1)/2$ (for an even number of particles we have to decide whether to put the last particle at $n=\pm N/2$). Introducing the complex variables

$$
z_{i}=\exp(2 \pi i x_{i}/L),
$$

the Slater determinant \eqref{quantum_statistics_slater} becomes

$$
	\label{quantum_statistics_1ddet}
	\Psi_0(x_1,\ldots, x_N)=\begin{vmatrix}
	z_{1}^{-(N-1)/2} & 	z_{2}^{-(N-1)/2} & \cdots & z_{N}^{-(N-1)/2} \\
	z_{1}^{-(N-3)/2} &  \cdots & \cdots & \cdots  \\
	\cdots & \cdots & \cdots & \cdots  \\
	z_{1}^{(N-1)/2} &  \cdots & \cdots & z_{N}^{(N-1)/2}
\end{vmatrix}.
$$

Let's evaluate this complicated looking expression in a simple case. With three particles we have

$$
\begin{align}
	\Psi_0(x_1,x_2,x_3)=\begin{vmatrix}
		z_{1}^{-1} & z_{2}^{-1} & z_{3}^{-1} \\
		1 & 1 & 1 \\
		z_{1} & z_{2} & z_{3}
	\end{vmatrix} &= \frac{z_{1}}{z_{2}}-\frac{z_{2}}{z_{1}}+\frac{z_{3}}{z_{1}}-\frac{z_{1}}{z_{3}}+\frac{z_{2}}{z_{3}}-\frac{z_{3}}{z_{2}}\nonumber\\
	&=\left(\sqrt{\frac{z_{3}}{z_{1}}}-\sqrt{\frac{z_{1}}{z_{3}}}\right)\left(\sqrt{\frac{z_{1}}{z_{2}}}-\sqrt{\frac{z_{2}}{z_{1}}}\right)\left(\sqrt{\frac{z_{2}}{z_{3}}}-\sqrt{\frac{z_{3}}{z_{2}}}\right)  \nonumber\\
	&\propto \sin\left(\frac{ \pi[x_{1}-x_{2}]}{L}\right)\sin\left(\frac{ \pi[x_{3}-x_{1}]}{L}\right)\sin\left(\frac{ \pi[x_{2}-x_{3}]}{L}\right)
  \label{3particle}
\end{align}
$$

The vanishing of the wavefunction when $x_{i}=x_{j}$ is consistent with the Pauli principle. You should check that additionally it is periodic and totally antisymmetric.

\eqref{3particle} generalizes for any (odd) $N$ so that the ground state Slater determinant \eqref{quantum_statistics_1ddet} is proportional to

$$  
		\Psi_0(x_1,\ldots, x_N)\propto\prod_{i<j}^{N} \sin\left(\frac{\pi[x_{i}-x_{j}]}{L}\right). 	
    \label{quantum_statistics_1dFermiGS}
$$

<div class="message">
	To show this you will need the <strong>Vandermonde determinant</strong>

  $$
			\begin{vmatrix}
			1 & 1 & \cdots & 1 \\
			z_{1} &  z_{2} & \cdots & \cdots  \\
			z_{1}^{2} & z_{2}^{2} & \cdots & \cdots  \\
			 \cdots
			z_{1}^{N-1} &  z_{2}^{N-1} & \cdots & z_{N}^{N-1}
		\end{vmatrix}=\prod_{i<j}^{N}(z_{i}-z_{j})
  $$

	which can be proved in a variety of ways. Proving directly that \eqref{quantum_statistics_1dFermiGS} is an eigenstate of the Hamiltonian is not easy, but can be accomplished using the identity

	$$
		\label{2nd_quant_cotident}
	\cot(x-y)\cot(y-z)+\cot(y-z)\cot(x-z)+\cot(z-x)\cot(x-y)=1.	\nonumber
	$$

  Check carefully that \eqref{quantum_statistics_1dFermiGS} is periodic and totally antisymmetric.

</div>

Let's take the opportunity to introduce some terminology. The wavevector of the last fermion added is called the __Fermi wavevector__ and denoted $k_\text{F}$. In this case $k_\text{F}=\frac{(N-1)\pi}{L}$. Its energy $E_{F}=\frac{k_\text{F}^{2}}{2m}$ is the __Fermi energy__.


### Density; Density Matrix; Pair Distribution

Having a many particle wave function is one thing, but what to _do_ with it? Bear in mind that \eqref{quantum_statistics_1dFermiGS} is just about the simplest fermion state you can imagine, but it's not immediately clear what it is telling us.

Since $\left\|\Psi(x_1,\ldots,x_N)\right\|^2$ is the probability distribution of the positions of the particles, we can use it to find the marginal probability distributions for any subset of the particles. Of course, since the particles are identical, it doesn't matter which ones we choose, just the number.

The one particle distribution is related to the average density of particles, given by

$$
\rho_1(x_1) = N \int dx_2\ldots dx_N \,\left|\Psi(x_1,x_2,\ldots,x_N)\right|^2.
\label{ave_density}
$$

Note that although I use the symbol $\rho$, density is always going to be _number_ density.

<div class="message">
(Definitely feel free to ignore this!) For some joint distribution of points $P(\mathbf{x})$ with $\mathbf{x}=(x_1,\ldots x_N)$ (let the labels be discrete for now), denote the number of points with $x_j=X$ by $\left|\{y \in \mathbf{x}: y=X\}\right|$. then the expectation value of this number is

$$
\E\left[\left|\{y \in \mathbf{x}: y=X\}\right|\right] = \sum_{j} \sum_{x_1,\ldots,x_{j-1},x_{j+1},\ldots x_N}  P(x_1,\ldots,x_{j-1},X,x_{j+1},\ldots x_N)
$$

</div>

Normalization of the wavefunction then implies

$$
\int dx\, \rho_1(x) = N.
$$

In a translationally invariant system like the fermion gas on a ring we expect the average density to be constant.

We can regard \eqref{ave_density} as an expectation of a density operator

$$
\rho(x) = \sum_j \delta(x-x_j),
\label{many_densityop}
$$

so that $\rho_1 = \bra{\Psi}\rho\ket{\Psi}$.

We can also consider the __density matrix__ of a single particle. Recall that the density matrix $\varrho$ describes a __mixed state__ of a quantum system, and is the appropriate description when the quantum state is not known. $\varrho$ is a positive definite hermitian operator satisfying $\tr \varrho =1$. Its spectral resolution

$$
\varrho = \sum_\alpha p_\alpha \ket{\varphi_\alpha}\bra{\varphi_\alpha},
$$

can be thought of as a statistical mixture of different quantum states $\ket{\varphi_\alpha}$ with probabilities $p_\alpha$.

One natural way in which density matrices arise from pure states is as follows. The Hilbert space of a composite system consists of a tensor product of two or more components $\mathcal{H}_{AB} = \mathcal{H}_A \otimes \mathcal{H}_B$. Starting from the density matrix corresponding to a pure state, we can obtain a density matrix for the component $A$ alone by 'tracing out' the $B$ subsystem.

$$
\varrho_A = \tr_B \ket{\Psi}\bra{\Psi},\quad \ket{\Psi}\in \mathcal{H}_{AB}.
$$

The probability for system $A$ to be in state $\ket{\psi}\in \mathcal{H}_A$ is

$$
P_\psi = \bra{\psi}\varrho\ket{\psi}.
$$

Applied to our many body states, the same logic leads to the __single particle density matrix__

$$
g(x,y) \equiv N\int dx_2\ldots dx_N \,\Psi^{}(x,x_2,\ldots,x_N)\Psi^{*}(y,x_2,\ldots,x_N).
$$

Note that $g(x,x) = \rho_1(x)$. The average number of particles in a single particle state $\ket{\psi}$ is then

$$
\bar N_\psi = \int dx dy\, \psi^*(x)g(x,y)\psi(y).
\label{many_Nbar}
$$

Let's find $g(x,y)$ for the ground state of the Fermi gas

$$
g(x,y) = \frac{1}{L}\sum_{|k|<k_\text{F}} e^{ik(x-y)} = \int_{-k_\text{F}}^{k_\text{F}} \frac{dk}{2\pi} e^{ik(x-y)} = \bar\rho \frac{\sin [k_\text{F}(x-y)]}{k_\text{F}(x-y)}
$$

where $\bar\rho \equiv \frac{k_\text{F}}{\pi}$ is the average density. Evaluating the average number of particles in a momentum state $\ket{k}$ using \eqref{many_Nbar} then gives

$$
\bar N_k = \begin{cases}
1 & |k|\leq k_\text{F} \\
0 & |k|>k_\text{F}
\end{cases}.
\label{many_Nk}
$$

Note that in a translationally invariant system $g(x,y)=g(x-y)$, and is the Fourier transform of $\bar N_k$.

We can also consider marginal probability distribution of a pair of particles, the __pair distribution function__

$$
\rho_2(x_1,x_2) = \frac{1}{2}N(N-1) \int dx_3\ldots dx_N \,\left|\Psi(x_1,x_2,\ldots,x_N)\right|^2.
$$

The prefactor is to account for all pairs of particles.

Starting from the Slater determinant \eqref{quantum_statistics_1ddet}, you should be able to derive

$$
\rho_2(x_1,x_2) = \bar n^2\left[1 - \left(\frac{\sin[k_\text{F}(x_1-x_2)]}{k_\text{F}(x_1-x_2)}\right)^2\right].
$$

This vanishes at $x_1=x_2$, consistent with the Pauli principle.

A natural question:

$$
\rho_2(x_1,x_2) \overset{?}{=} \bra{\Psi}\rho(x_1)\rho(x_2)\ket{\Psi}.
$$

_Almost_. Looking back at \eqref{many_densityop}, we see that the product of two density operators will contain terms involving the same particle, which are absent from $\rho_2(x_1,x_2)$. In fact, the correct relationship is

$$
\rho_2(x_1,x_2) = \bra{\Psi}\rho(x_1)\rho(x_2)\ket{\Psi} - \rho_1(x_1)\delta(x_1-x_2).
$$


### Impenetrable Bose Gas

There's a bit more mileage in the 1D Fermi gas yet. Consider the following Hamiltonian, which we'll study in more detail in the next lecture

$$
H = \frac{1}{2m}\sum_j \frac{\partial^2}{\partial x_j^2} + g\sum_{j<k}\delta(x_j-x_k).
\label{many_LL}
$$

The second term represents an interaction between pairs of particles. Of course, this model is rather special, as (1) it's 1D and (2) the interaction potential is a $\delta$-function. Nevertheless, it represents a huge step up in difficulty from the noninteracting examples we've discussed so far. At least, it does for bosons. For fermions, the wavefunctions vanish at coincident points, and so the interaction has no effect at all!

For bosons, it happens that the Hamiltonian can still be solved exactly. For now, however, we'll concern ourselves only with the limit of infinite interaction: $g\to \infty$, sometimes called the impenetrable limit. In this case, _the eigenenergies coincide with those of the free fermion problem, and the eigenstates are just the modulus of the corresponding fermion eigenstate_ Just like that, we've solved our first interacting many body system (and with infinite coupling, no less)!

Thus the ground state on the ring has the form

$$
\Psi_0(x_1,\ldots, x_N) = \prod_{i<j}^{N} \left|\sin\left(\frac{\pi[x_{i}-x_{j}]}{L}\right)\right|. 	
$$

It's not hard to see why this works. For a state to have a finite energy, the wavefunction must vanish whenever two coordinates coincide. But we already have a complete set of eigenstates that obey this condition, namely the free fermion Slater determinants. It remains to make them symmetric functions by taking the modulus.

This mapping is quite powerful, and allows us to calculate any observable of the impenetrable Bose gas in terms of free fermions _as long_ as that observable is insensitive to taking the modulus of the wavefunction. Thus the average density $\rho_1(x)$ and pair distribution $\rho_2(x_1,x_2)$ of the previous section can be found in this way, but the single particle density matrix $g(x,y)$ cannot. This means that the momentum distribution is _not_ given by \eqref{many_Nk}. Finding $g(x,y)$ for the impenetrable Bose gas is in fact really hard. We'll see in a later lecture how to obtain some of its important features.

## Fractional Quantum Hall Effect

The quantum Hall effect refers to quantization of the Hall conductivity $G_{xy}= \frac{I_x}{V_y}$ into integer multiples of the __conductance quantum__ $e^2/h$. This phenomenon is obvserved in two dimensional electon gases at low temperatures in a strong magnetic field perpendicular to the plane. Some years after its discovery, the fractional quantum Hall effect was observed, with $G_{xy} = \nu e^2/h$, with $\nu$ taking simple fractional values $\nu=1/3, 2/5$, etc..

These fractional values are only the tip of an iceberg of remarkable phenomena, indicating that the electrons are reorganizing into a bewildering variety of exotic states of matter, characterized by excitations with fractional charge and statistics outside the boson / fermion dichotomy discussed earlier. Even more surprisingly, our understanding of these phases rests largely on _guessing_ the right wavefunction to describe these strongly interacting systems. How is such a thing possible? As we'll see below, the wavefunction is in fact strongly constrained by the presence of the magnetic field.

### Landau Levels

The first task is to discuss the states of a single particle of charge $q$ in 2D in a perpendicular magnetic field. The Hamiltonian is

$$
H = -\frac{1}{2m}\left(\nabla -i q \mathbf{A}\right)^2,
\label{Landau}
$$

where the vector potential $A(x,y)$ obeys

$$
\partial_x A_y - \partial_y A_x = B.
$$

As usual, there is some (gauge) freedom in our choice of $\mathbf{A}$. We choose __symmetric gauge__

$$
A_x = -\frac{1}{2} B y,\quad A_y = \frac{1}{2} B x.
$$

Next, we introduce complex coordinates

$$
z = x + i y \quad \bar z  = x - iy,
$$

(The notation $\bar z$ for the complex conjugate is neater when we need to write $\partial_{\bar z}$ together with the derivatives

$$
\partial_z = \frac{1}{2}\left(\partial_x - i\partial_y\right) \quad \partial_{\bar z} = \frac{1}{2}\left(\partial_x + i\partial_y\right).
$$

We can rewrite the Hamiltonian \eqref{Landau} as

$$
H = -\frac{2}{m}\left(\partial_z -\frac{qB \bar z}{4}\right)\left(\partial_{\bar z} +\frac{qB z}{4}\right) + \frac{\omega_c}{2}
$$

where $\omega_c = \frac{qB}{m}$ is the __cyclotron frequency__. States that satisfy

$$
\left(\partial_{\bar z} +\frac{qB z}{4}\right)\psi(z,\bar z) = 0
$$

therefore have energy $\omega_c/2$ and belong to the __lowest Landau level__ (LLL). Generally, such states have the form

$$
\psi(z,\bar z) = f(z) \exp\left(-\frac{eB}{4}\left|z\right|^2\right),
$$

where $f(z)$ is an _arbitrary_ analytic function. This accounts for the degeneracy of the LLL states, and yet the states are a very special subclass of the possible 2D wavefunctions $\psi(z,\bar z)$. It's often convenient to work with the analytic part $f(z)$ of the wavefunction, with the understanding that the inner product $\bra{f_1}f_2\rangle$ is

$$
\bra{f_1}f_2\rangle = \int \frac{d^2z}{2\pi} \overline{f_1(z)}f_2(z) \exp\left(-\left|z\right|^2/2\right),
$$

where we have chosen units in which the __magnetic length__ $\ell \equiv (qB)^{-1/2}$ is one. The physical meaning of this length scale is that an area $2\pi \ell^2$ contains one flux quantum $\Phi_0 = h/q=2\pi/q$.

A possible orthonormal basis is

$$
f_n(z) = \frac{z^n}{\sqrt{2^n n!}}.
$$

### Filled LLL of Fermions

Let's imagine filling the LLL with fermions. As it stands, there's no principle to suggest how we do this, as all the states are degenerate. We can lift that degeneracy by adding a rotationally symmetric harmonic potential

$$
V_\text{harm}(x,y) = \frac{v}{2}\left(x^2+y^2\right) = \frac{v}{2}\omega^2\left|z\right|^2.
\label{many_HarmonicRound}
$$

When this potential acts on a state in the LLL, the result is not a LLL state because of the appearance of $\bar z$ in $V$. Let's suppose that the cyclotron energy $\omega_c$ that gives the spacing between Landau levels is the largest energy scale in the problem. Then we should consider only the action of $V$ in the LLL subspace. If we are only going to consider matrix elements $\bra{f_1}V\ket{f_2}$ it is possible to show that (integrating by parts), we can replace $\bar z\to 2\partial_z$. Note that the order is important: all the $\partial_z$ must stand to the left of the $z$, Thus

$$
V_\text{harm}\longrightarrow v\partial_z z =  v\left(1+z \partial_z\right).
\label{many_HarmonicProject}
$$

Applied to the basis states $f_n(z)$, $V$ just counts the degree: $V_\text{harm} f_n = v(1+n)f_n$. The ground state of noninteracting fermions therefore just amounts to filling the states $\ket{f_n}$ from the bottom. Identical arguments to those used in discussing the Fermi gas on the ring then tell us that the ground state wavefunction of $N$ fermions is

$$
\Psi(z_1,\ldots, z_N) = \prod_{j<k}^N (z_j-z_k) \exp\left(-\frac{1}{4}\sum_{j=1}^N\left|z_j\right|^2\right)
\label{many_nu1}
$$

Evaluating the density gives

$$
\rho_1(z,\bar z) = \frac{e^{-|z|^2/2}}{2\pi}\sum_{n=0}^{N-1} \frac{\left|z\right|^{2n}}{2^n n!} = \frac{1}{2\pi} \frac{\Gamma(N,|z|^2/2)}{(N-1)!}.
\label{many_LLLdensity}
$$

Here $\Gamma(s,x) = \int^\infty_x t^{s-1}e^{-t}dt$ is the [incomplete gamma function](https://en.wikipedia.org/wiki/Incomplete_gamma_function).

<a name="LLLdensity"></a>
![]({{ site.baseurl }}/assets/LLLdensity.png)
_Density of particles in the LLL for $N=100$._

At small $\left\|z\right\|$, we can approximate the sum in \eqref{many_LLLdensity} by extending the upper limit to $\infty$, and we have $\rho_1\to \frac{1}{2\pi}$. In fact, the density is fixed at this value until we reach $\sim\sqrt{2N}$, at which point the density falls to zero on the scale of the magnetic length.

Thus, with the potential \eqref{many_HarmonicRound}, the filled LLL is described by a circular droplet of fixed density $\rho_1 = 1/(2\pi)$, consistent with one state per flux quantum, which is the known degeneracy of the LLL. This picture is in fact quite general: changing the confining potential would cause the droplet to deform, but the density to remain constant (on the macroscopic scale).

### The Laughlin Wavefunction

The theory of the fractional quantum Hall effect begins with Robert Laughlin's famous wavefunction {% cite Laughlin:1983aa %} generalizing \eqref{many_nu1}

$$
\Psi_m(z_1,\ldots, z_N) = \prod_{j<k}^N (z_j-z_k)^{m} \exp\left(-\frac{1}{4}\sum_{j=1}^N\left|z_j\right|^2\right).
\label{many_nu}
$$

For this wavefunction to describe fermions, $m$ must be odd. Even $m$ describes bosons. I want to emphasize first that despite the superficial similarity of \eqref{many_nu1} and \eqref{many_nu}, they are very different beasts. While \eqref{many_nu1} is an (antisymmetric) product state \eqref{many_nu} is not, and indeed its expansion in product states is not known in general. Furthermore, the excitations formed by modifying this state have remarkable properties. As the abstract to Laughlin's paper puts it:

> This Letter presents variational ground-state and excited-state wave functions which describe the condensation of a two-dimensional electron gas into a new state of matter.

However, we'll see that the $m=1$ an $m>1$ cases do have some common features. First, we should try and explain where these wavefunctions came from. Conceptually, the simplest case to discuss is that of _bosons_ interacting via the repulsive potential

$$
H_{\text{int}} = g\sum_{j<k}\delta(\br_j-\br_k),\qquad g>0
\label{many_delta}
$$

The Laughlin state \eqref{many_nu} with $m=2$ has zero interaction energy. In fact, any state with zero interaction energy must have $\Psi_2(z_1,\ldots, z_N)$ as a factor. But if a wavefunction has a higher degree, then in the presence of the potential \eqref{many_HarmonicProject} it will have a higher energy than $\Psi_2(z_1,\ldots, z_N)$. Thus $\Psi_2(z_1,\ldots, z_N)$ is the ground state.

Laughlin argued that for electrons with Coulomb interaction $\Psi_{m}(z_1,\ldots, z_N)$ with $m$ odd is a good variational wavefunction. The fact that $(z_j-z_k)$ appears in a power higher than one means that the particles tend to stay away from each other more than in the $m=1$ state, thus lowering their interaction.

To get more precise information about the behaviour of wavefunctions, Laughlin introduced a powerful analogy between the probability distribution $\left\|\Psi_m(z_1,\ldots, z_N)\right\|^2$ of the particles, and the Boltzmann distribution of particles in a classical 2D plasma. Before doing that, it's useful to actually 'look' at a typical configuration of particles.

<a name="LaughlinMC"></a>
![]({{ site.baseurl }}/assets/LaughlinMonteCarlo.png)
_Comparison of Monte Carlo samples from an uncorrelated (Poisson) distrubution of points (left) vs. the Laughlin probability distribution $\abs{\Psi_3(z_1,\ldots z_N)}^2$ (right){% cite Girvin:1999 %}._

The striking feature of the right hand picture is the _uniformity_ of the particle distribution, in contrast with the sample of uncorrelated particles on the left. The plasma analogy helps us to understand this, and a lot more.

### The Plasma Analogy

The Coulomb potential satisfies

$$
\nabla^2 V = -q\delta(\br).
$$

In 2D the solution describing a point charge is

$$
V_\text{point}(\br) = -\frac{q}{2\pi}\log\,\left|\br\right|,
$$

while a constant background charge density $-\rho_0$ gives rise to a potential

$$
V_\text{bg}(\br) = \frac{\rho_0}{4} \left|\br\right|^2.
$$

Thus a system of identical charges in a background charge has an overall electrostatic energy

$$
V(\br_1,\ldots,\br_N) = -\frac{q^2}{2\pi} \sum_{j<k}\log\left|\br_j-\br_k\right| + \frac{q\rho_0}{4}\sum_j \left|\br_j\right|^2.
$$

Now we suppose that our plasma is at finite temperature, in which case the Boltzmann factor giving the (unnormalized) probability of finding particles at locations $\br_1, \ldots, \br_N$ is

$$
\exp[-\beta V(\brN)] = \left|\Psi_m(\brN)\right|^2,
$$

where we set $\beta q^2/(2\pi) = 2m$ and $\beta q\rho_0 = 2$. This observation is Laughlin's plasma analogy. Do bear in mind that we are not talking about _physical_ electrostatic fields -- this is a mathematical identification of two probability distributions.

Of course, we still have to analyze the statistical mechanical problem, which is hard to do exactly. Since we are interested in the large $N$ limit, we can introduce a continuum charge density $\rho(\br)$ and write the electrostatic energy as a functional of $\rho(\br)$ as

$$
\beta V[\rho] = -m\int d^2\br\, d^2\br'\, \rho(\br)\log\left|\br-\br'\right|\rho(\br') + \frac{1}{2}\int d^2\br\, \left|\br\right|^2\rho(\br).\
$$

A natural approximation would be to try and minimize the energy, leading to the condition

$$
-2m\int d^2\br'\, \log\left|\br-\br'\right|\rho(\br') + \frac{1}{2}\left|\br\right|^2 = 0.
$$

Applying $\nabla^2$ to both sides then gives

$$
\rho(\br) = \frac{1}{2\pi m}.
$$

On the basis of this approximation, we conclude that the density is fixed at $1/m$ of the value we found for the $m=1$ case, which seems reasonable. The result applies where the density is non-zero, so we get a uniform droplet as before, this time of radius $\sqrt{2Nm}$. $1/m$ is called the __filling fraction__ of the state.

Although we ignored the effect of summing over all configuration of the particles in the partition function (i.e. we ignored the contribution of entropy to the free energy), it turns out that this effect can be ignored in the large $N$ limit.


### Fractional Charge

Laughlin also suggested wavefunctions to describe excited states of the system, the simplest being the __quasihole__ wavefunction

$$
\Psi_\text{hole}(z_1,\ldots, z_N|Z) = \prod_j (Z-z_j)\Psi_m(z_1,\ldots, z_N).
$$

In the case of the $m=2$ state with the interaction \eqref{many_delta} discussed above, it's clear that this state still has zero interaction energy, although the harmonic potential \eqref{many_HarmonicProject} acts upon it non-trivially.

The plasma analogy allows us to see that this state describes a __quasiparticle__ of fractional charge. The concept of a quasiparticle is one that we'll meet repeatedly in this course. It describes a particle-like excitation of a many body system.  __Phonons__ -- quantized lattice vibrations -- are a kind of quasiparticle that you will have met before. In quantum field theory, particles themselves are described as quantized excitations of a system -- fields that pervade spacetime -- so at a _formal_ level there is little difference between the particles of particle physics and the quasiparticles of condensed matter physics. The _physical_ difference is that in the latter case we know what the background medium is made of!

Let's see how the plasma picture is modified by the introduction of the quasihole. The electrostatic energy is now

$$
V(\brN)=-\frac{q^2}{2\pi m}\sum_j \log\left|\br_j-\mathbf{R}\right|-\frac{q^2}{2\pi} \sum_{j<k}\log\left|\br_j-\br_k\right| + \frac{\rho q_0}{4}\sum_j \left|\br_j\right|^2.
$$

This is interpreted as the introduction of a charge $q/m$ at point $\mathbf{R} = (X, Y)$, where $Z=X+iY$. The charges of the plasma will screen this charge, leaving a 'hole' in the density distribution amounting to charge $-q/m$, corresponding to $-1/m$ real particles. The quasiholes have fractional charge! This means that the normalization integral is approximated by the Boltzmann weight corresponding to the interaction of this fractional charge with the background charge density

$$
\int \prod_{j=1}^N d^2z_j\,\left|\Psi_\text{hole}(z_1,\ldots, z_N|Z)\right|^2 \sim\exp\left(\frac{1}{2m}\left|Z\right|^2\right),
$$

### Fractional Statistics

Consider the two quasihole wavefunction

$$
\Psi_\text{2 hole}(z_1,\ldots, z_N|Z_1,Z_2) = \prod_j (Z_1-z_j)(Z_2-z_j)\Psi_m(z_1,\ldots, z_N).
\label{many_2hole}
$$

The probability distribution $\left\|\Psi_\text{2 hole}(z_1,\ldots, z_N\|Z_1,Z_2)\right\|^2$ corresponds to a Coulomb plasma with two $1/m$ charges at the positions $\mathbf{R}_{1,2}$. There is no interaction term between these two fixed charges, but as we have argued, each is overwhelmingly likely to be surrounded by region of depleted density amounting to $-1/m$ of a particle. The normalization integral is then be given by the Boltzmann weight corresponding to the interaction of these two depleted regions

$$
\int \prod_{j=1}^N d^2z_j\,\left|\Psi_\text{2 hole}(z_1,\ldots, z_N|Z_1,Z_2)\right|^2 \sim\exp\left(\frac{2}{m}\log\left|Z_1-Z_2\right|+\frac{1}{2m}\left[\left|Z_1\right|^2+\left|Z_2\right|^2\right]\right).
$$

If we try to intepret this as the probability density of a two particle wavefunction, we arrive at

$$
\Psi_\text{2 hole}(Z_1,Z_2) \sim \left(Z_1-Z_2\right)^{1/m} \exp\left(\frac{1}{4m}\left[\left|Z_1\right|^2+\left|Z_2\right|^2\right]\right).
$$

For $m=1$ this is an antisymmetric wavefunction, and may be interpreted as a pair of fermionic holes. For $m>1$ the wavefunction is _multi-valued_, and changes by a phase $\pi/m$ when $Z_1$ and $Z_2$ are exchanged. The quasiholes are __anyons__, particles with fractional statistics intermediate between bosons and fermions.


References
----------

{% bibliography --cited %}
