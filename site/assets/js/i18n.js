/* ===========================================================
   INTAS — bilingual (TH / EN) content + language switcher
   Every translatable node carries data-i18n="key".
   Attributes: data-i18n-html (set innerHTML), data-i18n-ph (placeholder).
   Choice is persisted in localStorage under 'intas_lang'.
   =========================================================== */

const I18N = {
  en: {
    /* ---- nav / shared ---- */
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Book a free consultation",

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
    "home.badge": "Business & Technology Partner",
    "home.title": "Grow your business with the right advice and the right tools.",
    "home.lead": "INTAS helps companies make smarter decisions and move faster — pairing hands-on business consulting with software built to run your operations.",
    "home.cta1": "Book a free consultation",
    "home.cta2": "Explore our services",
    "float.t1": "Friendly & practical",
    "float.t2": "Advice you can actually use",

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
    "svc.learn": "Learn more →",
    "svc.1.title": "Business Consulting",
    "svc.1.desc": "Clear-eyed strategy, operations and growth planning to help you make confident decisions and reach your goals.",
    "svc.2.title": "Custom Enterprise Software",
    "svc.2.desc": "Stop paying for stacks of expensive SaaS subscriptions. We build enterprise software tailored to your business — one solution you actually own.",
    "svc.3.title": "e-Wedding Cards & Games",
    "svc.3.desc": "Beautiful digital wedding invitations and fun interactive games that bring your celebration online.",

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
    "services.s2.eyebrow": "02 — Software",
    "services.s2.title": "Custom Enterprise Software",
    "services.s2.desc": "Stop renting a dozen SaaS tools that don’t quite fit. We design and build software around your operations — one system you own, that grows with you.",
    "services.s2.b1": "ERP, CRM & internal tools",
    "services.s2.b2": "Workflow & operations automation",
    "services.s2.b3": "Dashboards & reporting",
    "services.s2.b4": "Integration with your existing systems",
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
  },

  th: {
    /* ---- nav / shared ---- */
    "nav.home": "หน้าแรก",
    "nav.services": "บริการ",
    "nav.about": "เกี่ยวกับเรา",
    "nav.contact": "ติดต่อ",
    "nav.cta": "ปรึกษาฟรี",

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
    "home.badge": "พาร์ทเนอร์ด้านธุรกิจและเทคโนโลยี",
    "home.title": "ทำให้ธุรกิจเติบโต ด้วยคำแนะนำที่ใช่และเครื่องมือที่ใช่",
    "home.lead": "INTAS ช่วยให้ธุรกิจตัดสินใจได้ฉลาดขึ้นและก้าวได้เร็วขึ้น — ผสานการให้คำปรึกษาธุรกิจแบบลงมือทำจริง เข้ากับซอฟต์แวร์ที่สร้างมาเพื่อขับเคลื่อนงานของคุณ",
    "home.cta1": "ปรึกษาฟรี",
    "home.cta2": "ดูบริการของเรา",
    "float.t1": "เป็นกันเองและใช้ได้จริง",
    "float.t2": "คำแนะนำที่นำไปใช้ได้เลย",

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
    "svc.learn": "อ่านเพิ่มเติม →",
    "svc.1.title": "ที่ปรึกษาธุรกิจ",
    "svc.1.desc": "วางกลยุทธ์ การดำเนินงาน และแผนการเติบโตอย่างชัดเจน เพื่อให้คุณตัดสินใจได้อย่างมั่นใจและไปถึงเป้าหมาย",
    "svc.2.title": "ซอฟต์แวร์องค์กรสั่งทำ",
    "svc.2.desc": "เลิกจ่ายค่า SaaS หลายตัวที่แพงและไม่ลงตัว เราสร้างซอฟต์แวร์องค์กรที่ออกแบบมาเพื่อธุรกิจของคุณโดยเฉพาะ — ระบบเดียวที่คุณเป็นเจ้าของจริง",
    "svc.3.title": "การ์ดแต่งงานและเกมออนไลน์",
    "svc.3.desc": "การ์ดเชิญงานแต่งดิจิทัลสวยงาม พร้อมเกมโต้ตอบสนุก ๆ ที่นำงานฉลองของคุณขึ้นสู่โลกออนไลน์",

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
    "services.s2.eyebrow": "02 — ซอฟต์แวร์",
    "services.s2.title": "ซอฟต์แวร์องค์กรสั่งทำ",
    "services.s2.desc": "เลิกเช่าเครื่องมือ SaaS หลายตัวที่ไม่ค่อยลงตัว เราออกแบบและสร้างซอฟต์แวร์รอบการทำงานของคุณ — ระบบเดียวที่คุณเป็นเจ้าของและเติบโตไปพร้อมคุณ",
    "services.s2.b1": "ERP, CRM และเครื่องมือภายใน",
    "services.s2.b2": "ระบบอัตโนมัติของเวิร์กโฟลว์และการดำเนินงาน",
    "services.s2.b3": "แดชบอร์ดและรายงาน",
    "services.s2.b4": "เชื่อมต่อกับระบบเดิมที่คุณมีอยู่",
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
