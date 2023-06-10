import fetchUrl from "./index";
import apiList from "./list";

const commonApi = ({ parameters = [], action, module = "", data, config }) => {
  const api = apiList[`${action}${module}`];
  if (api) {
    return fetchUrl({
      type: api.method,
      url: api.url(...parameters),
      data,
      config
    });
  }

  return Promise.reject(
    new Error("Oops!, I believe you have called wrong url.")
  );
};

export default commonApi;
