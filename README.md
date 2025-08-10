# Eremos

![Eremos Banner](docs/banner2.png)

### Autonomous swarm agents for early on-chain signal detection.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Twitter: @EremosCore](https://img.shields.io/twitter/follow/EremosCore?style=social)](https://twitter.com/EremosCore)
[![Website](https://img.shields.io/badge/Website-Eremos.io-blue)](https://www.eremos.io/)

---

Eremos is a lightweight, open-source framework for deploying modular agents that autonomously monitor blockchain activity. Designed for developers and analysts, it cuts through the noise to provide early, actionable signals by tracking wallet clusters, mint patterns, and contract anomalies.

Our goal is to enhance transparency and insight across the Solana ecosystem as a public good.

---

<p align="center">
  <img src="docs/therontphd2.png" alt="Agent Theron" width="155"/><br/>
  <em>Theron - Agent (000)</em>
</p>

### **Meet Theron - Agent-000**
*The first deployed agent in our swarm. Passive. Pattern-sensitive. Modular and extendable by design.*

**Agent-001** is coming soon! [See the Teaser](https://x.com/EremosCore/status/1949154939923833239)

---

## ⚡ Core Features

-   **Modular Agents:** Scoped logic for detecting wallet activity, contract spawns, and anomalies.
-   **Signal Emission:** Emits structured, high-quality signals for logging, alerting, or downstream applications.
-   **Swarm Design:** Each agent operates independently, leveraging shared utilities for maximum efficiency.
-   **Extensible Core:** Easily plug in custom watchers, inference layers, or triggers to build your own agents.
-   **Minimal Output:** Logs are clean and focused, only outputting what truly matters.
-   **Launch Wallet Detection:** Agents trace freshly funded wallets (e.g., from CEXs), track their contract interactions, and flag high-confidence deploys in real time.
-   **Ghost Watcher:** Monitors long-dormant wallets that suddenly become active again, useful for tracing old dev wallets or rug setups.

---

## 🎯 Example Signal

See a live token deployment signal emitted by an agent in action:

```json
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
