import { PRODUCT_URL } from "../services/api/endPoints";
import { getAPI } from "./api/baseService";

export async function productList(limit) {
  // eslint-disable-next-line no-useless-catch
  try {
    const url = `${PRODUCT_URL}?limit=${limit}`;
    let result = await getAPI(url);
    return result.products;
  } catch (error) {
    throw error;
  }
}
