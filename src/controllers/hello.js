
export function sayHello (name) {
  const msg = `Hello ${name}, I am the backend.`
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg)
    }, 500)
  })
}
