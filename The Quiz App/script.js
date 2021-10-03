const quizData = [{
    question: 'how old is gunvir',
    a: '10',
    b: '15',
    c: '13',
    d: '200',
    correct: 'c'
}, {
    question: 'what was the most used programming language in 2019',
    a: 'python',
    b: 'html',
    c: 'css',
    d: 'JavaScript',
    correct: 'd'
}, {
    question: 'who is the president of India',
    a: 'Modi',
    b: 'Kejriwal',
    c: 'Rahul Gandhi',
    d: 'Abdul Kalam',
    correct: 'a'
}, {
    question: 'what is the fullform of js',
    a: 'json',
    b: 'Java',
    c: 'JavaScript',
    d: 'none of the above',
    correct: 'c'
}]

let currentRound = 0;
let score = 0;
let submitBtn = document.getElementById('Submit1');
let nextButton = document.getElementById('Next');
let allOptions = document.getElementsByName('nothing');
let list = document.getElementById('ul');
let mainDiv = document.getElementById('questionDiv');

function loadQuiz() {
    document.getElementById('Question').innerText = quizData[currentRound].question;
    document.getElementById('a_text').innerText = quizData[currentRound].a;
    document.getElementById('b_text').innerText = quizData[currentRound].b;
    document.getElementById('c_text').innerText = quizData[currentRound].c;
    document.getElementById('d_text').innerText = quizData[currentRound].d;
}
loadQuiz();

function submitClicked() {
    let correctOption = quizData[currentRound].correct;
    let aBoolean = false;

    for (i = 0; i < allOptions.length; i++) {
        if (allOptions[i].checked) {
            aBoolean = true;
            nextButton.classList.remove('d-none');
            let checkedOption = allOptions[i];
            if (checkedOption.id === correctOption) {
                alert('Your answer is correct');
                score++;
            } else if (checkedOption.id !== correctOption) {
                alert('Your answer is wrong, the correct answer is ' + correctOption);
            }
        }
    }
    if (aBoolean === true) {
        submitBtn.classList.add('d-none');
    } else { alert('Nothing is checked'); }
}

function showMessage(text) {
    alert(text);
}

function nextQuestion() {
    currentRound++;
    if (currentRound < 4) {
        loadQuiz();
        submitBtn.classList.remove('d-none');
        nextButton.classList.add('d-none');
        for (i = 0; i < allOptions.length; i++) {
            if (allOptions[i].checked) {
                allOptions[i].checked = false;
            }
        }
    }

    if (currentRound > 3) {
        nextButton.classList.add('d-none');
        mainDiv.classList.add('d-none')
        let myString = 'your score is ' + score + '/ ' + quizData.length;
        showMessage(myString);
    }
}