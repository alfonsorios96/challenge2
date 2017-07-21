'use strict';
// Create a last element property for arrays.
if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
}

var comments = [];

/**
 * @description If the click is outside of the div close the modal
 * @param event
 */
function closeModal(event) {
    var x = event.x;
    var y = event.y;
    if ((x <= 134 || x >= 1104) || (y <= 52 || y >= 464)) {
        hideModal();
    }
}

/**
 * @description Hide the collections and show the modal
 * @param url {string} - URL of the picture
 */
function showModal(url) {
    var states = [
        '<p>Another achievement to be reached <span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/f6c/1/16/1f4aa.png" width="16" alt=""><span class="_7oe">💪</span></span>, but now as a teacher <span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/fea/1/16/1f453.png" width="16" alt=""><span class="_7oe">👓</span></span><span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/f6b/1/16/1f454.png" width="16" alt=""><span class="_7oe">👔</span></span><span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/f1c/1/16/1f45e.png" width="16" alt=""><span class="_7oe">👞</span></span> ! <a class="_58cn" href="/hashtag/scholarship?source=feed_text&amp;story_id=1459398670819976" data-ft="{&quot;tn&quot;:&quot;*N&quot;,&quot;type&quot;:104}"><span class="_5afx"><span aria-label="hashtag" class="_58cl _5afz">#</span><span class="_58cm">scholarship</span></span></a> <a class="_58cn" href="/hashtag/admitted?source=feed_text&amp;story_id=1459398670819976" data-ft="{&quot;tn&quot;:&quot;*N&quot;,&quot;type&quot;:104}"><span class="_5afx"><span aria-label="hashtag" class="_58cl _5afz">#</span><span class="_58cm">admitted</span></span></a> <a class="_58cn" href="/hashtag/ttc?source=feed_text&amp;story_id=1459398670819976" data-ft="{&quot;tn&quot;:&quot;*N&quot;,&quot;type&quot;:104}"><span class="_5afx"><span aria-label="hashtag" class="_58cl _5afz">#</span><span class="_58cm">TTC</span></span></a> <span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/f83/1/16/1f60e.png" width="16" alt=""><span class="_7oe">😎</span></span></p>',
        '<p>Un coversito <span class="_47e3 _5mfr" title="Emoticono smile"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/f4c/1/16/1f642.png" width="16" alt=""><span aria-hidden="true" class="_7oe">:)</span></span> por qué no?</p>',
        '<p>¡Fans de Pacific Rim atentos! Llega el teaser tráiler de <a class="_58cn" href="/hashtag/pacificrimuprising?source=feed_text&amp;story_id=10159146772900193" data-ft="{&quot;tn&quot;:&quot;*N&quot;,&quot;type&quot;:104}"><span class="_5afx"><span aria-label="hashtag" class="_58cl _5afz">#</span><span class="_58cm">PacificRimUprising</span></span></a>. ¿Qué les pareció?</p>',
        '<p>No hay duda de esto, ¡Soy un mapache! <span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/fd0/1/16/1f602.png" width="16" alt=""><span class="_7oe">😂</span></span><span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/f52/1/16/1f923.png" width="16" alt=""><span class="_7oe">🤣</span></span><span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/ffc/1/16/1f44d.png" width="16" alt=""><span class="_7oe">👍</span></span></p>',
        '<p>Muchas personas buscan a su complemento, su media naranja alguien con quién pasarla bien! Pues es tan genial poder encontrar a una persona con esas cualidades, que le guste lo que hagas que ría de tus estupideces, que se tengan confianza Y que mejor tener a una novia que juegue Clash royal contigo haaha <span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/f83/1/16/1f60e.png" width="16" alt=""><span class="_7oe">😎</span></span><span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/f6c/1/16/2764.png" width="16" alt=""><span class="_7oe">❤️</span></span><span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/fb8/1/16/1f64c_1f3fb.png" width="16" alt=""><span class="_7oe">🙌🏻</span></span> me siento afortunado! <a class="profileLink" href="https://www.facebook.com/ChrisGR09?fref=mentions" data-hovercard="/ajax/hovercard/user.php?id=100001626281429&amp;extragetparams=%7B%22fref%22%3A%22mentions%22%7D" data-hovercard-prefer-more-content-show="1">Chris GR</a> <span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/f6c/1/16/2764.png" width="16" alt=""><span class="_7oe">❤️</span></span><span class="_5mfr _47e3"><img class="img" height="16" role="presentation" src="https://www.facebook.com/images/emoji.php/v9/fb8/1/16/1f64c_1f3fb.png" width="16" alt=""><span class="_7oe">🙌🏻</span></span></p>'
    ];
    document.getElementById("modal1").classList.remove('modal');
    document.getElementById("modal1").classList.add('modalOn');
    document.getElementById("items-container").classList.add('hidden');
    document.getElementById("image-root").innerHTML += '<img src="' + url + '">';
    document.getElementById("description-image").innerHTML += '<p>' + states[getRandomArbitrary(0, states.length - 1)] + '</p>';
}

/**
 * @description Hide the modal and show the collections
 */
function hideModal() {
    document.getElementById("modal1").classList.remove('modalOn');
    document.getElementById("modal1").classList.add('modal');
    document.getElementById("items-container").classList.remove('hidden');
    document.getElementById("image-root").innerHTML = '';
    document.getElementById("description-image").innerHTML = '';
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
    if (comment.length === 0) {
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

/**
 * @description Get a random element from the people array
 * @returns {{id, name, profile_picture}|*}
 */
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
 * @description Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}
