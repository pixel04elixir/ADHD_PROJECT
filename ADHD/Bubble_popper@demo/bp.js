var $body=$('body');
 
var playBtn = document.getElementById('play');
playBtn.addEventListener('click', function(){
	$('#play').hide(); 
document.getElementById('play').setAttribute("style","visibility:hidden");
 
	var $bubble;
	var i;
	
	setInterval(() =>{
	{
		$bubble=$('<div>');
		$bubble.addClass('bubble');
		$bubble.css({
			'top':Math.random()*(document.documentElement.clientHeight-100),
			'left':Math.random()*(document.documentElement.clientWidth-100)
		});
		$body.append($bubble);
	}
	},2000);
 
});

$body.on('click','.bubble',function(){
	$(this).addClass('color');
	$(this).addClass('is-popping');
});
$body.on('transitioned','.bubble',function(){
	$(this).remove();
	$(this).addClass('bubble');
});
 