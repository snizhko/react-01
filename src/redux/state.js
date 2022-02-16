import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, likesCount: 23, message: 'Hi!'},
            {id: 2, likesCount: 54, message: 'It\'s my first post!'},
            {id: 3, likesCount: 32, message: 'It\'s my first post 1!'},
            {id: 4, likesCount: 11, message: 'It\'s my first post 2!'},
            {id: 5, likesCount: 16, message: 'It\'s my first post 3!'},
            {id: 6, likesCount: 9, message: 'It\'s my first post 4!'},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Natasha'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Yura'},
            {id: 4, name: 'Lesia'},
            {id: 5, name: 'Dima'},
            {id: 6, name: 'Dasha'}
        ],
        messages: [
            {id: 1, text: 'Hi!'},
            {id: 2, text: 'How are you?'},
            {id: 3, text: 'I\'m fine, and you?'},
            {id: 4, text: 'Me too'},
            {id: 5, text: 'Yo!'},
            {id: 6, text: 'Yo Yo Yo!'},
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Andrew', img: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png'},
            {id: 2, name: 'Masha', img: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png'},
            {id: 3, name: 'Mark', img: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png'},
        ],
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 7,
        likesCount: 0,
        message: postMessage
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;