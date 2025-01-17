(async () => {
  const { DotLottie } = await import(
    "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm"
  );

  let player = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.getElementById("canvas"),
    src: "/src/animations/3-53722.json",
  });

  const yesButton = document.querySelector(".yes");
  const noButton = document.querySelector(".no");

  const yesPhrases = [];

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#FF0000",
      },
      shape: {
        type: "image",
        stroke: {
          width: 0,
          color: "#FF0000",
        },
        polygon: {
          nb_sides: 3,
        },
        image: {
          src: "/src/heart.png",
          width: 50,
          height: 50,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 50,
        random: true,
        anim: {
          enable: true,
          speed: 4.795204795204795,
          size_min: 0,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 32.06824121731046,
        color: "#ffffff",
        opacity: 0.03206824121731046,
        width: 0,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 0,
          size: 40,
          duration: 0.6496617698410762,
          opacity: 1,
          speed: 3,
        },
        repulse: {
          distance: 300,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  });

  const h1 = document.querySelector("h1");

  yesButton.addEventListener("click", () => {
    player.destroy();
    player = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.getElementById("canvas"),
      src: "/src/animations/3-53717.json",
    });

    h1.textContent = "О БОЖЕ! ТЫ СКАЗАЛА ДА 😍😍";

    const particlesJs = document.querySelector("#particles-js");
    particlesJs.style.opacity = "1";
  });

  noButton.addEventListener("click", () => {
    player.destroy();

    player = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.getElementById("canvas"),
      src: "/src/animations/3-53710.json",
    });

    const titles = ["Может попробуем?", "Ты ошиблась кнопкой?", "Что такое?"];

    h1.textContent = "Почему нет???😢😢😢";

    const particlesJs = document.querySelector("#particles-js");
    particlesJs.style.opacity = "0";
  });
})();

async function changeTitle(text) {
  const title = document.querySelector("h1");
  title.textContent = "";

  for (const letter of text) {
    title.textContent += letter;
    await timeout(60);
  }
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
