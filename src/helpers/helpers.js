export function serialize(obj) {
  let queryString = ''
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`
  }

  return queryString
}

export function mapFields(options) {
  const object = {}
  for (let index = 0; index < options.fields.length; index++) {
    const field = [options.fields[index]]
    object[field] = {
      get() {
        return this.$store.state[options.base][field]
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value })
      },
    }
  }
  return object
}
