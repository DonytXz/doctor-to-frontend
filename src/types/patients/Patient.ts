export interface ContactIformation {
  email: string;
  phone: number;
  emergencyContact: number;
}

export interface AdressInformation {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface PersonalInfromation {
  name: string;
  lastName: string;
  gender: string;
  religion: string;
  datheOfBirth: Date;
  maritalStatus: string;
  ocupation: string;
  bloodType: string;
  age: number;
  curp: string;
}

export interface Patient {
  personalInfromation: PersonalInfromation;
  address: AdressInformation;
  contactIformation: ContactIformation;
}
