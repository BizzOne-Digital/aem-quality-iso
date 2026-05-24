"use client";
import { useState } from "react";
import { Phone, Mail, Globe, MapPin, Shield, ArrowRight, CheckCircle2, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ fname:"", lname:"", email:"", phone:"", company:"", service:"", budget:"", message:"", how:"" });
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async () => {
    if(!form.fname || !form.lname || !form.email || !form.message) { alert("Please fill in all required fields."); return; }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if(res.ok) { setStatus("success"); setForm({ fname:"", lname:"", email:"", phone:"", company:"", service:"", budget:"", message:"", how:"" }); }
      else { console.error("API error:", data); setStatus("error"); }
    } catch(err) { console.error("Fetch error:", err); setStatus("error"); }
  };

  const inputStyle: React.CSSProperties = { width:"100%", fontFamily:"var(--font-barlow,Barlow,sans-serif)", fontSize:15, color:"#0d1b35", background:"#f4f7fb", border:"1px solid #e4eaf5", borderRadius:8, padding:"13px 16px", outline:"none", transition:"all 0.2s", appearance:"none" as const };
  const labelStyle: React.CSSProperties = { display:"block", fontFamily:"var(--font-montserrat)", fontSize:10, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:8 };

  return (
    <div style={{ paddingTop:74, overflowX:"hidden", maxWidth:"100vw" }}>
      {/* HERO */}
      <section style={{ background:"#0a1f44", padding:"96px 24px 80px", position:"relative", overflow:"hidden", maxWidth:"100%" }}>
        <div style={{ position:"absolute", inset:0, maxWidth:"100%", background:"radial-gradient(ellipse 70% 60% at 60% 50%, rgba(26,86,219,0.2) 0%, transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ maxWidth:800, margin:"0 auto", position:"relative", zIndex:2, textAlign:"center" }}>
          <span style={{ display:"inline-block", fontFamily:"var(--font-montserrat)", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#3b82f6", background:"rgba(26,86,219,0.2)", border:"1px solid rgba(26,86,219,0.35)", padding:"6px 18px", borderRadius:50, marginBottom:20 }}>Contact Us</span>
          <h1 style={{ fontFamily:"var(--font-montserrat)", fontSize:"clamp(36px,5vw,54px)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:18 }}>
            Start Your ISO 9001<br/><span style={{ background:"linear-gradient(135deg,#3b82f6,#00c2ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Journey Today</span>
          </h1>
          <p style={{ fontSize:17, color:"rgba(255,255,255,0.6)", lineHeight:1.8, marginBottom:36 }}>
            Book your free 30-minute consultation with Abdelali El-Magueri. No pressure, no commitment — just a clear conversation about your business and how ISO 9001 can work for you.
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:24, flexWrap:"wrap" }}>
            {[
              { icon:<Clock size={16}/>, text:"Response within 24 hours" },
              { icon:<CheckCircle2 size={16}/>, text:"Free 30-min consultation" },
              { icon:<Shield size={16}/>, text:"No obligation" },
            ].map((b,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:8, color:"rgba(255,255,255,0.6)", fontSize:13, fontFamily:"var(--font-montserrat)", fontWeight:600 }}>
                <span style={{ color:"#3b82f6" }}>{b.icon}</span>{b.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding:"80px 24px", background:"#f4f7fb" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div className="contact-main-grid">
            {/* INFO SIDEBAR */}
            <div>
              {/* Contact Card */}
              <div style={{ background:"#0a1f44", borderRadius:20, padding:"40px 36px", marginBottom:24, position:"relative", overflow:"hidden", maxWidth:"100%" }}>
                <div style={{ position:"absolute", bottom:-30, right:-30, width:140, height:140, borderRadius:"50%", background:"rgba(26,86,219,0.12)" }} />
                <h3 style={{ fontFamily:"var(--font-montserrat)", fontSize:18, fontWeight:800, color:"#fff", marginBottom:8 }}>Get in Touch</h3>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", lineHeight:1.7, marginBottom:32 }}>Reach out through any channel — we respond within 24 hours on business days.</p>
                {[
                  { icon:<Phone size={18}/>, label:"Phone", val:"+1 514 552 6936", href:"tel:+15145526936" },
                  { icon:<Mail size={18}/>, label:"Email", val:"aemqualityiso@gmail.com", href:"mailto:aemqualityiso@gmail.com" },
                  { icon:<Globe size={18}/>, label:"Website", val:"www.aemqualityiso.com", href:"https://www.aemqualityiso.com" },
                  { icon:<MapPin size={18}/>, label:"Location", val:"Montréal, Québec, Canada", href:"#" },
                ].map((item,i) => (
                  <a key={i} href={item.href} style={{ display:"flex", alignItems:"flex-start", gap:16, marginBottom:20, textDecoration:"none" }}>
                    <div style={{ width:44, height:44, borderRadius:10, background:"rgba(26,86,219,0.25)", display:"flex", alignItems:"center", justifyContent:"center", color:"#3b82f6", flexShrink:0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily:"var(--font-montserrat)", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6", marginBottom:3 }}>{item.label}</div>
                      <div style={{ fontSize:14, color:"rgba(255,255,255,0.8)", fontWeight:500 }}>{item.val}</div>
                    </div>
                  </a>
                ))}
                <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:20, marginTop:8 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <Shield size={14} color="#3b82f6"/>
                    <span style={{ fontFamily:"var(--font-montserrat)", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(255,255,255,0.4)" }}>Québec Registered · NEQ: 2282117623</span>
                  </div>
                </div>
              </div>

              {/* Why Contact */}
              <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:16, padding:"28px" }}>
                <h4 style={{ fontFamily:"var(--font-montserrat)", fontSize:12, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:18 }}>What to Expect</h4>
                {[
                  { icon:<Clock size={16}/>, title:"Quick Response", desc:"We reply to all inquiries within 24 business hours." },
                  { icon:<CheckCircle2 size={16}/>, title:"No Pressure", desc:"Our consultation is genuinely free — no hard sell, no commitment." },
                  { icon:<Shield size={16}/>, title:"Direct Access", desc:"You'll speak directly with Abdelali, not a sales team." },
                ].map((item,i) => (
                  <div key={i} style={{ display:"flex", gap:14, padding:"12px 0", borderBottom: i<2 ? "1px solid #f4f7fb":"none" }}>
                    <div style={{ width:36, height:36, borderRadius:10, background:"rgba(26,86,219,0.08)", display:"flex", alignItems:"center", justifyContent:"center", color:"#1a56db", flexShrink:0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily:"var(--font-montserrat)", fontSize:12, fontWeight:700, color:"#0a1f44", marginBottom:4 }}>{item.title}</div>
                      <div style={{ fontSize:13, color:"#3d4f6b" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:20, padding:"48px 40px" }}>
              <h2 style={{ fontFamily:"var(--font-montserrat)", fontSize:22, fontWeight:800, color:"#0a1f44", marginBottom:6 }}>Send Us a Message</h2>
              <p style={{ fontSize:14, color:"#3d4f6b", marginBottom:32 }}>Fill in the form below and we'll get back to you within 24 hours. All fields marked * are required.</p>

              {status === "success" && (
                <div style={{ background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.3)", borderRadius:10, padding:"20px 24px", marginBottom:24, display:"flex", alignItems:"flex-start", gap:14 }}>
                  <CheckCircle2 size={22} color="#22c55e" style={{ flexShrink:0, marginTop:2 }}/>
                  <div>
                    <div style={{ fontFamily:"var(--font-montserrat)", fontSize:13, fontWeight:700, color:"#22c55e", marginBottom:4 }}>Message Sent Successfully!</div>
                    <div style={{ fontSize:13, color:"#3d4f6b" }}>Thank you for reaching out. We'll reply to your email within 24 hours. Check your inbox for a confirmation email from us.</div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div style={{ background:"rgba(239,68,68,0.1)", border:"1px solid rgba(239,68,68,0.3)", borderRadius:10, padding:"18px 22px", marginBottom:24, fontSize:13, color:"#ef4444", fontFamily:"var(--font-montserrat)", fontWeight:600 }}>
                  ⚠️ Something went wrong. Please try again or email us directly at aemqualityiso@gmail.com
                </div>
              )}

              <div className="form-row-2">
                <div style={{ marginBottom:20 }}>
                  <label style={labelStyle}>First Name *</label>
                  <input name="fname" value={form.fname} onChange={handle} placeholder="John" style={inputStyle} />
                </div>
                <div style={{ marginBottom:20 }}>
                  <label style={labelStyle}>Last Name *</label>
                  <input name="lname" value={form.lname} onChange={handle} placeholder="Smith" style={inputStyle} />
                </div>
              </div>
              <div className="form-row-2">
                <div style={{ marginBottom:20 }}>
                  <label style={labelStyle}>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="john@company.com" style={inputStyle} />
                </div>
                <div style={{ marginBottom:20 }}>
                  <label style={labelStyle}>Phone Number</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+1 (514) 000-0000" style={inputStyle} />
                </div>
              </div>
              <div style={{ marginBottom:20 }}>
                <label style={labelStyle}>Company Name</label>
                <input name="company" value={form.company} onChange={handle} placeholder="Your Company Inc." style={inputStyle} />
              </div>
              <div className="form-row-2">
                <div style={{ marginBottom:20 }}>
                  <label style={labelStyle}>Service Interested In</label>
                  <select name="service" value={form.service} onChange={handle} style={inputStyle}>
                    <option value="">— Select a Service —</option>
                    <option>Diagnostic & Gap Analysis ($500 CAD+)</option>
                    <option>ISO 9001 Implementation ($3,000 CAD+)</option>
                    <option>Training Services ($750 CAD/session+)</option>
                    <option>Documentation & Continuous Improvement ($1,500 CAD+)</option>
                    <option>Full Package</option>
                    <option>Not Sure Yet — Need Guidance</option>
                  </select>
                </div>
                <div style={{ marginBottom:20 }}>
                  <label style={labelStyle}>How Did You Hear About Us?</label>
                  <select name="how" value={form.how} onChange={handle} style={inputStyle}>
                    <option value="">— Select —</option>
                    <option>Google Search</option>
                    <option>LinkedIn</option>
                    <option>Referral / Word of Mouth</option>
                    <option>Social Media</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom:28 }}>
                <label style={labelStyle}>Message *</label>
                <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell us about your business, what you're trying to achieve, any specific challenges you're facing, and any questions you have about ISO 9001..." style={{ ...inputStyle, resize:"vertical" }} />
              </div>
              <button
                onClick={submit}
                disabled={status==="sending"}
                style={{ width:"100%", fontFamily:"var(--font-montserrat)", fontSize:12, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", padding:"17px 32px", background: status==="sending" ? "rgba(26,86,219,0.6)" : "linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", border:"none", borderRadius:8, cursor: status==="sending" ? "not-allowed":"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:10, boxShadow:"0 8px 24px rgba(26,86,219,0.3)", transition:"all 0.3s" }}
              >
                {status==="sending" ? "Sending..." : <><Send size={16}/> Send Message & Book Free Consultation</>}
              </button>
              <p style={{ fontSize:12, color:"#8492a6", textAlign:"center", marginTop:14 }}>By submitting this form you agree to be contacted by AEM Quality ISO Consulting. We respect your privacy and will never share your information.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-main-grid{display:grid;grid-template-columns:380px 1fr;gap:36px;align-items:start;}
        .form-row-2{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        @media(max-width:960px){.contact-main-grid{grid-template-columns:1fr!important;}}
        @media(max-width:600px){.form-row-2{grid-template-columns:1fr!important;}}
        input:focus, select:focus, textarea:focus { border-color:#1a56db!important; background:#fff!important; box-shadow:0 0 0 3px rgba(26,86,219,0.1)!important; }
      `}</style>
    </div>
  );
}