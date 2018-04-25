$("document").ready(function(){
	var topPalette = ["#fe8369", "#fea469", "#fec068", "#fedd68", "#fefc68", "#defd67", "#75f175","#5dfe5c","#06dfe6d","#72fe72", "rgb(255, 142, 235)"]
	var palette =    ["#de2801", "#de5801", "#dd8201", "#ddac01", "#dcda02", "#a0ca02", "#14ca14","#02af01","#019201","#015f01","rgba(252, 229, 248, .9)"];
	var index = 0;
	var size = palette.length;

	$("#findOut").click(function(){
		$(".tile").slideUp(300).slideDown(300);

        document.body.style.background = palette[index%size];
        $("#title").css("color", topPalette[index%size]);
        index++;
    });

});