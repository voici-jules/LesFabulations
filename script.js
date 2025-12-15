let data =[];

function displayData(dataToDisplay) {
    resultsContainer.innerHTML = '';
    let linecount = 0;

    //le premier post it est tout seul sur sa ligne
    const firstLine = document.createElement('div');
    firstLine.className = 'linePostit';
    const firstPostit = document.createElement('div');
    firstPostit.className = 'postit';
    const firstImage = document.createElement('img');
    firstImage.src = dataToDisplay[0].lien;
    firstImage.className = 'postitImage';
    firstPostit.appendChild(firstImage);
    firstLine.appendChild(firstPostit);
    resultsContainer.appendChild(firstLine);
    linecount = 1;

    while(linecount < dataToDisplay.length){
        while (linecount % 2 === 0) {
        const line = document.createElement('div');
        //on veut créer 4 postits par ligne paires
        line.className = 'linePostit';
        for (let i = 0; i < 4; i++) {
            const item = dataToDisplay[linecount + i];
            const postit = document.createElement('div');
            postit.className = 'postit';
            const image = document.createElement('img');
            image.src = item.lien;
            image.className = 'postitImage';
            postit.appendChild(title);
            postit.appendChild(description);
            line.appendChild(postit);
        }
        resultsContainer.appendChild(line);
        linecount += 4;
    }
    while (linecount % 2 !== 0 ) {
        const line = document.createElement('div');
        //on veut créer 4 postits par ligne paires
        line.className = 'linePostit';
        for (let i = 0; i < 4; i++) {
            const item = dataToDisplay[linecount + i];
            const postit = document.createElement('div');
            postit.className = 'postit';
            const image = document.createElement('img');
            image.src = item.lien;
            image.className = 'postitImage';
            postit.appendChild(title);
            postit.appendChild(description);
            line.appendChild(postit);
        }
        resultsContainer.appendChild(line);
        linecount += 4;
    }
}

}