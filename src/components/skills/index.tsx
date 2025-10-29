import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
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

    return (
        <View style={styles.container}>
            <Pressable onPress={() => router.back()}><Text>Voltar</Text></Pressable>
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

            <View style={styles.resultadoContainer}>
                <Text style={styles.resultadoTexto}>
                    📘 Quer aprender: {selectedAprender || "—"}
                </Text>
                <Text style={styles.resultadoTexto}>
                    🎓 Ensina: {selectedEnsinar || "—"}
                </Text>
            </View>
        </View>
    );
}
