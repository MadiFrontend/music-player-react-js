import { v4 as uuidv4 } from "uuid";
function chillHop() {
    return [
        {
            name: "Negin Ghalbami",
            cover: "https://music-fa.com/wp-content/uploads/2021/11/Majid-Razavi-Negine-Ghalbami-Music-fa.com_.jpg",
            artist: "Majid Razavi",
            audio: "https://dls.music-fa.com/tagdl/ali/Majid%20Razavi%20-%20Negine%20Ghalbami%20(320).mp3",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Shakhe Nabat",
            cover: "http://tabamusic.com/wp-content/uploads/2022/03/Masih-Arash-Shakhe-Nabat.jpg",
            artist: "Arash & Masih",
            audio: "http://dls.music-fa.com/tagdl/NEW2022/Masih%20And%20Arash%20-%20Shakhe%20Nabat%20(320).mp3",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "a Boy",
            cover: "http://tabamusic.com/wp-content/uploads/2022/04/Omid-Afkham-5.jpg",
            artist: "DO Do Ta",
            audio: "http://dl.tabamusic.com/Music/1401/01/Omid%20Afkham%20-%20Yeki%20Yedooneh%20(128).mp3",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Hala Hala",
            cover: "http://tabamusic.com/wp-content/uploads/2022/03/Masoud-Sadeghloo-15.jpg",
            artist: "Masoud Sadeghloo",
            audio: "http://dl.tabamusic.com/Music/1400/12/Masoud%20Sadeghloo%20-%20Dava%20Darmoon%20(128).mp3",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Dele Man Migeryad",
            cover: "https://music-fa.com/wp-content/uploads/2022/03/Homayoun-Shajaryan-Dele-Man-Migeryad-Music-fa.com_.jpg",
            artist: "Homayoun Shajaryan",
            audio: "https://dls.music-fa.com/tagdl/1401/Homayoun%20Shajaryan%20-%20Dele%20Man%20Migeryad%20(320).mp3",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Aram Aram",
            cover: "https://music-fa.com/wp-content/uploads/2021/11/Reza-Malekzade-Nashod-Baraye-Eshghemoon-Music-fa.com_.jpg",
            artist: "Reza malekzade",
            audio: "https://dls.music-fa.com/tagdl/ati/Reza%20Malekzade%20-%20Aram%20Aram%20(128).mp3",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        //ADD MORE HERE
    ];
}

export default chillHop;
