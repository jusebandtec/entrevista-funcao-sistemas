using FI.AtividadeEntrevista.DAL;
using FI.AtividadeEntrevista.DML;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FI.AtividadeEntrevista.BLL
{
    public class BoBeneficiario
    {
        public long Incluir(Beneficiario beneficiario)
        {
            DaoBeneficiario daoBeneficiario = new DaoBeneficiario();

            if (VerificarExistencia(beneficiario.IdCliente, beneficiario.CPF))
                return -1;

           return daoBeneficiario.Incluir(beneficiario);
        }

        public bool VerificarExistencia(long id, string CPF)
        {
            DAL.DaoBeneficiario beneficiario = new DAL.DaoBeneficiario();
            return beneficiario.VerificarExistencia(id, CPF);
        }

        public List<DML.Beneficiario> Pesquisa(int iniciarEm, int quantidade, string campoOrdenacao, bool crescente, out int qtd, long idCliente)
        {
            DAL.DaoBeneficiario cli = new DAL.DaoBeneficiario();
            return cli.Pesquisa(iniciarEm, quantidade, campoOrdenacao, crescente, out qtd, idCliente);
        }
    }
}
