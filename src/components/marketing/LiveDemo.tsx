"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

interface ChatMessage {
  from: "customer" | "ai";
  text: string;
}

interface Scenario {
  id: string;
  label: string;
  script: ChatMessage[];
}

const scenarios: Scenario[] = [
  {
    id: "missed-call",
    label: "Missed call after hours",
    script: [
      {
        from: "ai",
        text: "Hi, this is Ava from Summit Home Services — sorry we missed your call! I can help right here. What do you need done?",
      },
      { from: "customer", text: "My water heater is leaking. How soon can someone come out?" },
      {
        from: "ai",
        text: "That's a priority for us. I have a technician available tomorrow at 9:30 AM or 1:00 PM — which works better for you?",
      },
      { from: "customer", text: "9:30 works." },
      {
        from: "ai",
        text: "You're booked for 9:30 AM tomorrow. I've texted you a confirmation, and Mike will call 20 minutes before arrival. Anything else I can help with?",
      },
    ],
  },
  {
    id: "quote-request",
    label: "Insurance quote request",
    script: [
      { from: "customer", text: "Hi, I filled out the form for an auto insurance quote." },
      {
        from: "ai",
        text: "Thanks for reaching out! I can get your quote started right now. Is this for one vehicle or multiple?",
      },
      { from: "customer", text: "Two cars, and I'd want to bundle with home insurance." },
      {
        from: "ai",
        text: "A bundle usually saves 15-25%. I've flagged that for our senior agent, Sarah. She has openings today at 3 PM or tomorrow at 10 AM for a 15-minute quote call — which suits you?",
      },
    ],
  },
  {
    id: "booking",
    label: "Med spa booking",
    script: [
      { from: "customer", text: "Do you have any availability for a facial this Saturday?" },
      {
        from: "ai",
        text: "We do! Saturday I have 11:00 AM and 2:30 PM open for our signature facial. Would you like to book one?",
      },
      { from: "customer", text: "2:30 please. It's my first time." },
      {
        from: "ai",
        text: "Perfect — you're booked for Saturday at 2:30 PM. As a first-time guest, please arrive 10 minutes early for a quick skin consultation. You'll get a text confirmation shortly!",
      },
    ],
  },
  {
    id: "storm-lead",
    label: "Roofing storm lead",
    script: [
      { from: "customer", text: "The storm last night damaged my roof. Are you taking inspections?" },
      {
        from: "ai",
        text: "We are — and after a storm, slots fill fast. Can I get your address to check crew availability in your area?",
      },
      { from: "customer", text: "412 Maple Drive." },
      {
        from: "ai",
        text: "Good news — we have a crew nearby Thursday. I can lock in a free inspection at 8 AM or 4 PM. We'll also document everything for your insurance claim. Which time works?",
      },
    ],
  },
];

const TYPE_INTERVAL_MS = 14;
const TYPING_PAUSE_MS = 700;
const CUSTOMER_PAUSE_MS = 500;

function useChatPlayback(scenario: Scenario) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const runIdRef = useRef(0);

  useEffect(() => {
    const runId = ++runIdRef.current;
    const isStale = () => runIdRef.current !== runId;
    setMessages([]);
    setIsTyping(false);

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    (async () => {
      await sleep(300);
      for (const msg of scenario.script) {
        if (isStale()) return;

        if (msg.from === "customer") {
          await sleep(CUSTOMER_PAUSE_MS);
          if (isStale()) return;
          setMessages((prev) => [...prev, msg]);
        } else {
          setIsTyping(true);
          await sleep(TYPING_PAUSE_MS);
          if (isStale()) return;
          setIsTyping(false);
          // Typewriter effect: append empty AI bubble, then grow its text
          setMessages((prev) => [...prev, { from: "ai", text: "" }]);
          for (let i = 1; i <= msg.text.length; i++) {
            if (isStale()) return;
            const partial = msg.text.slice(0, i);
            setMessages((prev) => [
              ...prev.slice(0, -1),
              { from: "ai", text: partial },
            ]);
            await sleep(TYPE_INTERVAL_MS);
          }
        }
      }
    })();

    return () => {
      runIdRef.current++;
    };
  }, [scenario]);

  return { messages, isTyping };
}

export default function LiveDemo() {
  const [scenario, setScenario] = useState(scenarios[0]);
  const { messages, isTyping } = useChatPlayback(scenario);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = chatRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  return (
    <section id="live-demo" className="bg-white py-20 sm:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={fadeUp} className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal">
              Live Demo
            </p>
            <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
              Watch the AI handle a real conversation.
            </h2>
            <p className="mt-4 text-base text-graytext">
              Pick a scenario. This is the exact experience your callers get.
            </p>
          </motion.div>

          {/* Scenario picker */}
          <motion.div
            variants={fadeUp}
            className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible"
          >
            {scenarios.map((s) => (
              <button
                key={s.id}
                onClick={() => setScenario(s)}
                aria-pressed={s.id === scenario.id}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  s.id === scenario.id
                    ? "border-teal bg-teal text-white"
                    : "border-charcoal/12 text-graytext hover:border-teal/40 hover:text-teal"
                }`}
              >
                {s.label}
              </button>
            ))}
          </motion.div>

          {/* Chat window */}
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-3xl border border-charcoal/10 bg-ivory shadow-sm"
          >
            <div className="flex items-center gap-3 border-b border-charcoal/8 bg-white px-6 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal font-serif text-sm text-white">
                W
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">
                  Webxpro AI Agent
                </p>
                <p className="flex items-center gap-1.5 text-xs text-graytext">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal" />
                  Always online
                </p>
              </div>
            </div>

            <div
              ref={chatRef}
              className="flex h-80 flex-col gap-3 overflow-y-auto p-6"
              aria-live="polite"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={`${scenario.id}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      msg.from === "ai"
                        ? "self-start rounded-bl-md bg-teal text-white"
                        : "self-end rounded-br-md border border-charcoal/8 bg-white text-charcoal"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-1.5 self-start rounded-2xl rounded-bl-md bg-teal/90 px-4 py-3.5"
                >
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      className="h-1.5 w-1.5 rounded-full bg-white/80"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: dot * 0.15,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-center text-xs text-graytext/70"
          >
            Simulated conversation for demonstration. Your agent is trained on
            your services, pricing, and calendar.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
