import { Card } from "antd";
import { Comment } from "./comment";
import { Collapse } from "antd";
import type { Comment as IComment } from "shared/api";

export type Props = {
  commentIds: Array<IComment["id"]>;
};

export const Comments = ({ commentIds }: Props) => {
  return (
    <Card>
      <Collapse defaultActiveKey={commentIds}>
        {commentIds.map(
          (id: any) =>
            id && (
              <Collapse.Panel key={id} header={"Comments"}>
                <Comment commentId={id} />
              </Collapse.Panel>
            ),
        )}
      </Collapse>
    </Card>
  );
};
