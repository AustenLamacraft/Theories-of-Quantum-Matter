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
\rho_2(x,y) = \bar n^2\left[1 - \left(\frac{\sin[k_\text{F}(x-y)]}{k_\text{F}(x-y)}\right)^2\right].
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

You might notice that this expression double counts the case $\alpha=\beta=\gamma=\delta$ in the case of bosons. When does this matter? As usual we are interested in the continuum limit. When $\varphi_\alpha(x)$ are plane wave states this involves the usual prescription

$$
\sum_\alpha(\cdots) \longrightarrow L\int (\cdots)\frac{dk}{2\pi},
$$

_assuming_ the integrand is smooth. In this case the error in \eqref{more_rho2result} is a factor of $L^{-1}$ smaller than what we retain. However, if the occupancies of the single particle states are not smooth functions, this conclusion is not safe. We will meet this situation when we discuss Bose condensates in [Lecture 8]({{ site.baseurl }}/lectures/BoseGas/).

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

As an illustration, consider the evolution of two Gaussian wavepackets with width $R_0$ at $t=0$, separated by a distance $d\gg R_0$

$$
	\varphi_{L,R}(\br,t)=\frac{1}{\left(\pi R_t^{2}\right)^{3/4}}\exp\left[-\frac{\left(\br\pm\mathbf{d}/2\right)^2\left(1+i t/m
	R_0^2)\right)}{2R_t^2}\right],
  \label{Gaussian}
$$

with

$$
R_t^2=R_0^2+\left(\frac{ t}{mR_0}\right)^2.
$$

\eqref{Gaussian} illustrates a very important point about the expansion of a gas. After a long period of expansion, the final density distribution is a reflection of the initial _momentum_ distribution. This is simply because faster moving atoms fly further, so after time $t$ an atom with velocity $\mathbf{v}$ will be at position $\mathbf{r}=\mathbf{v}t$ from the center of the trap, provided that this distance is large compared to $R_{0}$, the initial radius of the gas. The $t\to\infty$ limit of \eqref{Gaussian} gives

$$
		|\varphi_{L,R}(\br,t\to\infty)|^{2}\propto \exp\left[-\left(\frac{m R_{0}\left[\br\pm\mathbf{d}/2\right]}{ t}\right)^{2}\right],
	\label{2nd_quant_TimeOfFlight}
$$

reflecting a Gaussian initial momentum distribution of width $R^{-1}{0}$. Imaging the density distribution after expansion is one of the most commonly used experimental techniques in ultracold physics, and yields information about the momentum distribution $n(\bp)\equiv  \adop_{\bp}\aop_{\bp}$ before expansion.

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
\hat V = \sum_{j<k} V(\br_j-\br_k)=\frac{1}{2}\int d\br_1 d\br_2\, V(\br_1-\br_2)\pdop(\br_1)\pdop(\br_2)\pop(\br_2)\pop(\br_1).
$$

Since

$$
\sum_{j<k} V(\br_j-\br_k) = \frac{1}{2}\int \sum_{j\neq k}\delta(\br_1-\br_j)\delta(\br_2-\br_k) d\br_1 d\br_2,
$$

we can immediately write down the expectation value of the interaction energy in a product state

$$
	\label{2nd_quant_HartreeFock}
	\langle \hat V\rangle = \frac{1}{2}\int d\br\, d\br'\, \rho_1(\br) V(\br-\br')\rho_1(\br') \pm \frac{1}{2}\int d\br\, d\br'\,  V(\br-\br')g(\br,\br')g(\br',\br).
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
\hat V = \frac{1}{2}\sum_{\sigma_1,\sigma_2}\int d\br_1 d\br_2\, V(\br_1-\br_2)\pdop_{\sigma_1}(\br_1)\pdop_{\sigma_2}(\br_2)\pop_{\sigma_2}(\br_2)\pop_{\sigma_1}(\br_1).
$$

The Hartree--Fock energy is then

$$
	\langle \hat V\rangle =\frac{1}{2}\int d\br\, d\br'\, \rho(\br) V(\br-\br')\rho(\br')- \frac{1}{2}\int d\br\, d\br'\,  V(\br-\br')\tr\left[g(\br,\br')g(\br',\br)\right].
  \label{2nd_quant_HFSpin}
$$

The Fock term can be rewritten in a more useful way using the identity

$$
\delta_{ab}\delta_{cd} = \frac{1}{2}\left[\boldsymbol{\sigma}_{a c}\cdot \boldsymbol{\sigma}_{d b} + \delta_{ac}\delta_{db}\right],
$$

which gives the Hartree--Fock energy

$$
\langle \hat V\rangle = \frac{1}{4}\int d\br\, d\br'\, \rho(\br) V(\br-\br')\rho(\br')- \int d\br\, d\br'\,  V(\br-\br')\mathbf{s}(\br_1)\cdot \mathbf{s}(\br_2).
$$

The second term favours ferromagnetism for repulsive interactions. The physical origin is the same as the Hund's rule coupling in atoms: fermions can avoid each other by

Case of bosons -- suggests fragmentations for strong repulsion?

Hartree--Fock as variational method

### Stoner Criterion for Ferromagnetism

Stoner theory (see Nazarov for discussion )
Discuss fermionic energies in HF approx


References
----------

{% bibliography --cited %}
