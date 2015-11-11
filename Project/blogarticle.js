$(document).ready(function() {
    "use strict";

var jsChat = {
  helloUsername: document.getElementById('helloUsername'),
  updateButton: document.getElementById('updateButton'),
  username: document.getElementById('username'),
  comment: document.getElementById('comment'),
  output: document.getElementById('output'),
  clearSession: document.getElementById('clear'),
  notValidMsg_1: 'Not a vilid entry. Please try again.',
  notValidMsg_2: 'You must enter a username to post a comment',
  methods: {
    commentClear: function () { //added to clear the comment box, preventing duplicate comments.
      jsChat.comment.value = '';
      jsChat.comment.placeholder = 'Place your comment here.';
    },
    userClear: function () {
      jsChat.helloUsername.innerHTML = '';
      jsChat.username.placeholder = 'Change your username';
      jsChat.username.value = '';
    },
    testInput: function () {
      userInput = jsChat.username.value;
      userComment = jsChat.comment.value;
    }

  }
};

var userInput;
var userComment; //Globals we nee for 'testInput' function to work properly;

function getComment() {
  jsChat.output.innerHTML += '<div class="comment">' + jsChat.comment.value + '</div>';
  jsChat.methods.commentClear();
};

function getUsername() {
  jsChat.methods.testInput();
  if (userInput.length >= 1) {
    if (userComment.length >= 1) {
      jsChat.output.innerHTML += '<div class="username">' + jsChat.username.value + ':' + '</div>';
      getComment();
    } else {
      jsChat.comment.placeholder = jsChat.notValidMsg_1;
    }
  } else {
    jsChat.username.placeholder = jsChat.notValidMsg_2;
    jsChat.comment.placeholder = jsChat.notValidMsg_1;
  }
};

function clearContent() {
  comment.value = '';
};

jsChat.updateButton.onclick = getUsername;

window.onload = function commentEventListener() {
  jsChat.comment.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      getUsername();
      clearContent();
    }
  });
  jsChat.username.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      helloUsername();
    }
    if (e.keyCode == 9) {
      helloUsername();
    }
  });
};

function helloUsername() {
  jsChat.methods.testInput();
  if (userInput.length >= 1) {
    jsChat.helloUsername.innerHTML = 'Hello, ' + jsChat.username.value + '. <br /><a href="#" id="editUsername">change username</a>'
    jsChat.username.className = 'hide';
  } else {
    jsChat.username.placeholder = jsChat.notValidMsg_2;
  }
};

function editUsername() {
  jsChat.username.className -= 'hide';
  if (jsChat.username.className != 'hide') {
    jsChat.methods.userClear();
  }
}

function clearSession() {
  jsChat.output.innerHTML = '';
}

jsChat.comment.onclick = helloUsername;
jsChat.helloUsername.onclick = editUsername;
jsChat.clearSession.onclick = clearSession;
});