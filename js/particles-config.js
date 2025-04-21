tsParticles.load("particles-js", {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 50 },
      color: { value: "#ffd700" },
      size: { value: 2 },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: "out"
      },
      opacity: {
        value: 0.8,
        random: true
      },
      links: {
        enable: true,
        color: "#d4af37",
        distance: 120,
        opacity: 0.2
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          quantity: 4
        }
      }
    }
  });
  