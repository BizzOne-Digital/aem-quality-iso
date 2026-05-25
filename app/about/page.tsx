"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Globe, Shield, Users, Briefcase, Star, Target, TrendingUp } from "lucide-react";

const T = {
  en: {
    tag:"About AEM", hero_title:"More Than a Consultant —", hero_highlight:"Your ISO 9001 Partner",
    hero_sub:"AEM Quality & ISO Consulting was built on one conviction: ISO 9001 should be a genuine business advantage, not a bureaucratic burden. Over 20 years of experience. Hundreds of quality challenges solved. One clear mission.",
    mission_tag:"Our Mission", mission_title:"Zero to Certified.", mission_title2:"Efficiently.",
    mission_p1:"Our mission is simple: to simplify ISO 9001 certification through practical, efficient, and results-driven support that is genuinely tailored to your business reality. Not generic templates. Not overwhelming documentation. Real, practical quality management that works.",
    mission_p2:"We believe that quality management, done right, is one of the most powerful levers for business growth. It reduces errors, improves customer satisfaction, opens new markets, and creates a culture of continuous improvement that sustains performance for years.",
    mission_quote:"Compliance. Quality. Excellence — not as buzzwords, but as the daily reality of how we support every client.",
    m1_title:"+20 Years of Industry Experience", m1_desc:"From automotive and aerospace to manufacturing and services — Abdelali has worked with quality challenges across industries and continents.",
    m2_title:"International Track Record", m2_desc:"Supporting world-class brands like Volvo, Valeo, Alstom, Sumitomo, Labinal and Sylea has given us unmatched perspective on what works.",
    m3_title:"SME-Focused Expertise", m3_desc:"While our experience spans global enterprises, our passion is helping SMEs access the same quality systems that large corporations use to win clients.",
    m4_title:"Québec Registered & Committed", m4_desc:"We are a legally registered Québec business (NEQ: 2282117623), fully committed to the Canadian business community.",
    founder_tag:"Meet the Founder",
    founder_name:"Abdelali El-Magueri",
    founder_title:"Founder & Principal ISO Consultant",
    founder_sub:"Quality management specialist with over two decades of international experience.",
    founder_quote:"Quality is not an act — it is a habit. Our job is to make that habit natural for your organization.",
    founder_bio1:"Abdelali El-Magueri's career in quality management spans over two decades of hands-on experience with some of the world's most demanding industries. Starting in the manufacturing sector, he quickly developed deep expertise in ISO standards, lean quality methods, and systematic improvement approaches.",
    founder_bio2:"Throughout his career, Abdelali has worked directly with quality teams at international industrial giants including Volvo, Valeo, Alstom Transport, Alstom Grid, Sumitomo, Labinal, and Sylea — each bringing unique challenges that sharpened his ability to find practical, effective solutions.",
    founder_bio3:"After years of working within large organizations, Abdelali founded AEM Quality ISO Consulting with the goal of making that same level of expertise available to SMEs and growing businesses across Canada.",
    competencies:"Core Competencies",
    industries_tag:"Key Industries Served",
    approach_title:"Our Approach: Practical Over Bureaucratic",
    approach_desc:"We believe the best quality management systems are the ones your team actually uses. Too many ISO implementations create mountains of documentation that sit on shelves collecting dust. AEM takes a different approach — every system we build is designed for real people doing real work.",
    trust_tag:"They Trusted Us",
    trust_title:"International Experience,", trust_title2:"Local Commitment",
    trust_sub:"Our track record includes quality management and ISO 9001 compliance projects for some of the world's most recognized industrial groups.",
    testi_tag:"Client Testimonials",
    testi_title:"What Our Clients Say",
    testi_sub:"Real feedback from businesses we have helped achieve ISO 9001 certification.",
    t1_text:"AEM simplified our ISO certification process and helped us obtain certification faster than expected. Highly professional and practical approach.",
    t1_name:"Operations Manager", t1_company:"Manufacturing SME, Québec",
    t2_text:"Professional, practical and highly experienced consultant. Abdelali understood our industry immediately and delivered exactly what we needed.",
    t2_name:"Quality Director", t2_company:"Industrial Services Company",
    t3_text:"Excellent support from gap analysis to final certification. The documentation was clear, compliant and ready to use from day one.",
    t3_name:"CEO", t3_company:"Engineering Firm, Canada",
    cta_title:"Work with Abdelali Directly",
    cta_sub:"Every client at AEM works directly with Abdelali — not a junior consultant or account manager. Book your free 30-minute consultation today.",
    cta_btn:"Book Free Consultation",
    stats_exp:"Years Experience", stats_clients:"Global Clients", stats_rate:"Success Rate", stats_lang:"Languages",
  },
  fr: {
    tag:"À propos d'AEM", hero_title:"Plus qu'un consultant —", hero_highlight:"Votre partenaire ISO 9001",
    hero_sub:"AEM Quality & ISO Consulting a été fondé sur une conviction : l'ISO 9001 doit être un véritable avantage commercial, pas un fardeau bureaucratique. Plus de 20 ans d'expérience. Des centaines de défis qualité résolus. Une mission claire.",
    mission_tag:"Notre mission", mission_title:"De zéro à certifié.", mission_title2:"Efficacement.",
    mission_p1:"Notre mission est simple : simplifier la certification ISO 9001 grâce à un accompagnement pratique, efficace et axé sur les résultats, véritablement adapté à votre réalité d'entreprise. Pas de modèles génériques. Pas de documentation écrasante. Une gestion de la qualité réelle et pratique qui fonctionne.",
    mission_p2:"Nous croyons que la gestion de la qualité, bien faite, est l'un des leviers de croissance les plus puissants pour une entreprise. Elle réduit les erreurs, améliore la satisfaction client, ouvre de nouveaux marchés et crée une culture d'amélioration continue.",
    mission_quote:"Conformité. Qualité. Excellence — pas comme des mots à la mode, mais comme la réalité quotidienne de la façon dont nous accompagnons chaque client.",
    m1_title:"+20 ans d'expérience industrielle", m1_desc:"De l'automobile à l'aérospatiale, en passant par la fabrication et les services — Abdelali a travaillé sur des défis qualité à travers les industries et les continents.",
    m2_title:"Bilan international", m2_desc:"Avoir accompagné des marques mondiales comme Volvo, Valeo, Alstom, Sumitomo, Labinal et Sylea nous a donné une perspective inégalée.",
    m3_title:"Expertise orientée PME", m3_desc:"Bien que notre expérience couvre les grandes entreprises mondiales, notre passion est d'aider les PME à accéder aux mêmes systèmes qualité.",
    m4_title:"Entreprise québécoise enregistrée", m4_desc:"Nous sommes une entreprise légalement enregistrée au Québec (NEQ : 2282117623), pleinement engagée envers la communauté d'affaires canadienne.",
    founder_tag:"Rencontrez le fondateur",
    founder_name:"Abdelali El-Magueri",
    founder_title:"Fondateur & Consultant ISO Principal",
    founder_sub:"Spécialiste en gestion de la qualité avec plus de deux décennies d'expérience internationale.",
    founder_quote:"La qualité n'est pas un acte — c'est une habitude. Notre travail est de rendre cette habitude naturelle pour votre organisation.",
    founder_bio1:"La carrière d'Abdelali El-Magueri en gestion de la qualité s'étend sur plus de deux décennies d'expérience pratique avec certaines des industries les plus exigeantes au monde.",
    founder_bio2:"Tout au long de sa carrière, Abdelali a travaillé directement avec des équipes qualité chez des géants industriels internationaux incluant Volvo, Valeo, Alstom Transport, Alstom Grid, Sumitomo, Labinal et Sylea.",
    founder_bio3:"Après des années au sein de grandes organisations, Abdelali a fondé AEM Quality ISO Consulting dans le but de mettre ce même niveau d'expertise à la disposition des PME et entreprises en croissance partout au Canada.",
    competencies:"Compétences clés",
    industries_tag:"Secteurs clés servis",
    approach_title:"Notre approche : pratique avant tout",
    approach_desc:"Nous croyons que les meilleurs systèmes de management de la qualité sont ceux que votre équipe utilise réellement. AEM adopte une approche différente — chaque système que nous construisons est conçu pour de vraies personnes effectuant un vrai travail.",
    trust_tag:"Ils nous ont fait confiance",
    trust_title:"Expérience internationale,", trust_title2:"Engagement local",
    trust_sub:"Notre bilan comprend des projets de gestion de la qualité et de conformité ISO 9001 pour certains des groupes industriels les plus reconnus au monde.",
    testi_tag:"Témoignages clients",
    testi_title:"Ce que disent nos clients",
    testi_sub:"Retours réels d'entreprises que nous avons aidées à obtenir la certification ISO 9001.",
    t1_text:"AEM a simplifié notre processus de certification ISO et nous a aidés à obtenir la certification plus rapidement que prévu. Approche très professionnelle et pratique.",
    t1_name:"Directeur des opérations", t1_company:"PME manufacturière, Québec",
    t2_text:"Consultant professionnel, pratique et très expérimenté. Abdelali a immédiatement compris notre secteur et a livré exactement ce dont nous avions besoin.",
    t2_name:"Directeur Qualité", t2_company:"Entreprise de services industriels",
    t3_text:"Excellent accompagnement de l'analyse des écarts jusqu'à la certification finale. La documentation était claire, conforme et prête à l'emploi dès le premier jour.",
    t3_name:"PDG", t3_company:"Cabinet d'ingénierie, Canada",
    cta_title:"Travaillez directement avec Abdelali",
    cta_sub:"Chaque client chez AEM travaille directement avec Abdelali — pas un consultant junior. Réservez votre consultation gratuite de 30 minutes aujourd'hui.",
    cta_btn:"Réserver une consultation gratuite",
    stats_exp:"Ans d'expérience", stats_clients:"Clients mondiaux", stats_rate:"Taux de réussite", stats_lang:"Langues",
  }
};

export default function AboutPage() {
  const [lang, setLang] = useState<"en"|"fr">("en");
  const t = T[lang];

  const tag: React.CSSProperties = { display:"inline-block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#1a56db", background:"rgba(26,86,219,0.08)", padding:"6px 16px", borderRadius:50, marginBottom:14 };

  const competencies = ["ISO 9001:2015 Implementation","Gap Analysis & Auditing","Quality Manual Development","Process Mapping & Optimization","FMEA / AMDEC Analysis","8D & Root Cause Analysis","PDCA & Lean Methodology","Team Training & Coaching","KPI Frameworks & Dashboards","Certification Preparation"];
  const industries = ["Automotive & Transportation","Aerospace & Defense","Industrial Manufacturing","Professional Services","Healthcare & Life Sciences","Construction & Engineering","Logistics & Supply Chain","SMEs — All Sectors"];

  return (
    <div style={{ paddingTop:74, overflowX:"hidden", maxWidth:"100vw" }}>
      {/* LANG SWITCHER */}
      <div style={{ position:"fixed", top:18, right:80, zIndex:1100, display:"flex", gap:4, background:"#f0f4f8", borderRadius:20, padding:"3px 4px" }}>
        <button onClick={()=>setLang("en")} style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"1px", padding:"5px 12px", borderRadius:16, border:"none", cursor:"pointer", background:lang==="en"?"#1a56db":"transparent", color:lang==="en"?"#fff":"#3d4f6b" }}>EN</button>
        <button onClick={()=>setLang("fr")} style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"1px", padding:"5px 12px", borderRadius:16, border:"none", cursor:"pointer", background:lang==="fr"?"#1a56db":"transparent", color:lang==="fr"?"#fff":"#3d4f6b" }}>FR</button>
      </div>

      {/* HERO */}
      <section style={{ background:"#0a1f44", padding:"96px 24px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 80% at 40% 50%, rgba(26,86,219,0.2) 0%, transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ maxWidth:1240, margin:"0 auto", position:"relative", zIndex:2 }} className="about-hero-flex">
          <div>
            <span style={{ display:"inline-block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#3b82f6", background:"rgba(26,86,219,0.2)", border:"1px solid rgba(26,86,219,0.35)", padding:"6px 18px", borderRadius:50, marginBottom:20 }}>{t.tag}</span>
            <h1 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(32px,5vw,52px)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:20 }}>
              {t.hero_title}<br/>
              <span style={{ background:"linear-gradient(135deg,#3b82f6,#00c2ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{t.hero_highlight}</span>
            </h1>
            <p style={{ fontSize:17, color:"rgba(255,255,255,0.62)", lineHeight:1.82, maxWidth:580 }}>{t.hero_sub}</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
            {[
              { n:"+20", l:t.stats_exp },
              { n:"7+", l:t.stats_clients },
              { n:"100%", l:t.stats_rate },
              { n:"2", l:t.stats_lang },
            ].map(s => (
              <div key={s.n} style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:14, padding:"24px 20px", textAlign:"center" }}>
                <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:32, fontWeight:900, color:"#fff" }}>{s.n}</div>
                <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6", marginTop:6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`.about-hero-flex{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;} @media(max-width:900px){.about-hero-flex{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* MISSION */}
      <section style={{ padding:"88px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div className="mission-flex">
            <div>
              <span style={tag}>{t.mission_tag}</span>
              <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(26px,3.8vw,40px)", fontWeight:800, color:"#0a1f44", lineHeight:1.18, marginBottom:20 }}>
                {t.mission_title}<br/><span style={{ color:"#2563eb" }}>{t.mission_title2}</span>
              </h2>
              <p style={{ fontSize:16, color:"#3d4f6b", lineHeight:1.82, marginBottom:18 }}>{t.mission_p1}</p>
              <p style={{ fontSize:16, color:"#3d4f6b", lineHeight:1.82, marginBottom:32 }}>{t.mission_p2}</p>
              <div style={{ background:"#f4f7fb", borderLeft:"4px solid #1a56db", borderRadius:"0 10px 10px 0", padding:"20px 24px" }}>
                <p style={{ fontSize:16, color:"#0a1f44", lineHeight:1.75, fontStyle:"italic", fontWeight:500 }}>"{t.mission_quote}"</p>
                <p style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, color:"#1a56db", marginTop:10, letterSpacing:"1px" }}>— Abdelali El-Magueri, Founder</p>
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[
                { icon:<Award size={22}/>, title:t.m1_title, desc:t.m1_desc },
                { icon:<Globe size={22}/>, title:t.m2_title, desc:t.m2_desc },
                { icon:<Users size={22}/>, title:t.m3_title, desc:t.m3_desc },
                { icon:<Shield size={22}/>, title:t.m4_title, desc:t.m4_desc },
              ].map((item,i) => (
                <div key={i} style={{ display:"flex", gap:18, padding:"20px", background:"#fff", border:"1px solid #e4eaf5", borderRadius:12 }}>
                  <div style={{ width:48, height:48, borderRadius:12, background:"rgba(26,86,219,0.08)", display:"flex", alignItems:"center", justifyContent:"center", color:"#1a56db", flexShrink:0 }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontFamily:"Montserrat,sans-serif", fontSize:13, fontWeight:800, color:"#0a1f44", marginBottom:6 }}>{item.title}</h4>
                    <p style={{ fontSize:13, color:"#3d4f6b", lineHeight:1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`.mission-flex{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start;} @media(max-width:900px){.mission-flex{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
      </section>

      {/* FOUNDER */}
      <section style={{ padding:"88px 24px", background:"#f4f7fb" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <span style={tag}>{t.founder_tag}</span>
            <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(26px,4vw,40px)", fontWeight:800, color:"#0a1f44", marginBottom:14 }}>{t.founder_name}</h2>
            <p style={{ fontSize:16, color:"#3d4f6b", lineHeight:1.75, maxWidth:560, margin:"0 auto" }}>{t.founder_sub}</p>
          </div>
          <div className="founder-flex">
            <div>
              <div style={{ background:"#0a1f44", borderRadius:20, padding:"40px 36px", position:"relative", overflow:"hidden", marginBottom:20 }}>
                <div style={{ position:"absolute", top:-30, right:-30, width:140, height:140, borderRadius:"50%", background:"rgba(26,86,219,0.15)" }} />
                <div style={{ width:80, height:80, borderRadius:"50%", background:"linear-gradient(135deg,#1a56db,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20, fontFamily:"Montserrat,sans-serif", fontSize:28, fontWeight:900, color:"#fff" }}>A</div>
                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:20, fontWeight:900, color:"#fff", marginBottom:4 }}>{t.founder_name}</h3>
                <p style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6", marginBottom:20 }}>{t.founder_title}</p>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.75, fontStyle:"italic" }}>"{t.founder_quote}"</p>
              </div>
              <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:16, padding:"24px" }}>
                <h4 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:16 }}>{t.industries_tag}</h4>
                {industries.map(ind => (
                  <div key={ind} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:"1px solid #f4f7fb", fontSize:13, color:"#3d4f6b" }}>
                    <div style={{ width:6, height:6, borderRadius:"50%", background:"#1a56db", flexShrink:0 }}/>{ind}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
              <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:16, padding:"36px" }}>
                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:18, fontWeight:800, color:"#0a1f44", marginBottom:16 }}>A Career Built on Quality</h3>
                <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.82, marginBottom:16 }}>{t.founder_bio1}</p>
                <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.82, marginBottom:16 }}>{t.founder_bio2}</p>
                <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.82, marginBottom:28 }}>{t.founder_bio3}</p>
                <h4 style={{ fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:800, color:"#0a1f44", marginBottom:16 }}>{t.competencies}</h4>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                  {competencies.map(c => (
                    <div key={c} style={{ display:"flex", alignItems:"center", gap:8, fontSize:13, color:"#3d4f6b" }}>
                      <CheckCircle2 size={13} color="#1a56db" style={{ flexShrink:0 }}/>{c}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background:"linear-gradient(135deg,#0a1f44,#122755)", borderRadius:16, padding:"32px 36px" }}>
                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:16, fontWeight:800, color:"#fff", marginBottom:14 }}>{t.approach_title}</h3>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.6)", lineHeight:1.8, marginBottom:20 }}>{t.approach_desc}</p>
                <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
                  {[{ icon:<Star size={15}/>, text:"Tailored" },{ icon:<Briefcase size={15}/>, text:"Practical" },{ icon:<CheckCircle2 size={15}/>, text:"Certified" }].map((item,i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:8, color:"#3b82f6", fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700 }}>{item.icon}{item.text}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`.founder-flex{display:grid;grid-template-columns:1fr 2fr;gap:52px;align-items:start;} @media(max-width:900px){.founder-flex{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CLIENTS */}
      <section style={{ padding:"72px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <span style={tag}>{t.trust_tag}</span>
            <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:800, color:"#0a1f44", marginBottom:14 }}>
              {t.trust_title}<br/><span style={{ color:"#2563eb" }}>{t.trust_title2}</span>
            </h2>
            <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.75, maxWidth:560, margin:"0 auto" }}>{t.trust_sub}</p>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"24px 56px", marginBottom:32 }}>
            {["Volvo","Valeo","Alstom Transport","Alstom Grid","Sumitomo","Labinal","Sylea"].map(b => (
              <span key={b} style={{ fontFamily:"Montserrat,sans-serif", fontSize:17, fontWeight:800, color:"#c8d0dc", letterSpacing:"1px" }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding:"80px 24px", background:"#f4f7fb" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <span style={tag}>{t.testi_tag}</span>
            <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:800, color:"#0a1f44", marginBottom:14 }}>{t.testi_title}</h2>
            <p style={{ fontSize:15, color:"#3d4f6b", maxWidth:500, margin:"0 auto" }}>{t.testi_sub}</p>
          </div>
          <div className="testi-grid">
            {[
              { text:t.t1_text, name:t.t1_name, company:t.t1_company, init:"O" },
              { text:t.t2_text, name:t.t2_name, company:t.t2_company, init:"Q" },
              { text:t.t3_text, name:t.t3_name, company:t.t3_company, init:"C" },
            ].map((td,i) => (
              <div key={i} style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:16, padding:"32px 28px", display:"flex", flexDirection:"column" }}>
                <div style={{ display:"flex", gap:4, marginBottom:18 }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#f0b429" color="#f0b429"/>)}
                </div>
                <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.8, fontStyle:"italic", marginBottom:24, flex:1 }}>"{td.text}"</p>
                <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#1a56db,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Montserrat,sans-serif", fontSize:16, fontWeight:900, color:"#fff", flexShrink:0 }}>{td.init}</div>
                  <div>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:13, fontWeight:700, color:"#0a1f44" }}>{td.name}</div>
                    <div style={{ fontSize:12, color:"#8492a6" }}>{td.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;} @media(max-width:768px){.testi-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ padding:"80px 24px", background:"#0a1f44" }}>
        <div style={{ maxWidth:720, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#fff", marginBottom:14 }}>{t.cta_title}</h2>
          <p style={{ fontSize:16, color:"rgba(255,255,255,0.55)", lineHeight:1.8, marginBottom:36 }}>{t.cta_sub}</p>
          <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"16px 36px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
            {t.cta_btn} <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </div>
  );
}