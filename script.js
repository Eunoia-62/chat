const themeToggle = document.getElementById('theme-toggle');
const themeDropdown = document.getElementById('theme-dropdown');
const lightThemeLink = document.getElementById('light-theme');
const darkThemeLink = document.getElementById('dark-theme');
const body = document.body;

themeToggle.addEventListener('click', () => {
  themeDropdown.classList.toggle('show');
});

lightThemeLink.addEventListener('click', () => {
  body.classList.remove('dark-theme');
  themeDropdown.classList.remove('show');
  hideThemeOption(darkThemeLink, lightThemeLink);
});

darkThemeLink.addEventListener('click', () => {
  body.classList.add('dark-theme');
  themeDropdown.classList.remove('show');
  hideThemeOption(lightThemeLink, darkThemeLink);
});

function hideThemeOption(currentThemeLink, otherThemeLink) {
  currentThemeLink.style.display = 'block';
  otherThemeLink.style.display = 'none';
}

document.addEventListener('click', (event) => {
  if (!themeToggle.contains(event.target) && !themeDropdown.contains(event.target)) {
    themeDropdown.classList.remove('show');
  }
});

const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.keyCode === 13) {
    sendMessage();
    event.preventDefault();
  }
});

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  const message = messageInput.value;
  if (message !== '') {
    const messageElement = document.createElement('p');
    messageElement.classList.add('sent');

    const pfpElement = document.createElement('img');
    pfpElement.src = 'https://www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png'; // Replace with the actual path to your PFP image

    messageElement.appendChild(pfpElement);
    messageElement.innerHTML += message;

    messagesContainer.appendChild(messageElement);
    messageInput.value = '';

    scrollToBottom();
  }
}

function scrollToBottom() {
  if (messagesContainer.scrollHeight - messagesContainer.scrollTop > messagesContainer.clientHeight - 100) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

messagesContainer.addEventListener('scroll', () => {
  if (messagesContainer.scrollTop + messagesContainer.clientHeight >= messagesContainer.scrollHeight) {
    scrollToBottom();
  }
});

scrollToBottom();