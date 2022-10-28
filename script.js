let quotes = [
  "What An Honor It Is To Court Death With You Once More",
  "Come To Kamar-Taj. It’ll Get You Back On The Lunchbox",
  "You Always Had To Be The One With The Knife",
  "The Morties went feral",
  "I Remain Grateful About This Universe. Even With Its Tribulations",
  "Every Night, The Same Dream, And Every Morning, The Same Nightmare",
  "I Love You In Every Universe",
  "Everything I Lost Can Be Mine Again",
  "I Can’t Beat You, So I’ll Give You What You Want",
  "Just Because Someone Stumbles And Loses Their Way Doesn’t Mean They Are Lost Forever",
  "You Break The Rules And Become A Hero. I Do It And Become The Enemy. That Doesn't Seem Fair",
  "Zombies are behind you",
  "The Morties went feral....but were killed by the night family...."
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener

  // Part 1
  document.querySelector("#main-title").textContent = "The Zombie Invasion Has Begun...........";

  // Part 2
  document.querySelector("body").style.backgroundColor = "red";

  // Part 3
  const favoriteThings = document.querySelectorAll("#favorite-things > li");

  document
    .querySelector("#favorite-things")
    .removeChild(favoriteThings[favoriteThings.length - 1]);

  // Part 4
  document.querySelectorAll(".special-title").forEach((item) => {
    item.style.fontSize = "2rem";
  });

  // Part 5
  document.querySelectorAll("#past-races > li").forEach((item) => {
    if (item.textContent.trim() === "Chicago") {
      document.querySelector("#past-races").removeChild(item);
    }
  });

  // Part 6
  const li = document.createElement("li");
    li.textContent = "Zombieland";
  document.querySelector("#past-races").appendChild(li);

  // Part 7
  const blogPost = document.createElement("div");
     blogPost.classList.add("blog-post");
  const heading = document.createElement("h2");
      heading.textContent = "Earth-91126 | Earth-Z";
  const pEl = document.createElement("p");
      pEl.textContent = "Zombie Virus Spreads";

  document.querySelector(".main").appendChild(blogPost);
    blogPost.appendChild(heading);
    blogPost.appendChild(pEl);

  // Part 8
  document.querySelector("#quote-title").addEventListener("click", (evt) => {
    let newZombie = document.createElement("div");
        newZombie.classList.add("blog-post");
        newZombie.classList.add("purple");
    let heading = document.createElement("h2");
        heading.textContent = "Zombies 2022 | Present";
    let pZombie = document.createElement("p");
        pZombie.textContent = "Wild Zombies are appearing....";
    document.querySelector(".main").appendChild(newZombie);
      newZombie.appendChild(heading);
      newZombie.appendChild(pZombie);
    randomQuote();
  });

  // Part 9

  document.querySelectorAll(".blog-post").forEach((item) => {
    item.addEventListener("mouseout", (evt) => {
      evt.currentTarget.classList.toggle("purple");
    });
    item.addEventListener("mouseenter", (evt) => {
      evt.stopPropagation();
      evt.currentTarget.classList.toggle("red");
    });
  });
});
