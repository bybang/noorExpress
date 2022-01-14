$(() => { // This is equivalent to document.ready
  getMessages(); // Renders messages initially on page load
});

// Creates a new convo on the page using JS, inserting into a HTML element with ID (# signs in the $("") )
function addConvo(convoId, messages) {
  const htmlMessages = messages.map(message => `<div>${message.content}</div>`).join("") // Makes some pretty styles for each message, looping through them in a .map
  $("#convos").append(`<div class="convo-${convoId}">${htmlMessages}</div>`);  // Pretty messages container, holds the messages. Going to have to add something to this though later which is why we gave it a class
  $("#convos-sidebar").append(`<h4>${convoId}</h4>`); // This with show up in an HTML element with the id convos-sidebar, so you can have somewhere to see your messages list
}

// Used to fetch messages from ajax backend
function getMessages() {
  $.get("/messages", convos => {
    // This loops through conversations and adds them to the page using addConvo
    console.log(convos)
    for (const convoId in convos) {
      addConvo(convoId, convos[convoId])
    }
  });
}
