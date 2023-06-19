import compose from "compose-function";
import { withQuery } from "./with-query";
import { withRouter } from "./with-router";

export const withProviders = compose(withQuery, withRouter);
