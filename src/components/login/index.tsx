import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export  function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("aluno@teste.com");
  const [password, setPassword] = useState("123@senac");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const canSubmit = email.trim() !== "" && password.trim() !== "" && !loading;

  const handleSignIn = async () => {
    try {
      setLoading(true);
      setLoginError("");

    
      await new Promise((r) => setTimeout(r, 600));

      if (email.toLowerCase() === "aluno@teste.com" && password === "123@senac") {
        console.log("✅ Login simulado com sucesso!");
        
        router.push("./(auth)/skills");
      } else {
        setLoginError("E-mail ou senha inválidos!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoiding}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.subtitle}>
              Aprenda e ensine — conecte-se com quem compartilha habilidades.
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="exemplo@gmail.com"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Senha</Text>
              </View>

              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="********"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                  accessibilityLabel={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={24}
                    color="#6b7280"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => Alert.alert("Recuperar senha", "Fluxo de reset a implementar.")}
              >
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={handleSignIn}
              disabled={!canSubmit}
              style={[styles.signInButton, !canSubmit && styles.signInButtonDisabled]}
              accessibilityLabel="Entrar no aplicativo"
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.signInButtonText}>Entrar</Text>
              )}
            </TouchableOpacity>

            {!!loginError && <Text style={styles.loginError}>{loginError}</Text>}

            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>ou</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text style={styles.signUpText}>
                Não possui uma conta? <Text style={styles.signUpLink}>Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
