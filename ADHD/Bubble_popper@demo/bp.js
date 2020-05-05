var $body=$('body');
var $bubble;
var timesRun = 0;
var i=0;
var ii=1;
var j=0;
var start,end;
var total = 0;
var k=0;



var x = document.getElementById("myAudio"); 
var playBtn = document.getElementById('play');
playBtn.addEventListener('click', function(){
	x.play();
	$('#play').hide(); 
document.getElementById('play').setAttribute("style","visibility:hidden");
 
	var interval = setInterval(function(){
        timesRun += 1;
		 if(timesRun === 10){
        clearInterval(interval);
		document.getElementById("myModal").style.display = "block";
		document.getElementById("myBubbles").textContent = i;
		document.getElementById("myTotalTime").textContent = total/i;
		chart.render();
        }
        $bubble=$('<div>');
		$bubble.addClass('bubble');
		$bubble.css({
			'top':Math.random()*(document.documentElement.clientHeight-100),
			'left':Math.random()*(document.documentElement.clientWidth-100)
		});
		$body.append($bubble);
		start = new Date();
		 
		 console.log(start);
	},3000);
});

var arr=[];

for(k=1;k<=10;k++)
{
	arr.push({x:k,y:0});
}

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "TEST RESULT"
	},
	axisY:{
		includeZero: true
	},
	data: [{        
		type: "line",
      	indexLabelFontSize: 16,
		dataPoints: arr
	}]
});



$body.on('click','.bubble',function(){
    end = new Date();
	total=total+(end-start)/1000;
	console.log(timesRun);
	arr[timesRun].y=(end-start)/1000;
	x.play();
	$(this).addClass('color');
	$(this).addClass('is-popping');
	i+=1;
	});

$body.on('transitioned','.bubble',function(){
	console.log('transitioned');
	$(this).remove();
	$(this).addClass('bubble');
});
 
