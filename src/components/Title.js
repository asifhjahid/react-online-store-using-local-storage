
export default function Title({ title, description }) {
  document.querySelector('title').innerHTML = title;
  return null;
}