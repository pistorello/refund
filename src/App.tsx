import Text from "./components/text";

export default function App() {
  return (
    <main>
      <div className="flex flex-col gap-2">
        <Text variant="heading-large">Hello World!</Text>
        <Text variant="heading-medium">Hello World!</Text>
        <Text variant="heading-small">Hello World!</Text>
        <Text variant="label-small">Hello World!</Text>
        <Text variant="paragraph-medium">Hello World!</Text>
      </div>

      <div className="flex flex-col gap-10"></div>
    </main>
  );
}
