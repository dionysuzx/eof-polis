<script lang="ts">
  import { onMount } from 'svelte';

  let expandedSection: string | null = null;

  const toggleSection = (section: string): void => {
    expandedSection = expandedSection === section ? null : section;
  };

  onMount(() => {
    // Ensure Polis script loads properly
    const existingScript = document.querySelector('script[src="https://pol.is/embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://pol.is/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  });
</script>

<svelte:head>
  <title>Let's talk about EOF</title>
</svelte:head>

<main>
  <div class="glitch-container">
    <div class="glitch-bg"></div>
  </div>

  <div class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="neon-badge">An Ethereum Social Experiment</div>
        <h1>Let's talk about <span class="glitch-text" data-text="EOF">EOF</span></h1>
        <div class="description">
          <p>
            EVM Object Format (EOF) is a proposed change to Ethereum's EVM. It is planned for Fusaka, but there is lots of push in both directions.
          </p>
          <p>
            This Polis conversation seeks to find common ground.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="accordion-section">
      <button class="accordion-button {expandedSection === 'what' ? 'active' : ''}" on:click={() => toggleSection('what')}>
        <span class="accordion-icon">⚡</span>
        What is EOF?
        <span class="toggle-icon">{expandedSection === 'what' ? '−' : '+'}</span>
      </button>
      <div class="accordion-content" style="max-height: {expandedSection === 'what' ? '300px' : '0'}">
        <p>EOF (EVM Object Format) is a proposed restructuring of EVM bytecode into a more formalized container format with separate sections for code and data. It aims to make the EVM more efficient, secure, and easier to analyze.</p>
      </div>

      <button class="accordion-button {expandedSection === 'why' ? 'active' : ''}" on:click={() => toggleSection('why')}>
        <span class="accordion-icon">🔍</span>
        Why This Conversation?
        <span class="toggle-icon">{expandedSection === 'why' ? '−' : '+'}</span>
      </button>
      <div class="accordion-content" style="max-height: {expandedSection === 'why' ? '300px' : '0'}">
        <p>Community consensus is crucial for Ethereum's evolution. This Polis conversation helps identify areas of agreement and thoughtful disagreements, providing insights that could help shape the future implementation of EOF.</p>
      </div>

      <button class="accordion-button {expandedSection === 'polis' ? 'active' : ''}" on:click={() => toggleSection('polis')}>
        <span class="accordion-icon">🗣️</span>
        How Does Polis Work?
        <span class="toggle-icon">{expandedSection === 'polis' ? '−' : '+'}</span>
      </button>
      <div class="accordion-content" style="max-height: {expandedSection === 'polis' ? '300px' : '0'}">
        <p>Polis is an AI-powered conversation platform that helps communities find consensus. You'll vote on statements (agree/disagree/pass) and can add your own statements. The AI identifies patterns of agreement across different viewpoints.</p>
      </div>
    </div>

    <div class="polis-container">
      <div class="terminal-header">
        <div class="terminal-buttons">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="terminal-title">evm_discuss.sh --topic=EOF</div>
      </div>
      <div class="polis-wrapper">
        <div class='polis' data-conversation_id='6ah2kbkpct'></div>
      </div>
    </div>
  </div>

  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <p class="footer-message">This was a v1 experiment created by Ethereum community members. We'd love to collaborate, hear your thoughts, and work together to help build more productive conversations on Ethereum. Let's chat!</p>
          <p class="pointer">↓</p>
        </div>
      </div>
      <div class="code-line">
        <a href="https://warpcast.com/chaskin.eth" target="_blank">@chaskin.eth</a> •
        <a href="https://warpcast.com/dionysuz.eth" target="_blank">@dionysuz.eth</a> •
        <a href="https://warpcast.com/joshdavis.eth" target="_blank">@joshdavis.eth</a> •
        <a href="https://warpcast.com/rz" target="_blank">@rz</a>
      </div>
    </div>
  </footer>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'JetBrains Mono', monospace, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell;
    background-color: #0a0d14;
    color: #ecf0ff;
    line-height: 1.6;
    overflow-x: hidden;
    width: 100%;
  }

  :global(html) {
    overflow-x: hidden;
    width: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  /* Animated Background */
  .glitch-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
  }

  .glitch-bg {
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200%;
    background: transparent url('data:image/svg+xml,%3Csvg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.15"/%3E%3C/svg%3E');
    z-index: -1;
    opacity: 0.2;
    animation: glitch-background 30s linear infinite;
  }

  @keyframes glitch-background {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-5%, 5%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  /* Hero Section */
  .hero {
    position: relative;
    background: linear-gradient(135deg, rgba(41, 20, 76, 0.8), rgba(13, 32, 64, 0.8));
    padding: 80px 0 60px;
    margin-bottom: 40px;
    border-bottom: 1px solid rgba(62, 221, 189, 0.3);
    box-shadow: 0 0 30px rgba(62, 221, 189, 0.2);
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(rgba(62, 221, 189, 0.1) 1px, transparent 1px),
      radial-gradient(rgba(62, 221, 189, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
    z-index: -1;
  }

  .hero-content {
    max-width: 800px;
  }

  .neon-badge {
    display: inline-block;
    background: rgba(62, 221, 189, 0.1);
    color: #3eddbd;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 8px 16px;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(62, 221, 189, 0.3);
    box-shadow: 0 0 10px rgba(62, 221, 189, 0.2);
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    line-height: 1.1;
    position: relative;
    text-shadow: 0 0 10px rgba(62, 221, 189, 0.3);
  }

  .glitch-text {
    position: relative;
    display: inline-block;
    color: #3eddbd;
  }

  .glitch-text::before,
  .glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch-text::before {
    color: #ff00e1;
    z-index: -1;
    animation: glitch-animation 3s infinite alternate-reverse;
  }

  .glitch-text::after {
    color: #3eddbd;
    z-index: -2;
    animation: glitch-animation2 2s infinite alternate-reverse;
  }

  @keyframes glitch-animation {
    0%, 100% { transform: translate(0, 0); opacity: 0.8; }
    20% { transform: translate(-2px, 2px); opacity: 0; }
    40% { transform: translate(-2px, -2px); opacity: 0.8; }
    60% { transform: translate(2px, 2px); opacity: 0; }
    80% { transform: translate(2px, -2px); opacity: 0.8; }
  }

  @keyframes glitch-animation2 {
    0%, 100% { transform: translate(0, 0); opacity: 0.8; }
    25% { transform: translate(2px, -2px); opacity: 0; }
    50% { transform: translate(-2px, 2px); opacity: 0.8; }
    75% { transform: translate(-2px, -2px); opacity: 0; }
  }

  .description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: rgba(236, 240, 255, 0.8);
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    max-width: 700px;
  }

  /* Accordion Section */
  .accordion-section {
    margin-bottom: 40px;
  }

  .accordion-button {
    width: 100%;
    display: flex;
    align-items: center;
    background: rgba(25, 30, 45, 0.8);
    border: 1px solid rgba(62, 221, 189, 0.3);
    color: #ecf0ff;
    font-family: inherit;
    font-size: 1.1rem;
    text-align: left;
    padding: 15px 20px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .accordion-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #3eddbd;
    transition: all 0.3s ease;
  }

  .accordion-button:hover {
    background: rgba(30, 35, 50, 0.9);
  }

  .accordion-button.active {
    background: rgba(35, 40, 55, 0.9);
    box-shadow: 0 0 15px rgba(62, 221, 189, 0.2);
  }

  .accordion-icon {
    margin-right: 15px;
    font-size: 1.2rem;
  }

  .toggle-icon {
    margin-left: auto;
    font-size: 1.5rem;
    line-height: 1;
  }

  .accordion-content {
    background: rgba(20, 25, 40, 0.7);
    border-radius: 4px;
    padding: 0 20px;
    margin-bottom: 15px;
    overflow: hidden;
    transition: max-height 0.5s ease;
    max-height: 0;
    border-left: 1px solid rgba(62, 221, 189, 0.3);
    border-right: 1px solid rgba(62, 221, 189, 0.3);
    border-bottom: 1px solid rgba(62, 221, 189, 0.3);
  }

  /* Polis Container */
  .polis-container {
    margin-bottom: 80px;
    background: rgba(15, 20, 35, 0.5);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(62, 221, 189, 0.3);
    box-shadow:
      0 0 20px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(62, 221, 189, 0.2);
  }

  .terminal-header {
    background: rgba(10, 15, 30, 0.8);
    padding: 12px 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(62, 221, 189, 0.3);
  }

  .terminal-buttons {
    display: flex;
    gap: 8px;
    margin-right: 15px;
  }

  .terminal-buttons span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .terminal-buttons span:nth-child(1) {
    background: #ff5f57;
  }

  .terminal-buttons span:nth-child(2) {
    background: #febc2e;
  }

  .terminal-buttons span:nth-child(3) {
    background: #28c840;
  }

  .terminal-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    color: rgba(236, 240, 255, 0.7);
  }

  .polis-wrapper {
    min-height: 600px;
  }

  :global(.polis) {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    min-height: 600px;
  }

  /* Footer */
  footer {
    background: linear-gradient(135deg, rgba(13, 32, 64, 0.9), rgba(41, 20, 76, 0.9));
    padding: 60px 0 20px;
    margin-top: auto;
    border-top: 1px solid rgba(62, 221, 189, 0.3);
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 40px;
  }

  .footer-section {
    flex: 1;
    min-width: 250px;
    text-align: center;
  }

  .footer-message {
    color: rgba(236, 240, 255, 0.8);
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  .pointer {
    color: #3eddbd;
    font-size: 1.2rem;
    margin: 0;
    animation: float 2s ease-in-out infinite;
    opacity: 0.8;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }
  }

  .code-line {
    border-top: 1px solid rgba(62, 221, 189, 0.2);
    padding-top: 15px;
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    color: rgba(236, 240, 255, 0.6);
  }

  .code-line a {
    color: rgba(236, 240, 255, 0.7);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .code-line a:hover {
    color: #3eddbd;
    text-shadow: 0 0 8px rgba(62, 221, 189, 0.4);
  }

  @keyframes btn-anim1 {
    0% { left: -100%; }
    50%, 100% { left: 100%; }
  }

  @keyframes btn-anim2 {
    0% { top: -100%; }
    50%, 100% { top: 100%; }
  }

  @keyframes btn-anim3 {
    0% { right: -100%; }
    50%, 100% { right: 100%; }
  }

  @keyframes btn-anim4 {
    0% { bottom: -100%; }
    50%, 100% { bottom: 100%; }
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    .hero {
      padding: 60px 0 40px;
    }

    .description {
      font-size: 1rem;
    }

    .footer-content {
      flex-direction: column;
      gap: 30px;
    }

    .accordion-button {
      padding: 12px 15px;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    .neon-badge {
      font-size: 0.7rem;
      padding: 6px 12px;
    }

    .accordion-icon {
      font-size: 1rem;
      margin-right: 10px;
    }
  }
</style>
