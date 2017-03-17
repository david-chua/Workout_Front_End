function AuthInterceptor(AuthTokenFactory){
  return {
    request: addtoken
  }

  function addToken(config){
    var token = AuthTokenFactory.getToken()

    if (token){
      config.headers = config.headers || {}
      config.headers.Authorization `Bearer ${token}`
    }

    return config
  }
}
