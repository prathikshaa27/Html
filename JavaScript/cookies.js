// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(name + '=') === 0) {
          return cookie.substring(name.length + 1);
      }
  }
  return null;
}

// Example usage:
setCookie("username", "Prathi", 30); // Set a cookie named "username" with value "John" that expires in 30 days
const username = getCookie("username"); // Get the value of the "username" cookie
console.log("Username:", username); // Output: Username: John