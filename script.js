/* =========================================================
   AHMED HACKING — CYBER THEME STYLESHEET
   Black background + neon green glow, cyberpunk dashboard
   ========================================================= */

@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@500;700;900&display=swap');

:root{
  --green: #00ff66;
  --green-bright: #39ff8a;
  --green-dim: #0a3d1f;
  --green-glow: rgba(0,255,102,0.65);
  --red: #ff2b3d;
  --bg: #020603;
  --panel-bg: rgba(0, 15, 6, 0.55);
  --font-mono: 'Share Tech Mono', monospace;
  --font-display: 'Orbitron', sans-serif;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body{
  width: 100%;
  height: 100%;
  background: var(--bg);
  color: var(--green);
  font-family: var(--font-mono);
  overflow: hidden;
