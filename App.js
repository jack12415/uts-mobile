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

  const bagianAtas = (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lab. Mobile Computing</Text>
        <Text style={styles.headerSub}>Jacky Lian - 2431033 - UTS</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.sectionRow}>
          <View style={styles.sectionNo}><Text style={styles.sectionNoText}>1</Text></View>
          <Text style={styles.sectionTitle}>Custom Reusable Component & Dynamic Props</Text>
        </View>

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

        <View style={[styles.sectionRow, { marginTop: 22 }]}>
          <View style={styles.sectionNo}><Text style={styles.sectionNoText}>2</Text></View>
          <Text style={styles.sectionTitle}>Real-Time Search Filter with FlatList & Static Data</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Cari nama mahasiswa..."
          placeholderTextColor="#94A3B8"
          value={keyword}
          onChangeText={setKeyword}
        />
        <Text style={styles.count}>
          Menampilkan {hasil.length} dari {DAFTAR_MAHASISWA.length} mahasiswa
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={hasil}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={bagianAtas}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.nama.charAt(0)}</Text>
            </View>
            <View>
              <Text style={styles.nama}>{item.nama}</Text>
              <Text style={styles.prodi}>{item.prodi}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Data tidak ditemukan!</Text>}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F5F9' },
  header: {
    backgroundColor: '#0F172A',
    paddingTop: 52,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: { color: '#FFFFFF', fontSize: 22, fontWeight: '800' },
  headerSub: { color: '#94A3B8', fontSize: 13, marginTop: 4 },
  body: { paddingHorizontal: 16, paddingTop: 20 },
  sectionRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  sectionNo: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  sectionNoText: { color: '#FFFFFF', fontWeight: '800' },
  sectionTitle: { flex: 1, fontSize: 15, fontWeight: '700', color: '#0F172A' },
  detail: {
    backgroundColor: '#DBEAFE',
    color: '#1E40AF',
    padding: 12,
    borderRadius: 12,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#CBD5E1',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#0F172A',
  },
  count: { color: '#64748B', fontSize: 12, marginTop: 8, marginBottom: 10 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#E0E7FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: { color: '#3730A3', fontWeight: '800', fontSize: 16 },
  nama: { fontSize: 16, fontWeight: '700', color: '#0F172A' },
  prodi: { fontSize: 13, color: '#64748B', marginTop: 2 },
  empty: { textAlign: 'center', color: '#64748B', marginTop: 20, fontSize: 16 },
});