import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ItemCompra({ nome, comprado, onToggle, onRemover }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.itemTouch}>
        <Text style={[styles.texto, comprado && styles.textoComprado]}>
          {nome}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemover} style={styles.botaoRemover}>
        <Text style={styles.textoRemover}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTouch: {
    flex: 1,
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
  textoComprado: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  botaoRemover: {
    backgroundColor: '#ff6b6b',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  textoRemover: {
    color: '#fff',
    fontWeight: 'bold',
  },
});