"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Globe, Shield, Users, Briefcase, Star } from "lucide-react";

export default function AboutPage() {
  const fadeRefs = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach(e => { if(e.isIntersecting)(e.target as HTMLElement).classList.add("visible"); }), { threshold:0.1 });
    fadeRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const addRef = (el: HTMLElement | null) => { if(el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el); };

  const tagStyle: React.CSSProperties = { display:"inline-block", fontFamily:"var(--font-montserrat)", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#1a56db", background:"rgba(26,86,219,0.08)", padding:"6px 16px", borderRadius:50, marginBottom:14 };

  return (
    <div style={{ paddingTop:74, overflowX:"hidden", maxWidth:"100vw" }}>
      {/* HERO */}
      <section style={{ background:"#0a1f44", padding:"96px 24px 80px", position:"relative", overflow:"hidden", maxWidth:"100%" }}>
        <div style={{ position:"absolute", inset:0, maxWidth:"100%", background:"radial-gradient(ellipse 60% 80% at 40% 50%, rgba(26,86,219,0.2) 0%, transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ maxWidth:1240, margin:"0 auto", position:"relative", zIndex:2 }} className="about-hero-flex">
          <div className="about-hero-left">
            <span style={{ display:"inline-block", fontFamily:"var(--font-montserrat)", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#3b82f6", background:"rgba(26,86,219,0.2)", border:"1px solid rgba(26,86,219,0.35)", padding:"6px 18px", borderRadius:50, marginBottom:20 }}>About AEM</span>
            <h1 style={{ fontFamily:"var(--font-montserrat)", fontSize:"clamp(36px,5vw,54px)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:20 }}>
              More Than a Consultant —<br/><span style={{ background:"linear-gradient(135deg,#3b82f6,#00c2ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Your ISO 9001 Partner</span>
            </h1>
            <p style={{ fontSize:17, color:"rgba(255,255,255,0.62)", lineHeight:1.82, maxWidth:560 }}>
              AEM Quality ISO Consulting was built on one conviction: ISO 9001 should be a genuine business advantage, not a bureaucratic burden. Over 20 years of experience. Hundreds of quality challenges solved. One clear mission.
            </p>
          </div>
          <div className="about-hero-right">
            {[{n:"+20",l:"Years Experience"},{n:"7+",l:"Global Brands"},{n:"100%",l:"Success Rate"},{n:"2",l:"Languages"}].map(s => (
              <div key={s.n} style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:14, padding:"24px 20px", textAlign:"center" }}>
                <div style={{ fontFamily:"var(--font-montserrat)", fontSize:32, fontWeight:900, color:"#fff" }}>{s.n}</div>
                <div style={{ fontFamily:"var(--font-montserrat)", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6", marginTop:6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`.about-hero-flex{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;} .about-hero-right{display:grid;grid-template-columns:1fr 1fr;gap:16px;} @media(max-width:900px){.about-hero-flex{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* MISSION */}
      <section style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }} className="mission-flex">
            <div ref={addRef} className="fade-up">
              <span style={tagStyle}>Our Mission</span>
              <h2 style={{ fontFamily:"var(--font-montserrat)", fontSize:"clamp(28px,3.8vw,40px)", fontWeight:800, color:"#0a1f44", lineHeight:1.18, marginBottom:20 }}>
                Zero to Certified.<br/><span style={{ color:"#2563eb" }}>Efficiently.</span>
              </h2>
              <p style={{ fontSize:16, color:"#3d4f6b", lineHeight:1.82, marginBottom:20 }}>
                Our mission is simple: to simplify ISO 9001 certification through practical, efficient, and results-driven support that is genuinely tailored to your business reality. Not generic templates. Not overwhelming documentation. Real, practical quality management that works.
              </p>
              <p style={{ fontSize:16, color:"#3d4f6b", lineHeight:1.82, marginBottom:36 }}>
                We believe that quality management, done right, is one of the most powerful levers for business growth. It reduces errors, improves customer satisfaction, opens new markets, and creates a culture of continuous improvement that sustains performance for years.
              </p>
              <div style={{ background:"#f4f7fb", borderLeft:"4px solid #1a56db", borderRadius:"0 10px 10px 0", padding:"20px 24px" }}>
                <p style={{ fontSize:16, color:"#0a1f44", lineHeight:1.75, fontStyle:"italic", fontWeight:500 }}>
                  "Compliance. Quality. Excellence — not as buzzwords, but as the daily reality of how we support every client."
                </p>
                <p style={{ fontFamily:"var(--font-montserrat)", fontSize:11, fontWeight:700, color:"#1a56db", marginTop:10, letterSpacing:"1px" }}>— Abdelali El-Magueri, Founder</p>
              </div>
            </div>
            <div ref={addRef} className="fade-up" style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[
                { icon:<Award size={22}/>, title:"+20 Years of Industry Experience", desc:"From automotive and aerospace to manufacturing and services — Abdelali has worked with quality challenges across industries and continents." },
                { icon:<Globe size={22}/>, title:"International Track Record", desc:"Supporting world-class brands like Volvo, Valeo, Alstom, Sumitomo, Labinal, and Sylea has given us unmatched perspective on what works — and what doesn't." },
                { icon:<Users size={22}/>, title:"SME-Focused Expertise", desc:"While our experience spans global enterprises, our passion is helping SMEs access the same quality systems that large corporations use to win and retain customers." },
                { icon:<Shield size={22}/>, title:"Québec Registered & Committed", desc:"We are a legally registered Québec business (NEQ: 2282117623), fully committed to the Canadian business community and long-term client relationships." },
              ].map((item, i) => (
                <div key={i} style={{ display:"flex", gap:18, padding:"20px", background:"#fff", border:"1px solid #e4eaf5", borderRadius:12, transition:"all 0.3s" }}>
                  <div style={{ width:48, height:48, borderRadius:12, background:"rgba(26,86,219,0.08)", display:"flex", alignItems:"center", justifyContent:"center", color:"#1a56db", flexShrink:0 }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontFamily:"var(--font-montserrat)", fontSize:13, fontWeight:800, color:"#0a1f44", marginBottom:6 }}>{item.title}</h4>
                    <p style={{ fontSize:13, color:"#3d4f6b", lineHeight:1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`.mission-flex{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;} @media(max-width:900px){.mission-flex{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
      </section>

      {/* ABDELALI */}
      <section style={{ padding:"96px 24px", background:"#f4f7fb" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={tagStyle}>Meet the Founder</span>
            <h2 style={{ fontFamily:"var(--font-montserrat)", fontSize:"clamp(28px,4vw,40px)", fontWeight:800, color:"#0a1f44", lineHeight:1.15, marginBottom:14 }}>Abdelali El-Magueri</h2>
            <p style={{ fontSize:16, color:"#3d4f6b", lineHeight:1.75, maxWidth:580, margin:"0 auto" }}>Founder, Principal ISO Consultant, and quality management specialist with over two decades of international experience.</p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap:52, alignItems:"start" }} className="founder-flex">
            {/* Visual card */}
            <div ref={addRef} className="fade-up">
              <div style={{ background:"#0a1f44", borderRadius:20, padding:"40px 36px", position:"relative", overflow:"hidden", maxWidth:"100%", marginBottom:20 }}>
                <div style={{ position:"absolute", top:-30, right:-30, width:140, height:140, borderRadius:"50%", background:"rgba(26,86,219,0.15)" }} />
                <div style={{ position:"absolute", bottom:-20, left:-20, width:100, height:100, borderRadius:"50%", background:"rgba(0,194,255,0.07)" }} />
                <div style={{ width:80, height:80, borderRadius:"50%", background:"linear-gradient(135deg,#1a56db,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20, fontFamily:"var(--font-montserrat)", fontSize:28, fontWeight:900, color:"#fff" }}>A</div>
                <h3 style={{ fontFamily:"var(--font-montserrat)", fontSize:20, fontWeight:900, color:"#fff", marginBottom:4 }}>Abdelali El-Magueri</h3>
                <p style={{ fontFamily:"var(--font-montserrat)", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6", marginBottom:20 }}>Founder & Principal ISO Consultant</p>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.75, fontStyle:"italic" }}>"Quality is not an act — it is a habit. Our job is to make that habit natural for your organization."</p>
              </div>
              <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:16, padding:"24px" }}>
                <h4 style={{ fontFamily:"var(--font-montserrat)", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:16 }}>Key Industries Served</h4>
                {["Automotive & Transportation","Aerospace & Defense","Industrial Manufacturing","Professional Services","Healthcare & Life Sciences","Construction & Engineering"].map(ind => (
                  <div key={ind} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:"1px solid #f4f7fb", fontSize:13, color:"#3d4f6b" }}>
                    <div style={{ width:6, height:6, borderRadius:"50%", background:"#1a56db", flexShrink:0 }} /> {ind}
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div ref={addRef} className="fade-up">
              <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:16, padding:"40px 36px", marginBottom:24 }}>
                <h3 style={{ fontFamily:"var(--font-montserrat)", fontSize:20, fontWeight:800, color:"#0a1f44", marginBottom:16 }}>A Career Built on Quality</h3>
                <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.82, marginBottom:16 }}>
                  Abdelali El-Magueri's career in quality management spans over two decades of hands-on experience with some of the world's most demanding industries. Starting in the manufacturing sector, he quickly developed a deep expertise in ISO standards, lean quality methods, and systematic improvement approaches.
                </p>
                <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.82, marginBottom:16 }}>
                  Throughout his career, Abdelali has worked directly with quality teams at international industrial giants including Volvo, Valeo, Alstom Transport, Alstom Grid, Sumitomo, Labinal, and Sylea — each bringing unique challenges that sharpened his ability to find practical, effective solutions.
                </p>
                <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.82, marginBottom:24 }}>
                  After years of working within large organizations, Abdelali founded AEM Quality ISO Consulting with the goal of making that same level of expertise available to SMEs and growing businesses across Canada. Today, he works directly with business owners and quality teams to design, implement, and sustain quality management systems that actually work — and that make certification not just achievable, but genuinely valuable.
                </p>
                <h4 style={{ fontFamily:"var(--font-montserrat)", fontSize:13, fontWeight:800, color:"#0a1f44", marginBottom:16 }}>Core Competencies</h4>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                  {["ISO 9001:2015 Implementation","Gap Analysis & Auditing","Quality Manual Development","Process Mapping & Optimization","FMEA / AMDEC Analysis","8D & Root Cause Analysis","PDCA & Lean Methodology","Team Training & Coaching","KPI Frameworks & Dashboards","Certification Preparation"].map(c => (
                    <div key={c} style={{ display:"flex", alignItems:"center", gap:8, fontSize:13, color:"#3d4f6b" }}>
                      <CheckCircle2 size={14} color="#1a56db" style={{ flexShrink:0 }}/>{c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach */}
              <div style={{ background:"linear-gradient(135deg,#0a1f44 0%,#122755 100%)", borderRadius:16, padding:"32px 36px" }}>
                <h3 style={{ fontFamily:"var(--font-montserrat)", fontSize:16, fontWeight:800, color:"#fff", marginBottom:16 }}>Our Approach: Practical Over Bureaucratic</h3>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.6)", lineHeight:1.8, marginBottom:20 }}>
                  We believe the best quality management systems are the ones your team actually uses. Too many ISO implementations create mountains of documentation that sit on shelves collecting dust. AEM takes a different approach — every system we build is designed for real people doing real work.
                </p>
                <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
                  {[{icon:<Star size={16}/>, text:"Tailored to your business"},{icon:<Briefcase size={16}/>, text:"Built for real-world use"},{icon:<CheckCircle2 size={16}/>, text:"Certified outcomes"}].map((item,i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:8, color:"#3b82f6", fontFamily:"var(--font-montserrat)", fontSize:11, fontWeight:700 }}>
                      {item.icon} {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`.founder-flex{display:grid;grid-template-columns:1fr 2fr;gap:52px;align-items:start;} @media(max-width:900px){.founder-flex{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CLIENTS */}
      <section style={{ padding:"80px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <span style={tagStyle}>They Trusted Us</span>
            <h2 style={{ fontFamily:"var(--font-montserrat)", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:800, color:"#0a1f44", marginBottom:14 }}>International Experience,<br/><span style={{ color:"#2563eb" }}>Local Commitment</span></h2>
            <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.75, maxWidth:560, margin:"0 auto" }}>Our track record includes quality management and ISO 9001 compliance projects for some of the world's most recognized industrial groups.</p>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"28px 60px", marginBottom:40 }}>
            {["Volvo","Valeo","Alstom Transport","Alstom Grid","Sumitomo","Labinal","Sylea"].map(b => (
              <span key={b} style={{ fontFamily:"var(--font-montserrat)", fontSize:18, fontWeight:800, color:"#c8d0dc", letterSpacing:"1px", transition:"color 0.2s" }}>{b}</span>
            ))}
          </div>
          <p style={{ textAlign:"center", fontSize:14, color:"#8492a6", fontStyle:"italic" }}>Experience supporting international industrial groups and SMEs across quality management and ISO 9001 compliance projects.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"80px 24px", background:"#0a1f44" }}>
        <div style={{ maxWidth:720, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"var(--font-montserrat)", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#fff", marginBottom:14 }}>Work with Abdelali Directly</h2>
          <p style={{ fontSize:16, color:"rgba(255,255,255,0.55)", lineHeight:1.8, marginBottom:36 }}>Every client at AEM works directly with Abdelali — not a junior consultant or account manager. Book your free 30-minute consultation today.</p>
          <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"var(--font-montserrat)", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"16px 36px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
            Book Free Consultation <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </div>
  );
}