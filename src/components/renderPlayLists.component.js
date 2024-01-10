import { renderPlayListHeader } from "./playlist/renderPlayList.component.js";
import { renderTrack } from "./playlist/tracks/renderTrack.component.js";

export function renderPlayList(anyPlayList) {
  anyPlayList.forEach((elem) => {
    renderPlayListHeader(elem.playListInfo);
    elem.tracks.forEach((e) => renderTrack(e));
  });
}
