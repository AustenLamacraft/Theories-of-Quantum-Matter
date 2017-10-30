---
layout: page
title: B is for Bunching
author: Austen Lamacraft
chapter: 6
summary: Density correlations. Hanbury Brown and Twiss effect. Hartree--Fock theory.
published: true
---

<p class="message">
Bose or Fermi statistics gives rise to correlations in the positions of particles in a many body system, even in product states. These correlations affect the energy of many particle states, and provide the basis of the simplest approximate theories.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}

Reading: {% cite Nazarov:2013 %}, {% cite Baym:1969 %}

---

## Correlation Functions

In [Lecture 1]({{ site.baseurl }}/lectures/ManyBodyWavefunctions/) we introduced  the __pair distribution function__

$$
\rho_2(x_1,x_2) = N(N-1) \int dx_3\ldots dx_N \,\left|\Psi(x_1,x_2,\ldots,x_N)\right|^2,
\label{more_pdf}
$$

which measures the likelihood of finding a pair of particles at $x_1$ and $x_2$. We also saw that $\rho_2(x_1,x_2)$ could be related to the expectation of the product of the density operators $\rho(x)$ at different points.

$$
\rho_2(x_1,x_2) = \bra{\Psi}\rho(x_1)\rho(x_2)\ket{\Psi} - \rho_1(x_1)\delta(x_1-x_2),
\label{more_rhorhonorm}
$$

where $\rho_1(x)= \braket{\Psi}{\rho(x)}{\Psi}$. $\rho_2(x,y)$ is the simplest example of a __correlation function__. Note also that the quantity $\bra{\Psi} \rho_q \rho_{-q} \ket{\Psi}$, used to quantify the crystalline order in a solid in [Lecture 3]({{ site.baseurl }}/lectures/ElasticChain/), is just the Fourier transform of $\rho_2(x_1,x_2)$. Higher correlation functions, involving products of more than two density operators, provide more detailed information on the distribution of the particles.

### Correlation Functions in Second Quantization

We evaluated $\rho_2(x,y)$ for the 1D Fermi gas:

$$
\rho_2(x,y) = n^2\left[1 - \left(\frac{\sin[k_\text{F}(x-y)]}{k_\text{F}(x-y)}\right)^2\right].
\label{more_rho2evalFermi}
$$

Let's see how to reproduce this result using second quantization. First note that the definition \eqref{more_pdf} can be written

$$
\rho_2(x,y) =\braket{\Psi}{\sum_{j\neq k}\delta(x-x_j)\delta(y-x_k)}{\Psi}.
\label{more_rho21stquant}
$$

We recognize this as the expectation value of a two particle operator. From what we learnt last time, we can immediately write down the second quantized form

$$
\rho_2(x,y) =\braket{\Psi}{\pdop(x)\pdop(y)\pop(y)\pop(x)}{\Psi}.
\label{more_rho22ndquant}
$$

This differs from $\bra{\Psi}\rho(x)\rho(y)\ket{\Psi}$ by the ordering of operators. Using the canonical commutation relations for the fields gives the relation \eqref{more_rhorhonorm} for both bosons and fermions.

Operators in which all annihilation operators stand to the right of all creation operators are said to be __normal ordered__. Here, the normal ordering serves to ensure that a term with $j=k$ does not appear in \eqref{more_rho21stquant}. Two particle terms in the Hamiltonian are normal ordered for the same reason.

Now let's evaluate \eqref{more_rho22ndquant} for the ground state of the Fermi gas. We will find the result for a general product state, using the same strategy as we used in the last lecture for the single particle density matrix. That is, we substitute the expansion of the fields $\pop(x)$ and $\pdop(x)$ in terms of the orthonormal single particle states making up the product state

$$
\begin{align}
	\pop(x)=\sum_{\beta}  \varphi^{}_{\beta}(x)\aop_{\beta},\\
  \pdop(x)=\sum_{\beta}  \varphi^*_{\beta}(x)\adop_{\beta}.
\end{align}
$$

This gives

$$
	\label{2nd_quant_CEval}
	\rho_2(x,y)=\sum_{\alpha, \beta, \gamma, \delta}\varphi^{*}_{\alpha}(x)\varphi^{*}_{\beta}(y)\varphi^{}_{\gamma}(y)\varphi^{}_{\delta}(x)\braket{\Psi}{\adop_{\alpha}\adop_{\beta}\aop_{\gamma}\aop_{\delta}}{\Psi}.
$$

If we are considering the expectation in a state of the form $\ket{\mathbf{N}}$, we can see that an annihilation operator for a given single particle state must be accompanied by a creation operator for the same state. There are therefore two possibilities

$$
\begin{align}
	&\alpha =\delta,\, \beta=\gamma, \text{ or }\\
  &\alpha=\gamma,\, \beta=\delta,
\end{align}
$$

which give rise to two groups of terms

$$
\begin{align}
\braket{\mathbf{N}}{\adop_{\alpha}\adop_{\gamma}\aop_{\gamma}\aop_{\alpha}}{\mathbf{N}}&=N_{\alpha}N_{\gamma}\nonumber\\
	\braket{\mathbf{N}}{\adop_{\alpha}\adop_{\gamma}\aop_{\alpha}\aop_{\gamma}}{\mathbf{N}}&=\pm N_{\alpha}N_{\gamma},
\end{align}
$$  

the $\pm$ corresponding to bosons and fermions respectively. Thus we have

$$
\begin{align}
\rho_2(x,y)=\sum_{\alpha, \beta}N_\alpha N_\beta\left[\abs{\varphi_{\alpha}(x)}^2\abs{\varphi_{\beta}(y)}^2 \pm \varphi^*_\alpha(x)\varphi^{}_\alpha(y)\varphi^*_\beta(y)\varphi^{}_\beta(x) \right].
\label{more_rho2result}
\end{align}
$$

You might notice that this expression weights the case $\alpha=\beta=\gamma=\delta$ by a factor $2N_\alpha^2$ when it should have $N_\alpha(N_\alpha-1)$ in the case of bosons, and zero for fermions. On the other hand, such cases amount to a sum over a _single index_, where the general case is a sum over a double index. It seems reasonable, then, that this accounting error is not important in the thermodynamic limit. For instance, in the case that $\varphi_\alpha(x)$ are plane wave states we have the usual prescription

$$
\sum_\alpha(\cdots) \longrightarrow L\int (\cdots)\frac{dk}{2\pi},
$$

assuming the integrand is smooth. In this case the error in \eqref{more_rho2result} is a factor of $L^{-1}$ smaller than what we retain. We do however have to be careful in Bose condensates, where one state has a finite fraction of the particles and this argument does not apply.

We can express the result \eqref{more_rho2result} in terms of the density and density matrix as

$$
\rho_2(x,y) = \rho_1(x)\rho_1(y) \pm g(x,y)g(y,x),
\label{more_rho2compact}
$$

which, in the case of the ground state of the Fermi gas, reproduces \eqref{more_rho2evalFermi}. We see that the correlation function vanishes as the separation $x-y\to 0$, because $g(x,x)=\langle\mathop{\rho(y)}\rangle$. This is, of course, another manifestation of the exclusion principle: it is not possible for two fermions to sit on top of each other. The scale of the 'hole' in the correlation function is of course set by the mean interparticle separation, or Fermi wavelength. Note also the decaying oscillations, indicating liquid-like correlations in the positions of the particles. These are sometimes known as __Friedel oscillations__.

<a name="1DFermiCorrelation"></a>
![]({{ site.baseurl }}/assets/1DFermiGasCorrelation.png)
_Correlation function $\rho_2(x,0)$ for the Fermi gas._

For bosons the situation is very different. If $g(x,y)\to 0$ as $\abs{x-y}\to\infty$, the value of the correlation function as $\abs{x-y}\to 0$ is _twice_ the value at $\abs{x-y}\to\infty$. This characteristic behavior is often termed __bunching__: a pair of bosons is more likely to be found at two nearby points than at two distant points.

Nothing about the result \eqref{more_rho2compact} is special to 1D of course: one just has to recalculate the density and density matrix. Remember, though, that it does only apply to product states.

### The Hanbury Brown and Twiss Effect

The result for the density correlations \eqref{more_rho2result} or \eqref{more_rho2compact} can be viewed as a kind of interference effect that shows up in the correlations of the intensity of a quantum waves, even when there is no interference in the intensity itself. To illustrate this interpretation, we consider a classic experiment from with Bose condensates {% cite Andrews1997 %}.  

Consider a gas of $N$ noninteracting  bosons occupying the lowest energy level of some potential well: a __Bose condensate__. If the ground state wavefunction is $\varphi_{0}(\br)$, the $N$-body wavefunction for such a state is

$$
	\Psi(\br_1,\br_2,\ldots,\br_N)=\prod_i^N \varphi_0(\br_i),
  \label{2nd_quant_BoseGroundState}
$$

which we can write in second quantized notation as

$$
	\ket{\Psi}=\frac{1}{\sqrt{N!}}\left(\adop_0\right)^N\ket{\text{VAC}},
$$

where $\adop_0$ creates a particle in the state $\varphi_0(\br)$. Imagine that we took another well, also filled with $N$ bosons, and placed it alongside the first. If we switch off the potentials at some instant, the particles will fly out, with wavefunctions orginating in the two wells overlapping. Precisely this experiment was reported in {% cite Andrews1997 %}. What do we expect to see?

Let us denote by $\varphi_L(\br)$ and $\varphi_R(\br)$ the ground states of two spatially separated potential wells. First, consider a state where each boson is in a superposition of $\varphi_L(\br)$ and $\varphi_R(\br)$. Such a situation could arise by starting from a single well and adiabatically splitting it in two. We can write such a state as

$$
	\ket{\bar N_L,\bar N_R}_\theta\equiv\frac{1}{\sqrt{N!}}\left[\sqrt{\frac{\bar N_L}{N}}e^{-i\theta/2}
	\adop_L+\sqrt{\frac{\bar N_R}{N}}e^{i\theta/2}\adop_R\right]^N\ket{\text{VAC}},
  \label{more_two}
$$

where $\bar N_{L,R}$ are the expectation values of particle number in each state $N=\bar N_L+\bar N_R$. We allow the system to evolve for some time $t$, so that the two `clouds' begin to overlap (typically	achieved by allowing free expansion i.e. turning off the confining potentials). If we consider the time evolution in the Heisenberg picture then, as we saw last time, the field operator obeys the free particle Schrödinger equation (ignoring interactions)

$$
i\frac{\partial \pop(\br,t)}{\partial t} = -\frac{1}{2m}\nabla^2\pop(\br,t).
$$

We write the field operator as

$$
\pop(\br)=\varphi_L(\br,t)\aop_L+\varphi_R(\br,t)\aop_R+\cdots,
$$

where the wavefunctions $\varphi_{L/R}(\br,t)$ are evolving freely, and the dots denote the other states in some complete orthogonal set that includes $\varphi_L(\br)$ and $\varphi_R(\br)$: we can ignore them because they are empty. A calculation of the expectation value of $\rho(\br)=\pdop(\br)\pop(\br)$ gives

$$
	\begin{align}
	\rho_1(\br,t)=\bar N_L|\varphi_L(\br,t)|^2+\bar N_R|\varphi_R(\br,t)|^2+\overbrace{2\sqrt{\bar N_L \bar
	N_R}\mathrm{Re}\,e^{i\theta}\,\varphi^*_L(\br,t)\varphi_R(\br,t)}^{\equiv\rho_{\mathrm{int}(
	\br,t)}}.
  \label{dens_int}
	\end{align}
$$

If the clouds begin to overlap, the last term in \eqref{dens_int} comes into play. Its origin is in quantum interference between the two coherent subsystems, showing that the _relative phase_ has a real physical effect.

<p class="message">

Consider a Gaussian wavefunction of width $R_0$ at time $t=0$. Show (by substitution into the Schrödinger equation is fine) that this function evolves as

$$
	\varphi(\br,t)=\frac{1}{\left(\pi R_t^{2}\right)^{3/4}}\exp\left[-\frac{\br^2\left(1+i t/m
	R_0^2)\right)}{2R_t^2}\right],
  \label{Gaussian}
$$

where

$$
R_t^2=R_0^2+\left(\frac{ t}{mR_0}\right)^2.
$$

</p>

\eqref{Gaussian} illustrates a very important point about the expansion of a gas. After a long period of expansion, the final density distribution is a reflection of the initial _momentum_ distribution. This is simply because faster moving atoms fly further, so after time $t$ an atom with velocity $\mathbf{v}$ will be at position $\mathbf{r}=\mathbf{v}t$ from the center of the trap, provided that this distance is large compared to $R_{0}$, the initial radius of the gas. The $t\to\infty$ limit of \eqref{Gaussian} gives

$$
		|\varphi(\br,t\to\infty)|^{2}\propto \exp\left[-\left(\frac{m R_{0}\br}{ t}\right)^{2}\right],
	\label{2nd_quant_TimeOfFlight}
$$

reflecting a Gaussian initial momentum distribution of width $R_0^{-1}$. Imaging the density distribution after expansion is one of the most commonly used experimental techniques in ultracold physics, and yields information about the momentum distribution $n(\bp)\equiv  \adop_{\bp}\aop_{\bp}$ before expansion.

Consider the evolution of two Gaussian wavepackets with width $R_0$ at $t=0$, separated by a distance $d\gg R_0$

$$
	\varphi_{L,R}(\br,t)=\frac{1}{\left(\pi R_t^{2}\right)^{3/4}}\exp\left[-\frac{\left(\br\pm\mathbf{d}/2\right)^2\left(1+i t/m
	R_0^2)\right)}{2R_t^2}\right],
$$

The final term of \eqref{dens_int} is then

$$
\begin{align}
	\rho_{\mathrm{int}}(\br,t)&=A(\br,t)\cos\left[\theta+\frac{\br
	\cdot\mathbf{d}}{mR_0^2R_t^2}t\right]\nonumber\\
	A(\br,t)&=\frac{2\sqrt{\bar N_L\bar N_R}}{\pi^{3/2}R_t^3}\exp\left(-\frac{\br^2+\mathbf{d}^2/4}{R_t^2}\right)
\label{int_term}
\end{align}
$$

The interference term therefore consists of regularly spaced fringes, with a separation at long times of $2\pi t/md$.

Now we imagine doing the same thing with two condensates of fixed particle number, which bear no phase relation to one another. The system is described by the product state (often called a __Fock state__ in this context)

$$
	\ket{N_L,N_R}\equiv\frac{1}{\sqrt{N_L! N_R!}}\left(\adop_L\right)^{N_L}\left(\adop_R\right)^{N_R}\ket{\text{VAC}}.
$$

Computing the density in the same way yields

$$
	\rho_1(\br,t)=N_L|\varphi_L(\br,t)|^2+N_R|\varphi_R(\br,t)|^2,
\label{dens_fock}  
$$

which differs from the previous result by the absence of the interference term.

This is not the end of the story, however. When we look at an absorption image of the gas, we are not
looking at an _expectation value_ of $\rho(\br)$ but rather the measured value of some observable(s) $\rho(\br)$. The expectation value just tells us the result we would expect to get if we repeated the same experiment many times and averaged the result. We get more information by thinking about the correlation function of the density at two different points.


An application of our result \eqref{more_rho2result} for the density correlations gives

$$
\begin{align}
	\rho_2(\br,\br')&=\rho_1(\br)\rho_1(\br')
	+N_LN_{R}\varphi_L^*(\br)\varphi_R^*(\br')\varphi_L(\br')\varphi_R(\br)	\nonumber\\
	&\qquad+N_{L}N_R\varphi_R^*(\br)\varphi_L^*(\br')
	\varphi_R(\br')\varphi_L(\br).
  \label{dens_corr}
\end{align}
$$

We see that the second line contains interference fringes, with the same spacing as before. The correlation function gives the relative probability of finding an atom at $\br'$ if there is one at $\br$. We conclude that in each measurement of the density, fringes are present but with a phase that varies between measurements, even if the samples are identically prepared.

The rather surprising implication is that predictions for measured quantities for a system in a Fock state are the same as in a relative phase state, but with a subsequent averaging over the phase.

<p class="message">
Prove this by showing that the density matrix

$$
\rho=\int_0^{2\pi}\frac{d\theta}{2\pi}\ket{\bar N_L,\bar N_R}_\theta\bra{\bar N_R,\bar N_L}_\theta
$$

coincides with that of a mixture of Fock states with binomial distribution of atoms into states $\varphi_{L}$, $\varphi_{r}$. At large $N$ this distribution becomes sharply peaked at occupations $\bar N_L$, $\bar N_R$.
</p>

The interference of two independent condensates was observed in 1997 in {% cite Andrews1997 %}. The related question of whether two independent light sources give rise to interference was discussed much earlier in {% cite Magyar1963 %}. The occurrence of interference fringes in a correlation function does not depend upon Bose condensation, although the phenomenon is very striking in this case because the fluctuations are parametrically as large as the $\rho_1(\br)\rho_1(\br')$ term in \eqref{dens_corr}. The general phenomenon is known as the __Hanbury Brown and Twiss effect__, which is the work of two people (not three): Robert Hanbury Brown and Richard Q. Twiss. For the history and early applications of this effect, see {%cite Baym:1998aa %} and {% cite kleppner2008 %}.

## Hartree--Fock Theory

We now apply these ideas to the approxiamate calculation of the energy of an interacting many body system.

### The Hartree and Fock Potentials

Recall from last time that a two body interaction has the form

$$
\hat H_\text{int.} = \sum_{j<k} U(\br_j-\br_k)=\frac{1}{2}\int d\br_1 d\br_2\, U(\br_1-\br_2)\pdop(\br_1)\pdop(\br_2)\pop(\br_2)\pop(\br_1).
$$

Since

$$
\sum_{j<k} U(\br_j-\br_k) = \frac{1}{2}\int \sum_{j\neq k}\delta(\br_1-\br_j)\delta(\br_2-\br_k) d\br_1 d\br_2,
$$

we can immediately write down the expectation value of the interaction energy in a product state

$$
\begin{align}
	\label{2nd_quant_HartreeFock}
	\langle \hat V\rangle &= \overbrace{\frac{1}{2}\int d\br\, d\br'\, \rho_1(\br) U(\br-\br')\rho_1(\br')}^{\equiv E_\text{Hartree}} \\
	&\qquad\overbrace{\pm \frac{1}{2}\int d\br\, d\br'\,  U(\br-\br')g(\br,\br')g(\br',\br)}^{\equiv E_\text{Fock}}.
\end{align}
$$

The two terms are known as the __Hartree__ and __Fock__ (or __exchange__) contributions, respectively. This expression lies at the core of the variational __Hartree--Fock method__ for many body systems, which approximates the ground state by a product state. The Hartree term looks completely reasonable, while the Fock potential doesn't look like a potential at all, and reflects the non-classical correlations.

### Hartree--Fock for the Electron Gas

How does the Hartree--Fock picture change when we have spin? Let's consider a system of spin-1/2 fermions. We can describe such a system in terms of field operators $\pop_\sigma(\br)$, $\pdop_\sigma(\br')$ satisfying the canonical anticommutation relations

$$
\begin{gather}
	\left\{\pop_{\sigma_1}(\br_1),\pdop_{\sigma_2}(\br_2)\right\}=\delta_{\sigma_1\sigma_2}\delta(\br_1-\br_2)\nonumber\\
	\left\{\pop_{\sigma_1}(\br_1),\pop_{\sigma_2}(\br_2)\right\}=\left\{\pdop_{\sigma_1}(\br_1),\pdop_{\sigma_2}(\br_2)\right\}=0.
	\label{2nd_quant_PositionRelationsAnti}
\end{gather}
$$

The density matrix is a matrix in spin space as well as real space

$$
g_{\sigma_1\sigma_2}(\br_1,\br_2) = \braket{\Psi}{\pdop_{\sigma_1}(\br_1)\pop_{\sigma_2}(\br_2)}{\Psi}.
$$

From $g_{\sigma_1\sigma_2}(\br_1,\br_2)$ we can extract the spin density as well the density

$$
\mathbf{\rho}(\br) = \tr\left[g(\br,\br)\right],\quad \mathbf{s}(\br) = \frac{1}{2}\tr\left[\boldsymbol{\sigma}g(\br,\br)\right].
$$

(I've dropped the subscript from $\rho_1(\br)$ here.) An spin-independent interaction potential is described by a Hamiltonian of the form

$$
\hat H_\text{int.} = \frac{1}{2}\sum_{\sigma_1,\sigma_2}\int d\br_1 d\br_2\, U(\br_1-\br_2)\pdop_{\sigma_1}(\br_1)\pdop_{\sigma_2}(\br_2)\pop_{\sigma_2}(\br_2)\pop_{\sigma_1}(\br_1).
$$

The Hartree--Fock energy is then

$$
\begin{align}
	\langle \hat H_\text{int.}\rangle &=\frac{1}{2}\int d\br\, d\br'\, \rho(\br) U(\br-\br')\rho(\br')\\
	&- \frac{1}{2}\int d\br\, d\br'\,  U(\br-\br')\tr\left[g(\br,\br')g(\br',\br)\right].
  \label{2nd_quant_HFSpin}
\end{align}
$$

The Fock term can be rewritten in a more useful way using the identity

$$
\delta_{ab}\delta_{cd} = \frac{1}{2}\left[\boldsymbol{\sigma}_{a c}\cdot \boldsymbol{\sigma}_{d b} + \delta_{ac}\delta_{db}\right],
$$

which gives

$$
\begin{align}
E_{\text{Fock}} &=-\frac{1}{4} \int d\br\, d\br'\,  U(\br-\br')\tr\left[g(\br,\br')\right]\tr\left[g(\br',\br)\right]\\&-\frac{1}{4}\int d\br\, d\br'\,  U(\br-\br')\tr\left[\boldsymbol{\sigma}g(\br,\br')\right]\cdot\tr\left[\boldsymbol{\sigma}g(\br',\br)\right].
\end{align}
$$

Suppose we had a $\delta$-function interaction $U(\br)=U_0 \delta(\br)$. Then the Fock energy can be written

$$
\begin{align}
E_{\text{Fock}} =-\frac{V_0}{4} \int d\br\, \rho(\br)^2-V_0\int d\br\, \mathbf{s}(\br)\cdot\mathbf{s}(\br)
\end{align}
$$

The second term favours ferromagnetism for repulsive interactions. The physical origin is the same as the Hund's rule coupling in atoms: fermions in different spin states can sit at the same spatial location, while those in the same spin state must be in different locations. For repulsive interactions occupying the same spin state is energetically favourable.  

<p class="message">
This is most succintly put by the formula

$$
\rho_2(\br,\br) = \frac{1}{2}\rho(\br)^2 - 2\mathbf{s}(\br)\cdot\mathbf{s}(\br)
$$

</p>

The Hartree--Fock energy forms the basis of a variational method using product states as variational wavefunctions. For a Hamiltonian with translational invariance, like

$$
H = \int d\br \frac{1}{2m}\nabla\pdop\cdot\nabla\pop + \frac{1}{2}\int d\br d\br' U(\br-\br')\pdop(\br)\pdop(\br')\pop(\br')\pop(\br),
\label{more_H2nd}
$$

this is not too bad, as we are guaranteed to be working with plane wave single particle states. Then the only variational parameters are the occupancies of these states: we'll meet an example in the next section. If translational symmetry is broken by introducing a potential $U(\br)$ into the single particle part of \eqref{more_H2nd}, say, the situation is more complicated. We may be tempted to use single particle states that are the eigenstates of the single particle part of the Hamiltonian, but there is no real justification for this, and one has to allow the states, as well as the occupancies, to vary.

### Stoner Criterion for Ferromagnetism

Let us try to put a bit more flesh on the idea that repulsive interactions favour ferromagnetism in fermionic systems. We will continue to use the model interaction $U(\br)=U_0\delta(\br)$ that we introduced in the previous section. Of course, this isn't a realistic interaction between electrons in a metal, say, but as we'll see in [Lecture 11]({{ site.baseurl }}/lectures/Jellium/), the long-ranged Coulomb interaction is screened and becomes finite-ranged. Thus our model is not a bad approximation to the _effective_ interaction between electrons in a metal.

Polarizing the spins in a Fermi gas is not without cost (otherwise everything would be ferromagnetic!): there is a price to pay in increased kinetic energy. To understand why this is so, consider the ground state kinetic energy of $N$ (spinless) fermions in three dimensions, obtained from

$$
\begin{align}
N = \sum_{|\bk|<k_\text{F}}&\longrightarrow L^3 \int_{|\bk|<k_\text{F}} \frac{d\bk}{(2\pi)^3} = \frac{k_\text{F}^3}{6\pi^2} \\
E_\text{kin} = \sum_{|\bk|<k_\text{F}} \frac{\bk^2}{2m} &\longrightarrow L^3 \int_{|\bk|<k_\text{F}} \frac{d\bk}{(2\pi)^3} \frac{\bk^2}{2m}\\
 &= \frac{k_\text{F}^5}{20\pi^2 m} = L^3 \frac{3}{10m}(6\pi^2)^{2/3} n^{5/3},
\end{align}
$$

(The assumption of a quadratic dispersion is not important here. More generally, we fill a band structure.) where $n = \frac{N}{L^3}$ is the mean density. Assuming a system of fermions with spin is now polarized in the $z$-direction, we have differing densities $n_{\uparrow,\downarrow}$ of spin up and spin down fermions. Their total energy is

$$
E_\text{kin}(n_\uparrow,n_\downarrow) = \frac{cL^3}{m}\left(n_\uparrow^{5/3}+n_\downarrow^{5/3}\right),
$$

where $c=\frac{3}{10}(6\pi^2)^{2/3}$. In terms of the overall density $n=n_\uparrow+n_\downarrow$ and density of spin $\bar s = \left(n_\uparrow-n_\downarrow\right)/2$, we have

$$
E_\text{kin}(n, \bar s) = \frac{cL^3}{m}\left(\left[n/2+\bar s\right]^{5/3}+\left[n/2-\bar s\right]^{5/3}\right).
$$

Alternatively, write this in terms of the __polarization__ $P \equiv \frac{n_\uparrow-n_\downarrow}{n}$ that varies in the range $[-1,1]$ as

$$
E_\text{kin}(P) = \frac{E_\text{K}}{2}\left[(1+P)^{5/3}+(1-P)^{5/3}\right].
$$

We see that, on account of the convexity of $x^{5/3}$, $E^{(0)}_\text{kin}(n, \bar s)$ is minimized for $s=0$.

Let's compare this with the effect of interactions. In the short-ranged model introduced above, the total Hartree--Fock energy is

$$
E_\text{HF}(n,\bar s) = \frac{V_0L^3}{2} n^2 - \frac{V_0L^3}{2} \left(n_\uparrow^2+n_\downarrow^2\right) =  \frac{V_0L^3}{2} \left(\frac{1}{2}n^2 - 2\bar s^2\right).
$$

We write this in terms of the polarization as

$$
E_\text{HF}(P) = \frac{E_V}{2}(1-P^2).
$$

<p class="message">

Minimize the total energy $E(P) = E_\text{kin}(P) + E_\text{HF}(P)$ to show

<ol>
  <li>For $E_V/E_K<10/9$ the ground state is non-magnetic.</li>
  <li>As $E_V/E_K$ increases past $10/9$ the magnetization begins to increase.</li>
  <li>At $E_V/E_K>\frac{5}{6}2^{2/3}$ is the ground state is fully polarized.</li>
</ol>


</p>

One shouldn't take these numerical values too seriously given the simplicity of the model, but they illustrate the physical principles at work behind the appearance of ferromagnetism in metals.

### Excited State Energies

So far we have discussed properties of the ground state only. We can, however, evaluate the Hartree--Fock energy in a product state describing an excited state of a noninteracting system. This gives the first order perturbation theory correction to the excited state energy. For concreteness we will stick with fermions for now, though the method is general.

If we work in a translationally invariant system, the appropriate single particle states are plane waves. We write the field operators in the plane wave basis as

$$
\begin{align}
	\pop(\br)\equiv\frac{1}{L^{3/2}}\sum_{\bk} \exp(i\bk\cdot\br)\aop_{\bk},\\
  \pdop(\br)\equiv\frac{1}{L^{3/2}}\sum_{\bk} \exp(-i\bk\cdot\br)\adop_{\bk},
\end{align}
$$

and represent the interaction potential in terms of its Fourier components

$$
U(\br-\br') = \frac{1}{L^3}\sum_\bq \tilde U(\bq) \exp(i\bq\cdot[\br-\br']).
$$

The interaction Hamiltonian for spinless particles can then be written

$$
\hat H_\text{int.}  = \frac{1}{2L^3} \sum_{\bk_1+\bk_2=\bk_3+\bk_4} \tilde U(\bk_1-\bk_4) \adop_{\bk_1}\adop_{\bk_2}\aop_{\bk_3}\aop_{\bk_4}.
\label{more_vertex}
$$

When written in this way, interaction Hamiltonians are sometimes associated with the graphical representation below, one of the ingredients of the __Feynman diagram__ technique for performing perturbation theory calculations in field theories. The incoming lines (arrows in) represent particles being removed (in momentum states $\bk_3$ and $\bk_4$) and the outgoing lines represent particles added (momenta $\bk_1$ and $\bk_2$). The wiggly line represents $\tilde V(\bq)$. The conservation of momentum at the vertices is a consequence of the translational invariance of the problem: the two integrations over $\br$ and $\br'$ give rise to two $\delta$-functions that perform this function.  

<a name="Vertex"></a>
![]({{ site.baseurl }}/assets/Vertex.png)
_Graphical representation of the interaction \eqref{more_vertex}._

As we've already discussed, the expectation value of \eqref{more_vertex} in a product state of momentum eigenstates gives two terms, with different 'pairings' of creation operators with annihilation operators. We can represent these two terms graphically as shown below.

<a name="HFDiag"></a>
![]({{ site.baseurl }}/assets/HFDiag.png)
_Graphical representation of the Hartree and Fock terms._

Evaluating the two contributions in terms of the occupation numbers gives

$$
\braket{\mathbf{N}}{\hat H_\text{int.}}{\mathbf{N}} = \frac{1}{2V}\tilde U(0) \sum_{\bk_1,\bk_2} N_{\bk_1}N_{\bk_2} - \frac{1}{2V} \sum_{\bk_1,\bk_2} \tilde U(\bk_1-\bk_2) N_{\bk_1}N_{\bk_2}
$$

While the Hartree term just depends on the total number of particles, the Fock term depends on the individual occupations. The interaction energy to add a single particle to state $\bk$ is

$$
\Delta U_{\bk} = \frac{\tilde U(0)}{V} \sum_{\bk'} N_{\bk'} - \frac{1}{V}\sum_{\bk'} \tilde U(\bk-\bk') N_{\bk'}
$$


References
----------

{% bibliography --cited %}
