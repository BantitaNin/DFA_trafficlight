# DFA Representation
dfa = {
    "Qs": {"1": "G1", "2": "G2", "3": "G3", "4": "G4", "5": "G5", "6": "G6"},
    "G1": {"2": "G1_2", "3": "G1_3", "4": "G1_4", "5": "G1_5", "1": "E", "6": "E"},
    "G1_2": {"5": "G1_2_5", "1": "E", "2": "E", "3": "E", "4": "E", "6": "E"},
    "G1_3": {"4": "G1_3_4", "1": "E", "2": "E", "3": "E", "5": "E", "6": "E"},
    "G1_4": {"5": "G1_4_5", "1": "E", "2": "E", "3": "E", "4": "E", "6": "E"},
    "G1_5": {"1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E"},
    "G1_2_5": {"1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E"},
    "G1_3_4": {"1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E"},
    "G1_4_5": {"1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E"},
    "G2": {"5": "G2_5", "1": "E", "2": "E", "3": "E", "4": "E", "6": "E"},
    "G2_5": {"1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E"},
    "G3": {"4": "G3_4", "1": "E", "2": "E", "3": "E", "5": "E", "6": "E"},
    "G3_4": {"1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E"},
    "G4": {"5": "G4_5", "6": "G4_6", "1": "E", "2": "E", "3": "E", "4": "E"},
    "G4_5": {"6": "G4_5_6", "1": "E", "2": "E", "3": "E", "4": "E", "5": "E"},
    "G4_6": {"1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E"},
    "G4_5_6": {"1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E"},
    "G5": {"6": "G5_6", "1": "E", "2": "E", "3": "E", "4": "E", "5": "E"},
    "G5_6": {"1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E"},
    "G6": {"1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E"},
    "E": {"1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E"}
}

def has_duplicate(input_str):
    return len(input_str) != len(set(input_str))

def is_valid_input(input_str):
    return all(char in '123456' for char in input_str)

# ฟังก์ชันตรวจสอบว่า input ผ่าน DFA หรือไม่
def is_accepted(input_string):
    current_state = "Qs"
    for symbol in input_string:
        next_state = dfa[current_state].get(symbol)
        if next_state is None or next_state == "E":
            return False, f"มีเลนที่ไม่สามารถใช้งานร่วมกันได้: {symbol}"
        current_state = next_state

    if current_state in ["Qs", "E"]:
        return False, "ไม่มีการเลือกเลนหรือเลนที่เลือกไม่สอดคล้องกับกฎ"
    return True, "สามารถใช้งานพร้อมกันได้"

# ฟังก์ชันสำหรับเรียง input จากน้อยไปมาก
def sort_input_ascending(input_str):
    return ''.join(sorted(input_str))

def main():
    while True:
        input_str = input("กรุณาป้อน input (หรือ 'exit' เพื่อออก): ")
        if input_str.lower() == 'exit':
            break

        if not is_valid_input(input_str):
            print("กรุณาป้อน input เฉพาะเลข 1-6 เท่านั้น")
            continue

        if has_duplicate(input_str):
            print("ไม่ควรใส่เลนซ้ำ")
            continue

        input_str = sort_input_ascending(input_str)
        result, reason = is_accepted(input_str)

        if result:
            print(reason)
        else:
            print(reason)

if __name__ == "__main__":
    main()