export const parseData = data => {
  if(data && data.length > 0) {
    return {
      headers: Object.keys(data[0]),
      rows: data.map(row => Object.values(row))
    }
  } else {
    return {
      headers: [],
      rows: [],
    }
  }
};