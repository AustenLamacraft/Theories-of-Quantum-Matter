---
layout: page
title: Spin Models
author: Austen Lamacraft
chapter: 4
summary: Heisenberg model. Heisenberg chain. Magnons. Antiferromagnets. Symmetry breaking. Spin wave theory.

---

<p class="message">
In this lecture we introduce a simple quantum mechanical model of magnetism consisting of a lattice of coupled spins. As in the elastic chain, we identify the elementary excitations and their interaction.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}

Reading: {% cite Auerbach:2012 %}.

---

## The Heisenberg Model

You have probably encountered the [Ising model](https://en.wikipedia.org/wiki/Ising_model) of magnetism, defined by the Hamiltonian

$$
H = J\sum_{\langle j\,k\rangle} \sigma_j \sigma_k,
\label{spin_ising}
$$

where the 'spin' variables $\sigma_j$ take the values $\pm 1$. The notation ${\langle j\,k\rangle}$ indicates that the sum is over all nearest neighbour pairs on some (e.g. cubic) lattice. A coupling $J<0$ between spins means that aligned spins have a lower energy than anti-aligned spins, favouring _ferromagnetism_.

While there's a lot of mileage in the Ising model as a statistical mechanical model -- it can describe the ferromagnetic phase transition -- it has some shortcomings as a quantum Hamiltonian. Identifying the variable $\sigma_j$ with a component of a spin-1/2 along some axis $\sigma_j = 2s^z_j$, we see that there are no non-commuting variables in the Hamiltonian, and therefore no dynamics to the system of spins. The eigenstates are simply product states of $s_j^z$ eigenstates.

A more realistic model from this point of view is the __Heisenberg model__ describing a system of spin-1/2s

$$
H = J \sum_{\langle j\,k\rangle} \mathbf{s}_j \cdot \mathbf{s}_k.
\label{spin_Hberg}
$$

Although it is not possible to solve this model in general, we will see that it captures many of the dynamical features (e.g. spin waves) of real magnetic materials.

## The Heisenberg Ferromagnetic Chain

### Ground State

Let's try and guess some eigenstates. For simplicity we'll begin with the 1D case, where the spins are arranged in a chain

$$
H = J \sum_{j=1}^N \mathbf{s}_j \cdot \mathbf{s}_{j+1},
$$

and as usual we take $\mathbf{s}\_j=\mathbf{s}_{j+N}$ (periodic boundary conditions). Such a system is called a __spin chain__. Surprisingly enough, crystals do exist in which magnetic atoms are arranged in this way, with only weak coupling between neighbouring chains. So models of this type are a useful description, at least in some energy window, of real materials.

Since \eqref{spin_Hberg} is supposed to be a model for a magnet, we might try the state with all spins aligned

$$
\ket{\text{FM}} \equiv \prod_{j=1}^N \ket{+}_j,
$$

where for brevity we write $\ket{+}_j = \ket{s^z=+1/2}_j$. It's not hard to check that this is an eigenstate with energy $E_0\equiv JN/4$. Furthermore it's an eigenstate of $S^z$ and $\mathbf{S}^2$, where $\mathbf{S}$ is the total spin

$$
\mathbf{S} = \sum_{j=1}^N \mathbf{s}_j.
$$

The eigenvalues are $S^z = N/2$ and $\mathbf{S}^2 = \frac{N}{2}\left(\frac{N}{2}+1\right)$. The rotational invariance of the Hamiltonian implies that the state $\ket{\text{FM}}$ should be a member of a multiplet of $N+1$ degenerate eigenstates related by rotations. These states can be generated by acting on $\ket{\text{FM}}$ with $S^-=S^x-iS^y$. The first is

$$
S^-\ket{\text{FM}} = \sum_{j=1}^N s^-_j\ket{\text{FM}} = \frac{1}{2}\sum_{j=1}^N \ket{+}_1\ket{+}_2\cdots \ket{+}_{j-1} \ket{-}_j\ket{+}_{j+1}\cdots \ket{+}_N.
\label{spin_Lowered}
$$

You should be able to verify that $S^z = N/2-1$, but that $\mathbf{S}^2$ and $H$ are unchanged. While all eigenstates can be labelled by these eigenvalues, this doesn't fix the state uniquely (compare the numbers involved).

\eqref{spin_Lowered} is a superposition of terms with one spin flipped. If we continue the process to explore the whole multiplet, we will at each state end up with a constant amplitude superposition of all states with two spins flipped (for $S^z=N/2-2$), three flipped (for $S^z=N/2-3$) and so on.

Are these the ground states for $J<0$? One way to convince ourselves is to write the Hamiltonian as

$$
\begin{multline}
H = J \sum_{j=1}^N \mathbf{s}_j \cdot\mathbf{s}_{j+1} = J \sum_{j=1}^N \left[(\mathbf{s}_j+\mathbf{s}_{j+1})^2-\mathbf{s}_j^2 - \mathbf{s}_{j+1}^2\right]\\
= -\frac{3JN}{2} + J \sum_{j=1}^N (\mathbf{s}_j+\mathbf{s}_{j+1})^2.
\end{multline}
$$

It's then clear that the last term is minimized if every neighbouring pair of spins has total spin $1$, as they do for $\ket{\text{FM}}$. Are there other states that satisfy this condition?

### First Excited States

What about just one of the states in the superposition \eqref{spin_Lowered}?

$$
\ket{j} = \ket{+}_1\ket{+}_2\cdots \ket{+}_{j-1} \ket{-}_j\ket{+}_{j+1}\cdots \ket{+}_N.
$$

Is this an eigenstate? Let's try acting on this state with the Hamiltonian. It's convenient to write the terms in the Heisenberg Hamiltonian in terms of raising and lowering operators

$$
 \mathbf{s}_j \cdot \mathbf{s}_{j+1} = s^z_js^z_{j+1} + \frac{1}{2}\left(s^+_js^-_{j+1} +s^-_js^+_{j+1}\right),
$$

where

$$
s^+ = \begin{pmatrix}
0 & 1 \\
0 & 0
\end{pmatrix},\qquad s^- = \begin{pmatrix}
0 & 0 \\
1 & 0
\end{pmatrix}
$$

Now note that

$$
P_{j,j+1}\equiv s^+_j s^-_{j+1} +s^-_js^+_{j+1}
$$

has the effect of _exchanging_ the labels on neigbouring spins, for examples

$$
P_{j,j+1}\ket{+}_j\ket{-}_{j+1} = \ket{-}_j\ket{+}_{j+1}.
$$

It then follows that the action of $H$ on the state $\ket{j}$ is

$$
H\ket{j} = (1-N/4) \ket{j} - \frac{1}{2}\left(\ket{j-1}+\ket{j+1}\right).
$$

(I've set $J=-1$ as it's the only scale in the problem, so no harm done.) Acting with $H$ therefore leaves us within the subspace spanned by the states $\ket{j}$. It had to, of course: this is the subspace with $S_z=N/2-1$. We can think of down spins as being like particles, with the Hamiltonian conserving their number.

We can easily diagonalize $H$ in this space by noting that it corresponds to a circulant matrix. As we saw in [Lecture 3]({{ site.baseurl }}/lectures/ElasticChain/), the eigenstates are plane waves

$$
\ket{\eta} = \frac{1}{\sqrt{N}}\sum_{j=1}^N e^{i\eta j}\ket{j},
\label{spin_wave}
$$

with $\eta = \frac{2\pi n}{N}$, $n = -(N-1)/2,\ldots, (N-1)/2$. The eigenvalues are $E = E_0 + \omega(\eta)$, with

$$
\omega(\eta) = 2\sin^2\eta/2.
\label{spin_dispersion}
$$

Note that the dispersion relation is periodic, as in the case of the elastic chain, but is now quadratic, rather than linear, at small $\eta$. $\eta=0$ corresponds to the state \eqref{spin_Lowered}, and indeed the energy $\omega(0)=0$ in that case.

> There is a general principle at work here: excitations that correspond at long wavelengths to symmetry operations have to have __gapless__ dispersion relations. In field theory this follows from a general result called __Goldstone's theorem__.

If we are thinking of the down spin as a particle, then the eigenstates \eqref{spin_wave} are like plane wave states. These excitations are known as __magnons__.

### Two-Magnon states

Any system at finite temperature has a finite energy density, or a total energy proportional to the system size. Since a magnon has a microscopic energy set by $J$, such a system will presumably have _many_ magnons (many flipped spins). As we increase the number of flipped spins, we increase the size of the subspace in which $H$ acts -- it has dimension $\binom{N}{n}$ for $n$ flipped spins i.e. $S^z = N/2-n$. Things are obviously going to get difficult quickly!

In any case, let's look at the $n=2$ case. The most general state with two magnons can be written

$$
 \sum_{j>k} c_{j,k}s_j^-s_k^-\ket{\text{FS}},
\label{spin_2Mag}
$$

with some set of coefficients $c_{jk}$. Note that $j=k$ doesn't contribute: we can't lower the spin twice, so two magnons can't be on the same site. Also, we don't need to include $c_{j,k}=c_{k,j}$ -- magnons are _bosons_ -- so we only include $j>k$.

Using our particle picture, we might suppose that if the magnons are separated from each other they can be described by plane waves. Thus we might expect something like

$$
c_{j,k}\sim \exp(i\eta_1 j + i\eta_2 k)
\label{spin_2Plane}
$$

to work. Acting on \eqref{spin_2Mag} with the Hamiltonian gives the eigenvalue equation for the energy $E = E_0 +\epsilon$

$$
\begin{align}
8c_{j,k} - 2\left(c_{j+1,k}+c_{j-1,k}+c_{j,k+1}+c_{j,k-1}\right) &= \epsilon c_{j,k},\quad j>k+1 \nonumber\\
4c_{j,j-1} - 2\left(c_{j+1,j-1}+c_{j,j-2}\right) &= \epsilon c_{j,j-1}
\label{spin_2Part}
\end{align}
$$

We can think of this as a lattice analog of the two particle Schrödinger equation discussed in [Lecture 2]({{ site.baseurl }}/lectures/LiebLinigerModel/). The modification when $j=k+1$ occurs because

1. There are only two bonds where the spin changes, instead of 4 when $j>k+1$. Thus the 'on-site' term is -4 not -8. This plays the role of a nearest neighbour attractive interaction between magnons.

2. Magnons can't hop on top of each other.

The first of \eqref{spin_2Part} is solved by

$$
c_{j,k} = c_1  \exp(i\eta_1 j + i\eta_2 k) + c_2  \exp(i\eta_1 k + i\eta_2 j),\quad \text{ for } j>k+1
\label{spin_2Wave}
$$

with

$$
\epsilon = \omega(\eta_1)+\omega(\eta_2).
$$

The eigenvalue is thus fixed by $\eta_1$ and $\eta_2$. In turn, their possible values are determined by some quantization condition, as in the Lieb--Liniger model, but we leave this aside for the moment. First, we must use the $j=k+1$ equation to determine the relationship between $c_1$ and $c_2$.

There's a clever way to do this. First, even though we know $c_{j,j}=0$ is really zero, we extend the first of \eqref{spin_2Part} to $j=k+1$, and this equation then involves a 'fake' $c_{j,j}$. The advantage of this is that we can then extend the form \eqref{spin_2Wave} to $j=k+1$ and $j=k$. For this to work, the correct equation for $j=k+1$ -- the second of \eqref{spin_2Part} -- must be consistent with the first. This gives the condition

$$
-c_{k+1,k} + \frac{1}{2}\left(c_{k,k} + c_{k+1,k+1}\right) = 0.
$$

Using the form \eqref{spin_2Wave} gives a relationship between $c_1$ and $c_2$

$$
-2\left(c_1 e^{i\eta_1}+c_2 e^{i\eta_2}\right) + (c_1+c_2)(1+e^{i(\eta_1+\eta_2)}),
$$

with solution

$$
\frac{c_1}{c_2} = -\frac{e^{i(\eta_2-\eta_1)/2}-\cos[(\eta_1+\eta_2)/2]}{e^{i(\eta_1-\eta_2)/2}-\cos[(\eta_1+\eta_2)/2]}\equiv e^{i\phi},
\label{spin_cratio}
$$

where we have defined the scattering phase shift, just as in the Lieb--Liniger model. The physical picture is therefore that a pair of magnons scatter elastically off each other, their wavefunction acquiring a phase shift as they do.

Returning to our particle analogy, the existence of an attractive potential for magnons suggests we should allow for the possibility of bound states. Doing so requires _complex_ $\eta_{1,2}$

$$
\begin{align}
\eta_1 = u + i v
\eta_2 = u - i v,\quad v>0.
\end{align}
$$

We also require that $c_2=0$ in \eqref{spin_2Wave}, otherwise the eigenstate doesn't decay. From \eqref{spin_cratio} we see that

$$
e^{-v} = \cos u.
$$

The total momentum of the state is $K=2u$, and evaluating the energy gives

$$
\epsilon_\text{bound}(K) = \omega(\eta_1) + \omega(\eta_2) = 2(1-\cos K),
$$

which should be compared with the energy of two free magnons.

### $N$-Magnon States

We could continue to consider states with more magnons. It turns out that for the Heisenberg model we are lucky: Bethe's ansatz for a general energy eigenstate works in this model too! In fact, the Heisenberg model was the subject of Bethe's 1931 paper -- so soon after the birth of quantum mechanics!

We started our discussion with the ground state of the ferromagnetic $J<0$ Heisenberg model. What about $J>0$? Can we guess the ground state in this case (of course, that's equivalent to finding the _highest_ excited state of the ferromagnet). Bethe would tell us that it must be some complicated gas of magnons, all scattering off each other. Why are things so complicated?

## Antiferromagnets Are Different!

Let's try and _guess_ the ground state of the antiferromagnet. Since anti-aligning spins should be favoured, we might try

$$
\ket{\text{AFM}} = \equiv \ket{+}_1\ket{-}_{2}\cdots \ket{+}_{N-1}\ket{-}_{N},
\label{spin_AFM}
$$

assuming $N$ is odd. Acting with the $H$ reveals that we are out of luck, however. The reason is simple: regarding the down spins as particles arranged on every other site, the spin flip terms of the Hamiltonian cause them to move about. This is Bethe's dense gas of interacting magnons.

But antiferromagnets, with the kind of alternating order described by \eqref{spin_AFM} do exist! In fact, their existence was predicted  by [Louis Néel](https://en.wikipedia.org/wiki/Louis_Néel) in 1936 _before_ their experimental discovery. (\eqref{spin_AFM}) is sometimes called a __Néel state__ for this reason.

The Heisenberg antiferromagnetic spin chain does not have an antiferromagnetic ground state. The reason, as we'll see, is similar to that behind the absence of Bragg peaks in the elastic chain: quantum fluctuations are too strong. On the square and cubic lattices, the Heisenberg model _does_ display antiferromagnetism in the ground state. The above considerations show us, however, that these states are a bit more complicated than \eqref{spin_AFM}.

### The Anderson Tower

We consider a simple model due to Philip Anderson. The couplings of the nearest neighbour Heisenberg model on the chain, square and cubic lattices define a [bipartite graph](https://en.wikipedia.org/wiki/Bipartite_graph). This means that the sites (or vertices of the graph) can be grouped into two sets, with couplings only between the two sets (not within). Thus in the chain, the two sets are the even and odd sites.

Since it seems to be hard to solve the Heisenberg model, we simplify it in the following way. Introduce the Fourier components of the spin

$$
\mathbf{S}_\mathbf{j} = \frac{1}{N^{d/2}} \sum_{\boldsymbol{\eta}} \mathbf{S}_\boldsymbol{\eta} e^{i \boldsymbol{\eta}\cdot \mathbf{j}}.
$$

Here $\mathbf{j}$ denotes a $d$-dimensional vector of integers $\mathbf{j}=(j_1,\ldots j_d)$, $j=1,\ldots N$ giving the position of the spin in an $\overbrace{N\times N \times \cdots N}^{d\text{ times}}$ cubic lattice, and likewise

$$
\boldsymbol{\eta} = (\eta_1,\ldots \eta_d) = \frac{2\pi}{N}(n_1,\ldots n_d),\quad n_a = -(N-1)/2,\ldots (N-1)/2
$$

$$
H = \frac{J}{N} \mathbf{S}_A\cdot \mathbf{S}_B,
\label{spin_Anderson}
$$

where

$$
\mathbf{S}_A = \sum_{j\in A\text{ sublattice}} \mathbf{s}_j
$$

is the total spin of sublattice A, and similarly for sublattice B. The factor of $1/N$ in \eqref{spin_Anderson} is there to make the energies extensive ($\propto N$).

What is the ground state of $H$, assuming $J>0$? This is easily answered by writing the Hamiltonian as

$$
H = \frac{J}{2N} \left[\left(\mathbf{S}_A + \mathbf{S}_B\right)^2 - \mathbf{S}_A^2 - \mathbf{S}_B^2\right] = \frac{J}{2N} \left[\left(\mathbf{S}_A + \mathbf{S}_B\right)^2 - \mathbf{S}_A^2 - \mathbf{S}_B^2\right].
$$

It's clear that we should form two spins of maximal size $N/4$ from each of the two sublattices, and then combine them to make an overall spin singlet. Obviously this singlet is a spherically symmetric state with no preferred direction, and hence no antiferromagnetic order.

Now let's add an external field that acts with opposite sign on the two sublattices

$$
H = \frac{J}{N} \mathbf{S}_A\cdot \mathbf{S}_B - h\left(S^z_A - S^z_B\right).
$$

Obviously this is not really feasible in a magnetic material, but this is a thought experiment! Now the Hamiltonian conserves $S^z_{A}+S^z_B$, but not the total spin.

If we work with the set of states of fixed $S^z_\text{tot}$

### Translational invariance


Mention Bethe ansatz solution. Relation to SEP. Spin waves and solitons. Antiferromagnetic order. Symmetry breaking. Anderson tower. Other examples- polar condensate.

## Large $s$ Expansion

A common strategy when faced with an intractable model is to generalize it to a family of models indexed by a parameter that may be used as an expansion parameter in some approximation scheme. In this section we'll see an example of this approach by generalizing the Heisenberg model to arbitrary spin.


### Holstein--Primakoff Representation of Spin

This is a way of representing spins in terms of oscillator variables so that a problem of coupled spins becomes a problem of coupled oscillators, of the kind we studied in [Lecture 3]({{ site.baseurl }}/lectures/ElasticChain/). Since the map is nonlinear, the problem is not harmonic, although a harmonic approximation is a useful first step that turns out to be justified when the spins are large.

The representation is

$$
\begin{align}
S^+ &=\sqrt{2s}\sqrt{1-\frac{\adop\aop}{2s}}\aop \\
S^- &= \sqrt{2s}\adop\sqrt{1-\frac{\adop\aop}{2s}} \\
S_z &= \left(s - \adop \aop\right).
\end{align}
$$

I'm going to leave it up to you to confirm that $[\aop,\adop]=1$ reproduces the spin commutation relations, and [Problem Set 1]({{ site.baseurl }}/problems/Problems1/) should demystify why this works to some extent. A rough understanding is as follows. $S^{\pm}$ and $\aop$, $\adop$ evidently have somethig in common in that they shift us up and down a ladder of states. That's why the relation between $S^z$ and the number of quanta in the oscillator is so simple. The oscillator ground state corresponds to $\ket{s,s}$.

The difference is that in the spin case the ladder is finite, while in the oscillator it is (semi-)infinte. Thus we can't just have $S^+\propto \aop$. We must have something that stops us lowering beyond $S^z=-s$. That's the function of the factor in the square root in $S^-$.

### Harmonic Spin Waves

A large $s$ approximation already presents itself

$$
\begin{align}
S^+ &\sim \sqrt{2s}\aop \nonumber\\
S^- &\sim  \sqrt{2s}\adop\nonumber\\
S_z &= \left(s - \adop \aop\right).
\label{spin_HPapprox}
\end{align}
$$

We are neglecting terms of order $s^{-1/2}$. The point about this approximation is that it is just what is needed to turn our Heisenberg Hamiltonian into a quadratic oscillator Hamiltonian. Before doing this, it's convenient to write \eqref{spin_HPapprox} as

$$
\begin{align}
S^x &\sim \sqrt{s}x \nonumber\\
S^y &\sim  \sqrt{s}p\nonumber\\
S_z &= \left(s - \frac{1}{2}[x^2 + p^2 - 1] \right),
\end{align}
$$

where $x = \frac{1}{\sqrt{2}}(\aop+\adop)$ and $p = \frac{i}{\sqrt{2}}(\adop-\aop)$ are canonical position and momentum coordinates.

Doing this for each spin in our chain gives the Hamiltonian

$$
H\sim NJ s^2 - sJ- \overbrace{sJ \sum_{j=1}^N \left[x_j x_{j+1} + p_j p_{j+1}-x_j^2 - p_j^2\right]}^{\equiv H^{(2)}} + \ldots,
\label{spin_Harmonic}
$$

where we are dropping terms that are lower order in $s$. \eqref{spin_Harmonic} has the form of an harmonic chain, albeit one with a rather strange looking mass term. We can diagonalize it by using the Fourier expansion of the position and momentum as before

$$
\begin{align}
x_j(t) &= \frac{1}{\sqrt{N}}\sum_{|n| \leq (N-1)/2} q_n(t) e^{i\eta_n j},\nonumber\\
p_j(t) &= \frac{1}{\sqrt{N}}\sum_{|n| \leq (N-1)/2} \pi_n(t) e^{-i\eta_n j}.
\label{spin_Fourier}
\end{align}
$$

In terms of these modes $H^{(2)}$ takes the form

$$
H^{(2)} = -2sJ \sum_{|n| \leq (N-1)/2} \sin^2(\eta_n/2)\left[q_n q_{-n} + \pi_n\pi_{-n}\right].
\label{spin_H2FM}
$$

Comparing with our treatment of the elastic chain, we can read of the dispersion relation

$$
\omega_{\text{FM}}(\eta) = 4s\left|J\right|\sin^2(\eta/2)
$$

in agreement with \eqref{spin_dispersion} for $s=1/2$. Incidentally, in order that the ground state energy is $NJ s^2$ with no correction at order $s$, the ground state energy of the oscillators must cancel the second term of \eqref{spin_Harmonic}.

This approximation applies close to the ferromagnetic state, where there are few oscillator quanta and the effect of the anharmonic terms in the Hamiltonian is small. What about the case of antiferromagnetic coupling? There is a handy trick for modifying the above calculation to apply to this case. We rotate every other spin through $\pi$ about the $y$ axis, so that

$$
(s^x_j,s^y_j,s^z_j)\longrightarrow (-s^x_j,s^y_j,-s^z_j),\quad j\text{ odd}.
$$

The Heisenberg chain Hamiltonian then becomes

$$
H = -J \sum_{j=1}^N \left[s^x_j s^x_{j+1} z- s^y_j s^y_{j+1} + s^z_j s^z_{j+1}\right].
$$

Now we proceed exactly as before. In approximating this Hamiltonian by a harmonic description close to the ferromagnetic state $\ket{\text{FM}}$, we are in fact working close to the _antiferromagnetic_ state $\ket{\text{AFM}}$ in the original variables. The oscillator Hamiltonian is now

$$
H^{(2)} = 2sJ \sum_{|n| \leq (N-1)/2} \left[\sin^2(\eta/2)q_n q_{-n} + \cos^2(\eta/2)\pi_n\pi_{-n}\right],
\label{spin_H2AFM}
$$

corresponding to a dispersion relation

$$
\omega_{\text{AFM}}(\eta) = 2sJ\left|\sin(\eta)\right|.
\label{spin_AFMDispersion}
$$

This is rather different to the ferromagnetic case. Note that it vanishes both $\eta=0$ and at the Brillouin zone boundary $\eta=\pi$, and is linear in the vicinity of both points, compared with the quadratic behaviour of the ferromagnet. The reason for the difference is clear on comparing \eqref{spin_H2FM} and \eqref{spin_H2AFM}. In the first case both the position and momentum terms vanish at $\eta=0$, while in the second only the position term vanishes here, with the momentum term vanishing at $\eta=\pi$. See if you can figure out why.

Incidentally, the Bethe ansatz solution of the spin-1/2 Heisenberg chain yields dispersion relation for the lowest excited state of momentum $\eta$ (__des Cloiseaux--Pearson__ dispersion)

$$
\omega_{\text{dCP}}(\eta) = \frac{\pi J}{2}\left|\sin(\eta)\right|,
\label{spin_dCP}
$$

which has the same functional form, but with a different overall scale. You shouldn't read too much into this, as our calculation is valid at large $s$.

The halving of the period of the dispersion \eqref{spin_AFMDispersion} is due to the antiferromagnetic order doubling the size of the unit cell. Although the exact result \eqref{spin_dCP} has the same feature, there is in fact no antiferromagnetic order in the chain, as we'll see next.

### Quantum Fluctuations Degrade Antiferromagnetic Order

In the crudest approximation $s^z_j \sim  s$ in the ferromagnet and $s^z_j \sim s(-1)^j$ in the antiferromagnet. This corresponds to perfect order. However, the Holstein--Primakoff representation has

$$
s^z_j = s - \adop_j\aop_j.
$$

How does the second term effect $\bra{0}s^z_j \ket{0}$ in the ground state of $H^{(2)}$? In the case of the ferromagnet, it doesn't. We know the ground state has $s^z = s$ exactly. One way to see why the second term doesn't contribute is to note that by translational invariance

$$
\bra{0}\adop_j \aop_j\ket{0} = \bra{0}\frac{1}{N}\sum_{j=1}^N \adop_j \aop_j\ket{0}.
\label{spin_deplete}
$$

The operator on the right hand side commutes with the harmonic Hamiltonian \eqref{spin_H2FM}. This is an exact statement not restricted to the harmonic approximation: the total number of Holstein--Primakoff bosons is conserved. The same is not true for the antiferromagnetic case \eqref{spin_H2FM}. If we had written it in terms of the bosons, we would have found terms involving $\adop_j\adop_{j+1}$ and $\aop_j\aop_{j+1}$ that create pairs of bosons (see [Problem Set 1]({{ site.baseurl }}/problems/Problems1/)).

Let's evaluate \eqref{spin_deplete}

$$
\sum_{j=1}^N \adop_j \aop_j = \frac{1}{2} \sum_{j=1}^N \left(x_j^2 + p_j^2 - 1\right) = -\frac{N}{2} + \frac{1}{2}\sum_n \left(q_n q_{-n} + \pi_n\pi_{-n}\right).
\label{spin_DepEval}
$$

Next we use the oscillator coordinates from [Lecture 3]({{ site.baseurl }}/lectures/ElasticChain/), adapted to \eqref{spin_H2AFM}

$$
\begin{align}
\aop_n &= \sqrt{\frac{\cot(\eta_n /2)}{2}}\left(q_n + \frac{i}{\cot(\eta_n /2)}\pi_{-n}\right)\nonumber\\
\adop_n &= \sqrt{\frac{\cot(\eta_n /2)}{2}}\left(q_{-n} - \frac{i}{\cot(\eta_n /2)}\pi_{n}\right),\qquad n\neq 0.
\label{spin_adef}
\end{align}
$$

Writing \eqref{spin_deplete} in terms of these gives

$$
\begin{align}
\Delta s = - \bra{0}\frac{1}{N}\sum_{j=1}^N \adop_j \aop_j\ket{0} &= \frac{1}{2}-\frac{1}{4N}\sum_n \left[\tan(\eta_n/2) + \cot(\eta_n/2)\right].\\
 &= \frac{1}{2}- \frac{1}{4}\int_{-\pi}^\pi \frac{d\eta}{2\pi} \left[\tan(\eta_n/2) + \cot(\eta_n/2)\right].
\end{align}
$$

This represents an $O(s^0)$ correction to $\langle s^z_j\rangle = (-1)^j\left(s - \Delta s\right)$. However, the integral diverges logarithmically at $\eta=0$ and $\eta=\pi$. This indicates that our approach breaks down in the $N\to\infty$ limit: at finite $N$ the sums are all finite if $n=0$ is excluded (Why can we do this? Compare with the elastic chain.). In higher dimensions -- repeating the analysis yields the same integrand but with an integral over the $d$-dimensional Brillouin zone -- the integrals are finite, however. This indicates that our expansion is well behaved.

The breakdown of the spin wave treatment in 1D has a physical meaning: there is no long range antiferromagnetic order, even at zero temperature. The situation is closely analogous to the elastic chain, where we saw that quantum fluctuations destroyed the Bragg peaks.


## A Numerical Experiment

Exact diagonalization of spin chains;

## Some facts about ground states of Heisenberg Models

Marshall sign rule. Lieb Mattis theorem. Lack of order theorems

## Outlook

Anisotropy, frustration...

{% bibliography --cited %}