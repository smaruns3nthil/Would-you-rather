export const CHANGE_DISPLAY = 'CHANGE_DISPLAY' 

export function handleDisplay(load){
    return{
        type:CHANGE_DISPLAY,
        load,
    }
}