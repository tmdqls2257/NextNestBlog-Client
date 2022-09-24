export type BlogModel = {
  title: string;
  contents: string;
  description: string;
  deletedAt?: null;
  likeCount: number;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export const BlogData: BlogModel[] = [
  {
    id: "d0482a90-063f-4b84-8d77-9e937e70a076",
    createdAt: "2022-09-19T04:15:27.034Z",
    updatedAt: "2022-09-19T04:15:27.034Z",
    title: "sdsd",
    description: "",
    contents: "<p>sdsd</p>",
    likeCount: 0,
  },
  {
    id: "2206b4a8-a6f0-4024-8f58-dae0431c4ea7",
    createdAt: "2022-09-20T05:15:39.306Z",
    updatedAt: "2022-09-20T05:15:39.306Z",
    title: "descriptiontitle",
    description: "description",
    contents: "<p>sadsadas</p>",
    likeCount: 0,
  },
  {
    id: "76ff4e09-b275-4967-abb8-c2ba154cb02c",
    createdAt: "2022-09-21T05:48:21.846Z",
    updatedAt: "2022-09-21T05:48:21.846Z",
    title: "배포 테스트",
    description: "배포한 상태에서의 글을 작성했습니다.",
    contents: "<p>제발 되거라</p>",
    likeCount: 0,
  },
];
