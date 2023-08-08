import { Card } from "antd";
import { Comment } from "./comment";

export const Comments = ({ commentIds }: any) => {
  return (
    <Card>
      {commentIds.map(
        (id: any) =>
          id && (
            <div key={id}>
              <Comment commentId={id} />
            </div>
          ),
      )}
    </Card>
  );
};
