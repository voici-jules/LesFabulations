let data =["fabulation_001.png",
"fabulation_002.png",
"fabulation_003.png",
"fabulation_004.png",
"fabulation_005.png",
"fabulation_006.png",
"fabulation_007.png",
"fabulation_008.png",
"fabulation_009.png",
"fabulation_010.png",
"fabulation_011.png",
"fabulation_012.png",
"fabulation_013.png",
"fabulation_014.png",
"fabulation_015.png",
"fabulation_016.png",
"fabulation_017.png",
"fabulation_018.png",
"fabulation_019.png",
"fabulation_020.png",
"fabulation_021.png",
"fabulation_022.png",
"fabulation_023.png",
"fabulation_024.png",
"fabulation_025.png",
"fabulation_026.png",
"fabulation_027.png",
"fabulation_028.png",
"fabulation_029.png",
"fabulation_030.png",
"fabulation_031.png",
"fabulation_032.png",
"fabulation_033.png",
"fabulation_034.png",
"fabulation_035.png",
"fabulation_036.png",
"fabulation_037.png",
"fabulation_038.png",
"fabulation_039.png",
"fabulation_040.png",
"fabulation_041.png",
"fabulation_042.png",
"fabulation_043.png",
"fabulation_044.png",
"fabulation_045.png",
"fabulation_046.png",
"fabulation_047.png",
"fabulation_048.png",
"fabulation_049.png",
"fabulation_050.png",
"fabulation_051.png",
"fabulation_052.png",
"fabulation_053.png",
"fabulation_054.png",
"fabulation_055.png",
"fabulation_056.png",
"fabulation_057.png",
"fabulation_058.png",
"fabulation_059.png",
"fabulation_060.png",
"fabulation_061.png",
"fabulation_062.png",
"fabulation_063.png",
"fabulation_064.png",
"fabulation_065.png",
"fabulation_066.png",
"fabulation_067.png",
"fabulation_068.png",
"fabulation_069.png",
"fabulation_070.png",
"fabulation_071.png",
"fabulation_072.png",
"fabulation_073.png",
"fabulation_074.png",
"fabulation_075.png",
"fabulation_076.png",
"fabulation_077.png",
"fabulation_078.png",
"fabulation_079.png",
"fabulation_080.png",
"fabulation_081.png",
"fabulation_082.png",
"fabulation_083.png",
"fabulation_084.png",
"fabulation_085.png",
"fabulation_086.png",
"fabulation_087.png",
"fabulation_088.png",
"fabulation_089.png",
"fabulation_090.png",
"fabulation_091.png",
"fabulation_092.png",
"fabulation_093.png",
"fabulation_094.png",
"fabulation_095.png",
"fabulation_096.png",
"fabulation_097.png",
"fabulation_098.png",
"fabulation_099.png",
"fabulation_100.png",
"fabulation_101.png",
"fabulation_102.png",
"fabulation_103.png",
"fabulation_104.png",
"fabulation_105.png",
"fabulation_106.png",
"fabulation_107.png",
"fabulation_108.png",
"fabulation_109.png",
"fabulation_110.png",
"fabulation_111.png",
"fabulation_112.png",
"fabulation_113.png",
"fabulation_114.png",
"fabulation_115.png",
"fabulation_116.png",
"fabulation_117.png",
"fabulation_118.png",
"fabulation_119.png",
"fabulation_120.png",
"fabulation_121.png",
"fabulation_122.png",
"fabulation_123.png",
"fabulation_124.png",
"fabulation_125.png",
"fabulation_126.png",
"fabulation_127.png",
"fabulation_128.png",
"fabulation_129.png",
"fabulation_130.png",
"fabulation_131.png",
"fabulation_132.png",
"fabulation_133.png",
"fabulation_134.png",
"fabulation_135.png",
"fabulation_136.png",
"fabulation_137.png"];

//on transforme les données en objets avec un lien complet
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
    firstImage.src = dataToDisplay[postitcount];
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
                    image.src = item;
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
                    image.src = item;
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
    
}
displayData(data);
requestAnimationFrame(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
//pour chaque post it on veut appliquer une légère rotation aléatoire a gauche ou a droite
function rotate(postit){
    //angle aléa entre 2 et -2 degrés
    const angle = Math.random() * 4 - 2;
    postit.style.transform = `rotate(${angle}deg)`;
}