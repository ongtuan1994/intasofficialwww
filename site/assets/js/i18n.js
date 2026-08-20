/* ===========================================================
   INTAS — bilingual (TH / EN) content + language switcher
   Every translatable node carries data-i18n="key".
   Attributes: data-i18n-html (set innerHTML), data-i18n-ph (placeholder).
   Choice is persisted in localStorage under 'intas_lang'.
   =========================================================== */

const I18N = {
  en: {
    /* ---- nav / shared ---- */
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Contact us",

    /* ---- footer ---- */
    "footer.tagline": "Business consulting and technology solutions to help your business grow — friendly, professional, practical.",
    "footer.explore": "Explore",
    "footer.getintouch": "Get in touch",
    "footer.rights": "© 2026 INTAS. All rights reserved.",

    /* ---- shared CTA band ---- */
    "cta.title": "Let’s talk about what’s next for your business.",
    "cta.text": "Book a free, no-pressure consultation and we’ll help you find the fastest path forward.",
    "cta.btn": "Book a free consultation",

    /* ---- home: hero ---- */
    "home.title": "Technology that elevates your workforce,",
    "home.title2": "never replaces it.",
    "home.lead": "We redesign operating models to automate the mundane, giving your best people the speed, clarity, and focus to deliver peak impact.",
    "home.cta2": "Our services",
    "home.caps.ai": "AI development",
    "home.caps.innovation": "Innovation",
    "home.caps.consulting": "Consulting",

    /* ---- home: trust strip ---- */
    "trust.label": "What we bring to the table",
    "trust.s1big": "3",
    "trust.s1": "focused service lines",
    "trust.s2big": "End-to-end",
    "trust.s2": "strategy to software",
    "trust.s3big": "Human",
    "trust.s3": "support at every step",

    /* ---- home: services ---- */
    "home.svc.eyebrow": "What we do",
    "home.svc.title": "Three ways we help you grow",
    "home.svc.all": "All services →",
    "svc.learn": "Learn more",
    "svc.1.claim": "Strategy that holds up in the P&L.",
    "svc.1.p1": "<b>฿120M</b> raise structured",
    "svc.1.p2": "<b>27.5%</b> IRR modelled",
    "svc.1.p3": "<b>4.3-year</b> payback mapped",
    "svc.2.claim": "One system you own, not a stack you rent.",
    "svc.2.p1": "<b>฿7.8M / month</b> reconciled live",
    "svc.2.p2": "<b>201</b> invoices, zero unexplained",
    "svc.2.p3": "<b>~850</b> API routes shipped",
    "svc.3.claim": "A celebration your guests actually remember.",
    "svc.3.p1": "<b>Custom</b> invitation design",
    "svc.3.p2": "<b>RSVP</b> and guest management built in",
    "svc.3.p3": "<b>Ready</b> to share in minutes",
    "svc.1.title": "Business Consulting",
    "svc.2.title": "Custom Enterprise Software",
    "svc.3.title": "e-Wedding Cards & Games",

    /* ---- home: about teaser ---- */
    "home.about.eyebrow": "Who we are",
    "home.about.title": "A friendly partner for practical, modern business.",
    "home.about.text": "We keep things simple and human. Whether you need a second opinion on strategy, software to streamline your work, or a memorable digital touch for a big day, we bring the same care and craft to every project.",
    "home.about.btn": "More about INTAS",

    /* ---- services page ---- */
    "services.hero.title": "Services built around how you actually work.",
    "services.hero.text": "Three focused service lines — from strategy to the software that runs it — delivered with the same friendly, practical approach.",
    "services.s1.eyebrow": "01 — Consulting",
    "services.s1.title": "Business Consulting",
    "services.s1.desc": "We sit down with you to understand the real problem, then turn it into a clear plan you can act on. Strategy that stays grounded in your day-to-day.",
    "services.s1.b1": "Strategy & growth planning",
    "services.s1.b2": "Operations & process improvement",
    "services.s1.b3": "Financial & pricing guidance",
    "services.s1.b4": "Market & competitor research",
    "services.s1.b5": "Feasibility studies and investor-grade financial modelling",
    "services.s1.b6": "Capital raises, investor offerings and partnership structuring",
    "services.s2.eyebrow": "02 — Software & AI",
    "services.s2.title": "Custom Enterprise Software",
    "services.s2.desc": "Stop renting a dozen SaaS tools that don’t quite fit. We design and build software around your operations — one system you own, that grows with you, with AI wired into the work rather than bolted on the side.",
    "services.s2.b1": "ERP, CRM and double-entry finance systems",
    "services.s2.b2": "Workflow & operations automation",
    "services.s2.b3": "Dashboards & reporting",
    "services.s2.b4": "Integration with your existing systems",
    "services.s2.b5": "AI agents that draft, match and cite — people keep the approvals",
    "services.s2.b6": "HR & talent platforms — hiring, banding and onboarding",
    "services.s2.b7": "24/7 customer-service assistants on LINE, social and web",
    "services.s2.b8": "Supply-chain visibility from licensor approval to store shelf",
    "services.s2.b9": "AI video analytics wired into daily operations",
    "services.s3.eyebrow": "03 — Digital",
    "services.s3.title": "e-Wedding Cards & Games",
    "services.s3.desc": "Bring your celebration online with a beautiful digital invitation and interactive games your guests will love — mobile-friendly and easy to share.",
    "services.s3.b1": "Custom-designed digital invitations",
    "services.s3.b2": "RSVP & guest management",
    "services.s3.b3": "Interactive games & photo walls",
    "services.s3.b4": "Ready to share in minutes",
    "services.how.eyebrow": "How we work",
    "services.how.title": "Simple, transparent, hands-on.",
    "services.how.1.t": "Listen",
    "services.how.1.d": "We start with a free consultation to understand your goals and constraints.",
    "services.how.2.t": "Plan",
    "services.how.2.d": "We map out a clear, practical plan with honest timelines and pricing.",
    "services.how.3.t": "Build & support",
    "services.how.3.d": "We deliver, then stay with you — training, tweaks and support included.",

    /* ---- about page ---- */
    "about.hero.title": "A friendly partner for practical, modern business.",
    "about.hero.text": "INTAS pairs hands-on business consulting with software craft — helping companies make smarter decisions and move faster, without the jargon.",
    "about.story.eyebrow": "Our story",
    "about.story.title": "We started INTAS to make good advice and good software easy to get.",
    "about.story.p1": "Too many businesses get stuck between consultants who never ship and software vendors who never listen. We do both — and we keep it human.",
    "about.story.p2": "Whether you’re rethinking your strategy, replacing a mess of SaaS subscriptions, or adding a memorable digital touch to a big day, we bring the same care and craft to every project.",
    "about.values.eyebrow": "What we value",
    "about.values.title": "How we like to work",
    "about.v1.t": "Practical over fancy",
    "about.v1.d": "Advice and tools you can actually use — no jargon, no shelfware.",
    "about.v2.t": "Honest & clear",
    "about.v2.d": "Straight talk on timelines, pricing and trade-offs. No surprises.",
    "about.v3.t": "In it with you",
    "about.v3.d": "We stay after delivery — training, support and improvements included.",
    "about.stats.title": "What we bring",

    /* ---- contact page ---- */
    "contact.hero.title": "Let’s talk about what’s next.",
    "contact.hero.text": "Tell us a little about your business and what you need. We’ll get back to you with practical next steps — no pressure.",
    "contact.form.title": "Send us a message",
    "contact.f.name": "Your name",
    "contact.f.email": "Email",
    "contact.f.phone": "Phone (optional)",
    "contact.f.service": "What can we help with?",
    "contact.f.service.opt0": "Select a service…",
    "contact.f.service.opt1": "Business Consulting",
    "contact.f.service.opt2": "Custom Enterprise Software",
    "contact.f.service.opt3": "e-Wedding Cards & Games",
    "contact.f.service.opt4": "Something else",
    "contact.f.message": "Message",
    "contact.f.submit": "Send message",
    "contact.f.note": "By sending this you agree to be contacted about your enquiry. We never share your details.",
    "contact.f.success": "Thanks! We’ve received your message and will get back to you soon.",
    "contact.f.error": "Sorry, something went wrong. Please try again, or email us directly at info@tasolve.com.",
    "contact.f.sending": "Sending…",
    "contact.info.title": "Prefer to reach us directly?",
    "contact.info.text": "We’re a friendly bunch and happy to chat. Reach us any of these ways:",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.hours": "Hours",
    "contact.info.hours.v": "Mon–Fri, 9:00–18:00 (ICT)",

    /* ---- industries ---- */
    "nav.industries": "Industries",
    "ind.hero.eyebrow": "Industries",
    "ind.hero.title": "Sectors we know from the inside.",
    "ind.hero.text": "We work where we have operated — running centres, kitchens and ledgers ourselves, not just advising on them.",

    "ind.retail.name": "Retail & Shopping Centres",
    "ind.retail.title": "From tenant mix to the leasing engine",
    "ind.retail.desc": "We plan the centre, price the space and build the systems that run it day to day — the same work we did for Central Pattana, PISTA, The Glass Market Bangna and Moshi Moshi.",
    "ind.retail.b1": "IRR-based target-rent pricelists and standardised discounting",
    "ind.retail.b2": "Renew-vs-restructure ranking and tenant-retention playbooks",
    "ind.retail.b3": "Catchment analysis and tenant-mix strategy from feasibility onward",
    "ind.retail.b4": "AI hiring and talent systems for centre and head-office teams",
    "ind.retail.b5": "24/7 customer-service assistants for stock and restock questions",
    "ind.retail.b6": "Billing and reconciliation engines that close the month clean",

    "ind.fnb.name": "Food & Beverage",
    "ind.fnb.title": "Kitchens we have actually run",
    "ind.fnb.desc": "Restaurant and café operations owned end to end at Croco Hill and The Glass Market food court — advice that comes from working the floor, not visiting it.",
    "ind.fnb.b1": "Menu engineering, food-cost control and supplier terms",
    "ind.fnb.b2": "Floor, kitchen and rostering SOPs with full P&L ownership",
    "ind.fnb.b3": "CCTV estates with AI video analytics wired into daily operations",
    "ind.fnb.b4": "Food-court and F&B tenant operations, leasing through daily service",

    "ind.realestate.name": "Real Estate & Property",
    "ind.realestate.title": "Feasibility through to opening day",
    "ind.realestate.desc": "The numbers behind a go/no-go decision, and the plan that follows it — from catchment modelling to the launch programme.",
    "ind.realestate.b1": "Feasibility studies, market catchment and financial modelling",
    "ind.realestate.b2": "Predictive occupancy modelling and growth-gap analysis",
    "ind.realestate.b3": "Pre-opening brand positioning and launch programmes",
    "ind.realestate.b4": "Investor-grade commercial cases and capital raises",

    "ind.financial.name": "Financial Services",
    "ind.financial.title": "Built inside banks, not alongside them",
    "ind.financial.desc": "Our founders have built and run products inside Thai banks and consumer lenders — digital lending, operating models and the systems behind them.",
    "ind.financial.b1": "Digital lending products and multi-year product roadmaps",
    "ind.financial.b2": "Agile operating models for collections and recovery",
    "ind.financial.b3": "HR operating systems, HRIS migration and policy assistants",

    "ind.fmcg.name": "Consumer Goods & FMCG",
    "ind.fmcg.title": "Onto the shelf, and profitable there",
    "ind.fmcg.desc": "Getting product listed and moving through modern retail — then making the unit economics work once it is there.",
    "ind.fmcg.b1": "Trade marketing and data-led modern-retail sell-in",
    "ind.fmcg.b2": "Listings, chilled logistics and key-account terms",
    "ind.fmcg.b3": "Production automation and export commercialisation",
    "ind.fmcg.b4": "Supply-chain visibility from licensor approval to store shelf",

    "ind.transport.name": "Transport & Infrastructure",
    "ind.transport.title": "Safety-critical delivery at programme scale",
    "ind.transport.desc": "Our founders have led signalling software delivery on international metro and people-mover programmes, to the standards those systems demand.",
    "ind.transport.b1": "Signalling software delivery on international metro programmes",
    "ind.transport.b2": "Verification and validation to the EN 50716 safety standard",
    "ind.transport.b3": "Quality-Cost-Delivery governance with zero budget overrun",

    /* ---- about dropdown ---- */
    "nav.about.do": "What We Do",
    "nav.about.believe": "What We Believe",
    "nav.about.people": "Our People & Leadership",
    "nav.about.results": "Client Results",

    /* ---- team page ---- */
    "team.hero.eyebrow": "Our people",
    "team.hero.title": "The people behind INTAS.",
    "team.hero.text": "A founding team from consulting, engineering, finance and brand — who have built, run and sold the things we now help you build.",

    "team.p1.role": "Founder & CEO",
    "team.p1.disc": "Strategy, Commercial & AI",
    "team.p1.b1": "Ex-BCG consultant; “Head of” at Central Pattana in his 20s",
    "team.p1.b2": "Built THB 190M annual revenue as Managing Director",
    "team.p1.b3": "Ph.D. candidate, Computational & Applied Mathematics",

    "team.p2.role": "Founder & COO",
    "team.p2.disc": "Operations & Process Optimisation",
    "team.p2.b1": "Delivered software on a ~USD 700M rail signalling programme",
    "team.p2.b2": "Grew engineering teams to 19, lifting output up to 200%",
    "team.p2.b3": "Zero-finding internal audits; 21% year-on-year growth",

    "team.p3.role": "Co-Founder & CFO",
    "team.p3.disc": "Strategy, Finance & Process Improvement",
    "team.p3.b1": "MBA, University of Cambridge; MSc Finance, Johns Hopkins",
    "team.p3.b2": "Product owner on a $30M super-app — 2M+ users in 6 months",
    "team.p3.b3": "Ex-Bluebik and Kasikorn Bank; AVP at Krungthai Bank",

    "team.p4.role": "Co-Founder & CTO",
    "team.p4.disc": "Tech, Solution & AI",
    "team.p4.b1": "Architected a full business platform solo — ~850 API routes",
    "team.p4.b2": "Runs a live revenue ledger of ฿7.8M per month",
    "team.p4.b3": "Led software V&V to EN 50716 across five signalling projects",

    "team.p5.role": "Co-Founder & CCO",
    "team.p5.disc": "Commercial & Distribution",
    "team.p5.b1": "Trade marketing with Tops, Lotus and Central Department Store",
    "team.p5.b2": "Raised inside Siam Winery — Monsoon Valley and SPY",
    "team.p5.b3": "FAA & CAAT commercial pilot licences",

    "team.p6.role": "Co-Founder & CDO",
    "team.p6.disc": "Development & Brand",
    "team.p6.b1": "Built Central Park’s pre-opening brand positioning",
    "team.p6.b2": "Creative Director, Thailand Coffee Fest 2021",
    "team.p6.b3": "B.Sc. Design & Architecture (INDA), Chulalongkorn University",

    /* ---- client results page ---- */
    "results.hero.eyebrow": "Client results",
    "results.hero.title": "Work we’ve done, and what it delivered.",
    "results.hero.text": "A selection of INTAS engagements — the scope we owned and the numbers that came out of it.",

    "results.r1.industry": "Retail",
    "results.r1.desc": "Racquet, wellness and social club. We structured the full commercial case and investor offering across seven revenue lines, with operating partnerships spanning F&B, wellness and sport institutions.",
    "results.r1.m1": "฿120M raise for 60% equity",
    "results.r1.m2": "27.5% IRR",
    "results.r1.m3": "฿53M EBITDA from Year 2",
    "results.r1.m4": "4.3-year payback",

    "results.r2.industry": "Retail & Food",
    "results.r2.desc": "Community mall, strategy through to operations: feasibility and tenant-mix strategy, an IRR-based target-rent pricelist, a leasing and retention playbook, and a custom double-entry ERP with an agentic-AI operating layer.",
    "results.r2.m1": "฿7.8M / month reconciled",
    "results.r2.m2": "201 monthly invoices",
    "results.r2.m3": "Zero unexplained entries",

    "results.r3.industry": "Retail",
    "results.r3.desc": "Two workstreams: a supply-chain “digital thread” from licensor approval to store shelf, and KOTAE — a customer-service assistant that answers on LINE, social and web around the clock, and hands off to a person rather than guessing.",
    "results.r3.m1": "~1,000 monthly SKU launches in scope",
    "results.r3.m2": "5 AI surfaces designed",
    "results.r3.m3": "24/7 across LINE, social and web",
    "results.r3.m4": "Stock and restock answered by variant",
    "results.r3.m5": "Answers, or says it cannot",

    "results.r4.industry": "Food & Beverage",
    "results.r4.desc": "Café and restaurant operations end to end — a full CCTV estate designed, installed and commissioned with AI video analytics wired into daily monitoring, alongside menu engineering, food-cost control and P&L management.",
    "results.r4.m1": "AI video analytics live",
    "results.r4.m2": "Full F&B operations",
    "results.r4.m3": "Menu & food-cost engineering",
    "results.r5.industry": "Retail & Shopping Centres",
    "results.r5.desc": "Talent OS — an AI operating layer for enterprise hiring, built on CPN’s own data. Eight hiring pain points, eight fixes in the product: job descriptions drafted with sources named, band decisions on screen, cited bilingual screening.",
    "results.r5.m1": "8 fixes built, 4 already live",
    "results.r5.m2": "Every AI act human-approved",
    "results.r5.m3": "Bilingual TH / EN",

  },

  th: {
    /* ---- nav / shared ---- */
    "nav.services": "บริการ",
    "nav.about": "เกี่ยวกับเรา",
    "nav.contact": "ติดต่อ",
    "nav.cta": "ติดต่อเรา",

    /* ---- footer ---- */
    "footer.tagline": "ที่ปรึกษาธุรกิจและโซลูชันเทคโนโลยีที่ช่วยให้ธุรกิจของคุณเติบโต — เป็นกันเอง มืออาชีพ และใช้งานได้จริง",
    "footer.explore": "เมนู",
    "footer.getintouch": "ติดต่อเรา",
    "footer.rights": "© 2026 INTAS สงวนลิขสิทธิ์",

    /* ---- shared CTA band ---- */
    "cta.title": "มาคุยกันว่าก้าวต่อไปของธุรกิจคุณคืออะไร",
    "cta.text": "นัดปรึกษาฟรีแบบไม่มีข้อผูกมัด แล้วเราจะช่วยหาเส้นทางที่เร็วที่สุดให้คุณ",
    "cta.btn": "ปรึกษาฟรี",

    /* ---- home: hero ---- */
    "home.title": "เทคโนโลยีที่ยกระดับคนของคุณ",
    "home.title2": "ไม่ใช่แทนที่พวกเขา",
    "home.lead": "เราออกแบบวิธีการทำงานใหม่ ให้ระบบอัตโนมัติรับงานซ้ำซากไป เพื่อให้คนเก่งของคุณมีความเร็ว ความชัดเจน และสมาธิในการสร้างผลงานที่ดีที่สุด",
    "home.cta2": "ดูบริการของเรา",
    "home.caps.ai": "พัฒนา AI",
    "home.caps.innovation": "นวัตกรรม",
    "home.caps.consulting": "ที่ปรึกษา",

    /* ---- home: trust strip ---- */
    "trust.label": "สิ่งที่เรามอบให้",
    "trust.s1big": "3",
    "trust.s1": "สายบริการหลัก",
    "trust.s2big": "ครบวงจร",
    "trust.s2": "ตั้งแต่กลยุทธ์ถึงซอฟต์แวร์",
    "trust.s3big": "ใส่ใจ",
    "trust.s3": "ดูแลทุกขั้นตอน",

    /* ---- home: services ---- */
    "home.svc.eyebrow": "สิ่งที่เราทำ",
    "home.svc.title": "สามแนวทางที่เราช่วยให้คุณเติบโต",
    "home.svc.all": "ดูบริการทั้งหมด →",
    "svc.learn": "ดูเพิ่มเติม",
    "svc.1.claim": "กลยุทธ์ที่พิสูจน์ได้ในงบกำไรขาดทุน",
    "svc.1.p1": "<b>120 ล้านบาท</b> จัดโครงสร้างการระดมทุน",
    "svc.1.p2": "<b>27.5%</b> IRR จากแบบจำลอง",
    "svc.1.p3": "<b>4.3 ปี</b> ระยะเวลาคืนทุน",
    "svc.2.claim": "ระบบเดียวที่คุณเป็นเจ้าของ ไม่ใช่ค่าเช่ารายเดือน",
    "svc.2.p1": "<b>7.8 ล้านบาท/เดือน</b> กระทบยอดจริง",
    "svc.2.p2": "<b>201</b> ใบแจ้งหนี้ ไม่มีรายการค้าง",
    "svc.2.p3": "<b>~850</b> API ที่ส่งมอบแล้ว",
    "svc.3.claim": "งานฉลองที่แขกของคุณจะจดจำ",
    "svc.3.p1": "<b>ออกแบบ</b> การ์ดเชิญเฉพาะคุณ",
    "svc.3.p2": "<b>RSVP</b> และจัดการรายชื่อแขกในตัว",
    "svc.3.p3": "<b>พร้อมส่ง</b> ภายในไม่กี่นาที",
    "svc.1.title": "ที่ปรึกษาธุรกิจ",
    "svc.2.title": "ซอฟต์แวร์องค์กรสั่งทำ",
    "svc.3.title": "การ์ดแต่งงานและเกมออนไลน์",

    /* ---- home: about teaser ---- */
    "home.about.eyebrow": "เราคือใคร",
    "home.about.title": "พาร์ทเนอร์ที่เป็นกันเอง เพื่อธุรกิจยุคใหม่ที่ใช้งานได้จริง",
    "home.about.text": "เราทำให้ทุกอย่างเรียบง่ายและเป็นกันเอง ไม่ว่าคุณต้องการความเห็นที่สองเรื่องกลยุทธ์ ซอฟต์แวร์ที่ช่วยให้งานลื่นไหลขึ้น หรือสัมผัสดิจิทัลที่น่าจดจำสำหรับวันสำคัญ เราใส่ใจและพิถีพิถันกับทุกโปรเจกต์เท่ากัน",
    "home.about.btn": "รู้จัก INTAS เพิ่มเติม",

    /* ---- services page ---- */
    "services.hero.title": "บริการที่ออกแบบมาตามวิธีการทำงานจริงของคุณ",
    "services.hero.text": "สามสายบริการหลัก — ตั้งแต่กลยุทธ์ไปจนถึงซอฟต์แวร์ที่ขับเคลื่อนมัน — ส่งมอบด้วยแนวทางที่เป็นกันเองและใช้งานได้จริง",
    "services.s1.eyebrow": "01 — ที่ปรึกษา",
    "services.s1.title": "ที่ปรึกษาธุรกิจ",
    "services.s1.desc": "เรานั่งคุยกับคุณเพื่อเข้าใจปัญหาที่แท้จริง แล้วแปลงเป็นแผนที่ชัดเจนและลงมือทำได้ กลยุทธ์ที่ยึดโยงกับงานประจำวันของคุณ",
    "services.s1.b1": "วางกลยุทธ์และแผนการเติบโต",
    "services.s1.b2": "ปรับปรุงการดำเนินงานและกระบวนการ",
    "services.s1.b3": "คำแนะนำด้านการเงินและการตั้งราคา",
    "services.s1.b4": "วิจัยตลาดและคู่แข่ง",
    "services.s1.b5": "การศึกษาความเป็นไปได้และแบบจำลองการเงินระดับนักลงทุน",
    "services.s1.b6": "การระดมทุน ข้อเสนอต่อนักลงทุน และการวางโครงสร้างพันธมิตร",
    "services.s2.eyebrow": "02 — ซอฟต์แวร์และ AI",
    "services.s2.title": "ซอฟต์แวร์องค์กรสั่งทำ",
    "services.s2.desc": "เลิกเช่าเครื่องมือ SaaS หลายตัวที่ไม่ค่อยลงตัว เราออกแบบและสร้างซอฟต์แวร์รอบการทำงานของคุณ — ระบบเดียวที่คุณเป็นเจ้าของและเติบโตไปพร้อมคุณ โดยมี AI ทำงานอยู่ในเนื้องาน ไม่ใช่แค่ติดเพิ่มไว้ข้างนอก",
    "services.s2.b1": "ERP, CRM และระบบบัญชีคู่",
    "services.s2.b2": "ระบบอัตโนมัติของเวิร์กโฟลว์และการดำเนินงาน",
    "services.s2.b3": "แดชบอร์ดและรายงาน",
    "services.s2.b4": "เชื่อมต่อกับระบบเดิมที่คุณมีอยู่",
    "services.s2.b5": "เอเจนต์ AI ที่ร่าง จับคู่ และอ้างอิงแหล่งที่มา — โดยคนเป็นผู้อนุมัติ",
    "services.s2.b6": "แพลตฟอร์ม HR และบุคลากร — การสรรหา กรอบระดับ และการรับเข้าทำงาน",
    "services.s2.b7": "ผู้ช่วยบริการลูกค้าตลอด 24 ชั่วโมง บน LINE โซเชียล และเว็บ",
    "services.s2.b8": "มองเห็นซัพพลายเชนตลอดสาย ตั้งแต่การอนุมัติลิขสิทธิ์จนถึงชั้นวางสินค้า",
    "services.s2.b9": "วิเคราะห์วิดีโอด้วย AI เชื่อมเข้ากับงานประจำวัน",
    "services.s3.eyebrow": "03 — ดิจิทัล",
    "services.s3.title": "การ์ดแต่งงานและเกมออนไลน์",
    "services.s3.desc": "นำงานฉลองของคุณขึ้นออนไลน์ด้วยการ์ดเชิญดิจิทัลสวยงามและเกมโต้ตอบที่แขกจะหลงรัก — รองรับมือถือและแชร์ง่าย",
    "services.s3.b1": "การ์ดเชิญดิจิทัลออกแบบเฉพาะ",
    "services.s3.b2": "ระบบตอบรับและจัดการรายชื่อแขก",
    "services.s3.b3": "เกมโต้ตอบและกระดานรูปภาพ",
    "services.s3.b4": "พร้อมแชร์ได้ในไม่กี่นาที",
    "services.how.eyebrow": "วิธีการทำงานของเรา",
    "services.how.title": "เรียบง่าย โปร่งใส และลงมือทำจริง",
    "services.how.1.t": "รับฟัง",
    "services.how.1.d": "เริ่มด้วยการปรึกษาฟรี เพื่อเข้าใจเป้าหมายและข้อจำกัดของคุณ",
    "services.how.2.t": "วางแผน",
    "services.how.2.d": "วางแผนที่ชัดเจนและใช้ได้จริง พร้อมกรอบเวลาและราคาที่ตรงไปตรงมา",
    "services.how.3.t": "สร้างและดูแล",
    "services.how.3.d": "ส่งมอบงาน แล้วอยู่เคียงข้างคุณต่อ — รวมการอบรม ปรับแก้ และซัพพอร์ต",

    /* ---- about page ---- */
    "about.hero.title": "พาร์ทเนอร์ที่เป็นกันเอง เพื่อธุรกิจยุคใหม่ที่ใช้งานได้จริง",
    "about.hero.text": "INTAS ผสานการให้คำปรึกษาธุรกิจแบบลงมือทำจริงเข้ากับงานสร้างซอฟต์แวร์ — ช่วยให้ธุรกิจตัดสินใจได้ฉลาดขึ้นและก้าวได้เร็วขึ้น โดยไม่ต้องมีศัพท์ยาก ๆ",
    "about.story.eyebrow": "เรื่องราวของเรา",
    "about.story.title": "เราก่อตั้ง INTAS เพื่อให้คำแนะนำดี ๆ และซอฟต์แวร์ดี ๆ เข้าถึงได้ง่าย",
    "about.story.p1": "ธุรกิจจำนวนมากติดอยู่ระหว่างที่ปรึกษาที่ไม่เคยส่งมอบงานจริง กับผู้ขายซอฟต์แวร์ที่ไม่เคยรับฟัง เราทำทั้งสองอย่าง — และทำอย่างเป็นกันเอง",
    "about.story.p2": "ไม่ว่าคุณกำลังทบทวนกลยุทธ์ เปลี่ยนจาก SaaS ที่ยุ่งเหยิง หรือเพิ่มสัมผัสดิจิทัลที่น่าจดจำในวันสำคัญ เราใส่ใจและพิถีพิถันกับทุกโปรเจกต์เท่ากัน",
    "about.values.eyebrow": "สิ่งที่เรายึดถือ",
    "about.values.title": "แนวทางการทำงานของเรา",
    "about.v1.t": "ใช้ได้จริงมากกว่าหรูหรา",
    "about.v1.d": "คำแนะนำและเครื่องมือที่นำไปใช้ได้จริง — ไม่มีศัพท์ยาก ไม่มีของที่ซื้อมาแล้วไม่ได้ใช้",
    "about.v2.t": "ตรงไปตรงมาและชัดเจน",
    "about.v2.d": "พูดตรงเรื่องกรอบเวลา ราคา และข้อแลกเปลี่ยน ไม่มีเซอร์ไพรส์",
    "about.v3.t": "อยู่เคียงข้างคุณ",
    "about.v3.d": "เราอยู่ต่อหลังส่งมอบงาน — รวมการอบรม ซัพพอร์ต และการพัฒนาต่อเนื่อง",
    "about.stats.title": "สิ่งที่เรามอบให้",

    /* ---- contact page ---- */
    "contact.hero.title": "มาคุยกันว่าก้าวต่อไปคืออะไร",
    "contact.hero.text": "เล่าให้เราฟังสักนิดเกี่ยวกับธุรกิจและสิ่งที่คุณต้องการ แล้วเราจะติดต่อกลับพร้อมขั้นตอนต่อไปที่ใช้ได้จริง — แบบไม่กดดัน",
    "contact.form.title": "ส่งข้อความถึงเรา",
    "contact.f.name": "ชื่อของคุณ",
    "contact.f.email": "อีเมล",
    "contact.f.phone": "เบอร์โทร (ไม่บังคับ)",
    "contact.f.service": "เราช่วยเรื่องอะไรได้บ้าง?",
    "contact.f.service.opt0": "เลือกบริการ…",
    "contact.f.service.opt1": "ที่ปรึกษาธุรกิจ",
    "contact.f.service.opt2": "ซอฟต์แวร์องค์กรสั่งทำ",
    "contact.f.service.opt3": "การ์ดแต่งงานและเกมออนไลน์",
    "contact.f.service.opt4": "เรื่องอื่น ๆ",
    "contact.f.message": "ข้อความ",
    "contact.f.submit": "ส่งข้อความ",
    "contact.f.note": "การส่งข้อความนี้ถือว่าคุณยินยอมให้เราติดต่อกลับเกี่ยวกับเรื่องที่สอบถาม เราจะไม่เปิดเผยข้อมูลของคุณ",
    "contact.f.success": "ขอบคุณครับ! เราได้รับข้อความของคุณแล้ว และจะรีบติดต่อกลับโดยเร็ว",
    "contact.f.error": "ขออภัย เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรืออีเมลหาเราโดยตรงที่ info@tasolve.com",
    "contact.f.sending": "กำลังส่ง…",
    "contact.info.title": "อยากติดต่อเราโดยตรง?",
    "contact.info.text": "เราเป็นกันเองและยินดีพูดคุยเสมอ ติดต่อได้ตามช่องทางเหล่านี้:",
    "contact.info.email": "อีเมล",
    "contact.info.phone": "โทรศัพท์",
    "contact.info.hours": "เวลาทำการ",
    "contact.info.hours.v": "จันทร์–ศุกร์ 9:00–18:00 น. (เวลาไทย)",

    /* ---- industries ---- */
    "nav.industries": "อุตสาหกรรม",
    "ind.hero.eyebrow": "อุตสาหกรรม",
    "ind.hero.title": "อุตสาหกรรมที่เรารู้จากการลงมือทำจริง",
    "ind.hero.text": "เราทำงานในสายที่เราเคยบริหารเอง — ทั้งศูนย์การค้า ครัว และบัญชี ไม่ใช่เพียงให้คำแนะนำจากภายนอก",

    "ind.retail.name": "ค้าปลีกและศูนย์การค้า",
    "ind.retail.title": "ตั้งแต่ส่วนผสมผู้เช่าจนถึงระบบการปล่อยเช่า",
    "ind.retail.desc": "เราวางแผนศูนย์การค้า กำหนดราคาพื้นที่ และสร้างระบบที่ใช้บริหารงานประจำวัน — งานแบบเดียวกับที่ทำให้เซ็นทรัลพัฒนา, PISTA, The Glass Market Bangna และ Moshi Moshi",
    "ind.retail.b1": "ตารางค่าเช่าเป้าหมายอิง IRR และการให้ส่วนลดอย่างมีมาตรฐาน",
    "ind.retail.b2": "แบบจำลองจัดลำดับต่อสัญญาหรือปรับโครงสร้าง และคู่มือรักษาผู้เช่า",
    "ind.retail.b3": "วิเคราะห์พื้นที่รับบริการและกลยุทธ์ส่วนผสมผู้เช่าตั้งแต่ขั้นศึกษาความเป็นไปได้",
    "ind.retail.b4": "ระบบสรรหาบุคลากรและบริหารคนด้วย AI สำหรับทีมศูนย์การค้าและสำนักงานใหญ่",
    "ind.retail.b5": "ผู้ช่วยบริการลูกค้าตอบเรื่องสต็อกและกำหนดของเข้าตลอด 24 ชั่วโมง",
    "ind.retail.b6": "ระบบวางบิลและกระทบยอดที่ปิดเดือนได้ครบถ้วน",

    "ind.fnb.name": "อาหารและเครื่องดื่ม",
    "ind.fnb.title": "ครัวที่เราลงมือบริหารเอง",
    "ind.fnb.desc": "ดูแลงานร้านอาหารและคาเฟ่ครบวงจรที่ Croco Hill และฟู้ดคอร์ท The Glass Market — คำแนะนำที่มาจากการยืนหน้างานจริง",
    "ind.fnb.b1": "ออกแบบเมนู ควบคุมต้นทุนอาหาร และเจรจาเงื่อนไขซัพพลายเออร์",
    "ind.fnb.b2": "มาตรฐานงานหน้าร้าน ครัว และการจัดตารางพนักงาน พร้อมดูแลกำไรขาดทุน",
    "ind.fnb.b3": "ระบบกล้องวงจรปิดพร้อมวิเคราะห์วิดีโอด้วย AI เชื่อมกับงานประจำวัน",
    "ind.fnb.b4": "บริหารศูนย์อาหารและผู้เช่าร้านอาหาร ตั้งแต่ปล่อยเช่าจนถึงบริการประจำวัน",

    "ind.realestate.name": "อสังหาริมทรัพย์",
    "ind.realestate.title": "ตั้งแต่ศึกษาความเป็นไปได้จนถึงวันเปิดตัว",
    "ind.realestate.desc": "ตัวเลขเบื้องหลังการตัดสินใจไปต่อหรือไม่ไปต่อ และแผนงานที่ตามมา ตั้งแต่แบบจำลองพื้นที่รับบริการจนถึงแผนเปิดโครงการ",
    "ind.realestate.b1": "ศึกษาความเป็นไปได้ วิเคราะห์พื้นที่รับบริการ และแบบจำลองทางการเงิน",
    "ind.realestate.b2": "แบบจำลองคาดการณ์อัตราการเช่าและวิเคราะห์ช่องว่างการเติบโต",
    "ind.realestate.b3": "วางตำแหน่งแบรนด์ก่อนเปิดตัวและแผนงานเปิดโครงการ",
    "ind.realestate.b4": "ชุดข้อมูลเชิงพาณิชย์ระดับนักลงทุนและการระดมทุน",

    "ind.financial.name": "บริการทางการเงิน",
    "ind.financial.title": "สร้างจากภายในธนาคาร ไม่ใช่จากภายนอก",
    "ind.financial.desc": "ผู้ก่อตั้งของเราเคยสร้างและดูแลผลิตภัณฑ์ภายในธนาคารไทยและผู้ให้สินเชื่อรายย่อย ทั้งสินเชื่อดิจิทัล รูปแบบการทำงาน และระบบเบื้องหลัง",
    "ind.financial.b1": "ผลิตภัณฑ์สินเชื่อดิจิทัลและแผนพัฒนาผลิตภัณฑ์ระยะยาว",
    "ind.financial.b2": "รูปแบบการทำงานแบบ Agile สำหรับงานติดตามและเร่งรัดหนี้",
    "ind.financial.b3": "ระบบบริหารทรัพยากรบุคคล การย้ายระบบ HRIS และผู้ช่วยตอบนโยบาย",

    "ind.fmcg.name": "สินค้าอุปโภคบริโภค",
    "ind.fmcg.title": "ขึ้นชั้นวาง และทำกำไรได้จริง",
    "ind.fmcg.desc": "พาสินค้าเข้าสู่ช่องทางค้าปลีกสมัยใหม่ และทำให้ต้นทุนต่อหน่วยคุ้มค่าเมื่อวางขายแล้ว",
    "ind.fmcg.b1": "การตลาดเทรดและการขายเข้าช่องทางค้าปลีกสมัยใหม่ด้วยข้อมูล",
    "ind.fmcg.b2": "การขึ้นทะเบียนสินค้า ระบบขนส่งควบคุมอุณหภูมิ และเงื่อนไขลูกค้าหลัก",
    "ind.fmcg.b3": "ระบบอัตโนมัติในการผลิตและการทำตลาดส่งออก",
    "ind.fmcg.b4": "มองเห็นซัพพลายเชนตลอดสาย ตั้งแต่การอนุมัติลิขสิทธิ์จนถึงชั้นวางสินค้า",

    "ind.transport.name": "ขนส่งและโครงสร้างพื้นฐาน",
    "ind.transport.title": "งานที่ความปลอดภัยเป็นเดิมพัน ในระดับโครงการใหญ่",
    "ind.transport.desc": "ผู้ก่อตั้งของเราเคยนำการส่งมอบซอฟต์แวร์อาณัติสัญญาณในโครงการรถไฟฟ้าและระบบขนส่งอัตโนมัติระดับนานาชาติ ตามมาตรฐานที่ระบบเหล่านั้นกำหนด",
    "ind.transport.b1": "ส่งมอบซอฟต์แวร์อาณัติสัญญาณในโครงการรถไฟฟ้าระดับนานาชาติ",
    "ind.transport.b2": "การตรวจสอบและทวนสอบตามมาตรฐานความปลอดภัย EN 50716",
    "ind.transport.b3": "การกำกับดูแลคุณภาพ ต้นทุน และกำหนดส่งมอบ โดยไม่เกินงบประมาณ",

    /* ---- about dropdown ---- */
    "nav.about.do": "สิ่งที่เราทำ",
    "nav.about.believe": "สิ่งที่เราเชื่อ",
    "nav.about.people": "ทีมงานและผู้บริหาร",
    "nav.about.results": "ผลงานลูกค้า",

    /* ---- team page ---- */
    "team.hero.eyebrow": "ทีมของเรา",
    "team.hero.title": "ทีมเบื้องหลัง INTAS",
    "team.hero.text": "ทีมผู้ก่อตั้งจากสายที่ปรึกษา วิศวกรรม การเงิน และแบรนด์ — ผู้ที่เคยสร้าง บริหาร และขายในสิ่งที่เราช่วยคุณสร้างในวันนี้",

    "team.p1.role": "ผู้ก่อตั้งและประธานเจ้าหน้าที่บริหาร",
    "team.p1.disc": "กลยุทธ์ การพาณิชย์ และ AI",
    "team.p1.b1": "อดีตที่ปรึกษา BCG; ขึ้นสู่ระดับ “Head of” ที่เซ็นทรัลพัฒนาตั้งแต่อายุ 20 กว่า",
    "team.p1.b2": "สร้างรายได้ 190 ล้านบาทต่อปีในฐานะกรรมการผู้จัดการ",
    "team.p1.b3": "นักศึกษาปริญญาเอก คณิตศาสตร์ประยุกต์และการคำนวณ",

    "team.p2.role": "ผู้ก่อตั้งและประธานเจ้าหน้าที่ฝ่ายปฏิบัติการ",
    "team.p2.disc": "ปฏิบัติการและการปรับปรุงกระบวนการ",
    "team.p2.b1": "ส่งมอบซอฟต์แวร์ในโครงการอาณัติสัญญาณรถไฟมูลค่าราว 700 ล้านดอลลาร์สหรัฐ",
    "team.p2.b2": "ขยายทีมวิศวกรรมเป็น 19 คน เพิ่มผลงานได้ถึง 200%",
    "team.p2.b3": "ผ่านการตรวจสอบภายในโดยไม่พบข้อบกพร่อง; เติบโต 21% ต่อปี",

    "team.p3.role": "ผู้ร่วมก่อตั้งและประธานเจ้าหน้าที่ฝ่ายการเงิน",
    "team.p3.disc": "กลยุทธ์ การเงิน และการปรับปรุงกระบวนการ",
    "team.p3.b1": "MBA มหาวิทยาลัยเคมบริดจ์; MSc Finance มหาวิทยาลัยจอห์นส์ ฮอปกินส์",
    "team.p3.b2": "Product Owner ซูเปอร์แอปมูลค่า 30 ล้านดอลลาร์ — ผู้ใช้กว่า 2 ล้านคนใน 6 เดือน",
    "team.p3.b3": "อดีต Bluebik และธนาคารกสิกรไทย; ปัจจุบัน AVP ธนาคารกรุงไทย",

    "team.p4.role": "ผู้ร่วมก่อตั้งและประธานเจ้าหน้าที่ฝ่ายเทคโนโลยี",
    "team.p4.disc": "เทคโนโลยี โซลูชัน และ AI",
    "team.p4.b1": "ออกแบบและพัฒนาแพลตฟอร์มธุรกิจครบวงจรด้วยตนเอง — API ราว 850 เส้นทาง",
    "team.p4.b2": "ดูแลบัญชีรายได้จริง 7.8 ล้านบาทต่อเดือน",
    "team.p4.b3": "นำงานตรวจสอบและทวนสอบซอฟต์แวร์ตามมาตรฐาน EN 50716 ใน 5 โครงการ",

    "team.p5.role": "ผู้ร่วมก่อตั้งและประธานเจ้าหน้าที่ฝ่ายพาณิชย์",
    "team.p5.disc": "การพาณิชย์และการจัดจำหน่าย",
    "team.p5.b1": "การตลาดเทรดกับ Tops, Lotus และห้างสรรพสินค้าเซ็นทรัล",
    "team.p5.b2": "เติบโตในสยามไวเนอรี่ — Monsoon Valley และ SPY",
    "team.p5.b3": "ใบอนุญาตนักบินพาณิชย์ FAA และ CAAT",

    "team.p6.role": "ผู้ร่วมก่อตั้งและประธานเจ้าหน้าที่ฝ่ายพัฒนาธุรกิจ",
    "team.p6.disc": "การพัฒนาและแบรนด์",
    "team.p6.b1": "วางตำแหน่งแบรนด์ Central Park ก่อนเปิดตัว",
    "team.p6.b2": "Creative Director งาน Thailand Coffee Fest 2021",
    "team.p6.b3": "วท.บ. การออกแบบและสถาปัตยกรรม (INDA) จุฬาลงกรณ์มหาวิทยาลัย",

    /* ---- client results page ---- */
    "results.hero.eyebrow": "ผลงานลูกค้า",
    "results.hero.title": "งานที่เราทำ และผลลัพธ์ที่เกิดขึ้น",
    "results.hero.text": "ตัวอย่างโครงการของ INTAS — ขอบเขตงานที่เราดูแล และตัวเลขที่เกิดขึ้นจริง",

    "results.r1.industry": "ค้าปลีก",
    "results.r1.desc": "สโมสรกีฬาแร็กเกต สุขภาพ และสังคม เราจัดทำแผนธุรกิจและข้อเสนอสำหรับนักลงทุนอย่างครบถ้วนใน 7 สายรายได้ พร้อมพันธมิตรด้านอาหารและเครื่องดื่ม สุขภาพ และสถาบันกีฬา",
    "results.r1.m1": "ระดมทุน 120 ล้านบาท แลกหุ้น 60%",
    "results.r1.m2": "IRR 27.5%",
    "results.r1.m3": "EBITDA 53 ล้านบาท ตั้งแต่ปีที่ 2",
    "results.r1.m4": "คืนทุน 4.3 ปี",

    "results.r2.industry": "ค้าปลีกและอาหาร",
    "results.r2.desc": "คอมมูนิตี้มอลล์ ตั้งแต่กลยุทธ์จนถึงการปฏิบัติงาน: ศึกษาความเป็นไปได้และกลยุทธ์ส่วนผสมผู้เช่า ตารางค่าเช่าเป้าหมายอิง IRR คู่มือการปล่อยเช่าและรักษาผู้เช่า และระบบ ERP บัญชีคู่ที่พัฒนาขึ้นเอง พร้อมชั้นการทำงานด้วย AI",
    "results.r2.m1": "กระทบยอด 7.8 ล้านบาท/เดือน",
    "results.r2.m2": "201 ใบแจ้งหนี้ต่อเดือน",
    "results.r2.m3": "ไม่มีรายการที่อธิบายไม่ได้",

    "results.r3.industry": "ค้าปลีก",
    "results.r3.desc": "สองสายงาน: “digital thread” ของซัพพลายเชน ตั้งแต่การอนุมัติลิขสิทธิ์จนถึงชั้นวางสินค้า และ KOTAE — ผู้ช่วยบริการลูกค้าที่ตอบบน LINE โซเชียล และเว็บได้ตลอด 24 ชั่วโมง และส่งต่อให้พนักงานแทนการเดา",
    "results.r3.m1": "ครอบคลุมการเปิดตัวสินค้าราว 1,000 SKU ต่อเดือน",
    "results.r3.m2": "ออกแบบส่วนงาน AI 5 ส่วน",
    "results.r3.m3": "ตลอด 24 ชั่วโมง ทั้ง LINE โซเชียล และเว็บ",
    "results.r3.m4": "ตอบเรื่องสต็อกและกำหนดของเข้าได้ถึงระดับรุ่นย่อย",
    "results.r3.m5": "ตอบได้ หรือบอกตรง ๆ ว่าตอบไม่ได้",

    "results.r4.industry": "อาหารและเครื่องดื่ม",
    "results.r4.desc": "ดูแลงานปฏิบัติการคาเฟ่และร้านอาหารครบวงจร — ออกแบบ ติดตั้ง และทดสอบระบบกล้องวงจรปิดทั้งหมด พร้อมวิเคราะห์วิดีโอด้วย AI เชื่อมเข้ากับการติดตามงานประจำวัน ควบคู่กับการออกแบบเมนู ควบคุมต้นทุนอาหาร และบริหารกำไรขาดทุน",
    "results.r4.m1": "ระบบวิเคราะห์วิดีโอ AI ใช้งานจริง",
    "results.r4.m2": "ปฏิบัติการอาหารและเครื่องดื่มครบวงจร",
    "results.r4.m3": "ออกแบบเมนูและควบคุมต้นทุน",
    "results.r5.industry": "ค้าปลีกและศูนย์การค้า",
    "results.r5.desc": "Talent OS — ชั้นปฏิบัติการ AI สำหรับการสรรหาบุคลากรระดับองค์กร สร้างจากข้อมูลของ CPN เอง แปดปัญหาการสรรหา แปดทางแก้ในตัวผลิตภัณฑ์ ทั้งร่างใบกำหนดหน้าที่งานพร้อมระบุแหล่งที่มา ตัดสินกรอบระดับบนหน้าจอ และคัดกรองสองภาษาที่อ้างอิงได้",
    "results.r5.m1": "สร้างแล้ว 8 ทางแก้ ใช้งานจริงแล้ว 4",
    "results.r5.m2": "ทุกการทำงานของ AI ผ่านการอนุมัติโดยคน",
    "results.r5.m3": "สองภาษา ไทย / อังกฤษ",

  },
};

(function () {
  const STORE = "intas_lang";
  function current() {
    try { return localStorage.getItem(STORE) === "TH" ? "TH" : "EN"; } catch (e) { return "EN"; }
  }
  function dict(code) { return I18N[code === "TH" ? "th" : "en"]; }

  function apply(code) {
    const d = dict(code);
    document.documentElement.setAttribute("lang", code === "TH" ? "th" : "en");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const v = d[el.getAttribute("data-i18n")];
      if (v == null) return;
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = v;
      else el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      const v = d[el.getAttribute("data-i18n-ph")];
      if (v != null) el.setAttribute("placeholder", v);
    });

    // reflect state on the toggle(s)
    document.querySelectorAll(".lang [data-lang]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === code);
    });
  }

  function setLang(code) {
    try { localStorage.setItem(STORE, code); } catch (e) {}
    apply(code);
  }

  // expose + wire up
  window.INTAS = window.INTAS || {};
  window.INTAS.setLang = setLang;
  window.INTAS.getLang = current;
  window.INTAS.t = function (key) { return dict(current())[key] || key; };

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang [data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () { setLang(btn.getAttribute("data-lang")); });
    });
    apply(current());
  });
})();
