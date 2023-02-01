

const api = axios.create({
  baseURL:'https://api.themoviedb.org/3',
  headers:{
    'Content-Type':'application/json;charset=utf-8'
  },
  params:{
    'api_key':API_KEY,
  },

});

const link ='https://api.themoviedb.org/3/trending/movie/day' + API_KEY;



async function getTrendingMoviesPreview() {
    const get = await api('/trending/movie/day');
    const movies = get.data.results;
   
    trendingMoviesPreviewList.innerHTML='';
    movies.forEach(movie => {
        
        const moviesContainer = document.createElement('div');
        moviesContainer.classList.add('movie-container');
        moviesContainer.addEventListener('click', ()=>{
          location.hash=`#movie=${movie.id}`
          location.reload()
        });
          

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute ('alt', movie.title);
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300'+ movie.poster_path, );
        

        moviesContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(moviesContainer);
    
    
    });

    
}

async function searchMovies (query){
  const {data} =await api('/search/movie',{
    params:{
      query,
    },
  });
  const movies= data.results;
  console.log(movies);
  movies.forEach(movie=> {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movieMain-container') ;
    movieContainer.addEventListener('click', ()=>{
      location.hash=`#movie=${movie.id}`
      location.reload();
    });
    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300'+ movie.poster_path);
    movieImg.setAttribute('alt',movie.title);

    movieContainer.appendChild(movieImg);
    genericSection.appendChild(movieContainer);
  })
  
}



// async function getTrendingMoviesPreview() {
//     const res = await fetch(link);
//     const data = await res.json();
  
//     const movies = data.results;
//     console.log (data);
//     movies.forEach(movie => {
//       const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
      
//       const movieContainer = document.createElement('div');
//       movieContainer.classList.add('movie-container');
  
//       const movieImg = document.createElement('img');
//       movieImg.classList.add('movie-img');
//       movieImg.setAttribute('alt', movie.title);
//       movieImg.setAttribute(
//         'src',
//         'https://image.tmdb.org/t/p/w300' + movie.poster_path
//       );
  
//       movieContainer.appendChild(movieImg);
//       trendingPreviewMoviesContainer.appendChild(movieContainer);
//     });
//   }
  
//   getTrendingMoviesPreview();

  async function getCategoriesPreview() {
    
    const {data} = await api('/genre/movie/list');
    const categories = data.genres;

    categoriesPreviewList.innerHTML=' ';
    categories.forEach( category => {
      
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');
  
      const categoryTitle  = document.createElement('h3');
      categoryTitle.classList.add('category-title');
      categoryTitle.addEventListener('click',()=>{
        location.hash=`#category=${category.id}-${category.name}`;
        location.reload();
      })
      categoryTitle.setAttribute('id', 'id'+ category.id);
      const textcat= document.createTextNode(category.name);
      
      categoryTitle.appendChild(textcat);
      categoryContainer.appendChild(categoryTitle);
      categoriesPreviewList .appendChild(categoryContainer)
    });
    }
  
  
  async function getMoviesListAction() {
    const get = await api('/discover/movie',{
      params:{
        with_genres: 28,
      },
    });
    const movies = get.data.results;
    console.log ('action',movies);
    actionList.innerHTML='';
    // const titleList =document.createElement('h2');
    // const textTitleList =document.createTextNode('Action');
    // titleList.appendChild(textTitleList)
    // actionList.appendChild(titleList)
    movies.forEach(movie => {
        console.log("action")
        const moviesContainer = document.createElement('div');
        moviesContainer.classList.add('movieMain-container');
        moviesContainer.addEventListener('click', ()=>{
          location.hash=`#movie=${movie.id}`
          location.reload()
        });
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute ('alt', movie.title);
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300'+ movie.poster_path);
        
        

        moviesContainer.appendChild(movieImg);

        actionList.appendChild(moviesContainer);
          
    
    });
    }


  async function getMoviesListLove() {
    const get = await api('/discover/movie',{
      params:{
        with_genres: 10749,
      },
    });
    const movies = get.data.results;
  
    loveList.innerHTML='';
    // const titleList =document.createElement('h2');
    // const textTitleList =document.createTextNode('Action');
    // titleList.appendChild(textTitleList)
    // actionList.appendChild(titleList)
    movies.forEach(movie => {
        
        const moviesContainer = document.createElement('div');
        moviesContainer.classList.add('movieMain-container');
        moviesContainer.addEventListener('click', ()=>{
          location.hash=`#movie=${movie.id}`
          location.reload()
        });
        
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute ('alt', movie.title);
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300'+ movie.poster_path, );
        

        moviesContainer.appendChild(movieImg);
      
        loveList.appendChild(moviesContainer);
    
    
    });

    }

    
  async function getMoviesListFamily() {
    const get = await api('/discover/movie',{
      params:{
        with_genres: 10751,
      },
    });
    const movies = get.data.results;
  
    familyList.innerHTML='';
    // const titleList =document.createElement('h2');
    // const textTitleList =document.createTextNode('Action');
    // titleList.appendChild(textTitleList)
    // actionList.appendChild(titleList)
    movies.forEach(movie => {
        
        const moviesContainer = document.createElement('div');
        moviesContainer.classList.add('movieMain-container');
        moviesContainer.addEventListener('click', ()=>{
          location.hash=`#movie=${movie.id}`
          location.reload()
        });
        
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute ('alt', movie.title);
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300'+ movie.poster_path, );
        

        moviesContainer.appendChild(movieImg);
      
        familyList.appendChild(moviesContainer);
    
    
    });

    
    }

  async function getMoviesListScienceFiction() {
    const get = await api('/discover/movie',{
      params:{
        with_genres: 878,
      },
    });
    const movies = get.data.results;
    
    fictionList.innerHTML='';
    // const titleList =document.createElement('h2');
    // const textTitleList =document.createTextNode('Action');
    // titleList.appendChild(textTitleList)
    // actionList.appendChild(titleList)
    movies.forEach(movie => {
        
        const moviesContainer = document.createElement('div');
        moviesContainer.classList.add('movieMain-container');
        moviesContainer.addEventListener('click', ()=>{
          location.hash=`#movie=${movie.id}`
          location.reload()
        });
        
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute ('alt', movie.title);
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300'+ movie.poster_path, );
        

        moviesContainer.appendChild(movieImg);
      
        fictionList.appendChild(moviesContainer);
    
    
    });
      
    
    }

    async function getCategoryPage(id) {
      const get = await api('/discover/movie',{
        params:{
          with_genres: id,
        },
      });
      const movies = get.data.results;
      console.log (movies);
      // const titleList =document.createElement('h2');
      // const textTitleList =document.createTextNode('Action');
      // titleList.appendChild(textTitleList)
      // actionList.appendChild(titleList)
      movies.forEach(movie => {
          
          const moviesContainer = document.createElement('div');
          moviesContainer.classList.add('movieMain-container');
          
          const movieImg = document.createElement('img');
          movieImg.classList.add('movie-img');
          movieImg.setAttribute ('alt', movie.title);
          movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300'+ movie.poster_path, );
          movieImg.addEventListener('click', ()=> {
            location.hash=`#movie=${movie.id}-${movie.genre_ids[0]}`;

          })
          
  
          moviesContainer.appendChild(movieImg);
          genericSection.appendChild(moviesContainer);
          const hash1= location.hash;
          const hashSeparade1 = hash1.split("=");
          const hashId1  = hashSeparade1[1].split('-');
          categoryTitleMain.innerHTML=' ';
          categoryTitleMain.innerHTML= hashId1[1];
    
      
      
      });
      }

      
    

    
  
      async function movieDetail (id){
        const {data:movie} = await api(`/movie/${id}`);
        

        movieDetailTitle.innerHTML=movie.title;
        movieDetailDescription.innerHTML=movie.overview;
        movieDetailScore.innerHTML=movie.vote_average;
        headerSection.style.background= `linear-gradient(180deg, rgba(0, 0, 0, 0.35) 19.27%, rgba(0, 0, 0, 0) 29.17%),url(https://image.tmdb.org/t/p/w300${movie.poster_path})`;
        getMoviesListRelated(id);
        getMoviesListCategoriesRelated(id);

      }
     
      async function getMoviesListRelated(id) {
        const {data} = await api(`/movie/${id}/recommendations`);
        const movies = data.results;
      
        relatedMoviesContainer.innerHTML='';
       
        movies.forEach(movie => {
            
            const moviesContainer = document.createElement('div');
            moviesContainer.classList.add('movieMain-container');
            moviesContainer.addEventListener('click', ()=>{
              location.hash=`#movie=${movie.id}`
              location.reload()});
            
            const movieImg = document.createElement('img');
            movieImg.classList.add("movie-img");
            movieImg.setAttribute('alt',movie.title);
            movieImg.setAttribute("src",'https://image.tmdb.org/t/p/w300'+ movie.poster_path);
            
          
          moviesContainer.appendChild(movieImg);
          relatedMoviesContainer.appendChild(moviesContainer);
          
        
          });
          }

            async  function getMoviesListCategoriesRelated(id){
            const {data} = await api(`/movie/${id}`);
            const movies=data.genres;
            movieDetailCategoriesList.innerHTML="";
            console.log(movies);
            movies.forEach(movie=>{
              const categoryContainer = document.createElement('div');
              categoryContainer.classList.add('category-container');
          
              const categoryTitle  = document.createElement('h3');
              categoryTitle.classList.add('category-title');
              categoryTitle.addEventListener('click',()=>{
                location.hash=`#category=${movie.id}-${movie.name}`;
              })
              categoryTitle.setAttribute('id', 'id'+ movie.id);
              const textcat= document.createTextNode(movie.name);
              
             categoryTitle.appendChild(textcat);
             categoryContainer.appendChild(categoryTitle)
             movieDetailCategoriesList.appendChild(categoryContainer);
             console.log(movie);

            });
            
          }