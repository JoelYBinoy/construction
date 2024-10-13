if (!document.cookie.includes("visitedWebsite=true")) {
    console.log("visitedd")
    // Set a cookie indicating that the website has been visited
    document.cookie = "visitedWebsite=true; path=/";
} else {
    // If the cookie exists, redirect the user or display a message indicating that they can only have one tab open
    // alert("You can only have one tab open for this website.");
    // Redirect the user to a different page
   
    window.location.href = "https://www.google.com/";
}
