import { SSRTest } from "./rq-ssr";

export default async function HelloPage() {
  return (
    <div>
      <h1>Hello World</h1>
      <SSRTest />
    </div>
  );
}
