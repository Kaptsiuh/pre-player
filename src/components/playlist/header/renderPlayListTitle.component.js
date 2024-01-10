export function renderPlayListHeaderTitle(anyPlayListInfo) {
  const playListTitleElement = document.createElement("h1");
  playListTitleElement.innerText = anyPlayListInfo.title;
  document.body.append(playListTitleElement);
}
