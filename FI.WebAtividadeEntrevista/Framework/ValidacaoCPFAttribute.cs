using Framework;
using System;
using System.ComponentModel.DataAnnotations;

namespace Framework
{
    public class ValidacaoCPFAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            if (!Cpf.ValidarCPF((string)value))
                return false;
            else
                return true;
        }
    }
}