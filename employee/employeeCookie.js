
window.onload = function() {
    let integritatAdminLoginCheck = localStorage.getItem('integritatAdminLoginCheck')
    if(integritatAdminLoginCheck == 'isCheckedIn'){
        checkAccessMethod();
        window.addEventListener("beforeunload", function() {
           
            // Reset the detection when the window is closed
            localStorage.removeItem("admincockiee");
        });
    }else{
        window.location.href = '../index.html'
    }
   
};




function checkAccessMethod() {
   console.log("indise checkkkkk")
    var  admincockiee;
    if (!localStorage.getItem("admincockiee")) {
       console.log("in ifff")
        // If the access method is not stored in localStorage, it's the first time the page is loaded
         admincockiee = "This page was accessed directly (not from another page)";
    } else {
       console.log("in elseeee")
        // If the access method is stored in localStorage, the page was accessed from another page
         admincockiee = "This page was accessed from another page";
        alert("This page was accessed from another page");
        window.location.href = "https://tsparticles.github.io/404-templates/space/404.html#";
        localStorage.removeItem("admincockiee");
    }
   
    // Store the access method in localStorage
    localStorage.setItem("admincockiee",  admincockiee);
}