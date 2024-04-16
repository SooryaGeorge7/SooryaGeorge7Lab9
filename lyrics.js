const lyricsContainer = document.getElementById('lyrics');
let lyrics = '';

for (let i = 99; i >1; i--) {
    lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer<br>`;
    lyrics += `Take one down and pass it around, ${i - 1} bottle${i - 1 === 1 ? '' : 's'} of beer on the wall<br><br>`;
}

lyrics += `1 bottle of beer on the wall, 1 bottle of beer<br>`;
lyrics += `Take one down and pass it around, no more bottles of beer on the wall<br><br>`;


lyrics += `No more bottles of beer on the wall, no more bottles of beer<br>`;
lyrics += `Go to the store and buy some more, 99 bottles of beer on the wall`;

lyricsContainer.innerHTML = lyrics;