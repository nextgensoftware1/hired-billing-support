"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const WELCOME = {
  role: "assistant",
  content: "Hi, welcome to Hired Billing Support! 👋\n\nAre you looking for help with medical billing, credentialing, payer enrollment, AR recovery, or complete RCM support?",
};

const QUICK_REPLIES = [
  "Medical Billing",
  "Credentialing",
  "Payer Enrollment",
  "AR Recovery",
  "Practice Launch",
  "RCM Support",
];

export default function HBSChatbot() {
  const [open, setOpen]         = useState(false);
  const [minimized, setMin]     = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [leadAlert, setLeadAlert] = useState(false);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
  useEffect(() => { if (open && !minimized) inputRef.current?.focus(); }, [open, minimized]);
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    const newHeight = Math.min(el.scrollHeight, 300);
    el.style.height = `${newHeight}px`;
  }, [input, open, minimized]);

  const send = useCallback(async (override) => {
    const text = (override ?? input).trim();
    if (!text || loading) return;

    const userMsg = { role: "user", content: text };
    const next    = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res  = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      const reply = data.message || "Something went wrong — please try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);

      // Auto send lead email
      if (data.leadData && !leadSent) {
        setLeadSent(true);
        setLeadAlert(true);
        setTimeout(() => setLeadAlert(false), 5000);
        fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data.leadData,
            conversation: next
              .slice(-10)
              .map((m) => `${m.role === "user" ? "Visitor" : "HBS Bot"}: ${m.content}`)
              .join("\n"),
          }),
        }).catch(console.error);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection issue — please try again or email us at hello@hiredbillingsupport.com" },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, messages, loading, leadSent]);

  const reset = () => { setMessages([WELCOME]); setInput(""); setLeadSent(false); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .hc *{box-sizing:border-box;font-family:var(--sans, 'Inter', sans-serif)}

        /* Launcher */
        .hc-fab{position:fixed;bottom:clamp(16px, 3vh, 28px);right:clamp(16px, 3vw, 28px);z-index:9999;display:flex;align-items:center;gap:12px;cursor:pointer}
        .hc-fab-btn{background:linear-gradient(135deg, var(--ink), var(--ink-soft));border:none;width:clamp(54px, 12vw, 62px);height:clamp(54px, 12vw, 62px);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 28px rgba(10, 22, 40, 0.5);cursor:pointer;transition:transform 0.2s, box-shadow 0.2s;position:relative}
        .hc-fab-btn:hover{transform:scale(1.08);box-shadow:0 10px 36px rgba(10, 22, 40, 0.6)}
        .hc-fab-pulse{position:absolute;top:-2px;right:-2px;width:14px;height:14px;background:var(--signal);border-radius:50%;border:2.5px solid var(--white)}
        .hc-fab-label{background:var(--white);color:var(--ink);font-size:clamp(12px, 2.5vw, 13px);font-weight:600;padding:9px 16px;border-radius:22px;box-shadow:0 3px 14px rgba(0,0,0, 0.12);white-space:nowrap;pointer-events:none}

        /* Window */
        .hc-win{position:fixed;bottom:clamp(90px, 15vh, 106px);right:clamp(12px, 3vw, 28px);z-index:9999;width:clamp(280px, 90vw, 388px);max-height:clamp(400px, 80vh, 650px);display:flex;flex-direction:column;border-radius:var(--radius-lg);overflow:hidden;background:var(--white);box-shadow:0 24px 72px rgba(0,0,0,0.18), 0 4px 20px rgba(0,0,0,0.09);animation:hc-in 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)}
        @keyframes hc-in{from{opacity:0;transform:translateY(20px) scale(0.94)}to{opacity:1;transform:none}}
        .hc-win.min{max-height:72px}

        /* Header */
        .hc-hdr{background:linear-gradient(135deg, var(--ink), var(--ink-soft));padding:clamp(10px, 1.5vw, 14px) clamp(14px, 2.5vw, 18px);display:flex;align-items:center;gap:12px;flex-shrink:0}
        .hc-av{width:clamp(36px, 8vw, 44px);height:clamp(36px, 8vw, 44px);border-radius:50%;background:rgba(255, 255, 255, 0.18);border:2px solid rgba(255, 255, 255, 0.32);display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .hc-hdr-info{flex:1;min-width:0}
        .hc-name{color:var(--white);font-size:clamp(13px, 2.5vw, 15px);font-weight:700}
        .hc-sub{display:flex;align-items:center;gap:6px;margin-top:3px;flex-wrap:wrap}
        .hc-dot{width:7px;height:7px;background:var(--signal);border-radius:50%;flex-shrink:0}
        .hc-online{color:rgba(255, 255, 255, 0.78);font-size:clamp(10px, 2vw, 12px);font-weight:500}
        .hc-badge{background:rgba(255, 255, 255, 0.18);color:rgba(255, 255, 255, 0.9);font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;letter-spacing:0.05em;flex-shrink:0}
        .hc-hdr-btns{display:flex;gap:4px}
        .hc-hbtn{background:rgba(255, 255, 255, 0.15);border:none;color:var(--white);width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.15s}
        .hc-hbtn:hover{background:rgba(255, 255, 255, 0.3)}

        /* Lead Alert */
        .hc-lead-alert{background:rgba(0, 200, 150, 0.1);border-left:3px solid var(--signal);color:var(--signal-deep);font-size:clamp(11px, 2vw, 12px);font-weight:600;padding:clamp(6px, 1.5vw, 8px) clamp(10px, 2vw, 14px);flex-shrink:0;display:flex;align-items:center;gap:8px;animation:slideDown 0.3s ease-out}

        /* Messages */
        .hc-msgs{flex:1;overflow-y:auto;overflow-x:hidden;padding:clamp(10px, 1.5vw, 14px) clamp(10px, 2vw, 14px);display:flex;flex-direction:column;gap:clamp(8px, 1.5vw, 12px);background:var(--paper);scroll-behavior:smooth;min-height:0}
        .hc-msgs::-webkit-scrollbar{width:6px}
        .hc-msgs::-webkit-scrollbar-track{background:transparent}
        .hc-msgs::-webkit-scrollbar-thumb{background:var(--paper-line);border-radius:4px;transition:background 0.2s}
        .hc-msgs::-webkit-scrollbar-thumb:hover{background:var(--ink-mute)}

        .hc-row{display:flex;gap:8px;align-items:flex-end}
        .hc-row.u{flex-direction:row-reverse}
        .hc-ico{width:clamp(24px, 5vw, 30px);height:clamp(24px, 5vw, 30px);border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:var(--ink-mute)}
        .hc-ico.bot{background:linear-gradient(135deg, var(--ink), var(--ink-soft));color:var(--white)}
        .hc-ico.usr{background:var(--paper-warm);color:var(--ink-mute)}

        .hc-bbl{max-width:84%;padding:clamp(8px, 1.5vw, 11px) clamp(12px, 2vw, 15px);border-radius:18px;font-size:clamp(13px, 2.5vw, 14px);line-height:1.58;white-space:pre-wrap;word-break:break-word;overflow-wrap:break-word;animation:messageFade 0.3s ease-out}
        .hc-bbl.bot{background:var(--white);color:var(--ink);border-bottom-left-radius:5px;box-shadow:0 1px 5px rgba(0,0,0, 0.07)}
        .hc-bbl.usr{background:linear-gradient(135deg, var(--ink), var(--ink-soft));color:var(--white);border-bottom-right-radius:5px}

        /* Typing */
        .hc-typing{display:flex;gap:5px;align-items:center;padding:4px 2px}
        .hc-typing span{width:7px;height:7px;background:var(--ink-mute);border-radius:50%;animation:hc-dot 1.2s infinite}
        .hc-typing span:nth-child(2){animation-delay:0.18s}
        .hc-typing span:nth-child(3){animation-delay:0.36s}
        @keyframes hc-dot{0%, 80%, 100%{transform:scale(0.8);opacity:0.5}40%{transform:scale(1.25);opacity:1}}
        @keyframes messageFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideDown{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}

        /* Quick replies */
        .hc-qr{display:flex;flex-wrap:wrap;gap:clamp(4px, 1vw, 6px);padding:0 clamp(10px, 2vw, 14px) clamp(6px, 1vw, 10px);background:var(--paper)}
        .hc-qr-btn{background:var(--white);border:1.5px solid var(--paper-line);color:var(--ink);font-size:clamp(11px, 2vw, 12px);font-weight:500;padding:clamp(4px, 1vw, 5px) clamp(10px, 1.5vw, 12px);border-radius:20px;cursor:pointer;transition:all 0.15s;font-family:var(--sans, 'Inter', sans-serif);white-space:nowrap}
        .hc-qr-btn:hover{background:var(--ink);color:var(--white);border-color:var(--ink)}

        /* Footer */
        .hc-foot{padding:clamp(8px, 1.2vw, 10px) clamp(10px, 1.5vw, 12px);background:var(--white);border-top:1px solid var(--paper-line);flex-shrink:0}
        .hc-irow{display:flex;align-items:center;gap:8px;background:var(--paper);border-radius:14px;padding:6px 6px 6px 14px;border:1.5px solid transparent;transition:border-color 0.2s}
        .hc-irow:focus-within{border-color:var(--ink);background:var(--white)}
        .hc-inp{flex:1;border:none;background:transparent;outline:none;font-size:clamp(12px, 2.5vw, 14px);color:var(--ink);resize:none;max-height:300px;min-height:22px;line-height:1.5;font-family:var(--sans, 'Inter', sans-serif);overflow-y:auto}
        .hc-inp::placeholder{color:var(--ink-mute)}
        .hc-send{background:linear-gradient(135deg, var(--ink), var(--ink-soft));border:none;color:var(--white);width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform 0.15s, opacity 0.15s;flex-shrink:0}
        .hc-send:disabled{opacity:0.4;cursor:not-allowed;transform:none}
        .hc-send:not(:disabled):hover{transform:scale(1.08)}
        .hc-note{text-align:center;font-size:clamp(10px, 1.8vw, 11px);color:var(--ink-mute);margin-top:4px}
        .hc-note strong{color:var(--ink-soft)}

        /* Responsive Design */
        @media(max-width:480px){
          .hc-win{width:calc(100vw - 16px);right:8px;bottom:clamp(80px, 12vh, 88px)}
          .hc-fab{right:8px;bottom:8px}
          .hc-hdr-btns{gap:2px}
          .hc-hbtn{width:28px;height:28px;font-size:12px}
        }

        @media(max-width:360px){
          .hc-qr-btn{font-size:10px;padding:3px 8px}
          .hc-bbl{max-width:100%}
          .hc-row{gap:6px}
        }

        @media(min-width:768px){
          .hc-win{width:420px;max-height:680px}
        }

        @media(prefers-reduced-motion:reduce){
          .hc-fab-btn, .hc-qr-btn, .hc-send, .hc-irow{transition:none}
          @keyframes hc-dot{0%, 100%{transform:scale(0.8)}50%{transform:scale(1.1)}}
        }
      `}</style>

      <div className="hc">
        {/* Launcher */}
        {!open && (
          <div className="hc-fab" onClick={() => setOpen(true)}>
            <span className="hc-fab-label">Chat with HBS Support</span>
            <button className="hc-fab-btn" aria-label="Open chat">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white"/>
              </svg>
              <span className="hc-fab-pulse"/>
            </button>
          </div>
        )}

        {/* Window */}
        {open && (
          <div className={`hc-win ${minimized ? "min" : ""}`}>

            {/* Header */}
            <div className="hc-hdr">
              <div className="hc-av">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19L7 15H19C20.1 15 21 14.1 21 13V5C21 3.9 20.1 3 19 3Z"/>
                </svg>
              </div>
              <div className="hc-hdr-info">
                <div className="hc-name">HBS Support Agent</div>
                <div className="hc-sub">
                  <span className="hc-dot"/>
                  <span className="hc-online">Online · Hired Billing Support</span>
                  <span className="hc-badge">AI</span>
                </div>
              </div>
              <div className="hc-hdr-btns">
                <button className="hc-hbtn" onClick={reset} title="New chat">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.75"/>
                  </svg>
                </button>
                <button className="hc-hbtn" onClick={() => setMin(!minimized)}>
                  {minimized
                    ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15"/></svg>
                    : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
                  }
                </button>
                <button className="hc-hbtn" onClick={() => { setOpen(false); setMin(false); }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>

            {!minimized && (
              <>
                {/* Lead captured alert */}
                {leadAlert && (
                  <div className="hc-lead-alert">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                    </svg>
                    Lead sent to hello@hiredbillingsupport.com ✓
                  </div>
                )}

                {/* Messages */}
                <div className="hc-msgs">
                  {messages.map((m, i) => (
                    <div key={i} className={`hc-row ${m.role === "user" ? "u" : ""}`}>
                      <div className={`hc-ico ${m.role === "user" ? "usr" : "bot"}`}>
                        {m.role === "user"
                          ? <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                          : <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"/></svg>
                        }
                      </div>
                      <div className={`hc-bbl ${m.role === "user" ? "usr" : "bot"}`}>{m.content}</div>
                    </div>
                  ))}

                  {loading && (
                    <div className="hc-row">
                      <div className="hc-ico bot">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"/></svg>
                      </div>
                      <div className="hc-bbl bot"><div className="hc-typing"><span/><span/><span/></div></div>
                    </div>
                  )}
                  <div ref={bottomRef}/>
                </div>

                {/* Quick replies */}
                {messages.length === 1 && (
                  <div className="hc-qr">
                    {QUICK_REPLIES.map((q) => (
                      <button key={q} className="hc-qr-btn" onClick={() => send(q)}>{q}</button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="hc-foot">
                  <div className="hc-irow">
                    <textarea
                      ref={inputRef}
                      className="hc-inp"
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                      rows={1}
                      disabled={loading}
                    />
                    <button className="hc-send" onClick={() => send()} disabled={!input.trim() || loading}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </button>
                  </div>
                  <div className="hc-note">Powered by <strong>Hired Billing Support</strong> · Do not share PHI</div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
