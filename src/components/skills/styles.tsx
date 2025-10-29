import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fb",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#e6e9ef",
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0f1724",
    marginBottom: 8,
    marginTop: 20,
  },

  box: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
  },

  input: {
    fontSize: 15,
    color: "#0f1724",
  },

  resultadoContainer: {
    marginTop: 24,
    backgroundColor: "#f6f9ff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e6e9ef",
    padding: 14,
  },

  resultadoTexto: {
    fontSize: 15,
    color: "#0f1724",
    marginVertical: 4,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#eef2ff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 6,
  },

  badgeText: {
    color: "#2f80ed",
    fontWeight: "600",
    fontSize: 14,
  },
});
