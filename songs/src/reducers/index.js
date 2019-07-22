import { combineReducers } from 'redux';

const songsReducer = ()=>{
    return [
        {title: 'Beware' , duration:'3:05'},
        {title: 'All Star', duration:'4:05'},
        {title: 'love u', duration:'4:35'}
    ];
};


const selectedSongReducer = (selectedSong=null,action) =>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});