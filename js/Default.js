
//Método inicial
$(document).ready(function () {

    //Atribui eventos aos controles da página
    atribuiEventos();

    //Valida Formulario
    validaFormulario();

    //Valida Formulário Parceria
    validaFormularioParceria();

    //Carrega Logotipos Clientes
    carregaClientes();

});




function atribuiEventos() {

    $("#bEnviar").bind("click", function () { enviaFormulario(); });

    $("#bParceriaEnviar").bind("click", function () { enviaFormularioParceria(); });

}



function enviaFormulario() {


    if ($("#formulario").valid()) {
       
        $("#imgCarregando").show();
        $("#bEnviar").hide();


        $.post("Handlers/Default.ashx", {
            action: "1",
            tEmpresa: $("#tEmpresa").val(),
            tNome: $("#tNome").val(),
            tCNPJ: $("#tCNPJ").val(),
            tQtdFuncionario: $("#tQtdFuncionario").val(),
            tDepartamento: $("#tDepartamento").val(),
            tCidade: $("#tCidade").val(),
            tEstado: $("#tEstado").val(),
            tCep: $("#tCep").val(),
            tTelefone: $("#tTelefone").val(),
            tEmail: $("#tEmail").val()
        }, function (data) {
            if (data.status == "OK") {
               // alert('ok');

                $("#tMsgFormulario").html("Formulário enviado com sucesso!");
                $("#formulario").hide();

            } else {
                alert("Ocorreu um erro ao enviar seu formulário, tente novamente mais tarde!");
                $("#imgCarregando").hide();
                $("#bEnviar").show();
            }
        }, "json");


    }

}



function validaFormulario() {


    //Validação do formulário
    $("#formulario").validate({
        rules: {
            tEmpresa: { required: true, minlength: 2 },
            tNome: {required: true, minlength: 2 },
            tCNPJ: { required: true, minlength: 15, cnpj: true },
            tQtdFuncionario: { required: true, minlength: 1, maxlength:5, number:true },
            tDepartamento: { required: true, minlength: 2 },
            tCidade: { required: true, minlength: 2 },
            tEstado: { required: true, minlength: 2 },
            tCep: { required: true, minlength: 8 },
            tTelefone: { required: true, minlength: 8, maxlength: 13},
            tEmail: { required: true, minlength: 3, email:true }
        },
        messages: {
            tEmpresa: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
            tNome: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
            tCNPJ: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao">*</span>', cnpj: '<span class="erroValidacao"> CNPJ inválido!</span>', number: ' <span class="erroValidacao">Apenas números.</span>' },
            tQtdFuncionario: { required: ' <span class="erroValidacao"> *</span>', minlength: ' <span class="erroValidacao">*</span>', maxlength: ' <span class="erroValidacao">*</span>', number: ' <span class="erroValidacao">Apenas números.</span>' },
            tDepartamento: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
            tCidade: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
            tEstado: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
            tCep: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao">Informe um CEP válido!</span>', number: ' <span class="erroValidacao">Apenas números.</span>' },
            tTelefone: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>', maxlength: ' <span class="erroValidacao">*</span>', number: ' <span class="erroValidacao">Apenas números.</span>' },
            tEmail: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>', email: ' <span class="erroValidacao"> * </span>' }
        }

    });

    //Fim validação
    $("#tCNPJ").mask("99.999.999/9999-99");
    $("#tCep").mask("99999-999");
    $("#tTelefone").mask("(99)99999999?9");
}





function enviaFormularioParceria() {

    if ($("#formularioParceria").valid()) {
        

        if ($("sParceriaEstado").val() == "0") {
            alert("Selecione um estado!");
            $("sParceriaEstado").focus();
            return false;
        }


        $("#imgCarregandoParceria").show();
        $("#bParceriaEnviar").hide();

        $.post("Handlers/Default.ashx", {
            action: "2",
            tParceriaNome: $("#tParceriaNome").val(),
            tParceriaRazao: $("#tParceriaRazao").val(),
            tParceriaCidade: $("#tParceriaCidade").val(),
            sParceriaEstado: $("#sParceriaEstado").val(),
            tParceriaCidade: $("#tParceriaCidade").val(),
            tParceriaComplemento: $("#tParceriaComplemento").val(),
            tParceriaCEP: $("#tParceriaCEP").val(),
            tParceriaTelefone: $("#tParceriaTelefone").val(),
            tParceriaWebsite: $("#tParceriaWebsite").val(),
            tParceriaNomeContato: $("#tParceriaNomeContato").val(),
            tParceriaSobrenomeContato: $("#tParceriaSobrenomeContato").val(),
            tParceriaCargo: $("#tParceriaCargo").val(),
            tParceriaTelefoneContato: $("#tParceriaTelefoneContato").val(),
            tParceriaCelularContato: $("#tParceriaCelularContato").val(),
            tParceriaSkypeContato: $("#tParceriaSkypeContato").val(),
            tParceriaEmailContato: $("#tParceriaEmailContato").val(),
            tParceriaNumeroClientes: $("#tParceriaNumeroClientes").val(),
            tParceriaAtuazao: $("input:checkbox[name='tParceriaAtuazao']:checked").val(),
            tParceriaOutros: $("#tParceriaOutros").val(),
            txtParceriaProdutos: $("#txtParceriaProdutos").val(),
            txtParceriaIdeia: $("#txtParceriaIdeia").val()
        }, function (data) {
            if (data.status == "OK") {
                // alert('ok');

                $("#txtMsgFormularioParceria").html("<strong>Formulário enviado com sucesso!</strong>");
                $("#txtMsgFormularioParceria").show();
                $("#formularioParceria").hide();

            } else {
                alert("Ocorreu um erro ao enviar seu formulário, tente novamente mais tarde!");
                $("#imgCarregandoParceria").hide();
                $("#bParceriaEnviar").show();
            }
        }, "json");


    }

}



function validaFormularioParceria() {


    //Validação do formulário
    $("#formularioParceria").validate({
        rules: {
            tParceriaNome: { required: true, minlength: 2 },
            tParceriaRazao: { required: true, minlength: 2 },
            tParceriaCidade: { required: true, minlength: 2 },
            tParceriaCidade: { required: true, minlength: 2 },
            tParceriaCEP: { required: true, minlength: 2 },
            tParceriaTelefone: { required: true, minlength: 2 },
            tParceriaWebsite: { required: true, minlength: 2 },
            tParceriaNomeContato: { required: true, minlength: 2 },
            tParceriaSobrenomeContato: { required: true, minlength: 2 },
            tParceriaCargo: { required: true, minlength: 2 },
            tParceriaTelefoneContato: { required: true, minlength: 2 },
            tParceriaCelularContato: { required: true, minlength: 2 },
            tParceriaEmailContato: { required: true, minlength: 2, email: true },
            tParceriaNumeroClientes: { required: true, minlength: 2, number: true },
            tParceriaOutros: { required: true, minlength: 2 },
            txtParceriaProdutos: { required: true, minlength: 2 }
            /*
            tEmpresa: { required: true, minlength: 2 },
            tNome: { required: true, minlength: 2 },
            tCNPJ: { required: true, minlength: 15, cnpj: true },
            tQtdFuncionario: { required: true, minlength: 1, maxlength: 5, number: true },
            tDepartamento: { required: true, minlength: 2 },
            tCidade: { required: true, minlength: 2 },
            tEstado: { required: true, minlength: 2 },
            tCep: { required: true, minlength: 8 },
            tTelefone: { required: true, minlength: 8, maxlength: 9, number: true },
            tEmail: { required: true, minlength: 3, email: true }*/
        },
messages: {
    tParceriaNome: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaRazao: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaCidade: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    sParceriaEstado: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaCidade: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaComplemento: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaCEP: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaTelefone: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaWebsite: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaNomeContato: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaSobrenomeContato: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaCargo: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaTelefoneContato: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaCelularContato: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaSkypeContato: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaEmailContato: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>', email: ' <span class="erroValidacao"> * </span>' },
    tParceriaNumeroClientes: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaAtuazao: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    tParceriaOutros: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    txtParceriaProdutos: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
    txtParceriaIdeia: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' }
     /*
            tEmpresa: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
            tNome: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
            tCNPJ: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao">*</span>', cnpj: '<span class="erroValidacao"> CNPJ inválido!</span>', number: ' <span class="erroValidacao">Apenas números.</span>' },
            tQtdFuncionario: { required: ' <span class="erroValidacao"> *</span>', minlength: ' <span class="erroValidacao">*</span>', maxlength: ' <span class="erroValidacao">*</span>', number: ' <span class="erroValidacao">Apenas números.</span>' },
            tDepartamento: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
            tCidade: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
            tEstado: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>' },
            tCep: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao">Informe um CEP válido!</span>', number: ' <span class="erroValidacao">Apenas números.</span>' },
            tTelefone: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>', maxlength: ' <span class="erroValidacao">*</span>', number: ' <span class="erroValidacao">Apenas números.</span>' },
            tEmail: { required: ' <span class="erroValidacao"> * </span>', minlength: ' <span class="erroValidacao"> * </span>', email: ' <span class="erroValidacao"> * </span>' } */
        }

    });

    //Fim validação
    $("#tParceriaCEP").mask("99999-999");
    $("#tParceriaTelefone").mask("(99)99999999?9");
    $("#tParceriaTelefoneContato").mask("(99)99999999?9");
    $("#tParceriaCelularContato").mask("(99)99999999?9");

}




function carregaClientes() {
    
        $.post("Handlers/Default.ashx", { action: "3" }, function (data) {
            if (data.status == "OK") {

                if (data.listaCliente.length > 0) {
                    $.each(data.listaCliente, function (index, itemData) {

                        var img = (
                             $(document.createElement("IMG")).attr({ src: "IMG/LogoClientes/" + itemData.nome }).css({ border: "1px solid #CCC", width: "120px", margin: "5px", padding: "5px" })
                            );

                        $("#divPrincipaisClientesLogos").append(img);

                    });
                } else {

                    $("#divPrincipaisClientes").hide();

                }

            } else {
                $("#divPrincipaisClientes").hide();
            }

        }, "json");

}
