import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Resume",
  description: "Resume of Prabhat Tiwari, software engineer.",
};

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-24 pt-16 sm:pt-24">
      {/* Header */}
      <div className="border-b border-[var(--line)] pb-10">
        <Link
          href="/"
          className="font-mono text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          ← Back home
        </Link>

        <div className="mt-12 flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-8">
          {/* Profile image */}
          <div className="shrink-0">
            <Image
              src="/profile.jpeg"
              alt="Prabhat Tiwari"
              width={200}
              height={300}
              priority
              className="h-28 w-28 rounded-xl border border-[var(--line)] object-cover object-center sm:h-30 sm:w-30"
            />
          </div>

          {/* Identity */}
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Resume
            </p>

            <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-tight tracking-tight sm:text-6xl">
              Prabhat Tiwari
            </h1>

            {/* Contact icons */}
            <div className="mt-6 flex items-center gap-5">
              <a
                href="mailto:rajkantiwari1412@gmail.com"
                aria-label="Email Prabhat Tiwari"
                title="Email"
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                <EmailIcon />
              </a>

              <a
                href="https://github.com/quantababy"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/quantababy"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://leetcode.com/prabhat_4884"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode profile"
                title="LeetCode"
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                <LeetCodeIcon />
              </a>
            </div>

            <p className="mt-4 font-mono text-xs text-[var(--muted)]">
              Greater Noida, India
            </p>
          </div>
        </div>

        {/* Resume actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[var(--foreground)] px-5 py-3 text-sm font-medium !text-[var(--background)] transition-opacity hover:opacity-80"
          >
            Open PDF ↗
          </a>

          <a
            href="/resume.pdf"
            download
            className="rounded-md border border-[var(--line)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Summary */}
      <section className="border-b border-[var(--line)] py-10">
        <SectionHeading>Summary</SectionHeading>

        <p className="mt-5 max-w-3xl leading-8 text-[var(--muted)]">
          Final-year Computer Science student skilled in Python and
          JavaScript, with strong data structures and algorithms fundamentals.
          Experienced in building real-time backend systems using FastAPI,
          WebSockets, and Node.js, along with REST APIs and databases such as
          PostgreSQL and MongoDB. Built complete AI/ML and blockchain projects
          independently, from system design through implementation and testing.
        </p>
      </section>

      {/* Education */}
      <section className="border-b border-[var(--line)] py-10">
        <SectionHeading>Education</SectionHeading>

        <div className="mt-6 space-y-7">
          <ResumeItem
            title="Bachelor of Technology — Computer Science and Engineering"
            organization="Galgotias College of Engineering and Technology"
            location="Greater Noida, India"
            period="2023 – Present"
          />

          <ResumeItem
            title="Intermediate — PCM"
            organization="Sunbeam School"
            location="Ballia, India"
            period="2022"
          />
        </div>
      </section>

      {/* Skills */}
      <section className="border-b border-[var(--line)] py-10">
        <SectionHeading>Technical Skills</SectionHeading>

        <div className="mt-6 space-y-5">
          <SkillGroup
            label="Languages"
            items="Python, Java, JavaScript/TypeScript, C, C++, SQL, Solidity"
          />

          <SkillGroup
            label="Backend / Infrastructure"
            items="FastAPI, WebSockets, Node.js, Express.js, PostgreSQL, Redis, MongoDB, Docker"
          />

          <SkillGroup
            label="Frontend / Tools"
            items="Git/GitHub, ReactJS, Redux, NextJS, VS Code, Linux, DataGrip, IntelliJ IDEA"
          />

          <SkillGroup
            label="AI / ML"
            items="PyTorch, PyTorch Geometric, Hugging Face Transformers, LangChain, FAISS, XGBoost, scikit-learn"
          />

          <SkillGroup
            label="Blockchain"
            items="Web3.py, Hardhat, IPFS"
          />
        </div>
      </section>

      {/* Projects */}
      <section className="border-b border-[var(--line)] py-10">
        <SectionHeading>Projects</SectionHeading>

        <div className="mt-8 space-y-10">
          <Project
            title="VeritasChain"
            subtitle="Decentralized AI Fact-Checking Pipeline"
            bullets={[
              "Built a FastAPI + WebSocket backend streaming real-time claim submissions and verdicts to a React/TypeScript dashboard.",
              "Designed an efficient claim-processing core using Trie/heap-based deduplication feeding a LangChain + FAISS RAG verdict-generation module and a PyTorch Geometric GNN for dynamic source-trust scoring.",
              "Enforced structured, schema-validated service outputs including verdict, confidence, and citations via Pydantic, and built a Solidity + Web3.py bridge for tamper-proof, IPFS-backed verdict storage.",
            ]}
          />

          <Project
            title="MinutesMeet"
            subtitle="AI Meeting Minutes Generator"
            bullets={[
              "Engineered a speech-to-text and text-to-speech pipeline leveraging frontier LLMs, enabling meeting transcription and natural voice synthesis in real time.",
              "Integrated Whisper ASR for transcription and transformer-based models for summarization, producing structured meeting minutes with contextual information.",
              "Built a FastAPI service layer with modular endpoints, supporting deployment and integration into collaborative tools.",
            ]}
          />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-10">
        <SectionHeading>Certifications & Courses</SectionHeading>

        <ul className="mt-6 space-y-3 text-[var(--muted)]">
          <li>• Complete Web Development Course</li>
          <li>
            • The Complete Data Structures and Algorithms Course in Python
          </li>
          <li>
            • AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents
          </li>
          <li>
            • Machine Learning A-Z [2026]: ML, DL, AI with AWS, Python
          </li>
          <li>
            • Blockchain A-Z: Build a Blockchain, Crypto, & Smart Contract
          </li>
        </ul>
      </section>
    </section>
  );
}

/* ---------- Reusable Resume Components ---------- */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}

function ResumeItem({
  title,
  organization,
  location,
  period,
}: {
  title: string;
  organization: string;
  location: string;
  period: string;
}) {
  return (
    <article className="grid gap-2 sm:grid-cols-[1fr_auto] sm:gap-6">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>

        <p className="mt-1 text-[var(--muted)]">{organization}</p>

        <p className="mt-1 text-sm text-[var(--muted)]">{location}</p>
      </div>

      <p className="font-mono text-xs text-[var(--muted)]">{period}</p>
    </article>
  );
}

function SkillGroup({
  label,
  items,
}: {
  label: string;
  items: string;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-6">
      <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
        {label}
      </p>

      <p className="leading-7 text-[var(--muted)]">{items}</p>
    </div>
  );
}

function Project({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <article>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-xl font-medium">{title}</h3>

        <p className="font-mono text-xs text-[var(--muted)]">{subtitle}</p>
      </div>

      <ul className="mt-4 space-y-3 text-[var(--muted)]">
        {bullets.map((bullet) => (
          <li key={bullet} className="pl-5 leading-7">
            <span className="mr-2" aria-hidden="true">
              •
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ---------- Icons ---------- */

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.25c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M5.2 3.2A2.2 2.2 0 1 1 5.2 7.6 2.2 2.2 0 0 1 5.2 3.2ZM3.3 9h3.8v11.7H3.3V9Zm6.2 0h3.6v1.6h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.49 4.49 5.73v6.31h-3.8v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.69H9.5V9Z" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.7 17.3h-5.3a5.3 5.3 0 0 1 0-10.6h1.7" />
      <path d="M14.1 4.1 10 8.2l4.1 4.1" />
      <path d="M13.1 17.3h4.5a3.4 3.4 0 0 0 0-6.8h-1.2" />
    </svg>
  );
}