import { useState, useEffect } from "react";
import { getStoriesIdList } from "shared/api/hackerNews/stories";
import { Story } from "./story";

export const Stories = () => {
  const [storyIds, setStoryIds] = useState<number[] | undefined>(undefined);

  useEffect(() => {
    getStoriesIdList().then(r => setStoryIds(r.data));
  }, []);
  if (!storyIds) {
    return null;
  }
  return (
    <>
      {storyIds.slice(0, 30).map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
};
