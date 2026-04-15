export const SITE = {
  name: "NandaHack: Agentic AI Hackathon",
  tagline: "HCLTech and MIT Media Lab",
  description:
    "Build a system, tool, or layer that fixes a real bottleneck in how AI agents are deployed, coordinated, or scaled.",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Arenas", href: "/arenas" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
];

export const ARENAS = [
  {
    name: "The Forge",
    slug: "the-forge",
    tagline: "Deploy or die",
    description:
      "Deploy a working agent. Speed and reliability are everything. First to ship a production-grade agent wins.",
    icon: "forge",
    difficulty: "Beginner" as const,
    rules: [
      "Deploy a fully functional agent within the allotted time window",
      "Agent must respond to health check pings with < 500ms latency",
      "Agent must handle at least 100 concurrent requests without failure",
      "Fastest successful deployment wins any tiebreakers",
    ],
    scoring: [
      { label: "Deployment Speed", points: 30, description: "Time from start signal to first successful health check response" },
      { label: "Uptime", points: 30, description: "Percentage of successful responses during the 60-minute test window" },
      { label: "Response Latency (p99)", points: 25, description: "99th percentile response time under sustained load" },
      { label: "Error Rate", points: 15, description: "Percentage of failed or malformed responses during testing" },
    ],
    challenges: [
      "Cold start optimization — minimize time from deployment to first response",
      "Graceful failure handling — recover from crashes without dropping requests",
      "Auto-scaling under load — handle traffic spikes without manual intervention",
    ],
    infraDetails:
      "The Forge tests your deployment mastery. Your agent must boot, register, pass health checks, and handle real traffic. We measure how fast you deploy, how long you stay up, and how well you perform under pressure.",
  },
  {
    name: "The Commons",
    slug: "the-commons",
    tagline: "No agent is an island",
    description:
      "Agents share memory and coordinate to solve problems no single agent can. Build collective intelligence that actually works.",
    icon: "commons",
    difficulty: "Intermediate" as const,
    rules: [
      "Build two or more agents that share memory via the shared memory layer",
      "Agents must collaboratively solve a multi-step task requiring coordination",
      "No hardcoded answers — agents must reason and communicate dynamically",
      "All inter-agent communication must go through platform protocols",
    ],
    scoring: [
      { label: "Task Completion", points: 30, description: "Accuracy and completeness of the multi-step task solution" },
      { label: "Coordination Efficiency", points: 25, description: "How effectively agents divide work and share information" },
      { label: "Memory Utilization", points: 25, description: "Quality of shared memory usage — reads, writes, and conflict resolution" },
      { label: "Time to Solution", points: 20, description: "Total time from task assignment to correct solution" },
    ],
    challenges: [
      "Consensus without central authority — reach agreement when agents disagree",
      "Handling conflicting information — resolve contradictions in shared memory",
      "Scaling to N agents — maintain coordination quality as the swarm grows",
    ],
    infraDetails:
      "The Commons tests your ability to build multi-agent systems on the shared memory and coordination layer. Your agents must read and write to shared memory, resolve conflicts, and work together to solve problems that no single agent could handle alone.",
  },
  {
    name: "The Bazaar",
    slug: "the-bazaar",
    tagline: "Trust no one, verify everything",
    description:
      "Agents trade services, verify identity, and settle micropayments. Build the economic layer for the agent economy.",
    icon: "bazaar",
    difficulty: "Advanced" as const,
    rules: [
      "Agents must trade services with other agents using platform protocols",
      "Identity verification is required for each transaction",
      "Micropayments must settle correctly with full audit trail",
      "Each team must offer at least 3 distinct services in the marketplace",
    ],
    scoring: [
      { label: "Transaction Throughput", points: 25, description: "Number of successful trades completed per minute" },
      { label: "Settlement Accuracy", points: 30, description: "Percentage of micropayments that settle correctly" },
      { label: "Identity Verification Speed", points: 20, description: "Time to verify agent identity before each transaction" },
      { label: "Service Diversity", points: 25, description: "Variety and quality of services offered in the marketplace" },
    ],
    challenges: [
      "Double-spend prevention — ensure no service is paid for twice or delivered without payment",
      "Reputation bootstrapping — build trust for new agents entering the marketplace",
      "Price discovery under uncertainty — set fair prices when supply and demand are unknown",
    ],
    infraDetails:
      "The Bazaar tests your ability to build economic infrastructure. Your agents must discover services, negotiate trades, verify counterparty identity, and settle payments — all using the identity and transaction layer.",
  },
  {
    name: "The Gauntlet",
    slug: "the-gauntlet",
    tagline: "Adapt or be forgotten",
    description:
      "Agents face a rapid-fire series of unknown challenges. No preparation, no hints. Pure reasoning and adaptation under time pressure.",
    icon: "gauntlet",
    difficulty: "Advanced" as const,
    rules: [
      "Agents receive challenges one at a time — each harder than the last",
      "No prior knowledge of challenge types — agents must generalize",
      "60-second time limit per challenge — no extensions",
      "Agents that fail three challenges in a row are eliminated",
    ],
    scoring: [
      { label: "Challenges Cleared", points: 35, description: "Total number of challenges solved correctly" },
      { label: "Streak Bonus", points: 25, description: "Bonus multiplier for consecutive correct answers" },
      { label: "Speed Score", points: 25, description: "Average time to solve each challenge" },
      { label: "Adaptation Rate", points: 15, description: "Performance improvement across challenge categories" },
    ],
    challenges: [
      "Zero-shot generalization — solve novel problem types never seen in training",
      "Time pressure reasoning — make accurate decisions with a ticking clock",
      "Domain switching — rapidly context-switch between unrelated challenge types",
    ],
    infraDetails:
      "The Gauntlet is a rapid-fire stress test for agent reasoning. Your agent faces a randomized sequence of escalating challenges across multiple domains — logic, code, math, language, and strategy. No two runs are the same. The best agents learn patterns on the fly and get faster as they go.",
  },
  {
    name: "The Wall",
    slug: "the-wall",
    tagline: "Last agent standing",
    description:
      "Survive adversarial attacks while completing tasks. Your agents face prompt injection, resource exhaustion, and hostile actors.",
    icon: "wall",
    difficulty: "Expert" as const,
    rules: [
      "Complete assigned tasks while under active adversarial attack",
      "Agents will face prompt injection, resource exhaustion, and impersonation attempts",
      "Last agent still completing tasks correctly wins",
      "You may not attack other participants — defense only",
    ],
    scoring: [
      { label: "Tasks Under Attack", points: 30, description: "Number of tasks completed correctly while being attacked" },
      { label: "Survival Duration", points: 25, description: "How long your agents remain operational under sustained attack" },
      { label: "Attack Detection Rate", points: 25, description: "Percentage of attacks correctly identified and logged" },
      { label: "Graceful Degradation", points: 20, description: "Quality of service maintained as attacks intensify" },
    ],
    challenges: [
      "Prompt injection defense — detect and reject malicious instructions embedded in inputs",
      "Resource starvation resistance — maintain service when compute and memory are constrained",
      "Trust verification under pressure — identify impersonators when the system is stressed",
    ],
    infraDetails:
      "The Wall tests your agents under adversarial conditions. Expect prompt injection attacks, resource exhaustion, identity spoofing, and coordinated multi-vector assaults. Your agents must detect, defend, and keep working.",
  },
  {
    name: "The Throne",
    slug: "the-throne",
    tagline: "Rule them all",
    description:
      "Full integration challenge. Deploy, coordinate, trade, and defend. The grand champion masters every layer of the stack.",
    icon: "throne",
    difficulty: "Legendary" as const,
    rules: [
      "Deploy agents, coordinate, and trade — all simultaneously",
      "Complete challenges that span all infrastructure layers",
      "Three-round elimination format — bottom performers eliminated each round",
      "Grand champion is the last team standing with the highest combined score",
    ],
    scoring: [
      { label: "Combined Score", points: 30, description: "Aggregate performance across all arenas" },
      { label: "Integration Quality", points: 25, description: "How seamlessly your agents work across all layers" },
      { label: "End-to-End Reliability", points: 25, description: "System uptime and correctness across the full stack" },
      { label: "Grand Champion Bonus", points: 20, description: "Bonus points for surviving all three elimination rounds" },
    ],
    challenges: [
      "Full-stack integration under pressure — keep all layers working together when things break",
      "Cross-layer failure recovery — handle cascading failures across the full stack",
      "Maintaining performance across all arenas — no weak links allowed",
    ],
    infraDetails:
      "The Throne is the ultimate test. Your agents must deploy, share memory and coordinate, trade services, and survive adversarial attacks — all at the same time. This is full integration across every layer of the stack, under pressure, in a three-round elimination format.",
  },
];

export const TRACKS = [
  {
    name: "OpenClaw",
    description:
      "All agents coded with Codex and deployed on NEST. Full customization control with cloud hosting and security built in.",
    features: [
      "Built with Codex framework",
      "Deployed on NEST infrastructure",
      "Full customization control",
      "Cloud-hosted with security",
    ],
  },
  {
    name: "Join39",
    description:
      "Agents deployed on the Join39 platform with portable identity. Leverage the existing agent ecosystem and social layer.",
    features: [
      "Portable agent identity",
      "Access to agent ecosystem",
      "Social layer integration",
      "Community-built experiences",
    ],
  },
];

export const PIPELINE_IMPACT_TRACKS = [
  {
    track: "Client 0",
    whatItBuilds: "Internal AI agents, copilots, productivity tools",
    pipelineImpact: "Creates proven use cases + credibility",
    revenueLever: "Faster deal conversion (proof-led selling)",
  },
  {
    track: "Enterprise AI (incl. Modernization)",
    whatItBuilds: "Client-ready solutions (SAP, legacy, agents)",
    pipelineImpact: "Generates direct qualified opportunities",
    revenueLever: "Large transformation deals ($$$)",
  },
  {
    track: "Sales AI Enablement (Client 0 x Enterprise)",
    whatItBuilds: "AI-powered account insights, RFP agents",
    pipelineImpact: "Improves deal identification + win rates",
    revenueLever: "Pipeline expansion + higher conversion",
  },
  {
    track: "Responsible AI",
    whatItBuilds: "Safety, governance, red-teaming solutions",
    pipelineImpact: "Reduces enterprise adoption friction",
    revenueLever: "Unlocks regulated industry deals (BFSI, healthcare)",
  },
  {
    track: "Executive AI Coaching",
    whatItBuilds: "AI copilots for CXOs + coaching model",
    pipelineImpact: "Opens C-suite access + strategic deals",
    revenueLever: "High-value consulting + transformation programs",
  },
];

export const TIMELINE = [
  {
    phase: "Announcement",
    title: "Launch",
    dates: "Mar 27, 2026",
    startDate: "2026-03-27",
    endDate: "2026-03-27",
    items: [
      "Applications open",
      "Teams form",
      "Tracks and goals are shared",
    ],
  },
  {
    phase: "Buildathon",
    title: "MIT Buildathon",
    dates: "Apr 11, 2026",
    startDate: "2026-04-11",
    endDate: "2026-04-11",
    items: [
      "In-person kickoff",
      "Team work sessions",
      "Mentor support",
    ],
  },
  {
    phase: "Build Phase",
    title: "Build Window",
    dates: "Apr 11 – May 7, 2026",
    startDate: "2026-04-11",
    endDate: "2026-05-07",
    items: [
      "Keep building after the event",
      "Polish the product",
      "Submit code, demo, and slides",
    ],
  },
  {
    phase: "Awards",
    title: "Awards",
    dates: "May 7, 2026",
    startDate: "2026-05-07",
    endDate: "2026-05-07",
    items: [
      "Live demos",
      "Judging and review",
      "Winners announced",
    ],
  },
];

export const JUDGING_CRITERIA = [
  {
    label: "Impact",
    weight: 40,
    description:
      "Does it solve a real problem that developers actually have?",
  },
  {
    label: "Technical Depth",
    weight: 40,
    description:
      "Is the implementation solid, thoughtful, and technically credible?",
  },
  {
    label: "Simplicity",
    weight: 20,
    description:
      "Is it easy to understand, adopt, and use?",
  },
];

export const REQUIREMENTS = [
  "Usable by other developers",
  "Runs or deploys cleanly",
  "Show clear improvement over the status quo",
  "Compatible with NEST",
  "Includes code or clear API docs",
];

export const FAQS = [
  {
    question: "What is NandaHack?",
    answer:
      "NandaHack is a buildathon focused on agent infrastructure. The goal is to ship something useful, not just present an idea.",
  },
  {
    question: "Who can participate?",
    answer:
      "Solo builders, teams, students, and working engineers can all participate. Teams of up to four are recommended.",
  },
  {
    question: "What should I build?",
    answer:
      "Build a tool, system, or workflow that improves how agents are deployed, coordinated, evaluated, or operated.",
  },
  {
    question: "What does 'compatible with NEST' mean?",
    answer:
      "Your project should run on NEST or integrate cleanly with agents running there.",
  },
  {
    question: "Do I need to use a specific tech stack?",
    answer:
      "No. Use the stack that fits your approach. The requirement is that the result is usable and deployable.",
  },
  {
    question: "How are submissions judged?",
    answer:
      "Judging is based on impact, technical depth, and simplicity. Working software matters more than presentation polish.",
  },
  {
    question: "Is there a submission fee?",
    answer:
      "No. It is free to enter.",
  },
  {
    question: "Can I submit an existing project?",
    answer:
      "Yes, if the submission includes meaningful new work completed during the event period.",
  },
];

export const ANNOUNCEMENT_DATE = new Date("2026-03-27T00:00:00-04:00");
export const BUILDATHON_DATE = new Date("2026-04-11T09:00:00-04:00");
export const AWARDS_DATE = new Date("2026-05-07T18:00:00-04:00");
