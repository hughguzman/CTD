const button = document.querySelector('#loadData');
const content = document.querySelector('#content');

button.addEventListener('click', () => {
  content.innerHTML = '<p>Loading...</p>';

  fetch('https://swapi.dev/api/films/')
    .then(response => response.json())
    .then(data => {
      content.innerHTML = '';
      data.results.forEach(film => {
        const div = document.createElement('div');
        div.className = 'film card';
        div.innerHTML = `
          <h3>${film.title}</h3>
          <p>Director: ${film.director}</p>
          <p>Producer: ${film.producer}</p>
          <p>Release Date: ${film.release_date}</p>
          <p>Opening Crawl:</p>
          <p>${film.opening_crawl}</p>
        `;
        content.appendChild(div);
      });
    })
    .catch(error => {
      content.innerHTML = `<p>Error loading data: ${error}</p>`;
    });
});