
import { Colors } from "@/constants/Colors";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface UIDatePickerInputProps {
  label: string;
  value: string; // Expected format: YYYY-MM-DD
  handleChange: (date: string) => void;
  placeholder?: string;
  minimumDate?: Date;
  maximumDate?: Date;
}

export const UIDatePickerInput: React.FC<UIDatePickerInputProps> = ({
  label,
  value,
  handleChange,
  placeholder = "Selecione uma data",
  minimumDate,
  maximumDate,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  // Parse value to Date or fallback to today
  const getDateValue = () => {
    if (value) {
      const [year, month, day] = value.split("-").map(Number);
      return new Date(year, month - 1, day);
    }
    return new Date();
  };

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowPicker(false);
    if (event.type === "set" && selectedDate) {
      // Format date as YYYY-MM-DD
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const day = String(selectedDate.getDate()).padStart(2, "0");
      handleChange(`${year}-${month}-${day}`);
    }
  };

  return (
    <View>
      <Text
        style={styles.label}
        accessible={true}
        accessibilityRole="text"
        accessibilityLabel={label}
      >
        {label}
      </Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowPicker(true)}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={label}
        activeOpacity={0.7}
      >
        <Text style={{ color: value ? Colors.black : Colors.gray }}>
          {value
            ? value.split("-").reverse().join("/")
            : placeholder}
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={getDateValue()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.darkgreen,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 12,
    backgroundColor: Colors.white,
    marginBottom: 12,
    justifyContent: "center",
  },
});

export default UIDatePickerInput;
