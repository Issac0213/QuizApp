var questions = [ 

	{
		question: "Find the derivative of 'sinA' ",
		answer: "cosA"
	},
	{
		question: "What is the capital of China?",
		answer: "Beijing"
	},
	{
		question: "What's 10 % 3 ?",
		answer: 1
	},
	{
		question: "What is the capital of Bangladesh?",
		answer: "Dhaka"
	},
	{
		question: "Where did the Constitutional Convention meet in 1787?",
		answer: "Philadelphia"
	},
	{
		question: "How many amendments were in the ratified Bill of Rights?",
		answer: 10
	},
	{
		question: "Who wrote the original Bill of Rights and introduced it to Congress?",
		answer: "James Madison"
	},
	{
		question: "What is the minimum age for a presidential candidate? ",
		answer: 35
	},
	{
		question: "What document did the Constitution replace?",
		answer: "the Articles of Confederation"
	},


]

for(i = 0; i < questions.length; i++) {
    var q = questions[i].question
	document.getElementById('question'+ [i]).textContent=q
}

function testResults(){
	var correct=0
	var incorrect=0

	for (var i = 0; i <questions.length; i ++){
		var answer= questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])

		if (answer==guess){
			questionSpot.className = "correct"
			correct++
		}else {
             questionSpot.className= "incorrect"
             incorrect++
		}

	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}















