 // variable initialization

 let songIndex=0;
 let audioElement=new Audio('mp 3 files/1.mp3');
 let masterPlay=document.getElementById('masterPlay');
 let myProgressBar=document.getElementById('myProgressBar');
 let gif=document.getElementById('gif');
 let songItems=Array.from(document.getElementsByClassName('songItem'));
 let defaultSongName=document.getElementById('defaultSongName');

 
 
 // array of objects of songs
 let songs=[
    {name:"Let me Love you", filePath:"mp 3 files/1.mp3", coverPath:"img/cover1.jpg"},
    {name:"On my Way", filePath:"mp 3 files/2.mp3", coverPath:"img/cover2.jpg"},
    {name:"Shape of You", filePath:"mp 3 files/3.mp3", coverPath:"img/cover3.jpg"},
    {name:"Love me like you do", filePath:"mp 3 files/4.mp3", coverPath:"img/cover4.jpg"},
    {name:"See You again", filePath:"mp 3 files/5.mp3", coverPath:"img/cover5.jpg"},
    {name:"Stay", filePath:"mp 3 files/6.mp3", coverPath:"img/cover6jpg.jpg"},
    {name:"Don't you hold me down", filePath:"mp 3 files/7.mp3", coverPath:"img/cover7.jpg"},
    {name:"As I am", filePath:"mp 3 files/8.mp3", coverPath:"img/cover8.jpg"},
    {name:"We're in this together", filePath:"mp 3 files/9.mp3", coverPath:"img/cover6jpg.jpg"},
    {name:"Joker", filePath:"mp 3 files/10.mp3", coverPath:"img/cover9.jpg"},
 ];
 songItems.forEach((element ,i) => {
     
     element.getElementsByTagName("img")[0].src=songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText=songs[i].name;
    
 });


//song play /pause handling

masterPlay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity="1";
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity="0";
    }
});

//Event listeners
audioElement.addEventListener('timeupdate',()=>{
    // Updation of seek bar
    Progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value=Progress;
});
myProgressBar.addEventListener('click',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

}) ;

//Playing each songs
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    });
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= `mp 3 files/${songIndex+1}.mp3`;
        defaultSongName.innerText=songs[songIndex].name;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity="1";
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    });
});
document.getElementById('forward').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src= `mp 3 files/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    defaultSongName.innerText=songs[songIndex].name;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

});
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;

    }
    else{
        songIndex-=1;
    }
    audioElement.src= `mp 3 files/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    defaultSongName.innerText=songs[songIndex].name;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

});



