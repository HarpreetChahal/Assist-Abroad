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
      },
      listTask:{
        url:()=>"web/api/v1/appointment/",
        method:"post"
      },
      updateTask:{
        url:()=>"web/api/v1/appointment/task",
        method:"put"
      },
      updateProfile:{
        url:()=>"web/api/v1/user/profile",
        method:"put"
      },
      updateStatus:{
        url:()=>"web/api/v1/appointment/status",
        method:"put"
      },
      addFeedback:{
        url:()=>"web/api/v1/feedback/create",
        method:"post"
      },
      getProfile:{
        url:()=>"web/api/v1/user",
        method:"get"
      },
      uploadProfileImage:{
        url:()=>"web/api/v1/file/upload",
        method:"post"
      },
      forgotPassword:{
        url:()=>"web/api/v1/auth/forgot-password",
        method:"post"
      },
      forgotPasswordOTP:{
        url:()=>"web/api/v1/auth/verify-forgot-password-otp",
        method:"post"
      },
      resetPassword:{
        url:()=>"web/api/v1/auth/reset-password",
        method:"post"
      },
      getUserById:{
        url:()=>"web/api/v1/user/id",
        method:"post"
      },
  };
  export default apiList;
  