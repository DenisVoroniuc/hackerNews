import { Typography } from "antd";
import { Comments } from "./comments";
import { useState, useEffect } from "react";
import { getCommentById } from "shared/api/hackerNews/stories";
import { utils } from "shared/ui";
import { Meta } from "./meta";

export const Comment = ({ commentId }: any) => {
  const [comment, setComment] = useState<any>({});

  useEffect(() => {
    getCommentById({ commentId }).then(({ data }) => data && data.type && setComment(data));
  }, []);

  return (
    <div>
      {comment && !comment.deleted && (
        <>
          <Meta article={comment} />
          <Typography dangerouslySetInnerHTML={utils.html.createMarkup(comment.text)} />
          {comment.kids && <Comments commentIds={comment.kids} />}
        </>
      )}
    </div>
  );
};
