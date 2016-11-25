# Simple Contact form

Just an easy contact form...

## Usage
Include bootstrap
https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.js

Give a JSON these values:
```javascript
"contact":{
        "header":"Contact",
        "mailAddress":"your mail",
        "message":"your message",
        "sendMessage":"Mail send",
        "sendButton":"Send message"
      }
```
use it like:
```javascript
<ContactForm data={this.props.data} ></ContactForm>
```

MIT
