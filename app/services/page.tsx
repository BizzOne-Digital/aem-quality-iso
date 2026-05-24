"use client";
import Link from "next/link";
import { Search, Settings, GraduationCap, FileText, ArrowRight, CheckCircle2, Clock, ChevronRight } from "lucide-react";

const services = [
  {
    id:"diagnostic", num:"01", icon:<Search size={32}/>, name:"Diagnostic & Gap Analysis", price:"$500", tag:"Most Popular Starting Point",
    headline:"Know Exactly Where You Stand Before You Start",
    desc:"Before any implementation begins, you need a clear, honest picture of where your organization currently stands against ISO 9001 requirements. Our diagnostic service delivers exactly that — a comprehensive, expert-led assessment that maps every gap, risk, and opportunity in your current management system.",
    fullDesc:"Our senior ISO consultant conducts a thorough on-site or remote review of your existing processes, documentation, and quality practices. We compare your current state against all ISO 9001:2015 clauses and produce a detailed report that tells you exactly what needs to change, prioritized by impact and urgency.",
    includes:["Clause-by-clause gap assessment against ISO 9001:2015","Identification of major and minor nonconformities","Risk and opportunity analysis","Detailed written Gap Analysis Report","Strategic prioritized Action Plan with timelines","Executive summary presentation for leadership"],
    deliverables:["Comprehensive Gap Analysis Report (PDF)","Nonconformity register","Prioritized improvement roadmap","30-minute debrief call"],
    duration:"3–5 business days",
    ideal:"Businesses just beginning their ISO journey or those who need to understand their current maturity level.",
  },
  {
    id:"implementation", num:"02", icon:<Settings size={32}/>, name:"ISO 9001 Implementation", price:"$3,000", tag:"Complete System Build",
    headline:"Build a Quality Management System That Actually Works",
    desc:"ISO 9001 implementation is more than just paperwork — it's about creating a management system that genuinely improves how your business operates, reduces errors, satisfies customers, and positions you for sustainable growth.",
    fullDesc:"We work alongside your team to design, document, and embed a quality management system tailored specifically to your business. From developing your Quality Manual to writing operational procedures and training your staff, we manage the entire process so you can keep running your business while we build the system around you.",
    includes:["Quality Management System (QMS) design and architecture","Quality Manual development from scratch","Operational procedures and work instructions","Process mapping and flowchart documentation","Risk and opportunity register","Objectives and KPI framework","Management review process setup","Internal audit program design","Corrective action process implementation","Pre-certification readiness review"],
    deliverables:["Complete QMS documentation package","Quality Manual (English/French)","All mandatory ISO 9001:2015 procedures","Process maps and flowcharts","Training materials for your team","Internal audit checklist"],
    duration:"8–16 weeks depending on organization size",
    ideal:"SMEs and growing businesses that want to achieve ISO 9001 certification with expert guidance from start to finish.",
  },
  {
    id:"training", num:"03", icon:<GraduationCap size={32}/>, name:"Training Services", price:"$750", tag:"Per Session",
    headline:"Build a Team That Understands Quality From the Inside Out",
    desc:"ISO 9001 only works when your people understand it. Our training programs are practical, engaging, and designed specifically for your industry and team — not generic classroom material.",
    fullDesc:"Led by Abdelali El-Magueri with over 20 years of hands-on quality management experience, our training sessions combine theory with real-world application. Every session is tailored to your specific context, using examples from your own industry and processes wherever possible.",
    includes:["Quality Management Awareness Training (ISO 9001 fundamentals)","7 Quality Control Tools (7QC): Histogram, Pareto, Fishbone, Control Chart, Scatter","PDCA Cycle implementation workshops","5M / Ishikawa root cause analysis","AMDEC / FMEA — Failure Mode & Effects Analysis","Problem Solving Methods: 8D, RCA, A3 Report, 5 Whys","Internal Auditor Training (theory + practice audit)","Customized workshops for specific quality challenges"],
    deliverables:["Comprehensive training slides and handouts","Workshop exercises and templates","Participant certificates of completion","Post-training assessment"],
    duration:"Half-day or full-day sessions (online or on-site)",
    ideal:"Quality teams, production managers, department heads, and any staff involved in quality activities or internal auditing.",
  },
  {
    id:"documentation", num:"04", icon:<FileText size={32}/>, name:"Documentation & Continuous Improvement", price:"$1,500", tag:"Ongoing Excellence",
    headline:"Create Documentation That Drives Real Continuous Improvement",
    desc:"Good documentation isn't about creating mountains of paper — it's about capturing the right information in a clear, usable way that your team will actually follow.",
    fullDesc:"We create clear, compliant, and practical documentation systems that meet ISO 9001 requirements while being simple enough for your team to actually use. Alongside this, we implement continuous improvement processes — including internal audits, KPI monitoring, and corrective action systems — that keep your QMS alive and improving long after certification.",
    includes:["Documentation system design and structure","Quality records templates (forms, logs, registers)","Standard Operating Procedures (SOPs) writing","Work instructions for critical processes","Document control and version management system","Internal audit schedule and checklists","KPI dashboard design and reporting templates","Management review agenda and minutes templates","Corrective and preventive action (CAPA) system","Continual improvement project tracking"],
    deliverables:["Complete documentation library","Document control matrix","Internal audit toolkit","KPI monitoring templates","CAPA log and process"],
    duration:"2–6 weeks depending on scope",
    ideal:"Organizations already certified wanting to maintain compliance, or those who completed implementation and need robust ongoing systems.",
  }
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop:74, overflowX:"hidden", maxWidth:"100vw" }}>
      {/* HERO */}
      <section style={{ background:"#0a1f44", padding:"96px 24px 80px", position:"relative", overflow:"hidden", maxWidth:"100%" }}>
        <div style={{ position:"absolute", inset:0, maxWidth:"100%", background:"radial-gradient(ellipse 60% 70% at 60% 50%, rgba(26,86,219,0.2) 0%, transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ maxWidth:1240, margin:"0 auto", position:"relative", zIndex:2, textAlign:"center" }}>
          <span style={{ display:"inline-block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#3b82f6", background:"rgba(26,86,219,0.2)", border:"1px solid rgba(26,86,219,0.35)", padding:"6px 18px", borderRadius:50, marginBottom:20 }}>Our Services</span>
          <h1 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(36px,5vw,54px)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:20 }}>
            End-to-End ISO 9001 Support<br/>
            <span style={{ background:"linear-gradient(135deg,#3b82f6,#00c2ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>For Every Stage of Your Journey</span>
          </h1>
          <p style={{ fontSize:17, color:"rgba(255,255,255,0.6)", lineHeight:1.8, maxWidth:660, margin:"0 auto 36px" }}>
            Whether you are starting from scratch, mid-implementation, or looking to improve an existing system — we have a service designed precisely for where you are right now.
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
            {["Assessment","Implementation","Documentation","Training","Certification"].map(t => (
              <span key={t} style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:600, letterSpacing:"1.5px", textTransform:"uppercase", padding:"7px 16px", border:"1px solid rgba(255,255,255,0.18)", borderRadius:50, color:"rgba(255,255,255,0.6)" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

     

      {/* EACH SERVICE */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id} style={{ padding:"80px 24px", background: i%2===0 ? "#fff" : "#f4f7fb" }}>
          <div style={{ maxWidth:1240, margin:"0 auto" }}>
            <div style={{ display:"grid", gridTemplateColumns: i%2===0 ? "1fr 400px" : "400px 1fr", gap:56, alignItems:"start" }} className="svc-det-grid">

              {/* Content */}
              <div style={{ order: i%2===0 ? 1 : 2 }}>
                <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
                  <span style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"2px", color:"#1a56db" }}>{s.num}</span>
                  <span style={{ background:"rgba(26,86,219,0.08)", color:"#1a56db", fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", padding:"5px 12px", borderRadius:50 }}>{s.tag}</span>
                </div>
                <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(22px,3.2vw,34px)", fontWeight:900, color:"#0a1f44", lineHeight:1.2, marginBottom:16 }}>{s.headline}</h2>
                <p style={{ fontSize:16, color:"#3d4f6b", lineHeight:1.82, marginBottom:14 }}>{s.desc}</p>
                <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.82, marginBottom:28 }}>{s.fullDesc}</p>
                <div style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:32 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, background:"#f4f7fb", border:"1px solid #e4eaf5", borderRadius:8, padding:"10px 16px" }}>
                    <Clock size={15} color="#1a56db"/>
                    <span style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:600, color:"#3d4f6b" }}>{s.duration}</span>
                  </div>
                </div>
                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:16 }}>What is Included</h3>
                <ul style={{ listStyle:"none", marginBottom:32 }}>
                  {s.includes.map(item => (
                    <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"8px 0", borderBottom:"1px solid #f4f7fb", fontSize:14, color:"#3d4f6b", lineHeight:1.55 }}>
                      <CheckCircle2 size={15} color="#1a56db" style={{ flexShrink:0, marginTop:2 }}/>{item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"15px 32px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none", boxShadow:"0 6px 20px rgba(26,86,219,0.3)" }}>
                  Get a Quote for This Service <ArrowRight size={16}/>
                </Link>
              </div>

              {/* Sidebar */}
              <div style={{ order: i%2===0 ? 2 : 1, display:"flex", flexDirection:"column", gap:18 }}>
                {/* Price card */}
                <div style={{ background:"#0a1f44", borderRadius:16, padding:"32px 28px", position:"relative", overflow:"hidden", maxWidth:"100%" }}>
                  <div style={{ position:"absolute", top:-20, right:-20, width:100, height:100, borderRadius:"50%", background:"rgba(26,86,219,0.15)" }} />
                  <div style={{ color:"#1a56db", marginBottom:16 }}>{s.icon}</div>
                  <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:16, fontWeight:800, color:"#fff", marginBottom:16 }}>{s.name}</h3>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:16 }}>
                    <p style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginBottom:6 }}>Investment Starting From</p>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:40, fontWeight:900, color:"#fff" }}>{s.price} <span style={{ fontSize:14, color:"#3b82f6" }}>CAD</span></div>
                  </div>
                </div>

                {/* Deliverables */}
                <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:14, padding:"24px 28px" }}>
                  <h4 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:16 }}>Deliverables</h4>
                  {s.deliverables.map(d => (
                    <div key={d} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:"1px solid #f4f7fb", fontSize:13, color:"#3d4f6b" }}>
                      <ChevronRight size={14} color="#1a56db" style={{ flexShrink:0 }}/>{d}
                    </div>
                  ))}
                </div>

                {/* Ideal for */}
                <div style={{ background:"rgba(26,86,219,0.06)", border:"1px solid rgba(26,86,219,0.15)", borderRadius:14, padding:"20px 24px" }}>
                  <h4 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#1a56db", marginBottom:10 }}>Ideal For</h4>
                  <p style={{ fontSize:13, color:"#3d4f6b", lineHeight:1.7 }}>{s.ideal}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding:"80px 24px", background:"#0a1f44" }}>
        <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#fff", marginBottom:14 }}>Not Sure Which Service is Right?</h2>
          <p style={{ fontSize:17, color:"rgba(255,255,255,0.55)", lineHeight:1.8, marginBottom:36 }}>Book a free 30-minute consultation and we will help you identify exactly where to start and build a plan that fits your timeline and budget.</p>
          <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"16px 36px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none", boxShadow:"0 8px 28px rgba(26,86,219,0.4)" }}>
            Book Free Consultation <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      <style>{`
        @media(max-width:960px){
          .svc-det-grid{grid-template-columns:1fr!important;}
          .svc-det-grid > div{order:unset!important;}
        }
      `}</style>
    </div>
  );
}