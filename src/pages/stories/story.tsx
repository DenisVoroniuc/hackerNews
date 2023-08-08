import { Collapse, Typography } from "antd";
import { useState, useEffect } from "react";
import { getStoryById } from "shared/api/hackerNews/stories";
import type { Story as IStory } from "shared/api";
import { Comments } from "./comments";
import { Meta } from "./meta";

export const Story = ({ storyId }: { storyId: number }) => {
  const [story, setStory] = useState<IStory | undefined>();

  useEffect(() => {
    getStoryById({ storyId }).then(r => {
      if (r.data && r.data.url) {
        setStory(r.data);
      }
    });
  }, []);

  if (!story) {
    return null;
  }

  const { title, kids, id, url } = story;

  if (!url) {
    return null;
  }

  return (
    <Collapse>
      <Collapse.Panel
        header={
          <Typography.Text type="secondary">
            <a style={{ color: "inherit", textDecoration: "none" }} target="_blank" href={url}>
              {title}
            </a>
          </Typography.Text>
        }
        key={id}
      >
        <div>
          <Meta article={story} />
          {kids && <Comments commentIds={kids} />}
        </div>
      </Collapse.Panel>
    </Collapse>
  );
};
