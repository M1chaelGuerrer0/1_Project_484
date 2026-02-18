// Reveal spoiler content stored inside a <template>
function revealSpoiler(templateId, sectionId) {

    // Prevent duplicate spoiler boxes
    if (document.querySelector(`#${sectionId} .spoiler-box`)) return;

    const template = document.getElementById(templateId);
    const clone = template.content.cloneNode(true);

    const section = document.getElementById(sectionId);
    section.appendChild(clone);
}

// Grade the quiz by counting the number of correct answers
function gradeQuiz() {

    const answers = document.querySelectorAll("#quiz-form input[type='radio']:checked");
    let score = 0;

    answers.forEach(answer => {
        if (answer.value === "correct") {
            score++;
        }
    });

    document.getElementById("quiz-score").value = score;
}

// Boss search navigation
document.addEventListener("DOMContentLoaded", function() {

    const bossSearch = document.getElementById("boss-search");

    if (!bossSearch) return;

    const bossMap = {
        "Ocelot": "ocelot",
        "The Pain": "pain",
        "The Fear": "fear",
        "The End": "end",
        "The Fury": "fury",
        "The Sorrow": "sorrow",
        "Colonel Volgin": "volgin",
        "The Boss": "the-boss"
    };

    bossSearch.addEventListener("input", function() {

        const targetId = bossMap[this.value];
        const target = document.getElementById(targetId);

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            this.value = "";
        }
    });
});