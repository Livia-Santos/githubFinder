// Initialize gihub Class
const github = new Github;
// Initialize UI class
const ui = new UI;

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
        ui.showProfile(data.profile)
      }
    })
  } else {
    // clear profile

  }

});
