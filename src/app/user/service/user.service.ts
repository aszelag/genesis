import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): Observable<User[]> {
    return of(ELEMENT_DATA);
  }
}

const ELEMENT_DATA: User[] = [
  { pesel: "91091605001", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605002", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605003", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605004", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605005", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605006", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605007", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605008", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605009", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605010", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605011", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605012", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605013", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605014", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605015", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605016", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605017", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605018", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605019", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605020", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605021", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605022", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605023", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605024", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
  { pesel: "91091605025", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" }
];