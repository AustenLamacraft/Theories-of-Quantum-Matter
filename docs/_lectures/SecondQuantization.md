---
layout: page
title: A is for Annihilation
author: Austen Lamacraft
chapter: 5
summary: Product states and occupation numbers. Creation and annihilation operators. The case of fermions. Representation of operators.
published: true
---

<p class="message">
We have seen that product states can be described in terms of their occupation numbers. We now introduce a language to describe many body states, and the operators that act on them, that is adapted to this description. This method of <strong> second quantization </strong> represents the beginning of the field theoretic description of many body systems.
</p>


## Contents
{:.no_toc}

* Toc
{:toc}

Reading: {% cite Baym:1969 %}, {% cite Nazarov:2013 %}.

---

## Creation and Annihilation Operators

When we discussed the elastic chain in [Lecture 3]({{ site.baseurl }}/lectures/ElasticChain/), we saw that the quanta of the normal modes of the chain could be thought of as bosons. The essence of second quantization is to turn this observation around, and formally introduce __creation and annihilation operators__ that add and remove bosons to a system. Subsequently, we identify these operators as components of a __quantum field__. Whether you think of the field as a physical entity -- with the bosons appearing upon quantization -- or as a mathematical device for representing a system of indistinguishable particles is a question of taste. The former point of view is more common in particle physics, the latter in condensed matter.

### Recap: Product States

Remember that in [Lecture 1]({{ site.baseurl }}/lectures/ManyBodyWavefunctions/) we saw that a normalized product state of $N$ bosons occupying orthonormal states $\varphi_{\alpha_n}(\br)$ $n=1,\ldots, N$ is

$$
\Psi^{\text{S}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}(\br_1,\ldots,\br_N)=\sqrt{\frac{1}{\prod_{\alpha}N_{\alpha}!}}\frac{1}{\sqrt{N!}}\sum_P\varphi_{\alpha_{1}}(\mathbf{r}_{P_1})\varphi_{\alpha_{2}}(\mathbf{r}_{P_2})\cdots\varphi_{\alpha_{N}}(\mathbf{r}_{P_N}),
\label{A_OrthoProd}
$$

where the sum is over all permutations of $N$ objects. The normalization factor involves the __occupation numbers__ $\{N_{\alpha}\}$ giving the number of particles in state $\alpha$.

More generally, let's consider the (unnormalized) symmetric product state formed from any set of single particle wavefunctions $\psi_n(\br)$, not necessarily orthonormal

$$
\Psi^{\text{S}}(\br_1,\ldots,\br_N) = \frac{1}{\sqrt{N!}}\sum_P\psi_1(\mathbf{r}_{P_1})\psi_{2}(\mathbf{r}_{P_2})\cdots\psi_{N}(\mathbf{r}_{P_N}).
\label{A_NProd}
$$

Let's compute the inner product with another symmetric state formed from wavefunctions $\phi_n(\br)$

$$
\Phi^{\text{S}}(\br_1,\ldots,\br_N) = \frac{1}{\sqrt{N!}}\sum_P\phi_1(\mathbf{r}_{P_1})\phi_{2}(\mathbf{r}_{P_2})\cdots\phi_{N}(\mathbf{r}_{P_N}).
$$

The result is

$$
\bra{\Psi}\Phi\rangle = \sum_P \bra{\psi_n}\phi_{P_n}\rangle = \perm \bra{\psi_m}\phi_{n}\rangle,
\label{A_perm}
$$

where we have introduced the [permanent](https://en.wikipedia.org/wiki/Permanent) of the matrix $\bra{\psi_m}\phi_{n}\rangle$, which is defined just like the determinant that we met in the case of fermions, but without the minus signs.

<p class="message">
Satisfy yourself that \eqref{A_perm} agrees with \eqref{A_OrthoProd} in the case of orthonormal single particle wavefunctions.
</p>


### Creation and Annihilation Operators

Our starting point is the __vacuum state__, which we'll denote by $\ket{\text{VAC}}$ to distinguish it from the ground state. The vacuum state corresponds to the state with no particles. Up to now, we have worked with many body wavefunctions having just as many arguments as we have particles, but since we are now considering a formalism in which there are states with different numbers of particles, we have to allow for that number to be zero.

The creation operator $\adop(\psi)$ creates a particle in the single particle state $\psi(\br)$ (the reason for introducing the adjoint operator as the creation operator will become clear: for the moment let's just take it that it's the adjoint of _something_.). This means we identify

$$
\psi(\br)\longleftrightarrow \adop(\psi)\ket{\text{VAC}}.
\label{A_1part}
$$

States that can be written $\adop(\psi)\ket{\text{VAC}}$ form the space of one particle states, which are orthogonal to the vacuum state

$$
\bra{\text{VAC}} \adop(\psi)\ket{\text{VAC}}=0.
$$

This means, taking the adjoint

$$
\aop(\psi)\ket{\text{VAC}}=0.
$$

Evidently, $\adop(\psi)$ must be linear in $\psi$

$$
\adop\left(c_1\psi_1+c_2\psi_2\right) = c_1\adop(\psi_1)+c_2\adop(\psi_2).
$$

Generalizing \eqref{A_1part}, we represent an $N$ particle product state \eqref{A_NProd} as

$$
\Psi^{\text{S}}(\br_1,\ldots,\br_N) \longleftrightarrow \adop(\psi_1)\cdots \adop(\psi_N)\ket{\text{VAC}}.
\label{A_NPart}
$$

For this to be a symmetric wavefunction, it's clear that we must have

$$
\left[\adop(\psi),\adop(\phi)\right]=0
\label{A_adcommute}
$$

for any states $\psi(\br)$ and $\phi(\br)$. Taking the adjoint gives

$$
\left[\aop(\psi),\aop(\phi)\right]=0
\label{A_acommute}
$$

This isn't the only requirement however: we need to make sure that the inner product comes out right. Evaluating the inner product between two one particle states on both sides of the corresponence \eqref{A_1part} gives

$$
\bra{\psi}\phi\rangle = \braket{\text{VAC}}{\aop(\psi)\adop(\phi)}{\text{VAC}}.
$$

To be nonzero $\aop(\psi)\adop(\phi)\ket{\text{VAC}}$ must be proportional to the vacuum state, which means $\aop(\psi)$ removes a particle from the system: it is an annihilation operator. To get the right value for the inner product, we impose

$$
\left[\aop(\psi),\adop(\phi)\right] = \inner{\psi}{\phi}.
\label{A_ada}
$$

<p class="message">
Show that this also reproduces \eqref{A_perm}.
</p>

\eqref{A_adcommute}, \eqref{A_acommute} and \eqref{A_ada} constitute the bosonic __canonical commutation relations__. Via \eqref{A_ada}, this representation inherits the properties of the single particle Hilbert space.

### Choosing a Basis

By choosing a basis for the single particle states, we choose a basis for the creation and annihilation operators. Denote an orthonormal basis by $\varphi_\alpha(\br)$, with the corresponding creation and annihilation operators

$$
\adop(\varphi_\alpha)\equiv \adop_\alpha,\quad \aop(\varphi_\alpha)\equiv \aop_\alpha.
\label{A_CCRBasis}
$$

Then we have

$$
\begin{align}
\left[\aop_\alpha,\aop_\beta\right]=0,\quad \left[\adop_\alpha,\adop_\beta\right]=0,\quad \left[\aop_\alpha,\adop_\beta\right] = \delta_{\alpha\beta}.
\end{align}
$$

The same relations describe the ladder operators of a set of independent harmonic oscillators, revealing a deep connection between these two systems. The state $\Psi^{\text{S}}\_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}$ of \eqref{A_OrthoProd} -- a normalized state with $N_\alpha$ particles in state $\alpha$ -- may be written

$$
\Psi^{\text{S}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}(\br_1,\ldots,\br_N) \longleftrightarrow\ket{\mathbf{N}} \equiv \prod_\alpha \frac{\left(\adop_\alpha\right)^{N_\alpha}}{\sqrt{N_\alpha!}}\ket{\text{VAC}}
$$

The combination $\Nop_{\alpha}\equiv \adop_{\alpha}\aop_{\alpha}$ is called the __number operator__ for state $\alpha$ for obvious reasons

$$
	\label{2nd_quant_NOp}
	\Nop_{\alpha}\ket{\mathbf{N}}=N_{\alpha}\ket{\mathbf{N}}.
$$

From \eqref{A_CCRBasis} it follows that

$$
\begin{align}
	\left[\aop_{\alpha},\Nop_{\alpha}\right]&=\aop_{\alpha}\nonumber\\
	\left[\adop_{\alpha},\Nop_{\alpha}\right]&=-\adop_{\alpha}.
  \label{2nd_quant_NaComm}
\end{align}
$$

You can think of the first of these as `count then destroy minus destroy then count', for example.

Suppose we want to move to a different basis of single particle states $\{\ket{\tilde{\varphi}_{\alpha}}\}$, corresponding to a unitary transformation

$$
	\label{2nd_quant_BasisChange}
	\ket{\tilde{\varphi}_{\alpha}}=\sum_{\beta} \inner{\varphi_{\beta}}{\tilde{\varphi}_{\alpha}}\ket{\varphi_{\beta}}.
$$

Using our correspondence, the one particle states with the wavefunctions $\varphi_{\alpha}(\br)$ are just $\adop_{\alpha}\ket{\text{VAC}}$. So we see that the above basis transformation gives a new set of creation operators

$$
	\label{2nd_quant_BasisChangeCreation}
	\tilde{\adop_{\alpha}}\equiv\sum_{\beta} \inner{\varphi_{\beta}}{\tilde{\varphi}_{\alpha}}\adop_{\beta}.
$$

Often we will work in the basis of position eigenstates $\{\ket{\br}\}$. In this case the matrix elements of the unitary transformation are $\inner{\varphi_{\beta}}{\br}=\varphi^{*}_{\beta}(\br)$, just the complex conjugate of the wavefunction. Denoting the corresponding creation operator as $\pdop(\br)$, \eqref{2nd_quant_BasisChangeCreation} becomes

$$
	\label{2nd_quant_PsiDDef}
	\pdop(\br)\equiv\sum_{\beta}  \varphi^{*}_{\beta}(\br)\adop_{\beta}.
$$

Now we can see why we chose to work with the annihilation operator rather than the creation operator. The conjugate of \eqref{2nd_quant_PsiDDef} is

$$
	\label{2nd_quant_PsiDef}
	\pop(\br)\equiv\sum_{\beta}  \varphi_{\beta}(\br)\aop_{\beta},
$$

and involves the wavefunctions $\varphi_{\beta}(\br)$, rather than their conjugates. The relations satisfied by these operators are

$$
\begin{gather}
	\left[\pop(\br_1),\pdop(\br_2)\right]=\delta(\br_1-\br_2)\nonumber\\
	\left[\pop(\br_1),\pop(\br_2)\right]=\left[\pdop(\br_1),\pdop(\br_2)\right]=0.
	\label{2nd_quant_PositionRelations}
\end{gather}
$$

These operator-valued functions are called __quantum fields__. By introducing them, we have freed ourselves from many body wavefunctions. One should bear in mind that this is only a different _language_ for talking about the same system: sometimes one language is better suited to the problem at hand; sometimes another.

<p class="message">
If a state $\ket{\Psi}$ has wavefunction $\Psi(x_1,\ldots, x_N)$, what is the wavefunction of the state $\pop(X)\ket{\Psi}$?
</p>

As an example, let our original basis be the eigenbasis of the free particle Hamiltonian $H=\frac{\bp^{2}}{2m}$ with periodic boundary conditions

$$
\begin{align}
	\label{2nd_quant_FreeParticleStates}
	\ket{\bk}=\frac{\exp(i\bk \cdot \br)}{\sqrt{V}}, \quad \bk=2\pi\left(\frac{n_{x}}{L_{x}},\frac{n_{y}}{L_{y}},\frac{n_{z}}{L_{z}}\right),\quad n_{x,y,z}\text{ integer},
\end{align}
$$

with $V=L_{x}L_{y}L_{z}$. The matrix elements of the transformation between this original basis and the position basis $\{\ket{\br}\}$ are $\bra{\bk}\br\rangle=\exp(-i\bk \cdot \br)/\sqrt{V}$, so we have

$$
	\label{2nd_quant_PositionAnnihilation}
	\pdop(\br)\equiv\frac{1}{\sqrt{V}}\sum_{\bk} \exp(-i\bk\cdot\br)\adop_{\bk},
$$

and similarly

$$
	\label{2nd_quant_PositionCreation}
	\pop(\br)\equiv\frac{1}{\sqrt{V}}\sum_{\bk} \exp(i\bk\cdot\br)\aop_{\bk}.
$$


<p class="message">
What is the wavefunction of the two-particle state

$$
\sum_\bk c_k \adop_\bk\adop_{-\bk}\ket{\text{VAC}}?
$$
</p>

### The Case of Fermions

We want a similar formalism for fermions, which is a bit trickier on account of those minus signs. We seek a representation of the product state

$$
\Psi^{\text{P}}(\br_1,\ldots,\br_N) = \frac{1}{\sqrt{N!}}\sum_P (-1)^P\psi_1(\mathbf{r}_{P_1})\psi_{2}(\mathbf{r}_{P_2})\cdots\psi_{N}(\mathbf{r}_{P_N}).
\label{A_NProdAnti}
$$

where $P$ is the signature of the permutation. Note that the overall sign is fixed here by the labelling of the states $\psi_j$. If we want to make the identification

$$
\Psi^{\text{A}}(\br_1,\ldots,\br_N) \longleftrightarrow \adop(\psi_1)\cdots \adop(\psi_N)\ket{\text{VAC}},
\label{A_NPartAnti}
$$

Then antisymmetry dictates

$$
\left\{\adop(\psi),\adop(\phi)\right\}=0,
\label{A_adanticommute}
$$

for any states $\psi(\br)$ and $\phi(\br)$, where $\\{A,B\\}\equiv AB+BA$ is called the __anticommutator__. Similarly

$$
\left\{\aop(\psi),\aop(\phi)\right\}=0.
\label{A_aanticommute}
$$

The form of $\left\\{\aop(\psi),\adop(\phi)\right\\}=0$ can be deduced from the inner product between product states

$$
\bra{\Psi}\Phi\rangle = \sum_P (-1)^P\bra{\psi_n}\phi_{P_n}\rangle = \det \bra{\psi_m}\phi_{n}\rangle,
\label{A_det}
$$

which can be obtained using the RHS of \eqref{A_NPartAnti} if we demand

$$
\left\{\aop(\psi),\adop(\phi)\right\} = \inner{\psi}{\phi}.
\label{A_adaanti}
$$

<p class="message">
Check this.
</p>

Introducing field operators in the position basis as before leads to a system of operators satisfying the anticommutation relations

$$
\begin{gather}
	\left\{\pop(\br_1),\pdop(\br_2)\right\}=\delta(\br_1-\br_2)\nonumber\\
	\left\{\pop(\br_1),\pop(\br_2)\right\}=\left\{\pdop(\br_1),\pdop(\br_2)\right\}=0.
	\label{2nd_quant_PositionRelationsAnti}
\end{gather}
$$


## Discussion: Explicit Form of Operators

<p class="message">
Think about the form that the operators $\aop_\alpha$, $\adop_\alpha$ take in the basis of product states. Start with one state $\varphi_\alpha$. What's the matrix form of $\adop_\alpha$ in terms of states $\ket{N_\alpha}$? Now consider two states. Can you see how the commutation and anticommutation relations can be satisfied?
</p>

## Representation of Operators

### Single Particle Operators

Suppose we now have some operator $A$ that acts on the single particle states. We denote the action on $N$ particle states as $\hat A$

$$
\hat A = \sum_{j=1}^N A_j,
$$

where the subscript denotes that the operator acts on the position label $\br_j$ of the $j^\text{th}$ particle. The example that we have met many times all ready is the Hamiltonian for noninteracting particles

$$
\hat H = \sum_{j=1}^N H_j = \sum_{j=1}^N \left[-\frac{\nabla_j^2}{2m}+V(\br_j)\right].
\label{A_H1}
$$

Operators of this type are known as __single particle operators__. We want to use our creation and annihilation operators to represent these operators. First, we note that the action of the operator $A$ on one of the basis states $\ket{\varphi_\alpha}$ can be written in terms of the matrix elements $A_{\alpha\beta}=\braket{\varphi_\alpha}{A}{\varphi_\beta}$ as

$$
A\ket{\varphi_\alpha} = \sum_{\beta} \ket{\varphi_\beta}\braket{\varphi_\beta}{A}{\varphi_\alpha} = \sum_\beta A_{\beta\alpha}\ket{\varphi_\beta}
$$

Therefore, the action of $\hat A$ on the product state $\ket{\Psi^{\text{S}}\_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}}$ is

$$
\hat A \ket{\Psi^{\text{S}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}} = \sum_\beta \left[A_{\beta\alpha_1}\ket{\Psi^{\text{S}}_{\beta\alpha_{2}\cdots\alpha_{N}}} +A_{\beta\alpha_2}\ket{\Psi^{\text{S}}_{\alpha_1\beta\cdots\alpha_{N}}}+\cdots A_{\beta\alpha_N}\ket{\Psi^{\text{S}}_{\alpha_1\alpha_{2}\cdots\beta}}\right]
\label{A_1OpAct}
$$

Now we argue that the same job is done by

$$
\hat A = \sum_{\alpha\beta}A_{\alpha\beta}\adop_\alpha\aop_\beta
$$

acting on the state $\ket{\mathbf{N}}$. Indeed, we have

$$
\left[\adop_\alpha\aop_\beta,\adop_\gamma\right]=\adop_\alpha\delta_{\beta\gamma}
\label{A_bilin}
$$

By commuting $\adop_\alpha \aop_\beta$ though each of the creation operators in

$$
\ket{\mathbf{N}} \equiv \prod_\alpha \frac{\left(\adop_\alpha\right)^{N_\alpha}}{\sqrt{N_\alpha!}}\ket{\text{VAC}},
$$

we reproduce the action \eqref{A_1OpAct}. As a simple example,

$$
\begin{align}
	\label{2nd_quant_}
	\mathop{\hat A}\adop_{\beta}\ket{\text{VAC}}&=\left(\left[\mathop{\hat A},\adop_{\beta}\right]+\adop_{\beta}\mathop{\hat A}\right)\ket{\text{VAC}}\nonumber\\
							&=\sum_{\alpha} A_{\alpha \beta} \adop_{\alpha}\ket{\text{VAC}}.
\end{align}
$$

The second quantized form of $\hat A$ allows us to find the matrix element between product states

$$
\braket{\mathbf{N}}{\hat A}{\mathbf{N'}} = \sum_{\alpha\beta} A_{\alpha\beta} \sqrt{N_\alpha N'_\beta}.
\label{A_Aab}
$$

<p class="message">
This formula is not so easy to work out in the first quantized representation. Try it!
</p>

We worked this out for the bosonic case. However, you can check that \eqref{A_bilin}, the basic relation that makes it all work, is also valid for fermions (as a commutation relation, note!). So $\hat A$ has the same form for fermions.

Notice that $\mathop{\hat A}$ \emph{looks} formally like the expectation value of $\mathop{A}$ in a single particle state $\sum_{\alpha}a_{\alpha}\ket{\varphi_{\alpha}}$. The difference, of course, is that the $a_{\alpha}$ in $\mathop{\hat A}$ are operators, so that the order is important, while those in the preceding expression are amplitudes. The replacement of amplitudes, or wavefunctions, by operators is the origin of the rather clumsy name __second quantization__, which is traditionally introduced with the caveat that what we are doing is not in any way 'more quantum' than before.

To repeat the above prescription for emphasis: _A one particle operator $\mathop{\hat A}$ has a second quantized representation formally identical to the expectation value of its single particle counterpart $\mathop{A}$_.

This probably all looks a bit abstract, so let's turn to a one particle operator that we have already met, namely the noninteracting Hamiltonian in \eqref{A_H1}. According to the above prescription, this should have the second quantized form

$$
	\label{2nd_quant_H2ndQ}
	\mathop{\hat H} \equiv \sum_{\alpha,\beta}\braket{\varphi_{\alpha}}{\mathop{H}}{\varphi_{\beta}} \adop_{\alpha}\aop_{\beta},
$$

where $H$ is the single particle Hamiltonian $H=-\frac{1}{2m}\nabla_{i}^{2}+V(\mathbf{r_{i}})$. This takes on a very simple form if the basis $\ket{\varphi_{\alpha}}$ is just the eigenbasis of this Hamiltonian, in which case $\braket{\varphi_{\alpha}}{\mathop{H}}{\varphi_{\beta}}=E_{\alpha}\delta_{\alpha \beta}$ and

$$
\begin{align}
	\label{2nd_quant_Nrep}
	\mathop{\hat H} \equiv \sum_{\alpha} E_{\alpha} \adop_{\alpha}\aop_{\alpha}=\sum_{\alpha} E_{\alpha} \Nop_{\alpha}.
\end{align}
$$

Evidently this is correct: the eigenstates of this operator are just the $N$ particle basis states $\ket{\Psi^{S/A}\_{\alpha_{1}\alpha_{2}\cdots \alpha_{N}}}$, with eigenvalues $\sum_\alpha N_\alpha E_\alpha$.

Alternatively, we can look at things in the position basis. By recalling how the expectation value of the Hamiltonian looks in this basis, we come up with

$$
\begin{align}
	\mathop{\hat H}&=\int d\br \left[-\frac{1}{2m}\pdop(\br)\nabla^{2}\pop(\br)+V(\br)\pdop(\br)\pop(\br)\right]\nonumber\\
					&=\int d\br \left[\frac{1}{2m}\nabla\pdop(\br)\cdot\nabla\pop(\br)+V(\br)\pdop(\br)\pop(\br)\right],
	\label{2nd_quant_HPos}
\end{align}
$$

where in the second line we have integrated by parts, assuming that boundary terms at infinity vanish. The equality of \eqref{2nd_quant_HPos} and \eqref{2nd_quant_Nrep} may be seen by using \eqref{2nd_quant_PsiDef}.

The Heisenberg equation of motion corresponding to \eqref{2nd_quant_HPos} is

$$
\begin{equation}
	\label{2nd_quant_HeomFree}
	\begin{split}
	i\partial_{t}\pop(\br,t) &= -\left[\mathop{\hat H},\pop(\br,t)\right]\\
	&= -\frac{1}{2m}\nabla^{2}\pop(\br,t)+V(\br)\pop(\br,t),
	\end{split}
\end{equation}
$$

which is just the time dependent Schr\"odinger equation!

As a second example, consider the particle density. This is not something that one encounters very often in few particle quantum mechanics, but is obviously an observable of interest in a extended system of many particles. The single particle operator for the density at $\mathbf{x}$ is

$$
	\label{2nd_quant_spDens}
	\rho(\mathbf{x})\equiv\delta(\mathbf{x}-\br).
$$

This may look like a rather strange definition, but its expectation value on a single particle state $\varphi(\br)$ is just $\rho(\mathbf{x})=\abs{\varphi(\mathbf{x})}^{2}$, which is just the probability to find the particle at $\mathbf{x}$. Following our prescription, the second quantized form of the operator is then

$$
	\label{2nd_quant_2ndQDens}
	\hat\rho(\mathbf{x})\equiv\pdop(\mathbf{x})\pop(\mathbf{x}).
$$

As a check, integrating over position should give the total number of particles

$$
	\label{2nd_quant_DensIntegral}
	\hat N=\int d\mathbf{x}\, \pdop(\mathbf{x})\pop(\mathbf{x})=\sum_{\alpha} \adop_{\alpha}\aop_{a}=\sum_{\alpha}\Nop_{\alpha},
$$

as it does! Another useful thing to know is the expectation value of the density on a basis state $\ket{N_{0},N_{1}\ldots}$

$$
	\label{2nd_quant_DensityExp}
	\braket{N_{0},N_{1}\ldots}{ \hat\rho(\br)}{N_{0},N_{1}\ldots} = \sum_{\alpha} N_{\alpha}\left|\varphi_{\alpha}(\br)\right|^{2}.
$$

which is most easily proved by substituting the representation \eqref{2nd_quant_PsiDef}. This seems like a very reasonable generalization of the single particle result: the density is given by sum of the probability densities in each of the constituent single particle state, weighted by the occupancy of the state. Note that the symmetry of the states played no role here.

As a final example of a one particle operator, the particle current has the second quantized form

$$
	\label{2nd_quant_current}
	\hat{\mathbf{j}}(\br)=-i\frac{1}{2m}\left[\pdop(\br)\left(\nabla\pop(\br)\right)-\left(\nabla\pdop(\br)\right)\pop(\br)\right].
$$

Often we consider the Fourier components of the density or current

$$
\begin{align}
	\label{2nd_quant_FourierComp}
	\hat\rho_{\bq}\equiv\int d\br\, \hat\rho(\br)e^{-i\bq \cdot \br}=\sum_{\bk} \adop_{\bk-\bq/2}\aop_{\bk+\bq/2}\nonumber\\
	\hat{\mathbf{j}}_{\bq}\equiv\int d\br\, \hat{\mathbf{j}}(\br)e^{-i\bq \cdot \br}=\sum_{\bk} \frac{\bk}{m}\adop_{\bk-\bq/2}\aop_{\bk+\bq/2}.
\end{align}
$$

The $\bq=0$ modes are just the total particle number and $\frac{1}{m}$ times the total momentum, respectively.

In [Lecture 1]({{ site.baseurl }}/lectures/ManyBodyWavefunctions/) we introduced the __single particle density matrix__

$$
	g(\br,\br') \equiv N \int d\br_{2}\cdots d\br_{N}\,\Psi^{*}(\br,\br_{2},\ldots,\br_{N})\Psi(\br',\br_{2},\ldots,\br_{N}).
$$

This can be written in terms of our field operators

$$
	\label{2nd_quant_SPDensity}
	g(\br,\br')= \braket{\Psi}{\pdop(\br)\pop(\br)}{\Psi}
$$


Notice that $g(\br,\br)=\braket{\Psi}{\hat\rho(\br)}{\Psi}$. A slight generalization of the above calculation for the density gives for the state $\ket{\mathbf{N}}$

$$
	\label{2nd_quant_SPFock}
	g(\br,\br') = \sum_{\alpha} N_{\alpha}\varphi_{\alpha}^{*}(\br)\varphi^{}_{\alpha}(\br').
$$

Let's evaluate this for the ground state of noninteracting Fermi gas. Recall that in this case $N_{\bk}=1$ for $\abs{\bk}<k_{F}$, and $0$ otherwise. Thus we have

$$
\begin{align}
	\label{2nd_quant_FermiDensityMatrix}
	g(\br,\br')=\frac{1}{V}\sum_{|\bk|<k_{F}} e^{i\bk\cdot(\br'-\br)}&=\int_{|\bk|<k_{F}} \frac{d\bk}{(2\pi)^{3}}\,e^{i\bk\cdot(\br'-\br)}\nonumber\\
	&=\frac{k_{F}^{3}}{2\pi^{2}}\left[\frac{\sin\left(k_{F}|\br'-\br|\right)}{(k_{F}|\br'-\br|)^{3}}-\frac{\cos\left(k_{F}|\br'-\br|\right)}{(k_{F}|\br'-\br|)^{2}}\right].
\end{align}
$$

Note that $g(\br,\br)=\frac{k_{F}^{3}}{6\pi^{2}}=\bar\rho$, as it should. Also, $g(\br,\br')\to 0$ as $\abs{\br-\br'}\to\infty$.

<a name="FermiDensity"></a>
![]({{ site.baseurl }}/assets/FermiDensityMatrixCut.png)
_Single particle density matrix for the Fermi gas._

### Two Particle Operators

A __two particle operator__ acts pairwise on the particles

$$
\hat B = \sum_{j<k} B_{jk}.
$$

Its action on a two particle product state $\ket{\varphi\_{\alpha}}\_1\ket{\varphi\_{\beta}}\_2$ can, as in the single particle case, be expressed in terms of the matrix elements

$$
B_{\alpha\beta,\gamma\delta} = \bra{\varphi_\alpha}_1\bra{\varphi_\beta}_2 B_{12} \ket{\varphi_\gamma}_1\ket{\varphi_\delta}_2.
$$

By a similar argument to that used in the case of one particle operators, we arrive at the second quantized representation

$$
\hat B = \frac{1}{2}\sum_{\alpha\beta\gamma\delta} B_{\alpha\beta,\gamma\delta}\adop_\alpha\adop_\beta\aop_\delta\aop_\gamma.
$$

(Note the order, which is important for fermions!) The analog of the formula \eqref{A_Aab} for the matrix elements of a two particle operator between two product states is

$$
\braket{\mathbf{N}}{\hat B}{\mathbf{N'}} = \sum_{\alpha\beta\gamma\delta} B_{\alpha\beta,\gamma\delta} \sqrt{N_\alpha N_\beta N'_\gamma N'_\delta}.
\label{A_Babcd}
$$


The most important two particle operator that we encounter is that describing interactions between pairs of particles, usually of the the form

$$
\hat V = \sum_{j<k} V(\br_j-\br_k).
$$

Expressing this operator in the position basis gives

$$
\hat V = \frac{1}{2}\int d\br_1 d\br_2\, V(\br_1-\br_2)\pdop(\br_1)\pdop(\br_2)\pop(\br_2)\pop(\br_1).
$$

Remembering that $\rho(\br) = \pdop(\br)\pop(\br)$, this is _almost_ the same as

$$
\hat V = \frac{1}{2}\int d\br_1 d\br_2\, V(\br_1-\br_2)\rho(\br_1)\rho(\br_2).
\label{A_VNotNormal}
$$

The difference lies in the order of the operators, which prevents a particle from interacting with itself.

<p class="message">
Check that \eqref{A_VNotNormal} has a nonzero expectation value in a 1 particle state.
</p>

As an example, let's write the Lieb--Liniger Hamiltonian of [Lecture 2]({{ site.baseurl }}/lectures/LiebLinigerModel/) in our new formalism.

$$
H = \int dx \left[\frac{1}{2}\partial_x\pdop(x)\partial_x\pop(x) + \frac{c}{2}\pdop(x)\pdop(x)\pop(x)\pop(x)\right],
$$

where $\pop(x)$, $\pdop(x)$ satisfy the canonical bosonic commutation relations \eqref{2nd_quant_PositionRelations}.

We've succeeded in translating an interacting many body Hamiltonian into a quantum field theory. But we shouldn't feel too smug. As I said earlier, this is a change of _language_, and its usefulness is not guaranteed. The same warning applies to alternative formulations of the same problem: as a functional integral, for example. In the case of the Lieb--Liniger model, the exact solution was best presented in the first quantized, many body wavefunction framework. Ditto for the Laughlin states of the fractional quantum Hall effect. However, in approximate treatments of many body problems that we _can't_ solve exactly, like the Bose gas in higher dimensions that we'll discuss in [Lecture 8]({{ site.baseurl }}/lectures/BoseGas/), the second quantized framework is often a good starting point.

References
----------

{% bibliography --cited %}
