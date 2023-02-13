/*
* Функция для проверки и сохранения  данных пользователя
* Также блокирует доступ к сайту лицам, не подтвердившим свой возраст
*
* */

// Логирование сессии (объявлено через function declaration)
let sessionLog = function logSession(session) {
    // Вывод в консоль
    for (let result of session){
        console.log(result)
    }
}

// Обработка сессии (объявлено через expression)
function handleSession(){
    // создадим объект Map для хранения сессии
    let session =  new Map();
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)
   
    // Запросим возраст пользователя и тоже сохраним
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))
   
    // Проверка на возраст и сохранение сессии
    if(session.get("age") >= 18){
        let startDate = new Date().toLocaleString();
       
        alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + startDate );
        session.set("startDate", startDate)
    }
    else{
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
   
    // Теперь мы возвращаем объект сессии
    return session;
 }

/*
* Функция для фильтрации контента
* Будет вызываться благодаря атрибуту oninput на index.html
*
* */
function filterContent( inputParseFunction ){ // в этот параметр будет передана ФУНКЦИЯ парсинга пользовательского ввода
  
    let elements = document.getElementsByClassName('video-container');
  
    for (let i = 0; i <= elements.length; i++ ){
        let videoText = elements[i].querySelector(".video-title").innerText;
        if(!videoText.toLowerCase().includes(inputParseFunction() /*Переданная функция вызвана*/  .toLowerCase())){
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
 }

/* // Сохраняем функцию 1  в переменную
let contentFilter =  function filterContent(){
   let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
   let elements = document.getElementsByClassName('video-container');
 
   for (let i = 0; i <= elements.length; i++ ){
       let videoText = elements[i].querySelector(".video-title").innerText;
       if(!videoText.toLowerCase().includes(inputString.toLowerCase())){
           elements[i].style.display = 'none';
       } else {
           elements[i].style.display = 'inline-block';
       }
   }
} */

/* // Сохраняем функцию 2 в переменную
let sessionHandler = function handleSession(){
   let session =  new Map();
   session.set("userAgent", window.navigator.userAgent)
   session.set("age", prompt("Пожалуйста, введите ваш возраст?"))
  
   if(session.get("age") >= 18){
       let startDate = new Date().toLocaleString();
      
       alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + startDate );
       session.set("startDate", startDate)
   }
   else{
       alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
       window.location.href = "http://www.google.com"
   }
  
   for (let result of session){
       console.log(result)
   }
} */