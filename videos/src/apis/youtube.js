import aixos from 'axios';

const KEY = 'AIzaSyCT-Om81ZRhG9W09JvMzDCCj-gE9tfsksU';

export default aixos.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});
