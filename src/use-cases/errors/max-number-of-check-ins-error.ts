export class MaxNumberOfCheckInsError extends Error {
  constructor() {
    super('Max number pf check-ins reached.')
  }
}
