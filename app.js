// Init gihub Class
const github = new Github;

// Search input
const searcUser = document.getElementById('searchUser');

// Search input event listener

searcUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  // Make sure is not blank
  if(userText !== ''){
    // make HTTP call
    github.getUser(userText)
    .then(data => {
      if(data.profile.msg === 'Not Found'){
        // show alert

      } else {
        // show profile
      }
    })
  } else {
    // clear profile
    
  }

});
