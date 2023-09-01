document.addEventListener('DOMContentLoaded', function(){

    const messagesContainer = document.querySelector("#messages_container");
    const pnameInput = document.querySelector('[name=pname_input]');
    const messageInput = document.querySelector('[name=message_input]');
    const sendMessageButton = document.querySelector('[name=send_message_button]')

    let websocketClient = new WebSocket("ws://localhost:5500");
    websocketClient.onopen = () => {
        console.log("Client connected!");

        sendMessageButton.onclick = () => {

            websocketClient.send(messageInput.value);
            messageInput.value = "";
            };
    };

    websocketClient.onmessage = (message) => {
        const newMessage = document.createElement('div');
        newMessage.innerHTML = message.data;
        messagesContainer.appendChild(newMessage);
    };
}, false);
//<input type="submit" name="send_message_button" value="Отправить" class="btn btn-danger"></input>