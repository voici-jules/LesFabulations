let data =[];
const resultsContainer = document.getElementById('resultsContainer');

function displayData(dataToDisplay) {
    resultsContainer.innerHTML = '';
    let linecount = 0;
    let postitcount = 0;

    //le premier post it est tout seul sur sa ligne
    const firstLine = document.createElement('div');
    firstLine.className = 'linePostit';
    const firstPostit = document.createElement('div');
    firstPostit.className = 'postit';
    const firstImage = document.createElement('img');
    firstImage.src = dataToDisplay[postitcount].lien;
    firstImage.className = 'postitImage';
    firstPostit.appendChild(firstImage);
    rotate(firstPostit);
    postitcount++;
    firstLine.appendChild(firstPostit);
    resultsContainer.appendChild(firstLine);
    linecount++;

        while(postitcount < dataToDisplay.length){
            while (linecount % 2 === 0) {
            const line = document.createElement('div');
            //on veut créer 4 postits par ligne paires
            line.className = 'linePostit';
            for (let i = 0; i < 4; i++) {
                const item = dataToDisplay[postitcount + i];
                const postit = document.createElement('div');
                postit.className = 'postit';
                const image = document.createElement('img');
                image.src = item.lien;
                image.className = 'postitImage';
                postit.appendChild(image);
                rotate(postit);
                line.appendChild(postit);
            }
            resultsContainer.appendChild(line);
            postitcount += 4;
            linecount++;
        }
        while (linecount % 2 !== 0 ) {
            const line = document.createElement('div');
            //on veut créer 3 postits par ligne impaires
            line.className = 'linePostit';
            for (let i = 0; i < 3; i++) {
                const item = dataToDisplay[postitcount + i];
                const postit = document.createElement('div');
                postit.className = 'postit';
                const image = document.createElement('img');
                image.src = item.lien;
                image.className = 'postitImage';
                postit.appendChild(image);
                rotate(postit);
                line.appendChild(postit);
            }
            resultsContainer.appendChild(line);
            postitcount += 3;
            linecount++;
        }
    }
    requestAnimationFrame(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
}
fetch('dataImage.json')
    .then(response => response.json())
    .then(jsonData => { data = jsonData;
        console.log('Données chargées:', data);
        displayData(data);
    })
    .catch(error => {
        console.error('Erreur lors du chargement des données:', error);
    });

//pour chaque post it on veut appliquer une légère rotation aléatoire a gauche ou a droite
function rotate(postit){
    //angle aléa entre 2 et -2 degrés
    const angle = Math.random() * 4 - 2;
    postit.style.transform = `rotate(${angle}deg)`;
}