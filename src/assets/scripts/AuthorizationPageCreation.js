export default class AuthorizationPage {
  constructor() {
    this.header = document.querySelector('header');
    this.main = document.querySelector('main');
  }

  createAuthorizationPage() {
    this.authorizationContainer = document.createElement('div');
    this.authorizationContainer.classList.add('authorization');

    this.signInBlock = document.createElement('div');
    this.signInBlock.classList.add('sign-in-block');

    this.signInHint = document.createElement('div');
    this.signInHint.classList.add('sign-in-hint', 'hints');
    this.signInHint.innerText = 'If you already registered';

    this.buttonSignIn = document.createElement('button');
    this.buttonSignIn.classList.add('sign-in-button', 'authorization-buttons');
    this.buttonSignIn.innerText = 'Sign in';

    this.signInBlock.appendChild(this.signInHint);
    this.signInBlock.appendChild(this.buttonSignIn);

    this.registrationBlock = document.createElement('div');
    this.registrationBlock.classList.add('registration-block');

    this.registrationHint = document.createElement('div');
    this.registrationHint.classList.add('registration-hint', 'hints');
    this.registrationHint.innerText = 'New here?';

    this.buttonRegistration = document.createElement('button');
    this.buttonRegistration.classList.add('registration-button', 'authorization-buttons');
    this.buttonRegistration.innerText = 'Registration';

    this.registrationBlock.appendChild(this.registrationHint);
    this.registrationBlock.appendChild(this.buttonRegistration);

    this.authorizationContainer.appendChild(this.signInBlock);
    this.authorizationContainer.appendChild(this.registrationBlock);
    this.main.appendChild(this.authorizationContainer);
  }
}
