type UserUpdate = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserUpdate>) {
console.log("Updating user with:", initialValues);}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

// Ви маєте форму реєстрації користувачів. 
// Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю.
// Однак вам не завжди потрібно заповнити всі поля.
// Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.

// Використовуючи утиліту Partial та generics,
// виправте тип параметра функції так, щоб уникнути помилок типізації.

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// }

// function createOrUpdateUser(initialValues: User) {
//   // Оновлення користувача
// }

// createOrUpdateUser({ 
//   email: 'user@mail.com', 
//   password: 'password123' 
// });