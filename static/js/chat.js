const form = document.getElementById('chat-form')
const chat_box = document.getElementById('chat-box')
    // form data
const csrf = document.getElementsByName('csrfmiddlewaretoken')
const user_chat = document.getElementById('chat')

const url = ""

form.addEventListener('submit', e => {
    e.preventDefault()


    const li = document.createElement('li');
    li.className = 'odd';

    li.innerHTML = `<li class="odd">
                        <div class="message-list">
                            <div class="chat-avatar">
                                <img src="static/images/users/rj.jpg" alt="">
                            </div>
                            <div class="conversation-text">
                                <div class="ctext-wrap">
                                    <span class="user-name">Rajeeban</span>
                                    <p>
                                        ${user_chat.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>`
    chat_box.appendChild(li);

    const form_data = new FormData()
    form_data.append('csrfmiddlewaretoken', csrf[0].value)
    form_data.append('user_chat', user_chat.value)

    $.ajax({
        type: 'POST',
        url: url,
        enctype: 'multipart/form-data',
        data: form_data,
        success: function(res) {
            console.log("Amma")
            form.reset();

            const oddli = document.createElement('li');
            oddli.innerHTML = `<li>
                        <div class="message-list">
                            <div class="chat-avatar">
                                <img src="/static/images/users/bot.png" alt="">
                            </div>
                            <div class="conversation-text">
                                <div class="ctext-wrap">
                                    <span class="user-name">Bluewhale</span>
                                    <p>
                                        ${res.response}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>`
            document.getElementById('chat-box').appendChild(oddli);
            jQuery('.slimscroll').slimscroll({ scrollBy: '400px' });
        },
        error: function(error) {
            console.log(error)

        },
        cache: false,
        contentType: false,
        processData: false,
    })

});



$(document).ready(function() {
    jQuery('.slimscroll').slimscroll({ scrollBy: '400px' });
});