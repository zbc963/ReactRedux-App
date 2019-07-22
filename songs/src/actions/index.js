//Action Creator
//Named epxort allow us to epxort different function in a single file
export const selectSong = (song)=>{
    return {
        type:'SONG_SELECTED',
        payload:song
    };
};