const button = document.querySelector('#loadData');
const content = document.querySelector('#content');

button.addEventListener('click', () => {
  content.innerHTML = '<p>Loading...</p>';

  fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => {
      content.innerHTML = '';
      data.results.forEach(character => {
        const div = document.createElement('div');
        div.className = 'character card';
        div.innerHTML = `
          <h3>${character.name}</h3>
          <p>Height: ${character.height} cm</p>
          <p>Mass: ${character.mass} kg</p>
          <p>Hair Color: ${character.hair_color}</p>
          <p>Skin Color: ${character.skin_color}</p>
        `;
        content.appendChild(div);
      });
    })
    .catch(error => {
      content.innerHTML = `<p>Error loading data: ${error}</p>`;
    });
});