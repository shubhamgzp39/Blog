function getAllPosts() {
    window.location.href= "./html/bloglist.html";
}

function openCreatePost() {
    document.getElementById('newPostModal').style.display='block';
}

function onCloseNewPost() {
    document.getElementById('newPostModal').style.display='none';
}
function openSignIn() {
    document.getElementById('signInModal').style.display='block';
}

function openSignUp() {
    document.getElementById('signUpModal').style.display='block';
}