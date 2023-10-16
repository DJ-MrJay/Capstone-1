const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuItem = document.querySelectorAll(".menu-item");
const closeIcon = document.querySelector(".close-icon");

function toggleMenu() {
  if (mobileMenu.classList.contains("showMenu")) {
    mobileMenu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    hamburger.style.display = "block";
  } else {
    mobileMenu.classList.add("showMenu");
    closeIcon.style.display = "block";
    hamburger.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);
menuItem.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
});

const artist = [
  {
    image: "images/OneRepublic.jpg",
    name: "OneRepublic",
    performance: "Hits from their latest album",
    description:
      "OneRepublic is an American pop rock band formed in Colorado Springs, Colorado, in 2002. The band achieved its first commercial success on Myspace as an unsigned act.",
  },

  {
    image: "images/TheLumineer.jpg",
    name: "Lumineers",
    performance: "Hits from their latest album",
    description:
      "The Lumineers are an American folk rock band based in Denver, Colorado. The founding members are Wesley Schultz (lead vocals, guitar) and Jeremiah Fraites (drums, percussion, piano).",
  },

  {
    image: "images/SautiSol.jpg",
    name: "Sauti Sol",
    performance: "Hits from their latest album",
    description:
      "Sauti Sol is a Kenyan ishukuti dancers band formed in Nairobi, Kenya, by vocalists Bien-Aimé Baraza, Willis Chimano and Savara Mudigi in 2005.",
  },

  {
    image: "images/MeganTheeStallion.jpg",
    name: "Megan Thee Stallion",
    performance: "Hits from her latest album",
    description:
      "Megan Thee Stallion is an American rapper who first garnered attention when videos of her freestyling became popular on Instagram.",
  },

  {
    image: "images/BlueOctober.jpg",
    name: "Blue October",
    performance: "Hits from their latest album",
    description:
      "Blue October is an American alternative rock band originally from Houston, Texas. The band was formed in 1995.",
  },

  {
    image: "images/KhaligraphJones.jpg",
    name: "Khaligraph Jones",
    performance: "Hits from his latest album",
    description:
      'Khaligraph Jones and often referred to as Papa Jones, is a Kenyan rapper known for his hit singles "Mazishi" and "Yego".',
  },
];

for (let i = 0; i < artist.length; i += 1) {
  document.querySelector("#artist-list").innerHTML += `
  <li class="grid-item2">
    <div class="thumbnail">
      <img src="${artist[i].image}" alt="">
    </div>

    <div class="description">
      <h3>${artist[i].name}</h3>
      <h4>${artist[i].performance}</h4>
      <h5>${artist[i].description}</h5>
    </div>
  </li>`;
}

// Sticky Navbar

const navbar = document.getElementById("navbar");
const navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
