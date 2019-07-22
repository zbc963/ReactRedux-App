import aixos from 'axios';

const KEY = 'fake';

export default aixos.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});
