$(document).ready(function () {

    $('#btn-beneficiarios').click(function () {
        alert("teste")
        ModalDialogBeneficiario();
    })

    var localproducts = [];

    $("#btn-salvar-beneficiario").click(function (e) {

        e.preventDefault();
        let data = {
            "NOME": $(this).find("#Nome").val(),
            "CPF": $(this).find("#CPF").val(),
        }
        
    })

    IncluirDadoTabela("028.152.782-27", "Joao da Silva")
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




function IncluirDadoTabela(cpf, nome) {
    var texto = `
        <tr>
          <td>${cpf}</td>
          <td>${nome}</td>
        </tr>
    `;

    $('.modal-body .table #body-table').append(texto)
}