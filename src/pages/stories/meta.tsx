import { UserOutlined } from "@ant-design/icons";
import { Card, Avatar } from "antd";
import { utils } from "shared/ui";
import type { Story as IStory } from "shared/api";

export const Meta = ({ article }: { article: IStory }) => {
  const { by, time, type } = article;

  const date = utils.date.createDate(time);
  return (
    <>
      {by && (
        <Card>
          <Card.Meta
            avatar={<Avatar size={64} icon={<UserOutlined />} />}
            title={`${by} ${date}`}
            description={`type ${type}`}
          />
        </Card>
      )}
    </>
  );
};
