import http from "./httpServices";

export function getOneComments(id) {
  return http.get(`/comments/${id}`);
}
