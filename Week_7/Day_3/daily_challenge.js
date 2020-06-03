class Video {
  constructor(title, uploader, seconds){
    this.title = title,
    this.uploader = uploader,
    this.seconds = seconds
  }

  watch(duration){
    duration <= this.seconds ? console.log(`You watched ${duration} seconds of ${this.title}!`) : console.log (`The video is shorter than that, please put in another duration!`)
  }
}

let myVid = new Video("My first video!", "cNolan", 57);
myVid.watch(66);
let myVid2 = new Video("Tenet", "cNolan", 2332243532433);

let videoCollection = [];
[
  ["LET'S PLAY MINECRAFT EPISODE 13214 SUPER COOL HOUSE BUILT!!!!", "genericYoutuber1", 423235],
  ["20 more supposed lifehacks with catchy music", "genericYoutuber2", 22435],
  ["geneticYoutuber3 reacts to 20 more supposed lifehacks with catchy music", "genericYoutuber1", 11313423235],
  ["Another 3 bone-breaking Tic Tok Challenges!", "CharlesDarwin", 235],
  ["SHOCK!!! Is Kim Kardashian SECRETLY dating Buggs Bunny??!!", "genericYoutuber4", 353245]
].forEach(val => videoCollection.push(new Video(...val)))
console.log(videoCollection)