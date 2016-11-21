var objQ={

    ancestor:document.body,
    wrapper:'',
    header:'',
    questionBlock:'',
    question:[],
    answerBlock:[],
    answer:[],
    checkbox:'',
    div:[],
    result:'',
    buttonWrapper:'',


    createForm : function() {

        this.wrapper=document.createElement('form');
        this.wrapper.classList.add('wrapper');
        this.ancestor.appendChild(this.wrapper);
    },
    createHeader : function(){

        this.header=document.createElement('h1');
        this.header.classList.add('header');
        this.header.innerHTML = 'Тест по программированию';
        this.wrapper.appendChild(this.header);
    },
    createQuestionBlock : function(){

        this.questionBlock=document.createElement('ol');
        this.questionBlock.classList.add('questionBlock');
        this.wrapper.appendChild(this.questionBlock);
    },
    createQuestion : function(i){

        this.question[i] = document.createElement('li');
        this.question[i].classList.add('question');
        this.question[i].innerHTML = main[i].q;
        this.questionBlock.appendChild(this.question[i]);

    },
    createAnswerBlock : function(i){

        this.answerBlock[i] = document.createElement('div');
        this.answerBlock[i].classList.add('AnswerBlock');
        this.question[i].appendChild(this.answerBlock[i]);
    },

    createAnswer : function(i,j){

        this.answer[i] = document.createElement('label');
        this.answer[i].classList.add('answer');
        this.div[i] = document.createElement('div');
        this.answerBlock[i].appendChild(this.div[i]);
        this.checkb = document.createElement('input');
        this.checkb.setAttribute('type','checkbox');
        this.answer[i].innerHTML = main[i].a[j];
        this.div[i].appendChild(this.checkb);
        this.div[i].appendChild(this.answer[i]);
    },
    createButton : function(){

        this.result = document.createElement('button');
        this.buttonWrapper = document.createElement('div');
        this.buttonWrapper.classList.add('buttonWrapper');
        this.wrapper.appendChild(this.buttonWrapper);
        this.result.innerHTML = 'Проверить мои результаты';
        this.buttonWrapper.appendChild(this.result);
    },

    createTest : function(){

        this.createForm();
        this.createHeader();
        this.createQuestionBlock();
        for ( var i = 0; i < main.length; i++){
            this.createQuestion(i);
        };
        for (var i = 0;i < main.length;i++){
            this.createAnswerBlock(i);
        };
        for (var i = 0; i < main.length; i++){
            for (var j= 0; j < main[i].a.length; j++){
                this.createAnswer(i, j);
            }
        };
        this.createButton();


    }

}
objQ.createTest();