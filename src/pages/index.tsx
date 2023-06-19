import { Routes, Route } from "react-router";
import { ReactElement, useEffect, useState } from "react";
import {
  getCommentById,
  getStoriesIdList,
  getStoryById,
} from "shared/api/hackerNews/stories";
import { Avatar, Card, Collapse, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import type { Story as IStory } from "shared/api";
import { utils } from "shared/ui";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Stories />} />
    </Routes>
  );
};

export const Stories = () => {
  const [storyIds, setStoryIds] = useState<number[] | undefined>(undefined);

  useEffect(() => {
    getStoriesIdList().then((r) => setStoryIds(r.data));
  }, []);
  if (!storyIds) {
    return null;
  }
  return (
    <>
      {storyIds.slice(0, 12).map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
};

const Story = ({ storyId }: { storyId: number }): ReactElement<any, any> => {
  const [story, setStory] = useState<IStory | undefined>();
  useEffect(() => {
    getStoryById({ storyId }).then((r) => {
      if (r.data && r.data.url) {
        setStory(r.data);
      }
    });
  }, []);
  if (!story) {
    return <></>;
  }

  const { title, kids, id, url } = story;
  if (!url) {
    return <></>;
  }
  return (
    <Collapse>
      <Collapse.Panel
        header={
          <Typography.Text type="secondary">
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
              to={url}
            >
              {title}
            </Link>
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

export const Comments = ({ commentIds }: any) => {
  return (
    <Card>
      {commentIds.slice(0, 2).map(
        (id: any) =>
          id && (
            <div key={id}>
              <Comment commentId={id} />
            </div>
          )
      )}
    </Card>
  );
};
export const Comment = ({ commentId }: any) => {
  const [comment, setComment] = useState<any>({});

  useEffect(() => {
    getCommentById({ commentId }).then(
      ({ data }) => data && data.type && setComment(data)
    );
  }, []);

  return (
    <div>
      {comment && !comment.deleted && (
        <>
          <Meta article={comment} />
          <Typography
            dangerouslySetInnerHTML={utils.html.createMarkup(comment.text)}
          />
          {comment.kids && <Comments commentIds={comment.kids} />}
        </>
      )}
    </div>
  );
};
export const Meta = ({ article: { by, time } }: { article: IStory }) => {
  const date = new Date(time * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      {by && (
        <>
          <Card>
            <Card.Meta
              avatar={<Avatar size={64} icon={<UserOutlined />} />}
              title={`${by} ${date}`}
              description="This is the description"
            />
          </Card>
        </>
      )}
    </>
  );
};
