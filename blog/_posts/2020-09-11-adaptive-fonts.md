---
title: Адаптивные шрифты
date: 2020-09-11 17:00
tags:
- frontend
- css
---
Первые попытки резиновой, то есть, адаптирующейся к ширине экрана, верстки были аж в 2004-ом году, судя по [чудом сохранившейся статье в блоге Man in Blue](http://www.themaninblue.com/writing/perspective/2004/09/21/)

Когда адаптивность стала входить в обиход (точкой отсчета принято считать [эту статью Итана Маркотта](https://alistapart.com/article/responsive-web-design/), то есть 10 лет назад, мы использовали _%_ и _em_ в качестве единиц измерения для шрифтов и отступов. Чтобы увеличить или уменьшить шрифт, мы использовали _media queries_, которые позволяли задать _font-size_ для body, от которого зависят все размеры, указанные в em-ах. 

Верстальщику всё время нужно было подбирать определенную величину, при которой блоки не наезжали друг на друга, текст не выпячивал за пределы блока, учитывать читаемость и компоновку элементов для четырёх размеров экранов как минимум.

Все современные браузеры поддерживают _vw_ и _vh_ в качестве величин, относительных высоте и ширине viewport-а (окна браузера). Если вы потянете за угол окна браузера прямо сейчас, вы сможете заметить, что заголовок страницы будет плавно уменьшаться, это потому что его размер шрифта указан в _vw_. Раньше это можно было сделать, указав размер в процентах, но эти проценты считались от ширины блока.

Чтобы текст не ужимался до нечитабельного состояния, можно указать минимальный размер через calc():

    h1 {
        font-size: calc(1.3rem + 3.6vw);
    }

Несмотря на то, что эта технология появилась 8 лет назад, вместе с CSS3 ([одна из первых статей про vueport units](https://generatedcontent.org/post/21279324555/viewportunits)), огромное число разработчиков до сих пор оперируют пикселями и, в лучшем случае, _em_. Оставим это на их совести и совести UX-специалистов, которые делают статичные макеты.

Почаще заходите сюда, и на [Can I Use](https://caniuse.com/viewport-units), и здесь и там очень много полезной и актуальной информации.

Да, читайте, пожалуйста, [спецификацию](https://www.w3.org/TR/css3-values/#viewport-relative-lengths)!