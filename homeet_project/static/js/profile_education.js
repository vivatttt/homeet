document.addEventListener("DOMContentLoaded", function () {
  var workInput = document.getElementById("Work");
  var opInput = document.getElementById("OP");

  var textWork = document.getElementById("workError");
  var textOP = document.getElementById("opError");

  workInput.addEventListener("input", function () {
    var colorWork;
    var colorPlaceholder;
    var backgroundWork;
    var isWorkValid = new RegExp('^[а-яА-ЯёЁa-zA-Z0-9",. ]+$');
    var work = workInput.value;
    var placeholder = document.getElementById("label_work");

    if (isWorkValid.test(work)) {
      colorWork = "#f4f4f6";
      backgroundWork = "#f4f4f6";
      colorPlaceholder = "#868383";
      textWork.innerHTML = "";
    } else if (work == "") {
      backgroundWork = "#faf1f1";
      colorWork = "#d63a3a";
      colorPlaceholder = "#d63a3a";
      textWork.innerHTML = "Обязательное поле";
    } else {
      backgroundWork = "#faf1f1";
      colorWork = "#d63a3a";
      colorPlaceholder = "#d63a3a";
      textWork.innerHTML = "Неверный формат места работы";
    }

    workInput.style.background = backgroundWork;
    workInput.style.borderColor = colorWork;
    placeholder.style.color = colorPlaceholder;

    var work_field = document.getElementById("inf_work");
    if (isWorkValid.test(work)) {
      work_field.innerHTML = work;

      work_field.style.width = "auto";
    } else {
      work_field.innerHTML = "";
      work_field.style.width = 60 + "%";
    }
  });

  opInput.addEventListener("input", function () {
    var colorOP;
    var colorPlaceholder;
    var backgroundOP;
    var isOPValid = new RegExp('^[а-яА-ЯёЁa-zA-Z ]+$');
    var op = opInput.value;
    var placeholder = document.getElementById("label_op");

    if (isOPValid.test(op)) {
      colorOP = "#f4f4f6";
      backgroundOP = "#f4f4f6";
      colorPlaceholder = "#868383";
      textOP.innerHTML = "";
    } else if (op == "") {
      backgroundOP = "#faf1f1";
      colorOP = "#d63a3a";
      colorPlaceholder = "#d63a3a";
      textOP.innerHTML = "Обязательное поле";
    } else {
      backgroundOP = "#faf1f1";
      colorOP = "#d63a3a";
      colorPlaceholder = "#d63a3a";
      textOP.innerHTML = "Неверный формат названия ОП";
    }

    opInput.style.background = backgroundOP;
    opInput.style.borderColor = colorOP;
    placeholder.style.color = colorPlaceholder;

  
  });

  function areAllFieldsValid(){
    var isOPValid = new RegExp('^[а-яА-ЯёЁa-zA-Z ]+$');
    var isWorkValid = new RegExp('^[а-яА-ЯёЁa-zA-Z0-9",. ]+$');
    var work = workInput.value;
    var op = opInput.value;

    var checkboxes = document.getElementsByName("number");
    var educationField = document.getElementById("inf_education");
    var selected_step = document.getElementById("select1").value;
    var selected_faculty = document.getElementById("select2").value;
    var selected_checkbox = 0;

    for (var i = 0; i < checkboxes.length; i ++){
        if (checkboxes[i].checked){
            selected_checkbox = checkboxes[i].value;
        }
    }
    if (isWorkValid.test(work) && isOPValid.test(op) && selected_faculty != "Факультет" && selected_step != "Ступень образования" && selected_checkbox){
        return 1;
    }
    return 0;
  }
  // при нажатии на кнопку Назад, нас перенаправляет на предыдущую страницу
  document.getElementById("back_button_2").addEventListener("click", function(){
    window.history.back()
  });

  document.getElementById("main_form_2").addEventListener("input", function(){
    
    var checkboxes = document.getElementsByName("number");
    var educationField = document.getElementById("inf_education");
    var selected_step = document.getElementById("select1").value;
    var selected_faculty = document.getElementById("select2").value;
    var selected_checkbox = 0;


    for (var i = 0; i < checkboxes.length; i ++){
        if (checkboxes[i].checked){
            selected_checkbox = checkboxes[i].value;
        }
    }

    // заполнение поля образование на карточке
    if (selected_checkbox == "Уже окончил Вышку"){
        educationField.innerHTML = "Уже окончил Вышку";
        educationField.style.background = "#ffffff";
        educationField.style.width = "auto";
    }else if (selected_checkbox && selected_faculty != "Факультет" && selected_step != "Ступень образования"){
       educationField.innerHTML = selected_checkbox + " курс, " + selected_step + ", " + selected_faculty;
       educationField.style.background = "#ffffff";
       educationField.style.width = "auto";
    }else if(selected_checkbox && selected_step != "Ступень образования"){
        educationField.innerHTML = selected_checkbox + " курс, " + selected_step;
        educationField.style.background = "#ffffff";
        educationField.style.width = "auto";
    }else if(selected_checkbox && selected_faculty != "Факультет"){
        educationField.innerHTML = selected_checkbox + " курс, "  + selected_faculty;
        educationField.style.background = "#ffffff";
        educationField.style.width = "auto";
    }else if(selected_step != "Ступень образования" && selected_faculty != "Факультет"){
        educationField.innerHTML = selected_step + ", " + selected_faculty;
        educationField.style.background = "#ffffff";
        educationField.style.width = "auto";
    }else if(selected_checkbox){
        educationField.innerHTML = selected_checkbox + " курс";
        educationField.style.background = "#ffffff";
        educationField.style.width = "auto";
    }else if(selected_faculty != "Факультет"){
        educationField.innerHTML = selected_faculty;
        educationField.style.background = "#ffffff";
        educationField.style.width = "auto";
    }else if(selected_step != "Ступень образования"){
        educationField.innerHTML = selected_step;
        educationField.style.background = "#ffffff";
        educationField.style.width = "auto";
    }else {
        educationField.innerHTML = "";
        educationField.style.background = "#f4f4f6";
        educationField.style.width = 25 + "%";
    }
    
    // перекрашиваем кнопку, если все поля валидны
    var button_continue = document.getElementById("button_continue_2");
    if(areAllFieldsValid()){
        button_continue.style.opacity = 1;
    }else{
        button_continue.style.opacity = 0.4;
    } 

}); 
document.getElementById("main_form_2").addEventListener("submit", function(event){
    if (!(areAllFieldsValid())){
        event.preventDefault();
    }else{
      
        // здесь делаем, что-то с данными из формы
    }
});

});
