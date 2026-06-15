<div align="center">

# Mighty Trucking

**Google Workspace + Google Voice affiliate program for USA truckers & logistics professionals**

Earn **$40 per verified sign-up** · Live at **[mightytrucking.online](https://mightytrucking.online)**

[![Live Site](https://img.shields.io/badge/Live-mightytrucking.online-F59E0B?style=for-the-badge)](https://mightytrucking.online/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-0B1120?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mafzalkalwardev/mighty-trucking)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![Contact](https://img.shields.io/badge/Email-usamightytrucking%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:usamightytrucking@gmail.com)

</div>

---

## Overview

**Mighty Trucking** is a production-ready, multi-page affiliate website that helps American CDL drivers and business owners earn **$40 cash rewards** for each verified **Google Workspace + Google Voice** sign-up. Built as a static site with zero backend — deployed on **GitHub Pages** with custom domain **mightytrucking.online**.

| | |
|---|---|
| **Live site** | [https://mightytrucking.online](https://mightytrucking.online) |
| **Contact** | [usamightytrucking@gmail.com](mailto:usamightytrucking@gmail.com) |
| **Reward** | $40 per verified sign-up |
| **Plan cost** | $12/user/month (Workspace + Voice) |

---

## Screenshots

<table>
<tr>
<td width="50%"><strong>Home</strong><br>Hero, live stats, Google product logos<br><br><a href="https://mightytrucking.online/"><img src="docs/screenshots/home.png" alt="Mighty Trucking home page" width="100%"></a></td>
<td width="50%"><strong>Offer</strong><br>$40 reward breakdown & FAQ<br><br><a href="https://mightytrucking.online/offer.html"><img src="docs/screenshots/offer.png" alt="Mighty Trucking offer page" width="100%"></a></td>
</tr>
<tr>
<td width="50%"><strong>How It Works</strong><br>Interactive 5-step wizard<br><br><a href="https://mightytrucking.online/how-it-works.html"><img src="docs/screenshots/how-it-works.png" alt="Mighty Trucking how it works" width="100%"></a></td>
<td width="50%"><strong>Join</strong><br>Affiliate signup form<br><br><a href="https://mightytrucking.online/join.html"><img src="docs/screenshots/join.png" alt="Mighty Trucking join form" width="100%"></a></td>
</tr>
<tr>
<td width="50%"><strong>About</strong><br>Mission & trucking imagery<br><br><a href="https://mightytrucking.online/about.html"><img src="docs/screenshots/about.png" alt="Mighty Trucking about page" width="100%"></a></td>
<td width="50%"><strong>Testimonials</strong><br>Social proof & case studies<br><br><a href="https://mightytrucking.online/testimonials.html"><img src="docs/screenshots/testimonials.png" alt="Mighty Trucking testimonials" width="100%"></a></td>
</tr>
</table>

---

## Features

| Feature | Description |
|---------|-------------|
| **9-page site** | Home, About, Offer, How It Works, Testimonials, Join, Thank You, Privacy, Terms |
| **Live stats bar** | Slots remaining, sign-ups today, payout countdown |
| **Interactive wizard** | 5-step Google Workspace + Voice setup guide |
| **Animated walkthrough** | Auto-playing signup-to-payout demo |
| **FormSubmit.co** | Lead capture → `usamightytrucking@gmail.com` |
| **Responsive design** | Mobile sticky CTA, collapsible nav, accessible contrast |
| **Custom domain** | `mightytrucking.online` via GitHub Pages + Hostinger DNS |

---

## Tech Stack

- **HTML5** semantic markup · **CSS3** design system (`css/main.css`)
- **Vanilla JavaScript** — nav, FAQ, wizard, live counters, animations
- **AOS** scroll animations · **Font Awesome 6** · **Inter** (Google Fonts)
- **Assets** — local trucking photos (`assets/images/`), Google logos (`assets/logos/`)

---

## Project Structure

```
├── index.html              # Home — hero, live counters, CTAs
├── about.html              # Mission, partner stats, trucking photos
├── offer.html              # $40 reward, pricing, FAQ accordion
├── how-it-works.html       # Wizard + animated walkthrough
├── testimonials.html       # Social proof
├── join.html               # Affiliate signup form
├── thank-you.html          # Post-submit confirmation
├── privacy.html / terms.html
├── CNAME                   # mightytrucking.online
├── css/main.css            # Design tokens & components
├── js/                     # main, counters, wizard, animations
├── assets/
│   ├── images/             # Local trucking photography
│   └── logos/              # Mighty Trucking + Google brand assets
└── docs/screenshots/       # README preview images
```

---

## Quick Start

```bash
git clone https://github.com/mafzalkalwardev/mighty-trucking.git
cd mighty-trucking
npx serve .
# → http://localhost:3000
```

Refresh screenshots after visual changes:

```bash
npm install
SCREENSHOT_BASE=https://mightytrucking.online npm run screenshots
```

---

## Deployment

**Production:** [mightytrucking.online](https://mightytrucking.online) — GitHub Pages with `CNAME` + Hostinger DNS (4× GitHub A records + `www` CNAME → `mafzalkalwardev.github.io`).

**Mirror:** [mafzalkalwardev.github.io/mighty-trucking](https://mafzalkalwardev.github.io/mighty-trucking/)

---

## Form Handling

Signup form on `join.html` posts to [FormSubmit.co](https://formsubmit.co) → **usamightytrucking@gmail.com**

| Field | Purpose |
|-------|---------|
| Full Name, Email | Contact & onboarding |
| Workspace Domain | Verification |
| Voice Number | USA phone confirmation |
| Payout Method | PayPal / Venmo / ACH |

Redirect after submit: `thank-you.html`

---

## Legal

Google Workspace and Google Voice are trademarks of **Google LLC**. Mighty Trucking is an **independent affiliate program** — not affiliated with, endorsed by, or sponsored by Google.

[Privacy Policy](privacy.html) · [Terms of Service](terms.html) · [Security](SECURITY.md)

---

## Contact

**Email:** [usamightytrucking@gmail.com](mailto:usamightytrucking@gmail.com)  
**Office:** 47 W 13th St, New York, NY 10011, USA

---

<div align="center">

© 2025 Mighty Trucking — Bridging global trucking with USA connectivity

</div>
