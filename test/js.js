quizlet = {
    question_arr: ['1. Азимут — это…', '2. Если предмет расположен точно на западе, то его азимут равен…', '3. Что такое относительная высота?',
        '4. Что такое бергштрих?', '5. Величина азимута выражается в градусах от 0° до…', '6. Если предмет расположен точно на востоке, то его азимут равен…',
        '7. Абсолютная высота — это…', '8. Линии на плане или карте, соединяющие точки с одинаковой абсолютной высотой называются…', '9. Определите относительную высоту холма, если его абсолютная высота составляет 213 м, а горизонталь у подошвы проведена на высоте 201 м.', '10. Кривые линии на карте измеряют с помощью…'],
    a1_arr: ['угол между направлением на север и направлением на юг', '90°', 'превышение одной точки земной поверхности над другой', 'риска, которая проведена перпендикулярно горизонтали и указывает свободным концом, в каком направлении склон снижается','180°','120°', 'превышение точки земной поверхности над уровнем моря','горизонталями', '214 м', 
    'бергштриха'],
    a2_arr: ['угол между направлением на юг и направлением на какой-то предмет на местности','180°', 'линия на плане или карте, соединяющая точки с одинаковой абсолютной высотой', 'превышение одной точки земной поверхности над другой', '120°', '360°', 'превышение одной точки земной поверхности над другой', 'вертикалями', '12 м', 
    'азимута'],
    a3_arr: ['угол между направлением на север и направлением на какой-то предмет на местности', '225°', 'превышение точки земной поверхности над уровнем моря', 'линия на плане или карте, соединяющая точки с одинаковой абсолютной высотой', '90°', '90°', 'линия на плане или карте, соединяющая точки с одинаковой абсолютной высотой', 'относительной высотой', '414 м', 
    'магнитного склонения'],
    a4_arr: ['угол между северными направлениями географического и магнитного меридианов в точке их пересечения', '270°', 'риска, которая проведена перпендикулярно горизонтали и указывает свободным концом, в каком направлении склон снижается', 'превышение точки земной поверхности над уровнем моря', '360°', '180°', 'риска, которая проведена перпендикулярно горизонтали и указывает свободным концом, в каком направлении склон снижается', 'бергштрихами', '214 м', 
    'курвиметра'],
    answer_arr:['угол между направлением на север и направлением на какой-то предмет на местности', '270°', 'превышение одной точки земной поверхности над другой', ' риска, которая проведена перпендикулярно горизонтали и указывает свободным концом, в каком направлении склон снижается', '360°', '90°', 'превышение точки земной поверхности над уровнем моря', 'горизонталями', '12 м', 
    'курвиметра'],
    n_right_answer_arr:[3, 4, 1, 1, 4, 3, 1, 1, 2, 4]
}
let n_answer = 9;
let right_answers = 0;
console.log(quizlet);
answers (n_question.value);
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
function f_out (){
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);
    if (y1.checked){ n_a = 1;}
    if (y2.checked){ n_a = 2;}
    if (y3.checked){ n_a = 3;}
    if (y4.checked){ n_a = 4;}
    console.log(n_a);
    if (n_a == n_right_answer){
        right_answers += 1;
        answer.classList.add("hidden");
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        console.log("right_answ = "+right_answers);
        if (n_question.value == n_answer){
            btn.classList.add("hidden");
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b> Количество правильных ответов:  " +right_answers+"</b>";
            right_div.appendChild(el1);
            resa.classList.remove("hidden");
        }
    }else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    }
}
function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
}
function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    answers(k);
}
function answers(k) {
    n_question.value = k;
    question.innerHTML=quizlet.question_arr[n_question.value];
    a1.innerHTML = quizlet.a1_arr[n_question.value];
    a2.innerHTML = quizlet.a2_arr[n_question.value];
    a3.innerHTML = quizlet.a3_arr[n_question.value];
    a4.innerHTML = quizlet.a4_arr[n_question.value];
    answer.innerHTML = quizlet.answer_arr[n_question.value];
    n_right_answer = quizlet.n_right_answer_arr[n_question.value];
}