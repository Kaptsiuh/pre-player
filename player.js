const playList1 = {
  playlistId: "1",
  playListInfo: {
    title: "Post-Punk Hits",
    coverImageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb5b482b4b535031fab1eb9b94",
    totalInfo: {
      totalTrackCount: 4,
      totalTracksDurationInSec: 666,
    },
  },
  tracks: [
    {
      trackId: "11",
      trackCoverImageUrl: "https://f4.bcbits.com/img/a3895821296_10.jpg",
      artistName: "She Past Away",
      trackTitle: "Kasvetli Kutlama",
      trackFileUrl:
        "https://t4.bcbits.com/stream/0ab2be6c757922f8da1410065ea219ea/mp3-128/3178050714?p=0&ts=1704909087&t=54f8ad6a2251693646ae802224c5ff409105f98f&token=1704909087_b1f8243097c3e6ed772946f9fcf3fe8bc601acf5",
      trackDuration: 300,
      isHot: false,
    },
    {
      trackId: "12",
      trackCoverImageUrl: "https://f4.bcbits.com/img/a1863407124_10.jpg",
      artistName: "Molchat Doma",
      trackTitle: "Sudno",
      trackFileUrl:
        "https://t4.bcbits.com/stream/e5e4af33a73570a499a5e9ead33bebdc/mp3-128/1349472114?p=0&ts=1704909255&t=e46ef5cc278e20d88e926c6ec492306a0e28db51&token=1704909255_03a156b8af1a6414fca40f2c4b7dbc1d9f50a1b7",
      trackDuration: 141,
      isHot: true,
    },
  ],
};

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

function renderPlayList(anyPlayList) {
  renderPlayListHeader(anyPlayList.playListInfo);
  renderTrack(anyPlayList.tracks[0]);
  renderTrack(anyPlayList.tracks[1]);
}

function renderPlayListHeader(anyPlayListInfo) {
  const playListTitleElement = document.createElement("h1");
  playListTitleElement.innerText = anyPlayListInfo.title;
  document.body.append(playListTitleElement);

  const playListCoverElement = document.createElement("img");
  playListCoverElement.src = anyPlayListInfo.coverImageUrl;
  playListCoverElement.width = 300;
  document.body.append(playListCoverElement);
}

function renderTrack(anyTrack) {
  const trackElement = document.createElement("div");

  const cover = document.createElement("img");
  cover.src = anyTrack.trackCoverImageUrl;
  cover.width = 70;

  const audio = document.createElement("audio");
  audio.src = anyTrack.trackFileUrl;
  audio.controls = true;

  trackElement.append(audio);
  trackElement.append(cover);
  trackElement.append(anyTrack.artistName + ": " + anyTrack.trackTitle);

  document.body.append(trackElement);
}

renderPlayList(playList1);
