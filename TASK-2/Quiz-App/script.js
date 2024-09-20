const questions=[
	{
		question:"Which is larger animal in the world?",
		answers:[
			{text:"Shark",correct:false},
			{text:"Blue whale",correct:true},
			{text:"Elephant",correct:false},
			{text:"Lion",correct:false},
		]
	},
	{
		question:"Which is larger desert in the world?",
		answers:[
			{text:"Kalahari",correct:false},
			{text:"Gobi",correct:false},
			{text:"Antartica",correct:true},
			{text:"Sahara",correct:false},
		]
	},
	{
		question:"Which is smallest continent in the world?",
		answers:[
			{text:"Australia",correct:true},
			{text:"Asia",correct:false},
			{text:"Arctic",correct:false},
			{text:"Africa",correct:false},
		]
	},
	{
		question:"Which is smallest country in the world?",
		answers:[
			{text:"Nepal",correct:false},
			{text:"Vatican city",correct:true},
			{text:"Shri lanka",correct:false},
			{text:"India",correct:false},
		]
	},{
		question:"Which is smallest birds in the world?",
		answers:[
			{text:"Bee humming",correct:true},
			{text:"Swan",correct:false},
			{text:"Eagle",correct:false},
			{text:"Goose",correct:false},
		]
	}
];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
   
let currentQuestionIndex = 0;
let score = 0;


 function startQuiz() {
 	currentQuestionIndex = 0;
 	score = 0;
 	nextButton.innerHTML = "Next";
 	showQuestion();
 }
 function showQuestion(){
 	resetState();
 	let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". "+ currentQuestion.question;
   

      currentQuestion.answers.forEach(answer =>{
    const button= document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
    	button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);

     });
 }
    function resetState() {
    	nextButton.style.display ="none";
    	while(answerButtons.firstChild){
    		answerButtons.removeChild(answerButtons.firstChild)
    	}
    }
    function selectAnswer(e) {
    	const selectedBtn = e.target;
    	const isCorrect = selectedBtn.dataset.correct === "true";
    	if(isCorrect){
    		selectedBtn.classList.add("correct");
    		score++;
    	}
    	else{
    		selectedBtn.classList.add("incorrect");
    	}
    	Array.from(answerButtons.children).forEach(button => {
    		if(button.dataset.correct ==="true"){
    			button.classList.add("correct");
    		}else
    		button.disabled = true;
    	});
    nextButton.style.display ="block";
    }

function showScore(){
	resetState();
	questionElement.innerHTML =`Your Scored is ${score} out of ${questions.length}`;
	nextButton.innerHTML ="play Again";
	nextButton.style.display ="block";
}

    function handlenextButton() {
    	currentQuestionIndex++;
    	if(currentQuestionIndex < questions.length){
    		showQuestion();
    	}
    	else{
    		showScore();
    	}
    }

    nextButton.addEventListener("click" ,()=>{
    	if(currentQuestionIndex < questions.length){
         handlenextButton();
    	}
    	else{
    		startQuiz();
    	}
    });

 startQuiz();










