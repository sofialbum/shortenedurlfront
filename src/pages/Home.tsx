import React, { useState } from "react";

function HomePage() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [myUrl, setMyUrl] = useState('');

  const handleClick = async () => {
    const res = await fetch("http://localhost:8080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userLongUrl: longUrl }),
    });
    const data = await res.json();
    setShortUrl(data.id);
    const generatedUrl = `${window.location.origin}/${data.id}`
    setMyUrl(generatedUrl);
    console.log(data);
  };

  return (
    <>
      <h1>Short URL</h1>
      <h2>Create short & memorable links in seconds.</h2>
      <input type="text" placeholder="Enter the link here" value={longUrl} onChange={(e) => setLongUrl(e.target.value)}></input>
      <button type="submit" onClick={handleClick}>Generate Short Link</button>
      {shortUrl && <p>This is your shortened url: <a href={myUrl}>{myUrl}</a></p>}

    </>
  )
}

export default HomePage;