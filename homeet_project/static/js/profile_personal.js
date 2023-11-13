document.addEventListener("DOMContentLoaded", function () {
  
  // получаем ссылки на поля ввода
  var nameInput = document.getElementById("inpName");
  var telegramInput = document.getElementById("inpTelegram");
  var phoneInput = document.getElementById("inpPhoneNumber");
  var textareaInput = document.getElementById("textarea1");

  // получаем ссылки на чекбоксы
  var isMale = document.getElementById("male");
  var isFemale = document.getElementById("female");

  // получаем ссылки на ввод даты 
  var dateInput = document.getElementById("bday");

  // получаем ссылку на ввод картинки
  var imageInput = document.getElementById("actual_btn");

  // получаем ссылки на боксы для текста, которые отражают ошибки
  var textName = document.getElementById("nameError");
  var textTelegram = document.getElementById("telegramError");
  var textPhone = document.getElementById("phoneError");
  var textTextarea = document.getElementById("textareaError");

  var uploadedImage = "";

  imageInput.addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", () => {
      uploadedImage = reader.result;
      var imageField = document.getElementById("photo_replace");
      imageField.style.backgroundImage = `url(${uploadedImage})`;
      imageField.style.backgroundSize = "100% 100%";
      imageField.style.border = "none";
      document.getElementById("photo").style.opacity = 1;
    });
    reader.readAsDataURL(this.files[0]);
  });

  nameInput.addEventListener("input", function () {
    var colorName;
    var colorPlaceholder;
    var backgroundName;
    var isNameValid = new RegExp("^[а-яА-ЯёЁa-zA-Z ]+$");
    var name = document.getElementById("inpName").value;
    var placeholder = document.getElementById("label_name");

    if (isNameValid.test(name)) {
      colorName = "#f4f4f6";
      backgroundName = "#f4f4f6";
      colorPlaceholder = "#868383";
      textName.innerHTML = "";
    } else if (name == "") {
      backgroundName = "#faf1f1";
      colorName = "#d63a3a";
      colorPlaceholder = "#d63a3a";
      textName.innerHTML = "Обязательное поле";
    } else {
      backgroundName = "#faf1f1";
      colorName = "#d63a3a";
      colorPlaceholder = "#d63a3a";
      textName.innerHTML = "Неверный формат имени";
    }

    nameInput.style.background = backgroundName;
    nameInput.style.borderColor = colorName;
    placeholder.style.color = colorPlaceholder;

    var box_name = document.getElementById("inf_name");
    var box_text_name = document.getElementById("inf_name_text");
    if (isNameValid.test(name)) {
      box_text_name.innerHTML = name;
      box_name.style.background = "#ffffff";
      box_name.style.height = "auto";
    } else {
      box_text_name.innerHTML = "";
      box_name.style.background = "#f4f4f6";
      box_name.style.height = 30 + "px";
    }
  });

  // да костыли и что
  isMale.addEventListener("input", function () {
    var gender_field = document.getElementById("gender_field");

    if (isMale.checked) {
      gender_field.innerHTML = "Парень";
      gender_field.style.background = "#ffffff";
      gender_field.style.width = "auto";
    } else {
      gender_field.innerHTML = "";
      gender_field.style.background = "#f4f4f6";
      gender_field.style.width = 25 + "%";
    }
  });

  isFemale.addEventListener("input", function () {
    var gender_field = document.getElementById("gender_field");

    if (isFemale.checked) {
      gender_field.innerHTML = "Девушка";
      gender_field.style.background = "#ffffff";
      gender_field.style.width = "auto";
    } else {
      gender_field.innerHTML = "";
      gender_field.style.background = "#f4f4f6";
      gender_field.style.width = 25 + "%";
    }
  });

  dateInput.addEventListener("input", function () {
    var age_field = document.getElementById("inf_age");
    var dateEntered = new Date(dateInput.value);

    var currentTime = new Date();
    var age =
      Math.ceil(
        (currentTime.getTime() - dateEntered.getTime()) /
          (24 * 3600 * 365.25 * 1000)
      ) -
      1 +
      " лет";

    age_field.innerHTML = age;
    age_field.style.background = "#ffffff";
    age_field.style.width = "auto";
  });

  telegramInput.addEventListener("input", function () {
    var colorPlaceholder;
    var colorTelegram;
    var backgroundTelegram;
    var isTelegramValid = new RegExp("^[a-zA-Z_@0-9]+$");
    var telegram = document.getElementById("inpTelegram").value;
    var placeholder = document.getElementById("label_telegram");

    if (isTelegramValid.test(telegram)) {
      colorTelegram = "#f4f4f6";
      colorPlaceholder = "#868383";
      backgroundTelegram = "#f4f4f6";
      textTelegram.innerHTML = "";
    } else if (telegram == "") {
      backgroundTelegram = "#faf1f1";
      colorPlaceholder = "#d63a3a";
      colorTelegram = "#d63a3a";
      textTelegram.innerHTML = "Обязательное поле";
    } else {
      backgroundTelegram = "#faf1f1";
      colorPlaceholder = "#d63a3a";
      colorTelegram = "#d63a3a";
      textTelegram.innerHTML = "Неверный формат телеграма";
    }
    telegramInput.style.background = backgroundTelegram;
    telegramInput.style.borderColor = colorTelegram;
    placeholder.style.color = colorPlaceholder;
  });

  phoneInput.addEventListener("input", function () {
    var colorPlaceholder;
    var colorPhone;
    var backgroundPhone;
    var isPhoneValid = /^(?:\+7|8)[0-9]{10}$/;
    var phone = document.getElementById("inpPhoneNumber").value;
    var placeholder = document.getElementById("label_phone");

    if (isPhoneValid.test(phone)) {
      colorPhone = "#f4f4f6";
      backgroundPhone = "#f4f4f6";
      colorPlaceholder = "#868383";
      textPhone.innerHTML = "";
    } else if (phone == "") {
      backgroundPhone = "#faf1f1";
      colorPlaceholder = "#d63a3a";
      colorPhone = "#d63a3a";
      textPhone.innerHTML = "Обязательное поле";
    } else {
      backgroundPhone = "#faf1f1";
      colorPhone = "#d63a3a";
      colorPlaceholder = "#d63a3a";
      textPhone.innerHTML = "Неверный формат номера телефона";
    }
    phoneInput.style.background = backgroundPhone;
    phoneInput.style.borderColor = colorPhone;
    placeholder.style.color = colorPlaceholder;
  });

  textareaInput.addEventListener("input", function () {
    var colorPlaceholder;
    var colorTextarea;
    var backgroundTextarea;
    var textarea = document.getElementById("textarea1").value;
    var placeholder = document.getElementById("label_textarea");

    if (textarea != "") {
      colorTextarea = "#f4f4f6";
      backgroundTextarea = "#f4f4f6";
      colorPlaceholder = "#868383";
      textTextarea.innerHTML = "";
    } else {
      backgroundTextarea = "#faf1f1";
      colorTextarea = "#d63a3a";
      colorPlaceholder = "#d63a3a";
      textTextarea.innerHTML = "Обязательное поле";
    }

    textareaInput.style.background = backgroundTextarea;
    textareaInput.style.borderColor = colorTextarea;
    placeholder.style.color = colorPlaceholder;

    var textareaField = document.getElementById("inf_personal");
    var textareaFieldP = document.getElementById("p_inf_personal");

    if (textarea != "") {
      textareaFieldP.innerHTML = textarea;
      textareaField.style.background = "#ffffff";
      textareaField.style.width = "auto";
      textareaField.style.height = "auto";
      document.getElementById("span_inf_personal").style.display = "block";
    } else {
      textareaFieldP.innerHTML = "";
      textareaField.style.background = "#f4f4f6";
      textareaField.style.width = 100 + "%";
      document.getElementById("span_inf_personal").style.display = "none";
      textareaField.style.height = 20 + "px";
    }
  });
  // функциональная часть кнопки Развернуть/Свернуть
  document
    .getElementById("span_inf_personal")
    .addEventListener("click", function () {
      document.getElementById("inf_personal").classList.toggle("active");
    });

  // функция, которая проверяет поля на то, что они заполнены и значения допустимы
  function areAllFieldsValid() {
    var isNameValid = new RegExp("^[а-яА-ЯёЁa-zA-Z ]+$");
    var isTelegramValid = new RegExp("^[a-zA-Z_@0-9]+$");
    var isPhoneValid = /^(?:\+7|8)[0-9]{10}$/;

    var textarea = textareaInput.value;
    var name = nameInput.value;
    var telegram = telegramInput.value;
    var phone = phoneInput.value;

    if (
      nameInput.value &&
      textareaInput.value &&
      telegramInput.value &&
      phoneInput.value &&
      dateInput.value &&
      (isMale.checked || isFemale.checked)
    ) {
      if (
        isNameValid.test(name) &&
        isTelegramValid.test(telegram) &&
        isPhoneValid.test(phone) &&
        textarea != "" &&
        dateInput != "" &&
        (isMale != "" || isFemale != "")
      ) {
        return 1;
      }
    }
    return 0;
  }

  // перекрашиваем кнопку, в случае, если все поля заполнены и в них нет ошибки
  document.getElementById("mainForm").addEventListener("input", function () {
    if (areAllFieldsValid()) {
      document.getElementById("button_continue").style.opacity = 1;
    } else {
      document.getElementById("button_continue").style.opacity = 0.4;
    }
  });

  // обработка отправки формы
  document.getElementById("mainForm").addEventListener("submit", function (event) {
      if (!areAllFieldsValid()) {
        event.preventDefault(); // предотвращаем отправку формы, если есть неверные данные
      } else {
        //здесь обработка полученных из формы данных + переадресация на следующую страницу
        const form = document.getElementById('mainForm');
        const formData = new FormData(form);

        // for (const key of formData.keys()) {
        //   console.log(key);
        // }

        fetch('http://localhost:8000', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
      }
    });
});
