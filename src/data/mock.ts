import { faker } from '@faker-js/faker/locale/en';

export function mockUsers(length: number) {
  const createRowData = rowIndex => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const gender = faker.name.gender(true) as 'female' | 'male';
    const name = faker.name.findName(firstName, lastName, gender);
    const avatar = faker.image.avatar();

    const city = faker.address.city();
    const street = faker.address.street();
    const email = faker.internet.email();
    const postcode = faker.address.zipCode();
    const phone = faker.phone.number();
    const amount = faker.finance.amount(1000, 90000);

    const age = Math.floor(Math.random() * 30) + 18;
    const stars = Math.floor(Math.random() * 10000);
    const followers = Math.floor(Math.random() * 10000);
    const rating = 2 + Math.floor(Math.random() * 3);
    const progress = Math.floor(Math.random() * 100);

    return {
      id: rowIndex + 1,
      name,
      firstName,
      lastName,
      avatar,
      city,
      street,
      postcode,
      email,
      phone,
      gender,
      age,
      stars,
      followers,
      rating,
      progress,
      amount
    };
  };

  return Array.from({ length }).map((_, index) => {
    return createRowData(index);
  });
}
