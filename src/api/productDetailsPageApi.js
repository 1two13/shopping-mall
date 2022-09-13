export default async function productDetailsPageApi({ productId }) {
  let response = await fetch(
    `http://ec2-54-180-89-108.ap-northeast-2.compute.amazonaws.com/view/products/${productId}`
  );
  let json = await response.json();

  return json;
}
