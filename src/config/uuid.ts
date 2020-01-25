import uuidv4 from "uuid/v4";

const getUuid = () => {
  let uuid = localStorage.getItem('user_uuid')
  if (!uuid) {
    uuid = uuidv4()
    localStorage.setItem('user_uuid', uuid)
  }
  return uuid
}

export default getUuid
