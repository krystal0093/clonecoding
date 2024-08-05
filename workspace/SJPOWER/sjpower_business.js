document.addEventListener('DOMContentLoaded', () => {
  // const BusinessId = document.getElementById('business-id');
  const signupForm = document.getElementById('signupForm');
  const emailInput = document.getElementById('email');
  const nicknameInput = document.getElementById('nickname');
  const passwordInput = document.getElementById('password');
  const passwordConfirmInput = document.getElementById('passwordConfirm');
  const button = document.getElementById('button');

  // let isBusinessIdValid = false;
  let isEmailValid = false;
  let isNicknameValid = false;
  let isPasswordValid = false;
  let isPasswordConfirmValid = false;

  // 에러 메시지 표시
  function showError(input, errorID) {
     //오류메시지 선택
     const errorElement = document.getElementById(errorID);
     //block 으로 지정해서 동적콘텐츠 표시
     errorElement.style.display = 'block';
     //빨강 테두리
     input.style.border = '1px solid #f74747';
  }

  //에러 메시지 숨기기
  function hideError(input, errorID) {
     const errorElement = document.getElementById(errorID);
     errorElement.style.display = 'none';
     input.style.border = 'none';
  }


  //이메일🌼
  function validEmailExam(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email); // true 나 false 를 리턴
  }

  function checkEmailValid() {
     const emailValue = emailInput.value.trim();

     isEmailValid = false;
     hideError(emailInput, 'emailEmptyError');
     hideError(emailInput, 'emailInvalidError');

     if (!emailValue) {
        showError(emailInput, 'emailEmptyError');
     } else if (!validEmailExam(emailValue)) {
        showError(emailInput, 'emailInvalidError');
     } else {
        isEmailValid = true;
     }
     submitButtonState();
  }


  //닉네임🌼
  function checkNicknameValid() {
     const nicknameValue = nicknameInput.value.trim();

     isNicknameValid = false;
     hideError(nicknameInput, 'NicknameEmptyError');

     if (!nicknameValue) {
        showError(nicknameInput, "NicknameEmptyError");
     } else {
        isNicknameValid = true;
     }
     submitButtonState();
  }


  //비밀번호🌼
  function checkPasswordValid() {
     const passwordValue = passwordInput.value.trim();

     isPasswordValid = false;
     hideError(passwordInput, 'passwordEmptyError');
     hideError(passwordInput, 'passwordInvalidError');

     if (!passwordValue) {
        showError(passwordInput, 'passwordEmptyError');
     } else if (passwordValue.length < 8) {
        showError(passwordInput, 'passwordInvalidError');
     } else {
        isPasswordValid = true;
     }
     submitButtonState();
  }


  //비밀번호 확인🌼
  function checkPasswordConfirmValid() {
     const passwordValue = passwordInput.value.trim();
     const passwordConfirmValue = passwordConfirmInput.value.trim();

     isPasswordConfirmValid = false;
     hideError(passwordConfirmInput, 'passwordConfirmInitError');
     hideError(passwordConfirmInput, 'passwordConfirmIncorrectError');

     if (!isPasswordValid) {
        showError(passwordConfirmInput, 'passwordConfirmInitError');
     } else if (!passwordConfirmValue || passwordValue != passwordConfirmValue) {
        showError(passwordConfirmInput, 'passwordConfirmIncorrectError');
     } else {
        isPasswordConfirmValid = true;
     }
     submitButtonState();
  }


  //버튼🌼
  function submitButtonState() {
     let isFormValid = false;

     if (signupForm) {
        isFormValid = isEmailValid && isPasswordValid && isNicknameValid && isPasswordConfirmValid;
     }
     button.disabled = !isFormValid;
  }

  submitButtonState();

  const submit = function (event) {
     event.preventDefault();
     window.location.href = "signup.html";
  }

  // 이벤트리스너 추가
  if (emailInput) {
     emailInput.addEventListener("focusout", checkEmailValid);
  }
  if (nicknameInput) {
     nicknameInput.addEventListener("focusout", checkNicknameValid);
  }
  if (passwordInput) {
     passwordInput.addEventListener("focusout", checkPasswordValid);
  }
  if (passwordConfirmInput) {
     passwordConfirmInput.addEventListener("input", checkPasswordConfirmValid);
  }
  if (signupForm) {
     signupForm.addEventListener("submit", submit);
  }
});
