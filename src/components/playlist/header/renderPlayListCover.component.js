export function renderPlayListHeaderCover(anyPlayListInfo) {
  const playListCoverElement = document.createElement("img");
  playListCoverElement.src = anyPlayListInfo.coverImageUrl;
  playListCoverElement.width = 300;
  document.body.append(playListCoverElement);
}
