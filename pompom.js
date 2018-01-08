$(document).ready(function(){
	var breakCounter= 5;
	var sessionCounter= 25;
	var status='pom';
	var pomCount=0;
  	var timerStart, minute, second;

	$('#decreasebreak').click(function(){
		if (breakCounter >= 5) {
			breakCounter -= 5;
			$('#break').html(breakCounter);
		} else if (breakCounter===0) {
			return breakCounter;
		}
	});

	$('#increasebreak').click(function(){
		if (breakCounter >= 0 && breakCounter <= 25) {
			breakCounter += 5;
			$('#break').html(breakCounter);
		}else{
			return breakCounter;
		}
	});

	$('#decreasesession').click(function(){
		if (sessionCounter > 0) {
			sessionCounter -= 5;
			$('#session').html(sessionCounter);
			$('#minutes').html(sessionCounter);
		}else if (sessionCounter === 0) {
			return sessionCounter;
		}
	});

	$('#increasesession').click(function(){
		if (sessionCounter >= 0 && sessionCounter < 120) {
			sessionCounter += 5;
			$('#session').html(sessionCounter);
			$('#minutes').html(sessionCounter);
		}else{
			return sessionCounter;
		}
	});

  function startCountdown(){
  	clearInterval(timerStart);
  	timerStart = setInterval(countdown,1000);
  };
  
  function countdown(){
		minute = $('#minutes').html();
		second = $('#seconds').html();
		console.log(minute);
    if (minute == 0 && second == 0){
    	pomCount++;
    	console.log(pomCount);
    	timerSwitch();
    }else if (minute !== 0 && second == 0) {
		minute--;
		second = 59;
		$('#seconds').html(second);
		$('#minutes').html(minute); 
    }
    else if (minute !== 0 && second !== 0){
      second--;
      var formatSec = ('0' + second).substr(-2);
      $('#seconds').html(formatSec);
    };
	
  };
    
    $('#start').click(function(){
      startCountdown();
    });

    $('#stop').click(function(){
    	clearInterval(timerStart);
    });

    $('#reset').click(function(){
    	clearInterval(timerStart);
    	$('#minutes').html('25');
    	$('#seconds').html('00');
    	sessionCounter = 25;
    	$('#session').html(sessionCounter);
    });

  function timerSwitch() {

	if (status === 'pomBreak' && pomCount === 8) {
    	clearInterval(timerStart);
    }else if(status === 'pom'){
		var breakDiv = parseInt($('#break').html());
    	$('#minutes').html(breakDiv);
  		status='pomBreak';
  		console.log(status);
    }else if(status === 'pomBreak'){
    	var sessionDiv = parseInt($('#session').html());
    	$('#minutes').html(sessionDiv);
    };
  };
}); 