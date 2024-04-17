import bcrypt from "bcryptjs";

export function encrypt(password: string, salt: number = 10): Promise<string> {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(hash);
      }
    });
  });
}

export function compareHashedPasswords(
  hashed: string,
  password: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashed, (err, result) => {
      if (err) {
        console.error(err)
        reject(err.message);
        resolve(false);
      } else {
        resolve(result);
      }
    });
  });
}
