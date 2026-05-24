"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Award, Users, Target, Zap,
  Shield, TrendingUp, Search, Settings, GraduationCap, FileText, Phone
} from "lucide-react";

const tagStyle: React.CSSProperties = { display:"inline-block", fontFamily:"var(--font-montserrat)", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#1a56db", background:"rgba(26,86,219,0.08)", padding:"6px 16px", borderRadius:50, marginBottom:14 };
const h2Style: React.CSSProperties = { fontFamily:"var(--font-montserrat)", fontSize:"clamp(28px,4vw,42px)", fontWeight:800, color:"#0a1f44", lineHeight:1.15, marginBottom:16 };
const subStyle: React.CSSProperties = { fontSize:16, color:"#3d4f6b", lineHeight:1.75, maxWidth:620 };

const services = [
  { icon:<Search size={24}/>, name:"Diagnostic & Gap Analysis", desc:"A complete assessment of your management system to identify nonconformities, risks, and improvement areas before any implementation begins.", price:"$500" },
  { icon:<Settings size={24}/>, name:"ISO 9001 Implementation", desc:"End-to-end support to build your system in full compliance with ISO 9001, including Quality Manual and all operational procedures.", price:"$3,000" },
  { icon:<GraduationCap size={24}/>, name:"Training Services", desc:"Build your team's skills with practical training on quality tools and proven methodologies, delivered in-house or online sessions.", price:"$750" },
  { icon:<FileText size={24}/>, name:"Documentation & CI", desc:"Create clear, compliant documents and implement continuous improvement processes with internal audit and performance monitoring.", price:"$1,500" },
];
const whyItems = [
  { icon:<Target size={26}/>, title:"Personalized Approach", desc:"Tailored solutions to your reality, goals, and specific sector. No cookie-cutter consulting." },
  { icon:<TrendingUp size={26}/>, title:"Proven Results", desc:"Effective systems that consistently lead to certification and sustainable long-term performance." },
  { icon:<Zap size={26}/>, title:"Simplicity & Efficiency", desc:"We simplify ISO 9001 — making it practical and a real growth lever, not a bureaucratic burden." },
  { icon:<Shield size={26}/>, title:"Support Until Certified", desc:"We stay with you at every step until you obtain your certification. Never alone in the process." },
  { icon:<Award size={26}/>, title:"Recognized Expertise", desc:"Solid experience in ISO standards across international industrial groups and SMEs." },
];
const processSteps = [
  { title:"Free Consultation", desc:"30-minute session to understand your situation, goals, and timeline." },
  { title:"Diagnostic & Gap", desc:"Full assessment of your system vs ISO 9001 — every gap documented clearly." },
  { title:"Action Plan", desc:"A tailored roadmap with milestones, timelines, and clear responsibilities." },
  { title:"Build & Document", desc:"We build your quality manual, procedures, records, and train your team." },
  { title:"Certified ✓", desc:"You enter your certification audit confident, prepared, and ready to succeed." },
];

export default function HomePage() {
  const fadeRefs = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach(e => { if(e.isIntersecting)(e.target as HTMLElement).classList.add("visible"); }), { threshold:0.12 });
    fadeRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const addRef = (el: HTMLElement | null) => { if(el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el); };

  return (
    <div style={{ paddingTop:74 }}>
      {/* HERO */}
      <section style={{ minHeight:"100vh", background:"#0a1f44", display:"flex", alignItems:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 60% at 70% 40%, rgba(26,86,219,0.22) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 15% 80%, rgba(0,194,255,0.07) 0%, transparent 60%), linear-gradient(155deg,#0a1f44 0%,#0d2860 55%,#0a1f44 100%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)", backgroundSize:"64px 64px" }} />
        <div style={{ maxWidth:1240, margin:"0 auto", padding:"110px 24px", position:"relative", zIndex:2, width:"100%" }} className="hero-flex">
          <div className="hero-left-col">
            <div style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(26,86,219,0.18)", border:"1px solid rgba(26,86,219,0.38)", borderRadius:50, padding:"8px 20px", marginBottom:28 }}>
              <span style={{ width:7, height:7, borderRadius:"50%", background:"#00c2ff", display:"inline-block", animation:"pulse 2s infinite" }} />
              <span style={{ fontFamily:"var(--font-montserrat)", fontSize:10, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6" }}>ISO 9001 Specialist · Montréal, Canada</span>
            </div>
            <h1 style={{ fontFamily:"var(--font-montserrat)", fontSize:"clamp(38px,5.5vw,62px)", fontWeight:900, color:"#fff", lineHeight:1.07, marginBottom:22 }}>
              Simplifying<br/>
              <span style={{ background:"linear-gradient(135deg,#3b82f6,#00c2ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>ISO 9001</span><br/>
              Certification.
            </h1>
            <p style={{ fontSize:17, color:"rgba(255,255,255,0.62)", lineHeight:1.82, marginBottom:14, maxWidth:520 }}>End-to-end ISO 9001 support for SMEs and ambitious businesses — from your first assessment all the way to certification. We take the complexity out of compliance.</p>
            <p style={{ fontFamily:"var(--font-montserrat)", fontSize:11, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#3b82f6", marginBottom:36 }}>Assessment · Implementation · Documentation · Training · Certification</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:40 }}>
              {["Gap Analysis","Quality Manual","Internal Audits","Team Training","Certification Ready"].map(t => (
                <span key={t} style={{ fontFamily:"var(--font-montserrat)", fontSize:10, fontWeight:600, letterSpacing:"1.5px", textTransform:"uppercase", padding:"7px 16px", border:"1px solid rgba(255,255,255,0.18)", borderRadius:50, color:"rgba(255,255,255,0.65)" }}>{t}</span>
              ))}
            </div>
            <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
              <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"var(--font-montserrat)", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"16px 32px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none", boxShadow:"0 8px 28px rgba(26,86,219,0.4)" }}>
                Book Free 30-Min Consultation <ArrowRight size={16}/>
              </Link>
              <Link href="/services" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"var(--font-montserrat)", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"16px 28px", border:"2px solid rgba(255,255,255,0.22)", color:"rgba(255,255,255,0.8)", borderRadius:8, textDecoration:"none" }}>
                View Services
              </Link>
            </div>
          </div>
          <div className="hero-right-col">
            <div style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:20, padding:"36px 32px", backdropFilter:"blur(20px)" }}>
              <p style={{ fontFamily:"var(--font-montserrat)", fontSize:10, fontWeight:700, letterSpacing:"2.5px", textTransform:"uppercase", color:"#3b82f6", marginBottom:24 }}>Our Impact</p>
              {[
                { icon:<Award size={22}/>, num:"+20", label:"Years of Quality & Industrial Experience" },
                { icon:<CheckCircle2 size={22}/>, num:"100%", label:"Client Certification Success Rate" },
                { icon:<Users size={22}/>, num:"7+", label:"International Industrial Groups Served" },
                { icon:<Zap size={22}/>, num:"Fast", label:"Zero to Certified — Efficiently" },
              ].map((s,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:18, padding:"16px 0", borderBottom:i<3?"1px solid rgba(255,255,255,0.07)":"none" }}>
                  <div style={{ width:48, height:48, borderRadius:12, background:"linear-gradient(135deg,#1a56db,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", flexShrink:0 }}>{s.icon}</div>
                  <div>
                    <div style={{ fontFamily:"var(--font-montserrat)", fontSize:26, fontWeight:900, color:"#fff", lineHeight:1 }}>{s.num}</div>
                    <div style={{ fontSize:12, color:"rgba(255,255,255,0.5)", marginTop:4, lineHeight:1.4 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position:"absolute", bottom:-16, right:-16, background:"linear-gradient(135deg,#f0b429,#f59e0b)", borderRadius:12, padding:"14px 20px", textAlign:"center", boxShadow:"0 12px 36px rgba(240,180,41,0.45)" }}>
              <div style={{ fontFamily:"var(--font-montserrat)", fontSize:26, fontWeight:900, color:"#0a1f44" }}>FREE</div>
              <div style={{ fontFamily:"var(--font-montserrat)", fontSize:9, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"rgba(10,31,68,0.7)" }}>First Consultation</div>
            </div>
          </div>
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.8)}} .hero-flex{display:flex;align-items:center;gap:64px;} .hero-left-col{flex:1;} .hero-right-col{width:380px;flex-shrink:0;position:relative;} @media(max-width:1024px){.hero-right-col{display:none;}.hero-flex{display:block;}}`}</style>
      </section>

      {/* TRUST BAR */}
      <div style={{ background:"#112255", borderTop:"1px solid rgba(255,255,255,0.05)", padding:"40px 24px" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <p style={{ fontFamily:"var(--font-montserrat)", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", textAlign:"center", marginBottom:24 }}>Trusted by International & SME Clients</p>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px 44px" }}>
            {["Volvo","Valeo","Alstom Transport","Alstom Grid","Sumitomo","Labinal","Sylea"].map(b => (
              <span key={b} style={{ fontFamily:"var(--font-montserrat)", fontSize:13, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:"rgba(255,255,255,0.32)" }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={tagStyle}>Our Services</span>
            <h2 style={h2Style}>Everything You Need<br/><span style={{ color:"#2563eb" }}>From Zero to Certified</span></h2>
            <p style={{ ...subStyle, margin:"0 auto" }}>Four comprehensive service pillars, each designed to move your business closer to ISO 9001 certification with clarity and minimal disruption.</p>
          </div>
          <div className="services-4-grid">
            {services.map((s,i) => (
              <div key={i} className="svc-card" style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:18, padding:"34px 28px", transition:"all 0.35s ease" }}>
                <div style={{ fontFamily:"var(--font-montserrat)", fontSize:10, fontWeight:800, letterSpacing:"2px", color:"#1a56db", marginBottom:16 }}>0{i+1}</div>
                <div style={{ width:52, height:52, borderRadius:14, background:"rgba(26,86,219,0.08)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18, color:"#1a56db" }}>{s.icon}</div>
                <h3 style={{ fontFamily:"var(--font-montserrat)", fontSize:16, fontWeight:800, color:"#0a1f44", marginBottom:10, lineHeight:1.3 }}>{s.name}</h3>
                <p style={{ fontSize:14, color:"#3d4f6b", lineHeight:1.72, marginBottom:20 }}>{s.desc}</p>
                <div style={{ background:"#0a1f44", borderRadius:10, padding:"12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
                  <div>
                    <div style={{ fontFamily:"var(--font-montserrat)", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginBottom:2 }}>Starting From</div>
                    <div style={{ fontFamily:"var(--font-montserrat)", fontSize:20, fontWeight:900, color:"#fff" }}>{s.price} <span style={{ fontSize:11, color:"#3b82f6" }}>CAD</span></div>
                  </div>
                </div>
                <Link href="/services" style={{ display:"inline-flex", alignItems:"center", gap:6, fontFamily:"var(--font-montserrat)", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:"#1a56db", textDecoration:"none" }}>Learn More <ArrowRight size={13}/></Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:44 }}>
            <Link href="/services" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"var(--font-montserrat)", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"15px 36px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
              View All Services <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY AEM */}
      <section style={{ padding:"96px 24px", background:"#f4f7fb" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={tagStyle}>Why Choose AEM</span>
            <h2 style={h2Style}>Five Reasons Businesses<br/><span style={{ color:"#2563eb" }}>Choose AEM Over the Rest</span></h2>
            <p style={{ ...subStyle, margin:"0 auto" }}>We don't just consult — we partner with you through every phase until the certification is in your hands.</p>
          </div>
          <div className="why-5-grid">
            {whyItems.map((w,i) => (
              <div key={i} className="why-card" style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:16, padding:"32px 24px", textAlign:"center", transition:"all 0.3s" }}>
                <div style={{ width:60, height:60, borderRadius:"50%", background:"linear-gradient(135deg,rgba(26,86,219,0.1),rgba(0,194,255,0.1))", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 18px", color:"#1a56db" }}>{w.icon}</div>
                <h3 style={{ fontFamily:"var(--font-montserrat)", fontSize:12, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.5px", color:"#0a1f44", marginBottom:10 }}>{w.title}</h3>
                <p style={{ fontSize:13, color:"#3d4f6b", lineHeight:1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }} className="about-flex">
          <div className="about-left">
            <div style={{ background:"#0a1f44", borderRadius:20, padding:"52px 44px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:-40, right:-40, width:180, height:180, borderRadius:"50%", background:"rgba(26,86,219,0.12)" }} />
              <p style={{ fontFamily:"var(--font-montserrat)", fontSize:9, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#3b82f6", marginBottom:6 }}>Founder & Principal Consultant</p>
              <h3 style={{ fontFamily:"var(--font-montserrat)", fontSize:24, fontWeight:900, color:"#fff", marginBottom:24 }}>Abdelali El-Magueri</h3>
              <p style={{ fontSize:15, color:"rgba(255,255,255,0.62)", lineHeight:1.82, fontStyle:"italic", borderLeft:"3px solid #1a56db", paddingLeft:18, marginBottom:28 }}>"Our mission is to simplify ISO 9001 certification through practical, efficient and results-driven support tailored to your business. We become your quality team — so you can focus on growing yours."</p>
              <div style={{ display:"flex", gap:16 }}>
                {[{n:"+20",l:"Years Exp."},{n:"7+",l:"Global Clients"},{n:"100%",l:"Success Rate"}].map(s => (
                  <div key={s.n} style={{ background:"rgba(255,255,255,0.07)", borderRadius:10, padding:"14px 18px", flex:1, textAlign:"center" }}>
                    <div style={{ fontFamily:"var(--font-montserrat)", fontSize:24, fontWeight:900, color:"#3b82f6" }}>{s.n}</div>
                    <div style={{ fontFamily:"var(--font-montserrat)", fontSize:9, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginTop:4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="about-right">
            <span style={tagStyle}>About AEM</span>
            <h2 style={{ ...h2Style, marginBottom:20 }}>Your Dedicated ISO 9001<br/><span style={{ color:"#2563eb" }}>Partner in Québec</span></h2>
            <p style={{ ...subStyle, marginBottom:20 }}>AEM Quality ISO Consulting was founded with one clear mission: make ISO 9001 certification accessible, straightforward, and genuinely valuable for businesses of all sizes across Canada.</p>
            <p style={{ ...subStyle, marginBottom:32 }}>With over 20 years of hands-on experience supporting international industrial groups — from Volvo and Valeo to Alstom and Sumitomo — Abdelali brings world-class expertise to your business.</p>
            <ul style={{ listStyle:"none", marginBottom:36 }}>
              {["Bilingual support in English & French","Experience with international groups and local SMEs","Fully tailored approach — no copy-paste consulting","Registered Québec business (NEQ: 2282117623)"].map(item => (
                <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:12, padding:"10px 0", borderBottom:"1px solid #e4eaf5", fontSize:15, color:"#3d4f6b" }}>
                  <CheckCircle2 size={18} color="#1a56db" style={{ flexShrink:0, marginTop:2 }}/>{item}
                </li>
              ))}
            </ul>
            <Link href="/about" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"var(--font-montserrat)", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"14px 28px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
              Meet Abdelali <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section style={{ padding:"96px 24px", background:"#0a1f44" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={{ ...tagStyle, background:"rgba(26,86,219,0.2)", color:"#3b82f6" }}>How It Works</span>
            <h2 style={{ ...h2Style, color:"#fff" }}>From First Call to<br/><span style={{ color:"#00c2ff" }}>Certified Business</span></h2>
            <p style={{ ...subStyle, color:"rgba(255,255,255,0.55)", margin:"0 auto" }}>A clear, predictable 5-step process so you always know where you are and what comes next.</p>
          </div>
          <div className="process-5-grid">
            {processSteps.map((step,i) => (
              <div key={i} className="" style={{ textAlign:"center", padding:"28px 16px", position:"relative" }}>
                <div style={{ width:56, height:56, borderRadius:"50%", background:"linear-gradient(135deg,#1a56db,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontFamily:"var(--font-montserrat)", fontSize:20, fontWeight:900, color:"#fff", boxShadow:"0 6px 20px rgba(26,86,219,0.4)" }}>{i+1}</div>
                <h3 style={{ fontFamily:"var(--font-montserrat)", fontSize:12, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.5px", color:"#fff", marginBottom:10 }}>{step.title}</h3>
                <p style={{ fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.7 }}>{step.desc}</p>
                {i<4 && <div style={{ position:"absolute", right:-8, top:28, color:"rgba(255,255,255,0.2)", fontSize:22 }} className="proc-arrow">→</div>}
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:44 }}>
            <Link href="/process" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"var(--font-montserrat)", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"15px 36px", border:"2px solid rgba(255,255,255,0.25)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
              See Full Process <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding:"72px 24px", background:"linear-gradient(135deg,#0a1f44 0%,#1a3a7a 100%)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 50% 70% at 80% 50%, rgba(26,86,219,0.28) 0%, transparent 70%)" }} />
        <div style={{ maxWidth:1240, margin:"0 auto", position:"relative", zIndex:2 }} className="cta-banner-inner">
          <div className="cta-banner-text">
            <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(22px,3.5vw,38px)", fontWeight:900, color:"#fff", marginBottom:10, lineHeight:1.2 }}>Ready to Start Your <span style={{ color:"#00c2ff" }}>ISO 9001 Journey?</span></h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.55)", lineHeight:1.7 }}>Book your free 30-minute consultation — no commitment, just clarity and a clear path forward.</p>
          </div>
          <div className="cta-banner-btns">
            <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"16px 28px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none", boxShadow:"0 6px 20px rgba(26,86,219,0.4)" }}>
              Book Free Consultation <ArrowRight size={16}/>
            </Link>
            <a href="tel:+15145526936" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"15px 28px", border:"2px solid rgba(255,255,255,0.3)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
              <Phone size={16}/> +1 514 552 6936
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .services-4-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;align-items:stretch;}
        .svc-card{display:flex;flex-direction:column;}
        .svc-card > p{flex:1;}
        .why-5-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;}
        .process-5-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;}
        .about-flex{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;}
        .svc-card:hover{border-color:transparent!important;box-shadow:0 20px 60px rgba(10,31,68,0.14)!important;transform:translateY(-6px)!important;}
        .why-card:hover{background:#0a1f44!important;border-color:transparent!important;}
        .why-card:hover h3{color:#fff!important;}
        .why-card:hover p{color:rgba(255,255,255,0.55)!important;}
        .why-card:hover div{background:linear-gradient(135deg,#1a56db,#2563eb)!important;color:#fff!important;}
        .cta-banner-inner{display:flex;align-items:center;justify-content:space-between;gap:36px;}
        .cta-banner-btns{display:flex;gap:14px;flex-shrink:0;}
        @media(max-width:1100px){.services-4-grid{grid-template-columns:1fr 1fr!important;}.why-5-grid{grid-template-columns:1fr 1fr!important;}.process-5-grid{grid-template-columns:1fr 1fr!important;}.proc-arrow{display:none!important;}}
        @media(max-width:768px){
          .services-4-grid{grid-template-columns:1fr!important;}
          .why-5-grid{grid-template-columns:1fr!important;}
          .about-flex{grid-template-columns:1fr!important;gap:40px!important;}
          .cta-banner-inner{flex-direction:column!important;text-align:center!important;align-items:stretch!important;gap:24px!important;}
          .cta-banner-btns{flex-direction:column!important;width:100%!important;}
          .cta-banner-text h2{font-size:22px!important;}
        }
      `}</style>
    </div>
  );
}