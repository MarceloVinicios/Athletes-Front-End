export const API_URL = 'http://localhost:4000';

export function GetAllCommentOfPublication(publication_id, token) {
  return {
    url: API_URL + `/comment/${publication_id}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },
  };
}

export function PostComment(body, token) {
  return {
    url: API_URL + '/comment',
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  };
}

export function UpdateComment(id, body, token) {
  return {
    url: API_URL + `/comment/${id}`,
    options: {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
}

export function DeleteComment(id, token) {
  return {
    url: API_URL + `/comment/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },
  };
}
