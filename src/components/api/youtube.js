import axios from 'axios';

const KEY = 'AIzaSyBhrICsdKugobRa2unu-fIAM2skYHG_Iw0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});
