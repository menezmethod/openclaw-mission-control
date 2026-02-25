"use client";

const laneSnapshot = [
  {
    title: "Mission Backlog",
    badge: "future",
    tasks: [
      {
        title: "Define launch narrative for Atlas",
        detail: "Capture dependencies, approvals, and comms map.",
        owner: "Ops Strategy",
        status: "R&D",
      },
      {
        title: "Catalog agent runbooks",
        detail: "Link to telemetry + catalog updates.",
        owner: "Tech Ops",
        status: "Ready",
      },
    ],
  },
  {
    title: "In Flight",
    badge: "active",
    tasks: [
      {
        title: "Stabilize release cohort",
        detail: "Lean on agent hello checks and incident senses.",
        owner: "Launch Ops",
        status: "Monitoring",
      },
      {
        title: "Queue approvals for copy freeze",
        detail: "Awaiting security + legal review.",
        owner: "Governance",
        status: "Pending",
      },
      {
        title: "Agent Delta handoff",
        detail: "Sync human with autonomous crew.",
        owner: "Agent Leads",
        status: "Live",
      },
    ],
  },
  {
    title: "Review &amp; Approvals",
    badge: "focus",
    tasks: [
      {
        title: "Security sign-off",
        detail: "Auto-check reports and run manual QA.",
        owner: "Security",
        status: "Awaiting",
      },
      {
        title: "Launch readiness pulse",
        detail: "Confirm main board KPIs within guardrails.",
        owner: "Command",
        status: "Healthy",
      },
    ],
  },
  {
    title: "Launch Ready",
    badge: "wind",
    tasks: [
      {
        title: "Prep deployment comms",
        detail: "Publish release notes and playbooks.",
        owner: "Mission Control",
        status: "Draft",
      },
    ],
  },
];

const signalFeed = [
  "Agent Delta moved task to review",
  "Approvals queue trimmed to 3 items",
  "Launch pipeline ready for gating",
];

const boardApprovals = [
  {
    title: "Deploy window confirmed",
    status: "ready",
  },
  {
    title: "Copy reviewed",
    status: "waiting",
  },
  {
    title: "Security sign-off",
    status: "waiting",
  },
];

export function MainBoardPreview() {
  return (
    <section
      id="main-board"
      className="main-board-preview surface-panel"
      aria-label="Main board preview"
    >
      <header className="main-board-header">
        <div>
          <p className="main-board-label">Main Board preset</p>
          <h3>Main Board</h3>
          <p className="main-board-subtitle">
            Default workspace view for Mission Control by Menez / OpenClaw Ops.
          </p>
        </div>
        <div className="main-board-header-actions">
          <span className="main-board-pill">Live</span>
          <span className="main-board-pill muted">Default workspace</span>
        </div>
      </header>
      <div className="main-board-body">
        <div className="lane-columns">
          {laneSnapshot.map((lane) => (
            <article className="lane-column" key={lane.title}>
              <div className="lane-title">
                <span>{lane.title}</span>
                <span className="lane-count">{lane.tasks.length}</span>
              </div>
              <div className="lane-cards">
                {lane.tasks.map((task) => (
                  <div className="lane-card" key={task.title}>
                    <div className="lane-card-title">{task.title}</div>
                    <p className="lane-card-detail">{task.detail}</p>
                    <div className="lane-card-meta">
                      <span className="lane-card-owner">{task.owner}</span>
                      <span className="lane-card-status">{task.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="board-panels">
          <div className="board-panel">
            <div className="panel-title">Signals</div>
            <ul>
              {signalFeed.map((signal) => (
                <li key={signal}>
                  <span>{signal}</span>
                  <time>Now</time>
                </li>
              ))}
            </ul>
          </div>
          <div className="board-panel">
            <div className="panel-title">Approval posture</div>
            <ul>
              {boardApprovals.map((approval) => (
                <li key={approval.title}>
                  <span>{approval.title}</span>
                  <span className={`approval-pill ${approval.status}`}>
                    {approval.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
