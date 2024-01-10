import { playList } from "./src/data.module.js";
import { renderPlayList } from "./src/components/renderPlayLists.component.js";
// tracks
// const tracksListElement = document.createElement("ul");
// document.body.append(tracksListElement);

// const trackElement_1 = document.createElement("li");
// trackElement_1.append(
//   playList.tracks[0].artistName + ": " + playList.tracks[0].trackTitle
// );
// tracksListElement.append(trackElement_1);

// const trackElement_2 = document.createElement("li");
// trackElement_2.append(
//   playList.tracks[1].artistName + ": " + playList.tracks[1].trackTitle
// );
// tracksListElement.append(trackElement_2);

renderPlayList(playList);
