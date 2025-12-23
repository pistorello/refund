import SearchIcon from "./assets/images/icons/magnifying-glass.svg?react";

import Button from "./components/button";
import IconButton from "./components/icon-button";
import InputText from "./components/input-text";
import Text from "./components/text";

export default function App() {
  return (
    <main className="space-y-5 px-4">
      <div className="flex flex-col gap-2">
        <Text variant="heading-large">Hello World!</Text>
        <Text variant="heading-medium">Hello World!</Text>
        <Text variant="heading-small">Hello World!</Text>
        <Text variant="label-small">Hello World!</Text>
        <Text variant="paragraph-medium">Hello World!</Text>
      </div>

      <div className="flex gap-3">
        <Button>Button</Button>
        <Button disabled>Button</Button>
      </div>

      <div className="flex gap-3">
        <IconButton icon={SearchIcon} />
        <IconButton icon={SearchIcon} disabled />
      </div>

      <div>
        <InputText variant="primary" placeholder="Título...">
          Título
        </InputText>
      </div>
    </main>
  );
}
