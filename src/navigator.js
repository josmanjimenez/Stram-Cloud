



arrowBtn.addEventListener("click",()=>{
    location.hash="#home";
    location.reload();
   
    
});

searchFormBtn.addEventListener('click',()=>{
    location.hash=`#search=${searchFormInput.value}`;
    window.location.reload();
  });


window.addEventListener('DOMContentLoaded', navigator(),false);
window.addEventListener('hashchange', console.clear())

function navigator () {
    console.log({location});
if(location.hash.startsWith('#trend')){
    trendPage();
}
else if (location.hash.startsWith('#movie=')){
  movieDetailsPage();

}
else if (location.hash.startsWith('#category=')){
    categoriesPage();
}
else if (location.hash.startsWith('#search=')){
    searchPage();
}
else{
 
    homePage();
   
}
document.body.documentElement.scrollTop=0;
document.body.scrollTop=0;

///window.scrollTo(0,0);
}



 function homePage() {
    console.log('Home!!');
  
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
  
    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    
    getTrendingMoviesPreview();
    getCategoriesPreview();
    getMoviesListAction();
    getMoviesListLove();
    getMoviesListFamily();
    getMoviesListScienceFiction();
  }
  
  function categoriesPage() {
    console.log('categories!!');
  
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    
    movieMainList.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    titleListCategory.classList.add('inactive');

    const hash= location.hash;
    const hashSeparade = hash.split("=");
    const hashId = hashSeparade[1].split('-');
    getCategoryPage(hashId[0]);
  }
  
  function movieDetailsPage() {
    console.log('Movie!!');
  
    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
    movieMainList.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
    const hash =location.hash;
    const hashId=hash.split('=');
    movieDetail (hashId[1]);
  }
  
  function searchPage() {
    console.log('Search!!');
  
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');   
    movieMainList.classList.add('inactive');
    const [_,query]=location.hash.split("=");
    searchMovies(query);
    

  }
  
  function trendsPage() {
    console.log('TRENDS!!');
  
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
  }
  

  