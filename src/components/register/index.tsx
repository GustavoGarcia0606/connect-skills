import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "./styles";

export function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const canSubmit =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    !loading;

  const handleRegister = async () => {
    try {
      setLoading(true);
     setRegisterError("");
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: { name: name.trim() }
        },
      });
      if (error) {
        setRegisterError(error.message || "Falha ao cadastrar. Verifique a validação dos campos!");
        return;
      }
      router.replace("/(auth)"); // Alterar redirecionamento para /(auth)/datauser
      return data;
    } catch (e: any) {
      setRegisterError(e.message || "Falha ao cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.logo}>Cadastro</Text>
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>
          Preencha os campos abaixo para se cadastrar
        </Text>

        
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nome completo"
          placeholderTextColor="#9baec8"
          autoCapitalize="words"
        />

       
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          placeholderTextColor="#9baec8"
          keyboardType="email-address"
          autoCapitalize="none"
        />

       
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          placeholderTextColor="#9baec8"
          secureTextEntry={!showPassword}
        />

      
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirmar senha"
          placeholderTextColor="#9baec8"
          secureTextEntry={!showPassword}
        />

        {registerError ? (
          <Text style={styles.error}>{registerError}</Text>
        ) : null}

       
        <TouchableOpacity
          style={[styles.button, !canSubmit && styles.buttonDisabled]}
          disabled={!canSubmit}
          onPress={handleRegister}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Cadastrar</Text>
          )}
        </TouchableOpacity>

       
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.toggleText}>
            {showPassword ? "🔒 Ocultar senha" : "👁️ Mostrar senha"}
          </Text>
        </TouchableOpacity>

       
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("./(tabs)/home")}
        >
          <Text style={styles.backButtonText}>← Voltar para o login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
