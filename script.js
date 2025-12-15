let data =[];
const resultsContainer = document.getElementById('resultsContainer');

function displayAtBottom(){
    window.onload = () => {
    window.scrollTo(0, document.body.scrollHeight);
}

// inversion du scroll (↓ monte, ↑ descend)
window.addEventListener("wheel", function(e) {
    e.preventDefault();
    window.scrollBy(0, -e.deltaY);
}, {passive:false});
}

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
    firstLine.appendChild(firstPostit);
    resultsContainer.appendChild(firstLine);
    linecount = 1;

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
                line.appendChild(postit);
            }
            resultsContainer.appendChild(line);
            postitcount += 3;
            linecount++;
        }
    }
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