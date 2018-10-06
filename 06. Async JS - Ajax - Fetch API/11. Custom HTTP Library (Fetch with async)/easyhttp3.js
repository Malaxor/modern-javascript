/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/

class EasyHTTP {
   
  // Make an HTTP GET Request 
  async get(url) {

    const response = await fetch(url);
    const res_data = await response.json();
    return res_data; 
  }

  // Make an HTTP POST Request
  async post(url, data) {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const res_data = await response.json();
    return res_data;
  }

  // Make an HTTP PUT Request
  async put(url, data) {

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const res_data = await response.json();
    return res_data;
  }

  // Make an HTTP DELETE Request
  async delete(url) {

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const res_data = await 'resource deleted';
    return res_data;
  }
} 