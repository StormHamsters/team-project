import {Howl, Howler} from 'howler';
//import sound sprite file, mp3 and webm for maximum browser compatability
import soundmp3 from "./sounds/soundfile.mp3";
import soundwebm from "./sounds/soundfile.webm";

class Music{
    constructor(){
    }

    //create new sound aka how for background audio to seperately control volume
    background_music = new Howl({
        //set source to sound sprite files
        src: [soundwebm, soundmp3],
        volume: 0.2,
        autoplay: true,
        autoUnlock: true,
        loop: true,
        //point to sound location
        sprite: {
            background: [2000, 55419.206349206346],
        }
    });
    
    //create new howl for audio effects with respective locations in sound sprite file
    sound = new Howl({
        src: [soundwebm, soundmp3],
        volume: 0.025,
        autoUnlock: true,
        sprite: {
            attack: [
              0,
              426.57596371882084
            ],
            death: [
              59000,
              1835.1700680272102
            ],
            encounter: [
              62000,
              876.145124716551
            ],
            enemy_death: [
              64000,
              805.2607709750532
            ],
            enemy_hit: [
              66000,
              469.8412698412682
            ],
            forestambient: [
              68000,
              123798.00453514741
            ],
            hit: [
              193000,
              224.3764172335716
            ],
            pickup: [195000,2428.70748299319],
            walk: [199000,395.5102040816314]
        }
    });

}
export default Music;