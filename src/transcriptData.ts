export interface TranscriptEntry {
  speaker: string;
  text: string;
  role?: string;
  style?: string;
  note?: string;
}

export interface SpeakerProfile {
  name: string;
  role: string;
  style: string;
  pace: string;
  accent: string;
  color: string;
}

export const SPEAKERS: Record<string, SpeakerProfile> = {
  "Speaker 1": {
    name: "Alex Rivera",
    role: "Authoritative main news anchor",
    style: "Vocal Smile",
    pace: "Rapid Fire",
    accent: "American (Gen)",
    color: "cyan",
  },
  "Speaker 2": {
    name: "Dr. Lena Kwan", // Inferred from Speaker 1's intro
    role: "Professional field correspondent / AI Ethics Researcher",
    style: "Newscaster / Thoughtful",
    pace: "Rapid Fire",
    accent: "American (Gen)",
    color: "emerald",
  },
  "Speaker 3": {
    name: "Marcus Hale",
    role: "AI Test Automation Specialist",
    style: "Amused / Excited",
    pace: "Brisk",
    accent: "American (Gen)",
    color: "amber",
  },
  "Speaker 4": {
    name: "Priya Sharma",
    role: "Human-Centered QA / Sustainability Advocate",
    style: "Impressed / Empathetic / Practical",
    pace: "Measured",
    accent: "American (Gen)",
    color: "rose",
  },
  "Speaker 5": {
    name: "Jamal Reed",
    role: "Quality Transformation Lead (Banking)",
    style: "Serious / Professional / Insightful",
    pace: "Steady",
    accent: "American (Gen)",
    color: "indigo",
  },
};

export const TRANSCRIPT: TranscriptEntry[] = [
  {
    speaker: "Speaker 1",
    note: "warm and enthusiastic",
    text: "Hello and welcome back to QA Unscripted, the podcast that gets real about quality in tech. I'm your host, Alex Rivera. Today we're tackling one of the biggest shifts in our industry: how Artificial Intelligence is completely rewriting the job description for QA professionals."
  },
  {
    speaker: "Speaker 1",
    note: "passionate",
    text: "Not replacing them — elevating them. From people who used to grind out test cases and chase brittle scripts... to AI mentors who teach machines about products and people, ethical guardians who protect users from bias and harm, and sustainability advocates who care about the planet while they ship quality software."
  },
  {
    speaker: "Speaker 1",
    note: "welcoming",
    text: "Joining me today are four fantastic voices who've lived this transition: Dr. Lena Kwan, AI ethics and QA researcher... Marcus Hale, who's scaling AI test automation at one of the world's biggest e-commerce sites... Priya Sharma, who's making QA greener and more human-centered... And Jamal Reed, who's leading quality transformation inside a heavily regulated bank."
  },
  {
    speaker: "Speaker 1",
    note: "grateful",
    text: "Guys and Lena, thank you so much for being here. Lena, start us off — what's one thing that surprised you most about how AI is hitting QA teams right now?"
  },
  {
    speaker: "Speaker 2",
    note: "thoughtful",
    text: "Thanks for having me, Alex. Honestly? How fast the \"happy path\" gets solved, and how often the real problems hide in the edges that AI still can't feel. I've seen teams celebrate 80% automation coverage, only to watch production incidents spike because the AI-generated tests never modeled what a frustrated user actually does."
  },
  {
    speaker: "Speaker 3",
    note: "amused [chuckles]",
    text: "Oh man, I feel that in my bones. Just last month I asked Claude to generate a full Playwright framework for our checkout flow. Four minutes later — boom, two hundred lines of clean-looking code. I ran it... green across the board. Then our exploratory tester tried something stupid on purpose: added five items, killed the network mid-flow, and hammered the checkout button out of impatience. Duplicate charge. The AI never even considered that sequence because it doesn't get human frustration."
  },
  {
    speaker: "Speaker 4",
    note: "impressed",
    text: "That's such a perfect example of why we still need humans in the loop for the \"feel\" of the product. Automation verifies the function works. Humans judge whether it makes sense to a real person on a real device with a real on-screen keyboard covering the input field. We've caught that exact bug in our mobile app — automation gave us the green light, real device testing exposed the disaster."
  },
  {
    speaker: "Speaker 5",
    note: "serious",
    text: "And in regulated spaces like mine, that \"stupid on purpose\" testing isn't optional — it's compliance theater if you can't explain why a test passed or failed. AI is a black box sometimes. That's why we're moving to hybrid models."
  },
  {
    speaker: "Speaker 1",
    note: "engaged",
    text: "I love how quickly we got into real stories. Let's lean into that. Question one for the group: How is AI actually transforming the day-to-day of quality assurance right now — the opportunities, the new headaches, and where humans still have irreplaceable value?"
  },
  {
    speaker: "Speaker 3",
    note: "excited",
    text: "Opportunity-wise? It's night and day. Tools like Cursor and Claude Code let you spin up an entire test framework in minutes instead of days. Self-healing locators, visual validation AI, risk-based prioritization — stuff that used to take a team of five a week now happens in an afternoon. Projections say 80% of tests will be AI-generated by 2028. That frees us from the soul-crushing maintenance of brittle scripts."
  },
  {
    speaker: "Speaker 2",
    note: "cautionary",
    text: "But — and this is a big but — it introduces new technical debt. Hallucinations. False positives. AI confidently generates tests that look perfect but miss critical edge cases like session timeouts in the middle of a flow. You still need a human to review the logic, not just the syntax. And the maintenance overhead of cleaning up after the AI can be brutal if you're not careful."
  },
  {
    speaker: "Speaker 4",
    note: "concerned",
    text: "Plus the hidden environmental cost. Every time you regenerate and rerun because the AI hallucinated, you're burning server energy. Data centers are already guzzling massive electricity and water for cooling. AI workloads are accelerating that. So the speed gain is real, but only if we use it intelligently."
  },
  {
    speaker: "Speaker 5",
    note: "professional",
    text: "In banking, the headache is explainability. Regulators don't care that your AI \"thought\" the test passed. They want to know why and have an audit trail. That's why we've restricted AI to generating test data and test ideas, while the actual compliance verification stays in deterministic, human-reviewed code. Best of both worlds."
  },
  {
    speaker: "Speaker 1",
    note: "curious",
    text: "Marcus, you mentioned that duplicate charge story — that's a great illustration of the human superpower of \"malicious curiosity.\" Let's hold that thought and move to the next big shift. A lot of the conversation right now is about QA professionals becoming mentors to AI systems. Lena, what does that actually look like in practice? How do you feed an AI the context it needs so it doesn't just spit out happy-path garbage?"
  },
  {
    speaker: "Speaker 2",
    note: "explanatory",
    text: "It starts with treating the AI like a very smart but brand-new junior colleague who knows nothing about your product. You have to proactively feed it rich, structured knowledge: detailed user workflows, business rules, known fragile components, recurring bugs from the last three years, compliance requirements, and — this is key — real end-customer context. Who are your users? What frustrates them? What devices and network conditions do they actually have?"
  },
  {
    speaker: "Speaker 5",
    note: "agreement",
    text: "Exactly. We've built internal RAG systems — retrieval-augmented generation — that pull from our living documentation, decision trees, and past incident reports. Then we write precise, well-scoped prompts instead of spending hours hand-authoring fifty lines of Playwright. The high-value skill now is prompt engineering plus ruthless critical review of the output."
  },
  {
    speaker: "Speaker 3",
    note: "enthusiastic",
    text: "I've been preaching this to my team. Stop writing tests by hand. Learn to write a killer prompt, let the AI generate the first draft, then review it like a senior architect: structural errors, logical gaps, maintainability, alignment with our conventions. That review step is where the real expertise lives now."
  },
  {
    speaker: "Speaker 4",
    note: "empathetic",
    text: "And don't forget the human side of the knowledge transfer. The AI doesn't know that our users in Southeast Asia are often on older Android devices with spotty 3G. Or that \"session timeout\" feels different to a busy parent trying to pay a bill on their phone. That contextual empathy has to come from us."
  },
  {
    speaker: "Speaker 1",
    note: "reflective",
    text: "So the job title is quietly changing from \"Test Writer\" to \"Quality Strategist and AI Orchestrator.\" Jamal, you've been leading this upskilling inside a bank — what's the biggest mindset shift you've seen in your teams?"
  },
  {
    speaker: "Speaker 5",
    note: "insightful",
    text: "The ones who thrive stop seeing themselves as people who execute tests and start seeing themselves as people who teach machines what quality means for our users and our risk profile. They also have to understand full-stack architecture now — how the React components talk to the serverless backend — so they know where to focus the AI's attention for maximum risk coverage. It's a bigger, more strategic role, and honestly, more interesting."
  },
  {
    speaker: "Speaker 1",
    note: "serious",
    text: "That leads us beautifully into the human and ethical side. Because speed and efficiency mean nothing if we're shipping biased or harmful systems. Lena, you've done a lot of work here. Can you walk us through why fairness testing has become non-negotiable for QA?"
  },
  {
    speaker: "Speaker 2",
    note: "passionate",
    text: "Because AI systems make decisions that affect real people's lives and opportunities — hiring, lending, healthcare, justice. And they inherit and amplify whatever biases are in the training data or the way we test them. Remember the Amazon recruiting tool from a few years back? It was trained on ten years of resumes that were mostly male. So it started penalizing any resume that mentioned \"women's\" — like \"women's chess club captain\" — and downgraded graduates of all-women's colleges. They had to scrap the whole project. That wasn't a theoretical risk; it was a real, deployed system that systematically discriminated."
  },
  {
    speaker: "Speaker 4",
    note: "empathetic",
    text: "And it's not just dramatic hiring cases. In everyday apps, if your test scenarios don't include diverse users — different ages, devices, accessibility needs, cultural contexts — you're silently excluding people. We had a form field that worked perfectly in automation on a desktop browser. On a real phone with the on-screen keyboard, the field was completely covered. Users literally couldn't see what they were typing. Automation said green. Real humans said \"this is broken.\""
  },
  {
    speaker: "Speaker 3",
    note: "amazed",
    text: "That example kills me every time because it's so preventable. The fix was simple once a human actually used the app the way real users do."
  },
  {
    speaker: "Speaker 5",
    note: "firm",
    text: "In regulated industries we now require explicit bias audits and diverse persona coverage in every high-stakes feature. We also never let AI testing tools train on real customer data. We run anonymization and masking scripts before the AI ever sees anything. It's non-negotiable."
  },
  {
    speaker: "Speaker 2",
    note: "determined",
    text: "And we're testing the AI outputs themselves for disparate impact across protected characteristics. As these tools get more powerful, our oversight responsibility only grows."
  },
  {
    speaker: "Speaker 1",
    note: "curious",
    text: "Priya, you keep bringing up that human \"feel\" and real-device reality. How do you balance the push for speed and automation with keeping genuine empathy and usability at the center?"
  },
  {
    speaker: "Speaker 4",
    note: "confident",
    text: "We draw a hard line. Automation and AI handle the repetitive backend validation, performance at scale, and boilerplate checks. Humans own the frontend experience — accessibility, visual layout, emotional response, and those weird edge cases that only emerge when a real person is frustrated or distracted. We reclaimed all the time we used to spend maintaining brittle UI scripts and redirected it into user research, support ticket analysis, and journey mapping with the product team. The ROI has been huge — both in better products and in how valued the QA team feels."
  },
  {
    speaker: "Speaker 1",
    note: "concerned",
    text: "Okay, let's shift gears to something that doesn't get enough airtime: the environmental impact of all this testing. Priya, the numbers on data centers are pretty stark — U.S. data centers already at 4.4% of national electricity and climbing fast because of AI. What can actual QA teams do that moves the needle without slowing everything down?"
  },
  {
    speaker: "Speaker 4",
    note: "practical",
    text: "Start with the low-hanging fruit that also saves money: stop running full regression suites on every single commit. It's wasteful and unnecessary. Run the heavy, resource-intensive tests only on major builds or release candidates. Aggressively prune redundant, flaky, or low-value tests from your suites. Use path filters in CI so documentation-only changes don't trigger expensive test stages."
  },
  {
    speaker: "Speaker 3",
    note: "positive",
    text: "We did exactly that and saw massive wins. We also moved away from always-on Selenium grids to serverless and ephemeral test execution. Resources only spin up when tests actually run and get torn down immediately after. Studies show up to 70% energy reduction and 60% cost savings. Our feedback loops got faster too."
  },
  {
    speaker: "Speaker 5",
    note: "strategic",
    text: "And we're using AI-powered test impact analysis tools now — like what Tricentis Tosca and others offer — so we only run the tests that are actually affected by a code change instead of everything. It's smarter, faster, and dramatically lower carbon."
  },
  {
    speaker: "Speaker 4",
    note: "advocating",
    text: "The cultural shift is treating energy efficiency as a first-class quality metric right alongside defect escape rate and coverage. When leadership sees the cost savings and the sustainability story, they get on board fast."
  },
  {
    speaker: "Speaker 1",
    note: "inquiring",
    text: "Jamal, you've been quiet on the green side but you're deep in the transformation roadmap. Walk us through what a practical 18-month journey looks like for a team that wants to do this responsibly — AI literacy, ethics, sustainability, new metrics, all of it?"
  },
  {
    speaker: "Speaker 5",
    note: "structured",
    text: "We broke it into three phases. Phase 1, first six months: Build foundations. Mandatory AI literacy training for the whole QA team — prompt engineering, understanding LLM strengths and hallucinations, bias awareness. Run small pilots on non-critical projects with Cursor or Claude. Start building those internal knowledge bases and prompt libraries we talked about earlier. Phase 2, months six to twelve: Embed ethics and sustainability into the operating system. Formal bias and fairness testing standards go into every quality gate. For regulated work, we lock in the hybrid model — AI generates ideas and data, humans own the auditable compliance logic. We audit and migrate test execution to serverless and ephemeral setups and roll out AI impact analysis so we're not burning cycles on full regressions. Phase 3, year two and beyond: Optimize and scale. We track new KPIs that actually matter now: AI output quality and rework rate, defects per compute hour, bias coverage metrics, infrastructure carbon footprint, and — in regulated areas — explainability audit pass rates. We build cross-functional squads: QA plus ML engineers on fairness, QA plus platform teams on green infra, QA plus product on empathy initiatives. Eventually QA becomes the Center of Excellence for responsible AI adoption across the whole company."
  },
  {
    speaker: "Speaker 2",
    note: "approving",
    text: "I love that phased approach because it doesn't try to boil the ocean on day one. You build the muscle, prove value, then expand."
  },
  {
    speaker: "Speaker 1",
    note: "reflective",
    text: "Let's land the plane with the big philosophical question. Will AI replace QA professionals? And if not, what unique human qualities become even more valuable in this new world?"
  },
  {
    speaker: "Speaker 3",
    note: "confident",
    text: "No chance it replaces us. It replaces the boring parts of the job. The testers and leaders who thrive are the ones who adapt — who get really good at orchestrating the AI, reviewing its output with a critical eye, and combining that with deep system knowledge and human judgment."
  },
  {
    speaker: "Speaker 2",
    note: "inspiring",
    text: "The irreplaceable human superpowers are intuition, creativity, ethical reasoning, empathy, and what I call \"malicious curiosity\" — the willingness to try weird, unexpected combinations that no historical pattern would predict. AI follows the data it's seen. Humans can invent the scenario that breaks everything in a way that feels real."
  },
  {
    speaker: "Speaker 4",
    note: "advocating",
    text: "And that includes advocating for users who can't advocate for themselves — especially marginalized communities whose needs are often missing from training data. Someone has to keep asking: \"What happens to this person's life if the system behaves unfairly or fails?\""
  },
  {
    speaker: "Speaker 5",
    note: "conclusive",
    text: "The new mandate is clear. QA organizations that understand they're now mentors, ethical guardians, and sustainability advocates become indispensable strategic partners. The machines are ready to test at scale. The only question left is: Are we ready to teach them what truly matters?"
  },
  {
    speaker: "Speaker 1",
    note: "moved",
    text: "That line gives me chills every time. Let's do a quick lightning round before we wrap. One personal commitment or piece of advice each of you would give listeners who want to start this journey tomorrow."
  },
  {
    speaker: "Speaker 2",
    note: "actionable",
    text: "Pick one high-risk feature this quarter and run a proper bias audit on it — even if it's just manually reviewing test scenarios for diverse personas. You'll be shocked what you find."
  },
  {
    speaker: "Speaker 3",
    note: "encouraging",
    text: "Next time you're about to write a test by hand, force yourself to write a precise prompt instead and review what the AI gives you. The muscle grows fast, and you'll never go back."
  },
  {
    speaker: "Speaker 4",
    note: "practical",
    text: "Measure something green this month. Track how many tests you're running unnecessarily or move one pipeline stage to serverless. Small wins build momentum and buy-in."
  },
  {
    speaker: "Speaker 5",
    note: "foundational",
    text: "Start documenting the tribal knowledge your team carries in their heads — the recurring bugs, the fragile components, the \"you just have to know\" stuff. Turn it into living docs or a RAG system the AI can actually use. That's the foundation everything else rests on."
  },
  {
    speaker: "Speaker 1",
    note: "warm and grateful",
    text: "Beautiful. Lena, Marcus, Priya, Jamal — thank you. This was one of the most practical and human conversations I've had on this topic. To our listeners: the future of QA isn't about fighting the machines. It's about becoming the people who teach them what quality, fairness, and responsibility actually mean."
  },
  {
    speaker: "Speaker 1",
    note: "closing",
    text: "If this episode resonated, drop us a review, share it with your team, and let us know what you're wrestling with in your own QA transformation. I'm Alex Rivera. Until next time, keep questioning, keep testing, and keep the human in the loop."
  }
];
