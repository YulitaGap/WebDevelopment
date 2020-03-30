function validateMe(event) {
  event.preventDefault();

  // Submit the form, only if it is valid
  emailValidator(event);
  nameValidator(event);
  phoneValidator(event);
  messageValidator(event);

  return false;
}

function lenthValidator(inNodeType, inNode, inError, minLength, maxLength){

  if (!isNaN(minLength) & inNode.value.length < minLength){
    errorAdder(inError, inNodeType+' is too short')
  }
  if (!isNaN(maxLength) & inNode.value.length > maxLength){
    errorAdder(inError, inNodeType+' is too long')
  }
}

function formatValidator(inNodeType, inNode, inErrors, regEx ){
  if (!inNode.value.match(regEx) ) {
    errorAdder(inErrors, inNodeType + ' format is incorrect')
  }
}

function errorAdder(inErrors,outMessage){
    let li = document.createElement('li');
    li.innerText = outMessage;
    inErrors.appendChild(li)

}

function emailValidator(event){
  const emailNode = event.target.elements['email'];
  const emailErrorNode = emailNode.parentNode.querySelector('p.help-block')
  emailErrorNode.innerHTML = '';

  let emailErrors = document.createElement('ul');
  emailErrors.setAttribute("role", "alert");
  // Check if mail is between 5 and 50 chars long
  lenthValidator('Email', emailNode, emailErrors, 5, 50)
 
  //Check if email format is correct
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  formatValidator('Email', emailNode, emailErrors, emailRegex)
  
  if (emailErrors.childElementCount > 0) {
    emailErrorNode.appendChild(emailErrors)}
  

}

function nameValidator(event){
  const nameNode = event.target.elements['name'];
  const nameErrorNode = nameNode.parentNode.querySelector('p.help-block')
  nameErrorNode.innerHTML = '';

  let nameErrors = document.createElement('ul');
  nameErrors.setAttribute("role", "alert");
  // Check if name length is 1 or more chars long
  lenthValidator('Name', nameNode, nameErrors, 1, NaN)
  
  //Check if name has 0 or 2 whitespaces benween words
  var nameRegex = /^([A-Z]{1}[a-z']+(\s\s)?)+$/;
  formatValidator('Name', nameNode, nameErrors, nameRegex)

  if (nameErrors.childElementCount > 0) {
    nameErrorNode.appendChild(nameErrors)}
  

}

function phoneValidator(event){
  const phoneNode = event.target.elements['phone'];
  const phoneErrorNode = phoneNode.parentNode.querySelector('p.help-block')
  phoneErrorNode.innerHTML = '';

  let phoneErrors = document.createElement('ul');
  phoneErrors.setAttribute("role", "alert");
  // Check if phone length is 12 or more digits
  lenthValidator('Phone', phoneNode, phoneErrors, 12, NaN)

  //Check    phone format is correct. 
  //  Valid formats: 
  //  "+38032 000 00 00", "+380(32) 000 00 00", "+380(32)-000-00-00", "0380(32) 000 00 00" + any combitaion
  var phoneRegex = /^([0+]?)(380)(\(?[0-9]{2}\)?)([\-\ ]?)([0-9]{3}\4)([0-9]{2}\4[0-9]{2})$/;
  formatValidator('Phone', phoneNode, phoneErrors, phoneRegex)
  
  if (phoneErrors.childElementCount > 0) {
    phoneErrorNode.appendChild(phoneErrors)}
}

function messageValidator(event){
  const messageNode = event.target.elements['message'];
  const messageErrorNode = messageNode.parentNode.querySelector('p.help-block')
  messageErrorNode.innerHTML = '';

  let messageErrors = document.createElement('ul');
  messageErrors.setAttribute("role", "alert");
  // Check if message is 10 or more characters.
  lenthValidator('Message', messageNode, messageErrors, 10, NaN)
  
  //Check is message doesn't iclude bad language: ugly, dumm, stupid, pig, ignorant
  var messageRegex = /^((?!ugly|dumm|stupid|pig|ignorant).)*$/;
  formatValidator('Message', messageNode, messageErrors, messageRegex)
  
  if (messageErrors.childElementCount > 0) {
    messageErrorNode.appendChild(messageErrors)}
}
