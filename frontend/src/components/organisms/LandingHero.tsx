"use client";

import Link from "next/link";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  isClerkEnabled,
} from "@/auth/clerk";
import { MainBoardPreview } from "@/components/organisms/MainBoardPreview";

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 12L10 8L6 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const heroFeatures = [
  "Mission-grade lanes",
  "Signal-ready approvals",
  "Agent health guardrails",
  "Default workspace focus",
];

const featureHighlights = [
  {
    title: "Main board first",
    description:
      "Ship with pre-built lanes, cards, and signal panels that reflect Mission Control, out of the box.",
  },
  {
    title: "Signal-ready approvals",
    description:
      "Queues call out blockers, portal approvals, and live updates so nothing slips between agents and humans.",
  },
  {
    title: "Agent health guardrails",
    description:
      "Keep human leads, runbooks, and automation health in view inside the same board without extra dashboards.",
  },
  {
    title: "Workspace continuity",
    description:
      "Preserve the Main Board preset as the default workspace so every mission starts with the same intent.",
  },
];

export function LandingHero() {
  const clerkEnabled = isClerkEnabled();

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-label">Mission Control by Menez / OpenClaw Ops</div>
          <h1>
            Keep the <span className="hero-highlight">Main Board</span> aligned across every mission.
          </h1>
          <p>
            Mission Control keeps approvals, agent status, and live signals close to the board,
            bridging autonomous work with human oversight.
          </p>

          <div className="hero-actions">
            <SignedOut>
              {clerkEnabled ? (
                <>
                  <SignInButton
                    mode="modal"
                    forceRedirectUrl="/boards"
                    signUpForceRedirectUrl="/boards"
                  >
                    <button type="button" className="btn-large primary">
                      Open Boards <ArrowIcon />
                    </button>
                  </SignInButton>
                  <SignInButton
                    mode="modal"
                    forceRedirectUrl="/boards/new"
                    signUpForceRedirectUrl="/boards/new"
                  >
                    <button type="button" className="btn-large secondary">
                      Create Board
                    </button>
                  </SignInButton>
                </>
              ) : (
                <>
                  <Link href="/boards" className="btn-large primary">
                    Open Boards <ArrowIcon />
                  </Link>
                  <Link href="/boards/new" className="btn-large secondary">
                    Create Board
                  </Link>
                </>
              )}
            </SignedOut>
            <SignedIn>
              <Link href="/boards" className="btn-large primary">
                Open Boards <ArrowIcon />
              </Link>
              <Link href="/boards/new" className="btn-large secondary">
                Create Board
              </Link>
            </SignedIn>
          </div>

          <div className="hero-features">
            {heroFeatures.map((label) => (
              <div key={label} className="hero-feature">
                <div className="feature-icon">✓</div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visuals">
          <div className="command-surface">
            <div className="surface-header">
              <div className="surface-title">Command Surface</div>
              <div className="live-indicator">
                <div className="live-dot" />
                LIVE
              </div>
            </div>
            <div className="surface-subtitle">
              <h3>Ship work without losing the thread.</h3>
              <p>
                Tasks, approvals, and agent status stay synced across the Main Board.
              </p>
            </div>
            <div className="metrics-row">
              {[
                { label: "Boards", value: "12" },
                { label: "Agents", value: "08" },
                { label: "Tasks", value: "46" },
              ].map((item) => (
                <div key={item.label} className="metric">
                  <div className="metric-value">{item.value}</div>
                  <div className="metric-label">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="surface-content">
              <div className="content-section">
                <h4>Board — In Progress</h4>
                {[
                  "Cut release candidate",
                  "Triage approvals backlog",
                  "Stabilize agent handoffs",
                ].map((title) => (
                  <div key={title} className="status-item">
                    <div className="status-icon progress">⊙</div>
                    <div className="status-item-content">
                      <div className="status-item-title">{title}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="content-section">
                <h4>Approvals — 3 Pending</h4>
                {[
                  { title: "Deploy window confirmed", status: "ready" as const },
                  { title: "Copy reviewed", status: "waiting" as const },
                  { title: "Security sign-off", status: "waiting" as const },
                ].map((item) => (
                  <div key={item.title} className="approval-item">
                    <div className="approval-title">{item.title}</div>
                    <div className={`approval-badge ${item.status}`}>
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: "2rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div className="content-section">
                <h4>Signals — Updated Moments Ago</h4>
                {[
                  { text: "Agent Delta moved task to review", time: "Now" },
                  { text: "Growth Ops hit WIP limit", time: "5m" },
                  { text: "Release pipeline stabilized", time: "12m" },
                ].map((signal) => (
                  <div key={signal.text} className="signal-item">
                    <div className="signal-text">{signal.text}</div>
                    <div className="signal-time">{signal.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <MainBoardPreview />
        </div>
      </section>

      <section className="features-section" id="capabilities">
        <div className="features-grid">
          {featureHighlights.map((feature, idx) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-number">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Start with one board. Grow into Mission Control.</h2>
          <p>
            Onboard a board, lock the Main Board preset, and keep approvals, lanes,
            and signals visible from day one.
          </p>
          <div className="cta-actions">
            <SignedOut>
              {clerkEnabled ? (
                <>
                  <SignInButton
                    mode="modal"
                    forceRedirectUrl="/boards/new"
                    signUpForceRedirectUrl="/boards/new"
                  >
                    <button type="button" className="btn-large white">
                      Create Board
                    </button>
                  </SignInButton>
                  <SignInButton
                    mode="modal"
                    forceRedirectUrl="/boards"
                    signUpForceRedirectUrl="/boards"
                  >
                    <button type="button" className="btn-large outline">
                      View Boards
                    </button>
                  </SignInButton>
                </>
              ) : (
                <>
                  <Link href="/boards/new" className="btn-large white">
                    Create Board
                  </Link>
                  <Link href="/boards" className="btn-large outline">
                    View Boards
                  </Link>
                </>
              )}
            </SignedOut>

            <SignedIn>
              <Link href="/boards/new" className="btn-large white">
                Create Board
              </Link>
              <Link href="/boards" className="btn-large outline">
                View Boards
              </Link>
            </SignedIn>
          </div>
        </div>
      </section>
    </>
  );
}
