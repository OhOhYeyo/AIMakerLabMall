import axiosInstance from './axiosInstance';

export async function getProducts() {
  const { data } = await axiosInstance.get('/products');
  return data;
}

export async function getEducationList() {
  const { data } = await axiosInstance.get('/education');
  return data;
}
