$.ajax({
	url:'dane/articles.txt',
	success: function dobre(data){
		newArticlesList = JSON.parse(data);
		newArticlesList.reverse();
		var aktualnyHeight;
		var start = 0;
		var stop = 5;
		// var lengthOfBoxOfArticles = newArticlesList.length;

		addNewArticle(start,stop);
		//podczas scrolowania dodawją sie nowe artykuly
		$(window).scroll(function(){
			var aktualnyScrol = $(this).scrollTop();
			console.log('aktualnyScrol',aktualnyScrol);
			aktualnyHeight = $(document).height();
			//console.log('aktualnyHeight',aktualnyHeight);
			if( aktualnyScrol > aktualnyHeight-700){
				start +=6;
				stop +=6;
				addNewArticle(start, stop);
			}
		});
	},
	error:function(){
		alert('blad');
	}
});
var articleBox = $('#articleBox');
//funkcja dodajaca nowe artykuly
function addNewArticle(start, stop){
	
	for (var i=start; i<=stop ;i++){
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
				<button class="showMore"><a href="#">Zobacz Wiecej</a></button>
			</div>
		</div>`;
		articleBox.append(news);
	}}

//dodanie pojedynczego artykulu po kliknieciu addNew
let addNew = $('#addNew');
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
			<button class="showMore"><a href="#">Zobacz Wiecej</a></button>
		</div>
	</div>`;
	articleBox.append(news);
};
addNew.click(function(){
	addNewNews();
	console.log(aktualnyHeight);
});
//------------------------------------------------------


