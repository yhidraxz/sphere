import Store from 'electron-store'

const store = new Store();

export function saveUserInfo (userId, key) {
    store.set('user', {userId, key})
}

export function getUserInfo () {
    return store.get('user')  || null
}

export function clearUserInfo () {
    store.delete('user')
}