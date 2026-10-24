import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import InfoCard from './src/components/InfoCard';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function App() {
  const [detail, setDetail] = useState('');

  const [keyword, setKeyword] = useState('');
  const hasil = DAFTAR_MAHASISWA.filter((m) =>
    m.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Soal 1: Custom Reusable Component & Dynamic Props</Text>

      <InfoCard
        title="Tugas Mobile Game Development"
        status="selesai"
        onPress={() => setDetail('Detail dibuka: Tugas Mobile Game Development')}
      />
      <InfoCard
        title="Proyek Pembuatan Aplikasi Mobile"
        status="proses"
        onPress={() => setDetail('Detail dibuka: Proyek Pembuatan Aplikasi Mobile')}
      />
      {detail !== '' && <Text style={styles.detail}>{detail}</Text>}


      <Text style={[styles.heading, { marginTop: 30 }]}>Soal 2: Real-Time Search Filter with FlatList & Static Data</Text>
      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <FlatList
        data={hasil}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.prodi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Data tidak ditemukan!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6', padding: 16, paddingTop: 48 },
  heading: { fontSize: 18, fontWeight: '700', marginBottom: 10, marginTop: 4 },
  detail: {
    backgroundColor: '#DBEAFE',
    color: '#1E40AF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  item: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 14, marginBottom: 8 },
  nama: { fontSize: 16, fontWeight: '600' },
  prodi: { fontSize: 14, color: '#6B7280' },
  empty: { textAlign: 'center', color: '#6B7280', marginTop: 20, fontSize: 16 },
});