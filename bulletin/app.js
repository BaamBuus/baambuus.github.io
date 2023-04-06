// Get the tweet form and tweet list elements from the HTML
const form = document.querySelector('#tweet-form');
const tweetList = document.querySelector('#tweet-list');

// Add an event listener for the form submission
form.addEventListener('submit', event => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the username and tweet text inputs from the form
    const usernameInput = document.querySelector('#username-input');
    const username = usernameInput.value;
    const tweetInput = document.querySelector('#tweet-input');
    const tweet = tweetInput.value;

    // Clear the input fields after submitting the form
    usernameInput.value = '';
    tweetInput.value = '';

    // Get the current date and time for the tweet
    const timestamp = new Date().toLocaleString();

    // Create a new tweet element and add it to the tweet list
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('tweet');

    // Create the tweet HTML content with the username, timestamp, and tweet text
    tweetElement.innerHTML = `
    <div class="tweet-box">
      <div class="tweet-header">
        <span class="username">${username} posted at </span>
        <span class="timestamp">${timestamp}</span>
      </div>
      <div class="tweet-text">${tweet}</div>
    </div>
  `;

    // Add the tweet element to the beginning of the tweet list
    tweetList.prepend(tweetElement);
});

// Get the tweet form and tweet list elements from the HTML
const form = document.querySelector('#tweet-form');
const tweetList = document.querySelector('#tweet-list');

// Add an event listener for the form submission
form.addEventListener('submit', event => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the username and tweet text inputs from the form
    const usernameInput = document.querySelector('#username-input');
    const username = usernameInput.value;
    const tweetInput = document.querySelector('#tweet-input');
    const tweet = tweetInput.value;

    // Check if the tweet input is empty
    if (!tweet.trim()) {
        alert('Please enter a non-empty tweet!');
        return;
    }

    // Clear the input fields after submitting the form
    usernameInput.value = '';
    tweetInput.value = '';

    // Get the current date and time for the tweet
    const timestamp = new Date().toLocaleString();

    // Create a new tweet element and add it to the tweet list
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('tweet');

    // Create the tweet HTML content with the username, timestamp, and tweet text
    tweetElement.innerHTML = `
    <div class="tweet-box">
      <div class="tweet-header">
        <span class="username">${username}</span>
        <span class="timestamp">${timestamp}</span>
      </div>
      <div class="tweet-text">${tweet}</div>
    </div>
  `;

    // Add the tweet element to the beginning of the tweet list
    tweetList.prepend(tweetElement);
});