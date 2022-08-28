import { useState } from "react";
import "./App.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];
// 'Content' will be like this

// content[0] = Section 1
// content[1] = Section 2

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    // if there is no allTabs , OR if it is not Array
    // ** check it first, because it can be cause Error.

    return;
    // if it has no Array NOR allTabs, return nothing.
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
// defaultTab (= currentItem) is '0'

function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  // useTabs returns currentItem.
  // you should bring - useTabs(page Index, page content).
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
    // you should bring currentItem's content below the Tab change button.

    // each Section have a Button
    // as same as pagination, you can switch to the page that you'd like to see.
  );
}

export default App;
// class component use 'this'.
