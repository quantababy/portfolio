# Prabhat Tiwari — Portfolio

Personal portfolio website for Prabhat Tiwari, a software engineer building projects across AI, backend engineering, web development, and software systems.

The site is designed as a fast, accessible, static-first portfolio for recruiters and engineers who want to understand the projects, architecture, implementation decisions, and engineering trade-offs.

## Overview

The portfolio contains:

- Personal introduction and positioning
- Selected engineering projects
- Detailed project case studies
- Resume and downloadable PDF
- Contact information
- GitHub, LinkedIn, and LeetCode links
- Accessibility-focused UI
- Automated tests and CI
- SEO metadata, sitemap, and robots configuration
- Security response headers

## Projects

### AEGIS

An AI-security platform for automated red-teaming and vulnerability intelligence.

The project combines:

- Data structures and algorithms
- Attack processing
- AI/LLM tooling
- Machine-learning classification
- Retrieval
- Vulnerability intelligence
- Backend APIs
- Blockchain-based provenance

Status: **In progress**

### MinutesMeet

An AI meeting-minutes generation system that converts recorded meeting audio into structured meeting documentation.

The processing pipeline uses:

- Whisper for speech recognition
- Llama 3.2 for meeting-minute generation
- FastAPI for backend processing
- GPU-accelerated inference
- React for the frontend
- WebSockets for streamed output

Status: **Completed**

### VeritasChain

A verification and provenance system combining AI processing, retrieval, graph-based source trust analysis, and blockchain-backed auditability.

The project includes:

- Python
- FastAPI
- LangGraph
- LangChain
- FAISS
- PyTorch Geometric
- React
- TypeScript
- PostgreSQL
- Redis
- Solidity
- Web3.py
- Polygon
- IPFS

Status: **Completed**

## Tech Stack

### Application

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### Content

- MDX
- `gray-matter`
- `next-mdx-remote`

Project case studies are stored in the repository and rendered through the application's content system.

### Testing

- Vitest
- Testing Library
- jsdom
- TypeScript
- ESLint

### Deployment

- GitHub
- GitHub Actions
- Vercel

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── app/
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── resume/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── MDXContent.tsx
│   ├── ProjectCard.tsx
│   ├── SiteFooter.tsx
│   └── SiteHeader.tsx
│
├── content/
│   └── projects/
│       ├── aegis.mdx
│       ├── minutesmeet.mdx
│       └── veritaschain.mdx
│
├── lib/
│   ├── content.ts
│   └── site.ts
│
├── public/
│   ├── profile.jpeg
│   ├── resume.pdf
│   └── projects/
│       ├── aegis/
│       ├── minutesmeet/
│       └── veritaschain/
│
├── tests/
│   ├── content.test.ts
│   ├── routes.test.ts
│   ├── setup.ts
│   └── site.test.ts
│
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── vitest.config.mts