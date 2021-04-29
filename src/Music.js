import {Howl, Howler} from 'howler';
//import sound sprite file, mp3 and webm for maximum browser compatability
import soundmp3 from "./sounds/soundsprite.mp3";
import soundwebm from "./sounds/soundsprite.webm";

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

    loudSound = new Howl({
      src: [soundwebm, soundmp3],
      volume: 0.2,
      autoUnlock: true,
      sprite: {
          player_block: [
            201000,
            5300.000000000011
          ],
          player_crit: [
            208000,
            4964.240362811779
          ],
          enemy_crit: [
            64000,
            814.3083900226742
          ],
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
            background: [
              2000,
              55419.206349206346
            ],
            death: [
              59000,
              1835.1700680272102
            ],
            encounter: [
              62000,
              876.145124716551
            ],
            enemy_crit: [
              64000,
              814.3083900226742
            ],
            enemy_death: [
              66000,
              805.2607709750532
            ],
            enemy_hit: [
              68000,
              469.8412698412682
            ],
            forestambient: [
              70000,
              123798.00453514741
            ],
            hit: [
              195000,
              224.3764172335716
            ],
            pickup: [
              197000,
              2428.70748299319
            ],
            player_block: [
              201000,
              5300.000000000011
            ],
            player_crit: [
              208000,
              4964.240362811779
            ],
            walk: [
              214000,
              395.5102040816314
            ]
        }
    });

}
export default Music;