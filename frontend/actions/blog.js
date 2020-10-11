import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createBlog = (blog, token, userId) => {
    return fetch(`${API}/blog?userId=${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
