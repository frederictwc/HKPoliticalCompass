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
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3'));

	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');
		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}
	// show score as "score/possible score"

        document.getElementById('chartContainer').style.display = 'block'
        console.log("Total Score: " + calcScore + ", " + '# Questions: ' + questionCounter )
        

        function createChart (x) {
			    var chart = new CanvasJS.Chart("chartContainer",
			    {
			     title:{
			            text: 'Your Political Compass'
			    },
                axisX:{
                	   title: '<<Yellow<<- ->>Blue>>',
                       minimum: -3,
                       maximum: +3,
                       gridThickness: 1
                },
                axisY:{
                       minimum: -1,
                       maximum: 1,

                },
			    data: [
			    {
			     type: "scatter",
			     dataPoints: [

			     { x: x, y: 0, indexLabel: "You" }
			     ]
			   }
			   ]
			 });

			chart.render();
			}
        createChart(calcScore)

        var database = firebase.database();
        function writeUserData(userId, name, email, imageUrl) {
            firebase.database().ref('users/' + userId).set({
            username: name,
            email: email,
            });}    
        writeUserData(1,"dd","ddd")  
	}
