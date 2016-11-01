---
layout: page
title: Fermi Gas
author: Austen Lamacraft
chapter: 9
summary: Interactions described by perturbation theory. Quasiparticles. Landau Fermi liquid.
published: true
---

<p class="message">
A Fermi gas with weak interactions provides an example of one of the 'standard models' of condensed matter physics: Landau's <strong>Fermi liquid</strong> theory.
</p>

## Contents
{:.no_toc}

* Toc
{:toc}

Reading: {% cite Landau:1980aa %}.

---




## Weakly Interacting Fermi Gas

We are going to study the following simple model of a Fermi gas with short-ranged interactions

$$
H = \int d\br\left[ \sum_{s=\uparrow,\downarrow}\frac{1}{2m}\nabla\pdop_s\cdot\nabla\pop_s + U_0 \pdop_\uparrow\pdop_\downarrow\pop_\downarrow\pop_\uparrow\right].
$$

As with the Bose gas, it's most convenient to work in momentum space

$$
H =\sum_{\bk,s} \epsilon(\bk)\adop_{\bk,s}\aop_{\bk,s} + \overbrace{\frac{U_0}{V}\sum_{\bk_1+\bk_2=\bk_3+\bk_4} \adop_{\bk_1,\uparrow}\adop_{\bk_2,\downarrow}\aop_{\bk_3,\downarrow}\aop_{\bk_4,\uparrow}}^{\equiv H_\text{int}},
$$

with $\epsilon(\bk)=\bk^2/2m$, and $V$ the volume. At $U_0=0$ the eigenstates are of course the product states of singe particle momentum states specified by the occupancies $N_{s}(\bk) = \pm 1$. The ground state is the Fermi sphere of radius $k_\text{F}$ in momentum space with $N_{s}(\bk) = \theta(k_F-\abs{\bk})$. Low energy excited states will have $N_{s}(\bk)=1$ for $\abs{\bk}\ll k_\text{F}$ and $N_{s}(\bk)=0$ for $\abs{\bk}\gg k_\text{F}$. In perturbation theory we may still _label_ the eigenstates by these occupation numbers even though the eigenstates are no longer occupation number eigenstates. Instead, we say that these labels give the occupation numbers of __quasiparticles__ with fermionic statistics. The energy of the eigenstates can then be expressed in terms of the quasiparticle distribution.

Without interactions the energy of a state $\ket{\mathbf{N}}$ is

$$
E^{(0)}(\mathbf{N}) = \sum_{\bk,s} \epsilon(\bk)N_{s}(\bk).
$$

In the presence of interactions this function is no longer linear in the occupation numbers. The second order expansion of the energy in terms of the deviation of the occupancies from the ground state values is the key ingredient of Landau's theory.

### Perturbation Theory to Second Order

The standard expressions for the perturbed energy to second order in the perturbation are of course

$$
\begin{align}
E^{(1)}(\mathbf{N}) &= \braket{\mathbf{N}}{H_\text{int}}{\mathbf{N}}\\
E^{(2)}(\mathbf{N}) &= \sum_{\mathbf{N}'\neq \mathbf N}\frac{\abs{\braket{\mathbf{N'}}{H_\text{int}}{\mathbf{N}}}^2}{E^{(0)}(\mathbf{N})-E^{(0)}(\mathbf{N}')}.
\end{align}
$$

The first order correction is easily found to be

$$
E^{(1)}(\mathbf{N}) = \frac{U_0}{V} \sum_{\bk,\bk'} N_{\uparrow}(\bk)N_{\downarrow}(\bk') = \frac{U_0}{V}N_\uparrow N_\downarrow.
$$

This is just the energy we found when we discussed the Stoner criterion in [Lecture 6]({{ site.baseurl }}/lectures/MoreSecondQuantization/). For the second order correction we need the matrix element $\braket{\mathbf{N}'}{H_\text{int}}{\mathbf{N}}$, which is nonzero if

$$
\begin{align}
N'_{\bk_1,\uparrow} = N_{\uparrow}(\bk_1) + 1, \quad N'_{\downarrow}(\bk_2) = N_{\downarrow}(\bk_2) + 1\\
N'_{\downarrow}(\bk_3) = N_{\downarrow}(\bk_3) - 1, \quad N'_{\uparrow}(\bk_4) = N_{\uparrow}(\bk_4) - 1,
\end{align}
$$

for $\bk_i$ satisfying $\bk_1+\bk_2=\bk_3+\bk_4$. In this case

$$
\braket{\mathbf{N}'}{H_\text{int}}{\mathbf{N}} = \frac{U_0}{V} \sqrt{\left(1-N_{\uparrow}(\bk_1)\right)\left(1-N_{\downarrow}(\bk_2)\right)N_{\downarrow}(\bk_3)N_{\uparrow}(\bk_4)}
$$

(ignoring any coinciding momenta). In this way we end up with the second order correction

$$
E^{(2)}(\mathbf{N}) = \left(\frac{U_0}{V}\right)^2 \sum_{\bk_1+\bk_2=\bk_3+\bk_4}\frac{\left(1-N_{\uparrow}(\bk_1)\right)\left(1-N_{\downarrow}(\bk_2)\right)N_{\downarrow}(\bk_3)N_{\uparrow}(\bk_4)}{\epsilon(\bk_3)+\epsilon(\bk_4)-\epsilon(\bk_1)-\epsilon(\bk_2)}.
\label{fermi_E2}
$$

### Landau $f$ function

Evaluating \eqref{fermi_E2}, even for the ground state, is a bit arduous on account of the three independent momentum sums. Fortunately, we are more interested in how the _excitation energies_ are affected by interactions. To the end, we expand the occupancies

$$
N_{s}(\bk) = \theta(k_F-\abs{\bk}) + n_{s}(\bk)+\cdots.
$$

This might seem a bit odd given that $N_{s}(\bk)=\pm 1$. You should think of this expansion in terms of the continuum limit, where the $
\bk$ values become finely spaced. In this limit $n_\bk$ represents the _mean_ deviation from the Fermi sphere in that region of $\bk$-space.

<a name="FermiN"></a>
![]({{ site.baseurl }}/assets/FermiN.png)
_$n\_\bk$ as a smoothed deviation from the Fermi step._

The excitation energy above the ground state of an eigenstate labelled by occupancies $N_\bk$ can then be expanded in $n_\bk$

$$
\Delta E = \sum_{\bk,s} \varepsilon_s(\bk)n_{s}(\bk) + \frac{1}{2V}\sum_{\bk, s,\bk', s'} f_{s^{}s'}(\bk,\bk')n_{s}(\bk)n_{s'}(\bk').
\label{fermi_fdef}
$$

To first order in the interaction we have the not-so-interesting result

$$
\begin{align}
\varepsilon_s(\bk) &= \epsilon(\bk) + \frac{U_0 N_{\bar s}}{V}+\cdots\\
f_{\pm} &= f_\mp = U_0+\cdots,\quad f_{++}=f_{--}=0+\cdots,
\label{fermi_first}
\end{align}
$$

where the meaning of the $\bar s$ is $\bar\uparrow=\downarrow$, $\bar\downarrow=\uparrow$. The second order contributions to the $f$-function are more interesting, however. For example

$$
\begin{align}
f_{++}(\bk,\bk') = -\frac{U_0^2}{V}\left[\sum_{\bk+\bk_3=\bk'+\bk_2} \frac{N_{\downarrow}(\bk_3)(1-N_{\downarrow}(\bk_2))}{\epsilon(\bk)+\epsilon(\bk_3)-\epsilon(\bk')-\epsilon(\bk_2)}\right.\nonumber\\
\left.+\sum_{\bk'+\bk_3=\bk+\bk_2}\frac{N_{\downarrow}(\bk_3)(1-N_{\downarrow}(\bk_2))}{\epsilon(\bk')+\epsilon(\bk_3)-\epsilon(\bk)-\epsilon(\bk_2)}\right].
\end{align}
$$

We will be interested in the low temperature limit, in which $n_{s}(\bk)$ is non-zero only in a very narrow region of size $k_\text{B} T$ around the Fermi surface. In this limit we can take the $\abs{\bk}=\abs{\bk'}=k_\text{F}$, so that

$$
\begin{align}
f_{++}(\bk,\bk') = -\frac{U_0^2}{V}\left[\sum_{\bk+\bk_3=\bk'+\bk_2} \frac{N(\bk_3)(1-N(\bk_2))}{\epsilon(\bk_3)-\epsilon(\bk_2)}
+\sum_{\bk'+\bk_3=\bk+\bk_2}\frac{N(\bk_3)(1-N(\bk_2))}{\epsilon(\bk_3)-\epsilon(\bk_2)}\right].
\end{align}
$$

In which we have assumed the state around which we expand is unpolarized, i.e. $N_{s}(\bk)$ is independent of $s$.

The expression for $f_{\pm}(\bk,\bk')$ is more complicated

$$
\begin{align}
f_{+-}(\bk,\bk') = U_0 + f_{++}(\bk,\bk') +\frac{U_0^2}{V}\left[\sum_{\bk+\bk'=\bk_3+\bk_4}\frac{N(\bk_3)N(\bk_4)}{\epsilon(\bk_3)+\epsilon(\bk_4)-2E_\text{F}}\right.\nonumber\\
\left.\sum_{\bk+\bk'=\bk_1+\bk_2}\frac{(1-N(\bk_1))(1-N(\bk_2))}{2E_\text{F}-\epsilon(\bk_1)-\epsilon(\bk_2)}\right].
\end{align}
$$

Evaluating these expressions is simpler than calculating \eqref{fermi_E2}, as we have only one independent momentum. The _new feature_ that comes at second order is a nontrivial dependence of $f_{s^{}s'}(\bk,\bk')$ on the angle between $\bk$ and $\bk'$.

<p class="message">
It's a bit fiddly to get at, but let's work it out for the simpler case of $f_{++}(\bk,\bk')$!
</p>


The continuum limit is

$$
\begin{align}
f_{++}(\bk,\bk') = \frac{U_0^2}{(2\pi)^3}\left[\int_{\substack{\abs{\bk_3}<k_\text{F},\abs{\bk_2}>k_\text{F}\\ \bk+\bk_3=\bk'+\bk_2 }} \frac{d\bk_3}{\epsilon(\bk_2)-\epsilon(\bk_3)}\right.\nonumber\\
\left.+\int_{\substack{\abs{\bk_3}<k_\text{F},\abs{\bk_2}>k_\text{F}\\ \bk'+\bk_3=\bk+\bk_2 }}\frac{d\bk_3}{\epsilon(\bk_2)-\epsilon(\bk_3)}\right].
\label{fermi_fcont}
\end{align}
$$

So we need to find the integral

$$
\int_{\substack{\abs{\bk_3}<k_\text{F},\abs{\bk_2}>k_\text{F}\\ \bk+\bk_3=\bk'+\bk_2 }} \frac{d\bk_3}{\epsilon(\bk_2)-\epsilon(\bk_3)}.
$$

Note that the denominator can be written

$$
\epsilon(\bk_2)-\epsilon(\bk_3)= \frac{1}{2m}\left(\bk_2+\bk_3\right)\cdot\left(\bk_2-\bk_3\right) = \frac{1}{2m}\left(\bk_2+\bk_3\right)\cdot\left(\bk-\bk'\right),
$$

where $\bk-\bk'$ is fixed. Writing

$$
\mathbf{K} = \frac{1}{2}\left(\bk_2+\bk_3\right),\quad \bq = \frac{1}{2}\left(\bk_2-\bk_3\right),
$$

<a name="FermiGeometry"></a>
![]({{ site.baseurl }}/assets/FermiGeometry.png)
_Geometry of the integral for $f\_{++}(\bk,\bk')$._

the denominator becomes

$$
\epsilon(\bk_2)-\epsilon(\bk_3) = \frac{2}{m}\mathbf{K}\cdot\bq,
$$

for fixed $\bq$. Thus, only the angle $\theta$ between $\mathbf{K}$ and $\bq$ enters the integral. The conditions $\abs{\bk_2}>k_\text{F}$ and $\abs{\bk_3}<k_\text{F}$ become

$$
\begin{align}
\left(\mathbf{K}+\bq\right)^2>k_\text{F}^2,\quad \left(\mathbf{K}-\bq\right)^2<k_\text{F}^2,
\end{align}
$$

which gives the range of $K_-(\theta)<\abs{\mathbf{K}}<K_+(\theta)$

$$
K_{\pm}(\theta)=\pm q\abs{\cos\theta}+\sqrt{k_\text{F}^2-q^2\sin^2\theta},
$$

and we must have $\theta<\pi/2$. In terms of these variables the integral becomes

$$
\begin{align}
\int_{\substack{\abs{\bk_3}<k_\text{F},\abs{\bk_2}>k_\text{F}\\ \bk+\bk_3=\bk'+\bk_2 }} \frac{d\bk_3}{\epsilon(\bk_2)-\epsilon(\bk_3)}&=
\pi m\int_0^{\pi/2} d\theta \int_{K_-(\theta)}^{K_+(\theta)} \frac{K\sin\theta}{q\cos\theta} dK\nonumber\\
&=2\pi m\int_0^{\pi/2} d\theta \sin\theta \sqrt{k_\text{F}^2-q^2\sin^2\theta}.
\end{align}
$$

The other integral in \eqref{fermi_fcont} is the same but in the interval $(\pi/2,\pi)$. Thus we have Finally

$$
\begin{align}
f_{++}(\bk,\bk') &= \frac{U_0^2 m}{(2\pi)^2} \int_0^{\pi} d\theta \sin\theta \sqrt{k_\text{F}^2-q^2\sin^2\theta}\nonumber\\
&=\frac{U_0^2 m k_\text{F}}{(2\pi)^2}\left[1 - \frac{\cos^2\phi/2}{2\sin\phi/2}\log\left(\frac{1-\sin\phi/2}{1+\sin\phi/2}\right)\right].
\end{align}
$$

Here $\phi$ is the angle between $\bk$ and $\bk'$ i.e. $\abs{\bk-\bk'}=2q=2k\_\text{F}\sin\phi/2$. We won't go through the calculation of $f_{+-}(\bk,\bk')$, but just record the final answer.

The definition \eqref{fermi_fdef} implied a certain quantization axis for spin. To write things in an invariant way, we should think of the occupation number $N(\bk)$ as a $2\times 2$ matrix that can describe an arbitrary spin orientation, with elements

$$
\mathsf{N}(\bk)=\begin{pmatrix}
N_{\uparrow\uparrow}(\bk) & N_{\uparrow\downarrow}(\bk) \\
N_{\downarrow\uparrow}(\bk) & N_{\downarrow\downarrow}(\bk).
\end{pmatrix}
$$

The $f$-function then has _four_ spin indices

$$
\frac{1}{2V}\sum_{\bk, s_1,s_2,\bk', s_3,s_4} f_{s_1s_2,s_3s_4}(\bk,\bk')n_{s_1s_2}(\bk)n_{s_3s_4}(\bk'),
$$

with

$$
\begin{align}
f_{s_1s_2,s_3s_4}(\bk,\bk') = \frac{U_0}{2}\left[\left(1+ \frac{mU_0 k_\text{F}}{2\pi^2}\left[2+\frac{\cos\phi}{2\sin\phi/2}\log\frac{1+\sin\phi/2}{1-\sin\phi/2}\right]\right)\delta_{s_1s_3}\delta_{s_2s_4}\right.\nonumber\\
\left.\left(1+ \frac{mU_0 k_\text{F}}{2\pi^2}\left[1-\frac{1}{2}\sin\phi/2\log\frac{1+\sin\phi/2}{1-\sin\phi/2}\right]\right)\boldsymbol{\sigma}_{s_1s_3}\cdot\boldsymbol{\sigma}_{s_2s_4}\right]
\label{fermi_ffinal}
\end{align}
$$

<p class="message">
The message to take away from this calculation is not the detailed functional form of \eqref{fermi_ffinal}, but the fact that the interaction between quasiparticles in an interacting Fermi gas is defined in terms of a pair of functions

$$
\nu(E_F)f_{s_1s_2,s_3s_4}(\bk,\bk') = F(\phi) \delta_{s_1s_3}\delta_{s_2s_4} + G(\phi)\boldsymbol{\sigma}_{s_1s_3}\cdot\boldsymbol{\sigma}_{s_2s_4}.
\label{fermi_fgdef}
$$

The functions $F(\phi)$ and $G(\phi)$ have been made dimensionless by scaling by the density of states at the Fermi surface $\nu(E_F)\equiv k_{\text{F}}m/\pi^2$.

</p>


### Quasiparticle energy $\varepsilon_s(\bk)$

So far we haven't had much to say about the quasiparticle energy $\varepsilon_s(\bk)$ introduced in \eqref{fermi_fdef}. Evaluating the second order correction is going to be difficult, as it will involve two momentum integrations instead of one. What can we say on general grounds? We expect that

$$
\varepsilon_s(\bk) - E_\text{F} = v_\text{F}(\abs{\bk}-k_\text{F}).
\label{fermi_vfdef}
$$

The Fermi velocity $v_\text{F}$ defined by this expression may be altered by the interactions, allowing us to define an __effective mass__

$$
m_* = \frac{k_\text{F}}{v_\text{F}}.
\label{fermi_mdef}
$$

Fortunately, we can get at this quantity using the results we already have, thanks to the following sneaky trick (due to Landau). If we increment the momentum of each quasiparticle by a small amount $\delta\bk$, we can compute the new energy using our energy functional \eqref{fermi_fdef}, along with a new distribution function

<a name="FermiShift"></a>
![]({{ site.baseurl }}/assets/FermiShift.png)
_Shifting the Fermi sea to increase the momentum._

$$
\begin{align}
N_s(\bk-\delta\bk) &=\theta(k_F-\abs{\bk-\delta\bk}) + n_{s}(\bk-\delta\bk)+\cdots\nonumber\\
&=\theta(k_F-\abs{\bk}) + n_s(\bk) + \delta(k_F-\abs{\bk})\hat\bk\cdot\delta\bk -  \delta\bk \nabla_\bk n_{s}(\bk)+\cdots.
\end{align}
$$

Treating the last three terms as $n_s(\bk)$, our excitation energy changes to first order in $\delta\bk$ by an amount

$$
\begin{align}
\Delta E &= \sum_{\bk,s} n_{s}(\bk)\delta\bk\cdot\nabla_\bk\varepsilon_s(\bk) \nonumber\\
&+\frac{1}{V}\sum_{\bk, s,\bk', s'} f_{s^{}s'}(\bk,\bk')n_{s}(\bk)\left[\delta(k_F-\abs{\bk'})\hat\bk'\cdot\delta\bk - \nabla_{\bk'}n_{s'}(\bk')\right]\cdot\delta\bk.
\end{align}
$$

(In the first term I have integrated by parts.) On grounds of Galilean invariance, however, we also know that this is

$$
\Delta E = \frac{\mathbf{P}}{m}\cdot\delta\bk,
\label{fermi_gal}
$$

where the total momentum $\mathbf{P}$ can be written

$$
\mathbf{P} = \sum_{\bk,s} \bk n_{s}(\bk).
$$

If \eqref{fermi_gal} holds for all $n_s(\bk)$ and $\delta\bk$, we have (ignoring second order in $n_s(\bk)$)

$$
\frac{\bk}{m} = \nabla_\bk\varepsilon_s(\bk) +  \sum_{s'}\int  f_{s^{}s'}(\bk,\bk')\delta(k_F-\abs{\bk'})\hat\bk' \frac{d\bk'}{(2\pi)^3}.
$$

Restricting ourselves to momenta close to the Fermi surface, and using our definitions \eqref{fermi_fgdef}, \eqref{fermi_vfdef} and \eqref{fermi_mdef} gives the relation

$$
\frac{\bk}{m} = \frac{\bk}{m_*} +\frac{1}{m} \int F(\phi) \bk' \frac{d\Omega_{\bk'}}{4\pi}.
$$

If we write $\bk'=\cos\phi \bk + \sin\phi \bk_\perp$, with $\bk_\perp\cdot\bk=0$, this gives Landau's famous result

$$
\frac{1}{m} = \frac{1}{m_*} +\frac{1}{m} \int F(\phi) \cos\phi \frac{\sin\theta d\theta}{2}.
$$

For the $F(\phi)$ that we found in \eqref{fermi_ffinal} from second order perturbation theory, this gives the effective mass correction

$$
\frac{m_*}{m} = 1 + \frac{1}{30\pi^4}(7\log 2 - 1)\left(mU_0k_\text{F}\right)^2+\cdots.
$$

(Use the substitution $u=\sin\phi/2$ to do the integral.) Again, the point is not the value that we've obtained, but the argument we used to do so. In systems with strong interactions it's possible for the effective mass to be very different from the bare mass: in the [heavy fermion materials](https://en.wikipedia.org/wiki/Heavy_fermion_material) $m_*/m$ can approach 1000! Despite being so far from the noninteracting limit, Landau's picture of fermionic quasiparticles still applies.


References
----------

{% bibliography --cited %}
