import { ComingSoon, LoadingScreen } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <LoadingScreen />
      <ComingSoon />
    </main>
  );
}
