import { email, required } from "@/common/utils/ruleUtils";

interface UserDTO {
  id: number | null;
  documentType: string;
  documentNumber: string;
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  phoneNumber: string;
  email: string;
  password?: string;
}

const UserRules = {
  documentNumber: [required],
  name: [required],
  paternalSurname: [required],
  maternalSurname: [required],
  phoneNumber: [required],
  email: [required, email],
};

const initUserValues = (): UserDTO => ({
  id: null,
  documentType: "",
  documentNumber: "",
  name: "",
  paternalSurname: "",
  maternalSurname: "",
  phoneNumber: "",
  email: "",
});

export { type UserDTO, UserRules, initUserValues };
