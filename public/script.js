function getScore (qName) {

    function getQuestionScore() {
    	var radiosNo = document.getElementsByName(qName);
		for (var i = 0, length = radiosNo.length; i < length; i++) {
			if (radiosNo[i].checked) {
			     var answerValue = Number(radiosNo[i].value);
		    }
		}
		console.log(answerValue)
		if (isNaN(answerValue)) {
			answerValue = 0;
		}

		return answerValue;
    }

    function getNumberOfQuestions() {
        var questionCountArray = document.getElementsByClassName('question');
	    var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
	    }
        return questionCounter
    }

    function normalizeScore(questionCounter,calcScore) {
    	// returns a score between -1,1
    	console.log("noamalizing" + calcScore + ";" + questionCounter)
    	var normalizedScore = calcScore/questionCounter
    	return normalizedScore
    }

    var calcScore = (getQuestionScore('q1') + getQuestionScore('q2') + getQuestionScore('q1'));
    questionCounter = getNumberOfQuestions()
    calcScore = normalizeScore(questionCounter,calcScore)
    console.log("Total Score: " + calcScore + ", " + 'Questions: ' + questionCounter) 
    //return normalizeScore(questionCounter,calcScore)
}

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
           gridThickness: 0
    },
    axisY:{
           minimum: -1,
           maximum: 1,
           gridThickness: 0
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

function createChart_2(calcScore) {

	var c = document.getElementById("compassResult");
	var ctx = c.getContext("2d");
	const chart_width = document.getElementById("compassResult").width
	const chart_height = document.getElementById("compassResult").height

	// Create gradient
	var grd = ctx.createLinearGradient(0, 0, chart_width, 0);
	grd.addColorStop(0, "yellow");
	grd.addColorStop(1, "blue");

	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, chart_width, chart_height);

	//draw line
	ctx.beginPath();
	ctx.moveTo(20, 50);
	ctx.lineTo(580, 50);
	ctx.lineWidth = 5;
	ctx.stroke();

	//draw point
	ctx.arc(300, 50, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();
}

function initDatabase() {
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

}

function writeData(questionCounter,calcScore) {
    var now = new Date()
	firebase.database().ref(now.getTime()).set({
 
		NoQuestions: questionCounter,
		Score: calcScore
	});
}

function submitQuiz() {
	console.log('submitted');
    getScore()
    
    document.getElementById('chartContainer').style.display = 'block'
    console.log("Total Score: " + calcScore + ", " + '# Questions: ' + questionCounter )    
    //createChart(calcScore)
    createChart_2(calcScore)
    initDatabase()
    writeData(questionCounter,calcScore)
}














