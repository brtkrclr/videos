import axios from "axios";


const KEY = "AIzaSyD89k50xf5uw5jU3Ob_8QZiBXAnub_IKaI";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
    }
});

