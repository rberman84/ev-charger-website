(function(){
  // ---- CONFIG ----
  const TOWNS = {
    "huntington":"Huntington","commack":"Commack","hauppauge":"Hauppauge","smithtown":"Smithtown",
    "stony-brook":"Stony Brook","port-jefferson":"Port Jefferson","babylon":"Babylon","islip":"Islip",
    "bay-shore":"Bay Shore","sayville":"Sayville","patchogue":"Patchogue","ronkonkoma":"Ronkonkoma",
    "farmingville":"Farmingville","holbrook":"Holbrook","brookhaven":"Brookhaven","riverhead":"Riverhead",
    "southampton":"Southampton","east-hampton":"East Hampton","montauk":"Montauk","shelter-island":"Shelter Island",
    "hempstead":"Hempstead"
  };

  // Detect slug from /service-areas/<slug>
  const path = location.pathname.replace(/\/+$/,'');
  const m = path.match(/\/service-areas\/([^/]+)$/i);
  const slug = m ? m[1].toLowerCase() : "generic";
  const TOWN = TOWNS[slug] || "Suffolk County";

  // ---- FAQ SETS (use {TOWN} placeholder) ----
  const SETS = [
    { // A — Cost + Basics
      id:"A", qas:[
        ["Hey Google, how much does it cost to install an EV charger in {TOWN}?",
         "Most {TOWN} homeowners spend $850–$1,500 for a Level 2 install. Panel upgrades may add $1,500–$3,000."],
        ["What's the cheapest way to install an EV charger at home?",
         "Place the charger close to the panel to reduce conduit and labor. Longer runs and wall fishing increase cost."],
        ["Do I need a new electrical panel for an EV charger?",
         "Not always. Many homes pass a load calc. Older 100A services often need upgrades."],
        ["How long does a Level 2 EV charger installation take?",
         "Most installs take 3–5 hours. Trenching or panel upgrades can add time."],
        ["Where's the best place to install an EV charger?",
         "Garage or exterior wall nearest the driveway. Short, safe route from panel to charger is ideal."]
      ]
    },
    { // B — Permits + Rebates
      id:"B", qas:[
        ["Do I need a permit to install an EV charger in {TOWN}?",
         "Yes. Your town typically requires a permit and inspection. We handle the paperwork and scheduling."],
        ["Who approves EV charger installations in {TOWN}?",
         "Your local building department reviews and inspects the job."],
        ["Is it legal to install my own EV charger?",
         "In NY, a licensed electrician must perform the work to meet code and ensure safety."],
        ["Are there rebates for EV chargers on Long Island?",
         "Yes. PSEG Long Island offers rebates for qualifying Level 2 installations."],
        ["How do I apply for an EV charger rebate?",
         "We provide the documentation and guide you through the PSEG-LI process."]
      ]
    },
    { // C — EV-Specific + Timing
      id:"C", qas:[
        ["Can you install a Tesla Wall Connector in {TOWN}?",
         "Yes. We install Tesla Wall Connectors and brands like Emporia, Wallbox, ChargePoint."],
        ["What's the difference between Level 1 and Level 2 chargers?",
         "Level 1 uses 120V and is slow. Level 2 uses 240V and can be up to 10× faster."],
        ["Will an EV charger raise my electric bill?",
         "Yes, but it's still cheaper than gas. A full charge often costs $10–$15 depending on rates."],
        ["Can you install more than one EV charger at my house?",
         "Yes, with sufficient panel capacity. Load-sharing or dual-port options are available."],
        ["How soon can I get a charger installed?",
         "Once permits are approved, most installs can be scheduled within 1–2 weeks."]
      ]
    },
    { // D — Safety + Practical
      id:"D", qas:[
        ["Is it safe to plug my EV into a regular outlet?",
         "Safe for temporary use. A dedicated Level 2 circuit is safer and much faster for daily charging."],
        ["Can an EV charger overload my electrical system?",
         "We run a load calculation to ensure your panel/service can safely support the new circuit."],
        ["Can you install an EV charger outdoors in {TOWN} winters?",
         "Yes. We use weatherproof equipment, PVC conduit, and proper GFCI protection."],
        ["Does installing an EV charger increase home value?",
         "Yes. Homes with EV charging are more attractive to buyers in EV-adopting areas."],
        ["What affects EV charger install cost the most?",
         "Run length, wall type (finished vs garage), amperage, and whether trenching or a panel upgrade is needed."]
      ]
    }
  ];

  // Deterministic pick: simple hash of slug -> set index
  function hashStr(s){ let h=0; for(let i=0;i<s.length;i++){ h=(h*31 + s.charCodeAt(i))|0; } return Math.abs(h); }
  const setIndex = hashStr(slug) % SETS.length;
  const chosen = SETS[setIndex];

  // Helper: inject JSON-LD
  function injectLD(obj){
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(obj);
    document.head.appendChild(s);
  }

  // Build FAQ JSON-LD with town substitutions
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": chosen.qas.map(([q,a])=>({
      "@type":"Question",
      "name": q.replaceAll("{TOWN}", TOWN),
      "acceptedAnswer": { "@type":"Answer", "text": a.replaceAll("{TOWN}", TOWN) }
    }))
  };
  injectLD(faq);

  // Optional: render visible FAQ so schema matches page content
  // If a container with class ".faq" exists, we'll append Q&A.
  const host = document.querySelector(".faq");
  if(host){
    const wrap = document.createElement("div");
    wrap.className = "faq-items";
    wrap.innerHTML = faq.mainEntity.map((qa, i)=>`
      <details ${i===0?'open':''}>
        <summary>${qa.name}</summary>
        <div>${qa.acceptedAnswer.text}</div>
      </details>
    `).join("");
    host.appendChild(wrap);
  }
})();