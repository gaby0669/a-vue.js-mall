import { request } from "./request";


//左侧边栏
export function getAllCategory() {
  return request({
    url: "/category"
  });
}

export function getSubCategory(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  });
}
