export function getUsers() {
    console.log('getUsers');

    return { type: 'GET_USER' };
}
export function updateUsers(data) {
    console.log('data ', data);

    return { type: 'UPDATE_USERS', payload: data };
}