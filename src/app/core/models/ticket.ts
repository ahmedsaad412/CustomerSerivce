export interface Ticket {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  commercialId: number;
  birthDate: Date;
  isDeleted: boolean;
  mode: boolean;
}
