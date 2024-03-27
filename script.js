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
    typeOutput('<span class="prompt">$</span> Available commands:<br>&#8226 \'about\' - About me<br>&#8226 \'projects\' - View my projects<br>&#8226 \'resume\' - See my resume<br>&#8226 \'contact\' - Contact me', output);
  } 
  else if (input === 'projects') 
  {
    typeOutput('<span class="prompt">$</span> Here are my projects:<br>&#8226 NBA Predictor <a href="https://github.com/shaf-m/nbapredictor" target="_blank">View on GitHub</a><br>&#8226 Student Sys <a href="https://github.com/shaf-m/StudentManagementSystem" target="_blank">View on GitHub</a><br>&#8226 Taskify <a href="https://github.com/shaf-m/Taskify" target="_blank">View on GitHub</a><br>&#8226 YouTube Clone <a href="https://github.com/shaf-m/YouTubeClone" target="_blank">View on GitHub</a><br>&#8226 Terminal.me <a href="https://github.com/shaf-m/terminal.me" target="_blank">View on GitHub</a><br>&#8226 WorldWeather <a href="https://github.com/shaf-m/WorldWeather" target="_blank">View on GitHub</a>', output);
  } 
  else if (input === 'about') 
  {
    typeOutput('<span class="prompt">$</span> About Me:<br>Hello World! I’m Shaf, a second-year CS student at York University. I enjoy diving deep into all aspects of computer science, currently finding an interest in backend engineering, data science, machine learning, and cloud computing. I am currently interning at the Ontario Government as a Software Engineer.', output);
  }
  else if (input === 'resume') 
  {
  window.open('Resume-Shaf.pdf', '_blank');
  typeOutput('<span class="prompt">$</span> Launching resume...', output);
  }
  else if (input === 'contact') 
  {
    typeOutput('<span class="prompt">$</span> Contact Me:<br>Email: <a href= "mailto: shafm@my.yorku.ca" target="_blank">\nshafm@my.yorku.ca (click)</a><br>LinkedIn: <a href="https://www.linkedin.com/in/shaf-m/" target="_blank">\n\nshafm (click)</a><br>GitHub: <a href="https://github.com/shaf-m" target="_blank">\n\nshafm (click)</a>', output);
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
