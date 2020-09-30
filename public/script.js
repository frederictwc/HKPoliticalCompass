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
        var firebaseConfig = {
			  apiKey: "AIzaSyBvYrAjaChRzpFdxsAzAz1qp-2iZH-vGkM",
			  authDomain: "hkpoliticalcompass.firebaseapp.com",
			  databaseURL: "https://hkpoliticalcompass.firebaseio.com",
			  projectId: "hkpoliticalcompass",
			  storageBucket: "hkpoliticalcompass.appspot.com",
			  messagingSenderId: "883847575366",
			  appId: "1:883847575366:web:82632bd8f78b0600b65747",
			  measurementId: "G-EFE7F08XT6"};
	    if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
	    function writeData(questionCounter,calcScore) {
	    	    var now = new Date()
	        	firebase.database().ref(now.getTime()).set({
             
	        		NoQuestions: questionCounter,
	        		Score: calcScore
	        	});
	        }
        writeData(questionCounter,calcScore)

	}
