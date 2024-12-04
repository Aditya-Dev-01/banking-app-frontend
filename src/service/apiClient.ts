import axios from "axios";

export const apiClient = async (method: string,url_path:string, payload?: object) => {
  try {
    if (method == "get") {
      const res = await axios.get(
        // `${"http://13.61.105.22:3000/api/account"}${url_path}`
         `${"https://fakestoreapi.com/products/"}`
       
      );
      const data=await res.data;
      console.log('data',data);
      return data;
    } else {
        const res = await axios.post(
            `${"http://13.61.105.22:3000/api/account"}${url_path}`,payload
          );
          const data=await res.data;
          return data;
    }
  } catch (error) {
    console.log(error);
    throw error;
}}
