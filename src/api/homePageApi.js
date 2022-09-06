export default async function homePageApi() {
  let response = await fetch(
    "http://ec2-54-180-89-108.ap-northeast-2.compute.amazonaws.com/view/main"
  );
  let json = await response.json();

  return json;
}
