document.querySelector('.menubutton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior (scrolling to the top)
    const menu = document.querySelector('.menulist');
    const button = document.querySelector('.menubutton');
    
    menu.classList.toggle('active');
    button.classList.toggle('active');
  });

// Function to copy text content from the element with the given id
function copyToClipboard(elementId) {
    var textToCopy = document.getElementById(elementId).textContent; // Get the text content of the element
    var tempInput = document.createElement("textarea");  // Create a temporary textarea element
    tempInput.value = textToCopy;  // Assign the text to the textarea
    document.body.appendChild(tempInput);  // Append the textarea to the document body
    tempInput.select();  // Select the text in the textarea
    document.execCommand("copy");  // Copy the selected text to clipboard
    document.body.removeChild(tempInput);  // Remove the textarea from the document
    alert("Copied: " + textToCopy);  // Optional: Show a message indicating the copied content
}

// Attach event listeners to the respective a tags
document.getElementById("copyPhone1").addEventListener("click", function() { copyToClipboard("copyPhone1"); });
document.getElementById("copyPhone2").addEventListener("click", function() { copyToClipboard("copyPhone2"); });
document.getElementById("copyPhone3").addEventListener("click", function() { copyToClipboard("copyPhone3"); });
document.getElementById("copyPhone4").addEventListener("click", function() { copyToClipboard("copyPhone4"); });

document.getElementById("copyCell1").addEventListener("click", function() { copyToClipboard("copyCell1"); });
document.getElementById("copyCell2").addEventListener("click", function() { copyToClipboard("copyCell2"); });
document.getElementById("copyCell3").addEventListener("click", function() { copyToClipboard("copyCell3"); });
document.getElementById("copyCell4").addEventListener("click", function() { copyToClipboard("copyCell4"); });

document.getElementById("copyEmail1").addEventListener("click", function() { copyToClipboard("copyEmail1"); });
document.getElementById("copyEmail2").addEventListener("click", function() { copyToClipboard("copyEmail2"); });
document.getElementById("copyEmail3").addEventListener("click", function() { copyToClipboard("copyEmail3"); });
document.getElementById("copyEmail4").addEventListener("click", function() { copyToClipboard("copyEmail4"); });

document.getElementById("copyBank").addEventListener("click", function() { copyToClipboard("copyBank"); });
