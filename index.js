console.log("JS working!");

// Your code goes here
const workers = [
  {
    name: "Michael Scott",
    position: "Project Manager",
    email: "michael.scott@compuglobalhipermeganet.com",
    photo: "https://www.lavanguardia.com/uploads/2020/06/29/5fa91c5e49c91.jpeg",
  },
  {
    name: "Dwight Schrute",
    position: "Assistant to the project Manager",
    email: "dwight.schrute@compuglobalhipermeganet.com",
    photo:
      "https://s.yimg.com/ny/api/res/1.2/NSc3nWzMmEVxLXgx2N5LMA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/levelup_525/47b81f0779adb85592c63ebb7276c11a",
  },
  {
    name: "Ditto",
    position: "CTO",
    email: "ditto@compuglobalhipermeganet.com",
    photo:
      "https://m.media-amazon.com/images/I/61AwGJQu3CL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Homer Simpson",
    position: "Vice CEO",
    email: "homer.simpson@compuglobalhipermeganet.com",
    photo:
      "https://s1.eestatic.com/2018/05/02/bluper/bluper_304233574_169542942_1706x960.jpg",
  },
  {
    name: "Morty Smith",
    position: "Intern",
    email: "morty.smith@compuglobalhipermeganet.com",
    photo:
      "https://comicvine.gamespot.com/a/uploads/scale_medium/6/66303/4469088-tumblr_inline_n0aleph3fl1r8rr6o.jpg",
  },
];

workers.forEach((worker) => {
  console.log(worker.position);
  const divElement = document.createElement("div");
  divElement.className = "card";
  document.querySelector(".container").appendChild(divElement);
  console.log(worker);

  divElement.innerHTML = `
      <img src="${worker.photo}" alt="img of ${worker.name}">
    <h2>${worker.name}</h2>
    <h3>${worker.position}</h3>
    <p>
        <a href="${worker.email}">
            ${worker.email}
        </a>
    </p>
    <button><a href="worker1.html" target="_blank">See details</a></button>
  `;
});

function addID(users) {
  users.forEach((user, index) => {
    user.id = `${index + 1}`;
  });
}

addID(workers);
console.log(workers[0]);

