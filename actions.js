export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_UP_COMMENT';

const initialState = {
    comments: [],
    users: []
};

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        rating: +1
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
        rating: -1
    }
}

{
    comments: [
        {
            id: '12741danx1278',
            text: 'Nowy komentarz',
            rating: 0
        },
        {
            id: '12741danb1278',
            text: 'Stary komentarz',
            rating: 42
        }
    ];
    users: [
        {
            id: '121jk6d89h2d',
            firstName: 'Jan',
            lastName: 'Nowak',
            comments: ['12741danb1278'],
        }
    ]
}