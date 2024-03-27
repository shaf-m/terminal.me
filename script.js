// Initialize last login time
var lastLoginTime = new Date().toString();
var lastIndex = lastLoginTime.lastIndexOf('('); // Find the index of the timezone information
lastLoginTime = lastLoginTime.substring(0, lastIndex).trim(); // Extract date and time without timezone

// Update "Last login" message
document.getElementById('last-login').textContent = 'Last login: ' + lastLoginTime;


// Event listener for handling user input
document.getElementById('command').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    handleCommand();
  }
});

// Function to handle user commands
function handleCommand() {
  var input = document.getElementById('command').value.trim();
  var output = document.getElementById('output');

  // Append user input to the output
  output.innerHTML += '<span class="user-input">user$ ' + input + '</span><br>';

  if (input === '') 
  {
    typeOutput('<span class="prompt">$</span> Please enter a command.', output);
  } 
  else if (input === 'help') 
  {
    typeOutput('<span class="prompt">$</span> Available commands:<br>\'about\' - About me<br>\'projects\' - View my projects<br>\'resume\' - See my resume<br>\'contact\' - Contact me', output);
  } 
  else if (input === 'projects') 
  {
    typeOutput('<span class="prompt">$</span> Here are my projects:<br>1. Project 1 - Brief summary. <a href="https://github.com/user/project1" target="_blank">\n\nView on GitHub</a><br>2. Project 2 - Brief summary. <a href="https://github.com/user/project2" target="_blank">\nView on GitHub</a>', output);
  } 
  else if (input === 'about') 
  {
    typeOutput('<span class="prompt">$</span> About Me:<br>I am a passionate developer...', output);
  }
  else if (input === 'resume') 
  {
  window.open('username.github.io/folder/document.pdf', '_blank'); // Replace 'username.github.io/folder/document.pdf' with the actual URL of your resume PDF
  typeOutput('<span class="prompt">$</span> Launching resume...', output);
  }
  else if (input === 'contact') 
  {
    typeOutput('<span class="prompt">$</span> Contact Me:<br>Email: example@example.com<br>Phone: 123-456-7890', output);
  } 
  else 
  {
    typeOutput('<span class="prompt">$</span> Command not found: ' + input + '<br>Type \'help\' for a list of available commands.', output);
  }

  // Clear input after processing command
  document.getElementById('command').value = '';
}

// Function to display output in the terminal
function typeOutput(text, outputElement) {
  outputElement.innerHTML += text + '<br>';
}
