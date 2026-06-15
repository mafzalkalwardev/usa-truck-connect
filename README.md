<div align="center">

<img src="docs/screenshots/home.png" alt="Mighty Trucking — Home page" width="100%" style="max-width: 960px; border-radius: 12px;">

# Mighty Trucking

**Google Workspace + Google Voice affiliate program for USA truckers & logistics professionals**

Earn **$40 per verified sign-up** · **[mightytrucking.online](https://mightytrucking.online)**

<br>

[![Live Site](https://img.shields.io/badge/🌐_Live-mightytrucking.online-F59E0B?style=for-the-badge)](https://mightytrucking.online/)
[![GitHub](https://img.shields.io/badge/Repo-mighty--trucking-0B1120?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mafzalkalwardev/mighty-trucking)
[![License: MIT](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)
[![Email](https://img.shields.io/badge/📧_Contact-usamightytrucking%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:usamightytrucking@gmail.com)

</div>

---

## Overview

**Mighty Trucking** is a production-ready affiliate website helping American CDL drivers and business owners earn **$40 cash rewards** for each verified **Google Workspace + Google Voice** sign-up.

| | |
|---|---|
| **Live site** | [https://mightytrucking.online](https://mightytrucking.online) |
| **GitHub Pages** | [mafzalkalwardev.github.io/mighty-trucking](https://mafzalkalwardev.github.io/mighty-trucking/) |
| **Contact** | [usamightytrucking@gmail.com](mailto:usamightytrucking@gmail.com) |
| **Reward** | $40 per verified sign-up |
| **Monthly plan** | $12/user (Workspace + Voice) |

---

## Screenshots

> Captured from the live site at **mightytrucking.online** — June 2025

### Home · Offer

| Home — hero, live stats & CTAs | Offer — $40 reward & FAQ |
|:---:|:---:|
| [<img src="docs/screenshots/home.png" alt="Home page" width="440">](https://mightytrucking.online/) | [<img src="docs/screenshots/offer.png" alt="Offer page" width="440">](https://mightytrucking.online/offer.html) |

### How It Works · Join

| Interactive 5-step wizard | Affiliate signup form |
|:---:|:---:|
| [<img src="docs/screenshots/how-it-works.png" alt="How It Works" width="440">](https://mightytrucking.online/how-it-works.html) | [<img src="docs/screenshots/join.png" alt="Join form" width="440">](https://mightytrucking.online/join.html) |

### About · Testimonials

| Mission & trucking imagery | Social proof & case studies |
|:---:|:---:|
| [<img src="docs/screenshots/about.png" alt="About page" width="440">](https://mightytrucking.online/about.html) | [<img src="docs/screenshots/testimonials.png" alt="Testimonials" width="440">](https://mightytrucking.online/testimonials.html) |

---

## Features

| Feature | Description |
|---------|-------------|
| **9-page site** | Home, About, Offer, How It Works, Testimonials, Join, Thank You, Privacy, Terms |
| **Live stats bar** | Slots remaining, sign-ups today, payout countdown |
| **Interactive wizard** | Step-by-step Google Workspace + Voice setup |
| **Animated walkthrough** | Auto-playing signup-to-payout demo |
| **FormSubmit.co** | Leads delivered to **usamightytrucking@gmail.com** |
| **Local assets** | Trucking photos hosted in-repo — no broken hotlinks |
| **Custom domain** | `mightytrucking.online` on GitHub Pages + Hostinger DNS |
| **Accessible UI** | High-contrast text, semantic HTML, mobile responsive |

---

## Tech Stack

| Layer | Tools |
|-------|-------|
| Markup | HTML5 semantic pages |
| Styles | CSS3 design system — `css/main.css` |
| Scripts | Vanilla JS — nav, FAQ, wizard, counters, animations |
| UI | AOS · Font Awesome 6 · Inter (Google Fonts) |
| Forms | [FormSubmit.co](https://formsubmit.co) → Gmail |
| Hosting | GitHub Pages + custom domain |

---

## Project Structure

```
mighty-trucking/
├── index.html                 # Home
├── about.html                 # Mission & partner stats
├── offer.html                 # $40 reward + FAQ
├── how-it-works.html          # Wizard + walkthrough
├── testimonials.html          # Reviews
├── join.html                  # Signup form
├── thank-you.html             # Confirmation
├── privacy.html · terms.html
├── CNAME                      # mightytrucking.online
├── css/main.css
├── js/                        # main, counters, wizard, animations
├── assets/
│   ├── images/                # Local trucking photography
│   └── logos/                 # Mighty Trucking + Google logos
└── docs/screenshots/          # README previews (auto-captured)
```

---

## Quick Start

```bash
git clone https://github.com/mafzalkalwardev/mighty-trucking.git
cd mighty-trucking
npx serve .
# → http://localhost:3000
```

Refresh README screenshots after visual changes:

```bash
npm install
npm run screenshots
```

---

## Deployment

| Environment | URL |
|-------------|-----|
| **Production** | [mightytrucking.online](https://mightytrucking.online) |
| **GitHub Pages** | [mafzalkalwardev.github.io/mighty-trucking](https://mafzalkalwardev.github.io/mighty-trucking/) |

Push to `main` → GitHub Pages auto-deploys. Custom domain via `CNAME` + Hostinger DNS (4× GitHub A records, `www` CNAME → `mafzalkalwardev.github.io`).

---

## Form & Contact

All inquiries and form submissions go to one address:

**[usamightytrucking@gmail.com](mailto:usamightytrucking@gmail.com)**

| Form field | Purpose |
|------------|---------|
| Full Name, Email | Contact & onboarding |
| Workspace Domain | Verification |
| Voice Number | USA phone confirmation |
| Payout Method | PayPal / Venmo / ACH |

Post-submit redirect: `thank-you.html`

---

## Legal

Google Workspace and Google Voice are trademarks of **Google LLC**. Mighty Trucking is an **independent affiliate program** — not affiliated with, endorsed by, or sponsored by Google.

[Privacy Policy](privacy.html) · [Terms of Service](terms.html) · [Security](SECURITY.md) · [Contributing](CONTRIBUTING.md)

---

<div align="center">

**47 W 13th St, New York, NY 10011, USA**

© 2025 Mighty Trucking — Bridging global trucking with USA connectivity

</div>
