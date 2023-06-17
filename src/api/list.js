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
      getQuestionnaire:{
        url:()=>"web/api/v1/questionnaire",
        method:"post"
      },
      createPayment:{
        url:()=>"web/api/v1/payment/create",
        method:"post"
      },
      arrival:{
        url:()=>"web/api/v1/user/pre-arrival",
        method:"post"
      },
      becomeAgent:{
        url:()=>"web/api/v1/user/agent-form",
        method:"post"
      }
  };
  export default apiList;
  