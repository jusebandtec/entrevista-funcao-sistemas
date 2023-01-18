using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAtividadeEntrevista.Models
{
    public class BeneficiarioModel
    {

        public long Id { get; set; }
        public long IdCliente { get; set; }

        [Required(ErrorMessage = "CPF obrigatório")]
        [CustomValidationCPF(ErrorMessage = "CPF inválido")]
        public string CPF { get; set; }

        [Required]
        public string Nome { get; set; }
    }
}
