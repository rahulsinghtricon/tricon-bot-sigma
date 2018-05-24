var botui = new BotUI('api-bot');

var socket = io.connect('http://localhost:8010');

botui.message.add({
  content: 'Lets Start Talking...',
  delay: 500,
});

botui.action.text({
  action: {
    placeholder: 'Say Something!',
  }
}).then(function (res) {
  socket.emit('fromClient', { client: res.value }); // sends the message typed to server
  console.log(res.value); // will print whatever was typed in the field.
});

socket.on('fromServer', function (data) { // recieveing a reply from server.
 // console.log("test");
 document.getElementsByClassName('botui-message')[document.getElementsByClassName('botui-message').length -1].scrollIntoView();
  console.log("data",data);
  // data.server.forEach(element => {
    // console.log("elment",data)
  botui.message.add({
      content: data.server[0].text.text[0],
      delay: 500,
    // })
  }).then(function () {
    document.getElementsByClassName('botui-message')[document.getElementsByClassName('botui-message').length -1].scrollIntoView();
    botui.action.text({
      autoHide: false,
      action: {
        placeholder: 'Say Something!',
      }
    }).then(function (res) {
      socket.emit('fromClient', { client: res.value }); // sends the message typed to server
      console.log(res.value); // will print whatever was typed in the field.
      document.getElementsByClassName('botui-message')[document.getElementsByClassName('botui-message').length -1].scrollIntoView();
    });
  });;
});