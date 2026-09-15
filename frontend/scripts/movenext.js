export const movenext = (current, next) => {
  current.value = current.value.toUpperCase();
  if (current.value.length === current.maxLength) {
    document.getElementById(next).focus();
  }
};

export const hoje = new Date().toISOString().split("T")[0];
import { useState } from "react";

export const useAno = () => {
  const [anofabricado, setAnofabricado] = useState("2010");
  const [anomodelo, setAnomodelo] = useState("2010");
  const [modeloEditado, setModeloEditado] = useState(false);

  const handleAnoFabricadoChange = (e) => {
    const valor = e.target.value;
    setAnofabricado(valor);
    if (!modeloEditado) {
      setAnomodelo(valor);
    }
  };

  const handleAnoModeloChange = (e) => {
    setAnomodelo(e.target.value);
    setModeloEditado(true);
  };

  return {
    anofabricado,
    anomodelo,
    handleAnoFabricadoChange,
    handleAnoModeloChange,
  };
};
