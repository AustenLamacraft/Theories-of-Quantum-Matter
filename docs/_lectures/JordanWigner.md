---
layout: page
title: Jordan-Wigner and Bosonization
author: Austen Lamacraft
chapter: 15
summary: Spin-1/2 XY model as a system of free fermions. Bosonization.
published: true
---

<p class="message">
Jordan and Wigner's 1927 paper introduced the canonical anti-commutation relations for fermions. Seeking an explicit representation of the operators, they established a mapping between fermion and spin-1/2 operators. Much later, it was realized that this mapping turns certain spin chain Hamiltonians into systems of free fermions, providing a rather elementary exact solution. In this lecture, we'll explore some of things we can do with this transformation, as well as an alternative way of looking at 1D systems called <strong> bosonization</strong>.
</p>


## Contents
{:.no_toc}

* Toc
{:toc}

---

## From Fermions to Spins (and Back)

It's not too hard to find a matrix representation of the bosonic creation and annihilation operators satisfying

$$
\left[\aop,\adop\right]=1.
\label{car}
$$

The action of $\adop$ on the occupation number eigenstate $\ket{n}$ is of course

$$
\adop\ket{n}=\sqrt{n}\ket{n+1}
$$

In this basis the creation operator therefore has the form

$$
\mathsf{A}_\text{B}^\dagger = \begin{pmatrix}
0 & 0 & 0 & 0 & \cdots & 0 \\
1 & 0 & 0 & 0 &\cdots & 0 \\
0 & \sqrt{2} & 0 & 0 & \cdots &\cdots\\
0  &0   &\sqrt{3}  &0  &\cdots  &\cdots  \\
0 & \cdots  & \cdots  &\cdots  & \cdots & \cdots  
\end{pmatrix},
$$

with $\mathsf{A}_\text{B}$ being given by the hermitian conjugate.

<p class="message">
Check that \eqref{car} is satisfied by this representation
</p>

If we have _two_ bosons, $\aop$, $\adop$, and $\bop$, $\bdop$, they act independently on their occupation number states, for example

$$
\adop \ket{n_a}_a\otimes\ket{n_b}_b = \left(\adop \ket{n_a}_a\right)\otimes\ket{n_b}_b = \sqrt{n_a}\ket{n_a}_a\otimes\ket{n_b}_b.
$$

Thus we represent

$$
\adop = \mathsf{A}_\text{B}^\dagger\otimes\mathbb{1},\qquad \bdop = \mathbb{1}\otimes\mathsf{A}_\text{B}^\dagger
$$

What about fermions? Here the occupancy of a state can only be zero or one, and it's not hard to show that the fundamental anticommutator

$$
\left\{\aop,\adop\right\}=1
$$

has the possible representation

$$
\begin{pmatrix}
0 & 0 \\
1 & 0
\end{pmatrix}.
$$

In fact, because of the symmetry between the empty and filled state, we could just as well take

$$
\mathsf{A}^\dagger_\text{F} = \begin{pmatrix}
0 & 1 \\
0 & 0
\end{pmatrix}.
$$

We will in fact stick with the latter choice. For two fermions, we have a problem. If we try

$$
\adop \overset{?}{=} \mathsf{A}_\text{F}^\dagger\otimes\mathbb{1},\qquad \bdop \overset{?}{=} \mathbb{1}\otimes\mathsf{A}_\text{F}^\dagger,
$$

then $\adop$ and $\bdop$ _commute_, rather than anticommute. At this point, let's switch to Pauli matrix notation: $\mathsf{A}^\dagger_\text{F}=\sigma^+$, $\mathsf{A}_\text{F}=\sigma^-$. Since different Pauli matrices anticommute, we also have

$$
\left\{\sigma^{\pm},\sigma^z\right\}=0.
$$

Thus one (somewhat asymmetrical) solution to our problem is to take

$$
\adop = \sigma^+\otimes\mathbb{1},\qquad \bdop = \sigma^z\otimes\sigma^+.
$$

It turns out that this trick generalizes. For three fermions, for example

$$
\begin{align}
\adop &= \sigma^+\otimes\mathbb{1}\otimes\mathbb{1},\\
\bdop &= \sigma^z\otimes\sigma^+\otimes\mathbb{1},\\
\cdop &= \sigma^z\otimes\sigma^z\otimes\sigma^+,\\
\end{align}
$$

and so on. For $N$ fermions we can write

$$
\adop_j = \overbrace{\sigma^z \otimes \cdots \otimes \sigma^z}^{j-1 \text{ times}}\otimes \sigma^+ \otimes \overbrace{\mathbb{1}\otimes \cdots \otimes\mathbb{1}}^{N-j \text{ times}}.
$$

Normally, we disinguish the different spin operators by an index rather than the place they occur in the tensor product, and write

$$
\adop_j = \left(\prod_{k=1}^{j-1}\sigma^z_k\right) \sigma^+_j.
$$

For applications, we are mostly interested in the _inverse_ transformation, expressing spins in terms of fermions. Notice that $\sigma^z_j$ is simply related to the number operator

$$
\sigma^z_j = 2\adop_j\aop_j-1 = 2n_j-1,
$$

Alternatively

$$
\sigma^z_j = -\exp(i\pi n_j),
$$

in which case

$$
\sigma^+_j = (-1)^{j-1}\exp\left(i\pi\sum_{k=1}^{j-1}n_k\right)\adop_j.
$$

That $(-1)^{j-1}$ at the front is a bit annoying. If we just define it away all the required algebraic relations are still preserved, leaving

$$
\sigma^+_j = \exp\left(i\pi\sum_{k=1}^{j-1}n_k\right)\adop_j.
\label{JW}
$$



### Solving the XY Model

The XY model is a particular case of the anisotropic spin chain (see [Problem Set 1]({{ site.baseurl }}/problems/Problems1/)) in which only the $x$ and $y$ components of the spins are coupled (hence the name)

$$
\begin{align}
H &= -J\sum_j\left[s^x_js^x_{j+1}+s^y_js^y_{j+1}\right]\\
&=-\frac{J}{2}\sum_j\left[\sigma^+_j\sigma^-_{j+1}+\sigma^-_j\sigma^+_{j+1}\right],
\end{align}
$$

In [Lecture 4]({{ site.baseurl }}/lectures/SpinModels/) we saw that the XY term can be interpreted as describing the hopping of magnons, or spin flips. Now, applying the mapping \eqref{JW}, we see that it can equally be interpreted in terms of fermion hopping

$$
\sigma_j^+\sigma_{j+1}^-=\adop_j e^{i\pi n_j}\aop_{j+1}=\adop_j\aop_{j+1}.
$$

The last equality follows from the fact that, in order to create a particle at site $j$ the site must first be empty, so that the exponential is just 1. In this way we see that the XY Hamiltonian describes free fermions

$$
H=-\frac{J}{2}\sum_j\left[\adop_j\aop_{j+1}+\adop_{j+1}\aop_{j}\right].
\label{FreeFermion}
$$

Note that it is _essential_ that we are in one dimension. The Jordan--Wigner mapping could of course be made in any dimension, but it depends on the particular choice of the labelling of the spins. In two dimensions, for example, it is not possible to choose that labelling so that all hopping terms $\sigma^+_i\sigma_j$ for nearest neighbours are expressed simply in terms of the fermions. Rather, there would be non-trivial exponential factors left over.

Diagonalizing a finite chain described by \eqref{FreeFermion} is of course straightforward if we choose periodic boundary conditions for the $\adop_j$, $\aop_j$. However, if the physical degrees of freedom are the spins, we should impose periodic boundary conditions on these operators instead. How does this affect the fermion system? We have

$$
\adop_N\aop_1 = e^{i\pi\sum_{j=1}^{N-1}n_j}\sigma^+_N\sigma^-_1 = - e^{i\pi N_a}\sigma^+_N\sigma^-_1
$$

where $N_a\equiv \sum_j n_j$. The second equality follows from the observation that, after moving a particle to the site $N$, there are certainly $N_a-1$ particles on the other sites.

Thus the fermions obey (anti-)periodic boundary conditions when $N_a$ is odd (even). As usual, we can solve the Hamiltonian with the aid of the plane wave states

$$
\begin{align}
\aop_j &= \frac{1}{\sqrt{N}}\sum_{k} e^{ik j} \eta_k\\
\adop_j &= \frac{1}{\sqrt{N}}\sum_{k} e^{-i k j} \eta^\dagger_k,
\end{align}
$$

where

$$
k = \begin{cases}
\frac{2\pi}{N}\times\text{ integer} & N_a \text{ odd}\\
\frac{2\pi}{N}\times\left(\text{ integer}+\frac{1}{2}\right) & N_a \text{ even}.
\end{cases}
$$

In either case, the Hamiltonian \eqref{FreeFermion} can be written

$$
H = \sum_k \epsilon(k)\eta^\dagger_k\eta_k,\qquad \epsilon(k)=-J\cos(k)
$$

Since $S^z_\text{tot}=2N_a-N$, the filling is determined by the total magnetization. In particular $S^z_\text{tot}=0$ corresponds to half filling.

We've actually met this before, albeit in a different guise. Recall that in [Lecture 1]({{ site.baseurl }}/lectures/ManyBodyWavefunctions/) we saw that the impenetrable Bose gas in one dimension can be understood in terms of noninteracting fermions. Spin-1/2 degrees of freedom are just a lattice version of hardcore fermions, and the Jordan--Wigner string serves to turn an antisymmetric fermionic wavefunction into a bosonic one. To formally recover the Bose gas without a lattice we would have to consider the limit of very low filling.

### Spin Correlations

Solving for the eigenstates of a model is one thing, but as we've seen before, it's quite another to be able to compute correlation functions. But let's start with something simple, and consider the correlation function of the $z$-components of the spins

$$
\begin{align}
\cC^{zz}(j-k)=\braket{0}{\sigma^z_j \sigma^z_k}{0}&=\braket{0}{(2n_j-1)(2n_k-1)}{0}\\
&=4\braket{0}{n_j n_k}{0}-4\braket{0}{n_j}{0}+1.
\end{align}
$$

Evidently, this is related to the density correlations in the Fermi gas. Its Fourier transform, defined by

$$
\cC^{zz}(j-k) = \frac{1}{N}\sum_q e^{iq(j-k)}\cC^{zz}_q,
$$

is

$$
\cC^{zz}_q = \frac{4}{N}\sum_k N_k(1-N_{k+q}),\quad q\neq 0
$$

where $N_k=\braket{0}{\eta^\dagger_k\eta_k}{0}$ is the occupation number of the ground state. We find

$$
\cC^{zz}_q = \begin{cases}
\frac{2\abs{q}}{\pi} & \abs{q}<2k_\text{F}\\
\frac{4N_a}{N} & \abs{q}>2k_\text{F},
\end{cases}
$$

where the Fermi momentum $k_\text{F}=\frac{\pi N_a}{N}$.

What about the _transverse_ spin correlations

$$
\cC^{+-}(j-k)=\braket{0}{\sigma^+_j\sigma^-_k}{0}?
$$

In the hardcore boson picture, the transverse correlations are just the one body density matrix, so the Fourier transform would tell us about the occupation numbers of the single particle plane wave states in the many body ground state.

Writing $\cC^{+-}(j-k)$ in terms of the fermions gives

$$
\begin{align}
\cC^{+-}(j-k)=\begin{cases}
\braket{0}{\adop_j\exp\left(i\pi \sum_{l=k}^{j-1}n_l\right)\aop_k}{0}&  j>k\\
\braket{0}{\adop_j\exp\left(i\pi \sum_{l=j}^{k-1}n_l\right)\aop_k}{0}&  j<k.
\end{cases}
\label{Transverse}
\end{align}
$$

We see that the computation of the transverse correlations in terms of fermions is fundamentally harder than the longitudinal correlations, as it the nonlocality of the Jordan--Wigner mapping comes into play.

It is possible to use Wick's theorem at this point to evaluate \eqref{Transverse} in terms of the (equal time) Green's function of the fermions. However, we'll pursue a different approach, based upon yet another way of representing the degrees of freedom.

## Bosonization

Unlike the Jordan--Wigner mapping, the representation that we turn to now is only _approximate_, and applies to the long wavelength contribution to correlation functions. Its value as a unifying framework for 1D quantum fluids more than makes up for this shortcoming, however.

The idea is very natural: instead of dealing with the particle operators $\adop_j$, $\aop_j$ we are going to deal with their _density_. Although this is a bilinear $n_j=\adop_j\aop_j$ in terms of particles, we will see that in one dimension the long wavelength components can be represented _linearly_ in terms of bosonic modes. This makes computation of the exponent in \eqref{Transverse} much more straightforward.

A key role is played by the __density-phase representation__

$$
\pop(x)=\sqrt{n(x)}e^{i\theta(x)}.
\label{DensityPhase}
$$

In this way we can represent the fundamental commutator of a boson field

$$
[\pop(x),\pdop(y)]=\delta(x-y)
$$

if we demand that

$$
\left[n(x),\theta(y)\right]=-i\delta(x-y).
$$

The density $n(x)$ and phase $\theta(x)$ are then seen to be continuum conjugate variables, like the displacement and momentum density in the elastic chain.

### Bosonizing Lieb--Liniger

Let's return to the 1D gas of bosons in the continuum, described by the Lieb--Liniger model.

$$
H_\text{LL} = \int dx\,\left[\frac{\partial_{x}\pdop \partial_{x}\pop}{2m}+\frac{g}{2}\pdop\pdop\pop\pop\right]
$$

We can express $H_\text{LL}$ in terms of the representation \eqref{DensityPhase} of the field operator

$$
	H_\text{LL} = \int dx \left[\frac{(\partial_{x} \theta) n(\partial_x\theta)}{2m}+\frac{(\partial_{x} \sqrt{n})^{2}}{2m}+\frac{g}{2}n^{2}\right].
$$

As in the elastic chain, small deviations from a state of uniform density can be described by a quadratic approximation. Writing $n=\rho_{0}+\rho$, the quadratic Hamiltonian is then

$$
	H_2 = \int dx \left[\frac{\rho_{0}\left(\partial_{x} \theta\right)^{2}}{2m}+\frac{(\partial_{x} \rho)^{2}}{8m\rho_{0}}+\frac{g}{2}\rho^{2}\right].
$$

As usual, we can solve this by passing to Fourier modes

$$
\begin{split}
	\rho(x) = \frac{1}{\sqrt{L}}\sum_p \rho_p e^{ipx}\\
	\theta(x) = \frac{1}{\sqrt{L}}\sum_p \theta_p e^{ipx}	 
\end{split}
$$

with $p = 2\pi n/L$, $\rho_p^\dagger=\rho_{-p}$, and $\theta_p^\dagger=\theta_{-p}$. In terms of these modes, $H_2$ takes form

$$
\begin{split}
	H_2 &= \int dx \left[\frac{\rho_{0}\left(\partial_{x} \theta\right)^{2}}{2m}+\frac{(\partial_{x} \rho)^{2}}{8m\rho_{0}}+\frac{g}{2}\rho^{2}\right]\\
	&=	\sum_{p\geq 0} \left[\frac{\rho_0 p^2}{m}|\theta_p|^2 + \left(g + \frac{p^2}{4m\rho_0}\right)|\rho_p|^2 \right]
\end{split}
$$

By comparision with the usual oscillator Hamiltonian, we can read off the __Bogoliubov__ spectrum of excitations

$$
\Omega_p^2 = \frac{p^2}{2m}\left(\frac{p^2}{2m} + 2g\rho_0 \right)\sim c^2 p^2,
$$

where $c^2 = \frac{g\rho_0}{m}$ is the speed of sound.

We are interested in the _long wavelength limit_, where $\Omega_p \sim c \abs{p}$. The amounts to ignoring the _quantum pressure_ term

$$
	\begin{split}
	H_2 &= \int dx \left[\frac{\rho_{0}\left(\partial_{x} \theta\right)^{2}}{2m}+\overbrace{\frac{(\partial_{x} \rho)^{2}}{8m\rho_{0}}}^{\text{Quantum pressure}}+\frac{g}{2}\rho^{2}\right]\\
	&\to H_\text{TL}= \frac{c}{2\pi}\int dx\left[K \left(\partial_x\theta\right)^2+\frac{1}{K}\left(\partial_x\phi\right)^2 \right] 		
	\end{split}
$$

where $\rho = \partial_x \phi/\pi$. This quadratic Hamiltonian is known as the __Tomonaga--Luttinger__ model, and

$$
K = \frac{\pi \rho_0}{mc}
$$

is the __Luttinger parameter__.

As usual we can introduce the oscillator variables

$$
		\begin{split}
	\rho(x)&=\sqrt{\frac{\rho_{0}}{2L}}\sum_{k\neq 0}e^{-\kappa_{k}}\left(\aop_{k}e^{ikx}+\text{h.c}\right)	\\
		\theta(x)&= \frac{i}{\sqrt{2\rho_{0}L}} \sum_{k\neq 0}e^{\kappa_{k}}\left(\aop_{k}e^{ikx}-\text{h.c}\right).
		\end{split}
$$

With the choice

$$
e^{-4\kappa_{k}}=\frac{k^{2}}{k^{2}/4+mg\rho_{0}},
$$

the quadratic Hamiltonian becomes

$$
H_{2}=\sum_{p} \Omega_{p}\bdop_{p}\bop_{p}
$$


### Boson density matrix

Now let's turn back to our original problem: the computation of the transverse spin correlation function \eqref{Transverse}, or equivalently, the boson density matrix for hardcore bosons. The simplest approximation is to take

$$
\pop(x)=\sqrt{n(x)}e^{i\theta(x)}\sim\sqrt{\rho_0}e^{i\theta(x)}.
$$

The justification for this is that inside a correlation function, the corrections will decay more quickly than the contribution from this part.

Evaluating the density matrix is now a straightforward calculation

$$
\begin{align}
\braket{0}{\pdop(x)\pop(x')}{0} &\sim \rho_0\braket{0}{e^{-i\theta(x)}e^{i\theta(x')}}{0}\\
&\sim \rho_0 \exp\left(-\frac{1}{2}\braket{0}{\left[\theta(x)-\theta(x')\right]^2}{0}\right)\\
&\sim \rho_0 \exp\left(-\frac{1}{4K}\int dk\frac{1-\cos(k[x-x'])}{\abs{k}}\right)\\
&\sim \rho_0 \exp\left(-\frac{1}{2K}\log\abs{x-x'}\right)
\end{align}
$$

How do we know the value of the Luttinger parameter $K$? In general, we don't! However, thanks to Jordan--Wigner, we know that there is a really a free fermion system underneath all this, which allows us to deduce, since $\rho_0=k_\text{F}/\pi$, that $K=1$. This gives us finally

$$
\braket{0}{\pdop(x)\pop(x')}{0}\sim \frac{\rho_0}{\abs{x-x'}^{1/2}}.
$$

Although the bosonization method is only able to obtain results about the _asymptotic_ behaviour of correlation functions, it has a generality far beyond the Jordan-Wigner approach. For example, when $J_z\neq 0$ in the Heisenberg model, the Jordan--Wigner transformation maps the spin chain to a system of _interacting_ fermions. Nevertheless, the Tomonaga--Luttinger Hamiltonian is still the correct long distance description, with the asymptotic behaviour of all correlation functions depending only on $K$.
