describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     
    })
   it('Востановление  пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); //забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // отправить пароль
        cy.get('#restoreEmailButton').click(); //отправили код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible'); //Успешно отправили пароль на e-mail
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик должен быть виден
     
    })
       it('правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //заити на саит
        cy.get('#mail').type('german@dolnikov.ru'); //ввели правильный логин
        cy.get('#pass').type('lskvfle'); //ввели неправильный пароль
        cy.get('#loginButton').click(); //нажали кнопку воити
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
           it(' не правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //заити на саит
        cy.get('#mail').type('germav@dolnikov.ru'); //ввели неправильный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели правильный пароль
        cy.get('#loginButton').click(); //нажали кнопку воити
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
           it('негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); //заити на саит
        cy.get('#mail').type('germandolnikov.ru'); //ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); //ввели правильный пароль
        cy.get('#loginButton').click(); //нажали кнопку воити
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
            it('проверка на приведение к строчным буквам в логине:', function () {
        cy.visit('https://login.qa.studio/'); //заити на саит
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин с большими буквами
        cy.get('#pass').type('iLoveqastudio1'); //ввели правильный пароль
        cy.get('#loginButton').click(); //нажали кнопку воити
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })   


})


