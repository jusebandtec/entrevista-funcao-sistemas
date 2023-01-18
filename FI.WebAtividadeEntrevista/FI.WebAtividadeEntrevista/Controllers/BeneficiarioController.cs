using FI.AtividadeEntrevista.BLL;
using FI.AtividadeEntrevista.DML;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using WebAtividadeEntrevista.Models;

namespace WebAtividadeEntrevista.Controllers
{
    public class BeneficiarioController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }


        public ActionResult Incluir()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Incluir(BeneficiarioModel model)
        {
            var bo = new BoBeneficiario();

            if (!this.ModelState.IsValid)
            {
                List<string> erros = (from item in ModelState.Values
                                      from error in item.Errors
                                      select error.ErrorMessage).ToList();

                Response.StatusCode = 400;
                return Json(string.Join(Environment.NewLine, erros));
            }

            var modelId = bo.Incluir(new FI.AtividadeEntrevista.DML.Beneficiario 
            { 
                IdCliente = model.IdCliente,
                CPF = model.CPF,
                Nome = model.Nome
            });

            if (modelId == -1)    
                return Json(string.Join(Environment.NewLine, "CPF Já cadastrado."));

            model.Id = modelId;

            return Json("Beneficiario incluido com sucesso");
        }
    }
}
