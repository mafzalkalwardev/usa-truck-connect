# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please **do not** open a public issue.

Email **hello@usatruckconnect.com** with:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We aim to respond within 48 hours and will coordinate disclosure responsibly.

## Scope

This static site uses:

- **FormSubmit.co** for form handling — review their security practices for submission data
- **GitHub Pages** for hosting — no server-side code in this repository
- **Third-party CDNs** (Google Fonts, Font Awesome, AOS) — supply-chain considerations apply

## Best Practices

- Never commit `.env` files or credentials
- Keep FormSubmit redirect URLs relative or verified
- Review dependency updates for `playwright` (dev-only, screenshot script)
