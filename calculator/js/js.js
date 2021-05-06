btn.addEventListener("click", f_out);

  function f_out (){
      P = Number(O.value)+Number(D.value)-Number(K.value);
      result.innerHTML ="Тривалість фінансового циклу = "+P;
  }