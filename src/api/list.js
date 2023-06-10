const apiList = {
    // Authentication APIs
    register: {
      url: () => "web/api/v1/auth/register",
      method: "post"
    },
    login: {
        url: () => "web/api/v1/auth/login",
        method: "post"
      },
      getMembership: {
        url: () => "web/api/v1/membership/",
        method: "get"
      },
      getMaster: {
        url: () => "web/api/v1/master/",
        method: "post"
      },
  };
  export default apiList;
  