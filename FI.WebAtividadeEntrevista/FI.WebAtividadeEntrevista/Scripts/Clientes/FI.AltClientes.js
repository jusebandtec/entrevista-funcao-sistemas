
$(document).ready(function () {

    if (obj) {
        $('#formCadastro #Nome').val(obj.Nome);
        $('#formCadastro #CEP').val(obj.CEP);
        $('#formCadastro #CPF').val(obj.CPF);
        $('#formCadastro #Email').val(obj.Email);
        $('#formCadastro #Sobrenome').val(obj.Sobrenome);
        $('#formCadastro #Nacionalidade').val(obj.Nacionalidade);
        $('#formCadastro #Estado').val(obj.Estado);
        $('#formCadastro #Cidade').val(obj.Cidade);
        $('#formCadastro #Logradouro').val(obj.Logradouro);
        $('#formCadastro #Telefone').val(obj.Telefone);
    }

    $('#btn-beneficiarios').click(function () {
        ModalDialogBeneficiario();
        listarBeneficiarios();
    })

    $('#formCadastro').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "NOME": $(this).find("#Nome").val(),
                "CEP": $(this).find("#CEP").val(),
                "CPF": $(this).find("#CPF").val(),
                "Email": $(this).find("#Email").val(),
                "Sobrenome": $(this).find("#Sobrenome").val(),
                "Nacionalidade": $(this).find("#Nacionalidade").val(),
                "Estado": $(this).find("#Estado").val(),
                "Cidade": $(this).find("#Cidade").val(),
                "Logradouro": $(this).find("#Logradouro").val(),
                "Telefone": $(this).find("#Telefone").val()
            },
            error:
                function (r) {
                    if (r.status == 400)
                        ModalDialog("Ocorreu um erro", r.responseJSON);
                    else if (r.status == 500)
                        ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
                },
            success:
                function (r) {
                    ModalDialog("Sucesso!", r)
                    $("#formCadastro")[0].reset();
                    window.location.href = urlRetorno;
                }
        });
    })
})

function ModalDialogBeneficiario() {
    var random = Math.random().toString().replace('.', '');
    var texto = `
            <div id="${random}" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">Beneficiarios</h4>
                    </div>
                    <div class="modal-body">
                        <form method="post" id="form-cadastro-beneficiario">
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label for="CPF">CPF:</label>
                                    <input required="required" type="text" class="form-control" id="CPF" name="CPF" maxlength="50">
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label for="Nome">Nome:</label>
                                    <input required="required" type="text" class="form-control" id="nome" name="nome" maxlength="50" placeholder="Ex.: Joao da Silva">
                                </div>
                            </div>
                            <div class="col-lg-1">
                                <button type="button" class="btn btn-sm btn-success" id="btn-salvar-beneficiario" style="margin-top:25px">Salvar</button>
                            </div>
                        </form>
                        <table class="table" id="table-beneficiarios">
                           <thead class="thead-dark">
                                <tr>
                                    <th scope="col">CPF</th>
                                    <th scope="col">Nome</th>
                                </tr>
                            </thead>
                            <tbody id="body-table">
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div> <!-- /.modal -->
            `;

    $('body').append(texto);
    $('#' + random).modal('show');
}

function listarBeneficiarios() {
    $('#table-beneficiarios').jtable({
        title: 'Beneficiarios',
        paging: true, //Enable paging
        pageSize: 5, //Set page size (default: 10)
        sorting: true, //Enable sorting
        defaultSorting: 'Nome ASC', //Set default sorting,
        idCliente: obj.Id,
        actions: {
            listAction: urlBeneficiarioList,
        },
        fields: {
            Nome: {
                title: 'Nome',
                width: '50%'
            },
            Email: {
                title: 'Email',
                width: '35%'
            },
            Alterar: {
                title: '',
                display: function (data) {
                    return '<button onclick="window.location.href=\'' + urlAlteracao + '/' + data.record.Id + '\'" class="btn btn-primary btn-sm">Alterar</button>';
                }
            }
        }
    });
}


function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}
