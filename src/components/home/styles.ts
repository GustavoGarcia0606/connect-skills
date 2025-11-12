
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    width: 320,
    height: 450,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827', 
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
  },
});
