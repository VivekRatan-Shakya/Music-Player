const music = new Audio('vande.mp3');


// create Array

const songs = [
    {
       id:'1',
       songName:"  On My Way <br> 
       <div class="subtitle">VivekRatan_Shakya</div>",
        poster:"images.jpg"
    },

    {
        id:'2',
        songName:'   On My Way <br> 
        <div class="subtitle">VivekRatan_Shakya</div>',
         poster:"images.jpg"
     },

     Array.from(document.getElementsByClassName('songItem')).forEach(element,i)=>
     {
          element.getElementsByClassName('images')[0].src = song[i].poster;
     }
        



    
]

