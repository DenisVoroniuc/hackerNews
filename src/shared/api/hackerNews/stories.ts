import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";
import type { Comment, Story } from "./models";

export const newStoriesUrl = "/topstories.json";
export const itemUrl = "/item/";

export const getStoriesIdList = (): AxiosPromise<number[]> => {
  return apiInstance.get(newStoriesUrl);
};

export type getStoryByIdParams = {
  storyId: number;
};

export const getStoryById = ({ storyId }: getStoryByIdParams): AxiosPromise<Story> => {
  return apiInstance.get(`${itemUrl}/${storyId}.json`);
};

export type getCommentByIdParams = {
  commentId: number;
};

export const getCommentById = ({ commentId }: getCommentByIdParams): AxiosPromise<Comment> => {
  return apiInstance.get(`${itemUrl}/${commentId}.json`);
};
