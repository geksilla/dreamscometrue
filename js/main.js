function likeAnimation()
{
	$('#mask').animate({"top":400},1000,'easeInOutBounce');
	$('#masked').animate({"top":-400},1000,'easeInOutBounce');
}

function unlikeAnimation()
{
	$('#mask').animate({"top":450},1000,'easeInOutBounce');
	$('#masked').animate({"top":-450},1000,'easeInOutBounce');	
}