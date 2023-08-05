import React,{ useState }  from 'react'

export default function InfoPage() {
    

    const [videoUrls, setVideoUrls] = useState(['https://www.youtube.com/watch?v=4hO49G2OmZ8', 'https://youtube.com/shorts/CXwHb79LnKo?feature=share', '', '']);
  
    const handleUrlChange = (index, url) => {
      const newVideoUrls = [...videoUrls];
      newVideoUrls[index] = url;
      setVideoUrls(newVideoUrls);
    };
  
  return (
    <div>
      <h1>About students</h1>
      <div>
        {/* Section 1 */}
        {/* <input
          type="text"
          value={videoUrls[0]}
          onChange={(e) => handleUrlChange(0, e.target.value)}
        /> */}
       <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
      </div>
      <br/><br/><br/><br/>
      <h1> students thought</h1>
      <div>
        {/* Section 1 */}
        {/* <input
          type="text"
          value={videoUrls[0]}
          onChange={(e) => handleUrlChange(0, e.target.value)}
        /> */}
       <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
      </div>

      <br/><br/><br/><br/>
      <h1> students</h1>
      <div>
        {/* Section 1 */}
        {/* <input
          type="text"
          value={videoUrls[0]}
          onChange={(e) => handleUrlChange(0, e.target.value)}
        /> */}
       <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
      </div>

      {/* Repeat the pattern for the remaining sections (3 and 4) */}
    </div>
  )
}
