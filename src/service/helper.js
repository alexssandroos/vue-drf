/**
 * @type {Function}
 */
export const promise = response => {
  return new Promise(function (resolve) {
    window.setTimeout(() => resolve(response), 1000)
  })
}
export const then = response => response.data
