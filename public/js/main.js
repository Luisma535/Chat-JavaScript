$(function(){
const socket = io();
const form = $('.form')
const sms = $('#message')
const chat = $('.chat')
form.submit( e=>{
  e.preventDefault();
  socket.emit('send message',sms.val());
  sms.val('').focus();
})
socket.on('new message',function(data){
  let html = '';
  let fecha = new Date();
  let hora = fecha.getHours() + ':' + fecha.getMinutes();
  html += '<ul>'
  html += '<li class="li-chat text-center">'+data+'</li>'
  html += '<div class="time">'+hora+'</div>'
  html += '</ul>'
  chat.append(html)
})
})




