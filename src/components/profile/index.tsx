import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { styles } from './styles';

export function ProfileScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [habilidade, setHabilidade] = useState('');
  const [loading, setLoading] = useState(false);

  const habilidades = [
    { key: '1', value: 'Inglês' },
    { key: '2', value: 'Excel' },
    { key: '3', value: 'Violão' },
    { key: '4', value: 'Programação' },
    { key: '5', value: 'Fotografia' },
  ];

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // apenas visual
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Seu Perfil</Text>
        <Text style={styles.subtitle}>Gerencie suas informações pessoais</Text>
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        {/* Nome */}
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome completo"
          placeholderTextColor="#9CA3AF"
          value={nome}
          onChangeText={setNome}
        />

        {/* E-mail */}
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="voce@exemplo.com"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.helperText}>
          Alterar e-mail pode exigir confirmação.
        </Text>

        {/* Nova Senha */}
        <Text style={styles.label}>Nova senha (opcional)</Text>
        <View >
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="********"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showSenha}
            value={senha}
            onChangeText={setSenha}
            
          />
          <TouchableOpacity onPress={() => setShowSenha(!showSenha)}>
            <Ionicons
              name={showSenha ? 'eye-off' : 'eye'}
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>

        {/* Habilidade */}
        <Text style={styles.label}>Habilidade que você ensina</Text>
        <SelectList
          setSelected={setHabilidade}
          data={habilidades}
          save="value"
          placeholder="Ex.: Inglês, Excel, Violão..."
          boxStyles={styles.selectBox}
          inputStyles={styles.selectText}
          dropdownStyles={styles.dropdown}
          dropdownTextStyles={styles.dropdownText}
        />
      </View>

      {/* Botão de ação */}
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        disabled={loading}
        onPress={handleSave}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Salvar alterações</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}
