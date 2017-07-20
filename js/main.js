'use strict';
// Create a last element property for arrays.
if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
}

var comments = [];

function sda(event) {
    var x = event.x;
    var y = event.y;
    if((x <= 134 || x >= 1104) || (y <= 52 || y >= 464)) {
        hideModal();
    }
}

function showModal() {
    document.getElementById("modal1").classList.remove('modal');
    document.getElementById("modal1").classList.add('modalOn');
}

function hideModal() {
    document.getElementById("modal1").classList.remove('modalOn');
    document.getElementById("modal1").classList.add('modal');
}

/**
 * @description This method saves in the array {comments} a search.
 */
function saveComment() {
    var comment = document.getElementById('comment-input').value;
    if (comments.length !== 0) {
        comments.push({id: comments.last().id + 1, data: comment});
    } else {
        comments.push({id: 1, data: comment});
    }
    if (comment.length == 0) {
        comments.pop();
    }
    document.getElementById('comment-input').value = '';
    paintComments();
}

/**
 * @description Show the div with the recomendations.
 */
function paintComments() {
    var list = document.getElementById('comments-list');
    list.innerHTML = '';
    comments.forEach(function (iterator) {
        addItem(list, iterator);
    });
}

/**
 * @description Insert a li web element into the ul (list of searches)
 * @param listElement: {id: number, data: string}[] - Array with the comments
 * @param valueElement: The item iterator has display value and id for delete it.
 */
function addItem(listElement, valueElement) {
    var randomUser = getRandomPeople();
    console.log(randomUser);
    var avatar = '<img width="30" height="30" src="' + randomUser.profile_picture + '"> ';
    var userName = '<strong>' + randomUser.name + '</strong> &#09;&#09;';
    var newItem = document.createElement('p');
    var newContent = document.createTextNode('');
    newItem.appendChild(newContent);
    newItem.innerHTML += avatar;
    newItem.innerHTML += userName;
    newItem.innerHTML += valueElement.data;
    listElement.appendChild(newItem);
}

function getRandomPeople() {
    var peoples = [
        {
            id: 1,
            name: 'Joselyn Morales',
            profile_picture: 'img/profiles/2.jpg'
        },
        {
            id: 2,
            name: 'Eboni Rodriquez',
            profile_picture: 'img/profiles/1.jpg'
        },
        {
            id: 3,
            name: 'Sadie Bush',
            profile_picture: 'img/profiles/3.jpg'
        },
        {
            id: 4,
            name: 'Frank D. Camp',
            profile_picture: 'img/profiles/4.jpg'
        },
        {
            id: 5,
            name: 'Timothy E. Duvall',
            profile_picture: 'img/profiles/5.jpg'
        },
        {
            id: 6,
            name: 'Clifford J. Enos',
            profile_picture: 'img/profiles/6.jpg'
        },
        {
            id: 7,
            name: 'Eleanor P. Parkman',
            profile_picture: 'img/profiles/7.jpg'
        },
        {
            id: 8,
            name: 'Wilma L. Jackson',
            profile_picture: 'img/profiles/8.jpg'
        },
        {
            id: 9,
            name: 'Jacqueline P. Deatherage',
            profile_picture: 'img/profiles/9.jpg'
        },
        {
            id: 10,
            name: 'Edwin E. Jones',
            profile_picture: 'img/profiles/10.jpg'
        },
        {
            id: 11,
            name: 'Eboni Rodriquez',
            profile_picture: 'img/profiles/11.jpg'
        },
        {
            id: 12,
            name: 'Eboni Rodriquez',
            profile_picture: 'img/profiles/12.jpg'
        }];
    return peoples[getRandomArbitrary(0, peoples.length - 1)];
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}
