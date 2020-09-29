// scripts here:

	function submitQuiz() {
		console.log('submitted');

	// get each answer score
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	// calc score with answerScore function
		var calcScore = (answerScore('q1') + answerScore('q2'));

	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');
		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}
	// show score as "score/possible score"
		var showScore = "Your political score: " + calcScore +"/" + questionCounter;

		document.getElementById('userScore').innerHTML = showScore;
        document.getElementById('chartContainer').style.display = 'block'
        console.log("Total Score: " + calcScore + ", " + '# Questions: ' + questionCounter )
        
	}
