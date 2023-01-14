export class EmployeeDTO {
    id!: number;
    fName!: string;
    lName!: string;
    dob!: string;
    salary!: number;
    phoneNumber!: string;
    email!: string;
    address!: AddressDTO;
}

export class AddressDTO {
    id!: number;
    street!: string;
    city!: string;
    postalCode!: string;
    province!: string;
    country!: string;
}
