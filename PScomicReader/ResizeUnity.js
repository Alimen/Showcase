function resizeUnity(isWide) {
	if (isWide == "True") {
		$("#canvas").animate({
			width: '960px',
			height: '600px'
		});
	} else {
		$("#canvas").animate({
			width: '500px',
			height: '800px'
		});
	}
}
