export function renderTrack(anyTrack) {
  const trackElement = document.createElement("div");

  const cover = document.createElement("img");
  cover.src = anyTrack.trackCoverImageUrl;
  cover.width = 70;

  const audio = document.createElement("audio");
  audio.src = anyTrack.trackFileUrl;
  audio.controls = true;

  const trackTitleElement = document.createElement("span");
  anyTrack.isHot ? trackTitleElement.append("🔥") : "";

  trackElement.append(cover);
  trackElement.append(audio);
  trackElement.append(trackTitleElement);
  trackElement.append(anyTrack.artistName + " - " + anyTrack.trackTitle);

  document.body.append(trackElement);
}
