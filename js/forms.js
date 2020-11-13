(function () {
    'use strict';
    jQuery.extend(jQuery.validator.messages, {
        required: "Este campo é obrigatório.",
        email: "E-mail inválido.",
        number: "Por favor insira um número válido.",
        maxlength: jQuery.validator.format("Por favor insira no máximo {0} caracteres."),
        minlength: jQuery.validator.format("Por favor insira no minímo {0} caracteres."),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Por favor insira entre {0} e {1} caractéres.")
    });
    
    
    // Formulário acessar (LOGIN)
    $("#form-newsletter").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            nome: {
                required: true,
                minLength: 6
            },
        },
    
        messages: {
            password: {
                required: "Digite seu nome",
                minLength: "Seu nome deve ter no mínimo 4 caractéres"
            },
    
            email: {
                required: 'Digite seu email',
                email: 'Email inválido'
            },
        }
    });
    
    // Formulário acessar (LOGIN)
    $("#carreiras-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            nome: {
                required: true,
            },
            loren: {
                required: true,
            },
        },
    
        messages: {
        }
    
    });
   
})();