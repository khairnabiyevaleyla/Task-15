import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { api } from "./api";

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export function useRequest(key, config, options) {
  const {
    module,
    method = "GET",
    headers: customHeaders,
    cacheOnly,
    ...rest
  } = config;

  const fetcher = async () => {
    if (cacheOnly) {
      return Promise.resolve();
    }

    const response = await axiosInstance({
      method,
      url: `${api[module].baseUrl}/${api[module][key]}`,
      headers: { ...customHeaders },
      ...rest,
    });

    return response.data;
  };

  return useQuery({
    queryKey: [module, key, rest.params],
    queryFn: fetcher,
    ...options,
  });
}

export function useRequestMutation(key, config, options) {
  const queryClient = useQueryClient();
  const {
    module,
    method = "POST",
    headers: customHeaders,
    axiosResponse,
    ...rest
  } = config;

  const mutationFn = async (args) => {
    const { body, dynamicValue, params, paramsSerializer, cacheOnly } = args;

    if (cacheOnly) {
      return Promise.resolve();
    }

    const requestOptions = {
      method,
      url: `${api[module].baseUrl}/${api[module][key]}`.replace(
        "{{id}}",
        dynamicValue || ""
      ),
      headers: { ...customHeaders },
      params,
      data: body,
      paramsSerializer,
      ...rest,
    };

    const response = await axiosInstance(requestOptions);
    return axiosResponse ? response.data : response.data;
  };

  return useMutation({
    mutationFn,
    ...options,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: [module] });

      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
}
