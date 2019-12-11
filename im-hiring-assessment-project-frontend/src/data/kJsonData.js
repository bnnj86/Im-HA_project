let data = {
    server: "https://koreanjson.com/",
    userData: [],
    todo: [],
    fetch: () => {
      window
        .fetch(data.server + "users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          return response.json();
        })
        .then(json => {
          data.userData = json;
        });
    }
  };
  