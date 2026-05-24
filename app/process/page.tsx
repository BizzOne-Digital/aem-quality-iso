"use client";
import Link from "next/link";
import { ArrowRight, Phone, Calendar, Search, Map, Settings, BookOpen, Award, CheckCircle2, Clock } from "lucide-react";

const steps = [
  {
    num:1, icon:<Calendar size={28}/>, title:"Free 30-Minute Consultation",
    subtitle:"No cost. No commitment. Just clarity.",
    desc:"Every successful ISO 9001 project starts with a conversation. Our free consultation gives you a clear picture of the path ahead — what it involves, how long it takes, what it costs, and what you will get at the end.",
    whatHappens:["We listen to your business situation, challenges, and goals","We ask about your industry, size, and existing quality processes","We explain ISO 9001 certification in plain language","We answer every question you have — nothing is too basic","We outline the realistic timeline and investment for your situation","You leave with clarity and a clear path forward"],
    outcome:"A clear understanding of what ISO 9001 means for your business and which services would be most beneficial.",
    duration:"30 minutes · Free · Online or Phone",
  },
  {
    num:2, icon:<Search size={28}/>, title:"Diagnostic & Gap Analysis",
    subtitle:"Know exactly where you stand.",
    desc:"Before we build anything, we conduct a thorough assessment of your current management system. This is the foundation of everything — and it saves significant time and money by ensuring every action is targeted and necessary.",
    whatHappens:["Structured review of your existing processes and documentation","Clause-by-clause comparison against ISO 9001:2015 requirements","Identification of major and minor nonconformities","Assessment of risks and opportunities in your current approach","Interviews with key staff to understand real-world practices","Detailed written report with findings and prioritized recommendations"],
    outcome:"A comprehensive Gap Analysis Report, nonconformity register, and strategic action plan that tells you exactly what needs to change and in what order.",
    duration:"3–5 business days",
  },
  {
    num:3, icon:<Map size={28}/>, title:"Customized Implementation Plan",
    subtitle:"Your roadmap to certification.",
    desc:"Based on the gap analysis, we develop a detailed, realistic implementation plan tailored specifically to your organization. This roadmap becomes your guide through the entire certification journey.",
    whatHappens:["Detailed project plan with specific tasks, owners, and deadlines","Phased approach that minimizes disruption to your operations","Identification of quick wins vs longer-term projects","Resource planning — what your team needs to contribute and when","Risk mitigation planning for common implementation challenges","Regular checkpoint schedule to track progress"],
    outcome:"A comprehensive implementation roadmap with clear KPIs to measure progress at every stage.",
    duration:"1–2 weeks to develop",
  },
  {
    num:4, icon:<Settings size={28}/>, title:"Build, Document & Train",
    subtitle:"Where planning becomes reality.",
    desc:"This is the core of the implementation — building the actual quality management system and embedding it into your organization. We work alongside your team to design processes, write documentation, and build skills.",
    whatHappens:["Development of Quality Manual, procedures, and work instructions","Process mapping and optimization for key business activities","Creation of quality records templates and forms","Risk and opportunity register development","Objectives, targets, and KPI framework implementation","Management review process design","Internal audit program setup","Team training on ISO 9001 requirements and quality tools","Corrective action and continual improvement process","Regular review sessions to ensure everything is on track"],
    outcome:"A complete, documented quality management system understood and owned by your team — ready for certification audit.",
    duration:"8–16 weeks depending on organization size",
  },
  {
    num:5, icon:<Award size={28}/>, title:"Certification Ready — and Beyond",
    subtitle:"Walk in confident. Walk out certified.",
    desc:"With your QMS fully built and your team trained, we prepare you for the certification audit and support you through the process. We stay with you until you have that certificate in hand.",
    whatHappens:["Pre-certification readiness review — a practice run to identify last gaps","Audit preparation coaching for you and your team","Support during the certification audit process","Guidance on responding to any audit findings","Post-certification support to ensure compliance is maintained","Planning for ongoing internal audits and management reviews","Continual improvement program setup for the years ahead"],
    outcome:"ISO 9001 certification in hand, a team that knows how to maintain the system, and a quality culture that drives performance.",
    duration:"Ongoing support through certification and beyond",
  }
];

export default function ProcessPage() {
  return (
    <div style={{ paddingTop:74, overflowX:"hidden", maxWidth:"100vw" }}>
      {/* HERO */}
      <section style={{ background:"#0a1f44", padding:"96px 24px 80px", position:"relative", overflow:"hidden", maxWidth:"100%" }}>
        <div style={{ position:"absolute", inset:0, maxWidth:"100%", background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,86,219,0.2) 0%, transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ maxWidth:1240, margin:"0 auto", position:"relative", zIndex:2, textAlign:"center" }}>
          <span style={{ display:"inline-block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#3b82f6", background:"rgba(26,86,219,0.2)", border:"1px solid rgba(26,86,219,0.35)", padding:"6px 18px", borderRadius:50, marginBottom:20 }}>Our Process</span>
          <h1 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(36px,5vw,54px)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:20 }}>
            From First Call to<br/>
            <span style={{ background:"linear-gradient(135deg,#3b82f6,#00c2ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Certified Business</span>
          </h1>
          <p style={{ fontSize:17, color:"rgba(255,255,255,0.6)", lineHeight:1.8, maxWidth:620, margin:"0 auto 52px" }}>
            A clear, structured, and completely transparent 5-step process. You will always know exactly where you are, what is happening next, and what the expected outcome is at every stage.
          </p>

          {/* Step indicators */}
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:0, flexWrap:"wrap" }}>
            {steps.map((s,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center" }}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"0 16px" }}>
                  <div style={{ width:48, height:48, borderRadius:"50%", background: i%2===0 ? "linear-gradient(135deg,#1a56db,#2563eb)" : "rgba(255,255,255,0.12)", border:"2px solid rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Montserrat,sans-serif", fontSize:18, fontWeight:900, color:"#fff", marginBottom:10 }}>{s.num}</div>
                  <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"rgba(255,255,255,0.5)", textAlign:"center", maxWidth:72, lineHeight:1.4 }}>{s.title.split(" ").slice(0,2).join(" ")}</div>
                </div>
                {i<4 && <div style={{ width:48, height:1, background:"rgba(255,255,255,0.15)", marginBottom:28, flexShrink:0 }} className="proc-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      {steps.map((step, i) => (
        <section key={step.num} style={{ padding:"80px 24px", background: i%2===0 ? "#fff" : "#f4f7fb", borderBottom:"1px solid #e4eaf5" }}>
          <div style={{ maxWidth:1240, margin:"0 auto" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1.5fr 1fr", gap:60, alignItems:"start" }} className="step-grid">

              {/* Main content */}
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:28 }}>
                  <div style={{ width:72, height:72, borderRadius:"50%", background:"linear-gradient(135deg,#1a56db,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", flexShrink:0, boxShadow:"0 8px 24px rgba(26,86,219,0.35)" }}>{step.icon}</div>
                  <div>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:800, letterSpacing:"2.5px", textTransform:"uppercase", color:"#1a56db", marginBottom:4 }}>Step {step.num} of 5</div>
                    <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(20px,2.8vw,30px)", fontWeight:900, color:"#0a1f44", lineHeight:1.15 }}>{step.title}</h2>
                    <p style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, color:"#3b82f6", letterSpacing:"1px", marginTop:4 }}>{step.subtitle}</p>
                  </div>
                </div>

                <p style={{ fontSize:16, color:"#3d4f6b", lineHeight:1.82, marginBottom:28 }}>{step.desc}</p>

                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:16 }}>What Happens During This Stage</h3>
                <ul style={{ listStyle:"none", marginBottom:0 }}>
                  {step.whatHappens.map((w,j) => (
                    <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:12, padding:"10px 0", borderBottom:"1px solid #e4eaf5", fontSize:14, color:"#3d4f6b", lineHeight:1.6 }}>
                      <CheckCircle2 size={16} color="#1a56db" style={{ flexShrink:0, marginTop:2 }}/>{w}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar */}
              <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                {/* Outcome */}
                <div style={{ background:"#0a1f44", borderRadius:16, padding:"28px 32px", position:"relative", overflow:"hidden", maxWidth:"100%" }}>
                  <div style={{ position:"absolute", top:-20, right:-20, width:100, height:100, borderRadius:"50%", background:"rgba(26,86,219,0.15)" }} />
                  <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:800, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6", marginBottom:12 }}>Expected Outcome</div>
                  <p style={{ fontSize:15, color:"rgba(255,255,255,0.75)", lineHeight:1.8 }}>{step.outcome}</p>
                </div>

                {/* Duration */}
                <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:14, padding:"22px 26px", display:"flex", alignItems:"center", gap:16 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:"rgba(26,86,219,0.08)", display:"flex", alignItems:"center", justifyContent:"center", color:"#1a56db", flexShrink:0 }}><Clock size={20}/></div>
                  <div>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#8492a6", marginBottom:4 }}>Typical Duration</div>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:13, fontWeight:700, color:"#0a1f44" }}>{step.duration}</div>
                  </div>
                </div>

                {/* CTA on last step */}
                {step.num === 5 && (
                  <div style={{ background:"linear-gradient(135deg,#1a56db,#2563eb)", borderRadius:14, padding:"24px 28px" }}>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:800, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(255,255,255,0.65)", marginBottom:8 }}>Ready to start?</div>
                    <p style={{ fontSize:14, color:"rgba(255,255,255,0.85)", lineHeight:1.7, marginBottom:18 }}>Book your free consultation and we will walk through every step with you.</p>
                    <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:"#fff", textDecoration:"none", background:"rgba(255,255,255,0.2)", padding:"10px 20px", borderRadius:8 }}>
                      Book Free Consultation <ArrowRight size={14}/>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section style={{ padding:"80px 24px", background:"#fff" }}>
        <div style={{ maxWidth:860, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <span style={{ display:"inline-block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#1a56db", background:"rgba(26,86,219,0.08)", padding:"6px 16px", borderRadius:50, marginBottom:14 }}>Common Questions</span>
            <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:800, color:"#0a1f44" }}>Frequently Asked About Our Process</h2>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
            {[
              { q:"How long does it take to get ISO 9001 certified?", a:"Typically 3–6 months for most SMEs, depending on your starting point (gap analysis results), organization size, team capacity, and how quickly documentation and implementation can be completed. We will give you a specific estimate after the diagnostic." },
              { q:"Do we need to shut down operations during implementation?", a:"Absolutely not. We design the implementation to work around your operations, not against them. Most work happens in parallel with your normal business activities, with minimal disruption." },
              { q:"What does my team need to do?", a:"Your team participates in key activities like process reviews, training sessions, and providing information about how work actually gets done. We do the heavy lifting on documentation and system design — but your people's knowledge is essential." },
              { q:"Do we work with you directly, or a junior consultant?", a:"You work directly with Abdelali El-Magueri on every project. There are no junior consultants or account managers — just direct, experienced support from the founder himself." },
              { q:"What happens after we get certified?", a:"We help you set up ongoing processes — internal audits, management reviews, corrective actions, KPI monitoring — that keep your certification valid and your system improving. We can also provide ongoing support on a retainer basis." },
            ].map((faq, i) => (
              <div key={i} style={{ background: i%2===0 ? "#fff":"#f4f7fb", border:"1px solid #e4eaf5", borderRadius:12, padding:"24px 28px" }}>
                <h4 style={{ fontFamily:"Montserrat,sans-serif", fontSize:14, fontWeight:700, color:"#0a1f44", marginBottom:10 }}>Q: {faq.q}</h4>
                <p style={{ fontSize:14, color:"#3d4f6b", lineHeight:1.75, paddingLeft:16, borderLeft:"3px solid #1a56db" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"80px 24px", background:"#0a1f44" }}>
        <div style={{ maxWidth:720, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#fff", marginBottom:14 }}>Ready to Take Step 1?</h2>
          <p style={{ fontSize:16, color:"rgba(255,255,255,0.55)", lineHeight:1.8, marginBottom:36 }}>Book your free 30-minute consultation and let us talk about your business, your goals, and how we can get you certified.</p>
          <div style={{ display:"flex", justifyContent:"center", gap:16, flexWrap:"wrap" }}>
            <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"16px 36px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
              Book Free Consultation <ArrowRight size={16}/>
            </Link>
            <a href="tel:+15145526936" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"16px 28px", border:"2px solid rgba(255,255,255,0.25)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
              <Phone size={16}/> +1 514 552 6936
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .proc-line{display:block;}
        .step-grid{display:grid;grid-template-columns:1.5fr 1fr;gap:60px;align-items:start;}
        @media(max-width:900px){.step-grid{grid-template-columns:1fr!important;} .proc-line{display:none!important;}}
      `}</style>
    </div>
  );
}