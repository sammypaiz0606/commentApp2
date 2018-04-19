function myFunction() {
    var secondDiv = document.getElementById('secondDiv').style.display = 'block';
    var userName = document.getElementById('username').value;
    var comment_1 = document.getElementById('comment').value;
    var hideButton = document.getElementById('hideButton');
    var newInput = document.getElementById('newInput');
    
    newInput.textContent = userName;
    console.log(userName);
    document.getElementById('newComm').innerHTML = comment_1;
    console.log(comment_1);
    hideButton.textContent = 'Hide';
    hideButton.style.backgroundColor='red';
    hideButton.style.borderRadius = '5px';
    hideButton.style.marginLeft = '5px';
    
    }
function hideInfo() {
    var newComm = document.getElementById('newComm');
    newInput.style.display = 'none';
    newComm.style.display = 'none';
}
