function pushState() {
    history.pushState({ page: 'page1' }, "Page 1", "page1.html");
  }
  
  // Replace the current entry in the browser history
  function replaceState() {
    history.replaceState({ page: 'page2' }, "Page 2", "page2.html");
  }
  
  // Go back to the previous page in the history
  function goBack() {
    history.back();
  }
  
  // Go forward to the next page in the history
  function goForward() {
    history.forward();
  }
  
  // Listen for changes in the browser history
  window.onpopstate = function(event) {
    if (event.state) {
      console.log("State data:", event.state);
    }
  };