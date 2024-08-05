document.addEventListener('DOMContentLoaded', () => {
  const businessidInput = document.getElementById('business-id');

  let isBusinessIdValid = false;

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

  //회사명
  function checkBusinessIdValid() {
    const businessidValue = businessidInput.value.trim();

    isBusinessIdValid = false;
    hideError(businessidInput, 'BusinessIdEmptyError');

    if (!businessidValue) {
       showError(businessidInput, "BusinessIdEmptyError");
    } else {
      isBusinessIdValid = true;
    }
    submitButtonState();
}

  // 이벤트리스너 추가
  if (businessidInput) {
    businessidInput.addEventListener("focusout", checkBusinessIdValid);
 }

  // 산업 분야 (선택사항)
  function doSelected(segment) { 
    var select = document.getElementById("business-select"); 
    select.value = segment; 
  } 

});
