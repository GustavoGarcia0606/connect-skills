import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Pressable,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { styles } from "./styles";

export function Skills() {
  const router = useRouter();
  const [selectedAprender, setSelectedAprender] = useState("");
  const [selectedEnsinar, setSelectedEnsinar] = useState("");

  const opcoes = [
    { key: "1", value: "Programação" },
    { key: "2", value: "Música" },
    { key: "3", value: "Culinária" },
    { key: "4", value: "Ciências Exatas" },
    { key: "5", value: "Ciências Humanas" },
    { key: "6", value: "Edição de imagem e vídeo" },
  ];

  const handleGoHome = () => {
    if (selectedAprender && selectedEnsinar) {
      router.push("/(tabs)/home");
    } else {
      alert("Selecione o que quer aprender e o que ensina antes de continuar!");
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão Voltar */}
      <Pressable onPress={() => router.back()}>
        <Text style={{ color: "#2f80ed", marginBottom: 10 }}>← Voltar</Text>
      </Pressable>

      {/* Campo 1 */}
      <Text style={styles.label}>O que quer aprender?</Text>
      <SelectList
        setSelected={setSelectedAprender}
        data={opcoes}
        save="value"
        placeholder="Selecione uma opção"
        boxStyles={styles.box}
        dropdownStyles={styles.dropdown}
        inputStyles={styles.input}
      />

      {/* Campo 2 */}
      <Text style={styles.label}>O que ensina?</Text>
      <SelectList
        setSelected={setSelectedEnsinar}
        data={opcoes}
        save="value"
        placeholder="Selecione uma opção"
        boxStyles={styles.box}
        dropdownStyles={styles.dropdown}
        inputStyles={styles.input}
      />

      {/* Resultado selecionado */}
      <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoTexto}>
          📘 Quer aprender: {selectedAprender || "—"}
        </Text>
        <Text style={styles.resultadoTexto}>
          🎓 Ensina: {selectedEnsinar || "—"}
        </Text>
      </View>

      {/* Botão Ir para Home */}
      <TouchableOpacity style={styles.botao} onPress={handleGoHome}>
        <Text style={styles.botaoTexto}>Ir para Home</Text>
      </TouchableOpacity>
    </View>
  );
}
