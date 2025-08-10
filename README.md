# Eremos

![Eremos](docs/banner2.png)

**Autonomous swarm agents for early on-chain signal detection**

Eremos is a lightweight framework for deploying modular agents that monitor blockchain activity - tracking wallet clusters, mint patterns, and contract anomalies.  
Designed for devs who want low-noise, early signals embedded into their workflows.

---

<p align="center">
  <img src="docs/therontphd2.png" alt="Agent Theron" width="155"/><br/>
  <em>Theron - Agent (000)</em>
</p>

**Meet Theron - Agent-000**  
*The first deployed agent in the swarm. Passive. Pattern-sensitive.  
Modular and extendable by design.*

**Agent-001 Coming Soon** [Teaser](https://x.com/EremosCore/status/1949154939923833239)

---

## 📌 Bounty Info

This repository is part of an **open bounty**.  
If you want to participate and earn rewards:

### ✅ How to Submit
1. ⭐ **Star** and 👀 **Watch** this repo  
2. **Fork** the repo  
3. Make your improvement — could be:
   - Better README layout/structure (this is one example!)
   - Docs formatting improvements
   - Missing badge/shield
   - Helpful dev tooling
   - Better repo onboarding/organization
4. Commit and push changes to **your fork**  
5. Open a **clean Pull Request** here  
6. Submit the **PR link** to Superteam Earn

> **Tip:** Reviewers give *bonus points* for active GitHub contribution history.

---

## 📊 Badges

<p align="center">
<a href="https://github.com/EremosCore/Eremos/stargazers"><img src="https://img.shields.io/github/stars/EremosCore/Eremos?style=flat-square" alt="Stars Badge"/></a>
<a href="https://github.com/EremosCore/Eremos/network/members"><img src="https://img.shields.io/github/forks/EremosCore/Eremos?style=flat-square" alt="Forks Badge"/></a>
<a href="https://github.com/EremosCore/Eremos/issues"><img src="https://img.shields.io/github/issues/EremosCore/Eremos?style=flat-square" alt="Issues Badge"/></a>
<a href="https://github.com/EremosCore/Eremos/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EremosCore/Eremos?style=flat-square" alt="License Badge"/></a>
<a href="https://x.com/EremosCore"><img src="https://img.shields.io/twitter/follow/EremosCore?style=social" alt="Twitter Follow"/></a>
</p>

---

## Features

- **Modular Agents** - Scoped logic for detecting wallet activity, contract spawns, and anomalies  
- **Signal Emission** - Structured signals for logging, alerting, or downstream use  
- **Swarm Design** - Each agent operates independently with shared utilities  
- **Extensible Core** - Plug in watchers, inference layers, or custom triggers  
- **Minimal Output** - Log only what matters
- **Launch Wallet Detection** - Agents can trace freshly funded wallets (e.g. from CEXs), track their contract interactions, and flag high-confidence deploys in real time
- **Ghost Watcher** - Monitors long-dormant wallets that suddenly become active again. Useful for tracing old dev wallets or rug setups.

---

## Example Signal

An example signal emitted by an agent detecting a live token deployment:

```ts
[agent-observer] → fresh funding detected from kraken (wallet: 6Yxk...P2M8) at 04:41:12Z
[agent-observer] → contract probing detected within 4s (pump.fun interaction traced)
[agent-observer] → token created at 04:41:17Z (tx: 5gW...pump)
[agent-observer] → 5 bundle-linked wallets interacted within 8s of deploy
[agent-observer] → launch confidence spike (0.91) - emitting signal (elapsed: 13s)

{
  agent: "Observer",
  type: "launch_detected",
  glyph: "Δ",
  hash: "sig_c7f9a3d2bc",
  timestamp: "2025-06-12T04:41:25Z",
  source: "agent-observer",
  confidence: 0.91
}
