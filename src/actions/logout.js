export const CHANGE_USER = 'CHANGE_USER' 

export function handleLogout(user){
    return{
        type:CHANGE_USER,
        user,
    }
}