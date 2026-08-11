import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ItemCompra from './ItemCompra';

export default function App() {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState([]);

  // Exercício 3: Adicionar item
  function adicionarItem() {
    if (texto.trim() === '') return;

    const novoItem = {
      id: Date.now().toString(),
      nome: texto.trim(),
      comprado: false, // Exercício 4
    };

    setItens([...itens, novoItem]);
    setTexto('');
  }

  // Exercício 4: Toggle comprado
  function toggleComprado(id) {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  }

  // Exercício 5: Remover item
  function removerItem(id) {
    setItens(itens.filter((item) => item.id !== id));
  }

  // Exercício 5 (extra): Contador de itens faltando
  const faltamComprar = itens.filter((item) => !item.comprado).length;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛒 Lista de Compras</Text>

      {/* Exercício 2: Campo controlado */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item da lista"
          value={texto}
          onChangeText={(novoTexto) => setTexto(novoTexto)}
        />
        {/* Exercício 3: Botão Adicionar */}
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarItem}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Exercício 5 (extra): Contador */}
      <Text style={styles.contador}>
        Faltam comprar: {faltamComprar} item{faltamComprar !== 1 ? 's' : ''}
      </Text>

      {/* Exercício 5: Lista vazia ou renderização */}
      <ScrollView style={styles.lista}>
        {itens.length === 0 ? (
          <Text style={styles.listaVazia}>Sua lista está vazia!</Text>
        ) : (
          itens.map((item) => (
            <ItemCompra
              key={item.id}
              nome={item.nome}
              comprado={item.comprado}
              onToggle={() => toggleComprado(item.id)}
              onRemover={() => removerItem(item.id)}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
  botaoAdicionar: {
    backgroundColor: '#0984e3',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contador: {
    fontSize: 16,
    color: '#636e72',
    marginBottom: 12,
  },
  lista: {
    flex: 1,
  },
  listaVazia: {
    fontSize: 18,
    color: '#b2bec3',
    textAlign: 'center',
    marginTop: 40,
  },
});