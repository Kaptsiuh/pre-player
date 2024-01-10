import { renderPlayListHeaderCover } from "./header/renderPlayListCover.component.js";
import { renderPlayListHeaderTitle } from "./header/renderPlayListTitle.component.js";

export function renderPlayListHeader(playListForRendering) {
  renderPlayListHeaderTitle(playListForRendering);
  renderPlayListHeaderCover(playListForRendering);
}
