import Homebar from "@/components/homebar";

export default async function Home() {
  const delay = (s: number | undefined) => new Promise(resolve => setTimeout(resolve, s))
  await delay(2000)

  return (
    <Homebar />
  );
}
