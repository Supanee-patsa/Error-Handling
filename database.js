export function createReseservation(data, callback) {
  setTimeout(() => {
    const error = Math.random() > 0.5 ? 'Database error: Failed to create reservation' : null;
    if (error) {
      callback(error, null);
    } else {
      callback(null, { id: Date.now(), ...data});
    }
 }, 1000);
}

export function getReservations(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = Math.random() > 0.5 ? 'Database error: Failed to get reservations' : null;
      if (error) {
        reject(error);
      } else {
        resolve({ id: id, name: 'Sample Reservation' });
      }
    }, 1000);
  });
}
