type ApiUrl = string

const getJson = async <T>(response: Response): Promise<T> => await response.json()

const jsonRequestInit = (method: string, option?: RequestInit): RequestInit => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    ...option
  }
}

export const _get = async <T>(apiUrl: ApiUrl, option?: RequestInit): Promise<T> => await fetch(apiUrl, jsonRequestInit('GET', option)).then(async response => await getJson<T>(response))
export const _post = async <T>(apiUrl: ApiUrl, option?: RequestInit): Promise<T> => await fetch(apiUrl, jsonRequestInit('POST', option)).then(async response => await getJson<T>(response))
export const _delete = async <T>(apiUrl: ApiUrl, option?: RequestInit): Promise<T> => await fetch(apiUrl, jsonRequestInit('DELETE', option)).then(async response => await getJson<T>(response))
export const _put = async <T>(apiUrl: ApiUrl, option?: RequestInit): Promise<T> => await fetch(apiUrl, jsonRequestInit('PUT', option)).then(async response => await getJson<T>(response))
export const _patch = async <T>(apiUrl: ApiUrl, option?: RequestInit): Promise<T> => await fetch(apiUrl, jsonRequestInit('PATCH', option)).then(async response => await getJson<T>(response))
