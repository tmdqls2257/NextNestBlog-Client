import Button from "../../common/button/button";
import React, { useState } from "react";

// import Title from "../components/Title";

const Tag = () => {
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    // const updatedTagList = [...tagList];
    // updatedTagList.push(tagItem);
    setTagList((tagList) => [...tagList, tagItem]);
    setTagItem("");
  };

  const deleteTagItem = (e: React.MouseEvent) => {
    // const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const deleteTagItem =
      e.currentTarget.parentElement?.firstChild?.textContent;

    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  return (
    <section className="p-3 h-full">
      <div className="flex items-center flex-wrap h-12 m-3 px-3 border bg-white focus-within:border-violet rounded-md">
        {tagList.map((tagItem, index) => {
          return (
            <div
              className="flex items-center justify-center p-1 m-1 bg-violet text-sm text-white rounded-md"
              key={index}
            >
              <span>{tagItem}</span>
              <button className="p-1" onClick={deleteTagItem}>
                {"X"}
              </button>
            </div>
          );
        })}
        <input
          type="text"
          placeholder="Press enter to add tags"
          tabIndex={2}
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
          className={"inline-flex w-40 border-0 outline-none"}
        />
      </div>
    </section>
  );
};

export default Tag;
