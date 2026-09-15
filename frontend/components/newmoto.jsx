import React, { useState } from "react";
import { movenext, hoje, useAno } from "../scripts/movenext.js";
const newmoto = () => {
  const [btnvendida, setbtnvendida] = useState(false);
  const [jogoderoda, setjogoderoda] = useState(false);
  const [modelo, setmodelo] = useState("");
  const [cc, setcc] = useState("");
  const [versao, setversao] = useState("");
  const [placa, setplaca] = useState("");
  const [cidade, setcidade] = useState("");
  const [km, setkm] = useState("");
  const [cor, setcor] = useState("");
  const [modeloEditado, setModeloEditado] = useState(false);
  const [comprador, setcomprador] = useState("");
  const [refcomprador, setrefcomprador] = useState("");
  const [dtcomp, setdtcomp] = useState(hoje);
  var [vlcomp, setvlcomp] = useState("");
  const [vendida, setvendida] = useState("");
  const [refvendida, setrefvendida] = useState("");
  const [dtvend, setdtvend] = useState(hoje);
  const [vlvend, setvlvend] = useState("");

  const {
    anofabricado,
    anomodelo,
    handleAnoFabricadoChange,
    handleAnoModeloChange,
  } = useAno();

  const handleSbubmit = (e) => {
    e.preventDefalut();
  };

  return (
    <form
      onSubmit={handleSbubmit}
      className="flex w-full max-w-7xl flex-col items-center justify-center rounded-2xl border-2 border-gray-400 shadow-md shadow-orange-300"
    >
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 shadow-gray-700">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center rounded-2xl bg-orange-100 p-6">
          <h1>Cadastrar modelo</h1>

          <div className="input-box flex flex-col justify-center gap-2 rounded-2xl p-4">
            <label htmlFor="modelo">Qual é o modelo:</label>
            <div className="modelo flex flex-row">
              <select
                name="modelo"
                id="modelo"
                title="Modelo da motocicleta "
                className="flex flex-row rounded-2xl border text-center"
              >
                <option value="biz">Biz</option>
                <option value="pop">Pop</option>
                <option value="start">Start</option>
                <option value="fan">Fan</option>
                <option value="titan">Titan</option>
                <option value="bros">Bros</option>
                <option value="xre">Xre</option>
                <option value="shineray">Shineray</option>
              </select>
              <select
                name="cc"
                id="cc"
                title="Cilindrada em cc"
                className="flex flex-row rounded-2xl border text-center"
              >
                <option value="100">100</option>
                <option value="110">110</option>
                <option value="125">125</option>
                <option value="150">150</option>
                <option value="160">160</option>
                <option value="190">190</option>
                <option value="50">50</option>
              </select>
              <select
                name="versao"
                id="versao"
                title="Versão da motocicleta"
                className="flex flex-row rounded-2xl border"
              >
                <option value="i">i</option>
                <option value="ks">KS</option>
                <option value="es">ES</option>
                <option value="esd">ESD</option>
                <option value="ex">EX</option>
              </select>
            </div>
            <label htmlFor="placa">Placa :</label>
            <div className="placa">
              <input
                className="rounded-2xl border text-center"
                type="text"
                name="letra"
                id="letra"
                placeholder="letra"
                onInput={(e) => movenext(e.target, "numeros")}
                size="3"
                maxLength="3"
              />
              -
              <input
                className="rounded-2xl border text-center"
                type="text"
                name="numeros"
                id="numeros"
                placeholder="numeros"
                size="4"
                maxLength="4"
                onInput={(e) => movenext(e.target, "uf")}
              />
              <select
                name="uf"
                id="uf"
                title="uf"
                className="rounded-2xl border text-center"
              >
                <option value="se">SE</option>
                <option value="ba">BA</option>
                <option value="al">AL</option>
              </select>
            </div>
            <label htmlFor="cidade">cidade</label>
            <div className="cidade">
              <input
                className="rounded-2xl border text-center"
                type="text"
                name="cidade"
                id="cidade"
                onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
                placeholder="qual é a cidade"
              />
              km :
              <input
                className="max-w-24 rounded-2xl border text-center"
                type="number"
                name="km"
                id="km"
                placeholder="km"
                maxLength="7"
                step="1000"
              />
            </div>
            <label htmlFor="cor">cor</label>
            <div className="cor">
              <select
                name="cor"
                id="cor"
                className="rounded-2xl border text-center"
              >
                <option value="preta">Preta</option>
                <option value="vermelha">Vermelha</option>
                <option value="azul">Azul</option>
                <option value="branca">Branca</option>
                <option value="prata">Prata</option>
                <option value="verde">Verde</option>
                <option value="amarela">Amarela</option>
                <option value="laranja">Laranja</option>
                <option value="roxa">Roxa</option>
                <option value="rosa">rosa</option>
              </select>
            </div>
            <label htmlFor="anos"></label>
            <div className="anos">
              Ano fabricado
              <input
                className="rounded-2xl border text-center"
                type="number"
                name="ano fabricado"
                id="anofabricado"
                min="1985"
                max="2099"
                step="1"
                value={anofabricado}
                onChange={handleAnoFabricadoChange}

                title="anofabricado"
              />
              Ano modelo
              <input
                className="rounded-2xl border text-center"
                type="number"
                name="ano modelo"
                id="anomodelo"
                min="1985"
                max="2099"
                step="1"
                value={anomodelo}
                onChange={handleAnoModeloChange}
                title="anomodelo"
              />
            </div>
            <div>
              <h1></h1>
            </div>
            <label htmlFor="comprador">A moto foi comprada a:</label>
            <div className="comprada">
              <input
                className="rounded-2xl border text-center"
                type="text"
                name="comprador"
                id="comprador"
                onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
                placeholder="comprador"
              />
              <input
                className="rounded-2xl border text-center"
                type="text"
                name="refcomprador"
                id="refcomprador"
                onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
                placeholder="referencia comprador"
              />
              <div className="data comprada">
                <input
                  className="rounded-2xl border text-center"
                  type="date"
                  name="data comprada"
                  id="dtcomp"
                  defaultValue={hoje}
                  title="dtcomp"
                />
                <input
                  className="rounded-2xl border text-center"
                  type="number"
                  name="preco comprada"
                  id="vlcomp"
                  size="6"
                  min="2000"
                  placeholder="valor comprada"
                  step="500"
                  title="preco comprada"
                />
              </div>
            </div>

            <div>
              <h1></h1>
            </div>
            <div className="dadosvendida">
              <label htmlFor="vendida">
                A moto foi vendida
                <input
                  className="rounded-2xl border text-center"
                  type="checkbox"
                  name="btnvenda"
                  id="btnvenda"
                  onChange={(e) => setbtnvendida(e.target.checked)}
                />
              </label>
              <div
                className="dadosvenda"
                id="dadosvenda"
                style={{
                  display: btnvendida ? "block" : "none",
                  opacity: btnvendida ? "1" : "0.5",
                  pointerEvents: btnvendida ? "auto" : "none",
                }}
              >
                <input
                  className="rounded-2xl border text-center"
                  type="text"
                  name="vendida"
                  id="vendida"
                  onInput={(e) =>
                    (e.target.value = e.target.value.toUpperCase())
                  }
                  placeholder="vendida á"
                />
                <input
                  className="rounded-2xl border text-center"
                  type="text"
                  name="refvendida"
                  id="refvendida"
                  onInput={(e) =>
                    (e.target.value = e.target.value.toUpperCase())
                  }
                  placeholder="referencia de venda"
                />
                <div>
                  <input
                    className="rounded-2xl border text-center"
                    type="date"
                    name="datavenda"
                    id="datavenda"
                    title="dtvend"
                  />
                  <input
                    className="rounded-2xl border text-center"
                    type="number"
                    name="precovendida"
                    id="valorvenda"
                    min="0"
                    size="6"
                    placeholder="valor vendida"
                    step="500"
                    title="preco vendida"
                  />
                </div>
              </div>
            </div>
            <div className="acessorio">
              <input
                className="rounded-2xl border"
                type="checkbox"
                name="jogoderoda"
                id="jogoderoda"
                title="jogoderoda"
                onChange={(e) => setjogoderoda(e.target.checked)}
              />
              Tem Jogo de Roda
            </div>
            <div>
              <div className="photolink flex gap-2 py-2">
                <input
                  className="min-w-auto truncate rounded-2xl border text-center"
                  type="url"
                  name="photolink"
                  id="photolink"

                  placeholder="enviar foto pelo link"
                />
                <button className="min-w-32 rounded-2xl border bg-gray-100 text-center transition hover:cursor-pointer hover:bg-gray-500">
                  enviar foto
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <label
                  htmlFor="file"
                  className="flex aspect-square items-center justify-center gap-2 rounded-2xl border bg-orange-200 hover:cursor-pointer hover:bg-orange-300"
                >
                  upload
                  <input type="file" id="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
          <div className="butoes" id="butoes">
            <button
              className="btncadastrar w-full min-w-64 rounded-2xl border bg-orange-300 text-center shadow-md shadow-orange-400 transition hover:cursor-pointer hover:bg-orange-500"
              id="btncadastrar"
            >
              Cadastrar
            </button>
          </div>
        </div>

        <h1 className="teste" id="teste"></h1>
      </div>
    </form>
  );
};

export default newmoto;
