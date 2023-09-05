const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const share_Btn = document.querySelector(".btn-open");
const factForm = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM elements
factsList.innerHTML = "";

//Load data from Supabase
async function loadFacts() {
  const res = await fetch(
    "https://xnuqrjqhndwdzjpaxntm.supabase.co/rest/v1/Facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhudXFyanFobmR3ZHpqcGF4bnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNjcwNzcsImV4cCI6MjAwODg0MzA3N30.MyraDCot0oNPW5PqUXxfLsUyejTgZsKnaT-nm9Ihx4I",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhudXFyanFobmR3ZHpqcGF4bnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNjcwNzcsImV4cCI6MjAwODg0MzA3N30.MyraDCot0oNPW5PqUXxfLsUyejTgZsKnaT-nm9Ihx4I",
      },
    }
  );

  const data = await res.json();
  const filteredData = data.filter((fact) => fact.category === "technology");

  createFactsList(data);
}

loadFacts();
function createFactsList(dataArray) {
  const htmlArr = dataArray.map((data) => {
    return ` <li class="fact"> 
    <p>
    ${data.text}
                  <a
                    class="source"
                    href="${data.source}"
                    target="_blank">source</a>
                </p>
                <span class="tag" style="background-color: ${
                  CATEGORIES.find((cat) => cat.name === data.category).color
                }">${data.category}</span>
    </li>`;
  });

  console.log(htmlArr);
  const html = htmlArr.join("");

  factsList.insertAdjacentHTML("afterbegin", html);
}
//Toggle form visibility
share_Btn.addEventListener("click", (e) => {
  factForm.classList.toggle("hidden");
  if (!factForm.classList.contains("hidden")) {
    share_Btn.textContent = "Close";
  } else {
    share_Btn.textContent = "Share a fact";
  }
});

function calcFactAge(year) {
  const date = new Date();

  const curretYear = date.getFullYear();
  const age = curretYear - year;
  if (age >= 0) {
    return age;
  } else {
    return "Impossible year";
  }
}

// let votesInteresting = 0;
// let votesMindblowing = 0;
// let votesFalse = 0;
// const totalVotes = votesInteresting + votesMindblowing;
// const mindBlownBtn = document.querySelector(".mind-blown");
// const interestingBtn = document.querySelector(".interesting");
// const falseBtn = document.querySelector(".false");

// mindBlownBtn.addEventListener("click", (e) => {});

/*
const factObj = {
  text: "Lisbon is the capitol of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const allCategories = CATEGORIES.map((el) => {
  return el.name;
});

const factAges = initialFacts.map((el) => {
  return calcFactAge(el.createdIn);
});

console.log(factAges);
*/
