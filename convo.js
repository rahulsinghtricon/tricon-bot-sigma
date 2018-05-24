var botui = new BotUI('api-bot');

var socket = io.connect('http://54.213.203.67:8081');

botui.message.add({
  content: 'How may I help you?',
  delay: 500,
});

botui.action.text({
  action: {
    placeholder: 'Type your queries here',
  }
}).then(function (res) {
  socket.emit('fromClient', { client: res.value }); // sends the message typed to server
  //console.log(res.value); // will print whatever was typed in the field.
});

socket.on('fromServer', function (data) { // recieveing a reply from server.
 // console.log("test");
 document.getElementsByClassName('botui-message')[document.getElementsByClassName('botui-message').length -1].scrollIntoView();
  //console.log("data",data);
  // data.server.forEach(element => {
    // console.log("elment",data)
	console.log(data.server);

  for(var message in data.server) {
    switch(data.server[message].message) {
      case "text":
        appendTextMessage(data.server[message]);
        break;
      case "quickReplies":
        appendQuickReplies(data.server[message]);
        break;
    }
  } 
});


appendTextMessage = (message) => {
  botui.message.add({
    content: message.text.text[0],
    delay: 500,
  // })
  }).then(function () {
    document.getElementsByClassName('botui-message')[document.getElementsByClassName('botui-message').length -1].scrollIntoView();
  });;
}


appendQuickReplies = (message) => {
  var action = [];
  for(var quickReply in message.quickReplies.quickReplies) {
    action.push(
      {
        text: message.quickReplies.quickReplies[quickReply],
        value: message.quickReplies.quickReplies[quickReply]
      }
    );
  }

  for(var quickReply in message.quickReplies.quickReplies) {
    botui.action.button({
      autoHide:false,
      action: action
    })
    .then((res) => {
      socket.emit('fromClient', { client: res.value }); // sends the message typed to server
      // console.log(res.value); // will print whatever was typed in the field.
      document.getElementsByClassName('botui-message')[document.getElementsByClassName('botui-message').length -1].scrollIntoView();
      return Promise.resolve();
    })
    .then(() => {
      document.getElementsByClassName('botui-message')[document.getElementsByClassName('botui-message').length -1].scrollIntoView();
      botui.action.text({
        autoHide: false,
        action: {
          placeholder: 'Type your queries here',
        }
      })
    })
  }
  // botui.message.add({
  //   content: message.text.text[0],
  //   delay: 500,
  // // })
  // }).then(function () {
  //   document.getElementsByClassName('botui-message')[document.getElementsByClassName('botui-message').length -1].scrollIntoView();
  //   botui.action.text({
  //     autoHide: false,
  //     action: {
  //       placeholder: 'Type your queries here',
  //     }
  //   }).then(function (res) {
  //     socket.emit('fromClient', { client: res.value }); // sends the message typed to server
  //   // console.log(res.value); // will print whatever was typed in the field.
  //     document.getElementsByClassName('botui-message')[document.getElementsByClassName('botui-message').length -1].scrollIntoView();
  //   });
  // });;
}
