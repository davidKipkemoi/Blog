import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat"> 
              Music
          </span>
          <span className="postCat">
             Life
          </span>
        </div>
        <span className="postTitle">
             SAFIRI SAVANNAH
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor 
      </p>
    </div>
  );
}