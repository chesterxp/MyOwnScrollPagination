console.log('dom');
var newArticlesList;
$.ajax({
	url:'dane/articles.txt',
	success:function(data){
		newArticlesList = JSON.parse(data);
		addNewArticle();
	},
	error:function(){
		alert('blad');
	}
});
	var articleBox = $('#articleBox');
	
function addNewArticle(){
	var lengthBox = newArticlesList.length;
	for (var i=lengthBox-1; i>=0 ;i--){
		var news = "";
		var images = newArticlesList[i].images;
		var title = newArticlesList[i].title;
		var caption = newArticlesList[i].caption;
		news += `<div class="article">
			<img src="${images}" alt="">
			<div class="title">
				${title}
			</div>
			<div class="caption">
				<p>${caption}</p>
			</div>
		</div>`;
		articleBox.append(news);
	}}

var height = $('#height');

var heightBoody = $('body').height();
let addNew = $('#addNew');


var myTop = $("div.demo").scrollTop();
$(window).on('click',function(e){
	let a = $(window).height();
	height.text(a);
	console.log(a);
});




var aktualnyHeight;
$(window).scroll(function(){
	var aktualnyScrol = $(this).scrollTop();
	console.log('aktualnyScrol',aktualnyScrol);
	aktualnyHeight = $(document).height();
	//console.log('aktualnyHeight',aktualnyHeight);
	if( aktualnyScrol > aktualnyHeight-700){
		console.log('bummmm');
		addNewNews();
	}
});


$(window).resize(function() {
	var viewportHeight = $(window).height();

});

function addNewNews(){
	var news = "";
	var images = "images/foto (3).jpg";
	var title = 'Mój artykuł osiem/2017';
	var caption = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero hic, possimus asperiores doloremque consectetur mollitia, quibusdam laudantium. Officia, neque recusandae molestiae quis ea hic velit adipisci quidem. Doloribus, voluptas, quaerat!";
	news += `<div class="article">
		<img src="${images}" alt="">
		<div class="title">
			${title}
		</div>
		<div class="caption">
			<p>${caption}</p>
		</div>
	</div>`;
	articleBox.append(news);
};

addNew.click(function(){
	addNewNews();
	console.log(aktualnyHeight);
});



// $(document).mousemove(function(){
// 	var ile = $(document).scrollBottom();
// 	console.log(ile);
// });
// $(document).ready(function(){
     
//     alert(ile);
    
//     if(ile > 600){
//         alert('wiecej niz 600');
//         // $('#fixedNavBar').css('background', '#FF0000');
//     }
// });



