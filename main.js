const masterPlay = document.getElementById('masterPlay');
const masterPause = document.getElementById('masterPause');
const play_button = document.getElementById('play_button');
let audioElement = new Audio('./assets/songs/audio1.mp4');
let songItem = Array.from(document.getElementsByClassName('element'));

console.log(songItem)

let songIndex = 0;
let songList = [
    {songName: "Sanu tedi tedi", filePath: "./assets/songs/audio1.mp4", coverPath: "https://picsum.photos/200"},
    {songName: "Kaisa lga goriye", filePath: "./assets/songs/audio2.mp4", coverPath: "https://picsum.photos/200"},
    {songName: "Kabootar", filePath: "./assets/songs/audio3.mp4", coverPath: "https://picsum.photos/200"},
    {songName: "Left Right", filePath: "./assets/songs/audio4.mp4", coverPath: "https://picsum.photos/200"},
    {songName: "kaleshi", filePath: "./assets/songs/audio5.mp4", coverPath: "https://picsum.photos/200"},
    {songName: "patli kamariya", filePath: "./assets/songs/audio6.mp4", coverPath: "https://picsum.photos/200"},
    {songName: "patli kamariya", filePath: "./assets/songs/audio6.mp4", coverPath: "https://picsum.photos/200"},
    {songName: "patli kamariya", filePath: "./assets/songs/audio6.mp4", coverPath: "https://picsum.photos/200"},
    {songName: "patli kamariya", filePath: "./assets/songs/audio6.mp4", coverPath: "https://picsum.photos/200"},
    {songName: "patli kamariya", filePath: "./assets/songs/audio6.mp4", coverPath: "https://picsum.photos/200"},
    {songName: "patli kamariya", filePath: "./assets/songs/audio6.mp4", coverPath: "https://picsum.photos/200"},
    {songName: "patli kamariya", filePath: "./assets/songs/audio6.mp4", coverPath: "https://picsum.photos/200"}
]

let bar_song = document.getElementById('bar_song');

const togglePlay = () => {
    if(masterPlay.style.display == 'none'){
        masterPause.style.display = 'none';
        masterPlay.style.display = 'block';
        audioElement.pause();
    }
    else{
        masterPlay.style.display = 'none';
        masterPause.style.display = 'block';
        audioElement.play();
        console.log("playing");
    }

}


let progressBar = document.getElementById('progress');
let currTime = document.getElementById('currTime');
let totalDuration = document.getElementById('totalDuration');

audioElement.addEventListener('timeupdate', () =>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    progressBar.value = progress;
    currTime.innerHTML = (parseInt(audioElement.currentTime ) / 60 ).toFixed(2);
    totalDuration.innerHTML = (parseInt(audioElement.duration) / 60).toFixed(2);
})

progressBar.addEventListener('change', () =>{
    audioElement.currentTime = progressBar.value;
})

songItem.forEach((element, i) =>{
    element.getElementsByTagName('img')[0].src = songList[i].coverPath;
    element.getElementsByClassName('title')[0].innerHTML = songList[i].songName;
    let track = new Audio(songList[i].filePath);
    element.addEventListener('click', () =>{
        if(track.paused == true){
            bar_song.innerHTML = songList[i].songName;
            audioElement = new Audio(songList[i].filePath);
            togglePlay();
            currTime.innerHTML = 0;
        }
        else{
            track.pause();
            console.log("false")
        }
    })
})
