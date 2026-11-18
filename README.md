<div align="center">

# 🤖 AGI-Bot (Adithya-Bot)

### Autonomous AI Coworkers • Self-Hosted • 100% Independent

A modular, self-hostable workspace for autonomous AI coworkers.<br>
Choose your models. Bring your agents. Own your infrastructure.

<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE)
[![Platform: Windows | macOS | Linux](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-6E6AE0?style=for-the-badge)](#desktop-app)
[![Build: Automated Actions](https://img.shields.io/badge/Build-GitHub%20Actions-success?style=for-the-badge)](https://github.com/Hemanathanv/AGI-Bot/actions)

</div>

---

## ✨ Key Highlights

- **Dedicated Computer Per Agent:** Every AI coworker operates in its own isolated environment (dedicated browser session, sandboxed files, and terminal tools) rather than sharing a single chat window.
- **Zero Mandatory Cloud Sign-In:** 100% self-contained. No external cloud account or telemetry lock-in.
- **Bring Your Own Keys (BYOK):** Direct connection to OpenAI, Anthropic Claude, Google Gemini, Groq, or local models via Ollama.
- **Self-Contained Desktop Installer:** Automated background environment provisioning without requiring a manual Docker Desktop setup.
- **Multi-Agent & Framework Agnostic:** Built around standard agent protocols, supporting LangGraph, CrewAI, PydanticAI, Mastra, Google ADK, and Claude Agent SDK.
- **Interactive Human-in-the-Loop:** Seamless takeover whenever a bot requires approval, authentication, or human guidance.

---

## 🚀 Desktop App (.exe Installer)

AGI-Bot includes a native cross-platform desktop application built with **Tauri (Rust + React)**.

### Downloading the Windows Installer

1. Navigate to the **[Actions Tab](https://github.com/Hemanathanv/AGI-Bot/actions)** in this repository.
2. Select **"Build Windows EXE Bundle"**.
3. Choose the latest workflow run and download the **`Adithya-Bot-Windows-x64-Setup`** artifact.
4. Run the installer to unpack the background engine machine and start the application.

---

## 🛠️ Running from Source

### Prerequisites

- [Bun](https://bun.sh/) (v1.2+) or [Node.js](https://nodejs.org/) (v20+)
- [Rust & Cargo](https://rustup.rs/) (latest stable)
- C++ Build Tools for Windows (Visual Studio Build Tools)
- Docker / Podman (for running container sandboxes)

### 1. Clone the Repository

```bash
git clone https://github.com/Hemanathanv/AGI-Bot.git
cd AGI-Bot
```

### 2. Configure Environment

Copy the example environment file and configure your API keys:

```bash
cp .env.example .env
```

Add your preferred model provider keys:
```env
OPENAI_API_KEY=your-openai-api-key
ANTHROPIC_API_KEY=your-anthropic-api-key
GEMINI_API_KEY=your-gemini-api-key
```

### 3. Launch Desktop Development Build

```bash
cd desktop
bun install
bun run tauri dev
```

### 4. Running Backend Services with Docker Compose

To start the local PostgreSQL database, agent supervisor, and computer sandboxes:

```bash
docker compose --env-file backend-images.env --env-file .env up -d
```

---

## 🏗️ Architecture

```
┌────────────────────────────────────────────────────────┐
│                   AGI-Bot Desktop                      │
│        (Tauri Native Shell + React Frontend)           │
└──────────────────────────┬─────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                                   ▼
┌──────────────────┐               ┌──────────────────┐
│ Agent Computers  │               │   Model Gateway  │
│ (Isolated Browser│               │ (Direct BYOK API │
│  & File Sandbox) │               │  OpenAI/Claude)  │
└──────────────────┘               └──────────────────┘
```

- **Frontend & Desktop Shell (`desktop/`):** React 19 UI with animated bot indicators, native window controls, and local session management.
- **Engine Machine (`desktop/src-tauri/`):** Rust background manager that provisions rootless container execution and local database storage.
- **Agent Sandbox (`agent-computer/`):** Isolated execution container for browser navigation, tool invocation, and file manipulation.

---

## 📦 Building the Standalone Installer

To build the installer package locally:

```bash
cd desktop
bun run tauri build
```

The output setup bundle will be generated under:
`desktop/src-tauri/target/release/bundle/nsis/`

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
