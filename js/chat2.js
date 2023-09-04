var user_name = "";
const button=document.getElementById("name_button");
const snd_button = document.getElementById("send_button");

snd_button.addEventListener("click", SendMessage);
button.addEventListener("click", AcceptName);

function AcceptName() {
    name_input = document.getElementById("name");
    user_name=name_input.value;
    
}

function SendMessage () {
    message = document.getElementById("message").value;
    name_message = user_name + ": " + message;
    console.log(name_message);
    (async () => {
                var response = await fetch('chat.php?message=' + name_message);
                var answer = await response.text();
                document.getElementById('message').value = '';
            }
        )();
        
    chat_area.value=name_message + '\r\n' + chat_area.value;
    chat_area=document.getElementById("chat_area");

    
    }
