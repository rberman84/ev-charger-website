import React, { useEffect } from 'react';

const EVInstallationAnimation = () => {
  useEffect(() => {
    // Initialize the animation after component mounts
    const script = document.createElement('script');
    script.textContent = `
(function(){
  const $ = (sel, el=document)=>el.querySelector(sel);
  const $$ = (sel, el=document)=>Array.from(el.querySelectorAll(sel));
  const root = document.getElementById('evComic');
  const svg  = document.getElementById('evcomic-svg');

  if (!root || !svg) return;

  const els = {
    caption: $('#evcomic-caption'),
    progress: $('.evcomic-progress span', root),
    conduit: $('#conduit', svg),
    cable:   $('#cable', svg),
    panelDoor: $('#panelDoor', svg),
    drill:   $('#drill', svg),
    sfx1:    $('#sfx1', svg),
    sfx2:    $('#sfx2', svg),
    sfx3:    $('#sfx3', svg),
    charger: $('#charger', svg),
    led:     $('#led', svg),
    bolt:    $('#bolt', svg),
    battery: $('#battery', svg)
  };

  // Prepare draw-on-paths
  function prepPath(p){
    const len = p.getTotalLength();
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = len;
    return len;
  }
  const conduitLen = prepPath(els.conduit);
  const cableLen   = prepPath(els.cable);

  // Small helpers
  const delay = ms => new Promise(r => setTimeout(r, ms));
  const setCaption = (t)=> els.caption.textContent = t;
  const setProgress = (i, total)=> { const pct = Math.max(0, Math.min(1, i/total)); els.progress.style.inset = \`0 \${100 - pct*100}% 0 0\`; };

  // LED control
  function ledOn(on=true){
    els.led.setAttribute('fill', on ? getComputedStyle(root).getPropertyValue('--accent') || '#e6ff57' : '#1a1f2f');
  }

  // Keyframes as async steps
  const steps = [
    // 0: Site check
    async () => {
      setCaption('Step 1 • Site check & plan.');
      // subtle worker "pop" via scale
      $('#worker', svg).animate([{transform:'translate(610px,150px) scale(0.8)'},{transform:'translate(610px,150px) scale(1)'}], {duration:500, fill:'forwards', easing:'ease-out'});
      await delay(600);
    },

    // 1: Mount charger
    async () => {
      setCaption('Step 2 • Mount charger on garage wall.');
      els.drill.style.opacity = 1;
      els.sfx1.animate([{opacity:0, transform:'translateY(-6px)'},{opacity:1},{opacity:0}], {duration:1100, easing:'ease-out'});
      $('#charger', svg).animate([{transform:'translate(420px,150px)'},{transform:'translate(420px,190px)'}], {duration:600, fill:'forwards', easing:'ease-out'});
      await delay(900);
      els.drill.style.opacity = 0;
    },

    // 2: Run conduit
    async () => {
      setCaption('Step 3 • Run conduit to panel.');
      els.conduit.style.transition = 'stroke-dashoffset 1200ms ease';
      els.conduit.style.strokeDashoffset = 0;
      await delay(1300);
    },

    // 3: Connect inside panel
    async () => {
      setCaption('Step 4 • Connect & secure in panel.');
      // panel door "open/close"
      els.panelDoor.animate([{transform:'translateX(0px)'},{transform:'translateX(-10px)'},{transform:'translateX(0px)'}], {duration:700, easing:'ease-in-out'});
      els.sfx2.animate([{opacity:0, transform:'scale(0.8)'},{opacity:1, transform:'scale(1)'},{opacity:0, transform:'scale(1.2)'}], {duration:800, easing:'ease-out'});
      await delay(820);
    },

    // 4: Power up & test
    async () => {
      setCaption('Step 5 • Power up & test.');
      els.bolt.style.opacity = 1;
      ledOn(true);
      $('#bolt', svg).animate([{opacity:0, transform:'translate(455px,182px) scale(0.6)'},
                               {opacity:1, transform:'translate(455px,182px) scale(1)'},
                               {opacity:.3, transform:'translate(455px,182px) scale(1.1)'}],
                               {duration:1000, iterations:2, easing:'ease-out'});
      await delay(1600);
    },

    // 5: Plug into EV
    async () => {
      setCaption('Step 6 • Plug into EV.');
      els.cable.style.transition = 'stroke-dashoffset 1000ms ease';
      els.cable.style.strokeDashoffset = 0;
      els.sfx3.animate([{opacity:0, transform:'translateY(-6px)'},{opacity:1},{opacity:0}], {duration:1000});
      await delay(1100);
    },

    // 6: Charging success
    async () => {
      setCaption('Step 7 • Charging! Clean, code-compliant, and ready.');
      // battery fills
      els.battery.setAttribute('width', 130);
      // gentle charger LED pulse
      const pulse = els.led.animate([{filter:'brightness(1)'},{filter:'brightness(2)'},{filter:'brightness(1)'}],
                                    {duration:1400, iterations:3});
      await pulse.finished;
    }
  ];

  let playing = false, stepIndex = 0, controller;

  async function play(){
    if(playing) return;
    playing = true;
    // if resuming mid step, continue from current index
    for(; stepIndex < steps.length && playing; stepIndex++){
      setProgress(stepIndex, steps.length-1);
      await steps[stepIndex]();
    }
    playing = false;
  }
  function pause(){ playing = false; }
  async function replay(){
    pause();
    // reset visuals
    els.conduit.style.transition = 'none';
    els.cable.style.transition = 'none';
    prepPath(els.conduit); prepPath(els.cable);
    ledOn(false);
    els.bolt.style.opacity = 0;
    els.battery.setAttribute('width', 0);
    $('#charger', svg).setAttribute('transform','translate(420,190)');
    stepIndex = 0;
    setProgress(0, steps.length-1);
    await delay(50);
    play();
  }

  // UI controls
  root.addEventListener('click', (e)=>{
    const act = e.target?.getAttribute('data-act');
    if(!act) return;
    if(act==='play') play();
    if(act==='pause') pause();
    if(act==='replay') replay();
  });

  // Autoplay when visible once
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(ent=>{
        if(ent.isIntersecting){ replay(); io.disconnect(); }
      });
    }, {threshold: .6});
    io.observe(root);
  } else { // fallback
    replay();
  }
})();
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
            Our Professional EV Charger Installation Process
          </h2>
          <p className="text-lg text-silver max-w-3xl mx-auto">
            Watch how our certified electricians install your EV charger from start to finish. 
            Every installation is code-compliant, clean, and professionally completed.
          </p>
        </div>

        {/* EV Charger Install: Comic Flipbook */}
        <div className="max-w-6xl mx-auto">
          <div 
            className="evcomic" 
            id="evComic" 
            data-brand="hsl(var(--primary))" 
            data-accent="hsl(var(--electric-green))" 
            data-navy="hsl(var(--navy-deep))"
          >
            <div className="evcomic-ui">
              <button className="evcomic-btn" data-act="play" aria-label="Play animation">
                Play
              </button>
              <button className="evcomic-btn" data-act="pause" aria-label="Pause animation">
                Pause
              </button>
              <button className="evcomic-btn" data-act="replay" aria-label="Replay animation">
                Replay
              </button>
              <div className="evcomic-progress" aria-hidden="true">
                <span></span>
              </div>
            </div>

            <figure className="evcomic-stage" aria-labelledby="evcomic-caption">
              {/* Responsive vector scene */}
              <svg 
                id="evcomic-svg" 
                viewBox="0 0 1200 600" 
                role="img" 
                aria-describedby="evcomic-caption" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Halftone dots for comic texture */}
                  <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="currentColor" opacity="0.09"/>
                  </pattern>
                  {/* Motion glow */}
                  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Background panels (comic feel) */}
                <rect x="0" y="0" width="1200" height="600" fill="var(--navy)"/>
                <rect x="16" y="16" width="1168" height="568" fill="url(#dots)" stroke="rgba(255,255,255,.08)" strokeWidth="2" rx="16"/>

                {/* House / Garage */}
                <g id="house" transform="translate(90,120)">
                  <rect x="0" y="0" width="520" height="360" rx="8" fill="#e8eef7" stroke="#c7d3e6" strokeWidth="3"/>
                  <rect x="40" y="40" width="120" height="220" fill="#b9c7dd" stroke="#8fa3c2" strokeWidth="3"/>
                  <text x="52" y="75" fontSize="18" fill="#0b1b33" opacity=".7">Panel</text>
                  {/* Panel door line */}
                  <line id="panelDoor" x1="100" y1="40" x2="100" y2="260" stroke="#8fa3c2" strokeWidth="4" strokeLinecap="round"/>
                  {/* Conduit path (drawn later) */}
                  <path id="conduit" d="M160,150 C240,160 300,190 360,210 L420,230"
                        fill="none" stroke="#5f718e" strokeWidth="10" strokeLinecap="round"/>
                  {/* Wall mount charger */}
                  <g id="charger" transform="translate(420,190)">
                    <rect x="0" y="0" width="70" height="120" rx="14" fill="#2a3244" stroke="#0f1421" strokeWidth="3"/>
                    <circle id="led" cx="35" cy="24" r="6" fill="#1a1f2f"/>
                    <rect x="28" y="120" width="14" height="14" rx="4" fill="#1a1f2f"/>
                  </g>
                </g>

                {/* Cable from charger to car (drawn later) */}
                <path id="cable" d="M515,380 C650,420 760,400 870,360 C940,334 1000,330 1040,340"
                      fill="none" stroke="#1a1f2f" strokeWidth="12" strokeLinecap="round"/>

                {/* Car */}
                <g id="car" transform="translate(780,280)">
                  <rect x="0" y="40" width="330" height="90" rx="16" fill="#f5f7fb" stroke="#cfd6e6" strokeWidth="4"/>
                  <rect x="50" y="0" width="220" height="60" rx="12" fill="#ecf1fb" stroke="#cdd7ee" strokeWidth="3"/>
                  <circle cx="70" cy="138" r="26" fill="#1f2838"/><circle cx="260" cy="138" r="26" fill="#1f2838"/>
                  {/* Charge port highlight */}
                  <circle id="port" cx="320" cy="85" r="8" fill="#1a1f2f"/>
                  {/* Battery bar (fills on final step) */}
                  <rect x="100" y="16" width="0" height="16" id="battery" fill="var(--accent)" rx="8"/>
                  <rect x="100" y="16" width="130" height="16" fill="none" stroke="#8fa3c2" strokeWidth="3" rx="8"/>
                </g>

                {/* Worker (simple icon) */}
                <g id="worker" transform="translate(610,150)">
                  <circle cx="0" cy="0" r="18" fill="#ffd9a1" stroke="#d9a96b" strokeWidth="3"/>
                  <rect x="-12" y="16" width="24" height="42" rx="6" fill="var(--brand)"/>
                  <rect x="-20" y="20" width="40" height="10" rx="5" fill="#0f1421"/>
                </g>

                {/* Tools / SFX */}
                <g id="drill" transform="translate(505,255)" opacity="0">
                  <rect x="0" y="0" width="36" height="18" rx="4" fill="#2a3244"/>
                  <rect x="36" y="6" width="16" height="6" fill="#2a3244"/>
                  <line x1="52" y1="9" x2="64" y2="9" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round"/>
                </g>

                <text id="sfx1" x="520" y="230" fontSize="28" fill="var(--accent)" filter="url(#glow)" opacity="0">DRRRILL!</text>
                <text id="sfx2" x="150" y="120" fontSize="28" fill="var(--accent)" filter="url(#glow)" opacity="0">CLICK!</text>
                <text id="sfx3" x="980" y="260" fontSize="28" fill="var(--accent)" filter="url(#glow)" opacity="0">PLUG!</text>
                <g id="bolt" transform="translate(455,182)" opacity="0">
                  <polygon points="18,0 0,38 14,38 0,76 36,30 22,30" fill="var(--accent)" filter="url(#glow)"/>
                </g>
              </svg>

              <figcaption id="evcomic-caption" className="evcomic-caption" aria-live="polite">
                Step 1 • Site check & plan.
              </figcaption>
            </figure>

            {/* Step list (for visual progress + SEO copy) */}
            <ol className="evcomic-steps">
              <li>Site check & plan</li>
              <li>Mount charger on garage wall</li>
              <li>Run conduit to panel</li>
              <li>Connect & secure inside panel</li>
              <li>Power up & test</li>
              <li>Plug into EV</li>
              <li>Charging success</li>
            </ol>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-silver mb-6">
            Ready to get your EV charger professionally installed? Our certified electricians handle every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-accent hover:scale-105 transition-all duration-300 text-navy-deep font-semibold px-8 py-3 rounded-lg">
              Get Free Installation Quote
            </button>
            <button className="border border-electric-green text-electric-green bg-electric-green/10 hover:bg-electric-green hover:text-navy-deep transition-all duration-300 font-semibold px-8 py-3 rounded-lg">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .evcomic { 
          --brand: hsl(var(--primary)); 
          --accent: hsl(var(--electric-green)); 
          --navy: hsl(var(--navy-deep));
          color: #fff; 
          background: var(--navy); 
          border-radius: 14px; 
          padding: 18px; 
        }
        .evcomic-ui { 
          display: flex; 
          align-items: center; 
          gap: 10px; 
          margin-bottom: 10px; 
        }
        .evcomic-btn { 
          background: #1f2a44; 
          border: 1px solid rgba(255,255,255,.15); 
          color: #fff; 
          padding: 8px 12px; 
          border-radius: 8px; 
          cursor: pointer; 
        }
        .evcomic-btn:hover { 
          transform: translateY(-1px); 
        }
        .evcomic-progress { 
          flex: 1; 
          height: 6px; 
          background: rgba(255,255,255,.1); 
          border-radius: 999px; 
          position: relative; 
          overflow: hidden; 
        }
        .evcomic-progress span { 
          position: absolute; 
          inset: 0 100% 0 0; 
          background: linear-gradient(90deg, var(--brand), var(--accent)); 
          transition: inset .4s ease; 
        }
        .evcomic-stage { 
          position: relative; 
          display: block; 
          width: 100%; 
          margin: 0; 
        }
        #evcomic-svg { 
          width: 100%; 
          height: auto; 
          display: block; 
        }
        .evcomic-caption { 
          margin: .5rem 0 0; 
          font-size: 14px; 
          opacity: .9; 
        }
        .evcomic-steps { 
          list-style: decimal-leading-zero; 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
          gap: .4rem .8rem; 
          margin: 12px 0 0; 
          padding: 0 4px; 
          color: #cfe0ff; 
        }
        .evcomic-steps li { 
          background: rgba(255,255,255,.05); 
          border: 1px solid rgba(255,255,255,.08); 
          border-radius: 8px; 
          padding: 8px 10px; 
        }
        #conduit, #cable { 
          stroke-dasharray: 1; 
          stroke-dashoffset: 1; 
        }
        #battery { 
          transition: width 1.6s ease; 
        }
        `
      }} />
    </section>
  );
};

export default EVInstallationAnimation;