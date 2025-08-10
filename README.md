Eremos
Autonomous swarm agents for early on-chain signal detection.
Eremos is a lightweight, open-source framework for deploying modular agents that autonomously monitor blockchain activity. Designed for developers and analysts, it cuts through the noise to provide early, actionable signals by tracking wallet clusters, mint patterns, and contract anomalies.

Our goal is to enhance transparency and insight across the Solana ecosystem as a public good. It's fully open-source, easily extendable, and designed to plug into dev or analyst workflows.

<p align="center">
  <img src="https://github.com/EremosCore/Eremos/raw/main/docs/therontphd2.png" alt="Agent Theron" width="155"/><br/>
  <em>Theron - Agent (000)</em>
</p>

Meet Theron - Agent-000
The first deployed agent in our swarm. Passive. Pattern-sensitive. Modular and extendable by design.

Agent-001 is coming soon! See the Teaser

⚡ Core Features
Modular Agents: Scoped logic for detecting wallet activity, contract spawns, and anomalies.

Signal Emission: Emits structured, high-quality signals for logging, alerting, or downstream applications.

Swarm Design: Each agent operates independently, leveraging shared utilities for maximum efficiency.

Extensible Core: Easily plug in custom watchers, inference layers, or triggers to build your own agents.

Minimal Output: Logs are clean and focused, only outputting what truly matters.

Launch Wallet Detection: Agents trace freshly funded wallets (e.g., from CEXs), track their contract interactions, and flag high-confidence deploys in real time.

Ghost Watcher: Monitors long-dormant wallets that suddenly become active again, useful for tracing old dev wallets or rug setups.

🎯 Example Signal
See a live token deployment signal emitted by an agent in action:

JSON

{
  "agent": "Observer",
  "type": "launch_detected",
  "glyph": "Δ",
  "hash": "sig_c7f9a3d2bc",
  "timestamp": "2025-06-12T04:41:25Z",
  "source": "agent-observer",
  "confidence": 0.91,
  "details": {
    "freshFunding": "kraken (wallet: 6Yxk...P2M8)",
    "timeToProbe": "4s (pump.fun interaction traced)",
    "tokenCreated": "04:41:17Z (tx: 5gW...pump)",
    "bundleInteractions": "5 bundle-linked wallets interacted within 8s"
  }
}
Signal Confidence: Each signal includes a confidence score (0-1), computed via agent-side scoring based on behavioral heuristics like CEX-origin funding, time between funding and deploy, and wallet linkage density.

🛠️ Tech Stack
Frontend: Next.js, Tailwind CSS

Backend: Node.js (TypeScript-based agent runner)

Language: TypeScript

Chain Layer: RPC watchers, mempool filters, native triggers

🚀 Getting Started
To get the swarm running, follow these simple steps:

Clone the repository:

Bash

git clone https://github.com/EremosCore/Eremos.git
cd Eremos
Install dependencies:

Bash

npm install
Set up your environment: Copy the example environment file and run the dev server.

Bash

cp .env.example .env.local
npm run dev
📁 Repository Structure
/agents: Agent templates and core logic

/utils: Shared signal and logging utilities

/types: TypeScript interfaces and definitions

/scripts: Bootstrap and development scripts

/docs: Project documentation, architecture, and official whitepaper

✨ Contributing
We welcome contributions to Eremos! This is an open framework, and your input helps us build a better experience for everyone.

Developers: If you're a TypeScript developer interested in agent-based systems, check out example.ts to build your own observer.

Designers & Artists: If you have ideas that fit the Eremos mythos, send us a DM on Twitter.

We're a small team and we love seeing active builders in the community.

🔗 Links
Twitter/X: @EremosCore

Website: Eremos.io

Whitepaper: v1.0 PDF

Maintained with 💛 by the Eremos Core team.
