import axios from "axios";

export const apiClient = async (method: string,url_path:string, payload?: object) => {
  try {
    if (method == "get") {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${url_path}`
      );
      const data=await res.data;
      return data;
    } else {
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}${url_path}`,payload
          );
          const data=await res.data;
          return data;
    }
  } catch (error) {
    console.log(error);
    throw error;
}}
