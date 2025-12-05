// ================================
// ELS – English Through Reading
// Version 1: Unit 1 only (demo)
// ================================

// --------- DATA MODEL ----------

const book = {
  title: "English Through Reading",
  level: "Intermediate (B1–B2)",
  units: [
    {
      id: 1,
      number: 1,
      title: "The Best Recruiting Agents",
      levelLabel: "Unit 1 • Intermediate",
      // Only the first paragraph is currently used. You can later replace this
      // with the full text from the book; I will update all files for you.
      readingParagraphs: [
        `In 1849 a servant girl wrote home to her brother from Port Adelaide, South Australia: "I have accepted a situation at £20 per annum, so you can tell the servants in your neighbourhood not to stay in England for such wages as from £4 to £8 a year, but come here." Letters such as these, which were circulated from kitchen to kitchen and from attic to attic in English homes, were the best recruiting agents for the colonies, which were then so desperately in need of young women to serve the pioneers who were trying to create a new life for themselves in their chosen countries. Other girls read about the much better prospects overseas in newspapers and magazines, which also published advertisements giving details of free or assisted passages.`
      ],
      preReadingQuestions: [
        "Would you like to live and work in another country? Why or why not?",
        "What information might persuade someone to leave their home country?",
        "Do you think letters and personal stories are powerful ways to influence people? Give an example.",
        "What are some modern equivalents of these 'recruiting agents' today (e.g. social media, job sites)?"
      ],
      vocabulary: [
        {
          word: "servant",
          pos: "noun",
          meaning: "a person who is paid to perform tasks in someone else's home",
          example:
            "The family employed a servant to help with cooking and cleaning.",
          uzbek: "xizmatkor"
        },
        {
          word: "situation",
          pos: "noun",
          meaning: "an old-fashioned word for 'job' or 'position'",
          example:
            "She found a situation as a governess in a wealthy household.",
          uzbek: "lavozim, ish o‘rni"
        },
        {
          word: "per annum",
          pos: "adverb phrase",
          meaning: "for each year; every year",
          example:
            "His salary was £30,000 per annum, plus a small performance bonus.",
          uzbek: "yiliga"
        },
        {
          word: "wages",
          pos: "noun (plural)",
          meaning: "money that is regularly paid for work, usually weekly",
          example:
            "Factory workers complained that their wages were too low.",
          uzbek: "ish haqi"
        },
        {
          word: "colonies",
          pos: "noun (plural)",
          meaning:
            "countries or territories controlled and ruled by a more powerful country",
          example:
            "Many European countries once had colonies in Africa and Asia.",
          uzbek: "mustamlakalar"
        },
        {
          word: "pioneers",
          pos: "noun (plural)",
          meaning:
            "the first people to go to and live in a new area, often facing many difficulties",
          example:
            "The pioneers worked hard to build houses and farms in the new land.",
          uzbek: "kashshoflar, boshlovchilar"
        },
        {
          word: "desperately",
          pos: "adverb",
          meaning: "in a way that shows a very strong need or desire",
          example:
            "The company was desperately looking for experienced engineers.",
          uzbek: "nihoyatda, juda ham"
        },
        {
          word: "prospects",
          pos: "noun (plural)",
          meaning: "the chances of success or the future possibilities",
          example:
            "Young people often move abroad because they believe the job prospects are better.",
          uzbek: "kelajak imkoniyatlari"
        },
        {
          word: "overseas",
          pos: "adverb/adjective",
          meaning: "in or to a foreign country across the sea",
          example:
            "She decided to apply for an overseas scholarship in Australia.",
          uzbek: "chet el(ga), dengiz orti"
        },
        {
          word: "assisted passages",
          pos: "noun phrase",
          meaning:
            "journeys (for example by ship) to another country that are paid partly or fully by the government or organisation",
          example:
            "Many workers accepted assisted passages to start a new life abroad.",
          uzbek: "yordamli safar xarajatlari (yo‘l puli qisman yoki to‘liq qoplangan)"
        }
      ],
      quiz: [
        {
          id: 1,
          question:
            "From where did the servant girl write the letter mentioned in the text?",
          options: [
            "Port Adelaide, South Australia",
            "London, England",
            "New York, USA",
            "Cape Town, South Africa"
          ],
          correctIndex: 0
        },
        {
          id: 2,
          question: "In which year was the letter written?",
          options: ["1849", "1949", "1809", "1894"],
          correctIndex: 0
        },
        {
          id: 3,
          question:
            "What yearly salary did the girl say she had accepted in South Australia?",
          options: ["£4", "£8", "£20", "£40"],
          correctIndex: 2
        },
        {
          id: 4,
          question:
            "According to the letter, what should servants in England do?",
          options: [
            "Stay in England and accept low wages",
            "Move to Port Adelaide for better pay",
            "Refuse to work as servants",
            "Work for free to gain experience"
          ],
          correctIndex: 1
        },
        {
          id: 5,
          question:
            "In the passage, what were described as 'the best recruiting agents' for the colonies?",
          options: [
            "Government officials",
            "Newspaper advertisements only",
            "Letters shared among servants",
            "Posters in town squares"
          ],
          correctIndex: 2
        }
      ],
      discussionQuestions: [
        "Do you think the girl’s letter gives an honest picture of life in Australia at that time? Why or why not?",
        "What are some risks of leaving your country based only on stories from friends or relatives?",
        "How is the situation of migrant workers today similar to or different from that of the young women in the text?",
        "If you received an offer of a much better salary in another country, what factors would you consider before moving?"
      ],
      writingTask:
        "Imagine you are a young person in 1849 who has just arrived in a new colony. Write a letter to your family in England describing your new life, your job, and whether you would advise them to join you (about 150–180 words)."
    }
  ]
};

// --------- DOM ELEMENTS ----------

const homeView = document.getElementById("homeView");
const unitView = document.getElementById("unitView");
const unitList = document.getElementById("unitList");

const unitTitleEl = document.getElementById("unitTitle");
const unitLevelEl = document.getElementById("unitLevel");

const preReadingListEl = document.getElementById("preReadingList");
const readingTextEl = document.getElementById("readingText");
const vocabTableBodyEl = document.getElementById("vocabTableBody");
const quizContainerEl = document.getElementById("quizContainer");
const quizResultEl = document.getElementById("quizResult");
const discussionListEl = document.getElementById("discussionList");
const writingTaskTextEl = document.getElementById("writingTaskText");

const writingAnswerEl = document.getElementById("writingAnswer");

const homeButton = document.getElementById("homeButton");
const backToUnitsButton = document.getElementById("backToUnits");
const checkQuizButton = document.getElementById("checkQuizButton");

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Keep track of current unit
let currentUnit = null;

// --------- INITIALISATION ----------

document.addEventListener("DOMContentLoaded", () => {
  renderUnitCards();
  attachEventListeners();
});

// --------- RENDER FUNCTIONS ----------

function renderUnitCards() {
  unitList.innerHTML = "";

  book.units.forEach((unit) => {
    const card = document.createElement("article");
    card.className = "unit-card";

    const header = document.createElement("div");
    header.className = "unit-card-header";

    const left = document.createElement("div");

    const numberEl = document.createElement("p");
    numberEl.className = "unit-number";
    numberEl.textContent = `Unit ${unit.number}`;

    const titleEl = document.createElement("p");
    titleEl.className = "unit-title";
    titleEl.textContent = unit.title;

    left.appendChild(numberEl);
    left.appendChild(titleEl);

    const metaEl = document.createElement("p");
    metaEl.className = "unit-meta";
    metaEl.textContent = book.level;

    header.appendChild(left);
    header.appendChild(metaEl);

    const actions = document.createElement("div");
    actions.className = "unit-actions";

    const openBtn = document.createElement("button");
    openBtn.className = "primary-button";
    openBtn.type = "button";
    openBtn.textContent = "Open Unit";
    openBtn.addEventListener("click", () => openUnit(unit.id));

    actions.appendChild(openBtn);

    card.appendChild(header);
    card.appendChild(actions);

    unitList.appendChild(card);
  });
}

function openUnit(unitId) {
  const unit = book.units.find((u) => u.id === unitId);
  if (!unit) return;

  currentUnit = unit;

  unitTitleEl.textContent = unit.title;
  unitLevelEl.textContent = unit.levelLabel || book.level;

  // Pre-reading
  preReadingListEl.innerHTML = "";
  unit.preReadingQuestions.forEach((q) => {
    const li = document.createElement("li");
    li.textContent = q;
    preReadingListEl.appendChild(li);
  });

  // Reading
  readingTextEl.innerHTML = "";
  unit.readingParagraphs.forEach((p) => {
    const para = document.createElement("p");
    para.textContent = p;
    readingTextEl.appendChild(para);
  });

  // Vocabulary
  vocabTableBodyEl.innerHTML = "";
  unit.vocabulary.forEach((item) => {
    const row = document.createElement("tr");

    const wordCell = document.createElement("td");
    wordCell.textContent = item.word;

    const posCell = document.createElement("td");
    posCell.textContent = item.pos;

    const meaningCell = document.createElement("td");
    meaningCell.textContent = item.meaning;

    const exampleCell = document.createElement("td");
    exampleCell.textContent = item.example;

    const uzbekCell = document.createElement("td");
    uzbekCell.textContent = item.uzbek;

    row.appendChild(wordCell);
    row.appendChild(posCell);
    row.appendChild(meaningCell);
    row.appendChild(exampleCell);
    row.appendChild(uzbekCell);

    vocabTableBodyEl.appendChild(row);
  });

  // Quiz
  renderQuiz(unit.quiz);

  // Discussion
  discussionListEl.innerHTML = "";
  unit.discussionQuestions.forEach((q) => {
    const li = document.createElement("li");
    li.textContent = q;
    discussionListEl.appendChild(li);
  });

  // Writing
  writingTaskTextEl.textContent = unit.writingTask;
  writingAnswerEl.value = "";

  // Switch views
  homeView.classList.remove("active-view");
  unitView.classList.add("active-view");

  // Ensure default tab is active
  switchToTab("preReading");
}

function renderQuiz(questions) {
  quizContainerEl.innerHTML = "";
  quizResultEl.textContent = "";

  questions.forEach((q, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "quiz-question";

    const qText = document.createElement("p");
    qText.className = "quiz-question-text";
    qText.textContent = `${index + 1}. ${q.question}`;
    wrapper.appendChild(qText);

    const optionsWrapper = document.createElement("div");
    optionsWrapper.className = "quiz-options";

    q.options.forEach((optionText, optionIndex) => {
      const label = document.createElement("label");
      label.className = "quiz-option-label";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `quiz-q-${q.id}`;
      input.value = optionIndex;

      const span = document.createElement("span");
      span.textContent = optionText;

      label.appendChild(input);
      label.appendChild(span);
      optionsWrapper.appendChild(label);
    });

    wrapper.appendChild(optionsWrapper);
    quizContainerEl.appendChild(wrapper);
  });
}

// --------- EVENT HANDLERS ----------

function attachEventListeners() {
  homeButton.addEventListener("click", () => {
    unitView.classList.remove("active-view");
    homeView.classList.add("active-view");
  });

  backToUnitsButton.addEventListener("click", () => {
    unitView.classList.remove("active-view");
    homeView.classList.add("active-view");
  });

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.getAttribute("data-tab");
      switchToTab(tabName);
    });
  });

  checkQuizButton.addEventListener("click", handleCheckQuiz);
}

function switchToTab(tabName) {
  tabButtons.forEach((btn) => {
    const isActive = btn.getAttribute("data-tab") === tabName;
    btn.classList.toggle("active-tab", isActive);
  });

  tabContents.forEach((content) => {
    const contentId = content.id.replace("tab-", "");
    const isActive = contentId === tabName;
    content.classList.toggle("active-tab-content", isActive);
  });
}

function handleCheckQuiz() {
  if (!currentUnit) return;

  const questions = currentUnit.quiz;
  let correctCount = 0;
  let answeredCount = 0;

  questions.forEach((q) => {
    const name = `quiz-q-${q.id}`;
    const selected = document.querySelector(
      `input[name="${name}"]:checked`
    );
    if (selected) {
      answeredCount++;
      const choiceIndex = parseInt(selected.value, 10);
      if (choiceIndex === q.correctIndex) {
        correctCount++;
      }
    }
  });

  if (answeredCount === 0) {
    quizResultEl.textContent = "Please answer at least one question.";
    quizResultEl.style.color = "#f97373";
    return;
  }

  const total = questions.length;
  quizResultEl.textContent = `You answered ${correctCount} out of ${total} questions correctly.`;
  quizResultEl.style.color =
    correctCount >= Math.ceil(total * 0.7) ? "#22c55e" : "#f97373";
}
